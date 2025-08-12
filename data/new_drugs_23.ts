import { Drug } from '../types';

export const newDrugs23: Drug[] = [
  {
    name: 'Carbonato de Lantânio (Fosrenol®)',
    sector: 'Nefrologia',
    class: 'Quelante de fósforo não cálcico.',
    commercialNames: ['Fosrenol®', 'Lanthanum Carbonate'],
    highlights: [
      'Quelante de fósforo não cálcico',
      'Liga fósforo no lúmen intestinal',
      'Não eleva cálcio sérico',
      'Útil quando Al(OH)3 é mal tolerado'
    ],
    clinicalIndications: { text: 'Hiperfosfatemia na DRC. Quando Al(OH)3 é mal tolerado. Controle de fósforo em doença renal crônica. Redução de PTH.', tooltip: 'Especialmente útil quando outros quelantes não são bem tolerados.' },
    mechanism: { text: 'Liga fósforo no lúmen intestinal formando complexos insolúveis. Reduz absorção intestinal de fósforo. Não contém cálcio ou alumínio.', tooltip: 'Mecanismo de quelação específico para fósforo sem efeitos sobre cálcio.' },
    pharmacokinetics: { text: 'Ação local no trato gastrointestinal. Mínima absorção sistêmica. Eliminação fecal. Não metabolizado.', tooltip: 'Ação localizada no trato gastrointestinal.' },
    doses: [
      { species: 'Cão', indication: 'Hiperfosfatemia DRC', dose: '500-1000 mg', route: 'PO', interval: 'Com refeições', notes: 'Ajustar pela fosfatemia a cada 2-4 semanas.' },
      { species: 'Gato', indication: 'Hiperfosfatemia DRC', dose: '250-500 mg', route: 'PO', interval: 'Com refeições', notes: 'Bem tolerado. Ajustar pela fosfatemia.' }
    ],
    dilutionAndAdministration: { text: 'PO: com as refeições. Comprimidos mastigáveis/partíveis. Ajustar dose pela fosfatemia a cada 2-4 semanas. Manter hidratação adequada.', tooltip: 'Administração com refeições para máxima eficácia.' },
    contraindications: { text: 'Hipersensibilidade. Obstrução intestinal. Hipofosfatemia. Doença hepática grave. Gestação.', tooltip: 'Evitar em pacientes com obstrução intestinal.' },
    adverseEffects: { text: 'Náusea. Vômito. Diarreia. Constipação. Dor abdominal. Raramente: obstrução intestinal.', tooltip: 'Efeitos gastrointestinais são os mais comuns.' },
    interactions: { text: 'Pode quelar outros fármacos VO. Separar 2h antes/depois de outros medicamentos. Antácidos (↓ eficácia).', tooltip: 'Importante separar de outros medicamentos orais.' },
    monitoring: { text: 'Fosfatemia a cada 2-4 semanas. Função renal. Sinais gastrointestinais. Peso corporal. Ajustar dose conforme resposta.', tooltip: 'Monitoramento regular da fosfatemia é essencial.' },
    evidence: { text: 'Quelante eficaz para hiperfosfatemia na DRC. Alternativa útil quando Al(OH)3 é mal tolerado. Não eleva cálcio sérico.', tooltip: 'Opção eficaz para controle de fósforo sem efeitos sobre cálcio.' }
  },
  {
    name: 'Carboplatina',
    sector: 'Oncologia',
    class: 'Análogo da platina; Antineoplásico.',
    commercialNames: ['Paraplatin®', 'Carboplatin'],
    highlights: [
      'Análogo da platina',
      'Liga DNA e impede replicação',
      'Menos nefrotóxica que cisplatina',
      'Contraindicada em gatos'
    ],
    clinicalIndications: { text: 'Osteossarcoma. Carcinomas. Tumores de saco anal. Linfoma. Mastocitoma. Protocolos quimioterápicos adjuvantes.', tooltip: 'Especialmente útil para tumores sólidos em cães.' },
    mechanism: { text: 'Liga-se ao DNA formando adutos intrastrand e interstrand. Impede replicação e transcrição do DNA. Induz apoptose celular. Ação citotóxica não específica do ciclo celular.', tooltip: 'Mecanismo de ligação ao DNA que impede replicação celular.' },
    pharmacokinetics: { text: 'Início: imediato IV. Pico: 1-2h. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal (90%).', tooltip: 'Eliminação principalmente renal.' },
    doses: [
      { species: 'Cão', indication: 'Osteossarcoma/Carcinomas', dose: '300 mg/m²', route: 'IV', interval: 'q21-28d', notes: 'Ajustar baseado na função renal. Monitorar hemograma.' },
      { species: 'Gato', indication: 'Contraindicado', dose: 'Não usar', route: 'N/A', interval: 'N/A', notes: 'Contraindicado em gatos.' }
    ],
    dilutionAndAdministration: { text: 'IV: infusão lenta em 15-60 min. Diluir em SF ou D5W. Monitorar durante infusão. Usar via segura (evitar extravasamento).', tooltip: 'Infusão IV lenta com monitoramento adequado.' },
    contraindications: { text: 'Gatos (nefrotóxica). Hipersensibilidade. Doença renal grave. Neutropenia grave. Trombocitopenia grave.', tooltip: 'Contraindicação absoluta em gatos.' },
    adverseEffects: { text: 'Mielossupressão (nadir 10-14 dias). Náusea/vômito. Diarreia. Alopecia. Raramente: nefrotoxicidade, ototoxicidade.', tooltip: 'Mielossupressão é o efeito adverso mais importante.' },
    interactions: { text: 'Outros mielossupressores (↑ toxicidade). Aminoglicosídeos (↑ nefrotoxicidade). Diuréticos (↑ nefrotoxicidade).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Hemograma completo (nadir 10-14 dias). Função renal. Sinais de toxicidade. Antieméticos conforme necessidade.', tooltip: 'Monitoramento rigoroso do hemograma é essencial.' },
    evidence: { text: 'Eficaz para osteossarcoma e carcinomas em cães. Menos nefrotóxica que cisplatina. Contraindicada em gatos. Monitoramento rigoroso necessário.', tooltip: 'Opção eficaz para tumores sólidos em cães.' }
  },
  {
    name: 'Carprofeno',
    sector: 'Ortopedia',
    class: 'AINE COX-2 preferencial; Anti-inflamatório não esteroidal.',
    commercialNames: ['Rimadyl®', 'Carprofen'],
    highlights: [
      'AINE COX-2 preferencial (cão)',
      'Analgesia e anti-inflamatório',
      'Dor osteoarticular e pós-operatória',
      'Evitar uso com corticoide/outro AINE'
    ],
    clinicalIndications: { text: 'Dor osteoarticular. Dor pós-operatória. Artrite. Displasia coxofemoral. Osteoartrite. Controle de dor crônica.', tooltip: 'Especialmente útil para dor osteoarticular em cães.' },
    mechanism: { text: 'Inibe preferencialmente COX-2. Reduz síntese de prostaglandinas inflamatórias. Ação analgésica, anti-inflamatória e antipirética. Menor efeito sobre COX-1.', tooltip: 'Seletividade COX-2 reduz efeitos gastrointestinais.' },
    pharmacokinetics: { text: 'Início: 1-2h PO. Pico: 2-4h. Meia-vida: 8-12h. Metabolizado no fígado. Excreção renal e biliar.', tooltip: 'Início relativamente rápido com duração intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Dor osteoarticular', dose: '2,2 mg/kg', route: 'PO', interval: 'q12h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Dor pós-operatória', dose: '2,2 mg/kg', route: 'PO', interval: 'q12h', notes: 'Para dor pós-operatória. Monitorar sinais GI.' }
    ],
    dilutionAndAdministration: { text: 'PO: com alimento para reduzir irritação gástrica. Manter horário consistente. Suspender e reavaliar se melena ou vômito persistente.', tooltip: 'Administração com alimento para melhor tolerância.' },
    contraindications: { text: 'Hipersensibilidade. Úlcera péptica ativa. Doença renal/hepática grave. Gestação. Uso concomitante com corticoides/outros AINEs.', tooltip: 'Evitar uso combinado com outros AINEs ou corticoides.' },
    adverseEffects: { text: 'Vômito. Diarreia. Apatia. Melena. Raramente: úlcera gástrica, nefrotoxicidade, hepatotoxicidade. Monitorar vômito/diarreia/apatia nas 2 primeiras semanas.', tooltip: 'Efeitos gastrointestinais são os mais comuns.' },
    interactions: { text: 'Corticoides (↑ risco de úlcera). Outros AINEs (↑ toxicidade). Diuréticos (↑ nefrotoxicidade). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Função renal/hepática. Sinais gastrointestinais. Apatia. Melena. Triagem renal/hepática antes do uso. Suspender se sinais de toxicidade.', tooltip: 'Monitoramento rigoroso de função renal e hepática.' },
    evidence: { text: 'AINE eficaz para dor osteoarticular em cães. COX-2 preferencial reduz efeitos GI. Segurança estabelecida com monitoramento adequado.', tooltip: 'Opção eficaz e segura para dor osteoarticular.' }
  },
  {
    name: 'Carvão Ativado (± Sorbitol)',
    sector: 'Emergência',
    class: 'Adsorvente entérico; Antídoto.',
    commercialNames: ['Activated Charcoal', 'Carbomix®'],
    highlights: [
      'Adsorvente entérico',
      'Reduz absorção de tóxicos lipofílicos',
      'Melhor se administrado precocemente',
      'Sorbitol apenas na 1ª dose'
    ],
    clinicalIndications: { text: 'Intoxicações recentes. Overdose medicamentosa. Ingestão de tóxicos. Redução de absorção entérica. Emergências toxicológicas.', tooltip: 'Especialmente útil para intoxicações recentes.' },
    mechanism: { text: 'Adsorve tóxicos lipofílicos no trato gastrointestinal. Reduz absorção sistêmica. Sorbitol: efeito catártico (apenas 1ª dose). Interrompe circulação entero-hepática.', tooltip: 'Mecanismo de adsorção que reduz absorção de tóxicos.' },
    pharmacokinetics: { text: 'Ação local no trato gastrointestinal. Não absorvido sistemicamente. Eliminação fecal. Sorbitol: absorção mínima.', tooltip: 'Ação localizada sem absorção sistêmica.' },
    doses: [
      { species: 'Cão', indication: 'Intoxicação', dose: '1-3 g/kg', route: 'PO/NG', interval: 'Dose única ou múltipla', notes: 'Para fármacos com circulação entero-hepática.' },
      { species: 'Gato', indication: 'Intoxicação', dose: '1-3 g/kg', route: 'PO/NG', interval: 'Dose única ou múltipla', notes: 'Bem tolerado. Monitorar hidratação.' }
    ],
    dilutionAndAdministration: { text: 'PO/NG: suspensão em água. Sorbitol apenas na 1ª dose (catártico). Doses múltiplas para fármacos com circulação entero-hepática. Monitorar hidratação/eletrólitos.', tooltip: 'Administração oral ou por sonda nasogástrica.' },
    contraindications: { text: 'Ingestões cáusticas. Hidrocarbonetos. Reflexos diminuídos (risco de aspiração). Obstrução intestinal. Alcalose metabólica.', tooltip: 'Contraindicação absoluta em ingestões cáusticas.' },
    adverseEffects: { text: 'Vômito. Diarreia. Constipação. Desidratação. Eletrólitos alterados. Raramente: aspiração, obstrução intestinal.', tooltip: 'Efeitos gastrointestinais são os mais comuns.' },
    interactions: { text: 'Pode adsorver outros medicamentos orais. Separar 2h de outros fármacos. Antídotos específicos (não interferir).', tooltip: 'Importante separar de outros medicamentos orais.' },
    monitoring: { text: 'Hidratação. Eletrólitos. Função renal. Sinais de aspiração. Resposta clínica. Monitorar hidratação/eletrólitos.', tooltip: 'Monitoramento da hidratação é essencial.' },
    evidence: { text: 'Adsorvente eficaz para intoxicações recentes. Reduz absorção de tóxicos lipofílicos. Doses múltiplas para circulação entero-hepática.', tooltip: 'Opção eficaz para intoxicações recentes.' }
  },
  {
    name: 'Cefadroxil',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina 1ª geração; Antibiótico β-lactâmico.',
    commercialNames: ['Cefadroxil', 'Duricef®'],
    highlights: [
      'Cefalosporina 1ª geração (VO)',
      'Boa contra Gram+ de pele/tecidos moles',
      'Staph/Strep sensíveis',
      'Uso racional baseado em cultura/citologia'
    ],
    clinicalIndications: { text: 'Piodermite canina. Infecções de pele e tecidos moles. Infecções por Staphylococcus/Streptococcus sensíveis. Profilaxia cirúrgica.', tooltip: 'Especialmente útil para infecções de pele por Gram+.' },
    mechanism: { text: 'Inibe síntese da parede celular bacteriana. Liga-se às proteínas ligadoras de penicilina (PBPs). Bactericida. Ativo contra bactérias Gram+ sensíveis.', tooltip: 'Mecanismo de ação similar às penicilinas.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Pico: 2-4h. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Boa absorção oral com eliminação renal.' },
    doses: [
      { species: 'Cão', indication: 'Piodermite', dose: '22 mg/kg', route: 'PO', interval: 'q12h', notes: 'Duração mínima efetiva com recheck clínico.' },
      { species: 'Gato', indication: 'Infecções pele', dose: '22 mg/kg', route: 'PO', interval: 'q12h', notes: 'Bem tolerado. Duração mínima efetiva.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Manter horário consistente. Duração mínima efetiva com recheck clínico. Basear em cultura/citologia.', tooltip: 'Administração oral com duração adequada.' },
    contraindications: { text: 'Hipersensibilidade a β-lactâmicos. Doença renal grave. Gestação. Lactação. Histórico de reações alérgicas.', tooltip: 'Cuidado em pacientes com alergia a penicilinas.' },
    adverseEffects: { text: 'Vômito. Diarreia. Anorexia. Raramente: reações alérgicas, hepatotoxicidade. Reações cruzadas com penicilinas em raros casos.', tooltip: 'Efeitos gastrointestinais são os mais comuns.' },
    interactions: { text: 'Probenecida (↑ níveis). Outros β-lactâmicos (↑ toxicidade). Anticoagulantes (↑ risco hemorrágico).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Resposta clínica. Sinais gastrointestinais. Função renal. Recheck clínico. Evitar uso prolongado sem reavaliação/cultura.', tooltip: 'Monitoramento da resposta clínica é essencial.' },
    evidence: { text: 'Cefalosporina eficaz para infecções de pele por Gram+. Uso racional baseado em cultura/citologia. Duração mínima efetiva necessária.', tooltip: 'Opção eficaz para infecções de pele por Gram+.' }
  }
];
