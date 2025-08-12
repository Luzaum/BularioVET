import { Drug } from '../types';

export const newDrugs17: Drug[] = [
  {
    name: 'Metronidazol',
    sector: 'Antimicrobianos',
    class: 'Nitroimidazol; Antibacteriano e antiprotozoário.',
    commercialNames: ['Flagyl®', 'Metronidazol'],
    highlights: [
      'Antibacteriano e antiprotozoário.',
      'Excelente penetração no SNC.',
      'Eficaz contra anaeróbios.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Infecções anaeróbias. Giardíase. Colite. Infecções do SNC. Periodontite.', tooltip: 'Especialmente útil para infecções anaeróbias e giardíase.' },
    mechanism: { text: 'Forma radicais livres tóxicos. Danifica DNA bacteriano. Inibe síntese de proteínas.', tooltip: 'Reduz nitroimidazol a radicais livres que danificam DNA bacteriano.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 6-8h. Metabolizado no fígado. Excreção renal e biliar.', tooltip: 'Boa biodisponibilidade oral. Metabolismo hepático extenso.' },
    doses: [
      { species: 'Cão', indication: 'Infecções anaeróbias', dose: '15-25 mg/kg', route: 'PO', interval: '12h', notes: 'Duração: 7-14 dias. Para infecções anaeróbias.' },
      { species: 'Cão', indication: 'Giardíase', dose: '15-25 mg/kg', route: 'PO', interval: '12h', notes: 'Duração: 5-7 dias. Para giardíase.' },
      { species: 'Gato', indication: 'Infecções anaeróbias', dose: '15-25 mg/kg', route: 'PO', interval: '12h', notes: 'Bem tolerado. Duração: 7-14 dias.' },
      { species: 'Gato', indication: 'Giardíase', dose: '15-25 mg/kg', route: 'PO', interval: '12h', notes: 'Bem tolerado. Duração: 5-7 dias.' }
    ],
    dilutionAndAdministration: { text: 'PO: com alimentos. IV: infusão lenta. Manter horário consistente. Evitar álcool.', tooltip: 'Administrar com alimentos para melhor tolerância. Evitar álcool durante tratamento.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação (primeiro trimestre).', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Gastrointestinais (náusea, vômito). Neurotoxicidade (altas doses). Hepatotoxicidade.', tooltip: 'Efeitos gastrointestinais são os mais comuns. Monitorar sinais neurológicos.' },
    interactions: { text: 'Álcool (reação tipo dissulfiram). Fenobarbital (↓ níveis). Cimetidina (↑ níveis).', tooltip: 'Álcool causa reação tipo dissulfiram. Fenobarbital reduz níveis.' },
    monitoring: { text: 'Função hepática. Sinais neurológicos. Resposta clínica. Duração do tratamento.', tooltip: 'ALT, AST. Observar sinais neurológicos. Monitorar resposta clínica.' },
    evidence: { text: 'Antibacteriano eficaz para anaeróbios. Antiprotozoário útil para giardíase.', tooltip: 'Padrão-ouro para infecções anaeróbias. Eficaz para giardíase.' }
  },
  {
    name: 'Mirtazapina',
    sector: 'Neurologia',
    class: 'Antidepressivo tetracíclico; Antiemético.',
    commercialNames: ['Remeron®', 'Mirtazapina'],
    highlights: [
      'Antidepressivo com efeito antiemético.',
      'Estimulante do apetite.',
      'Útil para náusea e anorexia.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Náusea. Anorexia. Vômito. Depressão. Ansiedade.', tooltip: 'Especialmente útil para náusea e anorexia em pacientes com câncer.' },
    mechanism: { text: 'Antagonista 5-HT2A/2C. Antagonista H1. Antagonista α2-adrenérgico. Inibe vômito.', tooltip: 'Bloqueia múltiplos receptores, incluindo 5-HT2A/2C e H1.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 20-40h. Metabolizado no fígado. Excreção renal.', tooltip: 'Meia-vida longa permite dose única diária. Metabolismo hepático extenso.' },
    doses: [
      { species: 'Cão', indication: 'Náusea/Anorexia', dose: '0,5-1 mg/kg', route: 'PO', interval: '24h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Depressão', dose: '0,5-1 mg/kg', route: 'PO', interval: '24h', notes: 'Para depressão. Dose única diária.' },
      { species: 'Gato', indication: 'Náusea/Anorexia', dose: '1,88-3,75 mg', route: 'PO', interval: '24h', notes: 'Dose fixa por gato. Eficaz para anorexia.' },
      { species: 'Gato', indication: 'Depressão', dose: '1,88-3,75 mg', route: 'PO', interval: '24h', notes: 'Dose fixa por gato. Para depressão.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Manter horário consistente. Dose única diária.', tooltip: 'Pode ser administrado com ou sem alimentos. Manter horário consistente.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Sedação. Aumento do apetite. Raramente: agitação, tremores. Hepatotoxicidade.', tooltip: 'Sedação é o efeito adverso mais comum. Geralmente bem tolerado.' },
    interactions: { text: 'Outros depressores do SNC (↑ sedação). MAOIs (↑ risco de síndrome serotoninérgica).', tooltip: 'Outros depressores aumentam sedação. MAOIs aumentam risco serotoninérgico.' },
    monitoring: { text: 'Apetite. Nível de consciência. Função hepática. Resposta clínica.', tooltip: 'Observar aumento do apetite. Monitorar nível de consciência.' },
    evidence: { text: 'Antiemético eficaz. Estimulante do apetite útil. Seguro para uso prolongado.', tooltip: 'Alternativa útil para náusea e anorexia. Estimulante do apetite bem estabelecido.' }
  },
  {
    name: 'Morfina',
    sector: 'Analgesia',
    class: 'Opioide; Agonista μ-opioide.',
    commercialNames: ['Morfina', 'MST Continus®'],
    highlights: [
      'Opioide padrão-ouro para dor.',
      'Analgésico potente.',
      'Induz dependência física.',
      'Monitoramento respiratório necessário.'
    ],
    clinicalIndications: { text: 'Dor aguda e crônica. Dor pós-operatória. Dor oncológica. Emergências.', tooltip: 'Especialmente útil para dor moderada a grave.' },
    mechanism: { text: 'Agonista μ-opioide. Ativa receptores opioides centrais. Inibe transmissão da dor.', tooltip: 'Ativa receptores μ-opioides no SNC, inibindo transmissão da dor.' },
    pharmacokinetics: { text: 'Absorção oral variável. Início: 15-30 min IV, 30-60 min PO. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Dor aguda', dose: '0,5-1 mg/kg', route: 'IV/IM/SC', interval: '4-6h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Dor crônica', dose: '0,5-2 mg/kg', route: 'PO', interval: '6-8h', notes: 'Para dor crônica. Monitorar efeitos adversos.' },
      { species: 'Gato', indication: 'Dor aguda', dose: '0,1-0,3 mg/kg', route: 'IV/IM/SC', interval: '4-6h', notes: 'Dose reduzida. Monitorar cuidadosamente.' },
      { species: 'Gato', indication: 'Dor crônica', dose: '0,1-0,5 mg/kg', route: 'PO', interval: '6-8h', notes: 'Dose reduzida. Para dor crônica.' }
    ],
    dilutionAndAdministration: { text: 'IV: bolus lento. IM/SC: aplicar em tecido muscular/subcutâneo. PO: com alimentos.', tooltip: 'IV deve ser administrado lentamente. Monitorar função respiratória.' },
    contraindications: { text: 'Hipersensibilidade. Depressão respiratória grave. Obstrução intestinal. Traumatismo craniano.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com depressão respiratória.' },
    adverseEffects: { text: 'Depressão respiratória. Sedação. Constipação. Náusea, vômito. Dependência.', tooltip: 'Depressão respiratória é o efeito adverso mais grave. Monitorar função respiratória.' },
    interactions: { text: 'Outros depressores do SNC (↑ depressão respiratória). MAOIs (↑ efeitos).', tooltip: 'Outros depressores aumentam depressão respiratória. MAOIs aumentam efeitos.' },
    monitoring: { text: 'Função respiratória. Nível de consciência. Dor. Sinais de dependência.', tooltip: 'Frequência respiratória. Observar nível de consciência. Monitorar dor.' },
    evidence: { text: 'Opioide padrão-ouro para dor. Analgésico potente e eficaz.', tooltip: 'Padrão-ouro para dor moderada a grave. Analgésico bem estabelecido.' }
  },
  {
    name: 'N-acetilcisteína',
    sector: 'Emergência',
    class: 'Antídoto; Precursor do glutation.',
    commercialNames: ['NAC', 'Fluimucil®'],
    highlights: [
      'Antídoto para intoxicação por paracetamol.',
      'Precursor do glutation.',
      'Mucolítico.',
      'Seguro para uso IV.'
    ],
    clinicalIndications: { text: 'Intoxicação por paracetamol. Mucólise. Hepatoproteção. Antioxidante.', tooltip: 'Especialmente útil para intoxicação por paracetamol.' },
    mechanism: { text: 'Precursor do glutation. Neutraliza radicais livres. Mucolítico. Hepatoprotetor.', tooltip: 'Fornece cisteína para síntese de glutation, neutralizando radicais livres.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 30-60 min PO, 5-15 min IV. Meia-vida: 2-6h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Intoxicação paracetamol', dose: '140 mg/kg', route: 'PO', interval: 'Bolus inicial', notes: 'Bolus inicial. Seguido de 70 mg/kg a cada 4h.' },
      { species: 'Cão', indication: 'Mucólise', dose: '10-20 mg/kg', route: 'PO', interval: '8-12h', notes: 'Para mucólise. Duração: conforme necessário.' },
      { species: 'Gato', indication: 'Intoxicação paracetamol', dose: '140 mg/kg', route: 'PO', interval: 'Bolus inicial', notes: 'Bolus inicial. Seguido de 70 mg/kg a cada 4h.' },
      { species: 'Gato', indication: 'Mucólise', dose: '10-20 mg/kg', route: 'PO', interval: '8-12h', notes: 'Para mucólise. Duração: conforme necessário.' }
    ],
    dilutionAndAdministration: { text: 'PO: diluir em água ou suco. IV: infusão lenta. Monitorar função respiratória.', tooltip: 'Diluir para melhor palatabilidade. IV: infusão lenta.' },
    contraindications: { text: 'Hipersensibilidade. Hemorragia ativa. Doença pulmonar grave.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com hemorragia.' },
    adverseEffects: { text: 'Náusea, vômito. Reações alérgicas. Broncoespasmo (IV). Raramente: anafilaxia.', tooltip: 'Náusea e vômito são os efeitos adversos mais comuns. Monitorar reações alérgicas.' },
    interactions: { text: 'Poucas interações significativas. Pode afetar absorção de alguns fármacos.', tooltip: 'Poucas interações conhecidas. Monitorar uso concomitante.' },
    monitoring: { text: 'Função hepática. Sinais de melhora. Reações alérgicas. Resposta clínica.', tooltip: 'ALT, AST. Observar sinais de melhora. Monitorar reações alérgicas.' },
    evidence: { text: 'Antídoto eficaz para paracetamol. Mucolítico útil. Hepatoprotetor.', tooltip: 'Padrão-ouro para intoxicação por paracetamol. Mucolítico bem estabelecido.' }
  },
  {
    name: 'Naloxona',
    sector: 'Emergência',
    class: 'Antagonista opioide; Antídoto.',
    commercialNames: ['Narcan®', 'Naloxona'],
    highlights: [
      'Antagonista opioide específico.',
      'Antídoto para overdose opioide.',
      'Ação rápida.',
      'Seguro para uso IV.'
    ],
    clinicalIndications: { text: 'Overdose opioide. Depressão respiratória opioide. Reversão de sedação opioide.', tooltip: 'Especialmente útil para overdose e depressão respiratória opioide.' },
    mechanism: { text: 'Antagonista competitivo dos receptores opioides. Desloca opioides dos receptores. Reverte efeitos opioides.', tooltip: 'Competitivamente antagoniza receptores μ, κ e δ opioides.' },
    pharmacokinetics: { text: 'Início: 1-2 min IV, 2-5 min IM. Pico: 5-15 min. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Ação muito rápida. Meia-vida curta pode requerer redosagem.' },
    doses: [
      { species: 'Cão', indication: 'Overdose opioide', dose: '0,04 mg/kg', route: 'IV/IM/SC', interval: 'Bolus', notes: 'Bolus inicial. Redosar se necessário.' },
      { species: 'Cão', indication: 'Depressão respiratória', dose: '0,04 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Para depressão respiratória. Monitorar resposta.' },
      { species: 'Gato', indication: 'Overdose opioide', dose: '0,04 mg/kg', route: 'IV/IM/SC', interval: 'Bolus', notes: 'Bolus inicial. Redosar se necessário.' },
      { species: 'Gato', indication: 'Depressão respiratória', dose: '0,04 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Para depressão respiratória. Monitorar resposta.' }
    ],
    dilutionAndAdministration: { text: 'IV: bolus rápido. IM/SC: aplicar em tecido muscular/subcutâneo. Monitorar resposta.', tooltip: 'IV: bolus rápido para ação imediata. Monitorar resposta respiratória.' },
    contraindications: { text: 'Hipersensibilidade. Pacientes dependentes de opioides (pode precipitar abstinência).', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes dependentes.' },
    adverseEffects: { text: 'Síndrome de abstinência opioide. Taquicardia. Hipotensão. Agitação.', tooltip: 'Síndrome de abstinência é o efeito adverso mais comum. Monitorar sinais vitais.' },
    interactions: { text: 'Poucas interações significativas. Pode antagonizar analgesia opioide.', tooltip: 'Antagoniza todos os efeitos opioides. Monitorar necessidade de analgesia.' },
    monitoring: { text: 'Função respiratória. Sinais vitais. Nível de consciência. Sinais de abstinência.', tooltip: 'Frequência respiratória. Observar sinais vitais. Monitorar nível de consciência.' },
    evidence: { text: 'Antídoto específico para opioides. Ação rápida e eficaz.', tooltip: 'Padrão-ouro para overdose opioide. Antídoto específico e eficaz.' }
  }
];
