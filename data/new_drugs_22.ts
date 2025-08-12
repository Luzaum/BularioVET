import { Drug } from '../types';

export const newDrugs22: Drug[] = [
  {
    name: 'Ácido Fusídico 2% (Gel)',
    sector: 'Dermatologia',
    class: 'Antibiótico tópico; Inibidor da síntese proteica.',
    commercialNames: ['Fucidin®', 'Fusidic Acid'],
    highlights: [
      'Antibiótico tópico específico para Gram+',
      'Inibe síntese proteica bacteriana',
      'Ativo contra Staphylococcus spp.',
      'Ideal para piodermites localizadas'
    ],
    clinicalIndications: { text: 'Piodermites superficiais localizadas. Foliculites focais. Infecções cutâneas por Staphylococcus spp. Áreas onde terapia sistêmica não é necessária.', tooltip: 'Especialmente útil para lesões localizadas onde a terapia sistêmica seria desnecessária.' },
    mechanism: { text: 'Inibe a síntese proteica bacteriana através do fator de elongação G. Liga-se à subunidade 50S do ribossomo, impedindo a translocação de peptidil-tRNA.', tooltip: 'Mecanismo específico que impede a síntese de proteínas bacterianas essenciais.' },
    pharmacokinetics: { text: 'Ação tópica local. Mínima absorção sistêmica. Concentração alta no local de aplicação. Eliminação principalmente por descamação da pele.', tooltip: 'Ação localizada com mínima absorção sistêmica.' },
    doses: [
      { species: 'Cão', indication: 'Piodermite localizada', dose: 'Aplicar em camada fina', route: 'Tópico', interval: '2-3x/dia', notes: 'Após limpeza da área. Evitar lamber.' },
      { species: 'Gato', indication: 'Piodermite localizada', dose: 'Aplicar em camada fina', route: 'Tópico', interval: '2-3x/dia', notes: 'Após limpeza da área. Evitar lamber.' }
    ],
    dilutionAndAdministration: { text: 'Aplicar em camada fina 2-3x/dia após limpeza da área. Evitar que o animal lamba a área tratada. Avaliar resposta em 5-7 dias.', tooltip: 'Aplicação tópica simples, mas importante evitar ingestão.' },
    contraindications: { text: 'Hipersensibilidade ao ácido fusídico. Lesões extensas ou múltiplas (considerar terapia sistêmica). Feridas profundas ou abscessos.', tooltip: 'Para lesões extensas, considerar terapia sistêmica.' },
    adverseEffects: { text: 'Irritação local leve. Raramente: reações alérgicas de contato. Pode causar ressecamento da pele.', tooltip: 'Geralmente bem tolerado, com efeitos adversos mínimos.' },
    interactions: { text: 'Não há interações significativas conhecidas para uso tópico. Pode ser usado concomitante com outros tratamentos tópicos.', tooltip: 'Uso tópico seguro sem interações importantes.' },
    monitoring: { text: 'Avaliar resposta clínica em 5-7 dias. Observar sinais de irritação local. Se lesões múltiplas/difusas, considerar terapia sistêmica.', tooltip: 'Monitoramento clínico simples da resposta ao tratamento.' },
    evidence: { text: 'Antibiótico tópico eficaz contra Staphylococcus spp. Especialmente útil para lesões localizadas. Evita uso desnecessário de antibióticos sistêmicos.', tooltip: 'Opção eficaz para reduzir uso de antibióticos sistêmicos.' }
  },
  {
    name: 'Ácido Salicílico 2% (Limpador)',
    sector: 'Dermatologia',
    class: 'Queratolítico; Queratoplástico.',
    commercialNames: ['Salicylic Acid', 'Sebolytic'],
    highlights: [
      'Queratolítico e queratoplástico',
      'Reduz adesão corneocitária',
      'Facilita remoção de detritos',
      'Útil em seborreia e otite ceruminosa'
    ],
    clinicalIndications: { text: 'Seborreia. Otite ceruminosa. Acne canina. Dermatite seborreica. Limpeza de conduto auditivo.', tooltip: 'Especialmente útil para condições com excesso de queratina e oleosidade.' },
    mechanism: { text: 'Reduz a adesão entre corneócitos. Diminui a oleosidade da pele. Facilita a remoção de detritos e escamas. Promove renovação celular.', tooltip: 'Ação queratolítica que facilita a remoção de células mortas.' },
    pharmacokinetics: { text: 'Ação tópica local. Mínima absorção sistêmica. Efeito localizado na área de aplicação. Eliminação por descamação natural.', tooltip: 'Ação localizada sem absorção sistêmica significativa.' },
    doses: [
      { species: 'Cão', indication: 'Seborreia/Otite', dose: 'Aplicar conforme indicado', route: 'Tópico', interval: 'Conforme necessidade', notes: 'Deixar tempo de contato 5-10 min antes de enxaguar.' },
      { species: 'Gato', indication: 'Seborreia/Otite', dose: 'Aplicar conforme indicado', route: 'Tópico', interval: 'Conforme necessidade', notes: 'Deixar tempo de contato 5-10 min antes de enxaguar.' }
    ],
    dilutionAndAdministration: { text: 'Aplicar no banho ou conduto auditivo. Deixar tempo de contato de 5-10 minutos antes de enxaguar. Evitar pele ulcerada ou ferida.', tooltip: 'Tempo de contato adequado é essencial para eficácia.' },
    contraindications: { text: 'Pele ulcerada ou ferida. Hipersensibilidade ao ácido salicílico. Uso em grandes áreas sem supervisão veterinária.', tooltip: 'Evitar em áreas com pele comprometida.' },
    adverseEffects: { text: 'Irritação local leve. Ressecamento da pele. Raramente: reações alérgicas de contato.', tooltip: 'Geralmente bem tolerado com efeitos adversos mínimos.' },
    interactions: { text: 'Pode potencializar outros queratolíticos. Evitar uso concomitante com outros irritantes tópicos.', tooltip: 'Cuidado com uso combinado de queratolíticos.' },
    monitoring: { text: 'Observar resposta clínica. Avaliar sinais de irritação. Após controle, reduzir frequência para 1-3x/semana conforme resposta.', tooltip: 'Monitoramento da resposta e ajuste da frequência.' },
    evidence: { text: 'Queratolítico eficaz para seborreia e otite ceruminosa. Facilita limpeza e manutenção da pele. Opção segura para uso tópico.', tooltip: 'Opção eficaz e segura para condições queratolíticas.' }
  },
  {
    name: 'Butorfanol',
    sector: 'Anestesiologia',
    class: 'Agonista-antagonista opioide; κ agonista / μ antagonista.',
    commercialNames: ['Torbugesic®', 'Butorphanol'],
    highlights: [
      'Agonista-antagonista opioide',
      'Boa atividade antitussígena',
      'Sedação leve a moderada',
      'Analgesia limitada para dor leve'
    ],
    clinicalIndications: { text: 'Sedação leve. Tosse não produtiva. Coadjuvante de anestesia. Analgesia para procedimentos leves. Controle de tosse.', tooltip: 'Especialmente útil para sedação e controle de tosse.' },
    mechanism: { text: 'Agonista do receptor κ-opioide (sedação, antitussígeno). Antagonista do receptor μ-opioide (analgesia limitada). Ação central no tronco encefálico.', tooltip: 'Mecanismo dual que explica seus efeitos específicos.' },
    pharmacokinetics: { text: 'Início: 5-15 min IV/IM. Pico: 30-60 min. Meia-vida: 2-4h. Metabolizado no fígado. Excreção renal.', tooltip: 'Início rápido com duração intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Sedação/Antitussígeno', dose: '0,1-0,4 mg/kg', route: 'IV/IM/SC', interval: 'q4-6h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Gato', indication: 'Sedação/Antitussígeno', dose: '0,1-0,4 mg/kg', route: 'IV/IM/SC', interval: 'q4-6h', notes: 'Bem tolerado. Dose inicial.' }
    ],
    dilutionAndAdministration: { text: 'IV: bolus lento. IM/SC: aplicar em tecido muscular/subcutâneo. Monitorar nível de consciência e função respiratória.', tooltip: 'Administração parenteral com monitoramento adequado.' },
    contraindications: { text: 'Hipersensibilidade. Depressão respiratória grave. Trauma craniano. Uso concomitante com outros depressores do SNC.', tooltip: 'Cuidado em pacientes com depressão respiratória.' },
    adverseEffects: { text: 'Sedação. Ataxia. Depressão respiratória leve. Vômito ocasional. Pode antagonizar opioides μ plenos (morfina, fentanil).', tooltip: 'Sedação é o efeito adverso mais comum.' },
    interactions: { text: 'Outros depressores do SNC (↑ sedação). Pode antagonizar morfina/fentanil. Álcool (↑ efeitos depressores).', tooltip: 'Interações importantes com outros depressores do SNC.' },
    monitoring: { text: 'Nível de consciência. Função respiratória. Frequência cardíaca. Resposta clínica. Evitar como único analgésico em dor moderada/intensa.', tooltip: 'Monitoramento da função respiratória é essencial.' },
    evidence: { text: 'Sedativo e antitussígeno eficaz. Analgesia limitada para procedimentos leves. Útil como coadjuvante anestésico.', tooltip: 'Opção útil para sedação e controle de tosse.' }
  },
  {
    name: 'Calcitriol (1,25-di-hidroxivitamina D3)',
    sector: 'Nefrologia',
    class: 'Vitamina D ativa; Metabolito da vitamina D.',
    commercialNames: ['Rocaltrol®', 'Calcitriol'],
    highlights: [
      'Vitamina D ativa (1,25-OH-D3)',
      'Repõe vitamina D ativa',
      'Reduz PTH (hiperparatireoidismo renal)',
      'Protege osso e rins'
    ],
    clinicalIndications: { text: 'Hiperparatireoidismo renal secundário. Doença renal crônica (DRC). Hipocalcemia. Osteodistrofia renal. Redução de PTH.', tooltip: 'Especialmente útil no manejo da DRC e hiperparatireoidismo renal.' },
    mechanism: { text: 'Repõe vitamina D ativa (1,25-OH-D3). Reduz secreção de PTH. Melhora absorção intestinal de cálcio. Protege contra osteodistrofia renal.', tooltip: 'Ação direta na regulação do cálcio e PTH.' },
    pharmacokinetics: { text: 'Início: 2-4h. Pico: 4-8h. Meia-vida: 4-6h. Metabolizado no fígado. Excreção biliar e renal.', tooltip: 'Início relativamente rápido com meia-vida intermediária.' },
    doses: [
      { species: 'Cão', indication: 'DRC/Hiperparatireoidismo', dose: '2,5-5 ng/kg', route: 'PO', interval: '24h', notes: 'Dose inicial. Ajustar baseado no PTH e cálcio.' },
      { species: 'Gato', indication: 'DRC/Hiperparatireoidismo', dose: '2,5-5 ng/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Dose inicial.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Manter horário consistente. Monitorar cálcio e fósforo regularmente. Titulação lenta.', tooltip: 'Administração oral com monitoramento rigoroso.' },
    contraindications: { text: 'Hipercalcemia. Hiperfosfatemia não controlada. Hipersensibilidade. Doença hepática grave. Gestação.', tooltip: 'Contraindicação absoluta em hipercalcemia.' },
    adverseEffects: { text: 'Hipercalcemia. Hipercalciúria. Nefrocalcinose. Anorexia. Vômito. Poliúria. Polidipsia.', tooltip: 'Hipercalcemia é o efeito adverso mais grave.' },
    interactions: { text: 'Quelantes de fósforo (↑ absorção de cálcio). Diuréticos tiazídicos (↑ cálcio). Corticoides (↓ absorção).', tooltip: 'Interações importantes com outros medicamentos.' },
    monitoring: { text: 'Cálcio sérico. Fósforo sérico. PTH. Função renal. Sinais de hipercalcemia. Iniciar após controle do fósforo.', tooltip: 'Monitoramento rigoroso de cálcio e fósforo é essencial.' },
    evidence: { text: 'Eficaz no controle do hiperparatireoidismo renal. Protege contra osteodistrofia renal. Dose baixa com titulação lenta necessária.', tooltip: 'Opção eficaz para DRC com hiperparatireoidismo.' }
  },
  {
    name: 'Capromorelina',
    sector: 'Gastroenterologia',
    class: 'Agonista do receptor de grelina; Estimulante de apetite.',
    commercialNames: ['Entyce®', 'Capromorelin'],
    highlights: [
      'Agonista do receptor de grelina',
      'Estimulante de apetite',
      'Aumenta GH/IGF-1',
      'Induz sinais de fome'
    ],
    clinicalIndications: { text: 'Anorexia por doenças crônicas. Anorexia por estresse. Perda de apetite. Caquexia. Recuperação pós-cirúrgica.', tooltip: 'Especialmente útil para estimular apetite em condições crônicas.' },
    mechanism: { text: 'Agonista do receptor de grelina. Aumenta secreção de GH e IGF-1. Induz sinais de fome no hipotálamo. Estimula motilidade gástrica.', tooltip: 'Ação central e periférica para estimular apetite.' },
    pharmacokinetics: { text: 'Início: 1-2h. Pico: 2-4h. Meia-vida: 4-6h. Metabolizado no fígado. Excreção renal.', tooltip: 'Início relativamente rápido com duração intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Anorexia', dose: '3 mg/kg', route: 'PO', interval: '24h', notes: 'Dose única diária. Administrar 1h antes da refeição.' },
      { species: 'Gato', indication: 'Anorexia', dose: '3 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Dose única diária.' }
    ],
    dilutionAndAdministration: { text: 'PO: 1 hora antes da refeição. Administrar com ou sem alimentos. Manter horário consistente. Tratar causa base em paralelo.', tooltip: 'Administração oral com timing específico.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação. Lactação. Neoplasias ativas.', tooltip: 'Cuidado em pacientes com doença hepática.' },
    adverseEffects: { text: 'Sialorreia. Vômito ocasional. Diarreia leve. Aumento da frequência urinária. Raramente: alterações hepáticas.', tooltip: 'Sialorreia é o efeito adverso mais comum.' },
    interactions: { text: 'Não há interações significativas conhecidas. Pode ser usado com outros tratamentos para a condição base.', tooltip: 'Poucas interações medicamentosas conhecidas.' },
    monitoring: { text: 'Apetite e ingestão alimentar. Peso corporal. Hidratação. Função hepática. Checar hidratação/peso semanalmente no início.', tooltip: 'Monitoramento do apetite e peso é essencial.' },
    evidence: { text: 'Estimulante de apetite eficaz em cães. Melhora ingestão alimentar em condições crônicas. Tratar causa base em paralelo.', tooltip: 'Opção eficaz para estimular apetite em cães.' }
  }
];
