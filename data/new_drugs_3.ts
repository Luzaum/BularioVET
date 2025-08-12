import { Drug } from '../types';

export const newDrugs3: Drug[] = [
  {
    name: 'Cetamina (Ketamina)',
    sector: 'Anestesia',
    class: 'Anestésico Dissociativo; Antagonista NMDA.',
    commercialNames: ['Ketamine', 'Ketaset®', 'Vetalar®'],
    highlights: [
      'Antagonista NMDA; analgesia anti‑hiperalgésica em baixa dose.',
      'Sensibilização central e NMDA.',
      'CRI para analgesia multimodal.',
      'Combinar com opioide/BZD.'
    ],
    clinicalIndications: {
      text: 'Indução e manutenção da anestesia; analgesia em CRI para dor crônica ou neuropática.',
      tooltip: 'Especialmente útil para combater a sensibilização central ("wind-up").'
    },
    mechanism: {
      text: 'Antagonista não competitivo do receptor N-metil-D-aspartato (NMDA).',
      tooltip: 'Reduz a sensibilização central, um fenômeno de amplificação da dor no SNC.'
    },
    pharmacokinetics: {
      text: 'Metabolismo hepático; recuperação depende da redistribuição e metabolismo.',
      tooltip: 'Meia-vida curta permite controle fino da profundidade anestésica.'
    },
    doses: [
      { species: 'Cão', indication: 'CRI (analgesia)', dose: '10–20 µg/kg/min', route: 'IV', interval: 'Após bolus 0,5 mg/kg', notes: 'Diluir em SF 0,9%' },
      { species: 'Gato', indication: 'Indução Anestésica', dose: '1-1.3 mg/kg', route: 'IV', interval: 'Bolus lento', notes: 'Seguido de doses de 2 mg/kg conforme necessário' },
      { species: 'Gato', indication: 'CRI (Anestesia)', dose: '7-8 mg/kg/hora', route: 'IV', interval: 'Contínuo', notes: '' }
    ],
    dilutionAndAdministration: {
      text: 'CRI: diluir em SF 0,9%; infusão contínua após bolus inicial.',
      tooltip: 'A diluição adequada é essencial para CRI seguro.'
    },
    contraindications: {
      text: 'Doença cardíaca grave, hipertensão, glaucoma, trauma craniano.',
      tooltip: 'O aumento da frequência cardíaca pode ser deletério em cardiopatas.'
    },
    adverseEffects: {
      text: 'Taquicardia, salivação, excitação dose‑dependente; combinar com opioide/BZD.',
      tooltip: 'A combinação com outros agentes reduz os efeitos adversos.'
    },
    interactions: {
      text: 'Usada com segurança em associação com acepromazina, xilazina, detomidina.',
      tooltip: 'Combinações sinérgicas com benzodiazepínicos e opioides.'
    },
    monitoring: {
      text: 'Monitoramento anestésico padrão; lubrificar os olhos.',
      tooltip: 'Os olhos permanecem abertos durante a anestesia dissociativa.'
    },
    evidence: {
      text: 'Anestésico fundamental na medicina veterinária, especialmente em combinação.',
      tooltip: 'Baseado em estudos clínicos e longa experiência veterinária.'
    }
  },
  {
    name: 'Cetirizina',
    sector: 'Dermatologia',
    class: 'Anti‑H1 2ª geração.',
    commercialNames: ['Zyrtec®', 'Piriteze®'],
    highlights: [
      'Anti-histamínico de 2ª geração com menor sedação.',
      'Avaliar resposta clínica individual.',
      'Perfil de segurança favorável.',
      'Menor penetração no SNC.'
    ],
    clinicalIndications: {
      text: 'Prurido, urticária, adjuvante em dermatite atópica.',
      tooltip: 'Especialmente útil quando sedação é uma preocupação.'
    },
    mechanism: {
      text: 'Antagonista seletivo H1; baixa penetração SNC.',
      tooltip: 'A baixa penetração no SNC resulta em menos sedação.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral; metabolismo hepático limitado.',
      tooltip: 'Meia-vida longa permite administração uma vez ao dia.'
    },
    doses: [
      { species: 'Cão', indication: 'Alergias', dose: '1 mg/kg', route: 'VO', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Alergias', dose: '2,5–5 mg/gato', route: 'VO', interval: 'q24h', notes: '' }
    ],
    contraindications: {
      text: 'Hipersensibilidade ao fármaco; insuficiência renal grave.',
      tooltip: 'Ajuste de dose pode ser necessário em IR.'
    },
    adverseEffects: {
      text: 'Sedação rara, boca seca, GI leve.',
      tooltip: 'Geralmente bem tolerado com menos efeitos adversos que anti-histamínicos de 1ª geração.'
    },
    interactions: {
      text: 'Sem interações relevantes relatadas em veterinária.',
      tooltip: 'Perfil de interação medicamentosa favorável.'
    },
    monitoring: {
      text: 'Redução do prurido/sinais alérgicos; sedação.',
      tooltip: 'A resposta é individual e pode variar entre pacientes.'
    },
    evidence: {
      text: 'Uso frequente; benefício variável entre pacientes.',
      tooltip: 'Baseado em extrapolação humana e experiência clínica veterinária.'
    }
  },
  {
    name: 'Cetoconazol',
    sector: 'Antifúngicos',
    class: 'Antifúngico azólico; Inibidor da síntese de esteroides.',
    commercialNames: ['Nizoral®', 'Cetoconazol(g)'],
    highlights: [
      'Antifúngico sistêmico com atividade contra leveduras e fungos dimórficos.',
      'Inibe a síntese de cortisol e testosterona.',
      'Potente inibidor de enzimas hepáticas (citocromo P450).',
      'Requer ambiente ácido para absorção oral.'
    ],
    clinicalIndications: {
      text: 'Infecções fúngicas sistêmicas (blastomicose, histoplasmose); manejo médico de curta duração do hiperadrenocorticismo.',
      tooltip: 'Especialmente útil para infecções fúngicas sistêmicas.'
    },
    mechanism: {
      text: 'Inibe a síntese do ergosterol na membrana celular fúngica; inibe enzimas do citocromo P450.',
      tooltip: 'A inibição do ergosterol resulta em membrana fúngica defeituosa.'
    },
    pharmacokinetics: {
      text: 'Absorção oral depende da acidez estomacal; metabolismo hepático.',
      tooltip: 'A administração com alimento pode melhorar a absorção.'
    },
    doses: [
      { species: 'Cão', indication: 'Hiperadrenocorticismo', dose: '5 mg/kg q12h, aumentando para 10-15 mg/kg q12h', route: 'VO', interval: 'q12h', notes: 'Administrar com alimento' },
      { species: 'Cão/Gato', indication: 'Infecção Fúngica', dose: '5-10 mg/kg', route: 'VO', interval: 'q12-24h', notes: '' }
    ],
    contraindications: {
      text: 'Não administrar com antiácidos ou inibidores da bomba de prótons; hepatopatia grave.',
      tooltip: 'A absorção é prejudicada em pH gástrico elevado.'
    },
    adverseEffects: {
      text: 'Anorexia, vômito, diarreia e hepatotoxicidade; efeitos endócrinos.',
      tooltip: 'A hepatotoxicidade é dose-dependente e pode ser grave.'
    },
    interactions: {
      text: 'Potente inibidor do P450; aumenta concentração de ciclosporina, benzodiazepínicos, varfarina.',
      tooltip: 'Muitas interações medicamentosas clinicamente significativas.'
    },
    monitoring: {
      text: 'Enzimas hepáticas durante a terapia; níveis de cortisol (teste de estimulação com ACTH).',
      tooltip: 'Monitoramento hepático é essencial durante terapia prolongada.'
    },
    evidence: {
      text: 'Antifúngico eficaz, mas uso para hiperadrenocorticismo foi substituído por fármacos mais seguros.',
      tooltip: 'Baseado em estudos clínicos e experiência veterinária.'
    }
  },
  {
    name: 'Cianocobalamina (Vit B12)',
    sector: 'Gastroenterologia',
    class: 'Vitamina; Suplemento.',
    commercialNames: ['Anivit B12', 'Neo-Cytamen'],
    highlights: [
      'Usada para suplementação em animais com deficiência.',
      'Deficiência comum em doenças gastrointestinais.',
      'Administração geralmente por via subcutânea.',
      'Cofator essencial para metabolismo.'
    ],
    clinicalIndications: {
      text: 'Deficiência de cobalamina (Vitamina B12), frequentemente associada a insuficiência pancreática exócrina (IPE), doença inflamatória intestinal (DII).',
      tooltip: 'Especialmente importante em enteropatias crônicas.'
    },
    mechanism: {
      text: 'Cofator essencial para o metabolismo de carboidratos e gorduras e para a síntese de proteínas e mielina.',
      tooltip: 'A deficiência leva a distúrbios metabólicos e celulares.'
    },
    pharmacokinetics: {
      text: 'Absorção intestinal requer o fator intrínseco; via parenteral contorna necessidade de absorção intestinal.',
      tooltip: 'A via parenteral é mais confiável em pacientes com malabsorção.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Suplementação', dose: 'Gatos: 250 µg; Cães <10kg: 250-500 µg; Cães >10kg: 500-1000 µg', route: 'SC', interval: 'Semanalmente por 6 semanas, depois mensalmente', notes: 'Dose em microgramas (µg)' }
    ],
    contraindications: {
      text: 'Não há contraindicações significativas.',
      tooltip: 'Extremamente segura, mesmo em altas doses.'
    },
    adverseEffects: {
      text: 'Extremamente segura; reações no local da injeção são raras.',
      tooltip: 'Toxicidade por vitamina B12 é virtualmente inexistente.'
    },
    interactions: {
      text: 'Não há interações significativas conhecidas.',
      tooltip: 'Pode ser administrada com outros medicamentos sem preocupação.'
    },
    monitoring: {
      text: 'Níveis séricos de cobalamina para confirmar a deficiência e avaliar a resposta à terapia.',
      tooltip: 'A normalização dos níveis séricos indica resposta adequada.'
    },
    evidence: {
      text: 'Suplementação em pacientes com hipocobalaminemia é prática padrão e baseada em evidências.',
      tooltip: 'Baseado em estudos clínicos e experiência veterinária estabelecida.'
    }
  },
  {
    name: 'Ciclofosfamida',
    sector: 'Oncologia',
    class: 'Quimioterapia; Agente alquilante.',
    commercialNames: ['Cytoxan®', 'Endoxana®'],
    highlights: [
      'Agente quimioterápico e imunossupressor potente.',
      'Risco significativo de cistite hemorrágica estéril.',
      'Causa mielossupressão dose-dependente.',
      'Usado em combinação com outros agentes.'
    ],
    clinicalIndications: {
      text: 'Linfoma, carcinomas, imunossupressão em protocolos.',
      tooltip: 'Componente de muitos protocolos de quimioterapia.'
    },
    mechanism: {
      text: 'Agente alquilante que se liga ao DNA, formando ligações cruzadas e interferindo na replicação celular.',
      tooltip: 'Especialmente ativo em células de rápida proliferação.'
    },
    pharmacokinetics: {
      text: 'Pró-fármaco ativado no fígado; metabólitos excretados na urina.',
      tooltip: 'A ativação hepática é necessária para atividade citotóxica.'
    },
    doses: [
      { species: 'Cão', indication: 'Neoplasias', dose: '50–250 mg/m²', route: 'VO', interval: 'Conforme protocolo', notes: 'Ajustar por hemograma' }
    ],
    dilutionAndAdministration: {
      text: 'Administração oral; hidratar adequadamente para prevenir cistite.',
      tooltip: 'A hidratação é crucial para prevenir cistite hemorrágica.'
    },
    contraindications: {
      text: 'Mielossupressão prévia, hepatopatia, gestação/lactação.',
      tooltip: 'Não administrar a animais de produção.'
    },
    adverseEffects: {
      text: 'Cistite estéril hemorrágica (acroleína), mielossupressão, GI.',
      tooltip: 'A cistite é causada pelo metabólito acroleína.'
    },
    interactions: {
      text: 'Somatório com outros mielossupressores; fenobarbital pode reduzir eficácia.',
      tooltip: 'Muitas interações com outros agentes citotóxicos.'
    },
    monitoring: {
      text: 'Hemograma (7, 14 e 21 dias), enzimas hepáticas e sinais GI.',
      tooltip: 'Monitoramento rigoroso é essencial durante terapia.'
    },
    evidence: {
      text: 'Quimioterápico estabelecido para várias neoplasias caninas; útil em SNC.',
      tooltip: 'Baseado em estudos clínicos e experiência veterinária.'
    }
  },
  {
    name: 'Ciclosporina (microemulsão, sistêmica)',
    sector: 'Imunossupressores',
    class: 'Imunossupressor; Inibidor da calcineurina.',
    commercialNames: ['Atopica®', 'Neoral®', 'Sandimmune®'],
    highlights: [
      'Tratamento de escolha para dermatite atópica canina.',
      'Eficaz para uma variedade de doenças imunomediadas.',
      'As formulações em microemulsão têm absorção mais confiável.',
      'O principal efeito adverso é o distúrbio gastrointestinal.'
    ],
    clinicalIndications: {
      text: 'Dermatite atópica, ceratoconjuntivite seca, fístulas perianais, anemia hemolítica imunomediada.',
      tooltip: 'Especialmente útil para doenças imunomediadas refratárias.'
    },
    mechanism: {
      text: 'Inibe a calcineurina, bloqueando a transcrição de citocinas (especialmente IL-2) e a ativação de linfócitos T.',
      tooltip: 'Mais específica para imunidade celular (linfócitos T) do que humoral.'
    },
    pharmacokinetics: {
      text: 'Absorção oral baixa e variável (20-30%); formas de microemulsão são absorvidas de forma mais previsível.',
      tooltip: 'A microemulsão melhora significativamente a biodisponibilidade.'
    },
    doses: [
      { species: 'Cão', indication: 'Atopia/Imunossupressão', dose: '5 mg/kg', route: 'VO', interval: 'q24h', notes: 'Após remissão, pode ser administrada em dias alternados' },
      { species: 'Gato', indication: 'Atopia/Imunossupressão', dose: '3-5 mg/kg', route: 'VO', interval: 'q24h', notes: 'Pode ser administrada em dias alternados após remissão' }
    ],
    contraindications: {
      text: 'Não administrar durante a gestação ou lactação; cautela ao vacinar.',
      tooltip: 'Pode impedir resposta a vacinas de vírus vivo.'
    },
    adverseEffects: {
      text: 'Vômito e diarreia são comuns no início; hiperplasia gengival e hipertricose com uso crônico.',
      tooltip: 'Os efeitos GI geralmente melhoram com o tempo.'
    },
    interactions: {
      text: 'Cetoconazol ↑ níveis (reduzir dose de ciclosporina); muitos outros fármacos podem afetar seus níveis.',
      tooltip: 'Muitas interações medicamentosas clinicamente significativas.'
    },
    monitoring: {
      text: 'Monitoramento clínico da resposta e dos efeitos adversos.',
      tooltip: 'Monitoramento dos níveis sanguíneos não é rotineiramente necessário.'
    },
    evidence: {
      text: 'Eficácia similar à da prednisolona para dermatite atópica canina, mas com perfil de efeitos adversos diferente.',
      tooltip: 'Baseado em estudos clínicos e experiência veterinária estabelecida.'
    }
  },
  {
    name: 'Ciclosporina oftálmica 0,2–2%',
    sector: 'Oftalmologia',
    class: 'Imunossupressor tópico.',
    commercialNames: ['Optimune®'],
    highlights: [
      'Indicada para KCS canina (imunomediada).',
      'Resposta em 4–6 semanas.',
      'Manter lubrificação concomitante.',
      'Ação local sem efeitos sistêmicos.'
    ],
    clinicalIndications: {
      text: 'KCS canina (imunomediada).',
      tooltip: 'Especialmente útil quando a causa é imunomediada.'
    },
    mechanism: {
      text: 'Inibe a calcineurina localmente, reduzindo a inflamação da glândula lacrimal.',
      tooltip: 'Ação imunossupressora local sem efeitos sistêmicos.'
    },
    pharmacokinetics: {
      text: 'Ação tópica local; absorção sistêmica mínima.',
      tooltip: 'Concentrações sistêmicas desprezíveis.'
    },
    doses: [
      { species: 'Cão', indication: 'KCS', dose: '0,2–2%', route: 'Oftálmico', interval: 'q12–24h', notes: 'Resposta 4–6 semanas' }
    ],
    dilutionAndAdministration: {
      text: 'Aplicação tópica ocular; manter lubrificação concomitante.',
      tooltip: 'A lubrificação concomitante é essencial para o sucesso.'
    },
    contraindications: {
      text: 'Hipersensibilidade ao fármaco; infecções oculares ativas.',
      tooltip: 'Não usar em presença de infecção ocular ativa.'
    },
    adverseEffects: {
      text: 'Irritação local rara; geralmente bem tolerada.',
      tooltip: 'Efeitos adversos locais são incomuns.'
    },
    interactions: {
      text: 'Não há interações significativas conhecidas.',
      tooltip: 'Pode ser usada com outros medicamentos oftálmicos.'
    },
    monitoring: {
      text: 'Teste de Schirmer, córnea.',
      tooltip: 'Monitoramento da produção lacrimal e integridade corneana.'
    },
    evidence: {
      text: 'Eficácia estabelecida para KCS imunomediada em cães.',
      tooltip: 'Baseado em estudos clínicos e experiência veterinária.'
    }
  },
  {
    name: 'Ciprofloxacina',
    sector: 'Antimicrobianos',
    class: 'Fluoroquinolona; Antibacteriano.',
    commercialNames: ['Cipro®', 'Ciprovet Colírio®'],
    highlights: [
      'Fluoroquinolona de amplo espectro com boa atividade contra Pseudomonas.',
      'Absorção oral baixa e variável em cães e gatos.',
      'Enrofloxacina é geralmente preferida em veterinária.',
      'Risco de artropatia em animais jovens.'
    ],
    clinicalIndications: {
      text: 'Infecções bacterianas suscetíveis, especialmente quando atividade antipseudomonal é desejada.',
      tooltip: 'Uso sistêmico limitado pela baixa biodisponibilidade oral.'
    },
    mechanism: {
      text: 'Inibe a DNA girase bacteriana, interferindo na replicação do DNA.',
      tooltip: 'Bactericida e concentração-dependente.'
    },
    pharmacokinetics: {
      text: 'Absorção oral baixa e variável em cães (42-74%) e gatos (22-33%).',
      tooltip: 'A baixa biodisponibilidade limita o uso oral.'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções (Oral)', dose: '20-25 mg/kg', route: 'VO', interval: 'q24h', notes: 'Doses altas necessárias para compensar baixa absorção' },
      { species: 'Cão', indication: 'Infecções (IV)', dose: '20 mg/kg', route: 'IV', interval: 'q24h', notes: 'Diluir a 1–2 mg/mL e infundir ~60 min' },
      { species: 'Gato', indication: 'Infecções (Oral)', dose: '20–25 mg/kg', route: 'VO/IV', interval: 'q24h', notes: 'Biodisponibilidade muito baixa' }
    ],
    dilutionAndAdministration: {
      text: 'D5W/SF/RL; estável até 14 d; evitar co‑adm mesma linha sem checar.',
      tooltip: 'A diluição adequada é essencial para administração IV segura.'
    },
    contraindications: {
      text: 'Evitar em animais jovens em crescimento; histórico de convulsões.',
      tooltip: 'O risco de artropatia é maior em animais em crescimento.'
    },
    adverseEffects: {
      text: 'Artropatia em animais jovens; efeitos no SNC (convulsões) em altas doses.',
      tooltip: 'Cegueira (retinopatia) não foi relatada como com enrofloxacina em gatos.'
    },
    interactions: {
      text: 'Quelantes (Al/Ca/Mg/Fe/Zn), ciclosporina (nefrotoxicidade), QTc (cisaprida, azóis, ondansetrona).',
      tooltip: 'Muitas interações clinicamente significativas.'
    },
    monitoring: {
      text: 'GI, função renal/hidratação; evitar em crescimento (cartilagem).',
      tooltip: 'Monitoramento rigoroso em pacientes de risco.'
    },
    evidence: {
      text: 'Uso clínico é empírico; enrofloxacina é geralmente preferida.',
      tooltip: 'Baseado em extrapolação humana e experiência clínica limitada.'
    }
  },
  {
    name: 'Cisaprida',
    sector: 'Gastroenterologia',
    class: 'Procintético.',
    commercialNames: ['Prepulsid®', 'Propulsid®'],
    highlights: [
      'Agente procinético que estimula motilidade do TGI superior e cólon.',
      'Útil para constipação e megacólon em gatos.',
      'Comercialização descontinuada; disponível apenas manipulado.',
      'Risco de arritmias cardíacas em humanos.'
    ],
    clinicalIndications: {
      text: 'Distúrbios de motilidade, gastroparesia, refluxo gastroesofágico, constipação crônica e megacólon em gatos.',
      tooltip: 'Especialmente útil para megacólon felino.'
    },
    mechanism: {
      text: 'Agonista do receptor de serotonina 5-HT4, aumentando liberação de acetilcolina no plexo mioentérico.',
      tooltip: 'Estimula contração do músculo liso gastrointestinal.'
    },
    pharmacokinetics: {
      text: 'Metabolizada pelo citocromo P450.',
      tooltip: 'A metabolização hepática é importante para sua atividade.'
    },
    doses: [
      { species: 'Gato', indication: 'Constipação/Megacólon', dose: '2,5 mg/gato', route: 'VO', interval: 'q8–12h', notes: '≈0,1–0,5 mg/kg' },
      { species: 'Cão', indication: 'Procinético', dose: '0,1–0,5 mg/kg', route: 'VO', interval: 'q8–12h', notes: 'Normalmente manipulado' }
    ],
    contraindications: {
      text: 'Obstrução ou perfuração gastrointestinal.',
      tooltip: 'Não usar em presença de obstrução intestinal.'
    },
    adverseEffects: {
      text: 'Geralmente bem tolerada em animais; vômito e diarreia podem ocorrer.',
      tooltip: 'O risco de arritmias cardíacas parece ser muito baixo em animais.'
    },
    interactions: {
      text: 'Risco QTc (macrolídeos, azóis, ondansetrona, sotalol, quinidina, fluoxetina).',
      tooltip: 'Muitas interações com fármacos que prolongam QT.'
    },
    monitoring: {
      text: 'Trânsito fecal; ECG se pró‑QT.',
      tooltip: 'Monitoramento cardíaco em pacientes de risco.'
    },
    evidence: {
      text: 'Uso baseado em estudos experimentais e forte evidência empírica.',
      tooltip: 'Especialmente eficaz para megacólon em gatos.'
    }
  },
  {
    name: 'Citrato de Potássio',
    sector: 'Urologia',
    class: 'Agente alcalinizante; Suplemento de potássio.',
    commercialNames: ['Urocit-K®'],
    highlights: [
      'Usado para prevenir formação de cálculos de oxalato de cálcio.',
      'Alcaliniza a urina e aumenta excreção de citrato.',
      'Fornece suplementação de potássio.',
      'Titular para alvo de pH urinário.'
    ],
    clinicalIndications: {
      text: 'Prevenção da recorrência de urólitos de oxalato de cálcio em cães e gatos.',
      tooltip: 'Especialmente útil para prevenir recidivas de cálculos de oxalato.'
    },
    mechanism: {
      text: 'Citrato é metabolizado a bicarbonato, atuando como agente alcalinizante sistêmico e urinário.',
      tooltip: 'A urina mais alcalina aumenta a solubilidade do oxalato de cálcio.'
    },
    pharmacokinetics: {
      text: 'Bem absorvido por via oral.',
      tooltip: 'Ação rápida após administração oral.'
    },
    doses: [
      { species: 'Cão', indication: 'Prevenção de Urolitíase por Oxalato', dose: '75–100 mg/kg/dia', route: 'VO', interval: 'Dividido', notes: 'Titular para alvo de pH urinário' },
      { species: 'Gato', indication: 'Prevenção de Urolitíase por Oxalato', dose: '50–75 mg/kg/dia', route: 'VO', interval: 'Dividido', notes: 'Titular para alvo de pH urinário' }
    ],
    contraindications: {
      text: 'Hipercalemia, insuficiência renal grave, infecções do TUI por bactérias produtoras de urease.',
      tooltip: 'Cautela em pacientes com IRC e uso com IECA/espironolactona.'
    },
    adverseEffects: {
      text: 'Distúrbios gastrointestinais leves; principal risco é hipercalemia se dose excessiva.',
      tooltip: 'Monitorar potássio sérico regularmente.'
    },
    interactions: {
      text: 'Pode reduzir absorção de ciprofloxacina; usar com cautela com fármacos que aumentam potássio.',
      tooltip: 'Muitas interações com fármacos que afetam potássio.'
    },
    monitoring: {
      text: 'pH urinário (alvo por tipo de cálculo), K+ sérico.',
      tooltip: 'Alvos de pH por tipo de cálculo.'
    },
    evidence: {
      text: 'Tratamento padrão e baseado em evidências para prevenção de cálculos de oxalato de cálcio.',
      tooltip: 'Baseado em estudos clínicos e diretrizes urológicas.'
    }
  }
];
