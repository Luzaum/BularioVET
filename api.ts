
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { SuggestedDrug, Drug } from './types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
        throw new Error('Houve um erro ao processar sua solicitação. Tente novamente.');
    }
}
