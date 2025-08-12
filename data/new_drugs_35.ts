import { Drug } from '../types';

export const newDrugs35: Drug[] = [
  {
    name: 'Zopiclona Hemipropionato',
    sector: 'Neurologia',
    class: 'Hipnótico; Agonista GABA-A.',
    commercialNames: ['Zopiclona Hemipropionato', 'Imovane®'],
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
  },
  {
    name: 'Zolpidem Hemibutirato',
    sector: 'Neurologia',
    class: 'Hipnótico; Agonista GABA-A.',
    commercialNames: ['Zolpidem Hemibutirato', 'Stilnox®'],
    highlights: [
      'Hipnótico de ação rápida.',
      'Induz sono rapidamente.',
      'Meia-vida curta.',
      'Seguro para uso agudo.'
    ],
    clinicalIndications: { text: 'Insônia. Distúrbios do sono. Sedação. Ansiedade.', tooltip: 'Especialmente útil para insônia e distúrbios do sono.' },
    mechanism: { text: 'Agonista seletivo GABA-A. Potencia inibição neuronal. Induz sono. Sedativo.', tooltip: 'Ativa seletivamente receptores GABA-A, potenciando inibição neuronal.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 15-30 min. Pico: 1-2h. Meia-vida: 2-3h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida curta.' },
    doses: [
      { species: 'Cão', indication: 'Insônia', dose: '0,1-0,3 mg/kg', route: 'PO', interval: '24h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Gato', indication: 'Insônia', dose: '0,1-0,3 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Dose inicial.' }
    ],
    dilutionAndAdministration: { text: 'PO: 30 min antes de dormir. Comprimidos: não esmagar. Manter horário consistente.', tooltip: 'Administrar 30 min antes de dormir. Não esmagar comprimidos.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Depressão respiratória. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Sedação. Ataxia. Raramente: alucinações. Dependência. Rebound insomnia.', tooltip: 'Sedação é o efeito adverso mais comum. Monitorar dependência.' },
    interactions: { text: 'Outros depressores do SNC (↑ sedação). Álcool (↑ efeitos).', tooltip: 'Outros depressores aumentam sedação. Álcool aumenta efeitos.' },
    monitoring: { text: 'Qualidade do sono. Nível de consciência. Sinais de dependência. Resposta clínica.', tooltip: 'Observar qualidade do sono. Monitorar nível de consciência.' },
    evidence: { text: 'Hipnótico eficaz para insônia. Ação rápida. Meia-vida curta.', tooltip: 'Alternativa útil para insônia. Hipnótico de ação rápida.' }
  },
  {
    name: 'Zopiclona Hemibutirato',
    sector: 'Neurologia',
    class: 'Hipnótico; Agonista GABA-A.',
    commercialNames: ['Zopiclona Hemibutirato', 'Imovane®'],
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
  },
  {
    name: 'Zolpidem Hemiformiato',
    sector: 'Neurologia',
    class: 'Hipnótico; Agonista GABA-A.',
    commercialNames: ['Zolpidem Hemiformiato', 'Stilnox®'],
    highlights: [
      'Hipnótico de ação rápida.',
      'Induz sono rapidamente.',
      'Meia-vida curta.',
      'Seguro para uso agudo.'
    ],
    clinicalIndications: { text: 'Insônia. Distúrbios do sono. Sedação. Ansiedade.', tooltip: 'Especialmente útil para insônia e distúrbios do sono.' },
    mechanism: { text: 'Agonista seletivo GABA-A. Potencia inibição neuronal. Induz sono. Sedativo.', tooltip: 'Ativa seletivamente receptores GABA-A, potenciando inibição neuronal.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 15-30 min. Pico: 1-2h. Meia-vida: 2-3h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida curta.' },
    doses: [
      { species: 'Cão', indication: 'Insônia', dose: '0,1-0,3 mg/kg', route: 'PO', interval: '24h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Gato', indication: 'Insônia', dose: '0,1-0,3 mg/kg', route: 'PO', interval: '24h', notes: 'Bem tolerado. Dose inicial.' }
    ],
    dilutionAndAdministration: { text: 'PO: 30 min antes de dormir. Comprimidos: não esmagar. Manter horário consistente.', tooltip: 'Administrar 30 min antes de dormir. Não esmagar comprimidos.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Depressão respiratória. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Sedação. Ataxia. Raramente: alucinações. Dependência. Rebound insomnia.', tooltip: 'Sedação é o efeito adverso mais comum. Monitorar dependência.' },
    interactions: { text: 'Outros depressores do SNC (↑ sedação). Álcool (↑ efeitos).', tooltip: 'Outros depressores aumentam sedação. Álcool aumenta efeitos.' },
    monitoring: { text: 'Qualidade do sono. Nível de consciência. Sinais de dependência. Resposta clínica.', tooltip: 'Observar qualidade do sono. Monitorar nível de consciência.' },
    evidence: { text: 'Hipnótico eficaz para insônia. Ação rápida. Meia-vida curta.', tooltip: 'Alternativa útil para insônia. Hipnótico de ação rápida.' }
  },
  {
    name: 'Zopiclona Hemipropionato',
    sector: 'Neurologia',
    class: 'Hipnótico; Agonista GABA-A.',
    commercialNames: ['Zopiclona Hemipropionato', 'Imovane®'],
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
