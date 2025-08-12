import { Drug } from '../types';

export const newDrugs16: Drug[] = [
  {
    name: 'Lidocaína',
    sector: 'Anestesiologia',
    class: 'Anestésico local; Antiarrítmico classe IB.',
    commercialNames: ['Lidocaína', 'Xylocaine®'],
    highlights: [
      'Anestésico local de ação rápida.',
      'Antiarrítmico classe IB.',
      'Seguro para uso em cães e gatos.',
      'Monitoramento cardíaco necessário.'
    ],
    clinicalIndications: { text: 'Anestesia local. Arritmias ventriculares. Analgesia tópica. Bloqueios regionais.', tooltip: 'Especialmente útil para anestesia local e controle de arritmias ventriculares.' },
    mechanism: { text: 'Bloqueia canais de sódio. Inibe propagação de impulsos nervosos. Estabiliza membrana cardíaca.', tooltip: 'Bloqueia canais de sódio dependentes de voltagem, impedindo propagação de impulsos.' },
    pharmacokinetics: { text: 'Início: 1-2 min IV, 5-15 min SC. Pico: 15-30 min. Meia-vida: 1-2h. Metabolizada no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Arritmias ventriculares', dose: '2-4 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Bolus inicial. Seguido de infusão se necessário.' },
      { species: 'Cão', indication: 'Anestesia local', dose: '1-2 mg/kg', route: 'SC', interval: 'Única', notes: 'Dose máxima: 4 mg/kg. Monitorar sinais de toxicidade.' },
      { species: 'Gato', indication: 'Arritmias ventriculares', dose: '0,5-1 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Dose reduzida. Monitorar cuidadosamente.' },
      { species: 'Gato', indication: 'Anestesia local', dose: '0,5-1 mg/kg', route: 'SC', interval: 'Única', notes: 'Dose máxima: 2 mg/kg. Cuidado com toxicidade.' }
    ],
    dilutionAndAdministration: { text: 'IV: bolus lento. SC: infiltração local. Tópico: aplicar diretamente. Monitorar ECG.', tooltip: 'Bolus IV deve ser administrado lentamente. Monitorar ECG durante uso.' },
    contraindications: { text: 'Hipersensibilidade. Bloqueio AV de 2º/3º grau. Bradicardia grave. Choque cardiogênico.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com distúrbios de condução.' },
    adverseEffects: { text: 'Toxicidade do SNC (convulsões, coma). Bradicardia. Hipotensão. Arritmias.', tooltip: 'Toxicidade do SNC é o efeito adverso mais grave. Monitorar sinais neurológicos.' },
    interactions: { text: 'Beta-bloqueadores (↑ toxicidade). Cimetidina (↑ níveis). Quinidina (↑ efeitos).', tooltip: 'Beta-bloqueadores aumentam toxicidade. Cimetidina reduz metabolismo.' },
    monitoring: { text: 'ECG. Pressão arterial. Sinais neurológicos. Função hepática.', tooltip: 'ECG contínuo. Observar sinais de toxicidade do SNC. Monitorar pressão arterial.' },
    evidence: { text: 'Antiarrítmico eficaz para arritmias ventriculares. Anestésico local seguro.', tooltip: 'Padrão-ouro para arritmias ventriculares. Anestésico local bem estabelecido.' }
  },
  {
    name: 'Lorazepam',
    sector: 'Neurologia',
    class: 'Benzodiazepínico; Ansiolítico.',
    commercialNames: ['Lorazepam', 'Ativan®'],
    highlights: [
      'Benzodiazepínico de ação intermediária.',
      'Ansiolítico e anticonvulsivante.',
      'Metabolismo hepático mínimo.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Ansiedade. Convulsões. Agitação. Sedação. Pré-medicação.', tooltip: 'Especialmente útil para ansiedade e convulsões refratárias.' },
    mechanism: { text: 'Potencia ação do GABA. Aumenta inibição neuronal. Reduz atividade do SNC.', tooltip: 'Potencia receptores GABA-A, aumentando inibição neuronal central.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 15-30 min PO, 5-15 min IV. Meia-vida: 12-18h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático mínimo. Meia-vida intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Ansiedade', dose: '0,02-0,1 mg/kg', route: 'PO', interval: '8-12h', notes: 'Dose inicial baixa. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Convulsões', dose: '0,1-0,2 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Para convulsões agudas. Monitorar respiração.' },
      { species: 'Gato', indication: 'Ansiedade', dose: '0,02-0,1 mg/kg', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Dose inicial baixa.' },
      { species: 'Gato', indication: 'Convulsões', dose: '0,1-0,2 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Para convulsões agudas. Cuidado com sedação.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. IV: bolus lento. Monitorar respiração. Evitar uso prolongado.', tooltip: 'IV deve ser administrado lentamente. Monitorar função respiratória.' },
    contraindications: { text: 'Hipersensibilidade a benzodiazepínicos. Glaucoma de ângulo fechado. Miastenia gravis.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com glaucoma.' },
    adverseEffects: { text: 'Sedação, ataxia. Depressão respiratória (altas doses). Paradoxal: agitação. Dependência.', tooltip: 'Sedação é o efeito adverso mais comum. Monitorar função respiratória.' },
    interactions: { text: 'Outros depressores do SNC (↑ sedação). Álcool (↑ efeitos). Cimetidina (↑ níveis).', tooltip: 'Outros depressores aumentam sedação. Cimetidina reduz metabolismo.' },
    monitoring: { text: 'Nível de consciência. Função respiratória. Sinais de dependência. Resposta clínica.', tooltip: 'Observar nível de consciência. Monitorar função respiratória.' },
    evidence: { text: 'Ansiolítico eficaz. Anticonvulsivante útil. Metabolismo hepático mínimo.', tooltip: 'Alternativa útil para ansiedade. Metabolismo hepático mínimo vantajoso.' }
  },
  {
    name: 'Maropitant',
    sector: 'Gastroenterologia',
    class: 'Antagonista do receptor NK-1; Antiemético.',
    commercialNames: ['Cerenia®', 'Maropitant'],
    highlights: [
      'Antiemético específico para cães e gatos.',
      'Bloqueia vômito central e periférico.',
      'Seguro para uso prolongado.',
      'Eficaz para cinetose.'
    ],
    clinicalIndications: { text: 'Vômito agudo e crônico. Cinetose. Vômito pós-operatório. Gastroenterite.', tooltip: 'Especialmente útil para vômito agudo e cinetose.' },
    mechanism: { text: 'Antagonista seletivo do receptor NK-1. Bloqueia ação da substância P. Inibe vômito central e periférico.', tooltip: 'Bloqueia receptores NK-1, impedindo ação da substância P no centro do vômito.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h PO, 30-60 min SC. Meia-vida: 8-12h. Metabolizado no fígado. Excreção biliar.', tooltip: 'Biodisponibilidade oral boa. Metabolismo hepático extenso.' },
    doses: [
      { species: 'Cão', indication: 'Vômito agudo', dose: '1 mg/kg', route: 'SC', interval: '24h', notes: 'Duração: até 5 dias. Eficaz para vômito agudo.' },
      { species: 'Cão', indication: 'Cinetose', dose: '8 mg/kg', route: 'PO', interval: '24h', notes: 'Administrar 2h antes da viagem. Eficaz para cinetose.' },
      { species: 'Gato', indication: 'Vômito agudo', dose: '1 mg/kg', route: 'SC', interval: '24h', notes: 'Bem tolerado. Duração: até 5 dias.' },
      { species: 'Gato', indication: 'Cinetose', dose: '8 mg/kg', route: 'PO', interval: '24h', notes: 'Administrar 2h antes da viagem. Eficaz para cinetose.' }
    ],
    dilutionAndAdministration: { text: 'SC: aplicar em tecido subcutâneo. PO: com ou sem alimentos. Manter horário consistente.', tooltip: 'SC: aplicar em tecido subcutâneo. PO: pode ser administrado com alimentos.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação (primeiro trimestre).', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Dor no local da injeção. Sedação leve. Raramente: diarreia, anorexia.', tooltip: 'Dor no local da injeção é o efeito adverso mais comum. Geralmente bem tolerado.' },
    interactions: { text: 'Poucas interações significativas. Pode afetar metabolismo de alguns fármacos.', tooltip: 'Poucas interações conhecidas. Monitorar uso concomitante com outros fármacos.' },
    monitoring: { text: 'Frequência de vômito. Apetite. Sinais de melhora. Função hepática.', tooltip: 'Observar redução do vômito. Monitorar apetite e sinais de melhora.' },
    evidence: { text: 'Antiemético eficaz para vômito agudo e cinetose. Seguro para uso prolongado.', tooltip: 'Padrão-ouro para vômito agudo em cães e gatos. Eficaz para cinetose.' }
  },
  {
    name: 'Meloxicam',
    sector: 'Anti-inflamatórios',
    class: 'AINE; Inibidor seletivo da COX-2.',
    commercialNames: ['Metacam®', 'Meloxicam'],
    highlights: [
      'AINE seletivo para COX-2.',
      'Anti-inflamatório e analgésico.',
      'Seguro para uso prolongado.',
      'Boa tolerabilidade.'
    ],
    clinicalIndications: { text: 'Osteoartrite. Dor pós-operatória. Inflamação. Febre. Trauma.', tooltip: 'Especialmente útil para osteoartrite e dor crônica.' },
    mechanism: { text: 'Inibe seletivamente COX-2. Reduz síntese de prostaglandinas inflamatórias. Ação analgésica e anti-inflamatória.', tooltip: 'Inibe preferencialmente COX-2, reduzindo prostaglandinas inflamatórias.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 24h. Metabolizado no fígado. Excreção biliar e renal.', tooltip: 'Meia-vida longa permite dose única diária. Metabolismo hepático extenso.' },
    doses: [
      { species: 'Cão', indication: 'Osteoartrite', dose: '0,1 mg/kg', route: 'PO/SC', interval: '24h', notes: 'Dose inicial. Reduzir para 0,05 mg/kg após 7 dias.' },
      { species: 'Cão', indication: 'Dor pós-operatória', dose: '0,2 mg/kg', route: 'SC', interval: '24h', notes: 'Dose única. Para dor pós-operatória.' },
      { species: 'Gato', indication: 'Osteoartrite', dose: '0,1 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Dose única diária.' },
      { species: 'Gato', indication: 'Dor pós-operatória', dose: '0,2 mg/kg', route: 'SC', interval: '24h', notes: 'Dose única. Para dor pós-operatória.' }
    ],
    dilutionAndAdministration: { text: 'PO: com alimentos. SC: aplicar em tecido subcutâneo. Manter horário consistente.', tooltip: 'Administrar com alimentos para melhor tolerância. SC: aplicar em tecido subcutâneo.' },
    contraindications: { text: 'Hipersensibilidade a AINEs. Úlcera gastrointestinal. Doença renal grave. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com doença renal.' },
    adverseEffects: { text: 'Gastrointestinais (vômito, diarreia). Nefrotoxicidade. Hepatotoxicidade. Coagulopatia.', tooltip: 'Efeitos gastrointestinais são os mais comuns. Monitorar função renal.' },
    interactions: { text: 'Corticosteroides (↑ risco GI). Diuréticos (↑ nefrotoxicidade). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'Corticosteroides aumentam risco GI. Diuréticos aumentam nefrotoxicidade.' },
    monitoring: { text: 'Função renal. Função hepática. Sinais gastrointestinais. Coagulação.', tooltip: 'Creatinina, BUN. ALT, AST. Observar sinais gastrointestinais.' },
    evidence: { text: 'AINE eficaz para osteoartrite. Seletividade COX-2 reduz efeitos adversos.', tooltip: 'Padrão-ouro para osteoartrite em cães. Seletividade COX-2 vantajosa.' }
  },
  {
    name: 'Metoclopramida',
    sector: 'Gastroenterologia',
    class: 'Procinético; Antiemético.',
    commercialNames: ['Metoclopramida', 'Reglan®'],
    highlights: [
      'Procinético gastrointestinal.',
      'Antiemético central.',
      'Acelera esvaziamento gástrico.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Vômito. Refluxo gastroesofágico. Gastroparesia. Náusea pós-operatória.', tooltip: 'Especialmente útil para vômito e refluxo gastroesofágico.' },
    mechanism: { text: 'Antagonista dopaminérgico. Agonista colinérgico. Inibe centro do vômito. Acelera motilidade GI.', tooltip: 'Bloqueia receptores D2 e estimula motilidade gastrointestinal.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 30-60 min PO, 10-15 min IV. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Vômito', dose: '0,2-0,5 mg/kg', route: 'PO/SC/IV', interval: '6-8h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Refluxo', dose: '0,2-0,5 mg/kg', route: 'PO', interval: '6-8h', notes: '30 min antes das refeições. Para refluxo.' },
      { species: 'Gato', indication: 'Vômito', dose: '0,2-0,5 mg/kg', route: 'PO/SC', interval: '6-8h', notes: 'Bem tolerado. Dose inicial.' },
      { species: 'Gato', indication: 'Refluxo', dose: '0,2-0,5 mg/kg', route: 'PO', interval: '6-8h', notes: '30 min antes das refeições. Para refluxo.' }
    ],
    dilutionAndAdministration: { text: 'PO: 30 min antes das refeições. IV: infusão lenta. SC: aplicar em tecido subcutâneo.', tooltip: 'Administrar 30 min antes das refeições para melhor efeito. IV: infusão lenta.' },
    contraindications: { text: 'Hipersensibilidade. Obstrução intestinal. Hemorragia GI. Epilepsia.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com obstrução.' },
    adverseEffects: { text: 'Sedação, agitação. Distúrbios extrapiramidais. Diarreia. Raramente: arritmias.', tooltip: 'Distúrbios extrapiramidais são os efeitos adversos mais graves. Monitorar sinais neurológicos.' },
    interactions: { text: 'Anticolinérgicos (↓ efeito). Fenotiazinas (↑ efeitos extrapiramidais).', tooltip: 'Anticolinérgicos reduzem efeito. Fenotiazinas aumentam efeitos extrapiramidais.' },
    monitoring: { text: 'Frequência de vômito. Motilidade GI. Sinais neurológicos. Resposta clínica.', tooltip: 'Observar redução do vômito. Monitorar sinais neurológicos.' },
    evidence: { text: 'Procinético eficaz para vômito e refluxo. Seguro para uso prolongado.', tooltip: 'Alternativa útil para vômito e refluxo. Procinético bem estabelecido.' }
  }
];
