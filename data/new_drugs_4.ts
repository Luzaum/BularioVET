import { Drug } from '../types';

export const newDrugs4: Drug[] = [
  {
    name: 'Acepromazina',
    sector: 'Anestesia',
    class: 'Fenotiazina sedativa; não analgésica.',
    commercialNames: ['Acepran®', 'ACE', 'Aceproject®'],
    highlights: [
      'Antagonista dopaminérgico (D2) no SNC; bloqueio α1 periférico → vasodilatação/hipotensão.',
      'Ótima para "alisar" indução; sempre associar analgésico.',
      'Início 30–60 min IM/VO (mais rápido IV); duração 4–8 h.',
      'Hipotensão dose-dependente, hipotermia, protrusão 3ª pálpebra.'
    ],
    clinicalIndications: {
      text: 'Pré-medicação, tranquilização; antiemético leve em cães.',
      tooltip: 'Não possui efeito analgésico; deve ser combinado com analgésicos.'
    },
    mechanism: {
      text: 'Antagonista dopaminérgico (D2) no SNC; bloqueio α1 periférico → vasodilatação/hipotensão; leve anti-histamínico/anticolinérgico.',
      tooltip: 'O bloqueio α1 é responsável pela hipotensão significativa.'
    },
    pharmacokinetics: {
      text: 'Metabolização hepática; prolonga em hepatopatas.',
      tooltip: 'Devido ao metabolismo hepático, deve ser usada com cautela em pacientes com disfunção hepática.'
    },
    doses: [
      { species: 'Cão', indication: 'Sedação/Pré-medicação', dose: '0,01–0,05 mg/kg', route: 'IM/IV/SC', interval: 'Dose única', notes: 'VO semelhante' },
      { species: 'Gato', indication: 'Sedação/Pré-medicação', dose: '0,025–0,05 mg/kg', route: 'IM/IV/SC', interval: 'Dose única', notes: 'VO semelhante' }
    ],
    dilutionAndAdministration: {
      text: 'Injetável 10 mg/mL; preferir IV lenta; pode diluir em SF p/ acurácia de volume.',
      tooltip: 'CRI não recomendada.'
    },
    contraindications: {
      text: 'Hipotensão, choque, desidratação, cardiopatas.',
      tooltip: 'Sua ação vasodilatadora pode ser deletéria em pacientes hipovolêmicos.'
    },
    adverseEffects: {
      text: 'Hipotensão dose-dependente, hipotermia, protrusão 3ª pálpebra.',
      tooltip: 'A hipotensão é o efeito adverso mais significativo.'
    },
    interactions: {
      text: 'Epinefrina (hipotensão paradoxal); soma sedativa com opioides/benzodiazepínicos.',
      tooltip: 'A "reversão da epinefrina" ocorre devido ao bloqueio α1.'
    },
    monitoring: {
      text: 'PA, FC/FR, T°, perfusão.',
      tooltip: 'Monitoramento hemodinâmico é essencial.'
    },
    evidence: {
      text: 'Fármaco de uso consagrado na medicina veterinária por décadas.',
      tooltip: 'Baseado em Plumb\'s e BSAVA ECC.'
    }
  },
  {
    name: 'Ácido Acético 2% + Ácido Bórico',
    sector: 'Oto-Dermatológico',
    class: 'Otológico; Acidificante.',
    commercialNames: [],
    highlights: [
      'Acidificantes/secantes (pH ~2–3) com ação antimicrobiana.',
      'Inibem crescimento de bactérias/Leveduras.',
      'Produto pronto-uso; não diluir.',
      'Evitar álcool se membrana timpânica incerta/rompida.'
    ],
    clinicalIndications: {
      text: 'Otite externa leve/inicial; manutenção/prevenção.',
      tooltip: 'Especialmente útil para otites ceruminosas e por Malassezia.'
    },
    mechanism: {
      text: 'Acidificantes/secantes (pH ~2–3) com ação antimicrobiana; inibem crescimento de bactérias/Leveduras.',
      tooltip: 'O pH ácido cria ambiente desfavorável para crescimento microbiano.'
    },
    pharmacokinetics: {
      text: 'Ação tópica local; absorção sistêmica mínima.',
      tooltip: 'Ação local no canal auditivo externo.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Limpeza otológica', dose: 'Instilar no canal auditivo', route: 'Tópico', interval: '1x/d no início; reavaliar em 7–10 d', notes: 'Manutenção 2–3x/sem após normalizar' }
    ],
    dilutionAndAdministration: {
      text: 'Produto pronto-uso; em orelhas muito sujas, lavar com SF 0,9% sob sedação se preciso.',
      tooltip: 'Não diluir o produto.'
    },
    contraindications: {
      text: 'Membrana timpânica rompida; epitélio ulcerado.',
      tooltip: 'Evitar se houver suspeita de ruptura timpânica.'
    },
    adverseEffects: {
      text: 'Irritação se epitélio ulcerado; evitar álcool se membrana timpânica incerta/rompida.',
      tooltip: 'Pode causar desconforto em orelhas já inflamadas.'
    },
    interactions: {
      text: 'Debris podem inativar antibióticos tópicos → limpar antes.',
      tooltip: 'Limpar antes da medicação para máxima eficácia.'
    },
    monitoring: {
      text: 'Otoscopia e citologia seriada.',
      tooltip: 'Monitoramento da resposta clínica e citológica.'
    },
    evidence: {
      text: 'Soluções acidificantes são componente padrão no manejo de otites externas.',
      tooltip: 'Baseado em Plumb\'s e BSAVA Canine Practice/Procedures.'
    }
  },
  {
    name: 'Ácido Acetilsalicílico (AAS)',
    sector: 'Cardiologia',
    class: 'AINE; Antiagregante plaquetário.',
    commercialNames: ['Aspirin®', 'ASA', 'Ascriptin®'],
    highlights: [
      'Inibe COX-1/COX-2; inibição irreversível COX-1 plaquetária → antiagregante.',
      'Evitar rotineiro em gatos (preferir clopidogrel para TEA felina).',
      'GI/ulceração, nefrotoxicidade, coagulopatia.',
      'Não associar a AINE/corticoide.'
    ],
    clinicalIndications: {
      text: 'Antiagregante em cães selecionados; evitar rotineiro em gatos (preferir clopidogrel para TEA felina).',
      tooltip: 'O estudo FATCAT demonstrou superioridade do clopidogrel sobre aspirina.'
    },
    mechanism: {
      text: 'Inibe COX-1/COX-2; inibição irreversível COX-1 plaquetária → antiagregante.',
      tooltip: 'A inibição irreversível da COX-1 plaquetária dura toda a vida da plaqueta.'
    },
    pharmacokinetics: {
      text: 'Gatos têm deficiência na via de glucuronidação, resultando em meia-vida muito prolongada.',
      tooltip: 'A meia-vida prolongada em gatos aumenta o risco de toxicidade cumulativa.'
    },
    doses: [
      { species: 'Cão', indication: 'Antiagregante', dose: '0,5–1 mg/kg', route: 'VO', interval: 'q24–48 h', notes: 'Antiagregante' },
      { species: 'Gato', indication: 'Evitar', dose: 'Evitar uso rotineiro', route: 'N/A', interval: 'N/A', notes: 'Preferir clopidogrel' }
    ],
    contraindications: {
      text: 'GI/ulceração, nefrotoxicidade, coagulopatia; não associar a AINE/corticoide; cautela em renal/hepática.',
      tooltip: 'Múltiplas contraindicações limitam o uso.'
    },
    adverseEffects: {
      text: 'Irritação e ulceração gastrointestinal, vômito, diarreia, melena; toxicidade por salicilato em gatos.',
      tooltip: 'A toxicidade GI é dose-dependente.'
    },
    interactions: {
      text: 'Anticoagulantes, AINEs/corticoides, IECA/diuréticos, hipoglicemiantes.',
      tooltip: 'Múltiplas interações clinicamente significativas.'
    },
    monitoring: {
      text: 'Sinais GI, Ht, ureia/creatinina, enzimas hepáticas.',
      tooltip: 'Monitoramento rigoroso em terapia crônica.'
    },
    evidence: {
      text: 'Seu uso como antiplaquetário em gatos foi largamente substituído pelo clopidogrel.',
      tooltip: 'Baseado em Plumb\'s e estudo FATCAT.'
    }
  },
  {
    name: 'Ácido Salicílico 2%',
    sector: 'Oto-Dermatológico',
    class: 'Queratolítico; Limpador.',
    commercialNames: [],
    highlights: [
      'Queratolítico/queratoplástico; ajuda a remover detritos/cerúmen.',
      'Leve antibacteriano.',
      'Pronto-uso; não diluir.',
      'Evitar álcool se tímpano incerto.'
    ],
    clinicalIndications: {
      text: 'Otites ceruminosas/Malassezia (adjuvante), dermatites seborreicas; manutenção.',
      tooltip: 'Especialmente útil como adjuvante em otites ceruminosas.'
    },
    mechanism: {
      text: 'Queratolítico/queratoplástico; ajuda a remover detritos/cerúmen; leve antibacteriano.',
      tooltip: 'Ajuda a remover cerúmen e detritos do canal auditivo.'
    },
    pharmacokinetics: {
      text: 'Ação tópica local; absorção sistêmica mínima.',
      tooltip: 'Ação local no canal auditivo externo.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Limpeza otológica', dose: 'Aplicar no canal auditivo', route: 'Tópico', interval: 'Frequência individualizada', notes: '1–4x/d se combinado com corticoide; manutenção após normalizar' }
    ],
    dilutionAndAdministration: {
      text: 'Pronto-uso; não diluir; lavagem com SF se muita sujidade.',
      tooltip: 'Não diluir o produto.'
    },
    contraindications: {
      text: 'Membrana timpânica rompida; epitélio ulcerado.',
      tooltip: 'Evitar se houver suspeita de ruptura timpânica.'
    },
    adverseEffects: {
      text: 'Irritação local; evitar álcool se tímpano incerto.',
      tooltip: 'Pode causar desconforto em orelhas já inflamadas.'
    },
    interactions: {
      text: 'Não há interações significativas conhecidas.',
      tooltip: 'Pode ser usado com outros medicamentos otológicos.'
    },
    monitoring: {
      text: 'Otoscopia/citologia seriada.',
      tooltip: 'Monitoramento da resposta clínica.'
    },
    evidence: {
      text: 'Componente útil no manejo de otites ceruminosas.',
      tooltip: 'Baseado em Plumb\'s e BSAVA.'
    }
  },
  {
    name: 'Afoxolaner',
    sector: 'Antiparasitários',
    class: 'Isoxazolina; Ectoparasiticida.',
    commercialNames: ['NexGard®'],
    highlights: [
      'Bloqueio canais GABA/glutamato de artrópodes → morte do ectoparasita.',
      'Dar com alimento melhora absorção.',
      'Eventos neurológicos raros (tremores/convulsões).',
      'Cautela em epilépticos.'
    ],
    clinicalIndications: {
      text: 'Pulgas/carrapatos em cães.',
      tooltip: 'Ectoparasiticida oral de ação rápida.'
    },
    mechanism: {
      text: 'Bloqueio canais GABA/glutamato de artrópodes → morte do ectoparasita.',
      tooltip: 'Causa hiperexcitação e morte dos ectoparasitas.'
    },
    pharmacokinetics: {
      text: 'Bem absorvido por via oral; administração com alimento melhora absorção.',
      tooltip: 'A administração com alimento pode melhorar a biodisponibilidade.'
    },
    doses: [
      { species: 'Cão', indication: 'Controle de pulgas e carrapatos', dose: '2,5 mg/kg', route: 'VO', interval: 'a cada 30 dias', notes: 'Dar com alimento melhora absorção' }
    ],
    contraindications: {
      text: 'Epilépticos; segurança reprodutiva não estabelecida.',
      tooltip: 'Usar com cautela em cães com histórico de convulsões.'
    },
    adverseEffects: {
      text: 'Eventos neurológicos raros (tremores/convulsões) — cautela em epilépticos.',
      tooltip: 'Monitorar sinais neurológicos em pacientes predispostos.'
    },
    interactions: {
      text: 'Não há interações significativas conhecidas.',
      tooltip: 'Pode ser administrado com outros medicamentos.'
    },
    monitoring: {
      text: 'Sinais neurológicos em predispostos; eficácia clínica.',
      tooltip: 'Monitorar eficácia e sinais neurológicos.'
    },
    evidence: {
      text: 'Alta eficácia contra pulgas e carrapatos demonstrada em múltiplos estudos.',
      tooltip: 'Baseado em Plumb\'s e estudos clínicos.'
    }
  },
  {
    name: 'Amantadina',
    sector: 'Analgesia',
    class: 'Antagonista NMDA; Analgésico.',
    commercialNames: ['Symmetrel®'],
    highlights: [
      'Antagonista NMDA (modulador da dor); reduz sensibilização central ("wind-up").',
      'Dor crônica/neuropática/OA como adjuvante.',
      'Onset clínico ≥1 semana.',
      'Ajuste em IR.'
    ],
    clinicalIndications: {
      text: 'Dor crônica/neuropática/OA como adjuvante (evidência limitada, útil combinada).',
      tooltip: 'Especialmente útil para combater a sensibilização central.'
    },
    mechanism: {
      text: 'Antagonista NMDA (modulador da dor); reduz sensibilização central ("wind-up").',
      tooltip: 'Ajuda a combater a amplificação da dor no SNC.'
    },
    pharmacokinetics: {
      text: 'Eliminação renal; t½ ~5–6 h felinos; onset clínico ≥1 semana.',
      tooltip: 'Ajuste de dose necessário em insuficiência renal.'
    },
    doses: [
      { species: 'Cão', indication: 'Dor Crônica', dose: '3–5 mg/kg', route: 'VO', interval: 'q24 h', notes: 'Alguns q12h' },
      { species: 'Gato', indication: 'Dor Crônica', dose: '3 mg/kg', route: 'VO', interval: 'q24 h', notes: '' }
    ],
    contraindications: {
      text: 'Renais/hepáticas/epilépticos.',
      tooltip: 'Ajuste de dose necessário em pacientes com IR.'
    },
    adverseEffects: {
      text: 'Agitação, GI leve; cautela em renais/hepáticas/epilépticos.',
      tooltip: 'Geralmente bem tolerado.'
    },
    interactions: {
      text: 'Fármacos pró-QT, macrolídeos/fluoroquinolonas/antieméticos 5-HT3 etc.',
      tooltip: 'Múltiplas interações medicamentosas.'
    },
    monitoring: {
      text: 'Escore de dor, função renal, comportamento.',
      tooltip: 'Monitoramento da resposta analgésica.'
    },
    evidence: {
      text: 'Evidência limitada, mas útil como adjuvante em analgesia multimodal.',
      tooltip: 'Baseado em Plumb\'s e experiência clínica.'
    }
  },
  {
    name: 'Amicacina',
    sector: 'Antimicrobianos',
    class: 'Aminoglicosídeo sistêmico.',
    commercialNames: ['Amiglyde-V®', 'Amikin®'],
    highlights: [
      'Liga 30S; bactericida dependente do pico; efeito pós-antibiótico.',
      'Gram-negativos graves; usar quando alternativas menos tóxicas não viáveis.',
      'Nefro/ototoxicidade; maior risco em DRC, geriátricos, sépticos.',
      'Gatos sensíveis a oto/vestíbulos.'
    ],
    clinicalIndications: {
      text: 'Gram-negativos graves; usar quando alternativas menos tóxicas não viáveis.',
      tooltip: 'Reservado para infecções graves por Gram-negativos resistentes.'
    },
    mechanism: {
      text: 'Liga 30S; bactericida dependente do pico; efeito pós-antibiótico.',
      tooltip: 'A eficácia é concentração-dependente, favorecendo dose única diária.'
    },
    pharmacokinetics: {
      text: 'Eliminação renal; t½ 0,5–2 h; pico 30–60 min IM.',
      tooltip: 'A eliminação renal justifica ajuste de dose em IR.'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções graves', dose: '15–30 mg/kg', route: 'IV/IM/SC', interval: 'q24h', notes: 'Sépticos 20–30 mg/kg IV' },
      { species: 'Gato', indication: 'Infecções graves', dose: '10–15 mg/kg', route: 'IV/IM/SC', interval: 'q24h', notes: 'Sépticos 20 mg/kg IV' }
    ],
    dilutionAndAdministration: {
      text: 'Diluir em SF/D5W/RL; infundir ≥30 min; conc. estáveis 0,25–5 mg/mL (24 h RT).',
      tooltip: 'CRI não recomendado (preferir dose única diária).'
    },
    contraindications: {
      text: 'DRC, geriátricos, sépticos, desidratados; gatos sensíveis a oto/vestíbulos.',
      tooltip: 'Múltiplas contraindicações devido à toxicidade.'
    },
    adverseEffects: {
      text: 'Nefro/ototoxicidade; maior risco em DRC, geriátricos, sépticos, desidratados.',
      tooltip: 'A nefrotoxicidade é dose-dependente e pode ser grave.'
    },
    interactions: {
      text: 'Loop diuréticos/NSAIDs ↑ nefrotoxicidade; BNM/anestésicos ↑ bloqueio neuromuscular; β‑lactâmicos — não misturar.',
      tooltip: 'Múltiplas interações clinicamente significativas.'
    },
    monitoring: {
      text: 'Urinalise com sedimento (cilindros), ureia/creatinina; TDM (trough baixo).',
      tooltip: 'Monitoramento rigoroso da função renal é essencial.'
    },
    evidence: {
      text: 'Fármaco potente e eficaz para infecções Gram-negativas graves.',
      tooltip: 'Baseado em Plumb\'s e experiência clínica.'
    }
  },
  {
    name: 'Amiodarona',
    sector: 'Cardiologia',
    class: 'Antiarrítmico classe III multi‑canal.',
    commercialNames: ['Cordarone®'],
    highlights: [
      'Bloqueio K+ (classe III) + Na+/Ca2+ + efeito β; prolonga período refratário.',
      'Arritmias refratárias quando outras falham.',
      'Preferir Nexterone® (D5W) via CVC + filtro.',
      'Monitorização ampla necessária.'
    ],
    clinicalIndications: {
      text: 'Arritmias refratárias (TV sustentada, FA com disfunção sistólica) quando outras falham; uso com cautela.',
      tooltip: 'Reservado para casos refratários a outras terapias.'
    },
    mechanism: {
      text: 'Bloqueio K+ (classe III) + Na+/Ca2+ + efeito β; prolonga período refratário.',
      tooltip: 'Ação multi-canal explica sua eficácia em arritmias refratárias.'
    },
    pharmacokinetics: {
      text: 'Lipossolúvel; acúmulo tecidual; metabólito ativo; t½ prolonga com doses repetidas.',
      tooltip: 'A longa meia-vida requer monitoramento prolongado.'
    },
    doses: [
      { species: 'Cão', indication: 'Arritmias Refratárias (VO)', dose: 'Carga 8–10 mg/kg 12/12h 1 semana → 5–10 mg/kg 1x/d', route: 'VO', interval: 'q12-24h', notes: 'Titulação necessária' },
      { species: 'Cão', indication: 'Arritmias Refratárias (IV)', dose: '2 mg/kg IV em 10 min → 0,8 mg/kg/h 6 h → 0,5 mg/kg/h', route: 'IV', interval: 'Contínuo', notes: 'Nexterone® D5W' }
    ],
    dilutionAndAdministration: {
      text: 'Preferir Nexterone® (D5W, sem polissorbato 80); ideal CVC + filtro em linha.',
      tooltip: 'Por que CVC+filtro: evita flebite e precipitação.'
    },
    contraindications: {
      text: 'Bradicardia sinusal severa, bloqueio AV de alto grau sem marcapasso.',
      tooltip: 'Múltiplas contraindicações devido ao perfil de efeitos adversos.'
    },
    adverseEffects: {
      text: 'GI, hepatotoxicidade, bradicardia, depósito corneano, tireoide; IV com polissorbato 80 pode causar reações.',
      tooltip: 'Múltiplos efeitos adversos requerem monitoramento rigoroso.'
    },
    interactions: {
      text: 'Múltiplas (QT, anestésicos, cimetidina, rifampicina, teofilina, quinolonas/macrolídeos etc.).',
      tooltip: 'Muitas interações clinicamente significativas.'
    },
    monitoring: {
      text: 'ECG, T4/T3, ALT/ALP, PA.',
      tooltip: 'Monitorização ampla necessária devido aos múltiplos efeitos.'
    },
    evidence: {
      text: 'Considerado agente de último recurso para arritmias potencialmente fatais.',
      tooltip: 'Baseado em Plumb\'s e BSAVA ECC.'
    }
  },
  {
    name: 'Amitraz (banho)',
    sector: 'Dermatologia',
    class: 'Formamidina; Ectoparasiticida.',
    commercialNames: ['Mitaban®'],
    highlights: [
      'Formamidina; em ácaros, agonista octopamina; em mamíferos, agonista α2.',
      'Demodiciose canina (histórico).',
      'Produto de dip aprovado indisponível em muitos países.',
      'Preferir isoxazolinas.'
    ],
    clinicalIndications: {
      text: 'Demodiciose canina (histórico). Produto de dip aprovado (Mitaban®) indisponível em muitos países; preferir isoxazolinas.',
      tooltip: 'Uso histórico, mas produtos modernos são preferidos.'
    },
    mechanism: {
      text: 'Formamidina; em ácaros, agonista octopamina; em mamíferos, agonista α2 (sedação/bradicardia).',
      tooltip: 'Ação diferente em parasitas vs mamíferos.'
    },
    pharmacokinetics: {
      text: 'Aplicação tópica; alguma absorção sistêmica.',
      tooltip: 'A absorção sistêmica é responsável pelos efeitos adversos.'
    },
    doses: [
      { species: 'Cão', indication: 'Demodicose Generalizada', dose: 'Diluir 10.6 mL em 7.6 L de água (250 ppm)', route: 'Tópico (banho)', interval: 'a cada 14 dias', notes: 'Tosquiar o animal; não enxaguar' }
    ],
    contraindications: {
      text: 'Gatos (toxicidade); diabéticos (hiperglicemia); cardiopatas.',
      tooltip: 'Múltiplas contraindicações limitam o uso.'
    },
    adverseEffects: {
      text: 'Sedação, bradicardia, vômito, hiperglicemia; antagonizar α2 (atipamezol) se necessário.',
      tooltip: 'Os efeitos podem ser revertidos com atipamezol.'
    },
    interactions: {
      text: 'Não usar com outros inibidores da MAO ou agonistas α2.',
      tooltip: 'Evitar combinações que potencializem os efeitos.'
    },
    monitoring: {
      text: 'Raspados de pele; sinais de toxicidade por várias horas após banho.',
      tooltip: 'Monitoramento rigoroso necessário após aplicação.'
    },
    evidence: {
      text: 'Tratamento historicamente eficaz, mas isoxazolinas são agora preferidas.',
      tooltip: 'Baseado em Plumb\'s e experiência clínica.'
    }
  },
  {
    name: 'Amlodipina',
    sector: 'Cardiologia',
    class: 'Bloqueador canal de Ca2+ (dihidropiridina).',
    commercialNames: ['Norvasc®', 'Amodip®'],
    highlights: [
      'Vasodilatação arterial, ↓ PA.',
      'HAS felina (1ª linha); cães como adjuvante.',
      'Reavaliar PA em 7–10 dias após ajuste.',
      'Cães: hiperplasia gengival.'
    ],
    clinicalIndications: {
      text: 'HAS felina (1ª linha); cães como adjuvante.',
      tooltip: 'Especialmente útil em gatos com hipertensão secundária à DRC.'
    },
    mechanism: {
      text: 'Bloqueador canal de Ca2+ (dihidropiridina) – vasodilatação arterial, ↓ PA.',
      tooltip: 'Sua alta seletividade vascular a diferencia de outros BCC.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral; metabolismo hepático; longa meia-vida permite administração q24h.',
      tooltip: 'A longa meia-vida significa que ajustes de dose não devem ser frequentes.'
    },
    doses: [
      { species: 'Gato', indication: 'Hipertensão Sistêmica', dose: '0,625–1,25 mg/gato', route: 'VO', interval: 'q24h', notes: 'Titular pela PA' },
      { species: 'Cão', indication: 'Hipertensão Sistêmica', dose: '0,1–0,5 mg/kg', route: 'VO', interval: 'q24h', notes: 'Titular pela PA' }
    ],
    contraindications: {
      text: 'Hipotensão grave, choque cardiogênico, insuficiência hepática grave.',
      tooltip: 'Não há contraindicações absolutas, mas monitoramento cuidadoso é essencial.'
    },
    adverseEffects: {
      text: 'Hipotensão, letargia; cães: hiperplasia gengival.',
      tooltip: 'A hipotensão é o principal risco.'
    },
    interactions: {
      text: 'Com β‑bloqueadores (bradi/hipotensão).',
      tooltip: 'Combinação com atenolol requer monitoramento cuidadoso.'
    },
    monitoring: {
      text: 'PA; creatinina/ureia/eletrólitos em DRC.',
      tooltip: 'Metas ACVIM para pressão arterial.'
    },
    evidence: {
      text: 'Fármaco anti-hipertensivo de primeira linha recomendado pelas diretrizes ACVIM.',
      tooltip: 'Baseado em Plumb\'s, Nelson & Couto e diretrizes ACVIM.'
    }
  }
];
