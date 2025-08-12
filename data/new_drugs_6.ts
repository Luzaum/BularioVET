import { Drug } from '../types';

export const newDrugs6: Drug[] = [
  {
    name: 'Brometo de Pancurônio',
    sector: 'Anestesia',
    class: 'Bloqueador neuromuscular não-despolarizante; Aminosteróide.',
    commercialNames: ['Pavulon®', 'Pancuronium'],
    highlights: [
      'Bloqueador neuromuscular de longa duração.',
      'Causa taquicardia por bloqueio vagal.',
      'Reversível com anticolinesterásicos.',
      'Indicado para intubação e cirurgias longas.'
    ],
    clinicalIndications: {
      text: 'Intubação endotraqueal. Relaxamento muscular durante cirurgias. Ventilação mecânica.',
      tooltip: 'Especialmente útil em procedimentos cirúrgicos longos que requerem relaxamento muscular profundo.'
    },
    mechanism: {
      text: 'Antagonista competitivo da acetilcolina nos receptores nicotínicos da placa motora.',
      tooltip: 'Bloqueia a transmissão neuromuscular sem despolarizar a membrana.'
    },
    pharmacokinetics: {
      text: 'Início: 2-3 min IV. Duração: 60-90 min. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Efeito prolongado. Acúmulo em insuficiência renal.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Intubação/Relaxamento',
        dose: '0,06-0,1 mg/kg',
        route: 'IV',
        interval: '60-90 min',
        notes: 'Dose inicial. Repetir 1/3 da dose se necessário.'
      },
      {
        species: 'Gato',
        indication: 'Intubação/Relaxamento',
        dose: '0,06-0,1 mg/kg',
        route: 'IV',
        interval: '60-90 min',
        notes: 'Mais sensível que cães. Monitorar cuidadosamente.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar IV lentamente. Monitorar com estimulador de nervo. Manter ventilação assistida.',
      tooltip: 'Sempre usar com ventilação controlada. Monitorar profundidade do bloqueio.'
    },
    contraindications: {
      text: 'Insuficiência renal grave. Miastenia gravis. Histórico de reações alérgicas.',
      tooltip: 'Acúmulo em insuficiência renal. Pode precipitar crise miastênica.'
    },
    adverseEffects: {
      text: 'Taquicardia, hipertensão. Prolongamento do bloqueio. Raramente: reações alérgicas.',
      tooltip: 'Taquicardia por bloqueio vagal. Monitorar função renal.'
    },
    interactions: {
      text: 'Aminoglicosídeos (↑ duração). AINEs (↑ duração). Corticosteroides.',
      tooltip: 'Muitos antibióticos prolongam o bloqueio. Monitorar profundidade.'
    },
    monitoring: {
      text: 'Estimulador de nervo. Ventilação. Pressão arterial. Função renal.',
      tooltip: 'Monitorar resposta ao estímulo nervoso. Manter SpO2 > 95%.'
    },
    evidence: {
      text: 'Bloqueador neuromuscular bem estabelecido. Seguro quando usado com ventilação adequada.',
      tooltip: 'Padrão-ouro para relaxamento muscular em cirurgias longas.'
    }
  },
  {
    name: 'Bupivacaína',
    sector: 'Anestesia Local',
    class: 'Anestésico local; Amida.',
    commercialNames: ['Marcaine®', 'Sensorcaine®', 'Bupivacaína'],
    highlights: [
      'Anestésico local de longa duração.',
      'Alta potência e toxicidade.',
      'Bloqueio motor e sensitivo prolongado.',
      'Útil para analgesia pós-operatória.'
    ],
    clinicalIndications: {
      text: 'Anestesia local e regional. Bloqueios nervosos. Analgesia pós-operatória. Epidural.',
      tooltip: 'Especialmente útil para analgesia prolongada após cirurgias.'
    },
    mechanism: {
      text: 'Bloqueia canais de sódio dependentes de voltagem. Impede propagação do impulso nervoso.',
      tooltip: 'Liga-se ao canal de Na+ no estado inativado, estabilizando a membrana neuronal.'
    },
    pharmacokinetics: {
      text: 'Início: 5-15 min. Duração: 4-8h. Metabolizada no fígado. Excreção renal.',
      tooltip: 'Duração prolongada. Acúmulo em insuficiência hepática.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Bloqueio local',
        dose: '1-2 mg/kg',
        route: 'Local/Regional',
        interval: '4-8h',
        notes: 'Dose máxima total. Diluir conforme necessário.'
      },
      {
        species: 'Gato',
        indication: 'Bloqueio local',
        dose: '1-2 mg/kg',
        route: 'Local/Regional',
        interval: '4-8h',
        notes: 'Mais sensível que cães. Usar com cautela.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Epidural',
        dose: '0,5-1 mg/kg',
        route: 'Epidural',
        interval: '6-8h',
        notes: 'Diluir em NaCl 0,9%. Monitorar função motora.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Diluir conforme necessário. Administrar lentamente. Aspirar antes da injeção.',
      tooltip: 'Sempre aspirar para evitar injeção intravascular. Usar agulha apropriada.'
    },
    contraindications: {
      text: 'Hipersensibilidade a anestésicos locais. Coagulopatias. Infecção local.',
      tooltip: 'Histórico de reações alérgicas a amidas (lidocaína, mepivacaína).'
    },
    adverseEffects: {
      text: 'Toxicidade sistêmica (convulsões, arritmias). Reações locais. Raramente: metemoglobinemia.',
      tooltip: 'Toxicidade cardíaca mais grave que lidocaína. Monitorar sinais de toxicidade.'
    },
    interactions: {
      text: 'Antiarrítmicos (potencialização). Anticoagulantes (↑ risco hemorragia).',
      tooltip: 'Antiarrítmicos: efeitos cardíacos aditivos. Anticoagulantes: risco de hematoma.'
    },
    monitoring: {
      text: 'Sinais de toxicidade sistêmica. Função motora. Pressão arterial. ECG.',
      tooltip: 'Observar convulsões, arritmias, depressão respiratória. Monitorar ECG.'
    },
    evidence: {
      text: 'Anestésico local eficaz e seguro quando usado corretamente. Duração prolongada vantajosa.',
      tooltip: 'Padrão-ouro para analgesia prolongada. Menos tóxico que ropivacaína.'
    }
  },
  {
    name: 'Butorfanol',
    sector: 'Analgesia',
    class: 'Agonista-antagonista opioide; Derivado da morfina.',
    commercialNames: ['Torbugesic®', 'Stadol®', 'Butorfanol'],
    highlights: [
      'Analgésico opioide com efeito teto.',
      'Menor depressão respiratória que agonistas puros.',
      'Antitussígeno eficaz.',
      'Reversível com naloxona.'
    ],
    clinicalIndications: {
      text: 'Analgesia moderada a severa. Antitussígeno. Sedação. Pré-medicação anestésica.',
      tooltip: 'Especialmente útil para dor aguda e tosse. Efeito teto limita uso em dor crônica.'
    },
    mechanism: {
      text: 'Agonista parcial dos receptores μ-opioides. Antagonista dos receptores κ-opioides.',
      tooltip: 'Efeito teto devido à atividade agonista parcial. Menos depressão respiratória.'
    },
    pharmacokinetics: {
      text: 'Início: 5-15 min IV, 30-60 min IM. Duração: 2-4h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Biodisponibilidade oral baixa. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Analgesia',
        dose: '0,2-0,4 mg/kg',
        route: 'IV/IM/SC',
        interval: '2-4h',
        notes: 'Dose inicial. Ajustar conforme resposta.'
      },
      {
        species: 'Gato',
        indication: 'Analgesia',
        dose: '0,2-0,4 mg/kg',
        route: 'IV/IM/SC',
        interval: '2-4h',
        notes: 'Bem tolerado. Menor depressão respiratória.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Antitussígeno',
        dose: '0,05-0,1 mg/kg',
        route: 'PO/SC',
        interval: '6-8h',
        notes: 'Dose menor para tosse. Duração mais longa.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar IV lentamente. IM/SC: aplicar em músculo grande. Monitorar sedação.',
      tooltip: 'IV: administrar em 2-3 min. IM/SC: evitar vasos sanguíneos.'
    },
    contraindications: {
      text: 'Hipersensibilidade a opioides. Trauma craniano. Insuficiência respiratória grave.',
      tooltip: 'Histórico de reações alérgicas a opioides. Cuidado em pacientes com TCE.'
    },
    adverseEffects: {
      text: 'Sedação, ataxia. Náusea, vômito. Depressão respiratória leve. Midríase.',
      tooltip: 'Menos depressão respiratória que agonistas puros. Sedação dose-dependente.'
    },
    interactions: {
      text: 'Outros depressores do SNC (↑ sedação). AINEs (sinergia analgésica).',
      tooltip: 'Benzodiazepínicos, barbitúricos: sedação aditiva. AINEs: analgesia sinérgica.'
    },
    monitoring: {
      text: 'Nível de sedação. Frequência respiratória. Pressão arterial. Resposta à dor.',
      tooltip: 'Observar depressão respiratória. Avaliar adequação da analgesia.'
    },
    evidence: {
      text: 'Opioide seguro e eficaz. Menor risco de depressão respiratória que agonistas puros.',
      tooltip: 'Boa opção para analgesia aguda. Antitussígeno eficaz.'
    }
  },
  {
    name: 'Calcitriol',
    sector: 'Endocrinologia',
    class: 'Vitamina D ativa; Metabolito da vitamina D3.',
    commercialNames: ['Rocaltrol®', 'Calcijex®', 'Calcitriol'],
    highlights: [
      'Forma ativa da vitamina D.',
      'Regula metabolismo do cálcio e fósforo.',
      'Indicado em hipoparatireoidismo.',
      'Monitoramento rigoroso necessário.'
    ],
    clinicalIndications: {
      text: 'Hipoparatireoidismo. Doença renal crônica. Hipocalcemia. Raquitismo.',
      tooltip: 'Especialmente útil quando há deficiência de vitamina D ativa.'
    },
    mechanism: {
      text: 'Liga-se ao receptor de vitamina D. Aumenta absorção intestinal de cálcio. Mobiliza cálcio ósseo.',
      tooltip: 'Ativa transcrição de genes relacionados ao metabolismo do cálcio.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável. Início: 2-6h. Duração: 1-3 dias. Metabolizado no fígado. Excreção biliar.',
      tooltip: 'Meia-vida longa. Acúmulo em insuficiência renal.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Hipoparatireoidismo',
        dose: '0,01-0,02 μg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Ajustar baseado no cálcio sérico. Monitorar rigorosamente.'
      },
      {
        species: 'Gato',
        indication: 'Hipoparatireoidismo',
        dose: '0,01-0,02 μg/kg',
        route: 'PO',
        interval: '12-24h',
        notes: 'Dose similar ao cão. Monitorar cálcio e fósforo.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Manter horário consistente. Não esmagar cápsulas.',
      tooltip: 'Absorção melhor com alimentos gordurosos. Manter dose consistente.'
    },
    contraindications: {
      text: 'Hipercalcemia. Hipervitaminose D. Calcinose tecidual.',
      tooltip: 'Histórico de hipercalcemia. Calcinose em tecidos moles.'
    },
    adverseEffects: {
      text: 'Hipercalcemia, hipercalciúria. Náusea, vômito. Calcinose tecidual. Arritmias.',
      tooltip: 'Hipercalcemia é o efeito adverso mais grave. Monitorar cálcio sérico.'
    },
    interactions: {
      text: 'Diuréticos tiazídicos (↑ cálcio). Corticosteroides (↓ absorção). Anticonvulsivantes.',
      tooltip: 'Tiazídicos: reduzem excreção de cálcio. Corticosteroides: antagonizam efeito.'
    },
    monitoring: {
      text: 'Cálcio sérico (semanal inicialmente). Fósforo. Função renal. Sinais de hipercalcemia.',
      tooltip: 'Cálcio total e iônico. PTH se disponível. Observar sinais de toxicidade.'
    },
    evidence: {
      text: 'Tratamento padrão para hipoparatireoidismo. Eficaz em doença renal crônica.',
      tooltip: 'Vitamina D ativa mais potente. Monitoramento rigoroso essencial.'
    }
  },
  {
    name: 'Carprofeno',
    sector: 'Analgesia',
    class: 'Anti-inflamatório não esteroidal (AINE); Inibidor seletivo da COX-2.',
    commercialNames: ['Rimadyl®', 'Carprofeno'],
    highlights: [
      'AINE seletivo para COX-2 em cães.',
      'Analgésico e anti-inflamatório eficaz.',
      'Melhor perfil de segurança que AINEs não seletivos.',
      'Indicado para dor aguda e crônica.'
    ],
    clinicalIndications: {
      text: 'Dor aguda pós-operatória. Osteoartrite. Dor musculoesquelética. Inflamação.',
      tooltip: 'Especialmente útil para dor crônica em cães. Menos efeitos gastrointestinais.'
    },
    mechanism: {
      text: 'Inibe seletivamente a ciclooxigenase-2 (COX-2). Reduz síntese de prostaglandinas inflamatórias.',
      tooltip: 'Seletividade COX-2 reduz efeitos gastrointestinais. Mantém analgesia.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (90%). Início: 1-2h. Meia-vida: 8-12h. Metabolizado no fígado. Excreção renal.',
      tooltip: 'Biodisponibilidade alta. Metabolismo hepático extenso.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Dor aguda',
        dose: '2-4 mg/kg',
        route: 'PO/SC',
        interval: '12h',
        notes: 'Duração: 3-5 dias. Administrar com alimentos.'
      },
      {
        species: 'Cão',
        indication: 'Osteoartrite',
        dose: '2-4 mg/kg',
        route: 'PO',
        interval: '12h',
        notes: 'Uso crônico. Monitorar função hepática e renal.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar com alimentos. Comprimidos: podem ser esmagados. Suspensão: agitar bem.',
      tooltip: 'Melhor absorção com alimentos. Reduz irritação gástrica.'
    },
    contraindications: {
      text: 'Hipersensibilidade a AINEs. Úlcera péptica ativa. Insuficiência renal/hepática grave.',
      tooltip: 'Histórico de reações alérgicas a AINEs. Cuidado em pacientes com doença renal.'
    },
    adverseEffects: {
      text: 'Gastrointestinais (náusea, vômito, diarreia). Hepatotoxicidade. Nefrotoxicidade.',
      tooltip: 'Menos efeitos gastrointestinais que AINEs não seletivos. Monitorar enzimas hepáticas.'
    },
    interactions: {
      text: 'Corticosteroides (↑ risco úlcera). Diuréticos (↑ nefrotoxicidade). Anticoagulantes.',
      tooltip: 'Corticosteroides: risco de úlcera gástrica. Diuréticos: reduzem fluxo renal.'
    },
    monitoring: {
      text: 'Função hepática e renal. Sinais gastrointestinais. Resposta clínica.',
      tooltip: 'ALT, AST, creatinina. Observar melhora da dor. Monitorar efeitos adversos.'
    },
    evidence: {
      text: 'AINE seguro e eficaz para cães. Seletividade COX-2 reduz efeitos adversos.',
      tooltip: 'Padrão-ouro para dor crônica em cães. Menos tóxico que AINEs não seletivos.'
    }
  }
];
