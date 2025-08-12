import { Drug } from '../types';

export const newDrugs11: Drug[] = [
  {
    name: 'Dexametasona',
    sector: 'Endocrinologia',
    class: 'Corticosteroide sintético; Glicocorticoide.',
    commercialNames: ['Decadron®', 'Dexamethasone', 'Dexametasona'],
    highlights: [
      'Corticosteroide sintético potente.',
      'Ação anti-inflamatória e imunossupressora.',
      'Meia-vida longa.',
      'Indicado para múltiplas condições.'
    ],
    clinicalIndications: {
      text: 'Inflamação. Alergias. Choque. Edema cerebral. Doenças autoimunes. Neoplasias.',
      tooltip: 'Especialmente útil para condições que requerem ação anti-inflamatória potente.'
    },
    mechanism: {
      text: 'Liga-se ao receptor de glicocorticoides. Regula transcrição de genes anti-inflamatórios.',
      tooltip: 'Ativa receptores nucleares, regulando expressão de genes relacionados à inflamação.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (70-90%). Início: 1-2h. Meia-vida: 36-72h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Meia-vida longa permite dose única diária. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Anti-inflamatório',
        dose: '0,1-0,2 mg/kg',
        route: 'PO/IV/IM',
        interval: '12-24h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Anti-inflamatório',
        dose: '0,1-0,2 mg/kg',
        route: 'PO/IV/IM',
        interval: '12-24h',
        notes: 'Bem tolerado. Monitorar glicemia.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Choque',
        dose: '0,5-1 mg/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Dose alta para choque. Repetir se necessário.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IV: infusão lenta. IM: aplicar em músculo grande.',
      tooltip: 'Melhor absorção com alimentos. IV: administrar lentamente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Infecções fúngicas sistêmicas. Úlcera péptica ativa.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com infecções.'
    },
    adverseEffects: {
      text: 'Supressão adrenal. Hiperglicemia. Osteoporose. Imunossupressão. Úlcera péptica.',
      tooltip: 'Supressão adrenal com uso prolongado. Monitorar glicemia em diabéticos.'
    },
    interactions: {
      text: 'AINEs (↑ risco úlcera). Diuréticos (↑ hipocalemia). Anticoagulantes.',
      tooltip: 'AINEs: risco de úlcera gástrica. Diuréticos: hipocalemia aditiva.'
    },
    monitoring: {
      text: 'Glicemia. Função adrenal. Sinais de infecção. Pressão arterial.',
      tooltip: 'Glicose sérica. Teste de estimulação com ACTH. Observar sinais de infecção.'
    },
    evidence: {
      text: 'Corticosteroide eficaz para múltiplas condições. Meia-vida longa vantajosa.',
      tooltip: 'Alternativa útil para inflamação e imunossupressão. Monitoramento rigoroso necessário.'
    }
  },
  {
    name: 'Diazepam',
    sector: 'Neurologia',
    class: 'Benzodiazepínico; Agonista GABA-A.',
    commercialNames: ['Valium®', 'Diazepam'],
    highlights: [
      'Benzodiazepínico de longa duração.',
      'Ansiolítico, sedativo e anticonvulsivante.',
      'Reversível com flumazenil.',
      'Indicado para ansiedade e convulsões.'
    ],
    clinicalIndications: {
      text: 'Ansiedade. Convulsões. Sedação. Relaxamento muscular. Síndrome de abstinência.',
      tooltip: 'Especialmente útil para ansiedade e como anticonvulsivante.'
    },
    mechanism: {
      text: 'Agonista dos receptores GABA-A. Potencializa inibição GABAérgica no SNC.',
      tooltip: 'Liga-se ao sítio benzodiazepínico do receptor GABA-A, aumentando influxo de Cl-.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (90%). Início: 15-30 min PO, 1-5 min IV. Meia-vida: 20-50h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Metabólitos ativos prolongam efeito.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Ansiedade',
        dose: '0,5-2 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dose inicial baixa. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Ansiedade',
        dose: '0,5-2 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar sedação.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Convulsões',
        dose: '0,5-1 mg/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Administrar lentamente. Repetir se necessário.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IV: administrar lentamente. IM: aplicar em músculo grande.',
      tooltip: 'Melhor absorção com alimentos. IV: administrar em 2-3 min.'
    },
    contraindications: {
      text: 'Hipersensibilidade a benzodiazepínicos. Glaucoma de ângulo fechado.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com glaucoma.'
    },
    adverseEffects: {
      text: 'Sedação, ataxia. Dependência física. Parodoxal (agitação). Depressão respiratória.',
      tooltip: 'Sedação dose-dependente. Dependência com uso prolongado.'
    },
    interactions: {
      text: 'Outros depressores do SNC (↑ sedação). Cimetidina (↑ níveis).',
      tooltip: 'Barbitúricos, álcool: sedação aditiva. Cimetidina: inibe metabolismo.'
    },
    monitoring: {
      text: 'Nível de sedação. Frequência respiratória. Resposta clínica.',
      tooltip: 'Observar depressão respiratória. Avaliar adequação do efeito.'
    },
    evidence: {
      text: 'Benzodiazepínico eficaz para ansiedade e convulsões. Reversível com flumazenil.',
      tooltip: 'Boa opção para ansiedade. Anticonvulsivante útil.'
    }
  },
  {
    name: 'Digoxina',
    sector: 'Cardiologia',
    class: 'Glicosídeo cardíaco; Inibidor da Na-K ATPase.',
    commercialNames: ['Lanoxin®', 'Digoxina'],
    highlights: [
      'Glicosídeo cardíaco para insuficiência cardíaca.',
      'Aumenta contratilidade e reduz frequência.',
      'Índice terapêutico estreito.',
      'Monitoramento rigoroso necessário.'
    ],
    clinicalIndications: {
      text: 'Insuficiência cardíaca congestiva. Fibrilação atrial. Taquicardia supraventricular.',
      tooltip: 'Especialmente útil para insuficiência cardíaca com fibrilação atrial.'
    },
    mechanism: {
      text: 'Inibe Na-K ATPase. Aumenta cálcio intracelular. Melhora contratilidade cardíaca.',
      tooltip: 'Bloqueia bomba Na-K, aumentando Na+ intracelular e troca Na+/Ca2+.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (60-80%). Início: 1-2h. Meia-vida: 30-40h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Acúmulo em insuficiência renal. Metabolismo hepático limitado.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Insuficiência cardíaca',
        dose: '0,005-0,01 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Dose inicial baixa. Ajustar baseado em níveis séricos.'
      },
      {
        species: 'Gato',
        indication: 'Insuficiência cardíaca',
        dose: '0,005-0,01 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Bem tolerado. Monitorar níveis séricos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Manter horário consistente. Não esmagar comprimidos.',
      tooltip: 'Melhor absorção com alimentos. Manter dose consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Bloqueio AV completo. Cardiomiopatia hipertrófica.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com bloqueio AV.'
    },
    adverseEffects: {
      text: 'Toxicidade cardíaca (arritmias). Gastrointestinais (náusea, vômito). Neurológicos.',
      tooltip: 'Arritmias são o efeito adverso mais grave. Monitorar ECG.'
    },
    interactions: {
      text: 'Diuréticos (↑ toxicidade). Amiodarona (↑ níveis). Quinidina (↑ níveis).',
      tooltip: 'Diuréticos: hipocalemia aumenta toxicidade. Amiodarona: inibe metabolismo.'
    },
    monitoring: {
      text: 'Níveis séricos (0,8-2 ng/mL). ECG. Função renal. Sinais de toxicidade.',
      tooltip: 'Níveis séricos: 0,8-2 ng/mL. ECG: observar arritmias. Creatinina.'
    },
    evidence: {
      text: 'Glicosídeo eficaz para insuficiência cardíaca. Monitoramento rigoroso essencial.',
      tooltip: 'Padrão-ouro para insuficiência cardíaca. Índice terapêutico estreito.'
    }
  },
  {
    name: 'Diltiazem',
    sector: 'Cardiologia',
    class: 'Bloqueador de canais de cálcio; Benzotiazepina.',
    commercialNames: ['Cardizem®', 'Diltiazem'],
    highlights: [
      'Bloqueador de canais de cálcio.',
      'Reduz frequência cardíaca e pressão arterial.',
      'Indicado para hipertensão e arritmias.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: {
      text: 'Hipertensão arterial. Taquicardia supraventricular. Fibrilação atrial. Cardiomiopatia hipertrófica.',
      tooltip: 'Especialmente útil para hipertensão e controle de frequência em fibrilação atrial.'
    },
    mechanism: {
      text: 'Bloqueia canais de cálcio L-type. Reduz influxo de cálcio. Diminui contratilidade e frequência.',
      tooltip: 'Bloqueia canais de cálcio dependentes de voltagem, reduzindo influxo de Ca2+.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (40-60%). Início: 1-2h. Meia-vida: 3-5h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Hipertensão',
        dose: '0,5-2 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dose inicial baixa. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Hipertensão',
        dose: '0,5-2 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar pressão arterial.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Fibrilação atrial',
        dose: '0,5-1,5 mg/kg',
        route: 'PO',
        interval: '8h',
        notes: 'Controle de frequência. Monitorar ECG.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Manter horário consistente.',
      tooltip: 'Melhor absorção com alimentos. Manter dose consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Bloqueio AV grave. Insuficiência cardíaca grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com bloqueio AV.'
    },
    adverseEffects: {
      text: 'Bradicardia, hipotensão. Edema periférico. Náusea, vômito. Constipação.',
      tooltip: 'Bradicardia é o efeito adverso mais comum. Monitorar pressão arterial.'
    },
    interactions: {
      text: 'Beta-bloqueadores (↑ bradicardia). Digoxina (↑ níveis). Ciclosporina (↑ níveis).',
      tooltip: 'Beta-bloqueadores: bradicardia aditiva. Digoxina: inibe metabolismo.'
    },
    monitoring: {
      text: 'Pressão arterial. Frequência cardíaca. ECG. Função hepática.',
      tooltip: 'Monitorar hipotensão. ECG: observar bradicardia. ALT, AST.'
    },
    evidence: {
      text: 'Bloqueador de cálcio eficaz para hipertensão. Seguro para uso prolongado.',
      tooltip: 'Alternativa útil para hipertensão. Menos efeitos adversos que beta-bloqueadores.'
    }
  },
  {
    name: 'Dipirona',
    sector: 'Analgesia',
    class: 'Analgésico não opioide; Pirazolona.',
    commercialNames: ['Novalgina®', 'Dipirona'],
    highlights: [
      'Analgésico e antipirético.',
      'Efeito antiespasmódico.',
      'Indicado para dor e febre.',
      'Risco de agranulocitose.'
    ],
    clinicalIndications: {
      text: 'Dor aguda. Febre. Cólicas. Dor pós-operatória. Dor musculoesquelética.',
      tooltip: 'Especialmente útil para dor aguda e febre.'
    },
    mechanism: {
      text: 'Inibe síntese de prostaglandinas. Bloqueia ciclooxigenase. Efeito antiespasmódico.',
      tooltip: 'Inibe COX-1 e COX-2, reduzindo síntese de prostaglandinas inflamatórias.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (90%). Início: 30-60 min. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Dor/Febre',
        dose: '25-50 mg/kg',
        route: 'PO/IM/IV',
        interval: '6-8h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Dor/Febre',
        dose: '25-50 mg/kg',
        route: 'PO/IM/IV',
        interval: '6-8h',
        notes: 'Bem tolerado. Monitorar hemograma.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IM/IV: aplicar lentamente. Monitorar reações.',
      tooltip: 'Melhor absorção com alimentos. IM/IV: administrar lentamente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Doença hepática grave. Gestação.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Agranulocitose (rara). Hepatotoxicidade. Reações alérgicas. Hipotensão.',
      tooltip: 'Agranulocitose é o efeito adverso mais grave. Monitorar hemograma.'
    },
    interactions: {
      text: 'Anticoagulantes (↑ risco hemorragia). Outros AINEs (↑ toxicidade).',
      tooltip: 'Anticoagulantes: risco de sangramento. AINEs: toxicidade aditiva.'
    },
    monitoring: {
      text: 'Hemograma. Função hepática. Sinais de reação alérgica.',
      tooltip: 'Leucócitos e neutrófilos. ALT, AST. Observar reações alérgicas.'
    },
    evidence: {
      text: 'Analgésico eficaz para dor aguda. Antipirético útil.',
      tooltip: 'Alternativa útil para dor e febre. Monitoramento de hemograma necessário.'
    }
  }
];
