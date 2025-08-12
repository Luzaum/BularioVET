import { Drug } from '../types';

export const newDrugs: Drug[] = [
  {
    name: 'Ácido Tranexâmico (TXA)',
    sector: 'Hematologia',
    class: 'Antifibrinolítico; Análogo da lisina.',
    commercialNames: ['Cyklokapron®', 'Lysteda®'],
    highlights: [
      'Estabiliza coágulos bloqueando a fibrinólise.',
      'Útil em sangramento perioperatório e trauma selecionado.',
      'Administração IV lenta para evitar hipotensão.',
      'Incompatível com penicilinas e sangue.'
    ],
    clinicalIndications: {
      text: 'Hiperfibrinólise (sangramento perioperatório/trauma selecionado, epistaxe).',
      tooltip: 'Especialmente útil em procedimentos cirúrgicos com alto risco de sangramento.'
    },
    mechanism: {
      text: 'Análogo da lisina; liga plasminogênio → bloqueia fibrinólise; estabiliza coágulos.',
      tooltip: 'O ácido tranexâmico compete com a lisina pelos sítios de ligação do plasminogênio, impedindo sua conversão em plasmina.'
    },
    pharmacokinetics: {
      text: 'Eliminação renal; meia-vida de 2-3 horas. Concentração máxima em 1-2 horas após administração IV.',
      tooltip: 'Ajuste de dose necessário em insuficiência renal.'
    },
    doses: [
      { species: 'Cão', indication: 'Bolus', dose: '10 mg/kg', route: 'IV', interval: 'Bolus em ~2 min', notes: 'Ou 10–20 mg/kg em 15–20 min' },
      { species: 'Cão', indication: 'Manutenção', dose: '5–10 mg/kg', route: 'IV', interval: 'q6–8 h', notes: 'OU CRI 10 mg/kg/h' },
      { species: 'Gato', indication: 'Bolus', dose: '10 mg/kg', route: 'IV', interval: 'Bolus lento', notes: 'Dados limitados; iniciar baixo e monitorar' }
    ],
    dilutionAndAdministration: {
      text: 'Compatível com salinas/RL/carboidratos; incompatível com penicilinas; não misturar com sangue. Diluir conforme necessário para infusão lenta.',
      tooltip: 'A infusão rápida pode causar hipotensão significativa.'
    },
    contraindications: {
      text: 'CID pró-trombótica; hipersensibilidade; insuficiência renal grave.',
      tooltip: 'Evitar em pacientes com risco de trombose ativa.'
    },
    adverseEffects: {
      text: 'Hipotensão se infusão rápida; náusea; trombose em pacientes predispostos.',
      tooltip: 'Monitorar pressão arterial durante infusão.'
    },
    interactions: {
      text: 'Incompatível com penicilinas; pode aumentar risco trombótico com anticoagulantes.',
      tooltip: 'Não misturar com sangue ou penicilinas na mesma linha.'
    },
    monitoring: {
      text: 'FC/PA, sangramento clínico, PCV/TP/TTPa, TEG/ROTEM se disponível.',
      tooltip: 'Monitorar resposta clínica e parâmetros de coagulação.'
    },
    evidence: {
      text: 'Eficácia estabelecida em medicina humana para controle de sangramento. Dados veterinários limitados mas promissores.',
      tooltip: 'Baseado em evidências humanas e experiência clínica veterinária.'
    }
  },
  {
    name: 'Hidróxido de Alumínio',
    sector: 'Nefrologia',
    class: 'Ligante de fósforo; Antiácido.',
    commercialNames: ['Amphojel®', 'Basaljel®'],
    highlights: [
      'Liga fosfato no TGI → reduz absorção.',
      'Administrar com a refeição para máxima eficácia.',
      'Pode causar constipação.',
      'Quelante inespecífico — separar outras drogas ≥2 h.'
    ],
    clinicalIndications: {
      text: 'Manejo da hiperfosfatemia em pacientes com doença renal crônica.',
      tooltip: 'Controla o hiperparatireoidismo secundário renal.'
    },
    mechanism: {
      text: 'Liga fosfato no TGI → reduz absorção; administrar com a refeição.',
      tooltip: 'Forma complexos insolúveis com fosfato, impedindo sua absorção intestinal.'
    },
    pharmacokinetics: {
      text: 'Ação local no intestino; absorção de alumínio mínima, mas pode aumentar em DRC.',
      tooltip: 'Risco teórico de toxicidade por alumínio em uso crônico.'
    },
    doses: [
      { species: 'Cão', indication: 'Quelante de Fósforo', dose: '30–90 mg/kg/dia', route: 'VO', interval: 'Dividido com refeições', notes: 'Titular por fósforo sérico' },
      { species: 'Gato', indication: 'Quelante de Fósforo', dose: '30–60 mg/kg/dia', route: 'VO', interval: 'Dividido com refeições', notes: 'Titular por fósforo sérico' }
    ],
    contraindications: {
      text: 'Hipofosfatemia; obstrução intestinal; uso crônico em pacientes com DRC avançada.',
      tooltip: 'Monitorar níveis de fósforo para evitar hipofosfatemia.'
    },
    adverseEffects: {
      text: 'Constipação; hipofosfatemia/microcitose se excesso; toxicidade por alumínio em uso crônico.',
      tooltip: 'A constipação pode ser um problema significativo em alguns pacientes.'
    },
    interactions: {
      text: 'Quelante inespecífico — separar outras drogas ≥2 h; pode reduzir absorção de tetraciclinas, fluoroquinolonas.',
      tooltip: 'Administrar outros medicamentos pelo menos 2 horas antes ou depois.'
    },
    monitoring: {
      text: 'Fósforo sérico semanal–2/3sem até meta (IRIS).',
      tooltip: 'Metas de P conforme estágio IRIS da DRC.'
    },
    evidence: {
      text: 'Quelantes de fósforo são pilar no manejo da DRC para controlar hiperparatireoidismo secundário.',
      tooltip: 'Baseado em diretrizes IRIS e evidência clínica estabelecida.'
    }
  },
  {
    name: 'Brometo de Potássio (KBr)',
    sector: 'Neurologia',
    class: 'Anticonvulsivante.',
    commercialNames: ['KBr (manipulado)', 'Libromide'],
    highlights: [
      'Aumenta influxo de Cl‑ (hiperpolariza) → ↑ limiar convulsivo.',
      'Meia-vida longa (semanas) - demora para estado estacionário.',
      'Eliminação renal; cloreto dietético altera níveis.',
      'Evitar em gatos (bronquite/asma).'
    ],
    clinicalIndications: {
      text: 'Epilepsia idiopática canina (mono/adjuvante); evitar em gatos (bronquite/asma).',
      tooltip: 'Especialmente útil como adjuvante quando fenobarbital não é suficiente.'
    },
    mechanism: {
      text: 'Aumenta influxo de Cl‑ (hiperpolariza) → ↑ limiar convulsivo.',
      tooltip: 'O brometo compete com o cloreto pelos canais de cloreto neuronais, hiperpolarizando a membrana.'
    },
    pharmacokinetics: {
      text: 'Eliminação renal; t½ 11 dias em gatos, 25-46 dias em cães; estado estacionário em 2-3 meses.',
      tooltip: 'A longa meia-vida justifica dose de ataque para atingir níveis terapêuticos rapidamente.'
    },
    doses: [
      { species: 'Cão', indication: 'Carga', dose: '400–600 mg/kg', route: 'VO', interval: 'Dividido em 3–5 d', notes: 'Opcional; pode causar sedação intensa' },
      { species: 'Cão', indication: 'Manutenção', dose: '20–40 mg/kg', route: 'VO', interval: 'q24h', notes: 'Guida por níveis séricos' },
      { species: 'Gato', indication: 'Manutenção', dose: '20–30 mg/kg', route: 'VO', interval: 'q24h', notes: 'USO CONTROVERSO - alto risco de pneumonite' }
    ],
    contraindications: {
      text: 'Gatos (bronquite/asma); insuficiência renal grave; gestação.',
      tooltip: 'O uso em gatos é controverso devido ao risco de pneumonite asmática.'
    },
    adverseEffects: {
      text: 'Sedação, ataxia, PU/PD, pancreatite; gatos: tosse/dispneia.',
      tooltip: 'A sedação é dose-dependente e pode ser significativa no início.'
    },
    interactions: {
      text: 'Cloreto dietético altera níveis; fluidoterapia com NaCl pode reduzir drasticamente níveis.',
      tooltip: 'Dietas com alto teor de cloreto diminuem os níveis de brometo.'
    },
    monitoring: {
      text: 'Nível sérico (meia‑vida longa), ingestão de cloreto (dieta), função renal.',
      tooltip: 'Faixa terapêutica: 1-3 mg/mL (10-30 mmol/L).'
    },
    evidence: {
      text: 'Anticonvulsivante de eficácia comprovada, sendo excelente opção adjuvante para controle de convulsões em cães.',
      tooltip: 'Baseado em estudos clínicos e longa experiência veterinária.'
    }
  },
  {
    name: 'Buprenorfina',
    sector: 'Analgesia',
    class: 'Opioide μ parcial; Analgésico.',
    commercialNames: ['Bupaq®', 'Vetergesic®', 'Buprenex®'],
    highlights: [
      'Opioide μ parcial - excelente em gatos, inclusive via OTM.',
      'Agonista parcial ≠ fraco - alta afinidade pelo receptor.',
      'SC em cães pouco confiável.',
      'Longa duração de ação (6-8 horas).'
    ],
    clinicalIndications: {
      text: 'Analgesia leve–moderada (excelente em gatos, inclusive via OTM), per‑operatório, sedação combinada.',
      tooltip: 'Especialmente útil em gatos devido à excelente absorção transmucosa oral.'
    },
    mechanism: {
      text: 'Agonista parcial μ com alta afinidade; antagonista κ; liga-se fortemente ao receptor, deslocando outros agonistas.',
      tooltip: 'O efeito "teto" significa que aumentar a dose não aumenta a analgesia além de certo ponto.'
    },
    pharmacokinetics: {
      text: 'Metabolismo hepático extenso; via OTM em gatos contorna metabolismo de primeira passagem.',
      tooltip: 'A via transmucosa oral em gatos oferece biodisponibilidade de 30-50%.'
    },
    doses: [
      { species: 'Cão', indication: 'Analgesia', dose: '5–30 µg/kg', route: 'IV/IM', interval: 'q4–6h', notes: 'q8–12h dor leve' },
      { species: 'Cão', indication: 'CRI', dose: '2–4 µg/kg/h', route: 'IV', interval: 'Após bolus', notes: 'Contínuo' },
      { species: 'Gato', indication: 'Analgesia', dose: '0.01–0.03 mg/kg', route: 'OTM/IV/IM', interval: 'q6-8h', notes: 'Simbadol® SC q24h' }
    ],
    dilutionAndAdministration: {
      text: 'Compatível: SF/D5W/RL para CRI; evitar mistura com diazepam/lorazepam na mesma seringa.',
      tooltip: 'Para CRI, diluir conforme necessário e infundir continuamente.'
    },
    contraindications: {
      text: 'Hipersensibilidade a opioides; depressão respiratória grave.',
      tooltip: 'A reversão com naloxona pode ser difícil devido à alta afinidade.'
    },
    adverseEffects: {
      text: 'Sedação, depressão respiratória leve, euforia/disforia em gatos.',
      tooltip: 'Geralmente bem tolerado com menos efeitos adversos que agonistas puros.'
    },
    interactions: {
      text: 'Risco serotonérgico (ISRS/SNRI/TCA, tramadol); azóis ↑ níveis; antagoniza parcialmente μ‑plenos.',
      tooltip: 'Evitar combinação com outros fármacos serotonérgicos.'
    },
    monitoring: {
      text: 'Dor, FR/esforço resp., sedação.',
      tooltip: 'Avaliar adequação da analgesia e nível de sedação.'
    },
    evidence: {
      text: 'Analgésico muito popular e eficaz para dor leve a moderada, especialmente em gatos.',
      tooltip: 'Baseado em estudos clínicos e ampla experiência veterinária.'
    }
  },
  {
    name: 'Cefdinir',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração VO.',
    commercialNames: ['Omnicef®'],
    highlights: [
      'Cefalosporina oral de 3ª geração.',
      'Sem dados validados no acervo para cães/gatos.',
      'Preferir cefpodoxime proxetil.',
      'Uso baseado em extrapolação humana.'
    ],
    clinicalIndications: {
      text: 'Infecções de pele, tecidos moles e trato urinário por organismos suscetíveis.',
      tooltip: 'Uso limitado pela falta de dados farmacocinéticos validados em animais.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana; liga-se às PBPs.',
      tooltip: 'Ação bactericida tempo-dependente.'
    },
    pharmacokinetics: {
      text: 'Dados limitados em cães e gatos; absorção oral variável.',
      tooltip: 'Falta de estudos farmacocinéticos validados limita o uso.'
    },
    doses: [
      { species: 'Cão', indication: 'Alternativa', dose: '5–10 mg/kg', route: 'VO', interval: 'q24h', notes: 'Preferir cefpodoxime proxetil' },
      { species: 'Gato', indication: 'Não recomendado', dose: 'Não estabelecida', route: 'VO', interval: 'N/A', notes: 'Dados insuficientes' }
    ],
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; falta de dados de segurança.',
      tooltip: 'Evitar devido à falta de dados validados.'
    },
    adverseEffects: {
      text: 'Dados limitados; possíveis efeitos GI e reações alérgicas.',
      tooltip: 'Perfil de segurança não estabelecido em animais.'
    },
    interactions: {
      text: 'Interações não estabelecidas em veterinária.',
      tooltip: 'Falta de dados de interação medicamentosa.'
    },
    monitoring: {
      text: 'Resposta clínica; não há dados de monitoramento específicos.',
      tooltip: 'Monitoramento empírico baseado na resposta clínica.'
    },
    evidence: {
      text: 'Falta de dados validados no acervo veterinário; preferir alternativas estabelecidas.',
      tooltip: 'Cefpodoxime proxetil é alternativa mais bem documentada.'
    }
  }
];
