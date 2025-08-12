import { Drug } from '../types';

export const newDrugs7: Drug[] = [
  {
    name: 'Cefalexina',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 1ª geração; β-lactâmico.',
    commercialNames: ['Keflex®', 'Cefalexina', 'Ceporex®'],
    highlights: [
      'Cefalosporina oral de primeira geração.',
      'Boa absorção oral e distribuição tecidual.',
      'Ativo contra cocos Gram-positivos.',
      'Seguro em gestação e lactação.'
    ],
    clinicalIndications: {
      text: 'Infecções cutâneas, urinárias, respiratórias. Piodermite superficial. Profilaxia cirúrgica.',
      tooltip: 'Primeira escolha para infecções por Staphylococcus e Streptococcus sensíveis.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana (PBP). Bactericida dependente do tempo.',
      tooltip: 'Liga-se às proteínas ligadoras de penicilina (PBP), bloqueando a transpeptidação.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (90-95%). Início: 1-2h. Meia-vida: 1-2h. Excreção renal.',
      tooltip: 'Biodisponibilidade alta. Distribuição ampla, incluindo ossos e fluidos corporais.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções bacterianas',
        dose: '15-30 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dose mais alta para infecções graves. Com ou sem alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Infecções bacterianas',
        dose: '15-30 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Com ou sem alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Piodermite',
        dose: '22-30 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Duração: 3-4 semanas. Continuar 1 semana após resolução.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Suspensão: agitar bem antes do uso. Comprimidos: podem ser esmagados. Com ou sem alimentos.',
      tooltip: 'Suspensões devem ser refrigeradas após reconstituição. Verificar concentração.'
    },
    contraindications: {
      text: 'Hipersensibilidade a cefalosporinas. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas a β-lactâmicos. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Gastrointestinais leves (náusea, diarreia). Erupção cutânea. Raramente: hepatite.',
      tooltip: 'Diarreia por alteração da flora intestinal. Monitorar em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Anticoagulantes (↑ risco hemorragia).',
      tooltip: 'Probenecida reduz excreção renal. Anticoagulantes: monitorar INR.'
    },
    monitoring: {
      text: 'Função renal em uso prolongado. Sinais de hipersensibilidade. Resposta clínica.',
      tooltip: 'Creatinina e ureia em pacientes com insuficiência renal. Observar melhora em 48-72h.'
    },
    evidence: {
      text: 'Cefalosporina oral bem estabelecida. Eficaz contra cocos Gram-positivos.',
      tooltip: 'Primeira escolha para piodermite superficial. Resistência crescente em algumas regiões.'
    }
  },
  {
    name: 'Cefazolina',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 1ª geração parenteral; β-lactâmico.',
    commercialNames: ['Cefazolina', 'Ancef®', 'Kefzol®'],
    highlights: [
      'Cefalosporina parenteral de primeira geração.',
      'Ativo contra cocos Gram-positivos.',
      'Boa penetração tecidual.',
      'Indicado para profilaxia cirúrgica.'
    ],
    clinicalIndications: {
      text: 'Profilaxia cirúrgica. Infecções por Staphylococcus e Streptococcus. Infecções cutâneas graves.',
      tooltip: 'Especialmente útil para profilaxia cirúrgica e infecções por cocos Gram-positivos.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana (PBP). Bactericida dependente do tempo.',
      tooltip: 'Liga-se às proteínas ligadoras de penicilina (PBP), bloqueando a transpeptidação.'
    },
    pharmacokinetics: {
      text: 'Início: 15-30 min IV. Meia-vida: 1-2h. Excreção renal. Distribuição ampla.',
      tooltip: 'Concentrações adequadas em ossos e fluidos corporais. Metabolismo hepático limitado.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções bacterianas',
        dose: '20-30 mg/kg',
        route: 'IV/IM',
        interval: '6-8h',
        notes: 'Dose mais alta para infecções graves. Infusão IV lenta.'
      },
      {
        species: 'Gato',
        indication: 'Infecções bacterianas',
        dose: '20-30 mg/kg',
        route: 'IV/IM',
        interval: '6-8h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Profilaxia cirúrgica',
        dose: '20-30 mg/kg',
        route: 'IV/IM',
        interval: '30-60 min antes',
        notes: 'Uma dose única antes do procedimento.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Reconstituir com água estéril ou NaCl 0,9%. Infusão IV lenta (5-10 min). IM: aplicar em músculo grande.',
      tooltip: 'Verificar compatibilidade com outros medicamentos. Não misturar com aminoglicosídeos.'
    },
    contraindications: {
      text: 'Hipersensibilidade a cefalosporinas. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas a β-lactâmicos. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Reações no local da injeção. Náusea, vômito. Raramente: neutropenia, hepatite.',
      tooltip: 'Dor e inflamação no local IM. Monitorar hemograma em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Aminoglicosídeos (sinergia, mas não misturar). Anticoagulantes.',
      tooltip: 'Probenecida reduz excreção renal. Aminoglicosídeos: administrar separadamente.'
    },
    monitoring: {
      text: 'Função renal. Hemograma em uso prolongado. Sinais de hipersensibilidade.',
      tooltip: 'Creatinina e ureia. Leucócitos e neutrófilos. Observar reações alérgicas.'
    },
    evidence: {
      text: 'Cefalosporina parenteral bem estabelecida. Padrão-ouro para profilaxia cirúrgica.',
      tooltip: 'Eficaz contra cocos Gram-positivos. Seguro para uso perioperatório.'
    }
  },
  {
    name: 'Cefotetano',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 2ª geração; β-lactâmico.',
    commercialNames: ['Cefotetan', 'Cefotan®'],
    highlights: [
      'Cefalosporina de segunda geração parenteral.',
      'Ativo contra anaeróbios e Gram-negativos.',
      'Boa penetração abdominal.',
      'Indicado para cirurgias abdominais.'
    ],
    clinicalIndications: {
      text: 'Infecções abdominais. Cirurgias gastrointestinais. Infecções por anaeróbios. Profilaxia cirúrgica.',
      tooltip: 'Especialmente útil para procedimentos que envolvem o trato gastrointestinal.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana (PBP). Bactericida dependente do tempo.',
      tooltip: 'Liga-se às proteínas ligadoras de penicilina (PBP), bloqueando a transpeptidação.'
    },
    pharmacokinetics: {
      text: 'Início: 15-30 min IV. Meia-vida: 3-4h. Excreção renal. Boa penetração abdominal.',
      tooltip: 'Concentrações adequadas em peritônio e tecidos abdominais.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções abdominais',
        dose: '20-40 mg/kg',
        route: 'IV/IM',
        interval: '8-12h',
        notes: 'Dose mais alta para infecções graves. Infusão IV lenta.'
      },
      {
        species: 'Gato',
        indication: 'Infecções abdominais',
        dose: '20-40 mg/kg',
        route: 'IV/IM',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Profilaxia cirúrgica',
        dose: '20-30 mg/kg',
        route: 'IV/IM',
        interval: '30-60 min antes',
        notes: 'Uma dose única antes do procedimento.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Reconstituir com água estéril ou NaCl 0,9%. Infusão IV lenta (5-10 min). IM: aplicar em músculo grande.',
      tooltip: 'Verificar compatibilidade com outros medicamentos. Não misturar com aminoglicosídeos.'
    },
    contraindications: {
      text: 'Hipersensibilidade a cefalosporinas. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas a β-lactâmicos. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Reações no local da injeção. Náusea, vômito. Raramente: neutropenia, hepatite.',
      tooltip: 'Dor e inflamação no local IM. Monitorar hemograma em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Aminoglicosídeos (sinergia, mas não misturar). Anticoagulantes.',
      tooltip: 'Probenecida reduz excreção renal. Aminoglicosídeos: administrar separadamente.'
    },
    monitoring: {
      text: 'Função renal. Hemograma em uso prolongado. Sinais de hipersensibilidade.',
      tooltip: 'Creatinina e ureia. Leucócitos e neutrófilos. Observar reações alérgicas.'
    },
    evidence: {
      text: 'Cefalosporina eficaz para infecções abdominais. Boa cobertura para anaeróbios.',
      tooltip: 'Alternativa útil para cirurgias gastrointestinais. Menos resistência que cefalosporinas de 3ª geração.'
    }
  },
  {
    name: 'Ceftazidima',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração; β-lactâmico.',
    commercialNames: ['Fortaz®', 'Tazicef®', 'Ceftazidima'],
    highlights: [
      'Cefalosporina de terceira geração com atividade anti-Pseudomonas.',
      'Ativo contra Gram-negativos resistentes.',
      'Boa penetração no SNC.',
      'Indicado para infecções graves.'
    ],
    clinicalIndications: {
      text: 'Infecções por Pseudomonas aeruginosa. Infecções do SNC. Infecções respiratórias graves. Septicemia.',
      tooltip: 'Especialmente útil para infecções por Gram-negativos resistentes e Pseudomonas.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana (PBP). Bactericida dependente do tempo.',
      tooltip: 'Liga-se às proteínas ligadoras de penicilina (PBP), bloqueando a transpeptidação.'
    },
    pharmacokinetics: {
      text: 'Início: 15-30 min IV. Meia-vida: 1,5-2h. Excreção renal. Boa penetração no SNC.',
      tooltip: 'Concentrações adequadas em LCR em meninges inflamadas. Metabolismo hepático limitado.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções graves',
        dose: '25-50 mg/kg',
        route: 'IV/IM',
        interval: '8-12h',
        notes: 'Dose mais alta para infecções graves. Infusão IV lenta.'
      },
      {
        species: 'Gato',
        indication: 'Infecções graves',
        dose: '25-50 mg/kg',
        route: 'IV/IM',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Meningite',
        dose: '50 mg/kg',
        route: 'IV',
        interval: '8h',
        notes: 'Dose mais alta para penetração no SNC.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Reconstituir com água estéril ou NaCl 0,9%. Infusão IV lenta (5-10 min). IM: aplicar em músculo grande.',
      tooltip: 'Verificar compatibilidade com outros medicamentos. Não misturar com aminoglicosídeos.'
    },
    contraindications: {
      text: 'Hipersensibilidade a cefalosporinas. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas a β-lactâmicos. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Reações no local da injeção. Náusea, vômito. Raramente: neutropenia, hepatite.',
      tooltip: 'Dor e inflamação no local IM. Monitorar hemograma em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Aminoglicosídeos (sinergia, mas não misturar). Anticoagulantes.',
      tooltip: 'Probenecida reduz excreção renal. Aminoglicosídeos: administrar separadamente.'
    },
    monitoring: {
      text: 'Função renal. Hemograma em uso prolongado. Sinais de hipersensibilidade.',
      tooltip: 'Creatinina e ureia. Leucócitos e neutrófilos. Observar reações alérgicas.'
    },
    evidence: {
      text: 'Cefalosporina eficaz contra Pseudomonas. Boa penetração no SNC.',
      tooltip: 'Alternativa útil para infecções graves por Gram-negativos. Menos resistência que carbapenêmicos.'
    }
  },
  {
    name: 'Ceftriaxona',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração; β-lactâmico.',
    commercialNames: ['Rocephin®', 'Ceftriaxona'],
    highlights: [
      'Cefalosporina de terceira geração de longa duração.',
      'Meia-vida longa permite dose única diária.',
      'Boa penetração no SNC.',
      'Ativo contra Gram-negativos resistentes.'
    ],
    clinicalIndications: {
      text: 'Meningite. Infecções respiratórias graves. Infecções do SNC. Septicemia. Infecções por Gram-negativos.',
      tooltip: 'Especialmente útil para infecções graves que requerem penetração no SNC.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana (PBP). Bactericida dependente do tempo.',
      tooltip: 'Liga-se às proteínas ligadoras de penicilina (PBP), bloqueando a transpeptidação.'
    },
    pharmacokinetics: {
      text: 'Início: 15-30 min IV. Meia-vida: 6-8h. Excreção renal e biliar. Boa penetração no SNC.',
      tooltip: 'Duração prolongada permite dose única diária. Concentrações adequadas em LCR.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções graves',
        dose: '25-50 mg/kg',
        route: 'IV/IM',
        interval: '12-24h',
        notes: 'Dose única diária conveniente. Infusão IV lenta.'
      },
      {
        species: 'Gato',
        indication: 'Infecções graves',
        dose: '25-50 mg/kg',
        route: 'IV/IM',
        interval: '12-24h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Meningite',
        dose: '50 mg/kg',
        route: 'IV',
        interval: '12h',
        notes: 'Dose mais alta para penetração no SNC.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Reconstituir com água estéril ou NaCl 0,9%. Infusão IV lenta (5-10 min). IM: aplicar em músculo grande.',
      tooltip: 'Verificar compatibilidade com outros medicamentos. Não misturar com aminoglicosídeos.'
    },
    contraindications: {
      text: 'Hipersensibilidade a cefalosporinas. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas a β-lactâmicos. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Reações no local da injeção. Náusea, vômito. Raramente: neutropenia, hepatite.',
      tooltip: 'Dor e inflamação no local IM. Monitorar hemograma em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Aminoglicosídeos (sinergia, mas não misturar). Anticoagulantes.',
      tooltip: 'Probenecida reduz excreção renal. Aminoglicosídeos: administrar separadamente.'
    },
    monitoring: {
      text: 'Função renal. Hemograma em uso prolongado. Sinais de hipersensibilidade.',
      tooltip: 'Creatinina e ureia. Leucócitos e neutrófilos. Observar reações alérgicas.'
    },
    evidence: {
      text: 'Cefalosporina eficaz com dose única diária. Boa penetração no SNC.',
      tooltip: 'Conveniência da dose única diária. Alternativa útil para infecções graves.'
    }
  }
];
