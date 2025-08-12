import { Drug } from '../types';

export const newDrugs10: Drug[] = [
  {
    name: 'Citrato de Potássio',
    sector: 'Nefrologia',
    class: 'Suplemento de potássio; Alcalinizante urinário.',
    commercialNames: ['Urocit-K®', 'K-Lyte®', 'Citrato de Potássio'],
    highlights: [
      'Suplemento de potássio oral.',
      'Alcaliniza a urina.',
      'Indicado para hipocalemia.',
      'Previne cálculos de oxalato de cálcio.'
    ],
    clinicalIndications: {
      text: 'Hipocalemia. Acidose metabólica. Prevenção de cálculos urinários. Alcalinização urinária.',
      tooltip: 'Especialmente útil para correção de hipocalemia e prevenção de cálculos.'
    },
    mechanism: {
      text: 'Fornece íons potássio. O citrato é metabolizado a bicarbonato, alcalinizando a urina.',
      tooltip: 'Repõe potássio corporal. Citrato: metabolizado a bicarbonato no ciclo de Krebs.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (60-90%). Início: 1-2h. Duração: 4-6h. Excreção renal.',
      tooltip: 'Absorção melhor com alimentos. Excreção renal dependente da função renal.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Hipocalemia',
        dose: '2-4 mEq/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dividir em 2-3 doses. Com alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Hipocalemia',
        dose: '2-4 mEq/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Com alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Prevenção cálculos',
        dose: '50-100 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dose baseada no citrato. Ajustar conforme pH urinário.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Suspensão: agitar bem.',
      tooltip: 'Melhor absorção com alimentos. Evitar administração em jejum.'
    },
    contraindications: {
      text: 'Hipercalemia. Insuficiência renal grave. Obstrução urinária.',
      tooltip: 'Histórico de hipercalemia. Cuidado em pacientes com disfunção renal.'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, diarreia). Hipercalemia (altas doses). Irritação gástrica.',
      tooltip: 'Irritação gástrica comum. Monitorar potássio sérico.'
    },
    interactions: {
      text: 'Diuréticos poupadores de potássio (↑ risco hipercalemia). IECA. ARA II.',
      tooltip: 'Diuréticos poupadores: risco de hipercalemia. IECA/ARA II: monitorar potássio.'
    },
    monitoring: {
      text: 'Potássio sérico. pH urinário. Função renal. Sinais de toxicidade.',
      tooltip: 'Potássio: 3,5-5,5 mEq/L. pH urinário: 6,5-7,5. Observar sinais de hipercalemia.'
    },
    evidence: {
      text: 'Suplemento eficaz para hipocalemia. Alcalinizante urinário útil.',
      tooltip: 'Alternativa útil para correção de hipocalemia. Previne cálculos de oxalato.'
    }
  },
  {
    name: 'Clindamicina',
    sector: 'Antimicrobianos',
    class: 'Lincosamida; Inibidor da síntese proteica.',
    commercialNames: ['Cleocin®', 'Dalacin®', 'Clindamicina'],
    highlights: [
      'Antibiótico ativo contra anaeróbios.',
      'Boa penetração óssea e tecidual.',
      'Indicado para infecções dentárias.',
      'Risco de colite pseudomembranosa.'
    ],
    clinicalIndications: {
      text: 'Infecções anaeróbias. Infecções dentárias. Osteomielite. Infecções cutâneas profundas.',
      tooltip: 'Especialmente útil para infecções por anaeróbios e infecções dentárias.'
    },
    mechanism: {
      text: 'Inibe síntese proteica bacteriana (ribossomo 50S). Bacteriostático. Concentração-dependente.',
      tooltip: 'Liga-se à subunidade 50S, bloqueando a translocação de peptídeos.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (90%). Início: 1-2h. Meia-vida: 2-3h. Metabolizado no fígado. Excreção biliar.',
      tooltip: 'Biodisponibilidade alta. Boa penetração óssea e tecidos moles.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções anaeróbias',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Com alimentos. Duração: 7-14 dias.'
      },
      {
        species: 'Gato',
        indication: 'Infecções anaeróbias',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Com alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Infecções dentárias',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Boa penetração óssea. Duração: 10-14 dias.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Suspensão: agitar bem.',
      tooltip: 'Melhor absorção com alimentos. Reduz irritação gástrica.'
    },
    contraindications: {
      text: 'Hipersensibilidade a lincosamidas. Doença hepática grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, diarreia). Colite pseudomembranosa. Hepatotoxicidade.',
      tooltip: 'Colite pseudomembranosa rara mas grave. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Eritromicina (antagonismo). Anticoagulantes (↑ risco hemorragia).',
      tooltip: 'Eritromicina: antagonismo no ribossomo. Anticoagulantes: monitorar INR.'
    },
    monitoring: {
      text: 'Função hepática. Sinais de colite. Resposta clínica.',
      tooltip: 'ALT, AST. Observar diarreia persistente. Melhora em 48-72h.'
    },
    evidence: {
      text: 'Antibiótico eficaz para anaeróbios. Boa penetração óssea.',
      tooltip: 'Alternativa útil para infecções anaeróbias. Cuidado com resistência bacteriana.'
    }
  },
  {
    name: 'Cloridrato de Tramadol',
    sector: 'Analgesia',
    class: 'Analgésico opioide atípico; Agonista μ-opioide + inibidor da recaptação.',
    commercialNames: ['Tramadol', 'Ultram®', 'Tramal®'],
    highlights: [
      'Analgésico opioide com duplo mecanismo.',
      'Menor depressão respiratória que opioides clássicos.',
      'Indicado para dor moderada a severa.',
      'Metabolizado a metabólito ativo.'
    ],
    clinicalIndications: {
      text: 'Dor aguda pós-operatória. Dor crônica. Dor neuropática. Dor oncológica.',
      tooltip: 'Especialmente útil para dor moderada a severa com menor risco de depressão respiratória.'
    },
    mechanism: {
      text: 'Agonista fraco dos receptores μ-opioides. Inibe recaptação de serotonina e noradrenalina.',
      tooltip: 'Mecanismo duplo: ativação opioide + inibição da recaptação de monoaminas.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (75%). Início: 30-60 min. Meia-vida: 4-6h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Metabólito O-desmetiltramadol é ativo.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Dor aguda',
        dose: '2-4 mg/kg',
        route: 'PO',
        interval: '6-8h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Dor aguda',
        dose: '2-4 mg/kg',
        route: 'PO',
        interval: '6-8h',
        notes: 'Bem tolerado. Monitorar sedação.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Dor crônica',
        dose: '2-4 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Uso prolongado. Monitorar função hepática.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Comprimidos: podem ser esmagados. Suspensão: agitar bem. Com ou sem alimentos.',
      tooltip: 'Melhor absorção com alimentos. Manter horário consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a opioides. Epilepsia não controlada. Doença hepática grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes epilépticos.'
    },
    adverseEffects: {
      text: 'Sedação, ataxia. Náusea, vômito. Convulsões (raro). Depressão respiratória leve.',
      tooltip: 'Menos depressão respiratória que opioides clássicos. Monitorar em epilépticos.'
    },
    interactions: {
      text: 'Outros depressores do SNC (↑ sedação). AINEs (sinergia analgésica).',
      tooltip: 'Benzodiazepínicos, barbitúricos: sedação aditiva. AINEs: analgesia sinérgica.'
    },
    monitoring: {
      text: 'Nível de sedação. Frequência respiratória. Resposta à dor. Função hepática.',
      tooltip: 'Observar depressão respiratória. Avaliar adequação da analgesia.'
    },
    evidence: {
      text: 'Analgésico eficaz com menor risco de depressão respiratória. Seguro para uso prolongado.',
      tooltip: 'Boa opção para dor moderada a severa. Menos tóxico que opioides clássicos.'
    }
  },
  {
    name: 'Clorpromazina',
    sector: 'Psiquiatria',
    class: 'Antipsicótico típico; Fenotiazina.',
    commercialNames: ['Thorazine®', 'Largactil®', 'Clorpromazina'],
    highlights: [
      'Antipsicótico típico de primeira geração.',
      'Efeitos antipsicóticos e antieméticos.',
      'Múltiplos efeitos adversos.',
      'Indicado para agitação e vômitos.'
    ],
    clinicalIndications: {
      text: 'Agitação psicomotora. Vômitos intratáveis. Ansiedade severa. Comportamento agressivo.',
      tooltip: 'Especialmente útil para controle de agitação e vômitos refratários.'
    },
    mechanism: {
      text: 'Antagonista dos receptores D2 dopaminérgicos. Bloqueia receptores α1 e H1.',
      tooltip: 'Bloqueio D2: efeito antipsicótico. Bloqueio H1: antiemético. Bloqueio α1: hipotensão.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (30-50%). Início: 30-60 min. Meia-vida: 20-40h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Agitação/Vômitos',
        dose: '0,5-2 mg/kg',
        route: 'PO/IM',
        interval: '6-8h',
        notes: 'Dose inicial baixa. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Agitação/Vômitos',
        dose: '0,5-2 mg/kg',
        route: 'PO/IM',
        interval: '6-8h',
        notes: 'Bem tolerado. Monitorar sedação.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IM: aplicar em músculo grande. Monitorar pressão arterial.',
      tooltip: 'Melhor absorção com alimentos. IM: monitorar hipotensão.'
    },
    contraindications: {
      text: 'Hipersensibilidade a fenotiazinas. Doença hepática grave. Glaucoma.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Sedação, hipotensão. Extrapiramidal (tremores, rigidez). Anticolinérgicos. Hepatotoxicidade.',
      tooltip: 'Síndrome extrapiramidal comum. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Outros depressores do SNC (↑ sedação). Anticolinérgicos (↑ efeitos).',
      tooltip: 'Benzodiazepínicos, barbitúricos: sedação aditiva. Atropina: efeitos anticolinérgicos aditivos.'
    },
    monitoring: {
      text: 'Pressão arterial. Função hepática. Sinais extrapiramidais. Nível de sedação.',
      tooltip: 'Monitorar hipotensão. ALT, AST. Observar tremores, rigidez.'
    },
    evidence: {
      text: 'Antipsicótico eficaz para agitação. Antiemético útil.',
      tooltip: 'Alternativa útil para controle de agitação. Múltiplos efeitos adversos.'
    }
  },
  {
    name: 'Clortalidona',
    sector: 'Cardiologia',
    class: 'Diurético tiazídico; Inibidor do cotransportador Na-Cl.',
    commercialNames: ['Hygroton®', 'Clortalidona'],
    highlights: [
      'Diurético tiazídico de longa duração.',
      'Reduz pressão arterial.',
      'Indicado para hipertensão.',
      'Pode causar hipocalemia.'
    ],
    clinicalIndications: {
      text: 'Hipertensão arterial. Edema. Insuficiência cardíaca. Prevenção de cálculos renais.',
      tooltip: 'Especialmente útil para hipertensão arterial e edema.'
    },
    mechanism: {
      text: 'Inibe o cotransportador Na-Cl no túbulo distal. Aumenta excreção de sódio e água.',
      tooltip: 'Bloqueia reabsorção de Na+ e Cl- no túbulo distal, causando diurese.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (60-80%). Início: 2-4h. Duração: 24-72h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Duração prolongada permite dose única diária. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Hipertensão',
        dose: '2-4 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Dose única diária. Monitorar potássio.'
      },
      {
        species: 'Gato',
        indication: 'Hipertensão',
        dose: '2-4 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Bem tolerado. Monitorar potássio.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Edema',
        dose: '2-4 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Ajustar conforme resposta. Monitorar eletrólitos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar pela manhã. Comprimidos: podem ser esmagados. Com ou sem alimentos.',
      tooltip: 'Administração matinal reduz noctúria. Manter horário consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a tiazídicos. Anúria. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção renal.'
    },
    adverseEffects: {
      text: 'Hipocalemia, hiponatremia. Hipercalcemia. Hiperuricemia. Hiperglicemia.',
      tooltip: 'Hipocalemia é o efeito adverso mais comum. Monitorar eletrólitos.'
    },
    interactions: {
      text: 'Digoxina (↑ toxicidade). Corticosteroides (↑ hipocalemia). AINEs (↓ eficácia).',
      tooltip: 'Digoxina: hipocalemia aumenta toxicidade. Corticosteroides: hipocalemia aditiva.'
    },
    monitoring: {
      text: 'Eletrólitos (potássio, sódio). Função renal. Pressão arterial. Glicemia.',
      tooltip: 'Potássio: 3,5-5,5 mEq/L. Creatinina, ureia. Pressão arterial. Glicose.'
    },
    evidence: {
      text: 'Diurético eficaz para hipertensão. Duração prolongada vantajosa.',
      tooltip: 'Alternativa útil para hipertensão. Monitoramento de eletrólitos essencial.'
    }
  }
];
