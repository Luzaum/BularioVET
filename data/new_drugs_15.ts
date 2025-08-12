import { Drug } from '../types';

export const newDrugs15: Drug[] = [
  {
    name: 'Insulina Glargina',
    sector: 'Endocrinologia',
    class: 'Insulina de ação prolongada; Análogo da insulina.',
    commercialNames: ['Lantus®', 'Insulina Glargina'],
    highlights: [
      'Insulina de ação prolongada.',
      'Perfil de ação basal.',
      'Uma dose diária.',
      'Indicado para diabetes mellitus.'
    ],
    clinicalIndications: {
      text: 'Diabetes mellitus tipo 1 e 2. Controle glicêmico basal. Terapia insulínica intensiva.',
      tooltip: 'Especialmente útil para controle glicêmico basal em diabetes mellitus.'
    },
    mechanism: {
      text: 'Liga-se ao receptor de insulina. Aumenta captação de glicose. Inibe gliconeogênese.',
      tooltip: 'Ativa receptores de insulina, promovendo captação de glicose e síntese de glicogênio.'
    },
    pharmacokinetics: {
      text: 'Início: 1-2h. Pico: sem pico definido. Duração: 24h. Metabolizada no fígado. Excreção renal.',
      tooltip: 'Perfil de ação basal sem pico definido. Duração de 24 horas.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Diabetes mellitus',
        dose: '0,5-1 U/kg',
        route: 'SC',
        interval: '24h',
        notes: 'Dose inicial. Ajustar baseado na glicemia.'
      },
      {
        species: 'Gato',
        indication: 'Diabetes mellitus',
        dose: '0,5-1 U/kg',
        route: 'SC',
        interval: '24h',
        notes: 'Bem tolerado. Monitorar glicemia.'
      }
    ],
    dilutionAndAdministration: {
      text: 'SC: aplicar em tecido subcutâneo. Rotacionar locais de injeção. Manter horário consistente.',
      tooltip: 'Aplicar em tecido subcutâneo. Rotacionar locais para evitar lipodistrofia.'
    },
    contraindications: {
      text: 'Hipoglicemia. Alergia à insulina. Cetoacidose diabética.',
      tooltip: 'Histórico de reações alérgicas. Tratar cetoacidose antes do uso.'
    },
    adverseEffects: {
      text: 'Hipoglicemia. Lipodistrofia no local da injeção. Raramente: reações alérgicas.',
      tooltip: 'Hipoglicemia é o efeito adverso mais grave. Monitorar glicemia.'
    },
    interactions: {
      text: 'Corticosteroides (↑ glicemia). Diuréticos tiazídicos (↑ glicemia).',
      tooltip: 'Corticosteroides: aumentam glicemia. Diuréticos: podem aumentar glicemia.'
    },
    monitoring: {
      text: 'Glicemia. Curva glicêmica. Sinais de hipoglicemia. Peso corporal.',
      tooltip: 'Glicose sérica. Curva glicêmica mensal. Observar sinais de hipoglicemia.'
    },
    evidence: {
      text: 'Insulina eficaz para controle glicêmico basal. Uma dose diária conveniente.',
      tooltip: 'Alternativa útil para diabetes mellitus. Perfil de ação basal vantajoso.'
    }
  },
  {
    name: 'Insulina Regular',
    sector: 'Endocrinologia',
    class: 'Insulina de ação rápida; Insulina humana.',
    commercialNames: ['Humulin R®', 'Insulina Regular'],
    highlights: [
      'Insulina de ação rápida.',
      'Início rápido de ação.',
      'Indicado para controle pós-prandial.',
      'Seguro para uso IV.'
    ],
    clinicalIndications: {
      text: 'Diabetes mellitus. Cetoacidose diabética. Controle glicêmico pós-prandial. Emergências.',
      tooltip: 'Especialmente útil para controle glicêmico pós-prandial e emergências.'
    },
    mechanism: {
      text: 'Liga-se ao receptor de insulina. Aumenta captação de glicose. Inibe gliconeogênese.',
      tooltip: 'Ativa receptores de insulina, promovendo captação de glicose e síntese de glicogênio.'
    },
    pharmacokinetics: {
      text: 'Início: 15-30 min SC, imediato IV. Pico: 2-4h SC. Duração: 6-8h. Metabolizada no fígado. Excreção renal.',
      tooltip: 'Ação rápida com pico em 2-4 horas. Duração de 6-8 horas.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Diabetes mellitus',
        dose: '0,25-0,5 U/kg',
        route: 'SC',
        interval: '8-12h',
        notes: 'Dose inicial. Ajustar baseado na glicemia.'
      },
      {
        species: 'Gato',
        indication: 'Diabetes mellitus',
        dose: '0,25-0,5 U/kg',
        route: 'SC',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar glicemia.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Cetoacidose',
        dose: '0,1-0,2 U/kg/h',
        route: 'IV',
        interval: 'Contínuo',
        notes: 'Infusão contínua. Monitorar glicemia.'
      }
    ],
    dilutionAndAdministration: {
      text: 'SC: aplicar 30 min antes das refeições. IV: infusão contínua. Monitorar glicemia.',
      tooltip: 'SC: aplicar 30 min antes das refeições. IV: infusão contínua para cetoacidose.'
    },
    contraindications: {
      text: 'Hipoglicemia. Alergia à insulina. Cetoacidose grave.',
      tooltip: 'Histórico de reações alérgicas. Tratar cetoacidose grave antes do uso.'
    },
    adverseEffects: {
      text: 'Hipoglicemia. Lipodistrofia no local da injeção. Raramente: reações alérgicas.',
      tooltip: 'Hipoglicemia é o efeito adverso mais grave. Monitorar glicemia.'
    },
    interactions: {
      text: 'Corticosteroides (↑ glicemia). Diuréticos tiazídicos (↑ glicemia).',
      tooltip: 'Corticosteroides: aumentam glicemia. Diuréticos: podem aumentar glicemia.'
    },
    monitoring: {
      text: 'Glicemia. Curva glicêmica. Sinais de hipoglicemia. Peso corporal.',
      tooltip: 'Glicose sérica. Curva glicêmica mensal. Observar sinais de hipoglicemia.'
    },
    evidence: {
      text: 'Insulina eficaz para controle glicêmico pós-prandial. Segura para uso IV.',
      tooltip: 'Padrão-ouro para controle glicêmico pós-prandial. Segura para emergências.'
    }
  },
  {
    name: 'Itraconazol',
    sector: 'Antifúngicos',
    class: 'Triazol; Inibidor da síntese de ergosterol.',
    commercialNames: ['Sporanox®', 'Itraconazol'],
    highlights: [
      'Antifúngico triazol de amplo espectro.',
      'Boa penetração tecidual.',
      'Indicado para micoses sistêmicas.',
      'Monitoramento de níveis séricos necessário.'
    ],
    clinicalIndications: {
      text: 'Dermatofitose. Aspergilose. Candidíase. Micoses sistêmicas. Histoplasmose.',
      tooltip: 'Especialmente útil para micoses sistêmicas e dermatofitose refratária.'
    },
    mechanism: {
      text: 'Inibe a enzima lanosterol 14-α-desmetilase. Reduz síntese de ergosterol na membrana fúngica.',
      tooltip: 'Bloqueia a conversão de lanosterol em ergosterol, causando dano à membrana fúngica.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (55-65%). Início: 1-2h. Meia-vida: 20-30h. Metabolizado no fígado. Excreção biliar.',
      tooltip: 'Biodisponibilidade melhorada com alimentos ácidos. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Micoses sistêmicas',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Com alimentos ácidos. Duração: 2-8 semanas.'
      },
      {
        species: 'Gato',
        indication: 'Micoses sistêmicas',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Bem tolerado. Com alimentos ácidos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Dermatofitose',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Duração: 4-8 semanas. Com alimentos ácidos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos ácidos (suco de laranja, vinagre). Cápsulas: não esmagar.',
      tooltip: 'Absorção melhor com alimentos ácidos. Não esmagar cápsulas.'
    },
    contraindications: {
      text: 'Hipersensibilidade a azólicos. Doença hepática grave. Gestação.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Hepatotoxicidade. Gastrointestinais (náusea, vômito). Raramente: insuficiência cardíaca.',
      tooltip: 'Hepatotoxicidade é o efeito adverso mais grave. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Potente inibidor do CYP3A4. Aumenta níveis de muitos fármacos.',
      tooltip: 'Aumenta níveis de ciclosporina, digoxina, fenobarbital. Monitorar interações.'
    },
    monitoring: {
      text: 'Função hepática. Níveis séricos. Sinais de melhora. Resposta clínica.',
      tooltip: 'ALT, AST. Níveis séricos: 0,5-2 μg/mL. Observar melhora dos sintomas.'
    },
    evidence: {
      text: 'Antifúngico eficaz para micoses sistêmicas. Boa penetração tecidual.',
      tooltip: 'Alternativa útil para micoses refratárias. Monitoramento rigoroso necessário.'
    }
  },
  {
    name: 'Ketoconazol',
    sector: 'Antifúngicos',
    class: 'Imidazol; Inibidor da síntese de ergosterol.',
    commercialNames: ['Nizoral®', 'Ketoconazole'],
    highlights: [
      'Antifúngico imidazol de amplo espectro.',
      'Inibidor potente do citocromo P450.',
      'Indicado para micoses cutâneas e sistêmicas.',
      'Monitoramento hepático necessário.'
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
        notes: 'Bem tolerado. Com alimentos ácidos.'
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
      tooltip: 'Absorção melhor com alimentos ácidos. Manter horário consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a azólicos. Doença hepática grave. Gestação.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Hepatotoxicidade. Gastrointestinais (náusea, vômito). Supressão adrenal (altas doses).',
      tooltip: 'Hepatotoxicidade é o efeito adverso mais grave. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Potente inibidor do CYP3A4. Aumenta níveis de muitos fármacos.',
      tooltip: 'Aumenta níveis de ciclosporina, digoxina, fenobarbital. Monitorar interações.'
    },
    monitoring: {
      text: 'Função hepática. Sinais de melhora. Resposta clínica.',
      tooltip: 'ALT, AST, FA. Observar melhora dos sintomas. Duração do tratamento.'
    },
    evidence: {
      text: 'Antifúngico eficaz para micoses cutâneas e sistêmicas. Inibidor potente do CYP450.',
      tooltip: 'Alternativa útil para micoses. Monitoramento hepático essencial.'
    }
  },
  {
    name: 'Lactulose',
    sector: 'Gastroenterologia',
    class: 'Dissacarídeo sintético; Laxante osmótico.',
    commercialNames: ['Lactulose', 'Duphalac®'],
    highlights: [
      'Laxante osmótico.',
      'Reduz amônia no sangue.',
      'Indicado para constipação e encefalopatia hepática.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: {
      text: 'Constipação. Encefalopatia hepática. Hiperamonemia. Megacólon.',
      tooltip: 'Especialmente útil para constipação crônica e encefalopatia hepática.'
    },
    mechanism: {
      text: 'Aumenta pressão osmótica no cólon. Fermentação bacteriana produz ácidos orgânicos.',
      tooltip: 'Não absorvida, aumenta pressão osmótica e acidifica o cólon.'
    },
    pharmacokinetics: {
      text: 'Não absorvida pelo intestino delgado. Fermentada no cólon. Excreção fecal.',
      tooltip: 'Não há absorção sistêmica. Efeito local no cólon.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Constipação',
        dose: '0,5-1 ml/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Constipação',
        dose: '0,5-1 ml/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Ajustar conforme resposta.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Encefalopatia hepática',
        dose: '0,5-1 ml/kg',
        route: 'PO',
        interval: '6-8h',
        notes: 'Dose mais frequente para encefalopatia.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Pode ser diluída em água. Manter horário consistente.',
      tooltip: 'Melhor tolerância com alimentos. Pode ser diluída para melhor palatabilidade.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Obstrução intestinal. Galactosemia.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com obstrução.'
    },
    adverseEffects: {
      text: 'Diarreia, cólicas abdominais. Flatulência. Desidratação (altas doses).',
      tooltip: 'Diarreia é o efeito adverso mais comum. Monitorar hidratação.'
    },
    interactions: {
      text: 'Poucas interações significativas. Pode afetar absorção de alguns fármacos.',
      tooltip: 'Pode reduzir absorção de alguns medicamentos. Administrar separadamente.'
    },
    monitoring: {
      text: 'Frequência de evacuação. Consistência das fezes. Hidratação.',
      tooltip: 'Observar frequência de evacuação. Monitorar consistência das fezes.'
    },
    evidence: {
      text: 'Laxante eficaz para constipação. Seguro para uso prolongado.',
      tooltip: 'Alternativa útil para constipação crônica. Sem absorção sistêmica.'
    }
  }
];
