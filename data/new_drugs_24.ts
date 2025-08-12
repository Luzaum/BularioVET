import { Drug } from '../types';

export const newDrugs24: Drug[] = [
  {
    name: 'Cefalexina',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina 1ª geração; Antibiótico β-lactâmico.',
    commercialNames: ['Keflex®', 'Cephalexin'],
    highlights: [
      '1ª geração (VO)',
      'Pilar em piodermite canina não complicada',
      'Melhor administrar com alimento se GI sensível',
      'q12h geralmente suficiente'
    ],
    clinicalIndications: { text: 'Piodermite canina não complicada. Infecções de pele e tecidos moles. Infecções por Staphylococcus/Streptococcus sensíveis. Profilaxia cirúrgica.', tooltip: 'Especialmente útil para piodermite canina não complicada.' },
    mechanism: { text: 'Inibe síntese da parede celular bacteriana. Liga-se às proteínas ligadoras de penicilina (PBPs). Bactericida. Ativo contra bactérias Gram+ sensíveis.', tooltip: 'Mecanismo de ação similar às penicilinas.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Pico: 2-4h. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Boa absorção oral com eliminação renal.' },
    doses: [
      { species: 'Cão', indication: 'Piodermite', dose: '22-30 mg/kg', route: 'PO', interval: 'q12h', notes: 'Ajustar a MIC e adesão do tutor.' },
      { species: 'Gato', indication: 'Infecções pele', dose: '22-30 mg/kg', route: 'PO', interval: 'q12h', notes: 'Bem tolerado. Ajustar a MIC.' }
    ],
    dilutionAndAdministration: { text: 'PO: melhor administrar com alimento se GI sensível. Manter horário consistente. q12h geralmente suficiente. Ajustar a MIC e adesão do tutor.', tooltip: 'Administração oral com alimento para melhor tolerância.' },
    contraindications: { text: 'Hipersensibilidade a β-lactâmicos. Doença renal grave. Gestação. Lactação. Histórico de reações alérgicas.', tooltip: 'Cuidado em pacientes com alergia a penicilinas.' },
    adverseEffects: { text: 'Vômito. Diarreia. Anorexia. Raramente: reações alérgicas, hepatotoxicidade. Reações cruzadas com penicilinas em raros casos.', tooltip: 'Efeitos gastrointestinais são os mais comuns.' },
    interactions: { text: 'Probenecida (↑ níveis). Outros β-lactâmicos (↑ toxicidade). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Resposta clínica. Sinais gastrointestinais. Função renal. Recheck clínico. Evitar uso prolongado sem reavaliação/cultura.', tooltip: 'Monitoramento da resposta clínica é essencial.' },
    evidence: { text: 'Pilar em piodermite canina não complicada. Uso racional baseado em cultura/citologia. Stewardship: evitar uso prolongado sem reavaliação.', tooltip: 'Opção eficaz para piodermite canina não complicada.' }
  },
  {
    name: 'Cefazolina',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina 1ª geração; Antibiótico β-lactâmico.',
    commercialNames: ['Ancef®', 'Cefazolin'],
    highlights: [
      '1ª geração (IV)',
      'Profilaxia perioperatória',
      'Infecções de pele/tecidos moles',
      'Boa alternativa a ampicilina'
    ],
    clinicalIndications: { text: 'Profilaxia perioperatória. Infecções de pele e tecidos moles. Infecções por Staphylococcus sensível. Alternativa a ampicilina em SUSPEITA de Staph sensível.', tooltip: 'Especialmente útil para profilaxia cirúrgica.' },
    mechanism: { text: 'Inibe síntese da parede celular bacteriana. Liga-se às proteínas ligadoras de penicilina (PBPs). Bactericida. Ativo contra bactérias Gram+ sensíveis.', tooltip: 'Mecanismo de ação similar às penicilinas.' },
    pharmacokinetics: { text: 'Início: imediato IV. Pico: 30-60 min. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Início imediato com eliminação renal.' },
    doses: [
      { species: 'Cão', indication: 'Profilaxia cirúrgica', dose: '22 mg/kg', route: 'IV', interval: 'q8h', notes: 'Manter fT>MIC: doses regulares.' },
      { species: 'Gato', indication: 'Profilaxia cirúrgica', dose: '22 mg/kg', route: 'IV', interval: 'q8h', notes: 'Bem tolerado. Manter fT>MIC.' }
    ],
    dilutionAndAdministration: { text: 'IV: infusão lenta. Diluir em SF/D5W conforme estabilidade institucional. Não misturar com bicarbonato. Manter fT>MIC: doses regulares.', tooltip: 'Infusão IV com diluente adequado.' },
    contraindications: { text: 'Hipersensibilidade a β-lactâmicos. Doença renal grave. Gestação. Lactação. Histórico de reações alérgicas.', tooltip: 'Cuidado em pacientes com alergia a penicilinas.' },
    adverseEffects: { text: 'Reações alérgicas. Flebite. Raramente: nefrotoxicidade, hepatotoxicidade. Reações cruzadas com penicilinas em raros casos.', tooltip: 'Reações alérgicas são os efeitos adversos mais importantes.' },
    interactions: { text: 'Probenecida (↑ níveis). Outros β-lactâmicos (↑ toxicidade). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Resposta clínica. Sinais de reação alérgica. Função renal. Compatibilidade: não misturar com bicarbonato.', tooltip: 'Monitoramento de reações alérgicas é essencial.' },
    evidence: { text: 'Profilaxia perioperatória eficaz. Tempo-dependente: manter fT>MIC. Boa alternativa a ampicilina em SUSPEITA de Staph sensível.', tooltip: 'Opção eficaz para profilaxia cirúrgica.' }
  },
  {
    name: 'Metilprednisolona Acetato (Depot)',
    sector: 'Endocrinologia',
    class: 'Corticosteroide depósito; Anti-inflamatório esteroidal.',
    commercialNames: ['Depo-Medrol®', 'Methylprednisolone Acetate'],
    highlights: [
      'Corticosteroide depósito',
      'Liberação prolongada',
      'Útil quando adesão VO é impossível',
      'Maior risco de supressão HPA'
    ],
    clinicalIndications: { text: 'Quando adesão VO é impossível. Doenças inflamatórias crônicas. Alergias. Doenças autoimunes. Controle de inflamação prolongada.', tooltip: 'Especialmente útil quando adesão oral é impossível.' },
    mechanism: { text: 'Liga-se a receptores glicocorticoides citoplasmáticos. Regula transcrição de genes anti-inflamatórios. Suprime resposta imune. Ação anti-inflamatória prolongada.', tooltip: 'Mecanismo de ação glicocorticoide com liberação prolongada.' },
    pharmacokinetics: { text: 'Início: 24-48h IM. Pico: 3-7 dias. Meia-vida: 7-14 dias. Metabolizado no fígado. Excreção renal.', tooltip: 'Liberação prolongada com duração de semanas.' },
    doses: [
      { species: 'Cão', indication: 'Inflamação crônica', dose: '1-2 mg/kg', route: 'IM', interval: 'q2-4 semanas', notes: 'Não repetir sem reavaliar.' },
      { species: 'Gato', indication: 'Inflamação crônica', dose: '1-2 mg/kg', route: 'IM', interval: 'q2-4 semanas', notes: 'Bem tolerado. Não repetir sem reavaliar.' }
    ],
    dilutionAndAdministration: { text: 'IM: aplicar em tecido muscular. Liberação prolongada. Útil quando adesão VO é impossível. Maior risco de supressão HPA/efeitos adversos prolongados.', tooltip: 'Administração IM com liberação prolongada.' },
    contraindications: { text: 'DM. Infecções ativas. IC descompensada. Gestação. Lactação. Doença hepática grave. Preferir formas de curta ação quando possível.', tooltip: 'Contraindicação em diabetes mellitus.' },
    adverseEffects: { text: 'PU/PD/PP. Hiperglicemia. Imunossupressão. Úlcera gástrica. Osteoporose. Supressão HPA. Efeitos adversos prolongados.', tooltip: 'Efeitos adversos prolongados devido à liberação sustentada.' },
    interactions: { text: 'AINEs (↑ risco de úlcera). Diuréticos (↑ perda de potássio). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Glicemia. Função hepática. Sinais de infecção. Peso corporal. Discutir efeitos por semanas. Não repetir sem reavaliar.', tooltip: 'Monitoramento rigoroso devido aos efeitos prolongados.' },
    evidence: { text: 'Corticosteroide depósito eficaz. Liberação prolongada útil quando adesão VO é impossível. Maior risco de supressão HPA/efeitos adversos prolongados.', tooltip: 'Opção útil quando adesão oral é impossível.' }
  },
  {
    name: 'Metimazol (Tiamazol)',
    sector: 'Endocrinologia',
    class: 'Antitireoidiano; Inibidor da peroxidase tireoidiana.',
    commercialNames: ['Tapazole®', 'Methimazole'],
    highlights: [
      'Antitireoidiano felino',
      'Inibe peroxidase tireoidiana',
      'Primeira linha no hipertireoidismo felino',
      'Quando iodo-131 não é opção'
    ],
    clinicalIndications: { text: 'Hipertireoidismo felino. Quando iodo-131 não é opção. Controle de hipertireoidismo. Primeira linha no hipertireoidismo felino.', tooltip: 'Especialmente útil para hipertireoidismo felino.' },
    mechanism: { text: 'Inibe a peroxidase tireoidiana. Impede iodação da tirosina. Reduz síntese de T3 e T4. Ação antitireoidiana específica.', tooltip: 'Mecanismo específico de inibição da síntese tireoidiana.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Pico: 2-4h. Meia-vida: 4-6h. Metabolizado no fígado. Excreção renal.', tooltip: 'Boa absorção oral com metabolismo hepático.' },
    doses: [
      { species: 'Gato', indication: 'Hipertireoidismo', dose: '2,5-5 mg', route: 'PO', interval: 'q12h', notes: 'Monitorar T4, ALT/ALP, creatinina.' },
      { species: 'Gato', indication: 'Hipertireoidismo transdérmico', dose: '2,5-5 mg', route: 'Transdérmico', interval: 'q12h', notes: 'Para intolerantes VO.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Transdérmico: para intolerantes VO. Manter horário consistente. Monitorar T4, ALT/ALP, creatinina e PA nas primeiras 2-4 semanas.', tooltip: 'Administração oral ou transdérmica com monitoramento rigoroso.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação. Lactação. Histórico de reações alérgicas.', tooltip: 'Cuidado em pacientes com doença hepática.' },
    adverseEffects: { text: 'Vômito. Apatia. Prurido facial raro. Raramente: hepatotoxicidade, trombocitopenia. Ajustar dose/forma transdérmica em intolerantes VO.', tooltip: 'Efeitos gastrointestinais são os mais comuns.' },
    interactions: { text: 'Iodo (↓ eficácia). Betabloqueadores (↑ efeitos). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'T4, ALT/ALP, creatinina e PA nas primeiras 2-4 semanas e após ajustes. Sinais de toxicidade. Resposta clínica.', tooltip: 'Monitoramento rigoroso de função hepática e tireoidiana.' },
    evidence: { text: 'Antitireoidiano eficaz para hipertireoidismo felino. Primeira linha quando iodo-131 não é opção. Monitorização rigorosa necessária.', tooltip: 'Opção eficaz para hipertireoidismo felino.' }
  },
  {
    name: 'Metoclopramida',
    sector: 'Gastroenterologia',
    class: 'Pró-cinético/Antiemético; Antagonista D2.',
    commercialNames: ['Reglan®', 'Metoclopramide'],
    highlights: [
      'Pró-cinético/antiemético (D2 antagonista)',
      'Aumenta peristalse gástrica/proximal',
      'Útil em náusea funcional, gastroparesia',
      'Eficácia menor em vômitos vestibulares'
    ],
    clinicalIndications: { text: 'Náusea funcional. Gastroparesia. DRGE leve. Vômitos por causas funcionais. Estimulação da motilidade gástrica.', tooltip: 'Especialmente útil para náusea funcional e gastroparesia.' },
    mechanism: { text: 'Antagonista do receptor D2. Aumenta peristalse gástrica e proximal. Estimula motilidade gastrointestinal. Ação antiemética central.', tooltip: 'Mecanismo dual: pró-cinético e antiemético.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 30-60 min. Pico: 1-2h. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.', tooltip: 'Início relativamente rápido com duração intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Náusea/Gastroparesia', dose: '0,2-0,5 mg/kg', route: 'PO/SC/IM', interval: 'q8h', notes: 'Eficácia menor em vômitos vestibulares.' },
      { species: 'Gato', indication: 'Náusea/Gastroparesia', dose: '0,2-0,5 mg/kg', route: 'PO/SC/IM', interval: 'q8h', notes: 'Bem tolerado. Eficácia menor em vômitos vestibulares.' }
    ],
    dilutionAndAdministration: { text: 'PO/SC/IM: conforme indicação. Eficácia menor em vômitos vestibulares/cêntricos. Prefira maropitant/ondansetrona nesses casos.', tooltip: 'Administração parenteral ou oral conforme necessidade.' },
    contraindications: { text: 'Hipersensibilidade. Obstrução gastrointestinal. Hemorragia GI. Epilepsia. Doença hepática grave. Gestação.', tooltip: 'Cuidado em pacientes com epilepsia.' },
    adverseEffects: { text: 'Agitação. Tremores (alta dose/CRI). Sedação. Raramente: discinesia tardia. Cautela em epilepsia.', tooltip: 'Efeitos neurológicos são os mais importantes.' },
    interactions: { text: 'Outros antagonistas D2 (↑ efeitos). Anticolinérgicos (↓ eficácia). Sedativos (↑ sedação).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Resposta clínica. Sinais neurológicos. Função hepática. Eficácia menor em vômitos vestibulares/cêntricos.', tooltip: 'Monitoramento de efeitos neurológicos é essencial.' },
    evidence: { text: 'Pró-cinético eficaz para náusea funcional e gastroparesia. Eficácia menor em vômitos vestibulares/cêntricos. Prefira maropitant/ondansetrona nesses casos.', tooltip: 'Opção eficaz para náusea funcional.' }
  }
];
