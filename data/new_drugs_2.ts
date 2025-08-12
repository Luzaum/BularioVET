import { Drug } from '../types';

export const newDrugs2: Drug[] = [
  {
    name: 'Cefepime',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 4ª geração IV/IM.',
    commercialNames: ['Maxipime®'],
    highlights: [
      'Cefalosporina de 4ª geração com espectro muito amplo.',
      'Uso clínico limitado e eficácia não documentada em veterinária.',
      'Requer ajuste de dose em insuficiência renal.',
      'Dose pode ser administrada em bolus ou CRI.'
    ],
    clinicalIndications: {
      text: 'Infecções graves, incluindo Pseudomonas.',
      tooltip: 'Uso reservado para casos de resistência a outros antibióticos.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana; liga-se às PBPs.',
      tooltip: 'Ação bactericida tempo-dependente (T>MIC).'
    },
    pharmacokinetics: {
      text: 'Eliminação renal; ajuste necessário em insuficiência renal.',
      tooltip: 'Meia-vida prolongada em pacientes com função renal comprometida.'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções graves', dose: '10 mg/kg', route: 'IV', interval: 'q12h', notes: 'Ajuste renal necessário' },
      { species: 'Gato', indication: 'Infecções graves', dose: '5 mg/kg', route: 'IV', interval: 'q12h', notes: 'Ajuste renal necessário' }
    ],
    dilutionAndAdministration: {
      text: 'Reconstituir com água estéril, NaCl 0,9% ou dextrose 5%. Infusão IV lenta.',
      tooltip: 'Evitar mistura com outros medicamentos na mesma linha.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; insuficiência renal grave.',
      tooltip: 'Risco de convulsões em pacientes com IR e altas doses.'
    },
    adverseEffects: {
      text: 'Reações alérgicas, distúrbios GI, raros eventos neurológicos.',
      tooltip: 'Monitorar função renal e sinais neurológicos.'
    },
    interactions: {
      text: 'Não misturar com outros medicamentos na mesma linha.',
      tooltip: 'Evitar co-administração com aminoglicosídeos.'
    },
    monitoring: {
      text: 'Função renal, resposta clínica, sinais neurológicos.',
      tooltip: 'Monitoramento rigoroso em pacientes com IR.'
    },
    evidence: {
      text: 'Estudos experimentais realizados, mas eficácia clínica não documentada em veterinária.',
      tooltip: 'Uso baseado em extrapolação humana e dados experimentais.'
    }
  },
  {
    name: 'Cefotaxima',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração IV/IM.',
    commercialNames: ['Claforan®'],
    highlights: [
      'Cefalosporina injetável de 3ª geração.',
      'Uso reservado para infecções resistentes ou do SNC.',
      'Requer administração frequente (a cada 6h em gatos).',
      'Infusão IV lenta ≥3–5 min.'
    ],
    clinicalIndications: {
      text: 'Infecções do SNC, infecções resistentes a outros antibióticos.',
      tooltip: 'Devido ao alto custo, não usada para infecções rotineiras.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana.',
      tooltip: 'Ação bactericida tempo-dependente.'
    },
    pharmacokinetics: {
      text: 'Eliminação renal; meia-vida curta requer administração frequente.',
      tooltip: 'Penetração no SNC quando há inflamação.'
    },
    doses: [
      { species: 'Cão', indication: 'CRI', dose: 'Ataque 3.2 mg/kg, seguido de 5 mg/kg/h', route: 'IV', interval: 'Contínuo', notes: '' },
      { species: 'Gato', indication: 'Infecção', dose: '20-80 mg/kg', route: 'IV, IM', interval: 'q6h', notes: '' }
    ],
    dilutionAndAdministration: {
      text: 'Infusão IV lenta ≥3–5 min; evitar com bicarbonato.',
      tooltip: 'Não misturar com NaHCO₃ devido à instabilidade.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; insuficiência renal grave.',
      tooltip: 'Ajuste de dose necessário em IR.'
    },
    adverseEffects: {
      text: 'Reações alérgicas, distúrbios GI, raros eventos hemorrágicos.',
      tooltip: 'Geralmente bem tolerada.'
    },
    interactions: {
      text: 'Evitar mistura com bicarbonato; não misturar com outros medicamentos.',
      tooltip: 'Incompatível com soluções contendo NaHCO₃.'
    },
    monitoring: {
      text: 'Resposta clínica, função renal, sinais de reação alérgica.',
      tooltip: 'Breakpoint CLSI: ≤ 2 μg/mL.'
    },
    evidence: {
      text: 'Uma das cefalosporinas de 3ª geração mais usadas em pequenos animais, apesar do uso "off-label".',
      tooltip: 'Baseado em experiência clínica e dados experimentais.'
    }
  },
  {
    name: 'Cefovecina',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração SC de depósito.',
    commercialNames: ['Convenia®'],
    highlights: [
      'Antibiótico injetável de longa duração (14 dias).',
      'Ideal para situações onde a administração oral é difícil.',
      'Eficaz para infecções de pele e tecidos moles.',
      'Não é ativa contra Pseudomonas aeruginosa.'
    ],
    clinicalIndications: {
      text: 'Infecções de pele e tecidos moles em cães e gatos.',
      tooltip: 'Aprovado pela FDA para uso veterinário.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana.',
      tooltip: 'Boa atividade contra Staphylococcus e Streptococcus.'
    },
    pharmacokinetics: {
      text: 'Alta ligação proteica (98-99%); t½ 7 dias em gatos, 5 dias em cães.',
      tooltip: 'Mantém concentrações eficazes por até 14 dias.'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções de pele/tecidos moles', dose: '8 mg/kg', route: 'SC', interval: 'a cada 14 dias', notes: 'Dose única' },
      { species: 'Gato', indication: 'Infecções de pele/tecidos moles', dose: '8 mg/kg', route: 'SC', interval: 'a cada 14 dias', notes: 'Dose única' }
    ],
    dilutionAndAdministration: {
      text: 'Solução reconstituída estável por 24 horas quando refrigerada.',
      tooltip: 'Administração SC única, não requer diluição adicional.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; não administrar a animais de produção.',
      tooltip: 'Uso restrito a animais de companhia.'
    },
    adverseEffects: {
      text: 'Vômitos, diarreia, irritação no local da injeção.',
      tooltip: 'Pode persistir no organismo por pelo menos 60 dias.'
    },
    interactions: {
      text: 'Não há relatos de interações medicamentosas específicas.',
      tooltip: 'Monitorar efeitos adversos tardios devido à longa persistência.'
    },
    monitoring: {
      text: 'Resposta clínica, efeitos adversos locais e sistêmicos.',
      tooltip: 'Monitoramento importante devido à longa persistência no organismo.'
    },
    evidence: {
      text: 'Aprovada pela FDA para infecções de pele em cães e gatos.',
      tooltip: 'Eficácia estabelecida para infecções de pele e tecidos moles.'
    }
  },
  {
    name: 'Cefoxitina',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 2ª geração – cefamicina IV/IM.',
    commercialNames: ['Mefoxitin®'],
    highlights: [
      'Cefalosporina de 2ª geração com excelente atividade contra anaeróbios.',
      'Frequentemente usada para profilaxia cirúrgica.',
      'Mais estável a beta-lactamases de anaeróbios.',
      'Infusão IV lenta 3–5 min.'
    ],
    clinicalIndications: {
      text: 'Profilaxia em cirurgias colorretais ou gastrointestinais.',
      tooltip: 'Especialmente útil quando há risco de contaminação por anaeróbios.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana.',
      tooltip: 'Mais estável a β-lactamases de anaeróbios como Bacteroides.'
    },
    pharmacokinetics: {
      text: 'Meia-vida de ~1.5 horas em cães e gatos.',
      tooltip: 'Requer administração frequente devido à meia-vida curta.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções/Profilaxia', dose: '30 mg/kg', route: 'IV, IM', interval: 'q6-8h', notes: '' },
      { species: 'Cão/Gato', indication: 'Uso pré-cirúrgico', dose: '22 mg/kg', route: 'IV', interval: 'Dose única', notes: '30-60 min antes da incisão' }
    ],
    dilutionAndAdministration: {
      text: 'Infusão IV lenta 3–5 min; pode ser administrada IM.',
      tooltip: 'Evitar infusão rápida para minimizar reações.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; doenças hemorrágicas.',
      tooltip: 'Usar com cautela em pacientes com distúrbios de coagulação.'
    },
    adverseEffects: {
      text: 'Reações alérgicas, distúrbios GI, raros eventos hemorrágicos.',
      tooltip: 'Não afetou função cardiovascular em cães durante cirurgias.'
    },
    interactions: {
      text: 'Não misturar com outros medicamentos na mesma seringa.',
      tooltip: 'Evitar co-administração com outros fármacos.'
    },
    monitoring: {
      text: 'Resposta clínica, sinais de reação alérgica.',
      tooltip: 'Breakpoint CLSI: ≤ 8 μg/mL.'
    },
    evidence: {
      text: 'Fármaco de escolha para profilaxia em cirurgias com risco de contaminação por anaeróbios.',
      tooltip: 'Baseado em estudos de profilaxia cirúrgica.'
    }
  },
  {
    name: 'Cefpodoxime Proxetil',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração VO.',
    commercialNames: ['Simplicef®', 'Vantin®'],
    highlights: [
      'Cefalosporina oral de 3ª geração com administração conveniente.',
      'Aprovada pela FDA para infecções de pele em cães.',
      'Boa atividade contra Staphylococcus e bacilos Gram-negativos.',
      'Uso em gatos é "off-label".'
    ],
    clinicalIndications: {
      text: 'Infecções de pele e tecidos moles em cães; ITU.',
      tooltip: 'Alternativa conveniente para administração oral.'
    },
    mechanism: {
      text: 'Pró-fármaco convertido em cefpodoxima ativa.',
      tooltip: 'Inibe síntese da parede celular bacteriana.'
    },
    pharmacokinetics: {
      text: 'Absorção oral em cães de 35%; t½ 5.7 horas; alta ligação proteica (83%).',
      tooltip: 'Boa biodisponibilidade oral em cães.'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções de pele/ITU', dose: '5-10 mg/kg', route: 'VO', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Uso Extrabula', dose: '5-10 mg/kg', route: 'VO', interval: 'q24h', notes: 'Dados limitados' }
    ],
    dilutionAndAdministration: {
      text: 'Administração oral; não requer diluição.',
      tooltip: 'Pode ser administrado com ou sem alimento.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; doenças hemorrágicas.',
      tooltip: 'Usar com cautela em pacientes com distúrbios de coagulação.'
    },
    adverseEffects: {
      text: 'Vômito, diarreia, reações alérgicas raras.',
      tooltip: 'Geralmente bem tolerada.'
    },
    interactions: {
      text: 'Não há relatos específicos de interações.',
      tooltip: 'Precauções gerais para cefalosporinas se aplicam.'
    },
    monitoring: {
      text: 'Resposta clínica, sinais de reação alérgica.',
      tooltip: 'Breakpoint CLSI: ≤ 2 μg/mL.'
    },
    evidence: {
      text: 'Eficácia estabelecida para infecções de pele em cães.',
      tooltip: 'Aprovada pela FDA para uso veterinário.'
    }
  },
  {
    name: 'Ceftazidima',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração antipseudomonas IV/IM.',
    commercialNames: ['Fortaz®', 'Ceptaz®'],
    highlights: [
      'Cefalosporina de 3ª geração com potente atividade antipseudomonas.',
      'Fármaco de escolha para infecções graves por Pseudomonas.',
      'Uso comum em animais exóticos.',
      'Infusão IV lenta 3–5 min.'
    ],
    clinicalIndications: {
      text: 'Infecções graves por Pseudomonas aeruginosa e bacilos Gram-negativos.',
      tooltip: 'Reservado para casos de resistência a outros antibióticos.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana.',
      tooltip: 'Mais eficaz contra Pseudomonas que outras cefalosporinas de 3ª geração.'
    },
    pharmacokinetics: {
      text: 'Estudos farmacocinéticos publicados para gatos domésticos.',
      tooltip: 'Boa penetração tecidual.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções por Pseudomonas', dose: '30 mg/kg', route: 'IV, IM, SC', interval: 'q6-8h', notes: '' },
      { species: 'Cão/Gato', indication: 'CRI', dose: 'Ataque 1.2 mg/kg, seguido de 1.56 mg/kg/h', route: 'IV', interval: 'Contínuo', notes: '' }
    ],
    dilutionAndAdministration: {
      text: 'Infusão IV lenta 3–5 min; CRI possível (checar estabilidade).',
      tooltip: 'A formulação contém L-arginina que pode reduzir dor da injeção.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; insuficiência renal grave.',
      tooltip: 'Ajuste de dose necessário em IR.'
    },
    adverseEffects: {
      text: 'Dor no local da injeção, distúrbios GI, superinfecção.',
      tooltip: 'Reações alérgicas são raras.'
    },
    interactions: {
      text: 'Inativação mútua com aminoglicosídeos; pode precipitar com vancomicina.',
      tooltip: 'Não misturar com aminoglicosídeos na mesma linha.'
    },
    monitoring: {
      text: 'Resposta clínica, função renal, sinais de reação alérgica.',
      tooltip: 'Monitoramento rigoroso em infecções graves.'
    },
    evidence: {
      text: 'Frequentemente administrada a diversas espécies devido à eficácia contra Pseudomonas.',
      tooltip: 'Baseado em experiência clínica e dados experimentais.'
    }
  },
  {
    name: 'Ceftiofur',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração.',
    commercialNames: ['Naxcel®', 'Excenel®', 'Excede®'],
    highlights: [
      'Licenciado apenas para uso em grandes animais (bovinos, suínos).',
      'Uso em pequenos animais é "off-label" e pouco documentado.',
      'Eficaz contra patógenos respiratórios de grandes animais.',
      'Disponível em formulações de ação curta e longa.'
    ],
    clinicalIndications: {
      text: 'Grandes Animais: doença respiratória, podridão dos cascos. Pequenos Animais: uso extrabula limitado.',
      tooltip: 'Uso em pequenos animais não bem avaliado.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana.',
      tooltip: 'Metabolizado em desfuroilceftiofur, metabólito ativo.'
    },
    pharmacokinetics: {
      text: 'Rapidamente biotransformado em desfuroilceftiofur.',
      tooltip: 'Metabólito ativo responsável pela atividade antibacteriana.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Uso Extrabula (Ceftiofur Sódico)', dose: '2.2 mg/kg', route: 'IM, SC', interval: 'q12-24h', notes: 'Dados limitados' }
    ],
    dilutionAndAdministration: {
      text: 'Formulações de longa duração não devem ser administradas IV.',
      tooltip: 'Causaram lesões locais em pequenos animais.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; formulações de longa duração IV.',
      tooltip: 'Evitar uso IV em pequenos animais.'
    },
    adverseEffects: {
      text: 'Mielossupressão em doses altas, diarreia, dor no local da injeção.',
      tooltip: 'Gatos são menos suscetíveis à cistite que cães.'
    },
    interactions: {
      text: 'Não misturar com outros fármacos na mesma seringa.',
      tooltip: 'Evitar co-administração com outros medicamentos.'
    },
    monitoring: {
      text: 'Hemograma se doses elevadas por longos períodos.',
      tooltip: 'Monitorar sinais de mielossupressão.'
    },
    evidence: {
      text: 'Não licenciado para pequenos animais; eficácia não avaliada para maioria das infecções.',
      tooltip: 'Uso baseado em extrapolação de grandes animais.'
    }
  },
  {
    name: 'Ceftriaxona',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 3ª geração IV/IM.',
    commercialNames: ['Rocephin®'],
    highlights: [
      'Cefalosporina de 3ª geração com longa meia-vida.',
      'Eliminação biliar+renal.',
      'Evitar com soluções contendo cálcio.',
      'Administração conveniente (1-2x/dia).'
    ],
    clinicalIndications: {
      text: 'Infecções graves por organismos suscetíveis.',
      tooltip: 'Útil quando administração frequente é problemática.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana.',
      tooltip: 'Ação bactericida tempo-dependente.'
    },
    pharmacokinetics: {
      text: 'Eliminação biliar+renal; longa meia-vida permite administração 1-2x/dia.',
      tooltip: 'Conveniente para pacientes ambulatoriais.'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções graves', dose: '20–25 mg/kg', route: 'IV, IM', interval: 'q12–24h', notes: '' },
      { species: 'Gato', indication: 'Infecções graves', dose: '20 mg/kg', route: 'IV, IM', interval: 'q24h', notes: '' }
    ],
    dilutionAndAdministration: {
      text: 'Evitar com soluções contendo cálcio; infusão IV lenta.',
      tooltip: 'Pode precipitar com soluções contendo cálcio.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; soluções contendo cálcio.',
      tooltip: 'Evitar co-administração com soluções ricas em cálcio.'
    },
    adverseEffects: {
      text: 'Reações alérgicas, distúrbios GI, raros eventos hemorrágicos.',
      tooltip: 'Geralmente bem tolerada.'
    },
    interactions: {
      text: 'Evitar soluções contendo cálcio; não misturar com outros medicamentos.',
      tooltip: 'Precipitação com soluções contendo cálcio.'
    },
    monitoring: {
      text: 'Resposta clínica, função renal, sinais de reação alérgica.',
      tooltip: 'Monitoramento padrão para cefalosporinas.'
    },
    evidence: {
      text: 'Uso estabelecido em medicina humana; dados veterinários limitados.',
      tooltip: 'Baseado em extrapolação humana e experiência clínica.'
    }
  },
  {
    name: 'Cefuroxima',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina de 2ª geração VO/IV.',
    commercialNames: ['Zinacef®', 'Zinnat®'],
    highlights: [
      'Cefalosporina de 2ª geração com boa atividade contra Gram+ e Gram-.',
      'Disponível em formulações oral e parenteral.',
      'Boa penetração tecidual.',
      'Administração conveniente.'
    ],
    clinicalIndications: {
      text: 'Infecções de pele, tecidos moles e trato respiratório.',
      tooltip: 'Alternativa útil para infecções moderadas.'
    },
    mechanism: {
      text: 'Inibe síntese da parede celular bacteriana.',
      tooltip: 'Ação bactericida tempo-dependente.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral; boa penetração tecidual.',
      tooltip: 'Metabolismo hepático limitado.'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções', dose: '10 mg/kg', route: 'VO, IV', interval: 'q8h', notes: 'Ou 20 mg/kg q12h' },
      { species: 'Gato', indication: 'Infecções', dose: '20 mg/kg', route: 'VO, IV', interval: 'q12h', notes: '' }
    ],
    dilutionAndAdministration: {
      text: 'Infusão IV lenta; administração oral com ou sem alimento.',
      tooltip: 'Evitar infusão rápida.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos; insuficiência renal grave.',
      tooltip: 'Ajuste de dose necessário em IR.'
    },
    adverseEffects: {
      text: 'Reações alérgicas, distúrbios GI, raros eventos hemorrágicos.',
      tooltip: 'Geralmente bem tolerada.'
    },
    interactions: {
      text: 'Não misturar com outros medicamentos na mesma linha.',
      tooltip: 'Evitar co-administração com aminoglicosídeos.'
    },
    monitoring: {
      text: 'Resposta clínica, função renal, sinais de reação alérgica.',
      tooltip: 'Monitoramento padrão para cefalosporinas.'
    },
    evidence: {
      text: 'Uso estabelecido em medicina humana; dados veterinários limitados.',
      tooltip: 'Baseado em extrapolação humana e experiência clínica.'
    }
  }
];
