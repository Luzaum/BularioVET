import { Drug } from '../types';

export const newDrugs14: Drug[] = [
  {
    name: 'Gentamicina',
    sector: 'Antimicrobianos',
    class: 'Aminoglicosídeo; Inibidor da síntese proteica.',
    commercialNames: ['Garamicina®', 'Gentamicina'],
    highlights: [
      'Aminoglicosídeo de amplo espectro.',
      'Ativo contra Gram-negativos.',
      'Nefrotoxicidade e ototoxicidade.',
      'Indicado para infecções graves.'
    ],
    clinicalIndications: {
      text: 'Infecções por Gram-negativos. Infecções urinárias. Infecções abdominais. Septicemia.',
      tooltip: 'Especialmente útil para infecções por Gram-negativos resistentes.'
    },
    mechanism: {
      text: 'Inibe síntese proteica bacteriana (ribossomo 30S). Bactericida. Concentração-dependente.',
      tooltip: 'Liga-se à subunidade 30S, causando leitura incorreta do mRNA.'
    },
    pharmacokinetics: {
      text: 'Biodisponibilidade oral baixa. Início: 15-30 min IM. Meia-vida: 2-3h. Excreção renal.',
      tooltip: 'Não absorvido por via oral. Excreção renal inalterada.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções graves',
        dose: '6-8 mg/kg',
        route: 'IM/IV',
        interval: '24h',
        notes: 'Dose única diária. Monitorar função renal.'
      },
      {
        species: 'Gato',
        indication: 'Infecções graves',
        dose: '6-8 mg/kg',
        route: 'IM/IV',
        interval: '24h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Infecções urinárias',
        dose: '6-8 mg/kg',
        route: 'IM/IV',
        interval: '24h',
        notes: 'Boa penetração urinária. Duração: 7-14 dias.'
      }
    ],
    dilutionAndAdministration: {
      text: 'IM: aplicar em músculo grande. IV: infusão lenta (30-60 min). Monitorar função renal.',
      tooltip: 'IM: aplicar em músculo glúteo ou quadríceps. IV: diluir em NaCl 0,9%.'
    },
    contraindications: {
      text: 'Hipersensibilidade a aminoglicosídeos. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Nefrotoxicidade. Ototoxicidade. Bloqueio neuromuscular. Reações no local da injeção.',
      tooltip: 'Nefrotoxicidade é o efeito adverso mais comum. Monitorar creatinina.'
    },
    interactions: {
      text: 'Outros nefrotóxicos (↑ toxicidade). Diuréticos (↑ nefrotoxicidade).',
      tooltip: 'AINEs, vancomicina: nefrotoxicidade aditiva. Diuréticos: reduzem fluxo renal.'
    },
    monitoring: {
      text: 'Função renal (creatinina, ureia). Audição. Sinais de toxicidade.',
      tooltip: 'Creatinina e ureia. Observar sinais de nefrotoxicidade. Teste auditivo se necessário.'
    },
    evidence: {
      text: 'Aminoglicosídeo eficaz para Gram-negativos. Monitoramento rigoroso necessário.',
      tooltip: 'Alternativa útil para infecções resistentes. Nefrotoxicidade limitante.'
    }
  },
  {
    name: 'Glicose',
    sector: 'Nutrição',
    class: 'Carboidrato; Fonte de energia.',
    commercialNames: ['Glicose', 'Dextrose'],
    highlights: [
      'Fonte primária de energia.',
      'Indicado para hipoglicemia.',
      'Suporte nutricional.',
      'Seguro para uso parenteral.'
    ],
    clinicalIndications: {
      text: 'Hipoglicemia. Suporte nutricional. Desidratação. Choque.',
      tooltip: 'Especialmente útil para correção de hipoglicemia e suporte nutricional.'
    },
    mechanism: {
      text: 'Fornece energia via glicólise. Mantém glicemia. Suporte osmótico.',
      tooltip: 'Metabolizada via glicólise para produção de ATP. Mantém pressão osmótica.'
    },
    pharmacokinetics: {
      text: 'Absorção oral rápida. Início: 5-15 min PO, imediato IV. Metabolizada no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Armazenamento como glicogênio.'
    },
    doses: [
      {
        species: 'Cão/Gato',
        indication: 'Hipoglicemia',
        dose: '0,5-1 g/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Solução 50%. Administrar lentamente.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Suporte nutricional',
        dose: '2-4 g/kg/dia',
        route: 'IV',
        interval: 'Contínuo',
        notes: 'Solução 5-10%. Infusão contínua.'
      }
    ],
    dilutionAndAdministration: {
      text: 'IV: administrar lentamente. Monitorar glicemia. Evitar extravasamento.',
      tooltip: 'IV: administrar em 5-10 min. Monitorar glicemia durante infusão.'
    },
    contraindications: {
      text: 'Hiperglicemia grave. Hiperosmolaridade. Edema cerebral.',
      tooltip: 'Cuidado em pacientes diabéticos. Monitorar osmolaridade.'
    },
    adverseEffects: {
      text: 'Hiperglicemia. Flebite. Extravasamento. Raramente: reações alérgicas.',
      tooltip: 'Hiperglicemia é o efeito adverso mais comum. Monitorar glicemia.'
    },
    interactions: {
      text: 'Insulina (↓ glicemia). Corticosteroides (↑ glicemia).',
      tooltip: 'Insulina: reduz glicemia. Corticosteroides: aumentam glicemia.'
    },
    monitoring: {
      text: 'Glicemia. Sinais de melhora. Função renal.',
      tooltip: 'Glicose sérica. Observar melhora dos sintomas. Creatinina.'
    },
    evidence: {
      text: 'Fonte de energia essencial. Segura para uso parenteral.',
      tooltip: 'Padrão-ouro para correção de hipoglicemia. Suporte nutricional útil.'
    }
  },
  {
    name: 'Heparina',
    sector: 'Hematologia',
    class: 'Anticoagulante; Glicosaminoglicano.',
    commercialNames: ['Heparina', 'Heparina Sódica'],
    highlights: [
      'Anticoagulante parenteral.',
      'Ação rápida e reversível.',
      'Monitoramento de TTPa necessário.',
      'Indicado para trombose.'
    ],
    clinicalIndications: {
      text: 'Trombose. Embolia pulmonar. Profilaxia de trombose. Coagulação intravascular disseminada.',
      tooltip: 'Especialmente útil para tratamento e profilaxia de trombose.'
    },
    mechanism: {
      text: 'Potencializa ação da antitrombina III. Inibe fatores de coagulação IIa e Xa.',
      tooltip: 'Liga-se à antitrombina III, acelerando inibição da trombina e fator Xa.'
    },
    pharmacokinetics: {
      text: 'Biodisponibilidade oral baixa. Início: imediato IV, 20-60 min SC. Meia-vida: 1-2h. Metabolizada no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Trombose',
        dose: '200-300 U/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Dose de ataque. Seguir com infusão contínua.'
      },
      {
        species: 'Gato',
        indication: 'Trombose',
        dose: '200-300 U/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Bem tolerado. Monitorar TTPa.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Profilaxia',
        dose: '100-200 U/kg',
        route: 'SC',
        interval: '8-12h',
        notes: 'Dose menor para profilaxia. Monitorar TTPa.'
      }
    ],
    dilutionAndAdministration: {
      text: 'IV: administrar lentamente. SC: aplicar em tecido subcutâneo. Monitorar TTPa.',
      tooltip: 'IV: administrar em 2-3 min. SC: aplicar em tecido subcutâneo.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Hemorragia ativa. Trombocitopenia induzida por heparina.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com hemorragia.'
    },
    adverseEffects: {
      text: 'Hemorragia. Trombocitopenia. Osteoporose (uso prolongado). Reações no local da injeção.',
      tooltip: 'Hemorragia é o efeito adverso mais grave. Monitorar plaquetas.'
    },
    interactions: {
      text: 'AINEs (↑ risco hemorragia). Antiplaquetários (↑ risco hemorragia).',
      tooltip: 'AINEs: risco de hemorragia. Antiplaquetários: efeito aditivo.'
    },
    monitoring: {
      text: 'TTPa (1,5-2,5x controle). Plaquetas. Sinais de hemorragia.',
      tooltip: 'TTPa: 1,5-2,5x controle. Plaquetas: > 100.000/μL. Observar hemorragia.'
    },
    evidence: {
      text: 'Anticoagulante eficaz para trombose. Monitoramento rigoroso essencial.',
      tooltip: 'Padrão-ouro para anticoagulação parenteral. Reversível com protamina.'
    }
  },
  {
    name: 'Hidrocortisona',
    sector: 'Endocrinologia',
    class: 'Corticosteroide natural; Glicocorticoide.',
    commercialNames: ['Cortisol', 'Hidrocortisona'],
    highlights: [
      'Corticosteroide natural.',
      'Ação glicocorticoide e mineralocorticoide.',
      'Indicado para insuficiência adrenal.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: {
      text: 'Insuficiência adrenal. Choque. Alergias. Inflamação. Reposição hormonal.',
      tooltip: 'Especialmente útil para reposição hormonal na insuficiência adrenal.'
    },
    mechanism: {
      text: 'Liga-se aos receptores de glicocorticoides e mineralocorticoides. Regula metabolismo e inflamação.',
      tooltip: 'Ativa receptores nucleares, regulando expressão de genes relacionados ao metabolismo.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (80-90%). Início: 1-2h. Meia-vida: 8-12h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Insuficiência adrenal',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Insuficiência adrenal',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Bem tolerado. Monitorar sinais de excesso.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Choque',
        dose: '5-10 mg/kg',
        route: 'IV',
        interval: 'Dose única',
        notes: 'Dose alta para choque. Repetir se necessário.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IV: infusão lenta. Manter horário consistente.',
      tooltip: 'Melhor absorção com alimentos. IV: administrar lentamente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Infecções fúngicas sistêmicas. Úlcera péptica ativa.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com infecções.'
    },
    adverseEffects: {
      text: 'Supressão adrenal. Hiperglicemia. Osteoporose. Imunossupressão.',
      tooltip: 'Supressão adrenal com uso prolongado. Monitorar glicemia em diabéticos.'
    },
    interactions: {
      text: 'AINEs (↑ risco úlcera). Diuréticos (↑ hipocalemia). Anticoagulantes.',
      tooltip: 'AINEs: risco de úlcera gástrica. Diuréticos: hipocalemia aditiva.'
    },
    monitoring: {
      text: 'Glicemia. Função adrenal. Sinais de excesso. Peso corporal.',
      tooltip: 'Glicose sérica. Teste de estimulação com ACTH. Observar sinais de Cushing.'
    },
    evidence: {
      text: 'Corticosteroide natural eficaz. Seguro para reposição hormonal.',
      tooltip: 'Padrão-ouro para reposição glicocorticoide. Monitoramento rigoroso necessário.'
    }
  },
  {
    name: 'Ibuprofeno',
    sector: 'Analgesia',
    class: 'Anti-inflamatório não esteroidal (AINE); Inibidor da COX.',
    commercialNames: ['Advil®', 'Ibuprofeno'],
    highlights: [
      'AINE de primeira geração.',
      'Analgésico e antipirético.',
      'Efeitos gastrointestinais frequentes.',
      'Indicado para dor e febre.'
    ],
    clinicalIndications: {
      text: 'Dor aguda. Febre. Inflamação. Dor musculoesquelética. Cefaleia.',
      tooltip: 'Especialmente útil para dor aguda e febre.'
    },
    mechanism: {
      text: 'Inibe ciclooxigenase (COX-1 e COX-2). Reduz síntese de prostaglandinas inflamatórias.',
      tooltip: 'Bloqueia COX-1 e COX-2, reduzindo síntese de prostaglandinas.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (80-90%). Início: 30-60 min. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Dor/Febre',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '8h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Dor/Febre',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '8h',
        notes: 'Bem tolerado. Monitorar função renal.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Suspensão: agitar bem.',
      tooltip: 'Melhor absorção com alimentos. Reduz irritação gástrica.'
    },
    contraindications: {
      text: 'Hipersensibilidade a AINEs. Úlcera péptica ativa. Insuficiência renal/hepática grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com doença renal.'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, vômito, diarreia). Nefrotoxicidade. Hepatotoxicidade.',
      tooltip: 'Efeitos gastrointestinais são os mais comuns. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Corticosteroides (↑ risco úlcera). Diuréticos (↑ nefrotoxicidade). Anticoagulantes.',
      tooltip: 'Corticosteroides: risco de úlcera gástrica. Diuréticos: reduzem fluxo renal.'
    },
    monitoring: {
      text: 'Função hepática e renal. Sinais gastrointestinais. Resposta clínica.',
      tooltip: 'ALT, AST, creatinina. Observar náusea, vômito. Melhora em 24-48h.'
    },
    evidence: {
      text: 'AINE eficaz para dor aguda. Efeitos gastrointestinais limitantes.',
      tooltip: 'Alternativa útil para dor e febre. Monitoramento de efeitos adversos necessário.'
    }
  }
];
