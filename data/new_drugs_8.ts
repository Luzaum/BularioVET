import { Drug } from '../types';

export const newDrugs8: Drug[] = [
  {
    name: 'Cefuroxima',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 2ª geração; β-lactâmico.',
    commercialNames: ['Zinacef®', 'Ceftin®', 'Cefuroxima'],
    highlights: [
      'Cefalosporina de segunda geração parenteral e oral.',
      'Ativo contra Gram-positivos e Gram-negativos.',
      'Boa penetração tecidual.',
      'Indicado para infecções respiratórias.'
    ],
    clinicalIndications: {
      text: 'Infecções respiratórias. Infecções cutâneas. Infecções urinárias. Profilaxia cirúrgica.',
      tooltip: 'Especialmente útil para infecções respiratórias e cutâneas.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana (PBP). Bactericida dependente do tempo.',
      tooltip: 'Liga-se às proteínas ligadoras de penicilina (PBP), bloqueando a transpeptidação.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (30-50%). Início: 1-2h PO, 15-30 min IV. Meia-vida: 1-2h. Excreção renal.',
      tooltip: 'Biodisponibilidade oral limitada. Distribuição ampla, incluindo ossos e fluidos corporais.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções bacterianas',
        dose: '20-30 mg/kg',
        route: 'PO/IV/IM',
        interval: '8-12h',
        notes: 'Dose mais alta para infecções graves. Com alimentos se PO.'
      },
      {
        species: 'Gato',
        indication: 'Infecções bacterianas',
        dose: '20-30 mg/kg',
        route: 'PO/IV/IM',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Infecções respiratórias',
        dose: '25-30 mg/kg',
        route: 'IV/IM',
        interval: '8h',
        notes: 'Dose mais alta para penetração pulmonar.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IV: infusão lenta (5-10 min). IM: aplicar em músculo grande.',
      tooltip: 'Melhor absorção oral com alimentos. Verificar compatibilidade IV.'
    },
    contraindications: {
      text: 'Hipersensibilidade a cefalosporinas. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas a β-lactâmicos. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, diarreia). Reações no local da injeção. Raramente: neutropenia.',
      tooltip: 'Diarreia por alteração da flora intestinal. Monitorar em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Anticoagulantes (↑ risco hemorragia).',
      tooltip: 'Probenecida reduz excreção renal. Anticoagulantes: monitorar INR.'
    },
    monitoring: {
      text: 'Função renal. Sinais de hipersensibilidade. Resposta clínica.',
      tooltip: 'Creatinina e ureia em pacientes com insuficiência renal. Observar melhora em 48-72h.'
    },
    evidence: {
      text: 'Cefalosporina eficaz para infecções respiratórias. Boa cobertura para Gram-positivos e negativos.',
      tooltip: 'Alternativa útil para infecções moderadas. Menos resistência que cefalosporinas de 3ª geração.'
    }
  },
  {
    name: 'Cetamina (Ketamina)',
    sector: 'Anestesia',
    class: 'Anestésico dissociativo; Antagonista NMDA.',
    commercialNames: ['Ketamine', 'Ketaset®', 'Vetalar®'],
    highlights: [
      'Anestésico dissociativo com efeito analgésico.',
      'Mantém respiração espontânea.',
      'Útil para indução anestésica.',
      'Reversível com atipamezol.'
    ],
    clinicalIndications: {
      text: 'Indução anestésica. Sedação para procedimentos. Analgesia. Anestesia de campo.',
      tooltip: 'Especialmente útil para indução anestésica e procedimentos curtos.'
    },
    mechanism: {
      text: 'Antagonista não competitivo dos receptores NMDA. Bloqueia transmissão dolorosa no SNC.',
      tooltip: 'Inibe a ativação dos receptores NMDA, causando dissociação e analgesia.'
    },
    pharmacokinetics: {
      text: 'Início: 30-60 segundos IV, 2-5 min IM. Duração: 10-30 min. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Indução anestésica',
        dose: '5-10 mg/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Administrar lentamente. Combinar com sedativo prévio.'
      },
      {
        species: 'Gato',
        indication: 'Indução anestésica',
        dose: '5-10 mg/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Mais sensível que cães. Monitorar cuidadosamente.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Sedação',
        dose: '10-20 mg/kg',
        route: 'IM',
        interval: 'Dose única',
        notes: 'Combinar com sedativo (xilazina, medetomidina).'
      }
    ],
    dilutionAndAdministration: {
      text: 'IV: administrar lentamente (30-60 segundos). IM: aplicar em músculo grande. Monitorar respiração.',
      tooltip: 'Sempre usar com sedativo prévio. Manter via aérea pérvea.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Trauma craniano. Glaucoma. Hipertensão arterial grave.',
      tooltip: 'Pode aumentar pressão intracraniana. Cuidado em cardiopatas.'
    },
    adverseEffects: {
      text: 'Aumento da pressão arterial e frequência cardíaca. Salivação excessiva. Alucinações.',
      tooltip: 'Efeitos cardiovasculares dose-dependentes. Salivação mais comum em gatos.'
    },
    interactions: {
      text: 'Benzodiazepínicos (↑ sedação). Barbitúricos (↑ depressão). AINEs (sinergia analgésica).',
      tooltip: 'Benzodiazepínicos: reduzem efeitos adversos. Barbitúricos: depressão aditiva.'
    },
    monitoring: {
      text: 'Pressão arterial. Frequência cardíaca. Respiração. Profundidade da anestesia.',
      tooltip: 'ECG e pressão arterial. Observar padrão respiratório. Avaliar profundidade.'
    },
    evidence: {
      text: 'Anestésico dissociativo bem estabelecido. Seguro quando usado corretamente.',
      tooltip: 'Padrão-ouro para indução anestésica. Mantém respiração espontânea.'
    }
  },
  {
    name: 'Cetirizina',
    sector: 'Dermatologia',
    class: 'Anti-histamínico de segunda geração; Antagonista H1.',
    commercialNames: ['Zyrtec®', 'Reactine®', 'Cetirizina'],
    highlights: [
      'Anti-histamínico não sedativo.',
      'Efeito prolongado (24h).',
      'Útil para alergias e prurido.',
      'Seguro em uso prolongado.'
    ],
    clinicalIndications: {
      text: 'Dermatite atópica. Urticária. Reações alérgicas. Prurido alérgico.',
      tooltip: 'Especialmente útil para controle de prurido em dermatite atópica.'
    },
    mechanism: {
      text: 'Antagonista competitivo dos receptores H1 da histamina. Reduz resposta alérgica.',
      tooltip: 'Bloqueia a ligação da histamina aos receptores H1, reduzindo sintomas alérgicos.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (70-90%). Início: 1-2h. Duração: 24h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Biodisponibilidade alta. Metabolismo hepático limitado. Meia-vida longa.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Alergias/Prurido',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Dose única diária. Com ou sem alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Alergias/Prurido',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Bem tolerado. Dose única diária.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Comprimidos: podem ser esmagados. Suspensão: agitar bem. Com ou sem alimentos.',
      tooltip: 'Melhor absorção com alimentos. Manter horário consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a anti-histamínicos. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas a anti-histamínicos. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Sedação leve (menos que anti-histamínicos de 1ª geração). Boca seca. Raramente: arritmias.',
      tooltip: 'Menos sedação que difenidramina. Monitorar em cardiopatas.'
    },
    interactions: {
      text: 'Cimetidina (↑ níveis). Teofilina (↓ níveis). Anticoagulantes.',
      tooltip: 'Cimetidina: inibe metabolismo. Teofilina: acelera metabolismo.'
    },
    monitoring: {
      text: 'Resposta clínica. Sinais de sedação. Função renal em uso prolongado.',
      tooltip: 'Observar redução do prurido. Monitorar creatinina em pacientes renais.'
    },
    evidence: {
      text: 'Anti-histamínico eficaz e seguro. Menos sedação que anti-histamínicos de 1ª geração.',
      tooltip: 'Boa opção para controle de prurido. Conveniência da dose única diária.'
    }
  },
  {
    name: 'Cetoconazol',
    sector: 'Antifúngicos',
    class: 'Antifúngico azólico; Inibidor da síntese de ergosterol.',
    commercialNames: ['Nizoral®', 'Ketoconazole', 'Cetoconazol'],
    highlights: [
      'Antifúngico azólico de amplo espectro.',
      'Ativo contra dermatófitos e leveduras.',
      'Inibidor potente do citocromo P450.',
      'Indicado para micoses cutâneas e sistêmicas.'
    ],
    clinicalIndications: {
      text: 'Dermatofitose. Candidíase. Malassezia. Micoses sistêmicas. Hiperadrenocorticismo.',
      tooltip: 'Especialmente útil para infecções fúngicas cutâneas e sistêmicas.'
    },
    mechanism: {
      text: 'Inibe a enzima lanosterol 14-α-desmetilase. Reduz síntese de ergosterol na membrana fúngica.',
      tooltip: 'Bloqueia a conversão de lanosterol em ergosterol, causando dano à membrana fúngica.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (40-80%). Início: 1-2h. Meia-vida: 8h. Metabolizado no fígado. Excreção biliar.',
      tooltip: 'Absorção melhor com alimentos ácidos. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Micoses sistêmicas',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Com alimentos ácidos. Duração: 2-8 semanas.'
      },
      {
        species: 'Gato',
        indication: 'Micoses sistêmicas',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Bem tolerado. Monitorar função hepática.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Hiperadrenocorticismo',
        dose: '15 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Dose inicial. Ajustar baseado na resposta.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos ácidos (suco de laranja, vinagre). Comprimidos: podem ser esmagados.',
      tooltip: 'Absorção melhor com pH ácido. Manter horário consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a azólicos. Doença hepática grave. Gestação.',
      tooltip: 'Histórico de hepatite por azólicos. Cuidado em pacientes com doença hepática.'
    },
    adverseEffects: {
      text: 'Hepatotoxicidade (monitorar enzimas). Náusea, vômito. Supressão adrenal (altas doses).',
      tooltip: 'Hepatotoxicidade idiosincrática. Monitorar ALT, AST, FA.'
    },
    interactions: {
      text: 'Potente inibidor do CYP3A4. Aumenta níveis de muitos fármacos. Anticoagulantes.',
      tooltip: 'Aumenta níveis de ciclosporina, digoxina, fenobarbital. Monitorar interações.'
    },
    monitoring: {
      text: 'Função hepática (semanal). Sinais de toxicidade. Resposta clínica.',
      tooltip: 'ALT, AST, FA semanalmente. Observar sinais de hepatite.'
    },
    evidence: {
      text: 'Antifúngico eficaz para micoses cutâneas e sistêmicas. Inibidor potente do CYP450.',
      tooltip: 'Alternativa útil para micoses. Monitoramento hepático essencial.'
    }
  },
  {
    name: 'Cianocobalamina (Vit B12)',
    sector: 'Hematologia',
    class: 'Vitamina B12; Cobalamina.',
    commercialNames: ['Cyanocobalamin', 'Vitamina B12', 'Cobamin®'],
    highlights: [
      'Vitamina essencial para eritropoiese.',
      'Deficiência causa anemia megaloblástica.',
      'Absorção dependente do fator intrínseco.',
      'Seguro em altas doses.'
    ],
    clinicalIndications: {
      text: 'Deficiência de vitamina B12. Anemia megaloblástica. Doença inflamatória intestinal. Pancreatite.',
      tooltip: 'Especialmente útil em pacientes com má absorção ou deficiência dietética.'
    },
    mechanism: {
      text: 'Cofator essencial para síntese de DNA e eritropoiese. Participa do metabolismo de homocisteína.',
      tooltip: 'Necessária para a conversão de homocisteína em metionina e síntese de timidina.'
    },
    pharmacokinetics: {
      text: 'Absorção oral limitada (1-5%). Início: 24-48h IM. Armazenamento hepático. Excreção renal.',
      tooltip: 'Absorção oral pobre. Injeção IM mais eficaz. Armazenamento hepático por anos.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Deficiência de B12',
        dose: '250-1000 μg',
        route: 'IM/SC',
        interval: 'Semanal',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Deficiência de B12',
        dose: '250-1000 μg',
        route: 'IM/SC',
        interval: 'Semanal',
        notes: 'Bem tolerado. Monitorar hemograma.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Manutenção',
        dose: '250-500 μg',
        route: 'IM/SC',
        interval: 'Mensal',
        notes: 'Após correção da deficiência.'
      }
    ],
    dilutionAndAdministration: {
      text: 'IM: aplicar em músculo grande. SC: aplicar em tecido subcutâneo. Monitorar local da injeção.',
      tooltip: 'Aplicar em músculo glúteo ou quadríceps. Rotacionar locais de injeção.'
    },
    contraindications: {
      text: 'Hipersensibilidade à vitamina B12. Policitemia vera.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com policitemia.'
    },
    adverseEffects: {
      text: 'Reações no local da injeção. Raramente: reações alérgicas. Diarreia (altas doses orais).',
      tooltip: 'Dor e inflamação no local IM. Reações alérgicas raras.'
    },
    interactions: {
      text: 'Ácido fólico (sinergia). Metformina (↓ absorção). Inibidores da bomba de prótons.',
      tooltip: 'Ácido fólico: tratamento conjunto da anemia megaloblástica. Metformina: reduz absorção.'
    },
    monitoring: {
      text: 'Hemograma. Níveis séricos de B12. Sinais de melhora clínica.',
      tooltip: 'Hemoglobina, hematócrito, VCM. Níveis séricos de B12. Observar melhora da anemia.'
    },
    evidence: {
      text: 'Tratamento padrão para deficiência de B12. Eficaz em anemia megaloblástica.',
      tooltip: 'Vitamina essencial bem estabelecida. Segura em altas doses.'
    }
  }
];
