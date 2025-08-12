
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { SuggestedDrug, Drug } from './types';

// Verifica se a API key está disponível
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn('Gemini API Key não configurada. A funcionalidade de IA será desabilitada.');
}

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        drugName: { type: Type.STRING, description: 'O nome exato do medicamento da lista fornecida.' },
        justification: { type: Type.STRING, description: 'Justificativa breve para a sugestão deste medicamento para a condição.' },
        dose: { type: Type.STRING, description: 'Dose típica para a condição.' },
        contraindication: { type: Type.STRING, description: 'Uma contraindicação crítica a ser observada.' },
        interactions: { type: Type.STRING, description: 'Interações medicamentosas críticas ou se o fármaco não pode ser misturado com uma classe específica de medicamentos (ex: AINEs com corticoides). Mencionar "Nenhuma interação crítica conhecida" se aplicável.' }
      },
      required: ['drugName', 'justification', 'dose', 'contraindication', 'interactions']
    }
  };

export async function findDrugsForCondition(conditions: string[], availableDrugs: Drug[]): Promise<SuggestedDrug[]> {
    // Se a API key não estiver configurada, retorna uma resposta padrão
    if (!ai) {
        console.warn('API não configurada. Retornando sugestões básicas.');
        return availableDrugs.slice(0, 3).map(drug => ({
            drugName: drug.name,
            justification: 'Medicamento disponível no formulário',
            dose: drug.doses[0]?.dose || 'Consulte o formulário',
            contraindication: drug.contraindications?.text || 'Consulte o formulário',
            interactions: drug.interactions?.text || 'Consulte o formulário'
        }));
    }

    const drugNames = availableDrugs.map(d => d.name).join(', ');

    const systemInstruction = `Você é um assistente especialista em farmacologia veterinária. Com base na lista de condições clínicas fornecida, sugira até 5 dos medicamentos mais relevantes APENAS da seguinte lista de fármacos disponíveis: ${drugNames}. Para cada sugestão, forneça uma justificativa concisa, a dose padrão para uma das condições, uma contraindicação principal e interações medicamentosas críticas. O usuário é um veterinário qualificado. A resposta DEVE ser em português do Brasil. Retorne um array vazio se nenhum medicamento relevante for encontrado na lista. Priorize os fármacos mais indicados e seguros para as condições listadas.`;
    
    const contents = `Analise a seguinte lista de condições clínicas e forneça sugestões de medicamentos com base nas regras: "${conditions.join(', ')}"`;

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents,
            config: {
                systemInstruction,
                responseMimeType: 'application/json',
                responseSchema
            }
        });

        const resultText = response.text.trim();
        if (!resultText) {
            console.warn("Gemini returned an empty response.");
            return [];
        }
        
        const resultJson = JSON.parse(resultText);
        return resultJson as SuggestedDrug[];

    } catch (e) {
        console.error("Error calling Gemini API:", e);
        // Em caso de erro, retorna sugestões básicas
        return availableDrugs.slice(0, 3).map(drug => ({
            drugName: drug.name,
            justification: 'Medicamento disponível no formulário',
            dose: drug.doses[0]?.dose || 'Consulte o formulário',
            contraindication: drug.contraindications?.text || 'Consulte o formulário',
            interactions: drug.interactions?.text || 'Consulte o formulário'
        }));
    }
}
