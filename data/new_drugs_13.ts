import { Drug } from '../types';

export const newDrugs13: Drug[] = [
  {
    name: 'Fenitoína',
    sector: 'Neurologia',
    class: 'Hidantoína; Anticonvulsivante.',
    commercialNames: ['Dilantin®', 'Fenitoína'],
    highlights: [
      'Anticonvulsivante de primeira linha.',
      'Bloqueia canais de sódio.',
      'Monitoramento de níveis séricos necessário.',
      'Indicado para epilepsia.'
    ],
    clinicalIndications: {
      text: 'Epilepsia. Convulsões focais. Status epilepticus. Arritmias cardíacas.',
      tooltip: 'Especialmente útil para convulsões focais e epilepsia refratária.'
    },
    mechanism: {
      text: 'Bloqueia canais de sódio dependentes de voltagem. Estabiliza membrana neuronal.',
      tooltip: 'Liga-se ao canal de Na+ no estado inativado, impedindo propagação do impulso.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (80-90%). Início: 1-2h. Meia-vida: 10-20h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Cinética não linear (saturação).'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Epilepsia',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dose inicial. Ajustar baseado em níveis séricos.'
      },
      {
        species: 'Gato',
        indication: 'Epilepsia',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar níveis séricos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Status epilepticus',
        dose: '10-20 mg/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Administrar lentamente. Repetir se necessário.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IV: administrar lentamente. Manter horário consistente.',
      tooltip: 'Melhor absorção com alimentos. IV: administrar em 5-10 min.'
    },
    contraindications: {
      text: 'Hipersensibilidade a hidantoínas. Doença hepática grave. Bloqueio AV.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Ataxia, nistagmo. Hiperplasia gengival. Hepatotoxicidade. Osteomalácia.',
      tooltip: 'Ataxia é o efeito adverso mais comum. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Muitas interações. Fenobarbital (↓ níveis). Valproato (↑ níveis).',
      tooltip: 'Fenobarbital: acelera metabolismo. Valproato: inibe metabolismo.'
    },
    monitoring: {
      text: 'Níveis séricos (10-20 μg/mL). Função hepática. Sinais de toxicidade.',
      tooltip: 'Níveis séricos: 10-20 μg/mL. ALT, AST. Observar ataxia, nistagmo.'
    },
    evidence: {
      text: 'Anticonvulsivante eficaz para convulsões focais. Monitoramento rigoroso essencial.',
      tooltip: 'Alternativa útil para epilepsia refratária. Cinética não linear.'
    }
  },
  {
    name: 'Fentanil',
    sector: 'Analgesia',
    class: 'Opioide sintético; Agonista μ-opioide.',
    commercialNames: ['Fentanyl', 'Fentanil'],
    highlights: [
      'Opioide sintético potente.',
      'Ação rápida e curta duração.',
      'Reversível com naloxona.',
      'Indicado para analgesia intensa.'
    ],
    clinicalIndications: {
      text: 'Analgesia pós-operatória. Dor aguda severa. Sedação. Anestesia balanceada.',
      tooltip: 'Especialmente útil para analgesia intensa e procedimentos dolorosos.'
    },
    mechanism: {
      text: 'Agonista dos receptores μ-opioides. Bloqueia transmissão dolorosa no SNC.',
      tooltip: 'Liga-se aos receptores μ-opioides, inibindo liberação de neurotransmissores.'
    },
    pharmacokinetics: {
      text: 'Início: 1-2 min IV, 5-15 min transdérmico. Duração: 30-60 min IV. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Analgesia',
        dose: '2-5 μg/kg',
        route: 'IV',
        interval: '30-60 min',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Analgesia',
        dose: '2-5 μg/kg',
        route: 'IV',
        interval: '30-60 min',
        notes: 'Bem tolerado. Monitorar depressão respiratória.'
      },
      {
        species: 'Cão/Gato',
        indication: 'CRI',
        dose: '2-10 μg/kg/h',
        route: 'IV',
        interval: 'Contínuo',
        notes: 'Infusão contínua. Monitorar sedação.'
      }
    ],
    dilutionAndAdministration: {
      text: 'IV: administrar lentamente. CRI: diluir em NaCl 0,9%. Monitorar respiração.',
      tooltip: 'IV: administrar em 2-3 min. CRI: ajustar conforme resposta.'
    },
    contraindications: {
      text: 'Hipersensibilidade a opioides. Insuficiência respiratória grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com depressão respiratória.'
    },
    adverseEffects: {
      text: 'Depressão respiratória. Sedação, ataxia. Bradicardia. Rigidez muscular.',
      tooltip: 'Depressão respiratória é o efeito adverso mais grave. Monitorar SpO2.'
    },
    interactions: {
      text: 'Outros depressores do SNC (↑ sedação). AINEs (sinergia analgésica).',
      tooltip: 'Benzodiazepínicos, barbitúricos: sedação aditiva. AINEs: analgesia sinérgica.'
    },
    monitoring: {
      text: 'Frequência respiratória. SpO2. Pressão arterial. Nível de sedação.',
      tooltip: 'Observar depressão respiratória. Manter SpO2 > 95%.'
    },
    evidence: {
      text: 'Opioide eficaz para analgesia intensa. Reversível com naloxona.',
      tooltip: 'Boa opção para dor aguda severa. Ação rápida e curta duração.'
    }
  },
  {
    name: 'Fluconazol',
    sector: 'Antifúngicos',
    class: 'Triazol; Inibidor da síntese de ergosterol.',
    commercialNames: ['Diflucan®', 'Fluconazol'],
    highlights: [
      'Antifúngico triazol de amplo espectro.',
      'Boa penetração no SNC.',
      'Indicado para candidíase e criptococose.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: {
      text: 'Candidíase. Criptococose. Dermatofitose. Micoses sistêmicas. Profilaxia.',
      tooltip: 'Especialmente útil para candidíase e infecções fúngicas sistêmicas.'
    },
    mechanism: {
      text: 'Inibe a enzima lanosterol 14-α-desmetilase. Reduz síntese de ergosterol na membrana fúngica.',
      tooltip: 'Bloqueia a conversão de lanosterol em ergosterol, causando dano à membrana fúngica.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (90%). Início: 1-2h. Meia-vida: 30h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Biodisponibilidade alta. Boa penetração no SNC e LCR.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Micoses sistêmicas',
        dose: '5-10 mg/kg',
        route: 'PO/IV',
        interval: '24h',
        notes: 'Duração: 2-8 semanas. Com ou sem alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Micoses sistêmicas',
        dose: '5-10 mg/kg',
        route: 'PO/IV',
        interval: '24h',
        notes: 'Bem tolerado. Com ou sem alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Candidíase',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Duração: 7-14 dias. Com ou sem alimentos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com ou sem alimentos. IV: infusão lenta. Comprimidos: podem ser esmagados.',
      tooltip: 'Melhor absorção com alimentos. IV: administrar lentamente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a azólicos. Doença hepática grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Gastrointestinais leves (náusea, diarreia). Hepatotoxicidade. Raramente: alopecia.',
      tooltip: 'Efeitos adversos geralmente leves. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Inibidor moderado do CYP3A4. Aumenta níveis de alguns fármacos.',
      tooltip: 'Aumenta níveis de ciclosporina, digoxina. Monitorar interações.'
    },
    monitoring: {
      text: 'Função hepática. Sinais de melhora. Resposta clínica.',
      tooltip: 'ALT, AST. Observar melhora dos sintomas. Duração do tratamento.'
    },
    evidence: {
      text: 'Antifúngico eficaz para candidíase. Boa penetração no SNC.',
      tooltip: 'Alternativa útil para micoses sistêmicas. Seguro para uso prolongado.'
    }
  },
  {
    name: 'Fludrocortisona',
    sector: 'Endocrinologia',
    class: 'Corticosteroide sintético; Mineralocorticoide.',
    commercialNames: ['Florinef®', 'Fludrocortisona'],
    highlights: [
      'Mineralocorticoide sintético.',
      'Retém sódio e excreta potássio.',
      'Indicado para hipoadrenocorticismo.',
      'Monitoramento de eletrólitos necessário.'
    ],
    clinicalIndications: {
      text: 'Hipoadrenocorticismo (doença de Addison). Hipotensão ortostática. Perda de sal.',
      tooltip: 'Especialmente útil para reposição de mineralocorticoides na doença de Addison.'
    },
    mechanism: {
      text: 'Agonista dos receptores de mineralocorticoides. Aumenta reabsorção de sódio e excreção de potássio.',
      tooltip: 'Liga-se aos receptores de aldosterona, regulando balanço eletrolítico renal.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (80-90%). Início: 1-2h. Duração: 12-24h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Hipoadrenocorticismo',
        dose: '0,01-0,02 mg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Dose inicial. Ajustar baseado em eletrólitos.'
      },
      {
        species: 'Gato',
        indication: 'Hipoadrenocorticismo',
        dose: '0,01-0,02 mg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Bem tolerado. Monitorar eletrólitos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Manter horário consistente.',
      tooltip: 'Melhor absorção com alimentos. Manter dose consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Hipertensão arterial grave. Edema.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com hipertensão.'
    },
    adverseEffects: {
      text: 'Hipertensão arterial. Edema. Hipocalemia. Hipernatremia.',
      tooltip: 'Hipertensão é o efeito adverso mais comum. Monitorar pressão arterial.'
    },
    interactions: {
      text: 'Diuréticos (↑ hipocalemia). AINEs (↑ retenção de sódio).',
      tooltip: 'Diuréticos: hipocalemia aditiva. AINEs: retenção de sódio.'
    },
    monitoring: {
      text: 'Eletrólitos (sódio, potássio). Pressão arterial. Peso corporal.',
      tooltip: 'Sódio: 135-145 mEq/L. Potássio: 3,5-5,5 mEq/L. Pressão arterial.'
    },
    evidence: {
      text: 'Mineralocorticoide eficaz para hipoadrenocorticismo. Monitoramento rigoroso essencial.',
      tooltip: 'Padrão-ouro para reposição mineralocorticoide. Ajuste individual necessário.'
    }
  },
  {
    name: 'Furosemida',
    sector: 'Cardiologia',
    class: 'Diurético de alça; Inibidor do cotransportador Na-K-2Cl.',
    commercialNames: ['Lasix®', 'Furosemida'],
    highlights: [
      'Diurético de alça potente.',
      'Ação rápida e intensa.',
      'Indicado para edema e insuficiência cardíaca.',
      'Pode causar hipocalemia.'
    ],
    clinicalIndications: {
      text: 'Insuficiência cardíaca congestiva. Edema pulmonar. Hipertensão arterial. Oligúria.',
      tooltip: 'Especialmente útil para edema agudo e insuficiência cardíaca.'
    },
    mechanism: {
      text: 'Inibe o cotransportador Na-K-2Cl na alça de Henle. Aumenta excreção de sódio, potássio e água.',
      tooltip: 'Bloqueia reabsorção de Na+, K+ e Cl- na alça de Henle, causando diurese intensa.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (60-80%). Início: 30-60 min PO, 5-10 min IV. Duração: 4-6h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático limitado. Acúmulo em insuficiência renal.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Edema agudo',
        dose: '2-4 mg/kg',
        route: 'PO/IV/IM',
        interval: '6-12h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Edema agudo',
        dose: '1-2 mg/kg',
        route: 'PO/IV/IM',
        interval: '6-12h',
        notes: 'Bem tolerado. Monitorar eletrólitos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Manutenção',
        dose: '1-2 mg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Dose menor para manutenção. Monitorar eletrólitos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com ou sem alimentos. IV: administrar lentamente. IM: aplicar em músculo grande.',
      tooltip: 'Melhor absorção com alimentos. IV: administrar em 2-3 min.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Anúria. Hipovolemia grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes hipovolêmicos.'
    },
    adverseEffects: {
      text: 'Hipocalemia, hiponatremia. Desidratação. Ototoxicidade (altas doses IV).',
      tooltip: 'Hipocalemia é o efeito adverso mais comum. Monitorar eletrólitos.'
    },
    interactions: {
      text: 'Digoxina (↑ toxicidade). Aminoglicosídeos (↑ ototoxicidade). AINEs (↓ eficácia).',
      tooltip: 'Digoxina: hipocalemia aumenta toxicidade. AINEs: reduzem eficácia.'
    },
    monitoring: {
      text: 'Eletrólitos (potássio, sódio). Função renal. Peso corporal. Débito urinário.',
      tooltip: 'Potássio: 3,5-5,5 mEq/L. Sódio: 135-145 mEq/L. Creatinina, ureia.'
    },
    evidence: {
      text: 'Diurético eficaz para edema agudo. Padrão-ouro para insuficiência cardíaca.',
      tooltip: 'Primeira linha para edema pulmonar. Monitoramento de eletrólitos essencial.'
    }
  }
];
