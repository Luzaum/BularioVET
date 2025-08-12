import { Drug, Dose } from '../types';

// Heurísticas para identificar cabeçalhos e mapear seções de texto
const HEADERS_MAP: Record<string, keyof Pick<Drug,
  'clinicalIndications' | 'mechanism' | 'pharmacokinetics' | 'contraindications' | 'adverseEffects' |
  'interactions' | 'monitoring' | 'evidence'
>> = {
  'indicações clínicas': 'clinicalIndications',
  'indicações clínicas de cada fármaco': 'clinicalIndications',
  'mecanismo de ação': 'mechanism',
  'mecanismo de ação e farmacodinâmica': 'mechanism',
  'farmacodinâmica': 'mechanism',
  'farmacocinética': 'pharmacokinetics',
  'contraindicações': 'contraindications',
  'contraindicações clínicas de cada fármaco': 'contraindications',
  'efeitos adversos': 'adverseEffects',
  'interações medicamentosas': 'interactions',
  'o que devo monitorar no paciente que toma esse medicamento': 'monitoring',
  'monitoramento': 'monitoring',
  'evidências da sua eficácia de acordo com estudos e consensos recentes': 'evidence',
  'evidências': 'evidence',
};

const OPTIONAL_HELPERS = {
  dilutionAndAdministration: [
    'como diluir (o frasco)',
    'como diluir o medicamento já na seringa de aplicação',
    'como diluir',
    'obter doses de cri',
    'vias de administração',
    'tempo de uso adequado, frequência de uso',
  ],
  doses: [
    'doses adequadas',
    'dose',
  ],
  class: [
    'classificação funcional',
  ],
  names: [
    'nomes comerciais e outros nomes',
  ],
  highlights: [
    'destaques clínicos',
  ]
};

function normalize(s: string): string {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitDrugsBlocks(text: string): string[] {
  // Divide por itens numerados (ex: "1. Nome", "2. Nome") preservando o conteúdo
  const lines = text.split(/\r?\n/);
  const blocks: string[] = [];
  let current: string[] = [];
  const startRegex = /^\s*\d+\s*\.[\s-]+/; // "1. ", "2. -"
  lines.forEach((line) => {
    if (startRegex.test(line) && current.length > 0) {
      blocks.push(current.join('\n').trim());
      current = [line];
    } else {
      current.push(line);
    }
  });
  if (current.length > 0) blocks.push(current.join('\n').trim());
  return blocks.filter(Boolean);
}

function parseNameAndAliases(block: string): { name: string; commercial: string[] } {
  // Primeira linha após o número usualmente contém o nome
  const firstLine = block.split(/\r?\n/).find(l => l.trim()) || '';
  const name = firstLine.replace(/^\s*\d+\s*\.[\s-]+/, '').trim();
  // Nomes comerciais podem aparecer na seção específica; serão adicionados depois também
  return { name, commercial: [] };
}

function extractSections(block: string): Record<string, string> {
  // Cria um dicionário: header -> conteúdo
  const sections: Record<string, string> = {};
  const lines = block.split(/\r?\n/);
  let currentHeader = 'cabecalho';
  sections[currentHeader] = [] as unknown as string;

  const allHeaderKeys = [
    ...Object.keys(HEADERS_MAP),
    ...OPTIONAL_HELPERS.dilutionAndAdministration,
    ...OPTIONAL_HELPERS.doses,
    ...OPTIONAL_HELPERS.class,
    ...OPTIONAL_HELPERS.names,
    ...OPTIONAL_HELPERS.highlights,
  ].map(normalize);

  lines.forEach((raw) => {
    const line = raw.trim();
    const nline = normalize(line);
    const matchedHeader = allHeaderKeys.find(h => nline.startsWith(h));
    if (matchedHeader) {
      currentHeader = matchedHeader;
      if (!sections[currentHeader]) sections[currentHeader] = '';
    } else {
      if (!sections[currentHeader]) sections[currentHeader] = '';
      sections[currentHeader] += (sections[currentHeader] ? '\n' : '') + line;
    }
  });

  return sections;
}

function parseCommercialNames(sectionText?: string): string[] {
  if (!sectionText) return [];
  // Aceita lista com bullet ou linhas
  const joined = sectionText.replace(/•/g, '\n').replace(/^-\s*/gm, '');
  const items = joined.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  return items.map(s => s.replace(/[*®™]+/g, '').trim());
}

function parseClass(text?: string): string {
  if (!text) return '';
  return text.split(/\r?\n/).map(s => s.trim()).filter(Boolean)[0] || '';
}

function parseHighlights(text?: string): string[] {
  if (!text) return [];
  const joined = text.replace(/•/g, '\n');
  return joined.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
}

function parseDoses(text?: string): Dose[] {
  if (!text) return [];
  const doses: Dose[] = [];
  const block = text.replace(/•/g, '\n');
  const lines = block.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  const speciesAliases: Record<string, string> = {
    'cão': 'Cão', 'caes': 'Cão', 'cães': 'Cão', 'cao': 'Cão',
    'gato': 'Gato', 'gatos': 'Gato',
    'equino': 'Equino', 'equinos': 'Equino', 'cavalos': 'Equino', 'cavalo': 'Equino',
  };
  const speciesRegex = /(c[aã]es|caes|c[oã]es|c[aã]o|cão|cao|gatos?|equinos?|cavalos?)/i;

  lines.forEach(line => {
    const speciesMatch = line.match(speciesRegex);
    const speciesRaw = speciesMatch ? normalize(speciesMatch[0]) : '';
    const species = speciesAliases[speciesRaw] || (speciesMatch ? speciesMatch[0] : 'Multiespécies');
    // Extrai dose como o que vier após ':'
    const parts = line.split(/:\s*/);
    const label = parts[0] || '';
    const rest = parts.slice(1).join(': ') || line;
    const doseValue = rest.trim();
    doses.push({ species, indication: 'Padrão', dose: doseValue, route: 'N/A', interval: 'N/A', notes: '' });
  });
  return doses;
}

function buildTooltipFrom(text?: string, fallback?: string): string | undefined {
  if (!text && !fallback) return undefined;
  const source = (text || fallback || '').trim();
  if (!source) return undefined;
  // Gera uma primeira frase resumida (até ~160 chars)
  const oneLine = source.replace(/\s+/g, ' ').slice(0, 160).trim();
  return oneLine;
}

export function parseDrugsFromText(rawText: string): Drug[] {
  if (!rawText || !rawText.trim()) return [];

  const blocks = splitDrugsBlocks(rawText);

  const parsed: Drug[] = blocks.map((block) => {
    const { name } = parseNameAndAliases(block);
    const sections = extractSections(block);

    const namesText = sections[OPTIONAL_HELPERS.names.find(h => sections[h]) || ''] || '';
    const classText = sections[OPTIONAL_HELPERS.class.find(h => sections[h]) || ''] || '';
    const highlightText = sections[OPTIONAL_HELPERS.highlights.find(h => sections[h]) || ''] || '';

    // Campos principais
    const clinicalText = sections[Object.keys(HEADERS_MAP).find(h => HEADERS_MAP[h] === 'clinicalIndications' && sections[h]) || ''] || '';
    const mechText = sections[Object.keys(HEADERS_MAP).find(h => HEADERS_MAP[h] === 'mechanism' && sections[h]) || ''] || '';
    const pkText = sections['farmacocinética'] || '';
    const contraText = sections['contraindicações'] || sections['contraindicações clínicas de cada fármaco'] || '';
    const advText = sections['efeitos adversos'] || '';
    const interText = sections['interações medicamentosas'] || '';
    const monText = sections['o que devo monitorar no paciente que toma esse medicamento'] || sections['monitoramento'] || '';
    const evidText = sections['evidências da sua eficácia de acordo com estudos e consensos recentes'] || sections['evidências'] || '';

    const dilutionExtras: string[] = [];
    OPTIONAL_HELPERS.dilutionAndAdministration.forEach(h => {
      if (sections[h]) dilutionExtras.push(sections[h]);
    });
    const dilutionText = dilutionExtras.filter(Boolean).join('\n\n');

    const doseTextKey = OPTIONAL_HELPERS.doses.find(h => sections[h]);
    const doses = parseDoses(doseTextKey ? sections[doseTextKey] : '');

    const drug: Drug = {
      name: name || 'Fármaco sem nome',
      sector: 'Bulário Principal',
      class: parseClass(classText),
      commercialNames: parseCommercialNames(namesText),
      highlights: parseHighlights(highlightText),
      clinicalIndications: { text: clinicalText, tooltip: buildTooltipFrom(clinicalText, 'Indicações mapeadas automaticamente do texto importado.') },
      mechanism: { text: mechText, tooltip: buildTooltipFrom(mechText, 'Resumo mecanístico.') },
      pharmacokinetics: { text: pkText, tooltip: buildTooltipFrom(pkText, 'Resumo PK.') },
      doses,
      dilutionAndAdministration: dilutionText ? { text: dilutionText, tooltip: buildTooltipFrom(dilutionText, 'Diluição/Administração.') } : undefined,
      contraindications: { text: contraText, tooltip: buildTooltipFrom(contraText, 'Pontos críticos de segurança.') },
      adverseEffects: { text: advText, tooltip: buildTooltipFrom(advText, 'Principais eventos adversos.') },
      interactions: { text: interText, tooltip: buildTooltipFrom(interText, 'Interações relevantes.') },
      monitoring: { text: monText, tooltip: buildTooltipFrom(monText, 'O que monitorar.') },
      evidence: { text: evidText, tooltip: buildTooltipFrom(evidText, 'Notas de evidência.') },
    };

    return drug;
  });

  return parsed.filter(d => d.name && d.name !== 'Fármaco sem nome');
}


