import { Drug } from '../types';

export const newDrugs21: Drug[] = [
  {
    name: 'Warfarina',
    sector: 'Hematologia',
    class: 'Anticoagulante; Antagonista da vitamina K.',
    commercialNames: ['Coumadin®', 'Warfarina'],
    highlights: [
      'Anticoagulante oral.',
      'Antagonista da vitamina K.',
      'Monitoramento de INR necessário.',
      'Interações medicamentosas frequentes.'
    ],
    clinicalIndications: { text: 'Tromboembolismo. Trombose venosa profunda. Embolia pulmonar. Fibrilação atrial.', tooltip: 'Especialmente útil para prevenção e tratamento de tromboembolismo.' },
    mechanism: { text: 'Antagoniza vitamina K. Inibe síntese de fatores de coagulação II, VII, IX, X. Anticoagulante.', tooltip: 'Bloqueia redução da vitamina K, inibindo síntese de fatores de coagulação dependentes.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 24-72h. Pico: 3-5 dias. Meia-vida: 20-60h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida longa e variável.' },
    doses: [
      { species: 'Cão', indication: 'Tromboembolismo', dose: '0,1-0,2 mg/kg', route: 'PO', interval: '24h', notes: 'Dose inicial. Ajustar baseado no INR.' },
      { species: 'Cão', indication: 'Fibrilação atrial', dose: '0,1-0,2 mg/kg', route: 'PO', interval: '24h', notes: 'Para fibrilação atrial. Monitorar INR.' },
      { species: 'Gato', indication: 'Tromboembolismo', dose: '0,1-0,2 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Ajustar baseado no INR.' },
      { species: 'Gato', indication: 'Fibrilação atrial', dose: '0,1-0,2 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Para fibrilação atrial.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Manter horário consistente. Monitorar INR regularmente.', tooltip: 'Pode ser administrado com alimentos. Monitorar INR regularmente.' },
    contraindications: { text: 'Hipersensibilidade. Hemorragia ativa. Úlcera péptica. Gestação. Doença hepática grave.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com risco hemorrágico.' },
    adverseEffects: { text: 'Hemorragia. Equimoses. Hematomas. Raramente: necrose cutânea. Alopecia.', tooltip: 'Hemorragia é o efeito adverso mais grave. Monitorar sinais de sangramento.' },
    interactions: { text: 'Muitas interações. AINEs (↑ risco hemorrágico). Antibióticos (↑ efeitos).', tooltip: 'Muitas interações medicamentosas. AINEs aumentam risco hemorrágico.' },
    monitoring: { text: 'INR (2-3). Tempo de protrombina. Sinais de hemorragia. Função hepática.', tooltip: 'INR: 2-3. Tempo de protrombina. Observar sinais de hemorragia.' },
    evidence: { text: 'Anticoagulante eficaz. Monitoramento rigoroso necessário. Muitas interações.', tooltip: 'Padrão-ouro para anticoagulação oral. Monitoramento rigoroso essencial.' }
  },
  {
    name: 'Xilazina',
    sector: 'Anestesiologia',
    class: 'Agonista α2-adrenérgico; Sedativo.',
    commercialNames: ['Rompun®', 'Xilazina'],
    highlights: [
      'Agonista α2-adrenérgico.',
      'Sedativo e analgésico.',
      'Reversível com atipamezol.',
      'Monitoramento cardíaco necessário.'
    ],
    clinicalIndications: { text: 'Sedação. Analgesia. Pré-medicação. Contenção química. Procedimentos menores.', tooltip: 'Especialmente útil para sedação e analgesia.' },
    mechanism: { text: 'Agonista α2-adrenérgico. Reduz liberação de noradrenalina. Sedação e analgesia. Bradicardia.', tooltip: 'Ativa receptores α2-adrenérgicos, reduzindo liberação de noradrenalina.' },
    pharmacokinetics: { text: 'Início: 5-15 min IM/SC. Pico: 15-30 min. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Sedação', dose: '0,5-2 mg/kg', route: 'IM/SC', interval: 'Bolus', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Analgesia', dose: '0,5-2 mg/kg', route: 'IM/SC', interval: 'Bolus', notes: 'Para analgesia. Monitorar respiração.' },
      { species: 'Gato', indication: 'Sedação', dose: '0,5-2 mg/kg', route: 'IM/SC', interval: 'Bolus', notes: 'Bem tolerado. Ajustar conforme resposta.' },
      { species: 'Gato', indication: 'Analgesia', dose: '0,5-2 mg/kg', route: 'IM/SC', interval: 'Bolus', notes: 'Bem tolerado. Para analgesia.' }
    ],
    dilutionAndAdministration: { text: 'IM/SC: aplicar em tecido muscular/subcutâneo. Monitorar respiração. Reversível com atipamezol.', tooltip: 'Aplicar em tecido muscular/subcutâneo. Monitorar função respiratória.' },
    contraindications: { text: 'Hipersensibilidade. Doença cardíaca grave. Choque. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com doença cardíaca.' },
    adverseEffects: { text: 'Bradicardia. Hipotensão. Depressão respiratória. Vômito. Arritmias.', tooltip: 'Bradicardia é o efeito adverso mais comum. Monitorar frequência cardíaca.' },
    interactions: { text: 'Outros depressores do SNC (↑ sedação). Atipamezol (reversão).', tooltip: 'Outros depressores aumentam sedação. Atipamezol reverte efeitos.' },
    monitoring: { text: 'Frequência cardíaca. Pressão arterial. Função respiratória. Nível de consciência.', tooltip: 'Frequência cardíaca. Pressão arterial. Observar função respiratória.' },
    evidence: { text: 'Sedativo eficaz. Analgésico útil. Reversível com atipamezol.', tooltip: 'Alternativa útil para sedação. Reversível com atipamezol.' }
  },
  {
    name: 'Yohimbina',
    sector: 'Emergência',
    class: 'Antagonista α2-adrenérgico; Antídoto.',
    commercialNames: ['Yohimbina', 'Yocon®'],
    highlights: [
      'Antagonista α2-adrenérgico.',
      'Antídoto para xilazina.',
      'Estimulante do SNC.',
      'Uso restrito.'
    ],
    clinicalIndications: { text: 'Reversão de xilazina. Overdose de agonistas α2. Estimulação do SNC.', tooltip: 'Especialmente útil para reversão de xilazina.' },
    mechanism: { text: 'Antagonista competitivo α2-adrenérgico. Aumenta liberação de noradrenalina. Estimulante.', tooltip: 'Bloqueia competitivamente receptores α2-adrenérgicos.' },
    pharmacokinetics: { text: 'Início: 5-15 min IV. Pico: 15-30 min. Meia-vida: 1-2h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Reversão xilazina', dose: '0,1-0,2 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Para reversão de xilazina. Monitorar resposta.' },
      { species: 'Gato', indication: 'Reversão xilazina', dose: '0,1-0,2 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Bem tolerado. Para reversão de xilazina.' }
    ],
    dilutionAndAdministration: { text: 'IV: bolus lento. Monitorar resposta. Usar apenas quando necessário.', tooltip: 'IV: bolus lento. Monitorar resposta clínica.' },
    contraindications: { text: 'Hipersensibilidade. Doença cardíaca grave. Hipertensão grave.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com doença cardíaca.' },
    adverseEffects: { text: 'Taquicardia. Hipertensão. Agitação. Tremores. Convulsões.', tooltip: 'Taquicardia é o efeito adverso mais comum. Monitorar frequência cardíaca.' },
    interactions: { text: 'Agonistas α2 (antagonismo). Outros estimulantes (↑ efeitos).', tooltip: 'Antagoniza agonistas α2. Outros estimulantes aumentam efeitos.' },
    monitoring: { text: 'Frequência cardíaca. Pressão arterial. Nível de consciência. Sinais de agitação.', tooltip: 'Frequência cardíaca. Pressão arterial. Observar nível de consciência.' },
    evidence: { text: 'Antídoto eficaz para xilazina. Estimulante útil. Uso restrito.', tooltip: 'Alternativa útil para reversão de xilazina. Uso restrito.' }
  },

  {
    name: 'Zopiclona',
    sector: 'Neurologia',
    class: 'Hipnótico; Agonista GABA-A.',
    commercialNames: ['Imovane®', 'Zopiclona'],
    highlights: [
      'Hipnótico de ação intermediária.',
      'Induz sono rapidamente.',
      'Meia-vida intermediária.',
      'Seguro para uso agudo.'
    ],
    clinicalIndications: { text: 'Insônia. Distúrbios do sono. Sedação. Ansiedade.', tooltip: 'Especialmente útil para insônia e distúrbios do sono.' },
    mechanism: { text: 'Agonista GABA-A. Potencia inibição neuronal. Induz sono. Sedativo.', tooltip: 'Ativa receptores GABA-A, potenciando inibição neuronal central.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 15-30 min. Pico: 1-2h. Meia-vida: 5-6h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Insônia', dose: '0,1-0,3 mg/kg', route: 'PO', interval: '24h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Gato', indication: 'Insônia', dose: '0,1-0,3 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Dose inicial.' }
    ],
    dilutionAndAdministration: { text: 'PO: 30 min antes de dormir. Comprimidos: não esmagar. Manter horário consistente.', tooltip: 'Administrar 30 min antes de dormir. Não esmagar comprimidos.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Depressão respiratória. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Sedação. Ataxia. Sabor metálico. Raramente: alucinações. Dependência.', tooltip: 'Sedação é o efeito adverso mais comum. Sabor metálico característico.' },
    interactions: { text: 'Outros depressores do SNC (↑ sedação). Álcool (↑ efeitos).', tooltip: 'Outros depressores aumentam sedação. Álcool aumenta efeitos.' },
    monitoring: { text: 'Qualidade do sono. Nível de consciência. Sinais de dependência. Resposta clínica.', tooltip: 'Observar qualidade do sono. Monitorar nível de consciência.' },
    evidence: { text: 'Hipnótico eficaz para insônia. Ação intermediária. Boa tolerabilidade.', tooltip: 'Alternativa útil para insônia. Hipnótico de ação intermediária.' }
  }
];
