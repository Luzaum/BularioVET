import { Drug } from '../types';

export const newDrugs9: Drug[] = [
  {
    name: 'Ciclofosfamida',
    sector: 'Oncologia',
    class: 'Agente alquilante; Quimioterápico.',
    commercialNames: ['Cytoxan®', 'Endoxan®', 'Ciclofosfamida'],
    highlights: [
      'Quimioterápico alquilante de amplo espectro.',
      'Ativo contra linfomas e sarcomas.',
      'Mielossupressão significativa.',
      'Requer monitoramento rigoroso.'
    ],
    clinicalIndications: {
      text: 'Linfoma. Sarcomas. Leucemias. Doenças autoimunes (lúpus, pênfigo).',
      tooltip: 'Especialmente útil para linfomas e como imunossupressor em doenças autoimunes.'
    },
    mechanism: {
      text: 'Agente alquilante que forma ligações cruzadas no DNA. Inibe síntese de DNA e RNA.',
      tooltip: 'Ativa-se no fígado formando metabólitos que alquilam bases do DNA, causando morte celular.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (75-90%). Início: 1-2h. Meia-vida: 3-12h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática/renal.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Linfoma',
        dose: '200-250 mg/m²',
        route: 'PO/IV',
        interval: 'Semanal',
        notes: 'Dose baseada em área de superfície corporal. Monitorar hemograma.'
      },
      {
        species: 'Gato',
        indication: 'Linfoma',
        dose: '200-250 mg/m²',
        route: 'PO/IV',
        interval: 'Semanal',
        notes: 'Bem tolerado. Monitorar hemograma rigorosamente.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Doenças autoimunes',
        dose: '50-100 mg/m²',
        route: 'PO',
        interval: '48-72h',
        notes: 'Dose menor para imunossupressão. Ajustar conforme resposta.'
      }
    ],
    dilutionAndAdministration: {
      text: 'PO: com alimentos. IV: infusão lenta (30-60 min). Hidratação adequada.',
      tooltip: 'Hidratação IV antes e após para prevenir cistite hemorrágica. Monitorar função renal.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Insuficiência renal/hepática grave. Gestação.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção orgânica.'
    },
    adverseEffects: {
      text: 'Mielossupressão (neutropenia, trombocitopenia). Cistite hemorrágica. Náusea, vômito.',
      tooltip: 'Neutropenia é o efeito limitante. Cistite hemorrágica pode ser grave.'
    },
    interactions: {
      text: 'Outros mielossupressores (↑ toxicidade). AINEs (↑ risco hemorragia). Barbitúricos.',
      tooltip: 'Mielossupressores: toxicidade aditiva. AINEs: risco de sangramento.'
    },
    monitoring: {
      text: 'Hemograma semanal. Função renal. Sinais de cistite. Resposta tumoral.',
      tooltip: 'Neutrófilos, plaquetas. Creatinina, ureia. Observar disúria, hematúria.'
    },
    evidence: {
      text: 'Quimioterápico eficaz para linfomas. Imunossupressor útil em doenças autoimunes.',
      tooltip: 'Padrão-ouro para linfoma canino. Monitoramento rigoroso essencial.'
    }
  },
  {
    name: 'Ciclosporina (microemulsão, sistêmica)',
    sector: 'Imunologia',
    class: 'Imunossupressor; Inibidor da calcineurina.',
    commercialNames: ['Atopica®', 'Neoral®', 'Sandimmun®'],
    highlights: [
      'Imunossupressor seletivo para linfócitos T.',
      'Indicado para dermatite atópica e doenças autoimunes.',
      'Monitoramento de níveis séricos necessário.',
      'Interações medicamentosas significativas.'
    ],
    clinicalIndications: {
      text: 'Dermatite atópica. Doenças autoimunes (pênfigo, lúpus). Transplantes. Enteropatia inflamatória.',
      tooltip: 'Especialmente útil para dermatite atópica refratária e doenças autoimunes.'
    },
    mechanism: {
      text: 'Inibe a calcineurina, bloqueando ativação de linfócitos T. Reduz produção de citocinas.',
      tooltip: 'Forma complexo com ciclofilina, inibindo a calcineurina e a transcrição de IL-2.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (20-50%). Início: 1-2h. Meia-vida: 8-12h. Metabolizado no fígado. Excreção biliar.',
      tooltip: 'Biodisponibilidade melhorada com microemulsão. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Dermatite atópica',
        dose: '5 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Dose inicial. Ajustar baseado na resposta e níveis séricos.'
      },
      {
        species: 'Gato',
        indication: 'Dermatite atópica',
        dose: '5-7 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Bem tolerado. Monitorar níveis séricos.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Doenças autoimunes',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Dose mais alta para imunossupressão. Monitorar rigorosamente.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Manter horário consistente. Não esmagar cápsulas.',
      tooltip: 'Absorção melhor com alimentos gordurosos. Manter dose consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Neoplasias. Infecções ativas. Doença hepática grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com neoplasias.'
    },
    adverseEffects: {
      text: 'Nefrotoxicidade. Hepatotoxicidade. Hipertensão. Hiperplasia gengival. Náusea, vômito.',
      tooltip: 'Nefrotoxicidade é o efeito adverso mais grave. Monitorar função renal.'
    },
    interactions: {
      text: 'Potente substrato do CYP3A4. Muitas interações. Antifúngicos azólicos (↑ níveis).',
      tooltip: 'Azólicos: inibem metabolismo. Barbitúricos: aceleram metabolismo.'
    },
    monitoring: {
      text: 'Níveis séricos (inicialmente semanal). Função renal e hepática. Pressão arterial.',
      tooltip: 'Níveis séricos: 200-600 ng/mL. Creatinina, ALT, AST. Pressão arterial.'
    },
    evidence: {
      text: 'Imunossupressor eficaz para dermatite atópica. Monitoramento rigoroso essencial.',
      tooltip: 'Alternativa útil para dermatite atópica refratária. Menos efeitos adversos que corticosteroides.'
    }
  },
  {
    name: 'Ciclosporina oftálmica 0,2–2%',
    sector: 'Oftalmologia',
    class: 'Imunossupressor tópico; Inibidor da calcineurina.',
    commercialNames: ['Restasis®', 'Ikervis®', 'Ciclosporina oftálmica'],
    highlights: [
      'Imunossupressor tópico para olho seco.',
      'Reduz inflamação da superfície ocular.',
      'Melhora produção de lágrimas.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: {
      text: 'Ceratoconjuntivite seca (KCS). Olho seco. Uveíte anterior. Doenças da superfície ocular.',
      tooltip: 'Especialmente útil para KCS autoimune e olho seco crônico.'
    },
    mechanism: {
      text: 'Inibe ativação de linfócitos T locais. Reduz inflamação da superfície ocular.',
      tooltip: 'Bloqueia a calcineurina localmente, reduzindo inflamação e melhorando função lacrimal.'
    },
    pharmacokinetics: {
      text: 'Absorção local mínima. Início: 2-4 semanas. Duração: 12h. Metabolismo local.',
      tooltip: 'Baixa absorção sistêmica. Efeito local prolongado.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'KCS/Olho seco',
        dose: '1-2 gotas',
        route: 'Oftálmico',
        interval: '12h',
        notes: 'Aplicar em ambos os olhos. Duração: indefinida.'
      },
      {
        species: 'Gato',
        indication: 'KCS/Olho seco',
        dose: '1-2 gotas',
        route: 'Oftálmico',
        interval: '12h',
        notes: 'Bem tolerado. Monitorar resposta clínica.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Aplicar diretamente no saco conjuntival. Evitar contato com ponta do frasco.',
      tooltip: 'Manter frasco refrigerado. Não tocar a ponta do frasco no olho.'
    },
    contraindications: {
      text: 'Hipersensibilidade à ciclosporina. Infecções oculares ativas.',
      tooltip: 'Histórico de reações alérgicas. Tratar infecções antes do uso.'
    },
    adverseEffects: {
      text: 'Irritação ocular leve. Sensação de queimação. Raramente: reações alérgicas.',
      tooltip: 'Irritação transitória comum no início. Geralmente bem tolerado.'
    },
    interactions: {
      text: 'Poucas interações locais. Evitar uso concomitante com outros colírios.',
      tooltip: 'Aguardar 5-10 min entre diferentes colírios. Baixa absorção sistêmica.'
    },
    monitoring: {
      text: 'Teste de Schirmer. Sinais de melhora. Resposta clínica.',
      tooltip: 'Teste de Schirmer mensal. Observar melhora da secreção lacrimal.'
    },
    evidence: {
      text: 'Tratamento eficaz para KCS. Melhora produção de lágrimas.',
      tooltip: 'Alternativa útil para olho seco. Menos efeitos adversos que corticosteroides tópicos.'
    }
  },
  {
    name: 'Ciprofloxacina',
    sector: 'Antimicrobianos',
    class: 'Fluoroquinolona; Inibidor da DNA girase.',
    commercialNames: ['Cipro®', 'Ciprofloxacina'],
    highlights: [
      'Fluoroquinolona de amplo espectro.',
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
      text: 'Boa absorção oral (70-80%). Início: 1-2h. Meia-vida: 3-5h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Biodisponibilidade alta. Distribuição ampla, incluindo ossos e próstata.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções bacterianas',
        dose: '10-20 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Dose mais alta para infecções graves. Com ou sem alimentos.'
      },
      {
        species: 'Gato',
        indication: 'Infecções bacterianas',
        dose: '10-20 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Infecções urinárias',
        dose: '15-20 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Boa penetração urinária. Duração: 7-14 dias.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Comprimidos: podem ser esmagados. Suspensão: agitar bem. Com ou sem alimentos.',
      tooltip: 'Melhor absorção com alimentos. Evitar antiácidos 2h antes/depois.'
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
    name: 'Cisaprida',
    sector: 'Gastroenterologia',
    class: 'Procinético; Agonista da serotonina.',
    commercialNames: ['Propulsid®', 'Cisaprida'],
    highlights: [
      'Procinético gastrointestinal.',
      'Aumenta motilidade do trato digestivo.',
      'Indicado para refluxo e constipação.',
      'Interações medicamentosas significativas.'
    ],
    clinicalIndications: {
      text: 'Refluxo gastroesofágico. Constipação. Megacólon. Gastroparesia.',
      tooltip: 'Especialmente útil para distúrbios de motilidade gastrointestinal.'
    },
    mechanism: {
      text: 'Agonista da serotonina (5-HT4). Aumenta liberação de acetilcolina no plexo mioentérico.',
      tooltip: 'Estimula receptores 5-HT4, aumentando a motilidade gastrointestinal.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (40-50%). Início: 30-60 min. Duração: 6-8h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Metabolismo hepático extenso. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Refluxo/Constipação',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: '30 min antes das refeições. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Refluxo/Constipação',
        dose: '0,5-1 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar função hepática.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar 30 min antes das refeições. Comprimidos: podem ser esmagados.',
      tooltip: 'Melhor efeito quando administrado antes das refeições. Manter horário consistente.'
    },
    contraindications: {
      text: 'Hipersensibilidade. Obstrução intestinal. Doença hepática grave.',
      tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com obstrução.'
    },
    adverseEffects: {
      text: 'Diarreia, cólicas abdominais. Raramente: arritmias cardíacas. Hepatotoxicidade.',
      tooltip: 'Diarreia por aumento da motilidade. Monitorar ECG em cardiopatas.'
    },
    interactions: {
      text: 'Potente substrato do CYP3A4. Muitas interações. Azólicos (↑ níveis).',
      tooltip: 'Azólicos: inibem metabolismo. Barbitúricos: aceleram metabolismo.'
    },
    monitoring: {
      text: 'Função hepática. Sinais de melhora. ECG em cardiopatas.',
      tooltip: 'ALT, AST. Observar melhora da motilidade. Monitorar arritmias.'
    },
    evidence: {
      text: 'Procinético eficaz para distúrbios de motilidade. Monitoramento rigoroso necessário.',
      tooltip: 'Alternativa útil para refluxo e constipação. Interações medicamentosas significativas.'
    }
  }
];
