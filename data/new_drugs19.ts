import { Drug } from '../types';

export const newDrugs19: Drug[] = [
  {
    name: 'Phenobarbital',
    sector: 'Neurologia',
    class: 'Barbitúrico; Anticonvulsivante.',
    commercialNames: ['Phenobarbital', 'Luminal®'],
    highlights: [
      'Anticonvulsivante de primeira linha.',
      'Induz enzimas hepáticas.',
      'Monitoramento de níveis séricos necessário.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Epilepsia. Convulsões. Status epilepticus. Sedação. Pré-medicação.', tooltip: 'Especialmente útil para epilepsia e convulsões refratárias.' },
    mechanism: { text: 'Potencia ação do GABA. Aumenta inibição neuronal. Reduz excitabilidade neuronal. Induz CYP450.', tooltip: 'Potencia receptores GABA-A, aumentando inibição neuronal central.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 30-60 min PO, 5-15 min IV. Meia-vida: 50-100h. Metabolizado no fígado. Excreção renal.', tooltip: 'Meia-vida muito longa. Metabolismo hepático extenso com autoindução.' },
    doses: [
      { species: 'Cão', indication: 'Epilepsia', dose: '2-5 mg/kg', route: 'PO', interval: '12h', notes: 'Dose inicial. Ajustar baseado nos níveis séricos.' },
      { species: 'Cão', indication: 'Status epilepticus', dose: '5-15 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Para status epilepticus. Monitorar respiração.' },
      { species: 'Gato', indication: 'Epilepsia', dose: '2-5 mg/kg', route: 'PO', interval: '12h', notes: 'Bem tolerado. Ajustar baseado nos níveis séricos.' },
      { species: 'Gato', indication: 'Status epilepticus', dose: '5-15 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Para status epilepticus. Monitorar respiração.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. IV: bolus lento. Monitorar respiração. Manter horário consistente.', tooltip: 'IV deve ser administrado lentamente. Monitorar função respiratória.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Depressão respiratória. Porfiria.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Sedação, ataxia. Hepatotoxicidade. Anemia. Osteoporose. Dependência.', tooltip: 'Sedação é o efeito adverso mais comum. Monitorar função hepática.' },
    interactions: { text: 'Induz CYP450 (↓ níveis de muitos fármacos). Outros depressores do SNC (↑ sedação).', tooltip: 'Induz enzimas hepáticas, reduzindo níveis de muitos fármacos.' },
    monitoring: { text: 'Níveis séricos (15-45 μg/mL). Função hepática. Hemograma. Frequência de convulsões.', tooltip: 'Níveis séricos: 15-45 μg/mL. ALT, AST. Hemograma completo.' },
    evidence: { text: 'Anticonvulsivante de primeira linha. Eficaz para epilepsia. Monitoramento necessário.', tooltip: 'Padrão-ouro para epilepsia em cães e gatos. Anticonvulsivante bem estabelecido.' }
  },
  {
    name: 'Prednisolona',
    sector: 'Corticosteroides',
    class: 'Corticosteroide sintético; Anti-inflamatório.',
    commercialNames: ['Prednisolona', 'Deltacortril®'],
    highlights: [
      'Corticosteroide sintético.',
      'Anti-inflamatório e imunossupressor.',
      'Seguro para uso prolongado.',
      'Monitoramento necessário.'
    ],
    clinicalIndications: { text: 'Inflamação. Alergias. Doenças autoimunes. Neoplasias. Choque.', tooltip: 'Especialmente útil para inflamação e doenças autoimunes.' },
    mechanism: { text: 'Liga-se ao receptor glicocorticoide. Inibe síntese de citocinas. Reduz inflamação. Imunossupressor.', tooltip: 'Ativa receptores glicocorticoides, inibindo síntese de mediadores inflamatórios.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Inflamação', dose: '0,5-2 mg/kg', route: 'PO/IM/IV', interval: '12-24h', notes: 'Dose inicial. Reduzir gradualmente.' },
      { species: 'Cão', indication: 'Doenças autoimunes', dose: '2-4 mg/kg', route: 'PO', interval: '12-24h', notes: 'Dose imunossupressora. Reduzir gradualmente.' },
      { species: 'Gato', indication: 'Inflamação', dose: '0,5-2 mg/kg', route: 'PO/IM/IV', interval: '12-24h', notes: 'Bem tolerado. Reduzir gradualmente.' },
      { species: 'Gato', indication: 'Doenças autoimunes', dose: '2-4 mg/kg', route: 'PO', interval: '12-24h', notes: 'Bem tolerado. Dose imunossupressora.' }
    ],
    dilutionAndAdministration: { text: 'PO: com alimentos. IM/IV: aplicar em tecido muscular/veia. Reduzir gradualmente.', tooltip: 'Administrar com alimentos para melhor tolerância. Reduzir gradualmente.' },
    contraindications: { text: 'Hipersensibilidade. Infecções fúngicas sistêmicas. Úlcera péptica. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com infecções.' },
    adverseEffects: { text: 'Poliúria, polidipsia. Aumento do apetite. Imunossupressão. Osteoporose. Diabetes.', tooltip: 'Poliúria e polidipsia são os efeitos adversos mais comuns. Monitorar glicemia.' },
    interactions: { text: 'AINEs (↑ risco GI). Diuréticos (↑ perda de potássio). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'AINEs aumentam risco GI. Diuréticos aumentam perda de potássio.' },
    monitoring: { text: 'Glicemia. Função hepática. Sinais de infecção. Peso corporal. Pressão arterial.', tooltip: 'Glicose sérica. ALT, AST. Observar sinais de infecção.' },
    evidence: { text: 'Corticosteroide eficaz. Anti-inflamatório potente. Imunossupressor útil.', tooltip: 'Padrão-ouro para inflamação. Corticosteroide bem estabelecido.' }
  },
  {
    name: 'Propranolol',
    sector: 'Cardiologia',
    class: 'Beta-bloqueador não seletivo; Antiarrítmico.',
    commercialNames: ['Inderal®', 'Propranolol'],
    highlights: [
      'Beta-bloqueador não seletivo.',
      'Antiarrítmico classe II.',
      'Reduz frequência cardíaca.',
      'Monitoramento cardíaco necessário.'
    ],
    clinicalIndications: { text: 'Arritmias supraventriculares. Hipertensão. Cardiomiopatia. Hipertireoidismo.', tooltip: 'Especialmente útil para arritmias supraventriculares e hipertireoidismo.' },
    mechanism: { text: 'Bloqueia receptores β1 e β2. Reduz frequência cardíaca. Diminui contratilidade. Antiarrítmico.', tooltip: 'Bloqueia competitivamente receptores β1 e β2 adrenérgicos.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 3-6h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Arritmias', dose: '0,2-1 mg/kg', route: 'PO', interval: '8-12h', notes: 'Dose inicial. Ajustar baseado na resposta.' },
      { species: 'Cão', indication: 'Hipertireoidismo', dose: '0,2-1 mg/kg', route: 'PO', interval: '8-12h', notes: 'Para controle de sintomas. Monitorar FC.' },
      { species: 'Gato', indication: 'Arritmias', dose: '0,2-1 mg/kg', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Ajustar baseado na resposta.' },
      { species: 'Gato', indication: 'Hipertireoidismo', dose: '0,2-1 mg/kg', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Para controle de sintomas.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Manter horário consistente. Monitorar frequência cardíaca.', tooltip: 'Pode ser administrado com alimentos. Monitorar frequência cardíaca.' },
    contraindications: { text: 'Hipersensibilidade. Bradicardia grave. Insuficiência cardíaca. Asma.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com bradicardia.' },
    adverseEffects: { text: 'Bradicardia. Hipotensão. Broncoespasmo. Fadiga. Depressão.', tooltip: 'Bradicardia é o efeito adverso mais comum. Monitorar frequência cardíaca.' },
    interactions: { text: 'Digoxina (↑ bradicardia). Verapamil (↑ efeitos). Insulina (↓ hipoglicemia).', tooltip: 'Digoxina aumenta bradicardia. Verapamil aumenta efeitos.' },
    monitoring: { text: 'Frequência cardíaca. Pressão arterial. ECG. Sinais de hipoglicemia.', tooltip: 'Frequência cardíaca. Pressão arterial. Observar sinais de hipoglicemia.' },
    evidence: { text: 'Beta-bloqueador eficaz. Antiarrítmico útil. Seguro para uso prolongado.', tooltip: 'Alternativa útil para arritmias. Beta-bloqueador bem estabelecido.' }
  },
  {
    name: 'Ranitidina',
    sector: 'Gastroenterologia',
    class: 'Antagonista H2; Antiulceroso.',
    commercialNames: ['Zantac®', 'Ranitidina'],
    highlights: [
      'Antagonista H2.',
      'Reduz secreção ácida gástrica.',
      'Seguro para uso IV.',
      'Boa tolerabilidade.'
    ],
    clinicalIndications: { text: 'Úlcera gástrica. Refluxo gastroesofágico. Gastrite. Esofagite. Hiperacidez.', tooltip: 'Especialmente útil para úlceras gástricas e refluxo gastroesofágico.' },
    mechanism: { text: 'Antagonista competitivo do receptor H2. Reduz secreção ácida gástrica. Promove cicatrização.', tooltip: 'Bloqueia competitivamente receptores H2, reduzindo secreção ácida.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 2-3h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Úlcera gástrica', dose: '0,5-2 mg/kg', route: 'PO/IV', interval: '8-12h', notes: 'Duração: 4-8 semanas. Para úlceras.' },
      { species: 'Cão', indication: 'Refluxo', dose: '0,5-2 mg/kg', route: 'PO/IV', interval: '8-12h', notes: 'Duração: 2-4 semanas. Para refluxo.' },
      { species: 'Gato', indication: 'Úlcera gástrica', dose: '0,5-2 mg/kg', route: 'PO/IV', interval: '8-12h', notes: 'Bem tolerado. Duração: 4-8 semanas.' },
      { species: 'Gato', indication: 'Refluxo', dose: '0,5-2 mg/kg', route: 'PO/IV', interval: '8-12h', notes: 'Bem tolerado. Duração: 2-4 semanas.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. IV: infusão lenta. Manter horário consistente.', tooltip: 'Pode ser administrado com alimentos. IV: infusão lenta.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Gastrointestinais (náusea, diarreia). Raramente: hepatotoxicidade. Cefaleia.', tooltip: 'Efeitos gastrointestinais são os mais comuns. Geralmente bem tolerado.' },
    interactions: { text: 'Reduz absorção de alguns fármacos. Pode afetar metabolismo de outros fármacos.', tooltip: 'Pode reduzir absorção de alguns medicamentos. Monitorar interações.' },
    monitoring: { text: 'Sinais de melhora. Função hepática. Resposta clínica. Duração do tratamento.', tooltip: 'Observar sinais de melhora. Monitorar função hepática.' },
    evidence: { text: 'Antagonista H2 eficaz. Seguro para uso IV. Boa tolerabilidade.', tooltip: 'Alternativa útil para úlceras gástricas. Seguro para uso IV.' }
  },
  {
    name: 'Sucralfato',
    sector: 'Gastroenterologia',
    class: 'Protetor gástrico; Antiulceroso.',
    commercialNames: ['Carafate®', 'Sucralfato'],
    highlights: [
      'Protetor gástrico.',
      'Forma barreira protetora.',
      'Seguro para uso prolongado.',
      'Sem absorção sistêmica.'
    ],
    clinicalIndications: { text: 'Úlcera gástrica. Gastrite. Esofagite. Refluxo. Proteção gástrica.', tooltip: 'Especialmente útil para úlceras gástricas e proteção gástrica.' },
    mechanism: { text: 'Forma complexo com proteínas ulceradas. Cria barreira protetora. Promove cicatrização. Absorve ácido.', tooltip: 'Forma complexo com proteínas ulceradas, criando barreira protetora.' },
    pharmacokinetics: { text: 'Não absorvido sistemicamente. Ação local no estômago. Excreção fecal.', tooltip: 'Não há absorção sistêmica. Efeito local no estômago.' },
    doses: [
      { species: 'Cão', indication: 'Úlcera gástrica', dose: '0,5-1 g', route: 'PO', interval: '6-8h', notes: 'Duração: 4-8 semanas. Para úlceras.' },
      { species: 'Cão', indication: 'Proteção gástrica', dose: '0,5-1 g', route: 'PO', interval: '8-12h', notes: 'Duração: conforme necessário. Para proteção.' },
      { species: 'Gato', indication: 'Úlcera gástrica', dose: '0,25-0,5 g', route: 'PO', interval: '6-8h', notes: 'Bem tolerado. Duração: 4-8 semanas.' },
      { species: 'Gato', indication: 'Proteção gástrica', dose: '0,25-0,5 g', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Para proteção.' }
    ],
    dilutionAndAdministration: { text: 'PO: 1h antes das refeições. Comprimidos: podem ser esmagados. Manter horário consistente.', tooltip: 'Administrar 1h antes das refeições. Comprimidos podem ser esmagados.' },
    contraindications: { text: 'Hipersensibilidade. Obstrução intestinal. Hemorragia GI ativa.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com obstrução.' },
    adverseEffects: { text: 'Constipação. Raramente: náusea, vômito. Reações alérgicas.', tooltip: 'Constipação é o efeito adverso mais comum. Geralmente bem tolerado.' },
    interactions: { text: 'Reduz absorção de muitos fármacos. Administrar separadamente de outros medicamentos.', tooltip: 'Reduz absorção de muitos medicamentos. Administrar separadamente.' },
    monitoring: { text: 'Sinais de melhora. Resposta clínica. Duração do tratamento.', tooltip: 'Observar sinais de melhora. Monitorar resposta clínica.' },
    evidence: { text: 'Protetor gástrico eficaz. Seguro para uso prolongado. Sem absorção sistêmica.', tooltip: 'Alternativa útil para proteção gástrica. Sem absorção sistêmica.' }
  }
];
