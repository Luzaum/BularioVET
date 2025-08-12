import { Drug } from '../types';

export const newDrugs12: Drug[] = [
  {
    name: 'Doxiciclina',
    sector: 'Antimicrobianos',
    class: 'Tetraciclina semissintética; Inibidor da síntese proteica.',
    commercialNames: ['Vibramycin®', 'Doxycycline', 'Doxiciclina'],
    highlights: [
      'Tetraciclina de amplo espectro.',
      'Ativo contra patógenos intracelulares.',
      'Boa penetração tecidual.',
      'Indicado para múltiplas infecções.'
    ],
    clinicalIndications: {
      text: 'Rickettsioses (Ehrlichia, Anaplasma). Infecções respiratórias. Infecções urinárias. Leptospirose.',
      tooltip: 'Especialmente útil para patógenos intracelulares e infecções respiratórias.'
    },
    mechanism: {
      text: 'Inibe síntese proteica bacteriana (ribossomo 30S). Bacteriostático. Concentração-dependente.',
      tooltip: 'Liga-se à subunidade 30S, bloqueando a ligação do tRNA-aminoacil.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (90-95%). Início: 1-2h. Meia-vida: 18-24h. Metabolizado no fígado. Excreção biliar.',
      tooltip: 'Biodisponibilidade alta. Boa penetração tecidual, incluindo próstata e ossos.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Rickettsioses',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Duração: 14-28 dias. Com alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Rickettsioses',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Bem tolerado. Com alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Infecções respiratórias',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Duração: 7-14 dias. Com alimentos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Suspensão: agitar bem.',
      tooltip: 'Melhor absorção com alimentos. Evitar antiácidos 2h antes/depois.'
    },
    contraindications: {
      text: 'Hipersensibilidade a tetraciclinas. Gestação. Idade < 8 semanas.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em animais jovens (dentes).'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, diarreia). Fotosensibilidade. Hepatotoxicidade. Displasia dentária.',
      tooltip: 'Fotosensibilidade comum. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Antiácidos (↓ absorção). Cálcio, ferro (↓ absorção). Anticoagulantes.',
      tooltip: 'Antiácidos: administrar 2h separadamente. Cálcio: reduz absorção.'
    },
    monitoring: {
      text: 'Função hepática. Sinais de fotosensibilidade. Resposta clínica.',
      tooltip: 'ALT, AST. Observar eritema solar. Melhora em 48-72h.'
    },
    evidence: {
      text: 'Tetraciclina eficaz para patógenos intracelulares. Boa penetração tecidual.',
      tooltip: 'Padrão-ouro para rickettsioses. Alternativa útil para infecções respiratórias.'
    }
  },
  {
    name: 'Enrofloxacina',
    sector: 'Antimicrobianos',
    class: 'Fluoroquinolona; Inibidor da DNA girase.',
    commercialNames: ['Baytril®', 'Enrofloxacina'],
    highlights: [
      'Fluoroquinolona veterinária.',
      'Ativo contra Gram-negativos e alguns Gram-positivos.',
      'Boa penetração tecidual.',
      'Indicado para infecções graves.'
    ],
    clinicalIndications: {
      text: 'Infecções urinárias. Infecções respiratórias. Infecções cutâneas. Infecções por Pseudomonas.',
      tooltip: 'Especialmente útil para infecções por Gram-negativos resistentes.'
    },
    mechanism: {
      text: 'Inibe DNA girase e topoisomerase IV. Impede replicação bacteriana.',
      tooltip: 'Bloqueia a superenrolação do DNA bacteriano, causando morte celular.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (80-90%). Início: 1-2h. Meia-vida: 4-6h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Biodisponibilidade alta. Distribuição ampla, incluindo ossos e próstata.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções bacterianas',
        dose: '5-20 mg/kg',
        route: 'PO/SC',
        interval: '24h',
        notes: 'Dose mais alta para infecções graves. Com alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Infecções bacterianas',
        dose: '5-20 mg/kg',
        route: 'PO/SC',
        interval: '24h',
        notes: 'Bem tolerado. Com alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Infecções urinárias',
        dose: '5-10 mg/kg',
        route: 'PO/SC',
        interval: '24h',
        notes: 'Boa penetração urinária. Duração: 7-14 dias.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. SC: aplicar em tecido subcutâneo. Monitorar reações.',
      tooltip: 'Melhor absorção com alimentos. SC: aplicar lentamente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a fluoroquinolonas. Gestação. Idade < 6 meses.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em animais jovens (artropatia).'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, diarreia). Artropatia em jovens. Raramente: convulsões.',
      tooltip: 'Artropatia dose-dependente em animais jovens. Monitorar em pacientes epilépticos.'
    },
    interactions: {
      text: 'Antiácidos (↓ absorção). Cálcio, ferro (↓ absorção). Anticoagulantes.',
      tooltip: 'Antiácidos: administrar 2h separadamente. Cálcio: reduz absorção.'
    },
    monitoring: {
      text: 'Função renal. Sinais de artropatia. Resposta clínica.',
      tooltip: 'Creatinina e ureia. Observar claudicação em jovens. Melhora em 48-72h.'
    },
    evidence: {
      text: 'Fluoroquinolona eficaz para infecções por Gram-negativos. Boa penetração tecidual.',
      tooltip: 'Alternativa útil para infecções resistentes. Cuidado com resistência bacteriana.'
    }
  },
  {
    name: 'Eritromicina',
    sector: 'Antimicrobianos',
    class: 'Macrolídeo; Inibidor da síntese proteica.',
    commercialNames: ['Erythromycin', 'Eritromicina'],
    highlights: [
      'Macrolídeo de primeira geração.',
      'Ativo contra Gram-positivos e alguns Gram-negativos.',
      'Efeitos gastrointestinais frequentes.',
      'Indicado para infecções respiratórias.'
    ],
    clinicalIndications: {
      text: 'Infecções respiratórias. Infecções cutâneas. Infecções por Mycoplasma. Gastroparesia.',
      tooltip: 'Especialmente útil para infecções respiratórias e por Mycoplasma.'
    },
    mechanism: {
      text: 'Inibe síntese proteica bacteriana (ribossomo 50S). Bacteriostático. Concentração-dependente.',
      tooltip: 'Liga-se à subunidade 50S, bloqueando a translocação de peptídeos.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (30-60%). Início: 1-2h. Meia-vida: 1-2h. Metabolizado no fígado. Excreção biliar.',
      tooltip: 'Biodisponibilidade baixa. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções respiratórias',
        dose: '10-15 mg/kg',
        route: 'PO',
        interval: '8h',
        notes: 'Com alimentos. Duração: 7-14 dias.'
      },
      {
        species: 'Gato',
        indication: 'Infecções respiratórias',
        dose: '10-15 mg/kg',
        route: 'PO',
        interval: '8h',
        notes: 'Bem tolerado. Com alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Gastroparesia',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '8h',
        notes: 'Dose menor para efeito procinético.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Suspensão: agitar bem.',
      tooltip: 'Melhor absorção com alimentos. Reduz irritação gástrica.'
    },
    contraindications: {
      text: 'Hipersensibilidade a macrolídeos. Doença hepática grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, vômito, diarreia). Hepatotoxicidade. Raramente: arritmias.',
      tooltip: 'Efeitos gastrointestinais são os mais comuns. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Potente inibidor do CYP3A4. Aumenta níveis de muitos fármacos. Anticoagulantes.',
      tooltip: 'Aumenta níveis de ciclosporina, digoxina, fenobarbital. Monitorar interações.'
    },
    monitoring: {
      text: 'Função hepática. Sinais gastrointestinais. Resposta clínica.',
      tooltip: 'ALT, AST. Observar náusea, vômito. Melhora em 48-72h.'
    },
    evidence: {
      text: 'Macrolídeo eficaz para infecções respiratórias. Efeito procinético útil.',
      tooltip: 'Alternativa útil para infecções respiratórias. Menos resistência que penicilinas.'
    }
  },
  {
    name: 'Famotidina',
    sector: 'Gastroenterologia',
    class: 'Antagonista H2; Inibidor da secreção ácida.',
    commercialNames: ['Pepcid®', 'Famotidina'],
    highlights: [
      'Antagonista H2 de segunda geração.',
      'Reduz secreção ácida gástrica.',
      'Indicado para úlceras e refluxo.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: {
      text: 'Úlcera péptica. Refluxo gastroesofágico. Gastrite. Esofagite. Profilaxia de úlceras.',
      tooltip: 'Especialmente útil para úlceras pépticas e refluxo gastroesofágico.'
    },
    mechanism: {
      text: 'Antagonista competitivo dos receptores H2 da histamina. Reduz secreção ácida gástrica.',
      tooltip: 'Bloqueia a ligação da histamina aos receptores H2 nas células parietais.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (40-60%). Início: 1-2h. Duração: 8-12h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático limitado. Acúmulo em insuficiência renal.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Úlcera/Refluxo',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Dose única diária. Com ou sem alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Úlcera/Refluxo',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Bem tolerado. Com ou sem alimentos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Profilaxia úlcera',
        dose: '0,5 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Dose menor para profilaxia. Com ou sem alimentos.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Comprimidos: podem ser esmagados. Suspensão: agitar bem. Com ou sem alimentos.',
      tooltip: 'Melhor absorção com alimentos. Manter horário consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a antagonistas H2. Insuficiência renal grave.',
      tooltip: 'Histórico de reações alérgicas. Ajustar dose em insuficiência renal.'
    },
    adverseEffects: {
      text: 'Gastrointestinais leves (náusea, diarreia). Raramente: hepatotoxicidade. Cefaleia.',
      tooltip: 'Efeitos adversos geralmente leves. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Poucas interações significativas. Pode afetar absorção de alguns fármacos.',
      tooltip: 'Pode reduzir absorção de cetoconazol, itraconazol. Monitorar níveis.'
    },
    monitoring: {
      text: 'Sinais de melhora. Função renal em uso prolongado. Resposta clínica.',
      tooltip: 'Observar melhora dos sintomas. Creatinina em pacientes renais.'
    },
    evidence: {
      text: 'Antagonista H2 eficaz para úlceras. Seguro para uso prolongado.',
      tooltip: 'Alternativa útil para úlceras e refluxo. Menos potente que inibidores da bomba de prótons.'
    }
  },
  {
    name: 'Fenobarbital',
    sector: 'Neurologia',
    class: 'Barbitúrico; Anticonvulsivante.',
    commercialNames: ['Luminal®', 'Fenobarbital'],
    highlights: [
      'Anticonvulsivante de primeira linha.',
      'Indutor enzimático potente.',
      'Monitoramento de níveis séricos necessário.',
      'Indicado para epilepsia.'
    ],
    clinicalIndications: {
      text: 'Epilepsia. Convulsões. Status epilepticus. Sedação. Indução enzimática.',
      tooltip: 'Especialmente útil para controle de epilepsia em cães e gatos.'
    },
    mechanism: {
      text: 'Potencializa inibição GABAérgica. Bloqueia canais de sódio. Induz enzimas hepáticas.',
      tooltip: 'Liga-se ao receptor GABA-A, aumentando influxo de Cl- e inibindo neurônios.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (80-90%). Início: 1-2h. Meia-vida: 50-100h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Meia-vida longa permite dose única diária. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Epilepsia',
        dose: '2-5 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Dose inicial. Ajustar baseado em níveis séricos.'
      },
      {
        species: 'Gato',
        indication: 'Epilepsia',
        dose: '2-5 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Bem tolerado. Monitorar níveis séricos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Status epilepticus',
        dose: '5-10 mg/kg',
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
      text: 'Hipersensibilidade a barbitúricos. Doença hepática grave. Porfiria.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.'
    },
    adverseEffects: {
      text: 'Sedação, ataxia. Hepatotoxicidade. Hiperplasia gengival. Osteomalácia.',
      tooltip: 'Sedação é o efeito adverso mais comum. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Potente indutor do CYP450. Acelera metabolismo de muitos fármacos.',
      tooltip: 'Acelera metabolismo de ciclosporina, digoxina, fenitoína. Monitorar níveis.'
    },
    monitoring: {
      text: 'Níveis séricos (15-45 μg/mL). Função hepática. Frequência de convulsões.',
      tooltip: 'Níveis séricos: 15-45 μg/mL. ALT, AST. Observar controle das convulsões.'
    },
    evidence: {
      text: 'Anticonvulsivante eficaz para epilepsia. Monitoramento rigoroso essencial.',
      tooltip: 'Padrão-ouro para epilepsia canina. Indução enzimática significativa.'
    }
  }
];
