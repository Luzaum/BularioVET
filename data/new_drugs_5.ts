import { Drug } from '../types';

export const newDrugs5: Drug[] = [
  {
    name: 'Amoxicilina',
    sector: 'Antimicrobianos',
    class: 'Penicilina semissintética; β-lactâmico.',
    commercialNames: ['Amoxil®', 'Clamoxyl®', 'Amoxicilina'],
    highlights: [
      'Antibiótico de primeira linha para infecções bacterianas.',
      'Boa absorção oral e distribuição tecidual.',
      'Sinergia com ácido clavulânico contra β-lactamases.',
      'Seguro em gestação e lactação.'
    ],
    clinicalIndications: {
      text: 'Infecções respiratórias, urinárias, cutâneas, odontológicas, gastrointestinais. Profilaxia cirúrgica.',
      tooltip: 'Primeira escolha para infecções por cocos Gram-positivos e bacilos Gram-negativos sensíveis.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana (PBP). Bactericida dependente do tempo.',
      tooltip: 'Liga-se às proteínas ligadoras de penicilina (PBP), bloqueando a transpeptidação e causando lise celular.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral (74-92%). Biodisponibilidade reduzida com alimentos. Meia-vida: 1-1,5h. Excreção renal.',
      tooltip: 'Concentração sérica máxima em 1-2h. Distribuição ampla, incluindo ossos e fluidos corporais.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções bacterianas',
        dose: '10-20 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Com ou sem alimentos. Dose mais alta para infecções graves.'
      },
      {
        species: 'Gato',
        indication: 'Infecções bacterianas',
        dose: '10-20 mg/kg',
        route: 'PO',
        interval: '8-12h',
        notes: 'Com ou sem alimentos. Bem tolerado.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Profilaxia cirúrgica',
        dose: '20 mg/kg',
        route: 'PO',
        interval: '2h antes da cirurgia',
        notes: 'Uma dose única antes do procedimento.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Suspensão oral: agitar bem antes do uso. Comprimidos: podem ser esmagados. Administrar com ou sem alimentos.',
      tooltip: 'Suspensões devem ser refrigeradas após reconstituição. Verificar concentração da formulação.'
    },
    contraindications: {
      text: 'Hipersensibilidade a penicilinas. Mononucleose infecciosa (erupção cutânea).',
      tooltip: 'Histórico de reações alérgicas graves a β-lactâmicos.'
    },
    adverseEffects: {
      text: 'Gastrointestinais leves (náusea, diarreia). Erupção cutânea. Raramente: hepatite, nefrite intersticial.',
      tooltip: 'Diarreia por alteração da flora intestinal. Monitorar em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Tetraciclinas (antagonismo). Anticoagulantes (↑ risco hemorragia).',
      tooltip: 'Probenecida reduz excreção renal. Tetraciclinas podem reduzir eficácia bactericida.'
    },
    monitoring: {
      text: 'Função renal em uso prolongado. Sinais de hipersensibilidade. Resposta clínica.',
      tooltip: 'Creatinina e ureia em pacientes com insuficiência renal. Observar melhora em 48-72h.'
    },
    evidence: {
      text: 'Antibiótico de primeira linha bem estabelecido. Resistência crescente em algumas regiões.',
      tooltip: 'Eficácia comprovada em infecções comunitárias. Monitorar padrões de resistência local.'
    }
  },
  {
    name: 'Amoxicilina + Ácido Clavulânico',
    sector: 'Antimicrobianos',
    class: 'Penicilina + inibidor de β-lactamase.',
    commercialNames: ['Augmentin®', 'Clavulin®', 'Co-amoxiclav'],
    highlights: [
      'Combinação sinérgica contra β-lactamases.',
      'Amplia espectro de atividade antimicrobiana.',
      'Indicado para infecções resistentes à amoxicilina.',
      'Maior risco de efeitos adversos que amoxicilina isolada.'
    ],
    clinicalIndications: {
      text: 'Infecções por bactérias produtoras de β-lactamase. Infecções respiratórias, urinárias, cutâneas, odontológicas.',
      tooltip: 'Especialmente útil quando há suspeita de resistência ou falha com amoxicilina isolada.'
    },
    mechanism: {
      text: 'Amoxicilina: inibe síntese da parede celular. Ácido clavulânico: inibe β-lactamases bacterianas.',
      tooltip: 'O ácido clavulânico protege a amoxicilina da degradação enzimática, ampliando o espectro.'
    },
    pharmacokinetics: {
      text: 'Absorção oral similar à amoxicilina. Ácido clavulânico: meia-vida 1h. Excreção renal de ambos.',
      tooltip: 'Concentrações teciduais adequadas. Biodisponibilidade não afetada por alimentos.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções bacterianas',
        dose: '12,5-25 mg/kg (base amoxicilina)',
        route: 'PO',
        interval: '8-12h',
        notes: 'Dose baseada no componente amoxicilina. Maior dose para infecções graves.'
      },
      {
        species: 'Gato',
        indication: 'Infecções bacterianas',
        dose: '12,5-25 mg/kg (base amoxicilina)',
        route: 'PO',
        interval: '8-12h',
        notes: 'Bem tolerado. Monitorar efeitos gastrointestinais.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Suspensão: agitar bem. Comprimidos: podem ser esmagados. Administrar com alimentos para reduzir náusea.',
      tooltip: 'Verificar concentração da formulação (amoxicilina:ácido clavulânico).'
    },
    contraindications: {
      text: 'Hipersensibilidade a penicilinas. Histórico de hepatite colestática.',
      tooltip: 'Ácido clavulânico pode causar hepatite idiosincrática.'
    },
    adverseEffects: {
      text: 'Gastrointestinais mais frequentes que amoxicilina isolada. Hepatite colestática (rara). Erupção cutânea.',
      tooltip: 'Náusea, vômito, diarreia mais comuns. Monitorar enzimas hepáticas em uso prolongado.'
    },
    interactions: {
      text: 'Probenecida (↑ níveis). Anticoagulantes (↑ risco hemorragia). Tetraciclinas (antagonismo).',
      tooltip: 'Mesmas interações da amoxicilina isolada.'
    },
    monitoring: {
      text: 'Função hepática em uso prolongado. Sinais gastrointestinais. Resposta clínica.',
      tooltip: 'ALT, AST, FA em tratamentos > 10 dias. Observar melhora em 48-72h.'
    },
    evidence: {
      text: 'Eficácia superior à amoxicilina isolada contra β-lactamases. Maior custo-benefício.',
      tooltip: 'Indicado quando há suspeita de resistência ou falha terapêutica prévia.'
    }
  },
  {
    name: 'Ampicilina',
    sector: 'Antimicrobianos',
    class: 'Penicilina semissintética; β-lactâmico.',
    commercialNames: ['Ampicilina', 'Penbritin®'],
    highlights: [
      'Antibiótico de amplo espectro parenteral.',
      'Ativo contra Gram-positivos e Gram-negativos.',
      'Susceptível a β-lactamases.',
      'Indicado para infecções graves.'
    ],
    clinicalIndications: {
      text: 'Infecções graves (septicemia, endocardite, meningite). Infecções urinárias, respiratórias, abdominais.',
      tooltip: 'Especialmente útil em infecções por Enterococcus e Listeria.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana. Bactericida dependente do tempo.',
      tooltip: 'Liga-se às PBP, bloqueando a transpeptidação e causando lise celular.'
    },
    pharmacokinetics: {
      text: 'Biodisponibilidade oral baixa (30-50%). Meia-vida: 1-1,5h. Excreção renal. Distribuição ampla.',
      tooltip: 'Melhor absorção em jejum. Concentrações adequadas em LCR em meninges inflamadas.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções graves',
        dose: '20-40 mg/kg',
        route: 'IV/IM',
        interval: '6-8h',
        notes: 'Dose mais alta para infecções graves. Infusão IV lenta.'
      },
      {
        species: 'Gato',
        indication: 'Infecções graves',
        dose: '20-40 mg/kg',
        route: 'IV/IM',
        interval: '6-8h',
        notes: 'Bem tolerado. Monitorar função renal.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Meningite',
        dose: '40 mg/kg',
        route: 'IV',
        interval: '6h',
        notes: 'Dose mais alta para penetração no SNC.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Reconstituir com água estéril ou NaCl 0,9%. Infusão IV lenta (5-10 min). IM: aplicar em músculo grande.',
      tooltip: 'Verificar compatibilidade com outros medicamentos. Não misturar com aminoglicosídeos.'
    },
    contraindications: {
      text: 'Hipersensibilidade a penicilinas. Insuficiência renal grave.',
      tooltip: 'Ajustar dose em insuficiência renal moderada.'
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
      text: 'Antibiótico parenteral bem estabelecido. Eficaz contra Enterococcus e Listeria.',
      tooltip: 'Primeira escolha para endocardite por Enterococcus. Penetração adequada no SNC.'
    }
  },
  {
    name: 'Atropina',
    sector: 'Cardiologia/Anestesia',
    class: 'Anticolinérgico; Antagonista muscarínico.',
    commercialNames: ['Atropina', 'Atropina Sulfato'],
    highlights: [
      'Antídoto para intoxicação por organofosforados.',
      'Bradicardia sinusal e bloqueios AV.',
      'Reduz secreções durante anestesia.',
      'Efeitos antimuscarínicos sistêmicos.'
    ],
    clinicalIndications: {
      text: 'Bradicardia sinusal, bloqueios AV. Intoxicação por organofosforados. Pré-medicação anestésica.',
      tooltip: 'Especialmente útil em emergências cardíacas e intoxicações.'
    },
    mechanism: {
      text: 'Antagonista competitivo dos receptores muscarínicos. Bloqueia efeitos da acetilcolina.',
      tooltip: 'Inibe a ativação dos receptores M1-M5, causando taquicardia e redução de secreções.'
    },
    pharmacokinetics: {
      text: 'Início rápido IV (1-2 min). Meia-vida: 2-4h. Metabolizada no fígado. Excreção renal.',
      tooltip: 'Efeito máximo em 15-30 min. Duração: 4-6h. Penetração no SNC limitada.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Bradicardia',
        dose: '0,02-0,04 mg/kg',
        route: 'IV/IM/SC',
        interval: '5-10 min',
        notes: 'Dose inicial 0,02 mg/kg. Repetir se necessário.'
      },
      {
        species: 'Gato',
        indication: 'Bradicardia',
        dose: '0,02-0,04 mg/kg',
        route: 'IV/IM/SC',
        interval: '5-10 min',
        notes: 'Mais sensível que cães. Monitorar arritmias.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Intoxicação organofosforados',
        dose: '0,2-0,5 mg/kg',
        route: 'IV/IM',
        interval: '15-30 min',
        notes: 'Dose inicial alta. Ajustar conforme resposta.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Pré-medicação anestésica',
        dose: '0,02-0,04 mg/kg',
        route: 'IM/SC',
        interval: '30 min antes',
        notes: 'Reduz secreções e bradicardia vagal.'
      }
    ],
    dilutionAndAdministration: {
      text: 'IV: administrar lentamente. IM/SC: aplicar em músculo grande. Monitorar ECG durante administração.',
      tooltip: 'Diluir em NaCl 0,9% se necessário. Evitar extravasamento (necrose tecidual).'
    },
    contraindications: {
      text: 'Glaucoma de ângulo fechado. Hipertrofia prostática. Taquicardia ventricular.',
      tooltip: 'Pode precipitar crise de glaucoma. Cuidado em cardiopatas.'
    },
    adverseEffects: {
      text: 'Taquicardia, arritmias. Midríase, visão turva. Xerostomia, retenção urinária. Delírio (altas doses).',
      tooltip: 'Efeitos antimuscarínicos sistêmicos. Monitorar especialmente em idosos.'
    },
    interactions: {
      text: 'Digoxina (↑ toxicidade). Antidepressivos tricíclicos (↑ efeitos). Antihistamínicos.',
      tooltip: 'Digoxina: risco de arritmias. Tricíclicos: efeitos antimuscarínicos aditivos.'
    },
    monitoring: {
      text: 'Frequência cardíaca, ECG. Pressão intraocular. Função renal. Estado mental.',
      tooltip: 'ECG contínuo em emergências. Observar sinais de toxicidade.'
    },
    evidence: {
      text: 'Antídoto padrão para organofosforados. Eficaz em bradicardia sinusal.',
      tooltip: 'Primeira linha em emergências cardíacas. Eficácia bem documentada.'
    }
  },
  {
    name: 'Azitromicina',
    sector: 'Antimicrobianos',
    class: 'Macrolídeo; Antibiótico de espectro ampliado.',
    commercialNames: ['Zithromax®', 'Azitromicina'],
    highlights: [
      'Macrolídeo com farmacocinética única.',
      'Concentração tecidual alta e prolongada.',
      'Ativo contra patógenos intracelulares.',
      'Dose única diária conveniente.'
    ],
    clinicalIndications: {
      text: 'Infecções respiratórias (Mycoplasma, Chlamydia). Infecções cutâneas. Toxoplasmose. Bartonelose.',
      tooltip: 'Especialmente útil para patógenos intracelulares e infecções respiratórias.'
    },
    mechanism: {
      text: 'Inibe síntese proteica bacteriana (ribossomo 50S). Bacteriostático. Concentração-dependente.',
      tooltip: 'Liga-se à subunidade 50S, bloqueando a translocação de peptídeos.'
    },
    pharmacokinetics: {
      text: 'Absorção oral variável (37-52%). Meia-vida longa (40-68h). Concentração tecidual alta. Excreção biliar.',
      tooltip: 'Distribuição ampla, incluindo macrófagos e neutrófilos. Efeito pós-antibiótico prolongado.'
    },
    doses: [
      {
        species: 'Cão',
        indication: 'Infecções respiratórias',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Duração: 5-7 dias. Administrar 1h antes ou 2h após refeição.'
      },
      {
        species: 'Gato',
        indication: 'Infecções respiratórias',
        dose: '5-10 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Bem tolerado. Duração: 5-7 dias.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Toxoplasmose',
        dose: '10 mg/kg',
        route: 'PO',
        interval: '24h',
        notes: 'Duração: 10-14 dias. Combinar com pirimetamina se necessário.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Administrar 1h antes ou 2h após refeição. Comprimidos: podem ser esmagados. Suspensão: agitar bem.',
      tooltip: 'Absorção reduzida com alimentos. Verificar concentração da formulação.'
    },
    contraindications: {
      text: 'Hipersensibilidade a macrolídeos. Doença hepática grave.',
      tooltip: 'Histórico de reações alérgicas a eritromicina ou outros macrolídeos.'
    },
    adverseEffects: {
      text: 'Gastrointestinais leves (náusea, diarreia). Raramente: hepatite, arritmias cardíacas.',
      tooltip: 'Menos efeitos gastrointestinais que eritromicina. Monitorar em cardiopatas.'
    },
    interactions: {
      text: 'Antiácidos (↓ absorção). Digoxina (↑ níveis). Ciclosporina (↑ níveis).',
      tooltip: 'Antiácidos: administrar 2h separadamente. Digoxina: monitorar níveis.'
    },
    monitoring: {
      text: 'Função hepática em uso prolongado. Sinais gastrointestinais. Resposta clínica.',
      tooltip: 'ALT, AST em tratamentos > 10 dias. Observar melhora em 48-72h.'
    },
    evidence: {
      text: 'Eficaz contra patógenos intracelulares. Conveniência da dose única diária.',
      tooltip: 'Alternativa à doxiciclina em algumas infecções. Menos resistência que eritromicina.'
    }
  },
  {
    name: 'Benzocaína',
    sector: 'Anestesia Local',
    class: 'Anestésico local; Éster.',
    commercialNames: ['Benzocaína', 'Hurricaine®', 'Cetacaine®'],
    highlights: [
      'Anestésico local tópico.',
      'Início rápido de ação.',
      'Baixa toxicidade sistêmica.',
      'Útil para procedimentos superficiais.'
    ],
    clinicalIndications: {
      text: 'Anestesia tópica (mucosas, pele). Alívio de dor local. Preparação para procedimentos menores.',
      tooltip: 'Especialmente útil para cateterização, suturas superficiais e exames.'
    },
    mechanism: {
      text: 'Bloqueia canais de sódio dependentes de voltagem. Impede propagação do impulso nervoso.',
      tooltip: 'Liga-se ao canal de Na+ no estado inativado, estabilizando a membrana neuronal.'
    },
    pharmacokinetics: {
      text: 'Absorção tópica variável. Início: 30-60 segundos. Duração: 15-45 minutos. Metabolizada no plasma.',
      tooltip: 'Baixa absorção sistêmica. Metabolizada por colinesterases plasmáticas.'
    },
    doses: [
      {
        species: 'Cão/Gato',
        indication: 'Anestesia tópica',
        dose: 'Aplicar fina camada',
        route: 'Tópico',
        interval: '30 min antes',
        notes: 'Aplicar apenas na área necessária. Evitar ingestão.'
      },
      {
        species: 'Cão/Gato',
        indication: 'Alívio de dor local',
        dose: 'Aplicar conforme necessário',
        route: 'Tópico',
        interval: '4-6h',
        notes: 'Não exceder 4 aplicações/dia. Monitorar reações locais.'
      }
    ],
    dilutionAndAdministration: {
      text: 'Limpar área antes da aplicação. Aplicar fina camada. Evitar contato com olhos e mucosas.',
      tooltip: 'Não aplicar em feridas abertas. Aguardar 30-60 segundos para efeito.'
    },
    contraindications: {
      text: 'Hipersensibilidade a anestésicos locais. Feridas abertas. Mucosas inflamadas.',
      tooltip: 'Histórico de reações alérgicas a ésteres (procaina, tetracaína).'
    },
    adverseEffects: {
      text: 'Irritação local, eritema. Raramente: metemoglobinemia (altas doses). Reações alérgicas.',
      tooltip: 'Metemoglobinemia mais comum em gatos. Monitorar coloração das mucosas.'
    },
    interactions: {
      text: 'Sulfonamidas (↓ eficácia). Antiarrítmicos (potencialização).',
      tooltip: 'Sulfonamidas: competição por ligação proteica. Antiarrítmicos: efeitos aditivos.'
    },
    monitoring: {
      text: 'Reações locais. Color das mucosas (metemoglobinemia). Sinais de hipersensibilidade.',
      tooltip: 'Observar eritema, edema, prurido. Metemoglobinemia: mucosas azuladas.'
    },
    evidence: {
      text: 'Anestésico tópico seguro e eficaz. Baixo risco de toxicidade sistêmica.',
      tooltip: 'Alternativa útil para procedimentos superficiais. Menos tóxico que lidocaína sistêmica.'
    }
  }
];
