import { Drug } from '../types';

export const newDrugs20: Drug[] = [
  {
    name: 'Sulfametoxazol + Trimetoprima',
    sector: 'Antimicrobianos',
    class: 'Sulfonamida + Diaminopirimidina; Antibacteriano.',
    commercialNames: ['Bactrim®', 'Septra®', 'Sulfametoxazol + Trimetoprima'],
    highlights: [
      'Combinação antibacteriana sinérgica.',
      'Espectro amplo.',
      'Eficaz contra bactérias Gram-positivas e negativas.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Infecções do trato urinário. Infecções respiratórias. Infecções cutâneas. Pneumonia.', tooltip: 'Especialmente útil para infecções do trato urinário e respiratórias.' },
    mechanism: { text: 'Sulfametoxazol: inibe síntese de ácido fólico. Trimetoprima: inibe diidrofolato redutase. Sinergismo bactericida.', tooltip: 'Ambos inibem diferentes etapas da síntese de ácido fólico, causando sinergismo.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 8-12h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Excreção primariamente renal.' },
    doses: [
      { species: 'Cão', indication: 'Infecções bacterianas', dose: '15-30 mg/kg', route: 'PO', interval: '12h', notes: 'Duração: 7-14 dias. Para infecções bacterianas.' },
      { species: 'Cão', indication: 'ITU', dose: '15-30 mg/kg', route: 'PO', interval: '12h', notes: 'Duração: 7-10 dias. Para infecções urinárias.' },
      { species: 'Gato', indication: 'Infecções bacterianas', dose: '15-30 mg/kg', route: 'PO', interval: '12h', notes: 'Bem tolerado. Duração: 7-14 dias.' },
      { species: 'Gato', indication: 'ITU', dose: '15-30 mg/kg', route: 'PO', interval: '12h', notes: 'Bem tolerado. Duração: 7-10 dias.' }
    ],
    dilutionAndAdministration: { text: 'PO: com alimentos. Comprimidos: podem ser esmagados. Manter horário consistente.', tooltip: 'Administrar com alimentos para melhor tolerância. Comprimidos podem ser esmagados.' },
    contraindications: { text: 'Hipersensibilidade a sulfonamidas. Doença hepática grave. Gestação.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Gastrointestinais (náusea, vômito). Reações alérgicas. Hepatotoxicidade. Cristalúria.', tooltip: 'Efeitos gastrointestinais são os mais comuns. Monitorar função hepática.' },
    interactions: { text: 'Warfarina (↑ risco hemorrágico). Fenitoína (↑ níveis). Metotrexato (↑ toxicidade).', tooltip: 'Warfarina aumenta risco hemorrágico. Fenitoína tem níveis aumentados.' },
    monitoring: { text: 'Função hepática. Função renal. Sinais de reação alérgica. Resposta clínica.', tooltip: 'ALT, AST. Creatinina, BUN. Observar sinais de reação alérgica.' },
    evidence: { text: 'Antibacteriano eficaz para infecções bacterianas. Combinação sinérgica bem estabelecida.', tooltip: 'Padrão-ouro para infecções do trato urinário. Combinação sinérgica eficaz.' }
  },
  {
    name: 'Tramadol',
    sector: 'Analgesia',
    class: 'Opioide atípico; Analgésico.',
    commercialNames: ['Tramadol', 'Ultram®'],
    highlights: [
      'Opioide atípico.',
      'Analgésico de ação dupla.',
      'Menor risco de dependência.',
      'Seguro para uso prolongado.'
    ],
    clinicalIndications: { text: 'Dor aguda e crônica. Dor pós-operatória. Dor oncológica. Dor neuropática.', tooltip: 'Especialmente útil para dor moderada a grave.' },
    mechanism: { text: 'Agonista μ-opioide fraco. Inibe recaptação de serotonina e noradrenalina. Ação analgésica dupla.', tooltip: 'Combina ação opioide com inibição de recaptação de monoaminas.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 30-60 min. Meia-vida: 4-6h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida relativamente curta.' },
    doses: [
      { species: 'Cão', indication: 'Dor aguda', dose: '2-5 mg/kg', route: 'PO', interval: '6-8h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Dor crônica', dose: '2-5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Para dor crônica. Monitorar efeitos adversos.' },
      { species: 'Gato', indication: 'Dor aguda', dose: '1-4 mg/kg', route: 'PO', interval: '8-12h', notes: 'Dose reduzida. Monitorar cuidadosamente.' },
      { species: 'Gato', indication: 'Dor crônica', dose: '1-4 mg/kg', route: 'PO', interval: '12h', notes: 'Dose reduzida. Para dor crônica.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Comprimidos: podem ser esmagados. Manter horário consistente.', tooltip: 'Pode ser administrado com alimentos. Comprimidos podem ser esmagados.' },
    contraindications: { text: 'Hipersensibilidade. Depressão respiratória grave. Epilepsia. MAOIs.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com epilepsia.' },
    adverseEffects: { text: 'Sedação, ataxia. Náusea, vômito. Constipação. Convulsões (altas doses).', tooltip: 'Sedação é o efeito adverso mais comum. Monitorar sinais neurológicos.' },
    interactions: { text: 'MAOIs (↑ risco serotoninérgico). Outros depressores do SNC (↑ sedação).', tooltip: 'MAOIs aumentam risco serotoninérgico. Outros depressores aumentam sedação.' },
    monitoring: { text: 'Nível de consciência. Dor. Sinais neurológicos. Resposta clínica.', tooltip: 'Observar nível de consciência. Monitorar dor e sinais neurológicos.' },
    evidence: { text: 'Analgésico eficaz para dor moderada. Menor risco de dependência que opioides clássicos.', tooltip: 'Alternativa útil para dor moderada. Menor risco de dependência.' }
  },
  {
    name: 'Trazodona',
    sector: 'Neurologia',
    class: 'Antidepressivo; Inibidor da recaptação de serotonina.',
    commercialNames: ['Desyrel®', 'Trazodona'],
    highlights: [
      'Antidepressivo com efeito sedativo.',
      'Útil para ansiedade e agitação.',
      'Seguro para uso prolongado.',
      'Boa tolerabilidade.'
    ],
    clinicalIndications: { text: 'Ansiedade. Agitação. Depressão. Distúrbios do sono. Comportamento compulsivo.', tooltip: 'Especialmente útil para ansiedade e agitação.' },
    mechanism: { text: 'Inibidor da recaptação de serotonina. Antagonista 5-HT2A. Antagonista α1-adrenérgico. Sedativo.', tooltip: 'Inibe recaptação de serotonina e bloqueia múltiplos receptores.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 5-9h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Ansiedade', dose: '2,5-3,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Dose inicial. Ajustar conforme resposta.' },
      { species: 'Cão', indication: 'Agitação', dose: '2,5-3,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Para agitação. Monitorar efeitos adversos.' },
      { species: 'Gato', indication: 'Ansiedade', dose: '2,5-3,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Dose inicial.' },
      { species: 'Gato', indication: 'Agitação', dose: '2,5-3,5 mg/kg', route: 'PO', interval: '8-12h', notes: 'Bem tolerado. Para agitação.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Comprimidos: podem ser esmagados. Manter horário consistente.', tooltip: 'Pode ser administrado com alimentos. Comprimidos podem ser esmagados.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação. MAOIs.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Sedação. Náusea, vômito. Raramente: priapismo. Reações alérgicas.', tooltip: 'Sedação é o efeito adverso mais comum. Geralmente bem tolerado.' },
    interactions: { text: 'MAOIs (↑ risco serotoninérgico). Outros depressores do SNC (↑ sedação).', tooltip: 'MAOIs aumentam risco serotoninérgico. Outros depressores aumentam sedação.' },
    monitoring: { text: 'Nível de consciência. Sinais de melhora. Resposta clínica. Duração do tratamento.', tooltip: 'Observar nível de consciência. Monitorar sinais de melhora.' },
    evidence: { text: 'Antidepressivo eficaz para ansiedade. Sedativo útil. Seguro para uso prolongado.', tooltip: 'Alternativa útil para ansiedade. Sedativo bem estabelecido.' }
  },
  {
    name: 'Triclorfon',
    sector: 'Parasitologia',
    class: 'Organofosforado; Antiparasitário.',
    commercialNames: ['Neguvon®', 'Triclorfon'],
    highlights: [
      'Antiparasitário organofosforado.',
      'Eficaz contra ectoparasitas.',
      'Tóxico para mamíferos.',
      'Uso restrito.'
    ],
    clinicalIndications: { text: 'Infestações por carrapatos. Infestações por piolhos. Infestações por ácaros.', tooltip: 'Especialmente útil para infestações por ectoparasitas.' },
    mechanism: { text: 'Inibe colinesterase. Acumula acetilcolina. Paralisia neuromuscular. Morte do parasita.', tooltip: 'Inibe irreversivelmente colinesterase, causando acúmulo de acetilcolina.' },
    pharmacokinetics: { text: 'Absorção cutânea variável. Metabolizado no fígado. Excreção renal. Meia-vida: 2-4h.', tooltip: 'Metabolismo hepático extenso. Excreção primariamente renal.' },
    doses: [
      { species: 'Cão', indication: 'Ectoparasitas', dose: '0,1-0,2%', route: 'Tópico', interval: '7-14 dias', notes: 'Solução tópica. Aplicar externamente.' },
      { species: 'Gato', indication: 'Ectoparasitas', dose: '0,1-0,2%', route: 'Tópico', interval: '7-14 dias', notes: 'Cuidado. Solução tópica.' }
    ],
    dilutionAndAdministration: { text: 'Tópico: aplicar externamente. Evitar contato com olhos e mucosas. Usar luvas.', tooltip: 'Aplicar externamente. Evitar contato com olhos e mucosas.' },
    contraindications: { text: 'Hipersensibilidade. Doença hepática grave. Gestação. Filhotes.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com disfunção hepática.' },
    adverseEffects: { text: 'Toxicidade colinérgica. Náusea, vômito. Diarreia. Fraqueza muscular.', tooltip: 'Toxicidade colinérgica é o efeito adverso mais grave. Monitorar sinais neurológicos.' },
    interactions: { text: 'Outros organofosforados (↑ toxicidade). Anticolinesterásicos (↑ efeitos).', tooltip: 'Outros organofosforados aumentam toxicidade. Anticolinesterásicos aumentam efeitos.' },
    monitoring: { text: 'Sinais de toxicidade colinérgica. Resposta clínica. Duração do tratamento.', tooltip: 'Observar sinais de toxicidade colinérgica. Monitorar resposta clínica.' },
    evidence: { text: 'Antiparasitário eficaz para ectoparasitas. Uso restrito devido à toxicidade.', tooltip: 'Alternativa útil para ectoparasitas. Uso restrito devido à toxicidade.' }
  },
  {
    name: 'Verapamil',
    sector: 'Cardiologia',
    class: 'Bloqueador de canais de cálcio; Antiarrítmico.',
    commercialNames: ['Calan®', 'Verapamil'],
    highlights: [
      'Bloqueador de canais de cálcio.',
      'Antiarrítmico classe IV.',
      'Reduz frequência cardíaca.',
      'Monitoramento cardíaco necessário.'
    ],
    clinicalIndications: { text: 'Arritmias supraventriculares. Hipertensão. Cardiomiopatia. Taquicardia.', tooltip: 'Especialmente útil para arritmias supraventriculares.' },
    mechanism: { text: 'Bloqueia canais de cálcio L. Reduz influxo de cálcio. Diminui contratilidade. Antiarrítmico.', tooltip: 'Bloqueia canais de cálcio L, reduzindo influxo de cálcio nas células cardíacas.' },
    pharmacokinetics: { text: 'Absorção oral boa. Início: 1-2h. Meia-vida: 4-8h. Metabolizado no fígado. Excreção renal.', tooltip: 'Metabolismo hepático extenso. Meia-vida intermediária.' },
    doses: [
      { species: 'Cão', indication: 'Arritmias', dose: '0,5-2 mg/kg', route: 'PO', interval: '8h', notes: 'Dose inicial. Ajustar baseado na resposta.' },
      { species: 'Cão', indication: 'Hipertensão', dose: '0,5-2 mg/kg', route: 'PO', interval: '8h', notes: 'Para hipertensão. Monitorar pressão arterial.' },
      { species: 'Gato', indication: 'Arritmias', dose: '0,5-2 mg/kg', route: 'PO', interval: '8h', notes: 'Bem tolerado. Ajustar baseado na resposta.' },
      { species: 'Gato', indication: 'Hipertensão', dose: '0,5-2 mg/kg', route: 'PO', interval: '8h', notes: 'Bem tolerado. Para hipertensão.' }
    ],
    dilutionAndAdministration: { text: 'PO: com ou sem alimentos. Comprimidos: podem ser esmagados. Manter horário consistente.', tooltip: 'Pode ser administrado com alimentos. Comprimidos podem ser esmagados.' },
    contraindications: { text: 'Hipersensibilidade. Bradicardia grave. Insuficiência cardíaca. Bloqueio AV.', tooltip: 'Histórico de reações alérgicas. Cuidado em pacientes com bradicardia.' },
    adverseEffects: { text: 'Bradicardia. Hipotensão. Constipação. Edema periférico. Cefaleia.', tooltip: 'Bradicardia é o efeito adverso mais comum. Monitorar frequência cardíaca.' },
    interactions: { text: 'Digoxina (↑ níveis). Beta-bloqueadores (↑ bradicardia). Ciclosporina (↑ níveis).', tooltip: 'Digoxina tem níveis aumentados. Beta-bloqueadores aumentam bradicardia.' },
    monitoring: { text: 'Frequência cardíaca. Pressão arterial. ECG. Sinais de toxicidade.', tooltip: 'Frequência cardíaca. Pressão arterial. Observar sinais de toxicidade.' },
    evidence: { text: 'Bloqueador de canais de cálcio eficaz. Antiarrítmico útil. Seguro para uso prolongado.', tooltip: 'Alternativa útil para arritmias. Bloqueador de canais de cálcio bem estabelecido.' }
  }
];
