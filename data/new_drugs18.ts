import { Drug } from '../types';

export const newDrugs18: Drug[] = [
  {
    name: 'Omeprazol',
    sector: 'Gastroenterologia',
    class: 'Inibidor da bomba de prótons; Antiulceroso.',
    commercialNames: ['Prilosec®', 'Omeprazol'],
    highlights: [
      'Inibidor da bomba de prótons.',
      'Reduz secreção ácida gástrica.',
      'Seguro para uso prolongado.',
      'Eficaz para úlceras e refluxo.'
    ],
    clinicalIndications: { text: 'Úlcera gástrica. Refluxo gastroesofágico. Gastrite. Esofagite. Hiperacidez.', tooltip: 'Especialmente útil para úlceras gástricas e refluxo gastroesofágico.' },
    mechanism: { text: 'Inibe irreversivelmente a bomba H+/K+-ATPase. Reduz secreção ácida gástrica. Promove cicatrização.', tooltip: 'Bloqueia irreversivelmente a bomba de prótons, reduzindo secreção ácida.' },
    pharmacokinetics: { text: 'Absorção oral variável. Início: 1-2h. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Úlcera gástrica', dose: '0,5-1 mg/kg', route: 'PO', interval: '24h', notes: 'Duração: 4-8 semanas. Para úlceras.' },
      { species: 'Cão', indication: 'Refluxo', dose: '0,5-1 mg/kg', route: 'PO', interval: '24h', notes: 'Duração: 2-4 semanas. Para refluxo.' },
      { species: 'Gato', indication: 'Úlcera gástrica', dose: '0,5-1 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Duração: 4-8 semanas.' },
      { species: 'Gato', indication: 'Refluxo', dose: '0,5-1 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Duração: 2-4 semanas.' }
    ],
    dilutionAndAdministration: { text: 'PO: 30 min antes das refeições. Cápsulas: não esmagar. Manter horário consistente.', tooltip: 'Administrar 30 min antes das refeições. Não esmagar cápsulas.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Gastrointestinais (náusea, diarreia). Raramente: hepatotoxicidade. Cefaleia.', tooltip: 'Efeitos gastrointestinais são os mais comuns. Geralmente bem tolerado.' },
    interactions: { text: 'Reduz absorção de ferro, cálcio, vitamina B12. Aumenta níveis de digoxina, fenitoína.', tooltip: 'Pode reduzir absorção de minerais. Aumenta níveis de alguns fármacos.' },
    monitoring: { text: 'Sinais de melhora. Função hepática. Resposta clínica. Duração do tratamento.', tooltip: 'Observar sinais de melhora. Monitorar função hepática.' },
    evidence: { text: 'Inibidor da bomba de prótons eficaz. Seguro para uso prolongado.', tooltip: 'Padrão-ouro para úlceras gástricas. Inibidor da bomba de prótons bem estabelecido.' }
  },
  {
    name: 'Ondansetrona',
    sector: 'Gastroenterologia',
    class: 'Antagonista 5-HT3; Antiemético.',
    commercialNames: ['Zofran®', 'Ondansetrona'],
    highlights: [
      'Antiemético específico para 5-HT3.',
      'Eficaz para náusea pós-quimioterapia.',
      'Seguro para uso IV.',
      'Boa tolerabilidade.'
    ],
    clinicalIndications: { text: 'Náusea pós-quimioterapia. Vômito pós-operatório. Náusea aguda. Gastroenterite.', tooltip: 'Especialmente útil para náusea pós-quimioterapia.' },
    mechanism: { text: 'Antagonista seletivo do receptor 5-HT3. Inibe vômito central e periférico. Bloqueia quimiorreceptores.', tooltip: 'Bloqueia receptores 5-HT3 no centro do vômito e trato GI.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 30-60 min PO, 5-15 min IV. Meia-vida: 3-5h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Náusea pós-quimioterapia', dose: '0,5-1 mg/kg', route: 'IV/PO', interval: '8-12h', notes: 'Duração: conforme necessário. Para náusea.' },
      { species: 'Cão', indication: 'Vômito pós-operatório', dose: '0,5-1 mg/kg', route: 'IV', interval: '8-12h', notes: 'Para vômito pós-operatório. Monitorar resposta.' },
      { species: 'Gato', indication: 'Náusea pós-quimioterapia', dose: '0,5-1 mg/kg', route: 'IV/PO', interval: '8-12h', notes: 'Bem tolerado. Para náusea.' },
      { species: 'Gato', indication: 'Vômito pós-operatório', dose: '0,5-1 mg/kg', route: 'IV', interval: '8-12h', notes: 'Bem tolerado. Para vômito pós-operatório.' }
    ],
    dilutionAndAdministration: { text: 'IV: infusão lenta. PO: com ou sem alimentos. Manter horário consistente.', tooltip: 'IV: infusão lenta. PO: pode ser administrado com alimentos.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Cefaleia. Constipação. Raramente: arritmias. Reações alérgicas.', tooltip: 'Cefaleia é o efeito adverso mais comum. Geralmente bem tolerado.' },
    interactions: { text: 'Poucas interações significativas. Pode afetar metabolismo de alguns fármacos.', tooltip: 'Poucas interações conhecidas. Monitorar uso concomitante.' },
    monitoring: { text: 'Frequência de vômito. Sinais de melhora. Resposta clínica. Duração do tratamento.', tooltip: 'Observar redução do vômito. Monitorar sinais de melhora.' },
    evidence: { text: 'Antiemético eficaz para náusea pós-quimioterapia. Seguro para uso IV.', tooltip: 'Padrão-ouro para náusea pós-quimioterapia. Antiemético bem estabelecido.' }
  },
  {
    name: 'Oxibutinina',
    sector: 'Urologia',
    class: 'Anticolinérgico; Antiespasmódico.',
    commercialNames: ['Ditropan®', 'Oxibutinina'],
    highlights: [
      'Anticolinérgico para bexiga.',
      'Reduz contrações da bexiga.',
      'Útil para incontinência urinária.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Incontinência urinária. Bexiga hiperativa. Cistite intersticial. Espasmos vesicais.', tooltip: 'Especialmente útil para incontinência urinária e bexiga hiperativa.' },
    mechanism: { text: 'Antagonista muscarínico. Relaxa músculo detrusor. Reduz contrações vesicais. Aumenta capacidade vesical.', tooltip: 'Bloqueia receptores muscarínicos no músculo detrusor da bexiga.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 2-3h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Incontinência urinária', dose: '0,2-0,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Bexiga hiperativa', dose: '0,2-0,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Para bexiga hiperativa. Monitorar efeitos adversos.' },
      { species: 'Gato', indication: 'Incontinência urinária', dose: '0,2-0,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Dose inicial.' },
      { species: 'Gato', indication: 'Bexiga hiperativa', dose: '0,2-0,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Para bexiga hiperativa.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Manter horário consistente. Dose dividida.', tooltip: 'Pode ser administrado com alimentos. Manter horário consistente.' },
    contraindications: { text: 'Hipersensibilidade. Glaucoma de ângulo fechado. Obstrução urinária. Miastenia gravis.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com glaucoma.' },
    adverseEffects: { text: 'Boca seca. Retenção urinária. Constipação. Visão turva. Taquicardia.', tooltip: 'Efeitos anticolinérgicos são os mais comuns. Monitorar retenção urinária.' },
    interactions: { text: 'Outros anticolinérgicos (↑ efeitos). Digoxina (↑ níveis).', tooltip: 'Outros anticolinérgicos aumentam efeitos. Digoxina pode ter níveis aumentados.' },
    monitoring: { text: 'Frequência urinária. Retenção urinária. Sinais anticolinérgicos. Resposta clínica.', tooltip: 'Observar frequência urinária. Monitorar retenção urinária.' },
    evidence: { text: 'Anticolinérgico eficaz para incontinência. Seguro para uso prolongado.', tooltip: 'Alternativa útil para incontinência urinária. Anticolinérgico bem estabelecido.' }
  },
  {
    name: 'Pantoprazol',
    sector: 'Gastroenterologia',
    class: 'Inibidor da bomba de prótons; Antiulceroso.',
    commercialNames: ['Protonix®', 'Pantoprazol'],
    highlights: [
      'Inibidor da bomba de prótons.',
      'Reduz secreção ácida gástrica.',
      'Seguro para uso IV.',
      'Eficaz para úlceras e refluxo.'
    ],
    clinicalIndications: { text: 'Úlcera gástrica. Refluxo gastroesofágico. Gastrite. Esofagite. Hiperacidez.', tooltip: 'Especialmente útil para úlceras gástricas e refluxo gastroesofágico.' },
    mechanism: { text: 'Inibe irreversivelmente a bomba H+/K+-ATPase. Reduz secreção ácida gástrica. Promove cicatrização.', tooltip: 'Bloqueia irreversivelmente a bomba de prótons, reduzindo secreção ácida.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Úlcera gástrica', dose: '0,5-1 mg/kg', route: 'PO/IV', interval: '24h', notes: 'Duração: 4-8 semanas. Para úlceras.' },
      { species: 'Cão', indication: 'Refluxo', dose: '0,5-1 mg/kg', route: 'PO/IV', interval: '24h', notes: 'Duração: 2-4 semanas. Para refluxo.' },
      { species: 'Gato', indication: 'Úlcera gástrica', dose: '0,5-1 mg/kg', route: 'PO/IV', interval: '24h', notes: 'Bem tolerado. Duração: 4-8 semanas.' },
      { species: 'Gato', indication: 'Refluxo', dose: '0,5-1 mg/kg', route: 'PO/IV', interval: '24h', notes: 'Bem tolerado. Duração: 2-4 semanas.' }
    ],
    dilutionAndAdministration: { text: 'PO: 30 min antes das refeições. IV: infusão lenta. Manter horário consistente.', tooltip: 'Administrar 30 min antes das refeições. IV: infusão lenta.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Gastrointestinais (náusea, diarreia). Raramente: hepatotoxicidade. Cefaleia.', tooltip: 'Efeitos gastrointestinais são os mais comuns. Geralmente bem tolerado.' },
    interactions: { text: 'Reduz absorção de ferro, cálcio, vitamina B12. Aumenta níveis de digoxina, fenitoína.', tooltip: 'Pode reduzir absorção de minerais. Aumenta níveis de alguns fármacos.' },
    monitoring: { text: 'Sinais de melhora. Função hepática. Resposta clínica. Duração do tratamento.', tooltip: 'Observar sinais de melhora. Monitorar função hepática.' },
    evidence: { text: 'Inibidor da bomba de prótons eficaz. Seguro para uso IV.', tooltip: 'Alternativa útil para úlceras gástricas. Seguro para uso IV.' }
  },
  {
    name: 'Paracetamol',
    sector: 'Analgesia',
    class: 'Analgésico; Antipirético.',
    commercialNames: ['Tylenol®', 'Paracetamol'],
    highlights: [
      'Analgésico e antipirético.',
      'Seguro para uso em cães.',
      'Tóxico para gatos.',
      'Sem efeito anti-inflamatório.'
    ],
    clinicalIndications: { text: 'Dor leve a moderada. Febre. Dor pós-operatória. Dor crônica.', tooltip: 'Especialmente útil para dor leve a moderada e febre.' },
    mechanism: { text: 'Inibe COX-2 no SNC. Reduz síntese de prostaglandinas. Ação antipirética central.', tooltip: 'Inibe preferencialmente COX-2 no SNC, reduzindo prostaglandinas.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 30-60 min. Pico: 1-2h. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Dor/Febre', dose: '10-15 mg/kg', route: 'PO', interval: '8-12h', notes: 'Dose máxima: 75 mg/kg/dia. Seguro para cães.' },
      { species: 'Cão', indication: 'Dor pós-operatória', dose: '10-15 mg/kg', route: 'PO', interval: '8-12h', notes: 'Para dor pós-operatória. Monitorar efeitos adversos.' },
      { species: 'Gato', indication: 'CONTRAINDICADO', dose: 'NÃO USAR', route: 'N/A', interval: 'N/A', notes: 'TÓXICO PARA GATOS. Causa metemoglobinemia.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Comprimidos: podem ser esmagados. Manter horário consistente.', tooltip: 'Pode ser administrado com alimentos. Comprimidos podem ser esmagados.' },
    contraindications: { text: 'GATOS (tóxico). Doença hepática grave. Hipersensibilidade. Alcoolismo.', tooltip: 'CONTRAINDICADO EM GATOS. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Hepatotoxicidade (altas doses). Náusea, vômito. Raramente: reações alérgicas.', tooltip: 'Hepatotoxicidade é o efeito adverso mais grave. Monitorar função hepática.' },
    interactions: { text: 'Álcool (↑ hepatotoxicidade). Warfarina (↑ risco hemorrágico).', tooltip: 'Álcool aumenta hepatotoxicidade. Warfarina aumenta risco hemorrágico.' },
    monitoring: { text: 'Função hepática. Sinais de toxicidade. Resposta clínica. Duração do tratamento.', tooltip: 'ALT, AST. Observar sinais de toxicidade. Monitorar resposta clínica.' },
    evidence: { text: 'Analgésico eficaz para dor leve a moderada. Seguro para cães, tóxico para gatos.', tooltip: 'Analgésico útil para cães. CONTRAINDICADO EM GATOS.' }
  }
];
