import { Drug } from '../types';
import { newDrugs } from './new_drugs';
import { newDrugs2 } from './new_drugs_2';
import { newDrugs3 } from './new_drugs_3';
import { newDrugs4 } from './new_drugs_4';
import { newDrugs5 } from './new_drugs_5';
import { newDrugs6 } from './new_drugs_6';
import { newDrugs7 } from './new_drugs_7';
import { newDrugs8 } from './new_drugs_8';
import { newDrugs9 } from './new_drugs_9';
import { newDrugs10 } from './new_drugs_10';
import { newDrugs11 } from './new_drugs_11';
import { newDrugs12 } from './new_drugs_12';
import { newDrugs13 } from './new_drugs_13';
import { newDrugs14 } from './new_drugs_14';
import { newDrugs15 } from './new_drugs_15';
import { newDrugs16 } from './new_drugs16';
import { newDrugs17 } from './new_drugs17';
import { newDrugs18 } from './new_drugs18';
import { newDrugs19 } from './new_drugs19';
import { newDrugs20 } from './new_drugs20';
import { newDrugs21 } from './new_drugs21';
import { newDrugs22 } from './new_drugs22';
import { newDrugs23 } from './new_drugs23';
import { newDrugs24 } from './new_drugs24';
import { newDrugs25 } from './new_drugs25';
import { newDrugs26 } from './new_drugs26';
import { newDrugs27 } from './new_drugs27';
import { newDrugs28 } from './new_drugs_28';
import { newDrugs29 } from './new_drugs_29';
import { newDrugs30 } from './new_drugs_30';
import { newDrugs31 } from './new_drugs_31';
import { newDrugs32 } from './new_drugs_32';
import { newDrugs33 } from './new_drugs_33';
import { newDrugs34 } from './new_drugs_34';
import { newDrugs35 } from './new_drugs_35';

export const drugs: Drug[] = [
  {
    name: 'Acepromazina',
    sector: 'Bulário Principal',
    class: 'Tranquilizante fenotiazínico; Antagonista D2 e α1.',
    commercialNames: ['Acepran®', 'ACE', 'Aceproject®', 'Aceprotabs®', 'Atravet®', 'Promace', 'Aceprovets'],
    highlights: [
      'Tranquilizante confiável para sedação e medicação pré-anestésica.',
      'Causa vasodilatação periférica (hipotensão), requerendo cautela.',
      'Não possui efeito analgésico; deve ser combinado com analgésicos para procedimentos dolorosos.',
      'O início de ação é lento (30-60 min); não deve ser redosado apressadamente.',
      'Contraindicado em pacientes em choque, desidratados ou com hipovolemia.'
    ],
    clinicalIndications: {
      text: 'Utilizada para sedação, contenção química e como parte de protocolos de medicação pré-anestésica em cães e gatos saudáveis. Frequentemente usada em associação com opioides (como butorfanol ou metadona) para potencializar a sedação e fornecer analgesia.',
      tooltip: 'Sua ação vasodilatadora (bloqueio alfa-1) pode causar hipotensão significativa, sendo crucial garantir que o paciente esteja normovolêmico antes do uso. Não é um analgésico.'
    },
    mechanism: {
      text: 'A acepromazina é um derivado fenotiazínico que atua primariamente como antagonista dos receptores de dopamina D2 no sistema nervoso central, resultando em sedação e efeitos antieméticos. Adicionalmente, bloqueia receptores alfa-1 adrenérgicos periféricos, o que causa vasodilatação e pode levar à hipotensão.',
      tooltip: 'O bloqueio alfa-1 é responsável por um de seus principais efeitos adversos, a hipotensão. Não é um agonista alfa-2 como a xilazina ou a medetomidina, e seus efeitos não são reversíveis.'
    },
    pharmacokinetics: {
      text: 'A acepromazina é metabolizada no fígado. Seu início de ação é relativamente lento (30-60 minutos após administração IM) e a duração do efeito pode ser de 4 a 8 horas. Não há detalhes específicos sobre a farmacocinética (absorção, volume de distribuição, meia-vida, eliminação) em cães e gatos nas fontes fornecidas, além de sua ação central e periférica.',
      tooltip: 'Devido ao metabolismo hepático, deve ser usada com cautela em pacientes com disfunção hepática grave. A longa duração do efeito deve ser considerada no planejamento da recuperação do paciente.'
    },
    doses: [
      { species: 'Cão', indication: 'Sedação/Pré-medicação', dose: '0.02–0.1 mg/kg', route: 'IV, IM, SC', interval: 'Dose única', notes: 'Dose máxima total de 3 mg. Usar dose menor em combinações.' },
      { species: 'Cão', indication: 'Sedação (Oral)', dose: '0.5–2.2 mg/kg', route: 'VO', interval: 'q8-12h', notes: 'Efeito mais variável que a via parenteral.' },
      { species: 'Gato', indication: 'Sedação/Pré-medicação', dose: '0.01–0.1 mg/kg', route: 'IV, IM, SC', interval: 'Dose única', notes: 'Dose máxima total de 1 mg. Monitorar hipotermia.' },
      { species: 'Gato', indication: 'Sedação (Oral)', dose: '1–3 mg/kg', route: 'VO', interval: 'q8-12h', notes: 'Usar com cautela, resposta pode ser imprevisível.' }
    ],
    dilutionAndAdministration: {
      text: 'A formulação injetável pode ser administrada sem diluição. Não é utilizada em infusão contínua (CRI). A administração IV deve ser lenta para minimizar os efeitos hemodinâmicos.',
      tooltip: 'Não há informações específicas nas fontes sobre como diluir o frasco inicial ou o medicamento na seringa para aplicação.'
    },
    contraindications: {
      text: 'Contraindicada em pacientes com hipovolemia, choque, desidratação ou disfunção cardíaca grave. Usar com extrema cautela em raças braquicefálicas, Boxers (relatos de síncope vasovagal), em animais muito jovens, idosos, debilitados, gestantes (risco de indução do parto) ou com doença cardíaca preexistente. Evitar em pacientes com histórico de convulsões.',
      tooltip: 'Seu efeito hipotensor pode ser profundo e duradouro. Acredita-se que diminui o limiar convulsivo, embora essa noção seja debatida.'
    },
    adverseEffects: {
      text: 'Hipotensão é o efeito adverso mais significativo. Hipotermia (devido à vasodilatação periférica), bradicardia e prolapso de terceira pálpebra são comuns. Priapismo (prolapso peniano persistente) é um efeito raro, mas grave, em equinos. O uso concomitante com analgésicos opioides aumenta significativamente a depressão do sistema nervoso central (SNC).',
      tooltip: 'Não possui agente de reversão. O tratamento de uma overdose é de suporte, focado em fluidoterapia para combater a hipotensão.'
    },
    interactions: {
      text: 'Potencializa o efeito depressor de outros fármacos que atuam no SNC, como opioides, anestésicos gerais e barbitúricos (considerar redução da dose). O uso concomitante com epinefrina pode causar uma queda paradoxal na pressão arterial ("reversão da epinefrina"). Não administrar junto com outros medicamentos que provoquem depressão cardíaca significativa.',
      tooltip: 'A "reversão da epinefrina" ocorre porque o bloqueio alfa-1 da acepromazina deixa os efeitos vasodilatadores beta-2 da epinefrina sem oposição.'
    },
    monitoring: {
      text: 'Monitorar a pressão arterial, frequência cardíaca e temperatura corporal. Avaliar a profundidade da sedação. Em caso de bradicardia, o uso prévio de atropina não é necessário rotineiramente.',
      tooltip: 'Fontes: Plumb\'s 10th Ed. e experiência clínica.'
    },
    evidence: {
      text: 'Fármaco de uso consagrado na medicina veterinária por décadas. Sua eficácia como tranquilizante é bem estabelecida, mas seu perfil de segurança exige uma seleção cuidadosa do paciente. O uso e as doses em animais são baseados na experiência clínica e em estudos limitados.',
      tooltip: 'Apesar de ser um fármaco antigo, continua sendo uma ferramenta útil quando usada criteriosamente em pacientes saudáveis e normovolêmicos.'
    }
  },
  {
    name: 'Insulina (Regular, NPH, Lente, Ultralente, PZI, Humulin R)',
    sector: 'Endocrinologia',
    class: 'Hormônio peptídico; agente hipoglicemiante.',
    commercialNames: ['Humulin R®', 'PZI Vet®', 'Hypurin®', 'Humulin®'],
    highlights: [
      'Tratamento padrão-ouro do Diabetes Mellitus em cães e gatos.',
      'A insulina regular (solúvel) é preferida na CAD por ação rápida (IV).',
      'Diferenças de perfil: Regular (rápida), NPH/Lente (intermediária), Ultralente/PZI (prolongada).',
      'Concentrações usuais prontas: U-40 e U-100 (não diluir).'
    ],
    clinicalIndications: {
      text: 'Diabetes Mellitus crônico; insulina regular (solúvel) IV para cetoacidose diabética (CAD).',
      tooltip: 'Adequar tipo de insulina ao perfil desejado (início/pico/duração) e espécie. Ajuste individual compulsório.'
    },
    mechanism: {
      text: 'Liga-se ao receptor de insulina e aumenta captação de glicose em músculo/tecido adiposo; inibe gliconeogênese e glicogenólise; promove glicogênese e lipogênese.',
      tooltip: 'Efeito hipoglicemiante sistêmico via translocação de GLUT4 e modulação hepática.'
    },
    pharmacokinetics: {
      text: 'Regular (IV): início imediato, pico 0,5–2 h, duração 1–4 h; SC: início 10–30 min, pico 1–5 h, duração 4–8 h. NPH: início 0,5–3 h; pico 2–10 h (cão)/2–8 h (gato); duração 6–24 h (cão)/4–12 h (gato). Lente: início 30–60 min; pico 2–10 h (cão)/2–8 h (gato); duração 8–24 h (cão)/6–14 h (gato). Ultralente: início 2–8 h; pico 4–16 h; duração 8–28 h (cão)/8–24 h (gato). PZI: ação prolongada.',
      tooltip: 'O perfil varia pela formulação e via (IV/IM/SC).' 
    },
    doses: [
      { species: 'Cão', indication: 'Regular (solúvel) – SC', dose: '150 U/kg', route: 'SC', interval: 'q8h', notes: 'Ajuste por curva glicêmica.' },
      { species: 'Gato', indication: 'Regular (solúvel) – SC', dose: '150 U/kg', route: 'SC', interval: 'q4h', notes: 'Até 180 U/kg q6h conforme resposta.' },
      { species: 'Equino', indication: 'Insulina – SC', dose: '50 U/kg/dia', route: 'SC', interval: 'q24h', notes: 'Alto risco: até 100 U/kg/dia.' }
    ],
    dilutionAndAdministration: {
      text: 'Apresentações prontas (U-40 e U-100). Não diluir o frasco; usar seringas compatíveis com a concentração. Em CAD, preferir insulina regular IV. ',
      tooltip: 'Evite diluição para não alterar a cinética; atenção à seringa correta (U-40 vs U-100).'
    },
    contraindications: {
      text: 'Hipoglicemia. Cautela em pacientes com ingestão alimentar irregular; ajustar em comorbidades.',
      tooltip: 'Erros frequentes: superdosagem e troca de seringa U-40/U-100.'
    },
    adverseEffects: {
      text: 'Hipoglicemia (fraqueza, ataxia, tremores, convulsões, coma). Reações locais raras.',
      tooltip: 'Treinar tutor para reconhecer hipoglicemia e conduzir plano de ação.'
    },
    interactions: {
      text: '↑ efeito: beta-bloqueadores, salicilatos, sulfonilureias, álcool. ↓ efeito: corticosteroides, tiazídicos, hormônios tireoidianos, progestágenos.',
      tooltip: 'Monitorar glicemia ao iniciar/suspender fármacos interferentes.'
    },
    monitoring: {
      text: 'Glicemia capilar/curvas glicêmicas, sinais de hipo/hiperglicemia, ingestão hídrica/alimentar, peso, glicosúria.',
      tooltip: 'Ajuste fino e reavaliações periódicas são mandatórios.'
    },
    evidence: {
      text: 'Padrão-ouro para DM em cães e gatos; eficácia estabelecida e baseada em ampla evidência clínica.',
      tooltip: 'Seleção do tipo e titulação determinam o sucesso terapêutico.'
    }
  },
  {
    name: 'Ipratrópio (inalatório)',
    sector: 'Respiratória',
    class: 'Broncodilatador anticolinérgico inalatório (antimuscarínico M3).',
    commercialNames: ['Atrovent® (humano)'],
    highlights: ['Adjuvante inalatório em broncoconstrição; evidência veterinária limitada.'],
    clinicalIndications: { text: 'Uso adjuvante para broncoconstrição; dados específicos veterinários não detalhados nas fontes.' },
    mechanism: { text: 'Bloqueio muscarínico M3 em musculatura lisa brônquica, reduzindo broncoconstrição.' },
    pharmacokinetics: { text: 'Ação local por via inalatória; mínima absorção sistêmica.' },
    doses: [],
    dilutionAndAdministration: { text: 'Solução/inalador pressurizado conforme bula humana; sem instruções veterinárias específicas nas fontes.' },
    contraindications: { text: 'Sem dados veterinários específicos; avaliar caso a caso.' },
    adverseEffects: { text: 'Possível boca seca, irritação orofaríngea; baixa absorção sistêmica.' },
    interactions: { text: 'Interações não estabelecidas em veterinária nas fontes consultadas.' },
    monitoring: { text: 'Sintomas respiratórios e resposta clínica.' },
    evidence: { text: 'Listada em apêndice; evidência veterinária direta limitada nas fontes.' }
  },
  {
    name: 'Itraconazol',
    sector: 'Antimicrobianos',
    class: 'Antifúngico azólico; fungistático.',
    commercialNames: ['Itrafungol®', 'Sporanox®', 'Genéricos'],
    highlights: ['Amplo espectro contra leveduras e fungos sistêmicos.', 'Absorção favorecida com alimento/gordura.', 'Monitorar enzimas hepáticas.'],
    clinicalIndications: { text: 'Infecções fúngicas sistêmicas; criptococose felina dentre outras.' },
    mechanism: { text: 'Inibe a síntese de ergosterol (membrana fúngica). Fraca atividade contra Aspergillus e Zygomycetes.' },
    pharmacokinetics: { text: 'VO menos previsível que fluconazol/cetoconazol; melhor com gordura; t1/2: cães ~14–15 h, gatos ~13–25 h, equinos ~38 h.' },
    doses: [
      { species: 'Cão', indication: 'Sistêmica', dose: '5–10 mg/kg', route: 'VO', interval: 'q12–24h', notes: '' },
      { species: 'Gato', indication: 'Sistêmica/Criptococose', dose: '5–10 mg/kg (ou 50 mg/gato)', route: 'VO', interval: 'q12–24h', notes: '' }
    ],
    contraindications: { text: 'Evitar em hepatopatas; cautela em prenhez (teratogênico em doses altas).' },
    adverseEffects: { text: 'Anorexia, vômito, dermatite esfoliativa, hepatotoxicidade.' },
    interactions: { text: 'Inibidor de CYP; ↑ ciclosporina e outros substratos; atenção a interações.' },
    monitoring: { text: 'Enzimas hepáticas, sinais clínicos e, se necessário, concentrações plasmáticas.' },
    evidence: { text: 'Eficaz em múltiplas micoses; uso consolidado.' }
  },
  {
    name: 'Ivermectina',
    sector: 'Parasitologia',
    class: 'Lactona macrocíclica antiparasitária.',
    commercialNames: ['Ivomec®', 'Ivercare®', 'Ivercide®', 'IverEase®', 'Ivermax®', 'Equimax®', 'Heartguard®', 'Zimecterin®', 'Ultramectin®'],
    highlights: ['Amplo espectro contra endo/ectoparasitas.', 'Cautela em raças MDR1−/− (Collie, AUS Shepherd, Sheltie).'],
    clinicalIndications: { text: 'Sarnas (ex.: notoédrica em gatos), nematódeos GI, vermes pulmonares, prevenção de dirofilariose.' },
    mechanism: { text: 'Potencializa canais de Cl− ativados por glutamato nos parasitas, causando paralisia e morte.' },
    pharmacokinetics: { text: 'Lactona macrocíclica; longa meia-vida tecidual.' },
    doses: [
      { species: 'Cão', indication: 'Prevenção filariose', dose: '6 µg/kg', route: 'VO', interval: 'q30d', notes: '' },
      { species: 'Cão', indication: 'Sarna sarcóptica', dose: '200–400 µg/kg', route: 'SC', interval: 'q7d', notes: '' },
      { species: 'Cão', indication: 'Demodicose', dose: '300–600 µg/kg', route: 'VO', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Sarna notoédrica', dose: '200–270 µg/kg', route: 'SC', interval: 'Dose única', notes: 'Alternativa: 0,1 mL da solução a 1% SC dose única.' }
    ],
    contraindications: { text: 'Cautela/evitar em raças com mutação MDR1; evitar em neonatos.' },
    adverseEffects: { text: 'Neurotoxicidade em doses altas/sensíveis: ataxia, coma, morte.' },
    interactions: { text: 'Evitar com outras lactonas macrocíclicas/substratos P-gp.' },
    monitoring: { text: 'Sinais neurológicos; resposta clínica antiparasitária.' },
    evidence: { text: 'Eficácia amplamente reconhecida; segurança ligada ao status MDR1.' }
  },
  {
    name: 'Lactulose',
    sector: 'Gastroenterologia/Hepatologia',
    class: 'Laxante osmótico.',
    commercialNames: ['Lactugal®', 'Laevolac®', 'Duphalac®'],
    highlights: ['Útil em constipação e encefalopatia hepática (↓ NH3).'],
    clinicalIndications: { text: 'Constipação; redução de amônia na encefalopatia hepática.' },
    mechanism: { text: 'Fermentação colônica → ácidos de cadeia curta ↓ pH; efeito osmótico ↑ água fecal; aprisiona NH3 em NH4+.' },
    pharmacokinetics: { text: 'Não absorvida; ação local colônica.' },
    doses: [
      { species: 'Cão', indication: 'Constipação/Encefalopatia', dose: '0,5 mL/kg', route: 'VO', interval: 'q8–12h', notes: 'Ajustar para fezes macias (2–3 evacuações/dia se encefalopatia).'},
      { species: 'Gato', indication: 'Constipação/Encefalopatia', dose: '1–5 mL/gato', route: 'VO', interval: 'q8h', notes: 'Ajustar à resposta.'}
    ],
    contraindications: { text: 'Obstrução intestinal; cautela em desidratação e distúrbios eletrolíticos.' },
    adverseEffects: { text: 'Flatulência, distensão, cólica, diarreia; possível desequilíbrio eletrolítico.' },
    interactions: { text: 'Antiácidos e antibióticos orais de amplo espectro podem reduzir eficácia.' },
    monitoring: { text: 'Consistência fecal, sinais GI, hidratação/eletrólitos; amônia sérica (se HE).' },
    evidence: { text: 'Tratamento aceito e eficaz para constipação e encefalopatia hepática.' }
  },
  {
    name: 'Latanoprosta 0,005%',
    sector: 'Oftalmologia',
    class: 'Análogo de PGF2α; antiglaucomatoso.',
    commercialNames: ['Xalatan®'],
    highlights: ['Reduz PIO aumentando o fluxo uveoscleral.', 'Preferir uso noturno.'],
    clinicalIndications: { text: 'Glaucoma e hipertensão ocular.' },
    mechanism: { text: 'Aumenta escoamento do humor aquoso via uveoscleral.' },
    pharmacokinetics: { text: 'Ação tópica ocular.' },
    doses: [ { species: 'Cão/Gato', indication: 'Glaucoma', dose: '1 gota', route: 'OFT', interval: 'q24h (à noite)', notes: '' } ],
    contraindications: { text: 'Cautela em uveíte e lesões corneanas.' },
    adverseEffects: { text: 'Hiperemia conjuntival, possível pigmentação da íris; desconforto transitório.' },
    interactions: { text: 'Evitar colírios com tiomersal simultâneos (intervalo ≥5 min).' },
    monitoring: { text: 'Pressão intraocular e sinais de irritação.' },
    evidence: { text: 'Eficácia consolidada no controle da PIO em veterinária.' }
  },
  {
    name: 'Leflunomida',
    sector: 'Imunologia',
    class: 'Imunossupressor (inibe di-hidroorotato desidrogenase).',
    commercialNames: ['Arava®'],
    highlights: ['Alternativa/adição em doenças imunomediadas refratárias.', 'Meia-vida longa (humana).'],
    clinicalIndications: { text: 'Doenças imunomediadas caninas; alternativa quando azatioprina é contraindicada/ineficaz.' },
    mechanism: { text: 'Inibe síntese de pirimidina (via de novo), reduzindo proliferação de linfócitos T ativados.' },
    pharmacokinetics: { text: 'Metabólito ativo A77 1726; eliminação lenta.' },
    doses: [ { species: 'Cão', indication: 'Imunomediada', dose: '2–4 mg/kg', route: 'VO', interval: 'q24h', notes: '' } ],
    contraindications: { text: 'Hepatopatas; gestação (teratogênico); mielossupressão.' },
    adverseEffects: { text: 'GI (vômito/diarreia/anorexia), mielossupressão, hepatotoxicidade, perda de peso.' },
    interactions: { text: 'Cautela com outros imunossupressores/mielossupressores; fenobarbital pode reduzir concentrações.' },
    monitoring: { text: 'Hemograma e função hepática periódicos; peso e apetite.' },
    evidence: { text: 'Útil como alternativa/adiuvante em imunomediação; evidência robusta humana.' }
  },
  {
    name: 'Levetiracetam',
    sector: 'Neurologia',
    class: 'Antiepiléptico (liga SV2A).',
    commercialNames: ['Keppra®', 'Desitrend®', 'S-Etiracetam'],
    highlights: ['Boa biodisponibilidade oral; baixa interação medicamentosa.', 'Útil em status epilepticus (IV).'],
    clinicalIndications: { text: 'Convulsões agudas/repetitivas e epilepsia refratária em cães e gatos.' },
    mechanism: { text: 'Modula liberação de neurotransmissores via ligação SV2A; não atua diretamente em GABA/glutamato.' },
    pharmacokinetics: { text: 'Eliminação renal predominante; t1/2 em cães ~3–6 h.' },
    doses: [
      { species: 'Cão', indication: 'Oral', dose: '10–20 mg/kg (até 30 mg/kg)', route: 'VO', interval: 'q8h', notes: 'Refratários podem exigir doses superiores.' },
      { species: 'Cão', indication: 'IV (bolus)', dose: '20–60 mg/kg', route: 'IV', interval: 'Bolus', notes: 'Status epilepticus/convulsões repetitivas.' },
      { species: 'Cão', indication: 'IV (CRI)', dose: '10–20 mg/kg/h', route: 'IV', interval: 'Contínuo', notes: '' },
      { species: 'Gato', indication: 'Oral', dose: '20 mg/kg', route: 'VO', interval: 'q8–12h', notes: '' }
    ],
    dilutionAndAdministration: { text: 'Formulação IV humana (Keppra) diluir em 100 mL de SF 0,9% ou SG 5% antes da infusão.' },
    contraindications: { text: 'Ajuste em insuficiência renal.' },
    adverseEffects: { text: 'Sedação, ataxia, anorexia; leucopenia transitória rara.' },
    interactions: { text: 'Poucas interações relevantes; não é metabolizado por CYP450.' },
    monitoring: { text: 'Frequência/severidade das crises; função renal quando indicado.' },
    evidence: { text: 'Estudos controlados mostram eficácia IV em status epilepticus e boa tolerabilidade.' }
  },
  {
    name: 'Levotiroxina (L-Tiroxina)',
    sector: 'Endocrinologia',
    class: 'Hormônio tireoidiano (T4).',
    commercialNames: ['Leventa®', 'Thyforon®', 'Thyronorm®', 'Soloxine®', 'Thyro-Tabs®', 'Thyro-L®', 'ThyroMed®', 'L-Thyroxine', 'Equisyn-T4 (pó)'],
    highlights: ['Terapia de reposição no hipotireoidismo canino.', 'Ajuste guiado por T4 sérico (pico e vale).'],
    clinicalIndications: { text: 'Hipotireoidismo em cães; reposição hormonal.' },
    mechanism: { text: 'T4 convertido a T3 ativo; regula metabolismo, crescimento e termogênese.' },
    pharmacokinetics: { text: 'Absorção VO variável e influenciada por alimentos/medicações.' },
    doses: [
      { species: 'Cão', indication: 'Reposição', dose: '0,02 mg/kg', route: 'VO', interval: 'q12h', notes: 'Ajustar por T4 sérico e sinais.' },
      { species: 'Gato', indication: 'Reposição', dose: '0,05–0,1 mg/gato', route: 'VO', interval: 'q12h', notes: '' },
      { species: 'Equino', indication: 'Reposição', dose: '2,2 mg/kg', route: 'VO', interval: 'q24h', notes: '' }
    ],
    contraindications: { text: 'Hipertireoidismo; cautela em cardiopatas; contraindicado em insuficiência adrenal não corrigida.' },
    adverseEffects: { text: 'Sinais de hipertireoidismo por superdose: PU/PD, polifagia, perda de peso, taquicardia, inquietação, dermatite.' },
    interactions: { text: 'Antiácidos/sucralfato/ferro/colestiramina ↓ absorção (espaçar). Fenobarbital/fenitoína/rifampina ↑ metabolismo. Ajustar digoxina/insulina se necessário.' },
    monitoring: { text: 'T4 sérico (pico 4–6h e vale 12–24h pós-dose); sinais clínicos; função cardíaca se cardiopata.' },
    evidence: { text: 'Eficácia bem documentada como reposição hormonal; meta é normalizar T4 e sinais clínicos.' }
  },
  {
    name: 'Lidocaína',
    sector: 'Cardiologia/Anestesia',
    class: 'Anestésico local; antiarrítmico classe Ib.',
    commercialNames: ['Xylocaine®', 'EMLA®', 'Intubeaze®', 'Lidoderm®', 'Lignocaine'],
    highlights: ['Primeira linha para arritmias ventriculares agudas em cães.', 'Útil em analgesia por CRI e íleo pós-op em equinos.'],
    clinicalIndications: { text: 'Analgesia local e sistêmica (CRI), antiarrítmico ventricular, íleo pós-operatório em equinos.' },
    mechanism: { text: 'Bloqueia canais de sódio voltagem-dependentes; reduz automaticidade ectópica e duração do potencial de ação no ventrículo.' },
    pharmacokinetics: { text: 'Metabolismo hepático; meia-vida curta em cães; baixa biodisponibilidade VO.' },
    doses: [
      { species: 'Cão', indication: 'Antiarrítmico (bolus)', dose: '2–8 mg/kg', route: 'IV', interval: 'Bolus (2 mg/kg incremental)', notes: '' },
      { species: 'Cão', indication: 'Antiarrítmico (CRI)', dose: '25–75 µg/kg/min', route: 'IV', interval: 'Contínuo', notes: 'Faixa 30–80 µg/kg/min conforme resposta.' },
      { species: 'Gato', indication: 'Antiarrítmico (bolus)', dose: '0,2–0,4 mg/kg (até 0,75 mg/kg)', route: 'IV', interval: 'Bolus lento', notes: '' },
      { species: 'Gato', indication: 'Antiarrítmico (CRI)', dose: '10–20 µg/kg/min', route: 'IV', interval: 'Contínuo', notes: '0,6–1,2 mg/kg/h.' }
    ],
    dilutionAndAdministration: { text: 'Para CRI, diluir em SF 0,9%/SG 5% compatíveis. Não misturar com furosemida na mesma via.' },
    contraindications: { text: 'Bloqueio AV de 2º/3º grau sem marcapasso; cautela em hipotensão, IC e hepatopatas.' },
    adverseEffects: { text: 'Toxicidade SNC: tremores, convulsões, sedação; cardíaca: bradicardia, bloqueio AV, hipotensão.' },
    interactions: { text: 'Propranolol, cimetidina, cloranfenicol ↓ metabolismo (↑ toxicidade). Antiarrítmicos/betabloqueadores/CCBs ↑ risco de bloqueio AV.' },
    monitoring: { text: 'ECG, PA, sinais neurológicos; função hepática quando indicado.' },
    evidence: { text: 'Estabelecida para arritmias ventriculares; analgesia por CRI reconhecida.' }
  },
  {
    name: 'Linezolida',
    sector: 'Antimicrobianos',
    class: 'Oxazolidinona; antibacteriano (bacteriostático).',
    commercialNames: ['Zyvox®'],
    highlights: ['Ativo contra Gram-positivos resistentes (MRSA, VRE).', 'Risco de mielossupressão com uso prolongado.'],
    clinicalIndications: { text: 'Infecções por Gram-positivos resistentes em cães e gatos.' },
    mechanism: { text: 'Inibe início da síntese proteica bacteriana (subunidade 50S).'},
    pharmacokinetics: { text: 'Boa distribuição tecidual; dados veterinários limitados.' },
    doses: [ { species: 'Cão/Gato', indication: 'Infecções resistentes', dose: '15–25 mg/kg', route: 'VO', interval: 'q12h', notes: 'Pioderma canina: 10 mg/kg q12h.' } ],
    contraindications: { text: 'Cautela para evitar emergência de resistência; avaliar riscos/benefícios.' },
    adverseEffects: { text: 'GI (vômito/diarreia), mielossupressão em uso prolongado; neuropatia periférica/óptica descrita em humanos.' },
    interactions: { text: 'Interações específicas pouco descritas em veterinária.' },
    monitoring: { text: 'Hemograma completo em tratamentos prolongados; resposta clínica.' },
    evidence: { text: 'Ferramenta útil para Gram-positivos resistentes, com uso criterioso.' }
  },
  {
    name: 'Lokivetmab (anti-IL-31)',
    sector: 'Oto-Dermatológico',
    class: 'Anticorpo monoclonal caninizado anti-IL-31.',
    commercialNames: ['Cytopoint®'],
    highlights: ['Reduz prurido em dermatite atópica canina.', 'Perfil de segurança favorável.'],
    clinicalIndications: { text: 'Prurido associado à dermatite atópica em cães.' },
    mechanism: { text: 'Neutraliza IL-31, citocina chave no prurido.' },
    pharmacokinetics: { text: 'Administração SC; longa duração.' },
    doses: [ { species: 'Cão', indication: 'Dermatite atópica', dose: '1 mg/kg', route: 'SC', interval: 'q30d', notes: '' } ],
    contraindications: { text: 'Sem contraindicações específicas nas fontes; avaliar paciente.' },
    adverseEffects: { text: 'Eventos adversos pouco frequentes; monitorar infecções secundárias.' },
    interactions: { text: 'Interações não descritas nas fontes.' },
    monitoring: { text: 'Nível de prurido e lesões de pele; sinais de infecção.' },
    evidence: { text: 'Tratamento eficaz e específico para dermatite atópica canina.' }
  },
  {
    name: 'Lomustina (CCNU)',
    sector: 'Oncologia',
    class: 'Antineoplásico; nitrosureia (agente alquilante).',
    commercialNames: ['CCNU'],
    highlights: ['Atravessa BHE; útil em tumores cerebrais.', 'Dose-limitante: mielossupressão; hepatotoxicidade possível.'],
    clinicalIndications: { text: 'Linfoma, mastocitoma, histiocitoma, tumores cerebrais em cães.' },
    mechanism: { text: 'Forma ligações cruzadas em DNA/RNA, bloqueando replicação e levando à morte celular (não específico de fase).'},
    pharmacokinetics: { text: 'VO; lipofílica; boa distribuição, incluindo SNC.' },
    doses: [ { species: 'Cão', indication: 'Neoplasias', dose: '60–90 mg/m²', route: 'VO', interval: 'q3–4 semanas', notes: 'Ajustar por hemograma.' } ],
    contraindications: { text: 'Mielossupressão prévia, hepatopatia, gestação/lactação.' },
    adverseEffects: { text: 'Mielossupressão (nadir 7–21 dias), hepatotoxicidade, vômito/anorexia; nefrotoxicidade rara.' },
    interactions: { text: 'Somatório com outros mielossupressores; fenobarbital pode reduzir eficácia.' },
    monitoring: { text: 'Hemograma (7, 14 e 21 dias), enzimas hepáticas e sinais GI.' },
    evidence: { text: 'Quimioterápico estabelecido para várias neoplasias caninas; útil em SNC.' }
  },
  {
    name: 'Loratadina',
    sector: 'Oto-Dermatológico',
    class: 'Anti-histamínico H1 de 2ª geração.',
    commercialNames: ['Claritin®'],
    highlights: ['Baixa sedação comparado aos de 1ª geração; resposta individual variável.'],
    clinicalIndications: { text: 'Prurido, urticária, adjuvante em dermatite atópica.' },
    mechanism: { text: 'Antagonista seletivo H1; baixa penetração SNC.' },
    pharmacokinetics: { text: 'VO; metabolismo hepático.' },
    doses: [
      { species: 'Cão', indication: 'Alergias', dose: '0,5–1 mg/kg', route: 'VO', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Alergias', dose: '2,5–5 mg/gato', route: 'VO', interval: 'q24h', notes: '' }
    ],
    contraindications: { text: 'Cautela em gestação/lactação.' },
    adverseEffects: { text: 'Sedação rara, boca seca, GI leve.' },
    interactions: { text: 'Sem interações relevantes relatadas em veterinária nas fontes.' },
    monitoring: { text: 'Redução do prurido/sinais alérgicos; sedação.' },
    evidence: { text: 'Uso frequente; benefício variável entre pacientes.' }
  },
  {
    name: 'Lorazepam',
    sector: 'Neurologia',
    class: 'Benzodiazepínico; anticonvulsivante/ansiolítico.',
    commercialNames: ['Ativan®', 'Intensol®'],
    highlights: ['Eficaz em convulsões agudas; risco de hepatotoxicidade em gatos.'],
    clinicalIndications: { text: 'Convulsões agudas/status epilepticus; sedação/ansiolítico.' },
    mechanism: { text: 'Potencializa GABA (receptor GABA-A).'},
    pharmacokinetics: { text: 'Metabolizado por conjugação hepática (humano: glucuronidação).'},
    doses: [
      { species: 'Cão/Gato', indication: 'Convulsão aguda', dose: '0,2–0,4 mg/kg', route: 'IV/IM', interval: 'q6–8h', notes: 'Uso agudo.' },
      { species: 'Cão', indication: 'Ansiolítico (oral)', dose: '12,5–25 mg/cão', route: 'VO', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Convulsão aguda', dose: '2–5 mg', route: 'IV', interval: 'Único', notes: 'Cautela: hepatotoxicidade felina descrita.' }
    ],
    contraindications: { text: 'Cautela em insuficiência hepática; risco de necrose hepática aguda/falha em gatos.' },
    adverseEffects: { text: 'Sedação, ataxia; depressão respiratória em doses altas/combo depressor SNC.' },
    interactions: { text: 'Azólicos (ex.: itraconazol) podem ↑ concentrações; depressores do SNC somam efeito.' },
    monitoring: { text: 'Nível de sedação/ataxia, atividade convulsiva, função hepática (gatos).' },
    evidence: { text: 'Eficaz para convulsões agudas/sedação; risco hepático em felinos requer cautela.' }
  },
  {
    name: 'Lotilaner',
    sector: 'Parasitologia',
    class: 'Isoxazolina; ectoparasiticida oral.',
    commercialNames: ['Credelio®'],
    highlights: ['Ação rápida contra pulgas/carrapatos; mensal.'],
    clinicalIndications: { text: 'Tratamento/controle de pulgas e carrapatos em cães e gatos.' },
    mechanism: { text: 'Inibe canais de Cl− dependentes de GABA/glutamato em insetos/ácaros → hiperexcitação e morte.' },
    pharmacokinetics: { text: 'VO; excelente eficácia sistêmica.' },
    doses: [
      { species: 'Cão', indication: 'Controle mensal', dose: '56,25–900 mg conforme peso (comprimidos)', route: 'VO', interval: 'q30d', notes: '' },
      { species: 'Gato', indication: 'Controle mensal', dose: '12–48 mg conforme peso (comprimidos)', route: 'VO', interval: 'q30d', notes: '' }
    ],
    contraindications: { text: 'Segurança não totalmente estabelecida em neonatos/gestantes/lactantes; usar com cautela.' },
    adverseEffects: { text: 'Raros eventos GI; observar hipersensibilidade.' },
    interactions: { text: 'Não descritas nas fontes.' },
    monitoring: { text: 'Redução da carga parasitária e sinais cutâneos associados.' },
    evidence: { text: 'Ectoparasiticida eficaz de classe isoxazolina; uso consolidado.' }
  },
  {
    name: 'Marbofloxacina (+ Clotrimazol + Dexametasona)',
    sector: 'Antimicrobianos/Otologia',
    class: 'Fluoroquinolona; combinações otológicas antifúngico/corticoide.',
    commercialNames: ['Marbocyl®', 'Zeniquin®', 'Aurizon® (combinação)', 'Marbocare®', 'Marbotab®', 'Marboxidin®'],
    highlights: ['VO/iny para infecções diversas; combinação tópica eficaz em otite externa.'],
    clinicalIndications: { text: 'Infecções urinárias, de pele/tecidos moles, respiratórias; otite externa (com clotrimazol+dexametasona).'},
    mechanism: { text: 'Inibe DNA girase (Gram−) e topoisomerase IV (Gram+).'},
    pharmacokinetics: { text: 'Boa biodisponibilidade; dose única diária usual.' },
    doses: [
      { species: 'Cão', indication: 'Sistema', dose: '2,75–5,5 mg/kg', route: 'VO/SC/IV', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Sistema', dose: '2,75–5,5 mg/kg', route: 'VO', interval: 'q24h', notes: '' }
    ],
    dilutionAndAdministration: { text: 'Comprimidos/soluções prontas; formulações tópicas prontas (Aurizon, etc.).' },
    contraindications: { text: 'Evitar em animais jovens em crescimento; cautela em epilépticos e gestantes/lactantes.' },
    adverseEffects: { text: 'GI, raros eventos SNC; artropatia em jovens.' },
    interactions: { text: 'Antiácidos/sais de Fe/Ca/Zn e sucralfato quelam e ↓ absorção; teofilina ↑ com marbo.' },
    monitoring: { text: 'Resposta clínica e sinais GI/SNC; claudicação/dor articular em jovens.' },
    evidence: { text: 'Fluoroquinolona veterinária estabelecida; combinações otológicas amplamente utilizadas.' }
  },
  {
    name: 'Maropitant',
    sector: 'Gastroenterologia',
    class: 'Antiemético; antagonista NK1 (substância P).',
    commercialNames: ['Cerenia®', 'Prevomax®', 'Vetemex®'],
    highlights: ['Eficaz para múltiplas causas de vômito; cinetose canina com dose maior.'],
    clinicalIndications: { text: 'Prevenção/tratamento de vômito agudo em cães e gatos; náuseas; cinetose em cães.' },
    mechanism: { text: 'Bloqueio central/periférico de receptores NK1 para substância P no centro do vômito/ZQGT.' },
    pharmacokinetics: { text: 'VO biodisp.: cães ~90%, gatos ~50%; t1/2: cães 4–7 h, gatos ~16 h; metabolismo hepático.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Vômito agudo', dose: '1 mg/kg', route: 'SC/VO', interval: 'q24h (até 5 dias)', notes: '' },
      { species: 'Cão', indication: 'Cinetose', dose: '8 mg/kg', route: 'VO', interval: '2 h antes da viagem (até 2 dias)', notes: 'Em jejum ou pequena quantidade de alimento.' }
    ],
    contraindications: { text: 'Evitar em obstrução GI/ingestão de toxinas onde o vômito é útil; cautela em cardiopatas e hepatopatas; não usar <8 semanas; evitar em gestantes/lactantes.' },
    adverseEffects: { text: 'Dor no local SC; leve sedação; GI raro.' },
    interactions: { text: 'Cautela com fármacos metabolizados por CYP450.' },
    monitoring: { text: 'Controle de vômito/náuseas; dor local SC; eventos GI.' },
    evidence: { text: 'Eficácia ampla e bem documentada em cães e gatos.' }
  },
  {
    name: 'Meloxicam',
    sector: 'Analgesia/Inflamação',
    class: 'AINE seletivo COX-2 preferencial.',
    commercialNames: ['Metacam®', 'Meloxidyl®', 'Meloxivet®', 'Mobic®', 'Loxicom®', 'Rheumocam®'],
    highlights: ['Analgesia e anti-inflamatório para condições musculo-esqueleticas e pós-op.'],
    clinicalIndications: { text: 'Dor/inflamação aguda e crônica (ex.: osteoartrite); dor pós-operatória.' },
    mechanism: { text: 'Inibição preferencial de COX-2 reduz prostaglandinas inflamatórias.' },
    pharmacokinetics: { text: 'Boa biodisponibilidade VO; metabolismo hepático; t1/2 cães 12–24 h, gatos ~24 h.' },
    doses: [
      { species: 'Cão', indication: 'Dor/Inflamação', dose: '0,1 mg/kg (ataque), depois 0,05 mg/kg', route: 'VO/SC', interval: 'q24h', notes: 'Seguir bula do produto.' },
      { species: 'Gato', indication: 'Dor aguda (uso licenciado)', dose: '0,3 mg/kg (dose única) ou conforme bula', route: 'SC', interval: 'Único', notes: 'Uso crônico em gatos requer extrema cautela.' }
    ],
    contraindications: { text: 'Insuficiência renal/hepática grave, úlceras GI, desidratação/hipotensão/hipovolemia; evitar em gestantes/lactantes e jovens.' },
    adverseEffects: { text: 'GI (vômito, diarreia, anorexia, melena, hematêmese, úlcera), renal (IRA), hepático (aumento enz.).' },
    interactions: { text: 'Evitar com outros AINEs/corticoides; cautela com nefrotóxicos e anticoagulantes.' },
    monitoring: { text: 'Hidratação, sinais GI e renais; função renal/hepática em risco.' },
    evidence: { text: 'AINE veterinário amplamente utilizado; perfil COX-2 preferencial com eficácia estabelecida.' }
  },
  {
    name: 'Ácido Acético 2% + Ácido Bórico',
    sector: 'Oto-Dermatológico',
    class: 'Agente de limpeza otológica; Acidificante.',
    commercialNames: [],
    highlights: [
      'Solução para limpeza e acidificação do canal auditivo.',
      'Ajuda a criar um ambiente desfavorável para o crescimento de bactérias e leveduras.',
      'Não utilizar se houver suspeita de ruptura do tímpano.'
    ],
    clinicalIndications: {
      text: 'Uso como limpador e secante em orelhas, ajudando a manter um ambiente ácido desfavorável para o crescimento de bactérias (ex: Pseudomonas) e leveduras (ex: Malassezia).'
    },
    mechanism: {
      text: 'O ácido acético possui propriedades antimicrobianas e o ácido bórico atua como secante e antisséptico suave, diminuindo o pH do canal auditivo.'
    },
    pharmacokinetics: {
      text: 'Ação tópica no canal auditivo externo com mínima absorção sistêmica.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Limpeza otológica', dose: 'Instilar no canal auditivo', route: 'Tópico', interval: 'Conforme necessário', notes: 'Massagear a base da orelha e remover o excesso com algodão. Não usar cotonetes.' }
    ],
    contraindications: {
      text: 'Contraindicado em pacientes com suspeita ou confirmação de ruptura da membrana timpânica.'
    },
    adverseEffects: {
      text: 'Pode causar irritação local, especialmente em orelhas já inflamadas ou ulceradas.'
    },
    interactions: {
      text: 'Não há interações significativas conhecidas para uso tópico.'
    },
    monitoring: {
      text: 'Observar a melhora dos sinais de otite e monitorar para sinais de irritação local.'
    },
    evidence: {
      text: 'Soluções acidificantes são um componente padrão no manejo e prevenção de otites externas recorrentes.'
    }
  },
  {
    name: 'Ácido Acetilsalicílico (Aspirina)',
    sector: 'Bulário Principal',
    class: 'AINE; Antiagregante plaquetário; Analgésico.',
    commercialNames: ['Aspirin®', 'ASA', 'Ascriptin®'],
    highlights: [
      'Usado como antiagregante plaquetário, especialmente em gatos com risco de tromboembolismo.',
      'Deve ser usado com extrema cautela em gatos devido ao seu metabolismo lento.',
      'Risco de toxicidade gastrointestinal.',
      'O clopidogrel é geralmente considerado uma alternativa superior e mais segura em gatos para profilaxia antitrombótica.'
    ],
    clinicalIndications: {
      text: 'Profilaxia antitrombótica (uso histórico em gatos com cardiomiopatia). Analgesia e efeito anti-inflamatório leve em cães.',
      tooltip: 'O estudo FATCAT demonstrou a superioridade do clopidogrel sobre a aspirina para prevenção de tromboembolismo arterial em gatos.'
    },
    mechanism: {
      text: 'Inibidor não seletivo e irreversível da ciclo-oxigenase (COX), resultando em diminuição da produção de prostaglandinas e tromboxano A2. O efeito antiplaquetário dura toda a vida da plaqueta.'
    },
    pharmacokinetics: {
      text: 'Gatos têm deficiência na via de glucuronidação, resultando em uma meia-vida de eliminação do salicilato muito prolongada (>30 horas), o que aumenta o risco de toxicidade cumulativa.'
    },
    doses: [
      { species: 'Cão', indication: 'Analgésico/Anti-inflamatório', dose: '10-20 mg/kg', route: 'VO', interval: 'q12h', notes: 'Administrar com alimento.' },
      { species: 'Gato', indication: 'Antiagregante plaquetário (Uso com cautela)', dose: '81 mg (dose total por gato)', route: 'VO', interval: 'a cada 72h', notes: 'USAR COM EXTREMA CAUTELA. A dosagem é controversa e requer monitoramento. O clopidogrel é preferido.' }
    ],
    contraindications: {
      text: 'Contraindicado em pacientes com úlceras gastrointestinais ativas, coagulopatias (ex: doença de von Willebrand) ou hipersensibilidade a salicilatos. Não usar concomitantemente com outros AINEs ou corticosteroides.'
    },
    adverseEffects: {
      text: 'Irritação e ulceração gastrointestinal, vômito, diarreia, melena. Ceratoconjuntivite seca. Toxicidade por salicilato em gatos (depressão, anorexia, vômito). Risco aumentado de sangramento.'
    },
    interactions: {
      text: 'Potencializa o risco de sangramento com outros anticoagulantes. Aumenta o risco de toxicidade GI com corticosteroides e outros AINEs. Pode aumentar as concentrações de digoxina.'
    },
    monitoring: {
      text: 'Monitorar sinais de toxicidade gastrointestinal (vômito, melena). Em terapia crônica, monitorar a função renal e hematócrito.'
    },
    evidence: {
      text: 'Seu uso como antiplaquetário em gatos foi largamente substituído pelo clopidogrel, que se mostrou superior e mais seguro no estudo FATCAT.'
    }
  },
  {
    name: 'Ácido Fusídico 2% (gel)',
    sector: 'Oto-Dermatológico',
    class: 'Antibacteriano.',
    commercialNames: ['Isaderm®', 'Isathal®', 'Fusidic acid'],
    highlights: ['Antibiótico tópico com boa atividade contra Staphylococcus.', 'Frequentemente encontrado em combinação com corticosteroides.'],
    clinicalIndications: { text: 'Tratamento de infecções bacterianas de pele e oculares superficiais, como piodermite superficial localizada e conjuntivite bacteriana.' },
    mechanism: { text: 'Inibe a síntese de proteínas bacterianas. É primariamente eficaz contra bactérias Gram-positivas, especialmente Staphylococcus spp.' },
    pharmacokinetics: { text: 'Ação tópica com absorção sistêmica mínima.' },
    doses: [
        { species: 'Cão/Gato', indication: 'Uso Tópico/Oftálmico', dose: 'Aplicar uma fina camada', route: 'Tópico/Oftálmico', interval: 'q12h', notes: 'Seguir as recomendações do produto. Muitos produtos comerciais contêm associações (ex: com betametasona).' }
    ],
    adverseEffects: { text: 'Reações de hipersensibilidade local são raras.' },
    contraindications: { text: 'Hipersensibilidade ao componente.' },
    interactions: { text: 'Não há interações significativas conhecidas para uso tópico.' },
    monitoring: { text: 'Monitorar a resolução da infecção.' },
    evidence: { text: 'Eficaz para infecções estafilocócicas superficiais, mas o uso criterioso é importante para evitar resistência.' }
  },
  {
    name: 'Afoxolaner',
    sector: 'Antiparasitários',
    class: 'Antiparasitário; Isoxazolina.',
    commercialNames: ['Nexgard®', 'Nexgard Spectra®', 'Bravecto®'],
    highlights: ['Antiparasitário oral de ação rápida e prolongada contra pulgas e carrapatos.', 'Palatável, em forma de tablete mastigável.', 'Usar com cautela em cães com histórico de convulsões.'],
    clinicalIndications: { text: 'Tratamento e prevenção de infestações por pulgas (Ctenocephalides felis) e carrapatos (Rhipicephalus sanguineus, Dermacentor spp., Amblyomma spp.) em cães.' },
    mechanism: { text: 'Atua como um antagonista dos canais de cloreto dependentes de ligantes (GABA e glutamato) no sistema nervoso dos insetos e ácaros, causando hiperexcitação e morte dos parasitas.' },
    pharmacokinetics: { text: 'Bem absorvido por via oral, atingindo a concentração máxima em 2-4 horas. A eficácia não é afetada pela alimentação.' },
    doses: [
      { species: 'Cão', indication: 'Controle de pulgas e carrapatos', dose: '≥ 2.5 mg/kg', route: 'VO', interval: 'Mensal', notes: 'Administrar o tablete mastigável apropriado para o peso do cão.' }
    ],
    contraindications: { text: 'Usar com cautela em cães com histórico de convulsões ou outros distúrbios neurológicos.' },
    adverseEffects: { text: 'Vômito, diarreia, letargia e anorexia são os efeitos adversos mais relatados, geralmente leves e autolimitantes. Sinais neurológicos (convulsões, ataxia) são raros.' },
    interactions: { text: 'Não são conhecidas interações medicamentosas clinicamente relevantes.' },
    monitoring: { text: 'Monitorar a eficácia e a ocorrência de quaisquer efeitos adversos, especialmente neurológicos.' },
    evidence: { text: 'Alta eficácia contra pulgas e carrapatos demonstrada em múltiplos estudos, com início de ação rápido.' }
  },
  {
    name: 'Alumínio Hidróxido',
    sector: 'Gastrointestinal',
    class: 'Quelante de fósforo; Antiácido.',
    commercialNames: ['Amphojel® (humano)', 'Basaljel® (humano)'],
    highlights: [
      'Principal uso como quelante de fósforo intestinal em pacientes com doença renal crônica.',
      'Deve ser administrado junto com as refeições para máxima eficácia.',
      'Pode causar constipação.'
    ],
    clinicalIndications: { text: 'Manejo da hiperfosfatemia em pacientes com doença renal crônica. Também pode ser usado como antiácido, embora outros fármacos sejam mais potentes.' },
    mechanism: { text: 'No lúmen intestinal, o hidróxido de alumínio se liga ao fosfato da dieta, formando fosfato de alumínio insolúvel, que é excretado nas fezes, prevenindo a absorção de fósforo.' },
    pharmacokinetics: { text: 'Atua localmente no intestino. A absorção de alumínio é mínima, mas pode aumentar em pacientes com DRC, havendo um risco teórico de toxicidade crônica.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Quelante de Fósforo', dose: '10–30 mg/kg', route: 'VO', interval: 'q8h (com as refeições)', notes: 'A dose deve ser titulada com base nos níveis de fósforo sérico.' }
    ],
    contraindications: { text: 'Usar com cautela em uso crônico devido ao risco teórico de toxicidade por alumínio, embora seja raro em animais.' },
    adverseEffects: { text: 'O efeito adverso mais comum é a constipação.' },
    interactions: { text: 'Pode diminuir a absorção de vários fármacos, incluindo tetraciclinas, fluoroquinolonas e digoxina. Administrar outros medicamentos orais pelo menos 2 horas antes ou depois do quelante.' },
    monitoring: { text: 'Monitorar os níveis de fósforo e cálcio séricos periodicamente.' },
    evidence: { text: 'Quelantes de fósforo são um pilar no manejo da doença renal crônica para controlar o hiperparatireoidismo secundário renal.' }
  },
  {
    name: 'Amantadina',
    sector: 'Analgésicos e Anestésicos',
    class: 'Analgésico; Antagonista NMDA; Antiviral.',
    commercialNames: ['Symmetrel® (humano)'],
    highlights: [
      'Usado como analgésico adjuvante para dor crônica, especialmente a neuropática.',
      'Atua como antagonista do receptor NMDA, ajudando a combater a sensibilização central ("wind-up").',
      'Pode ser combinado com AINEs e outros analgésicos para uma abordagem multimodal.'
    ],
    clinicalIndications: { text: 'Tratamento da dor crônica refratária, como a da osteoartrite ou dor oncológica, particularmente quando há suspeita de componente neuropático ou sensibilização central. Também possui atividade antiviral contra o vírus da influenza A.' },
    mechanism: { text: 'Antagonista não competitivo do receptor N-metil-D-aspartato (NMDA). Ao bloquear este receptor, a amantadina ajuda a reduzir a sensibilização central, um fenômeno de amplificação da dor que ocorre no sistema nervoso central.' },
    pharmacokinetics: { text: 'Boa absorção oral. É excretada primariamente inalterada pelos rins.' },
    doses: [
      { species: 'Cão', indication: 'Dor Crônica', dose: '3–5 mg/kg', route: 'VO', interval: 'q24h', notes: 'A dose pode ser aumentada gradualmente. Ajustar a dose em pacientes com insuficiência renal.' },
      { species: 'Gato', indication: 'Dor Crônica', dose: '3–5 mg/kg', route: 'VO', interval: 'q24h', notes: 'Uso menos comum que em cães. Ajustar dose em insuficiência renal.' }
    ],
    contraindications: { text: 'Usar com cautela em pacientes com insuficiência renal, hepática ou cardíaca congestiva.' },
    adverseEffects: { text: 'Geralmente bem tolerada. Agitação, diarreia ou flatulência podem ocorrer.' },
    interactions: { text: 'Pode ter efeitos aditivos no SNC com outros fármacos, como anticolinérgicos.' },
    monitoring: { text: 'Monitoramento da resposta analgésica e observação de efeitos adversos.' },
    evidence: { text: 'Estudos e experiência clínica suportam seu uso como parte de um protocolo de analgesia multimodal para dor crônica em cães, mostrando melhora na qualidade de vida.' }
  },
  {
    name: 'Amicacina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Aminoglicosídeo.',
    commercialNames: ['Amiglyde-V®', 'Amikin® (humano)', 'Sulfato de amicacina (genérico)'],
    highlights: [
      'Aminoglicosídeo de amplo espectro com excelente atividade contra bacilos Gram-negativos, incluindo Pseudomonas.',
      'Reservado para infecções graves e multirresistentes.',
      'Ação bactericida concentração-dependente, favorecendo dose única diária.',
      'Risco significativo de nefrotoxicidade e ototoxicidade.'
    ],
    clinicalIndications: { text: 'Tratamento de infecções graves por bactérias Gram-negativas suscetíveis, como septicemia, peritonite e pielonefrite, especialmente quando há resistência a outros antibióticos. Geralmente em combinação com ampicilina/sulbactam ou uma fluoroquinolona.' },
    mechanism: { text: 'Inibe a síntese de proteínas bacterianas ao se ligar irreversivelmente à subunidade ribossômica 30S. Sua atividade é concentração-dependente e possui efeito pós-antibiótico prolongado. Espectro não inclui estreptococos e anaeróbios.' },
    pharmacokinetics: { text: 'Não é absorvida por via oral. É eliminada inalterada pelos rins. Meia-vida de 1-2 horas. Volume de distribuição de 200-250 mL/kg.' },
    doses: [
      { species: 'Cão', indication: 'Infecções graves', dose: '15–30 mg/kg', route: 'IV, IM, SC', interval: 'q24h', notes: 'Garantir hidratação adequada. Dose única diária minimiza risco de toxicidade.' },
      { species: 'Gato', indication: 'Infecções graves', dose: '10–14 mg/kg', route: 'IV, IM, SC', interval: 'q24h', notes: 'Garantir hidratação adequada. Usar com cautela.' }
    ],
    contraindications: { text: 'Contraindicada em pacientes com insuficiência renal preexistente ou desidratação. Evitar uso concomitante com outros fármacos nefrotóxicos ou ototóxicos.' },
    adverseEffects: { text: 'Nefrotoxicidade é o principal efeito adverso dose-limitante. Ototoxicidade (vestibular e coclear) também é um risco significativo. Bloqueio neuromuscular pode ocorrer, especialmente com anestésicos.' },
    interactions: { text: 'Aumenta o risco de nefrotoxicidade com AINEs, furosemida e anfotericina B. Sinergismo com antibióticos beta-lactâmicos contra alguns organismos (ex: Pseudomonas), mas não devem ser misturados na mesma seringa.' },
    monitoring: { text: 'Monitorar a função renal (ureia, creatinina, urinálise) antes e durante a terapia. O monitoramento terapêutico dos níveis séricos (pico e vale) é ideal para otimizar a eficácia e minimizar a toxicidade.' },
    evidence: { text: 'Fármaco potente e eficaz para infecções Gram-negativas graves, mas seu potencial de toxicidade exige manejo cuidadoso e monitoramento.' }
  },
  {
    name: 'Amiodarona',
    sector: 'Cardiovascular',
    class: 'Antiarrítmico (Classe III).',
    commercialNames: ['Cordarone® (humano)'],
    highlights: [
      'Antiarrítmico de amplo espectro, eficaz para arritmias ventriculares e supraventriculares refratárias.',
      'Possui propriedades de todas as quatro classes de antiarrítmicos.',
      'Longa meia-vida e perfil complexo de efeitos adversos limitam seu uso a casos específicos.'
    ],
    clinicalIndications: { text: 'Tratamento de taquiarritmias ventriculares e atriais refratárias a outros tratamentos em cães. Seu uso é limitado devido à toxicidade potencial.' },
    mechanism: { text: 'Agente antiarrítmico de Classe III que prolonga a duração do potencial de ação e o período refratário em todos os tecidos cardíacos. Também possui efeitos de bloqueio beta (Classe II), bloqueio de canais de sódio (Classe I) e bloqueio de canais de cálcio (Classe IV).' },
    pharmacokinetics: { text: 'Absorção oral variável. Metabolismo hepático complexo e meia-vida extremamente longa (dias a semanas).' },
    doses: [
      { species: 'Cão', indication: 'Arritmias Refratárias (VO)', dose: 'Dose de ataque: 8–15 mg/kg q12h por 7-14 dias; Manutenção: 4–8 mg/kg q24h', route: 'VO', interval: 'q12-24h', notes: 'Requer monitoramento intensivo.' },
      { species: 'Cão', indication: 'Arritmias Refratárias (IV)', dose: 'Dose de ataque: 1-2 mg/kg IV lento, seguido de CRI de 0.5-1 mg/kg/h', route: 'IV', interval: 'Contínuo', notes: 'Uso em ambiente hospitalar.' }
    ],
    contraindications: { text: 'Contraindicado em pacientes com bradicardia sinusal severa ou bloqueio AV de alto grau sem marca-passo.' },
    adverseEffects: { text: 'Hepatotoxicidade é a principal preocupação em cães. Anorexia, vômito, neutropenia e disfunção tireoidiana também podem ocorrer. Em humanos, microdepósitos corneanos, fotossensibilidade e fibrose pulmonar são riscos.' },
    interactions: { text: 'Inibe o citocromo P450, aumentando os níveis de muitos fármacos, incluindo digoxina, diltiazem e varfarina. Risco aumentado de bradicardia com betabloqueadores.' },
    monitoring: { text: 'Monitoramento contínuo de ECG. Monitorar a função hepática (enzimas) e tireoidiana (T4, TSH) regularmente. Hemograma periódico.' },
    evidence: { text: 'Considerado um agente de último recurso para arritmias potencialmente fatais que não responderam a terapias mais seguras.' }
  },
  {
    name: 'Amitraz (banho)',
    sector: 'Oto-Dermatológico',
    class: 'Antiparasitário; Ectoparasiticida; Formamidina.',
    commercialNames: ['Mitaban®', 'Acarmic®', 'Amiphos®', 'Amipur®', 'Bovitraz®', 'Charmdog®', 'Carvet®'],
    highlights: [
      'Tratamento tópico eficaz para a demodicose generalizada em cães.',
      'A aplicação requer diluição e deve ser feita em área bem ventilada.',
      'Potencialmente tóxico se ingerido; sedação é um sinal comum de toxicidade.',
      'Os efeitos tóxicos podem ser revertidos com atipamezol.'
    ],
    clinicalIndications: { text: 'Tratamento de sarna demodécica generalizada em cães. Também possui atividade contra outros ácaros e carrapatos.' },
    mechanism: { text: 'Inibidor da monoamina oxidase (MAO) e agonista alfa-2 adrenérgico no sistema nervoso dos parasitas. Em mamíferos, a toxicidade está relacionada à sua atividade alfa-2 agonista.' },
    pharmacokinetics: { text: 'Aplicado topicamente, com alguma absorção sistêmica, que é a causa dos potenciais efeitos adversos.' },
    doses: [
      { species: 'Cão', indication: 'Demodicose Generalizada', dose: 'Diluir 10.6 mL em 7.6 L de água (250 ppm)', route: 'Tópico (banho)', interval: 'a cada 14 dias', notes: 'Tosquiar o animal. Aplicar a solução e deixar secar. Não enxaguar. Usar luvas.' }
    ],
    contraindications: { text: 'Não usar em gatos. Não usar em cães com menos de 4 meses de idade. Usar com cautela em cães pequenos, idosos ou debilitados.' },
    adverseEffects: { text: 'Sedação, letargia, ataxia, bradicardia, hipotermia e vômito são sinais de toxicidade. Os efeitos podem ser revertidos com um antagonista alfa-2 como o atipamezol.' },
    interactions: { text: 'Não usar com outros inibidores da MAO (ex: selegilina) ou outros fármacos com atividade alfa-2 agonista.' },
    monitoring: { text: 'Monitorar a resposta ao tratamento com raspados de pele. Observar o paciente por sinais de sedação e outros efeitos adversos por várias horas após o banho.' },
    evidence: { text: 'Tratamento historicamente eficaz para demodicose, embora as isoxazolinas orais (ex: afoxolaner, fluralaner) sejam agora frequentemente preferidas pela conveniência e perfil de segurança.' }
  },
  {
    name: 'Amlodipina',
    sector: 'Bulário Principal',
    class: 'Anti-hipertensivo; Bloqueador do Canal de Cálcio.',
    commercialNames: ['Amlodipino (genérico)', 'Norvasc® (humano)', 'Amodip® (veterinário)'],
    highlights: [
      'Fármaco de primeira escolha para o tratamento da hipertensão sistêmica em gatos.',
      'Potente vasodilatador arterial periférico com mínimo efeito sobre a função cardíaca.',
      'Longa meia-vida permite administração conveniente em dose única diária.',
      'Hiperplasia gengival é um efeito adverso raro, mas notório em cães.'
    ],
    clinicalIndications: {
      text: 'Tratamento da hipertensão sistêmica em cães e, principalmente, em gatos. É especialmente útil em gatos com hipertensão secundária à doença renal crônica (DRC) ou hipertireoidismo. Também usado como terapia adjuvante para insuficiência cardíaca em estágios C e D em cães.',
      tooltip: 'A hipertensão não tratada pode levar a danos em órgãos-alvo, como retina (cegueira), rins (progressão da DRC), cérebro (sinais neurológicos) e coração (hipertrofia ventricular esquerda).'
    },
    mechanism: {
      text: 'Bloqueador de canais de cálcio da classe di-hidropiridina. Bloqueia os canais de cálcio do tipo L no músculo liso das arteríolas. Isso inibe o influxo de cálcio para as células musculares, resultando em relaxamento do músculo liso e vasodilatação arterial periférica, o que diminui a resistência vascular sistêmica e, consequentemente, a pressão arterial.',
      tooltip: 'Sua alta seletividade vascular a diferencia de outros bloqueadores de canal de cálcio (como o diltiazem), que têm efeitos mais pronunciados no coração.'
    },
    pharmacokinetics: {
      text: 'Boa absorção oral, que não é afetada pelo alimento. Extensivamente metabolizada no fígado. Possui uma longa meia-vida de eliminação, o que permite a administração a cada 24 horas.',
      tooltip: 'A longa meia-vida também significa que o estado de equilíbrio (e o efeito máximo) leva vários dias para ser atingido. Os ajustes de dose não devem ser feitos com muita frequência.'
    },
    doses: [
      { species: 'Gato', indication: 'Hipertensão Sistêmica', dose: '0.625 mg (total/gato)', route: 'VO', interval: 'q24h', notes: 'Pode ser aumentado para 1.25 mg/gato q24h se o gato for grande (>4.5 kg) ou a resposta for inadequada.' },
      { species: 'Cão', indication: 'Hipertensão Sistêmica', dose: '0.05-0.2 mg/kg', route: 'VO', interval: 'q12-24h', notes: 'Geralmente usado como terapia adjuvante a um inibidor da ECA. Iniciar com 0.05-0.1 mg/kg.' }
    ],
    dilutionAndAdministration: {
        text: 'A amlodipina é formulada para administração exclusivamente oral. Não é usada por via parenteral na prática veterinária. Não requer diluição.',
        tooltip: 'Os comprimidos são pequenos e podem ser divididos para se atingir a dose correta para gatos. Formulações em suspensão podem ser manipuladas para facilitar a administração.'
    },
    contraindications: {
      text: 'Usar com cautela em pacientes com insuficiência hepática grave, choque cardiogênico ou hipotensão grave. Não administrar a pacientes com baixa reserva cardíaca ou desidratados.',
      tooltip: 'Não há contraindicações absolutas, mas o monitoramento cuidadoso da pressão arterial é essencial.'
    },
    adverseEffects: {
      text: 'Geralmente bem tolerado. Hipotensão, se a dose for excessiva. Bradicardia, letargia ou anorexia podem ocorrer. Hiperplasia gengival é um efeito colateral raro em cães, mas reversível com a descontinuação do fármaco.',
      tooltip: 'A hipotensão é o principal risco, por isso a terapia deve ser iniciada com a dose mais baixa e titulada conforme a necessidade, com base em medições seriadas da pressão arterial.'
    },
    interactions: {
      text: 'Pode ter efeitos hipotensores aditivos quando usado com outros vasodilatadores, diuréticos ou anestésicos. O uso concomitante com antifúngicos azólicos (ex: itraconazol) pode inibir seu metabolismo, aumentando o risco de toxicidade.',
      tooltip: 'Em cães com hipertensão proteinúrica, a combinação com um inibidor da ECA (ex: benazepril) é a terapia padrão. Em gatos, pode ser indicada a adição de um betabloqueador para controle da frequência cardíaca.'
    },
    monitoring: {
      text: 'Monitoramento seriado da pressão arterial sistólica. Uma medição inicial deve ser feita 7 a 14 dias após o início da terapia ou ajuste de dose. O objetivo é manter a pressão sistólica < 160 mmHg.',
      tooltip: 'Fontes: Plumb\'s 10th Ed., ACVIM Consensus Statement on Systemic Hypertension.'
    },
    evidence: {
      text: 'A amlodipina é o fármaco anti-hipertensivo de primeira linha recomendado pelas diretrizes de consenso do ACVIM para o tratamento da hipertensão felina.',
      tooltip: 'Sua eficácia e segurança em gatos são bem documentadas, tornando-a o padrão de tratamento para esta condição comum em felinos idosos.'
    }
  },
  {
    name: 'Amoxicilina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Penicilina aminopenicilânica; Beta-lactâmico.',
    commercialNames: ['Amoxi-Tabs', 'Amoxi-Drops', 'Robamox-V', 'Biomox', 'Amoxil', 'Clamoxyl', 'Vetrimoxin'],
    highlights: [
      'Antibiótico de amplo espectro, seguro e eficaz para muitas infecções comuns.',
      'Geralmente bem tolerado, mas pode causar distúrbios gastrointestinais.',
      'Susceptível à degradação por beta-lactamases bacterianas (usar com clavulanato nesses casos).',
      'Administração duas vezes ao dia geralmente é suficiente.'
    ],
    clinicalIndications: { text: 'Infecções bacterianas do trato respiratório, urinário, pele e tecidos moles causadas por organismos suscetíveis. Especialmente útil para tratamento de longo prazo de infecções bacterianas secundárias em pneumopatas.' },
    mechanism: { text: 'Antibiótico beta-lactâmico que inibe a síntese da parede celular bacteriana, ligando-se às proteínas de ligação à penicilina (PBPs), o que leva à morte do microrganismo. É bactericida e tempo-dependente.' },
    pharmacokinetics: { text: 'Bem absorvida quando administrada por via oral. A estabilidade da suspensão é ótima a pH de 5,8-6,5; acima disso, ocorre hidrólise. As suspensões líquidas são estáveis por 14 dias.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções gerais', dose: '6.6-20 mg/kg', route: 'VO', interval: 'q8-12h', notes: '' },
      { species: 'Cão/Gato', indication: 'Infecção secundária (pneumopata)', dose: '22 mg/kg', route: 'VO', interval: 'q8-12h', notes: 'Pode necessitar de tratamento por pelo menos 4 a 6 semanas.' }
    ],
    contraindications: { text: 'Hipersensibilidade a fármacos beta-lactâmicos (penicilinas, cefalosporinas). A administração oral a equinos ou bovinos pode provocar diarreia e/ou enterite graves.' },
    adverseEffects: { text: 'Geralmente bem tolerada. Reações alérgicas são possíveis. Diarreia e vômitos são comumente observados durante o tratamento oral.' },
    interactions: { text: 'Não associar a medicamentos em formulações compostas. O uso com antibióticos bacteriostáticos (ex: tetraciclinas) pode, teoricamente, antagonizar o efeito.' },
    monitoring: { text: 'Monitorar sinais de diarreia ou vômito e a resolução dos sinais clínicos da infecção. Observar para reações alérgicas.' },
    evidence: { text: 'É um antibiótico de amplo espectro frequentemente bem-sucedido para infecções bacterianas comuns. Para microrganismos Gram-negativos ou produtores de beta-lactamase, a combinação com clavulanato é superior.' }
  },
  {
    name: 'Amoxicilina + Clavulanato',
    sector: 'Bulário Principal',
    class: 'Antibacteriano; Penicilina aminopenicilânica potencializada.',
    commercialNames: ['Clavamox®', 'Synulox®', 'Augmentin®', 'Clavaseptin®', 'Noroclav®'],
    highlights: [
      'Antibiótico de amplo espectro, eficaz contra Gram+, Gram- e cepas produtoras de β-lactamase.',
      'Fármaco de primeira linha para piodermite superficial canina e cistite bacteriana esporádica.',
      'Ação bactericida tempo-dependente (manter concentrações acima da CIM).',
      'O clavulanato protege a amoxicilina da degradação por enzimas β-lactamase.',
      'Geralmente bem tolerado; efeitos gastrointestinais são os mais comuns.'
    ],
    clinicalIndications: {
      text: 'Indicado para infecções de pele (piodermites, abscessos), trato urinário (cistite), periodontais e do trato respiratório causadas por bactérias produtoras de beta-lactamase.',
      tooltip: 'A duração do tratamento é crucial: mínimo de 3 semanas para piodermites superficiais. Para cistites esporádicas, as diretrizes da ISCAID recomendam cursos curtos (3-5 dias).'
    },
    mechanism: {
      text: 'A amoxicilina inibe a síntese da parede celular bacteriana. O ácido clavulânico é um inibidor "suicida" de β-lactamases, protegendo a amoxicilina da degradação e ampliando seu espectro de ação.',
      tooltip: 'A farmacodinâmica é tempo-dependente: a eficácia depende do tempo em que a concentração do fármaco permanece acima da CIM. Isso justifica os intervalos de dose regulares.'
    },
    pharmacokinetics: {
      text: 'Bem absorvida por via oral, com ou sem alimento. Amplamente distribuída, exceto no SNC (a menos que inflamado). Eliminação primariamente renal.',
      tooltip: 'A administração com alimentos pode melhorar a tolerância gastrointestinal. A eliminação renal justifica o ajuste de dose em pacientes com insuficiência renal grave.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções de pele/ITU', dose: '12.5–25 mg/kg', route: 'VO', interval: 'q12h', notes: 'Dose baseada na associação. Doses mais altas (22-25 mg/kg) para piodermite.' },
      { species: 'Cão/Gato', indication: 'Pneumonia Bacteriana', dose: '10–25 mg/kg', route: 'VO', interval: 'q8h', notes: 'Dose para cães: 20-25 mg/kg. Dose para gatos: 10-20 mg/kg.' }
    ],
    dilutionAndAdministration: {
        text: 'As formulações comerciais para uso veterinário são para administração exclusivamente oral (comprimidos ou suspensão). Não devem ser administradas por via parenteral (IV, IM, SC). Não requer diluição. Suspensões reconstituídas são estáveis por 10 dias.',
        tooltip: 'Existem formulações injetáveis de amoxicilina/clavulanato, mas não são as mesmas usadas para via oral e sua disponibilidade pode variar.'
    },
    contraindications: {
      text: 'Hipersensibilidade a β-lactâmicos. Não administrar oralmente a pequenos herbívoros (coelhos, porquinhos-da-índia) ou grandes animais (risco de enterotoxemia fatal).',
      tooltip: 'Em infecções recorrentes ou profundas, a terapia deve ser baseada em cultura e antibiograma para evitar resistência.'
    },
    adverseEffects: {
      text: 'Os efeitos mais comuns são gastrointestinais (vômito, diarreia, anorexia), mitigados com a administração junto com alimentos. Reações de hipersensibilidade são raras. O aumento da dose de clavulanato eleva a probabilidade de vômitos.',
      tooltip: 'O perfil de segurança é geralmente muito bom, tornando-o um antibiótico de primeira escolha em muitas situações.'
    },
    interactions: {
      text: 'O uso com antibióticos bacteriostáticos (ex: tetraciclinas) pode, teoricamente, antagonizar o efeito. O probenecide pode aumentar suas concentrações séricas.',
      tooltip: 'A relevância clínica da interação com bacteriostáticos é debatida, mas é uma consideração teórica.'
    },
    monitoring: {
      text: 'Monitoramento baseado na resolução dos sinais clínicos. Para ITUs recorrentes, uma urocultura de acompanhamento 5-7 dias após o término da terapia é recomendada. Teste de suscetibilidade (breakpoint CLSI) é ≤ 0,25/0,12 μg/mL para organismos comuns.',
      tooltip: 'Fontes: Plumb\'s 10th Ed., ISCAID Guidelines.'
    },
    evidence: {
      text: 'A eficácia para piodermite canina e ITU é bem estabelecida. Diretrizes da ISCAID recomendam como tratamento empírico de primeira linha para ITU esporádica.',
      tooltip: 'O cumprimento da duração do tratamento é fundamental para o sucesso e para evitar recidivas e o desenvolvimento de resistência.'
    }
  },
  {
    name: 'Ampicilina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Penicilina aminopenicilânica.',
    commercialNames: ['Polyflex®', 'Principen® (humano)', 'Ampicilina Calbos (veterinário)'],
    highlights: [
      'Penicilina injetável de amplo espectro.',
      'A absorção oral é inferior à da amoxicilina, sendo a via parenteral preferida.',
      'Susceptível à degradação por beta-lactamases bacterianas.',
      'A combinação com sulbactam (inibidor de beta-lactamase) aumenta muito sua eficácia.'
    ],
    clinicalIndications: { text: 'Tratamento de infecções suscetíveis. É frequentemente usada em combinação com sulbactam (parenteral) para infecções graves que oferecem risco de vida, como parte de um regime de amplo espectro com um aminoglicosídeo ou fluoroquinolona.' },
    mechanism: { text: 'Inibe a síntese da parede celular bacteriana ao se ligar às proteínas de ligação à penicilina (PBPs), resultando em lise bacteriana. É bactericida e tempo-dependente.' },
    pharmacokinetics: { text: 'Absorção oral de apenas 30-50%. Atinge altas concentrações na urina. Eliminada primariamente pelos rins. A formulação sódica contém 3 mEq de sódio por grama.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Ampicilina Sódica (Injetável)', dose: '20–30 mg/kg', route: 'IV, IM', interval: 'q6-8h', notes: 'Para infecções graves, até 50 mg/kg.' },
      { species: 'Cão/Gato', indication: 'Ampicilina Tri-hidratada (Oral)', dose: '11–22 mg/kg', route: 'VO', interval: 'q8-12h', notes: 'Menos eficaz que a amoxicilina oral.' },
      { species: 'Cão/Gato', indication: 'Ampicilina + Sulbactam', dose: '20 mg/kg (da combinação)', route: 'IV, IM', interval: 'q8h', notes: 'Oferece cobertura contra bactérias produtoras de beta-lactamase. Atividade semelhante à amoxicilina-clavulanato.' }
    ],
    contraindications: { text: 'Hipersensibilidade conhecida às penicilinas. Usar com cautela em pacientes com restrição de sódio ou disfunção renal (devido ao conteúdo de sódio).' },
    adverseEffects: { text: 'Reações de hipersensibilidade (urticária, anafilaxia) são o risco mais sério. Distúrbios gastrointestinais podem ocorrer.' },
    interactions: { text: 'Não misturar em frascos de outros medicamentos. O uso com antibióticos bacteriostáticos (ex: tetraciclinas) pode antagonizar seu efeito.' },
    monitoring: { text: 'Monitorar a resposta clínica e a ocorrência de reações alérgicas.' },
    evidence: { text: 'Um antibiótico estabelecido. A combinação com sulbactam é um regime recomendado para infecções bacterianas graves e tem atividade semelhante à da amoxicilina-clavulanato, mas em formulação de uso intravenoso.' }
  },
  {
    name: 'Apomorfina',
    sector: 'Emergência e Toxicologia',
    class: 'Emético; Agonista dopaminérgico.',
    commercialNames: ['Apometic®'],
    highlights: [
      'Agente emético de escolha para indução de vômito em cães.',
      'Ação rápida e confiável quando administrada por via parenteral ou conjuntival.',
      'Não é eficaz em gatos e pode causar excitação no SNC.'
    ],
    clinicalIndications: { text: 'Indução de êmese em cães após a ingestão de toxinas ou corpos estranhos.' },
    mechanism: { text: 'Estimula diretamente a zona quimiorreceptora de gatilho (ZQG) no cérebro através da ativação de receptores de dopamina D2.' },
    pharmacokinetics: { text: 'Início de ação rápido (2-10 minutos). A duração do efeito é curta.' },
    doses: [
      { species: 'Cão', indication: 'Indução de Êmese', dose: '0.03 mg/kg IV ou 0.04 mg/kg IM', route: 'IV, IM', interval: 'Dose única', notes: 'A via conjuntival (comprimido) também é eficaz, mas a dose é menos precisa.' }
    ],
    contraindications: { text: 'Não usar em gatos. Não usar em pacientes com depressão do SNC, convulsões, hipóxia ou que tenham ingerido substâncias cáusticas, hidrocarbonetos ou objetos cortantes.' },
    adverseEffects: { text: 'Êmese prolongada, sedação, letargia. Excitação pode ocorrer.' },
    interactions: { text: 'Os efeitos podem ser antagonizados por antagonistas da dopamina, como metoclopramida ou fenotiazínicos (acepromazina).' },
    monitoring: { text: 'Monitorar o paciente para garantir que a êmese ocorra e cesse. Avaliar o estado de hidratação.' },
    evidence: { text: 'Agente emético mais eficaz e confiável para cães na prática clínica.' }
  },
  {
    name: 'Atenolol',
    sector: 'Bulário Principal',
    class: 'Antiarrítmico (Classe II); Betabloqueador β1-seletivo.',
    commercialNames: ['Atenolol (genérico)', 'Tenormin', 'Atenol® (humano)'],
    highlights: [
      'Betabloqueador de escolha para cardiomiopatia hipertrófica (CMH) em gatos.',
      'Efeito cronotrópico negativo (reduz a frequência cardíaca) e inotrópico negativo (reduz a força de contração).',
      'Aumenta o tempo de enchimento diastólico, melhorando a perfusão coronariana.',
      'Hidrofílico, com menor penetração no SNC e menor risco de efeitos adversos neurológicos.',
      'A descontinuação deve ser gradual para evitar taquicardia de rebote.'
    ],
    clinicalIndications: {
      text: 'Tratamento da cardiomiopatia hipertrófica (CMH) em gatos, especialmente com obstrução da via de saída do ventrículo esquerdo (HOCM). Manejo de taquiarritmias supraventriculares, hipertensão sistêmica (especialmente induzida por hipertireoidismo) e cardiopatia hipertireoidiana.',
      tooltip: 'Seu objetivo na CMH é aliviar a obstrução dinâmica da via de saída e melhorar o enchimento ventricular, reduzindo o consumo de oxigênio pelo miocárdio.'
    },
    mechanism: {
      text: 'Bloqueador competitivo e seletivo dos receptores β1-adrenérgicos. Reduz a frequência cardíaca, a contratilidade miocárdica e a condução AV. Diminui o consumo de oxigênio pelo miocárdio.',
      tooltip: 'Sua seletividade pelo receptor β1 é relativa e pode ser perdida em doses altas, levando ao bloqueio de receptores β2 e risco de broncoconstrição.'
    },
    pharmacokinetics: {
      text: 'Absorção oral incompleta (~50%). Não sofre metabolismo hepático significativo, sendo excretado primariamente inalterado pelos rins. Requer ajuste de dose em insuficiência renal.',
      tooltip: 'A eliminação renal o torna uma escolha que requer monitoramento cuidadoso em gatos com DRC, uma comorbidade comum.'
    },
    doses: [
      { species: 'Gato', indication: 'CMH / Hipertensão', dose: '6.25–12.5 mg (total/gato)', route: 'VO', interval: 'q12-24h', notes: 'Iniciar com dose baixa e titular para o efeito desejado.' },
      { species: 'Cão', indication: 'Taquiarritmias Supraventriculares', dose: '0.25–1.0 mg/kg', route: 'VO', interval: 'q12h', notes: 'Uso menos comum que em gatos.' }
    ],
    dilutionAndAdministration: {
        text: 'A administração na prática veterinária é quase exclusivamente oral. Não requer diluição. Uma formulação injetável existe para uso humano em emergências (ex: infarto do miocárdio), mas não é de uso rotineiro em animais.',
        tooltip: 'A titulação cuidadosa da dose oral é a chave para o uso seguro e eficaz do atenolol.'
    },
    contraindications: {
      text: 'Contraindicado em insuficiência cardíaca congestiva descompensada, bradicardia sinusal severa, bloqueio AV de alto grau e asma brônquica (risco de broncoconstrição). Conhecido por ser teratógeno.',
      tooltip: 'NUNCA administrar em um paciente com ICC aguda e edema pulmonar. A função inotrópica negativa pode ser fatal.'
    },
    adverseEffects: {
      text: 'Bradicardia, letargia, hipotensão, síncope e piora da insuficiência cardíaca. Broncoconstrição é um risco, apesar da seletividade β1.',
      tooltip: 'A descontinuação abrupta pode causar uma "supersensibilidade" aos receptores beta, resultando em taquicardia e hipertensão de rebote.'
    },
    interactions: {
      text: 'Efeitos aditivos com outros fármacos que deprimem a função cardíaca (ex: bloqueadores de canal de cálcio como o diltiazem). Pode potencializar a ação da digoxina na condução do nodo AV. AINEs podem reduzir seu efeito anti-hipertensivo.',
      tooltip: 'A combinação com diltiazem requer monitoramento cuidadoso da frequência cardíaca e pressão arterial.'
    },
    monitoring: {
      text: 'Monitorar frequência cardíaca, pressão arterial e sinais de intolerância (letargia, fraqueza). Ecocardiograma para avaliar a resposta ao tratamento.',
      tooltip: 'Fontes: Plumb\'s 10th Ed., ACVIM Consensus Guidelines.'
    },
    evidence: {
      text: 'Embora seja o tratamento padrão para CMH felina por décadas, evidências recentes questionam seu benefício na sobrevida ou prevenção de ICC em gatos pré-clínicos. Continua sendo útil para o controle de sinais em gatos sintomáticos.',
      tooltip: 'O estudo REVEAL mostrou que o atenolol não atrasou o tempo para o desfecho primário composto (ICC, TEA ou morte cardíaca).'
    }
  },
  {
    name: 'Atipamezol',
    sector: 'Analgésicos e Anestésicos',
    class: 'Antagonista α2-adrenérgico; Agente de reversão.',
    commercialNames: ['Antisedan®', 'Atipam®', 'Revertor®'],
    highlights: [
      'Antagonista específico para reverter os efeitos sedativos e cardiovasculares dos agonistas α2 (medetomidina, dexmedetomidina, xilazina).',
      'Causa uma reversão rápida e suave da sedação.',
      'A dose é baseada na dose do agonista α2 administrado anteriormente.'
    ],
    clinicalIndications: { text: 'Reversão da sedação e outros efeitos causados por agonistas alfa-2 adrenérgicos em cães e gatos.' },
    mechanism: { text: 'Antagonista potente e seletivo dos receptores α2-adrenérgicos, deslocando competitivamente os agonistas α2 de seus sítios de ligação e revertendo seus efeitos no SNC e no sistema cardiovascular.' },
    pharmacokinetics: { text: 'Absorção rápida após administração IM. O início da reversão ocorre em 5-10 minutos.' },
    doses: [
      { species: 'Cão', indication: 'Reversão de (Dex)medetomidina', dose: 'Volume equal a 5-10 vezes o volume de (dex)medetomidina administrado.', route: 'IM', interval: 'Dose única', notes: 'A dose em µg é 5-10 vezes a dose do agonista. Ex: reverter 10 µg/kg de dexmedetomidina com 50-100 µg/kg de atipamezol.' },
      { species: 'Gato', indication: 'Reversão de (Dex)medetomidina', dose: 'Volume equal a 2.5-5 vezes o volume de (dex)medetomidina administrado.', route: 'IM', interval: 'Dose única', notes: 'A dose em µg é 2.5-5 vezes a dose do agonista.' }
    ],
    contraindications: { text: 'Não há contraindicações absolutas, mas a reversão deve ser feita com cautela, pois o paciente pode despertar rapidamente e a analgesia do agonista α2 também será revertida.' },
    adverseEffects: { text: 'Reversão muito rápida pode causar excitação, taquicardia e hipotensão ou hipertensão transitórias. Vômito e diarreia podem ocorrer.' },
    interactions: { text: 'Reverte especificamente os efeitos dos agonistas α2.' },
    monitoring: { text: 'Monitorar o paciente durante a recuperação para garantir que seja suave e segura. Avaliar a necessidade de analgesia adicional.' },
    evidence: { text: 'Ferramenta essencial para o uso seguro de agonistas α2 na prática veterinária, permitindo uma recuperação mais rápida e controlada.' }
  },
  {
    name: 'Atropina',
    sector: 'Emergência e Anestesia',
    class: 'Anticolinérgico; Midriático.',
    commercialNames: ['Atrocare® (veterinário)', 'Atropina (genérico)'],
    highlights: [
      'Aumenta a frequência cardíaca e é usada para tratar bradicardia sinusal ou bloqueio AV.',
      'Reduz secreções salivares e respiratórias.',
      'Como colírio, causa midríase (dilatação da pupila) e cicloplegia (paralisia do músculo ciliar).',
      'Antídoto para intoxicações colinérgicas.'
    ],
    clinicalIndications: { text: 'Tratamento de bradicardia sinusal ou de escape hemodinamicamente significativa (ex: por reflexo vagal ou overdose de opioides). Prevenção de bradicardia induzida por cetamina. Antídoto para intoxicação por organofosforados e carbamatos. Uso como colírio para fins diagnósticos ou terapêuticos (uveíte).' },
    mechanism: { text: 'Antagonista competitivo e não seletivo dos receptores muscarínicos de acetilcolina. Bloqueia os efeitos do nervo vago no coração, resultando em aumento da frequência cardíaca.' },
    pharmacokinetics: { text: 'Início de ação rápido quando administrada IV. Meia-vida curta. Metabolizada no fígado.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Bradicardia', dose: '0.02–0.04 mg/kg', route: 'IV, IM, SC', interval: 'Conforme necessário', notes: 'Titular para o efeito desejado.' },
      { species: 'Cão/Gato', indication: 'Uso Oftálmico (1% colírio)', dose: '1 gota no olho afetado', route: 'Oftálmico', interval: 'q6-24h', notes: 'Para tratamento de uveíte. Pode ser usado com maior frequência (a cada 30-120 min) para terapia intensiva de curto prazo.' }
    ],
    contraindications: { text: 'Taquicardia preexistente, glaucoma (uso oftálmico), certas doenças cardíacas onde o aumento da frequência cardíaca seria deletério.' },
    adverseEffects: { text: 'Taquicardia, secura da boca, íleo paralítico, retenção urinária. O uso oftálmico pode causar irritação local e salivação em gatos devido ao sabor amargo.' },
    interactions: { text: 'Efeitos aditivos com outros fármacos anticolinérgicos (ex: anti-histamínicos). Reduz a ação da cisaprida.' },
    monitoring: { text: 'Monitoramento contínuo da frequência e ritmo cardíaco (ECG) quando usada para tratar bradicardia.' },
    evidence: { text: 'Fármaco de emergência padrão para o tratamento da bradicardia vagalmente mediada. Sua eficácia para miose e espasmo ciliar é bem estabelecida.' }
  },
  {
    name: 'Atropina + Pralidoxima (2-PAM)',
    sector: 'Emergência e Toxicologia',
    class: 'Antídoto; Reativador da colinesterase.',
    commercialNames: ['Protopam® (humano)'],
    highlights: ['Antídoto específico para intoxicação por organofosforados.', 'Deve ser administrado o mais rápido possível após a exposição.', 'Funciona em conjunto com a atropina para reverter os sinais nicotínicos e muscarínicos.'],
    clinicalIndications: { text: 'Tratamento da toxicidade por pesticidas organofosforados.' },
    mechanism: { text: 'A pralidoxima (2-PAM) reativa a acetilcolinesterase que foi inibida pelos organofosforados, quebrando a ligação fósforo-enzima. Isso só é eficaz se a ligação não tiver se tornado permanente ("envelhecimento"). A atropina é coadministrada para controlar os efeitos muscarínicos agudos (bradicardia, salivação).' },
    pharmacokinetics: { text: 'Administrada por via parenteral. Eliminada pelos rins.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Intoxicação por Organofosforado', dose: '20 mg/kg', route: 'IV (lento), IM, SC', interval: 'q12h por 2-3 doses', notes: 'Administrar após a estabilização inicial com atropina.' }
    ],
    contraindications: { text: 'Não é eficaz para intoxicação por carbamatos (a inibição é reversível e o 2-PAM não é necessário) ou após o "envelhecimento" da enzima.' },
    adverseEffects: { text: 'A administração IV rápida pode causar taquicardia, rigidez muscular e parada respiratória.' },
    interactions: { text: 'Nenhuma interação significativa é esperada no contexto de seu uso como antídoto.' },
    monitoring: { text: 'Monitorar a resolução dos sinais muscarínicos e nicotínicos (fraqueza muscular, tremores) de intoxicação.' },
    evidence: { text: 'Tratamento padrão e potencialmente salvador de vidas para intoxicação por organofosforados, quando administrado precocemente.' }
  },
  {
    name: 'Azatioprina',
    sector: 'Imunossupressores',
    class: 'Imunossupressor; Antimetabólito.',
    commercialNames: ['Imuran® (humano)'],
    highlights: [
      'Agente imunossupressor usado para tratar doenças imunomediadas.',
      'Frequentemente usado como um agente "poupador de corticoide".',
      'Gatos são muito sensíveis à mielossupressão; usar com extrema cautela.',
      'O início de ação é lento (semanas).'
    ],
    clinicalIndications: { text: 'Tratamento de doenças imunomediadas como anemia hemolítica imunomediada (AHIM), trombocitopenia imunomediada (TIM), poliartrite imunomediada e doença inflamatória intestinal (DII) grave.' },
    mechanism: { text: 'É um pró-fármaco convertido em 6-mercaptopurina, que interfere na síntese de purinas. Isso inibe a proliferação de linfócitos, suprimindo a resposta imune celular e humoral.' },
    pharmacokinetics: { text: 'Metabolismo hepático. O início do efeito clínico pode levar de 3 a 6 semanas.' },
    doses: [
      { species: 'Cão', indication: 'Imunossupressão', dose: '2 mg/kg', route: 'VO', interval: 'q24h, depois q48h', notes: 'Iniciar diariamente e reduzir a frequência após a remissão.' },
      { species: 'Gato', indication: 'Imunossupressão', dose: '0.3 mg/kg', route: 'VO', interval: 'q48-72h', notes: 'EXTREMA CAUTELA. Gatos têm deficiência de TPMT, enzima que metaboliza o fármaco, aumentando o risco de toxicidade.' }
    ],
    contraindications: { text: 'Não usar em gatos, exceto como último recurso e com monitoramento intensivo. Contraindicado em pacientes com supressão da medula óssea. Não usar com alopurinol. Não administrar a animais de produção.' },
    adverseEffects: { text: 'Supressão da medula óssea (neutropenia, trombocitopenia) é o efeito adverso mais grave. Hepatotoxicidade, pancreatite e distúrbios gastrointestinais também podem ocorrer.' },
    interactions: { text: 'O alopurinol inibe a xantina oxidase, uma enzima que metaboliza a azatioprina, levando a um risco aumentado de toxicidade grave. A coadministração é contraindicada. Risco aumentado de mielossupressão com outros agentes citotóxicos.' },
    monitoring: { text: 'Hemograma completo deve ser monitorado semanalmente no início do tratamento (primeiras 2 semanas são essenciais), depois mensalmente. Painel bioquímico (enzimas hepáticas) também deve ser monitorado regularmente.' },
    evidence: { text: 'Um imunossupressor de segunda linha bem estabelecido, eficaz para muitas doenças imunomediadas, permitindo a redução da dose de corticosteroides. O uso em veterinária é baseado em consensos e extrapolações, sem estudos clínicos controlados.' }
  },
  {
    name: 'Azitromicina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Macrolídeo (Azalídeo).',
    commercialNames: ['Zithromax® (humano)', 'Aziplus® (veterinário)'],
    highlights: [
      'Boa atividade contra patógenos intracelulares e respiratórios.',
      'Meia-vida muito longa permite dosagem intermitente.',
      'Geralmente melhor tolerada que a eritromicina.',
      'Possui propriedades anti-inflamatórias.'
    ],
    clinicalIndications: { text: 'Infecções do trato respiratório superior em gatos (ex: por Chlamydophila, Mycoplasma), piodermite estafilocócica em cães e tratamento de infecções por protozoários (Criptosporidiose, Toxoplasmose em combinação com outros agentes).' },
    mechanism: { text: 'Inibe a síntese de proteínas bacterianas ao se ligar à subunidade ribossômica 50S. Acumula-se em altas concentrações dentro dos fagócitos, o que facilita sua entrega aos locais de infecção.' },
    pharmacokinetics: { text: 'Meia-vida plasmática longa: ~35 horas em gatos e ~30 horas em cães. Volume de distribuição extenso, excedendo 10 L/kg, concentrando-se nos tecidos.' },
    doses: [
      { species: 'Cão', indication: 'Piodermite/Infecções', dose: '5–10 mg/kg', route: 'VO', interval: 'q24h', notes: 'Pode ser administrada no primeiro dia, com doses subsequentes a cada 48h em alguns protocolos.' },
      { species: 'Gato', indication: 'Infecção Respiratória Superior', dose: '5–10 mg/kg', route: 'VO', interval: 'q24h por 5-7 dias', notes: 'Pode ser administrado em dias alternados ou a cada 72h após o curso inicial.' }
    ],
    contraindications: { text: 'Usar com cautela em pacientes com doença hepática grave ou histórico de vômito. A solução IV não deve ser administrada em bolus.' },
    adverseEffects: { text: 'Distúrbios gastrointestinais (vômito, diarreia) são os efeitos adversos mais comuns. Em equinos, pode causar diarreia grave.' },
    interactions: { text: 'Inibe menos o citocromo P450 do que a eritromicina, mas ainda pode aumentar os níveis de fármacos como a ciclosporina e a digoxina.' },
    monitoring: { text: 'Monitoramento clínico da resposta à terapia e observação de sinais gastrointestinais.' },
    evidence: { text: 'Eficaz para infecções respiratórias felinas e como alternativa para piodermites caninas. Estudos em gatos com Chlamydophila demonstraram redução dos sinais clínicos. Seu uso deve ser criterioso para evitar resistência.' }
  },
  {
    name: 'Aztreonam',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Monobactâmico.',
    commercialNames: [],
    highlights: ['Informações detalhadas não fornecidas para este fármaco.'],
    clinicalIndications: { text: 'Informações detalhadas sobre indicações clínicas não foram fornecidas.' },
    mechanism: { text: 'Informações detalhadas sobre o mecanismo de ação não foram fornecidas.' },
    pharmacokinetics: { text: 'Informações detalhadas sobre a farmacocinética não foram fornecidas.' },
    doses: [],
    contraindications: { text: 'Informações detalhadas sobre contraindicações não foram fornecidas.' },
    adverseEffects: { text: 'Informações detalhadas sobre efeitos adversos não foram fornecidas.' },
    interactions: { text: 'Informações detalhadas sobre interações medicamentosas não foram fornecidas.' },
    monitoring: { text: 'Informações detalhadas sobre monitoramento não foram fornecidas.' },
    evidence: { text: 'Informações detalhadas sobre evidências de eficácia não foram fornecidas.' }
  },
  {
    name: 'Benazepril',
    sector: 'Bulário Principal',
    class: 'Anti-hipertensivo; Inibidor da Enzima Conversora de Angiotensina (iECA).',
    commercialNames: ['Fortekor® (veterinário)', 'Benazepril (genérico)', 'Benazecare®', 'Cardalis® (associação)'],
    highlights: [
      'Fármaco de primeira linha no manejo da insuficiência cardíaca congestiva (ICC) em cães.',
      'Reduz a proteinúria em cães e gatos com doença renal crônica (DRC).',
      'Bem tolerado, com baixa incidência de efeitos adversos.',
      'Possui eliminação dupla (renal e biliar), tornando-o uma escolha segura em pacientes com insuficiência renal.',
      'Modula o sistema renina-angiotensina-aldosterona (SRAA).'
    ],
    clinicalIndications: {
      text: 'Tratamento da insuficiência cardíaca congestiva (ICC) em cães. Redução da proteinúria associada à doença renal crônica (DRC) em cães e gatos.',
      tooltip: 'Sua principal indicação é no tratamento de condições que ativam cronicamente o SRAA, como a doença mixomatosa da valva mitral e a glomerulonefrite.'
    },
    mechanism: {
      text: 'Inibe competitivamente a enzima conversora de angiotensina (ECA), bloqueando a conversão de angiotensina I em angiotensina II. A angiotensina II é um potente vasoconstritor e estimula a secreção de aldosterona. O resultado é a vasodilatação arteriolar e venosa (reduzindo pré e pós-carga) e a diminuição da retenção de sódio e água.',
      tooltip: 'Ao reduzir os níveis de angiotensina II no glomérulo renal, os iECA diminuem a pressão de filtração e, consequentemente, a proteinúria.'
    },
    pharmacokinetics: {
      text: 'Bem absorvido por via oral. O benazepril (pró-fármaco) é rapidamente convertido em seu metabólito ativo, o benazeprilato. Possui eliminação dupla (renal e biliar), tornando-o teoricamente mais seguro que outros iECAs (como o enalapril) em pacientes com insuficiência renal. A duração da ação é de 16-24 horas.',
      tooltip: 'A eliminação biliar parcial faz com que o acúmulo do fármaco seja menos provável em pacientes com função renal comprometida.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'ICC / DRC', dose: '0.25–0.5 mg/kg', route: 'VO', interval: 'q24h', notes: 'Pode ser administrado com ou sem alimento. Estudos não mostraram benefício em doses > 0.5-1 mg/kg/dia.' },
    ],
    dilutionAndAdministration: {
        text: 'O benazepril é formulado para administração exclusivamente oral. Não é utilizado por via parenteral. Não requer diluição.',
        tooltip: 'O enalaprilato, o metabólito ativo do enalapril (outro iECA), existe em formulação injetável, mas seu uso é raro na prática veterinária.'
    },
    contraindications: {
      text: 'Contraindicado em casos de hipotensão, hipovolemia ou insuficiência renal aguda. É teratógeno, não devendo ser usado durante a gestação. Cautela em estenose aórtica ou mitral.',
      tooltip: 'A administração em um paciente desidratado pode precipitar uma crise renal aguda.'
    },
    adverseEffects: {
      text: 'Geralmente bem tolerado. Os efeitos adversos mais comuns são hipotensão, letargia e anorexia. Hipercalemia é rara, mas possível. Pode ocorrer um pequeno aumento na creatinina após o início da terapia (considerado aceitável se <30%).',
      tooltip: 'O pequeno aumento na creatinina reflete a alteração hemodinâmica no rim e geralmente se estabiliza.'
    },
    interactions: {
      text: 'Risco aumentado de hipotensão e hipercalemia quando usado com diuréticos poupadores de potássio (espironolactona). AINEs podem antagonizar seus efeitos benéficos e aumentar o risco de nefrotoxicidade.',
      tooltip: 'A combinação de AINEs e iECA deve ser evitada ou rigorosamente monitorada em pacientes de risco.'
    },
    monitoring: {
      text: 'Monitorar pressão arterial, função renal (ureia, creatinina) e eletrólitos (potássio) 3-7 dias após o início da terapia e após qualquer ajuste de dose.',
      tooltip: 'Fontes: Plumb\'s 10th Ed., ACVIM Consensus Guidelines.'
    },
    evidence: {
      text: 'Eficácia bem estabelecida para o tratamento da ICC e proteinúria, com doses aprovadas na Europa e Canadá. A dupla via de excreção é uma vantagem teórica em pacientes renais.',
      tooltip: 'É um pilar na terapia multimodal da doença cardíaca e renal crônica.'
    }
  },
  {
    name: 'Betanecol',
    sector: 'Sistema Urinário',
    class: 'Colinérgico; Agonista muscarínico.',
    commercialNames: ['Urecholine® (humano)', 'Myotonine®'],
    highlights: [
      'Usado para estimular a contração da bexiga urinária.',
      'Tratamento para atonia do músculo detrusor.',
      'Não usar se houver obstrução urinária.'
    ],
    clinicalIndications: { text: 'Tratamento da retenção urinária causada pela atonia do músculo detrusor da bexiga ("bexiga flácida"), frequentemente observada após lesões na medula espinhal ou superdistensão vesical.' },
    mechanism: { text: 'Agonista colinérgico que atua seletivamente nos receptores muscarínicos da bexiga e do trato gastrointestinal, estimulando a contração do músculo liso detrusor e aumentando a pressão de micção.' },
    pharmacokinetics: { text: 'Pouco absorvido sistemicamente. O início da ação ocorre em 30-90 minutos.' },
    doses: [
      { species: 'Cão', indication: 'Atonia do Detrusor', dose: '0.2 mg/kg', route: 'VO', interval: 'q8-12h', notes: 'Iniciar com dose baixa e titular. Administrar com estômago vazio.' },
      { species: 'Gato', indication: 'Atonia do Detrusor', dose: '0.5–1.25 mg (total por gato)', route: 'VO', interval: 'q8-12h', notes: 'Iniciar com dose baixa.' }
    ],
    contraindications: { text: 'Contraindicado na presença de obstrução do trato urinário ou gastrointestinal. Usar com cautela em pacientes com asma ou hipertiroidismo.' },
    adverseEffects: { text: 'Salivação, vômito, diarreia, bradicardia. Os efeitos são relacionados à estimulação colinérgica.' },
    interactions: { text: 'Efeitos aditivos com outros fármacos colinérgicos, antifúngicos azólicos e antibióticos macrolídeos. Usar com cautela.' },
    monitoring: { text: 'Monitorar a capacidade do paciente de urinar e observar a ocorrência de efeitos adversos colinérgicos.' },
    evidence: { text: 'Fármaco eficaz para restaurar a função da bexiga em casos de atonia do detrusor, desde que não haja obstrução.' }
  },
  {
    name: 'Bicarbonato de Sódio',
    sector: 'Emergência e Metabologia',
    class: 'Agente alcalinizante.',
    commercialNames: ['Bicarbonato de Sódio', 'Soda Mint'],
    highlights: [
      'Usado para corrigir acidose metabólica grave.',
      'A administração deve ser cuidadosa para evitar super-correção (alcalose).',
      'Pode ser usado para alcalinizar a urina.'
    ],
    clinicalIndications: { text: 'Tratamento da acidose metabólica severa (ex: em cetoacidose diabética, insuficiência renal, intoxicações). Alcalinização da urina para prevenir a formação de certos tipos de urólitos (ex: urato, cistina).' },
    mechanism: { text: 'Dissocia-se para fornecer íons bicarbonato (HCO3-), que tamponam o excesso de íons hidrogênio (H+), aumentando o pH do sangue e da urina.' },
    pharmacokinetics: { text: 'Atua rapidamente quando administrado IV. O excesso é excretado pelos rins.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Acidose Metabólica Grave', dose: 'Dose (mEq) = 0.3 x Peso (kg) x Déficit de Base (mEq/L)', route: 'IV (lento)', interval: 'Dose única', notes: 'Administrar 1/4 a 1/2 da dose calculada lentamente e reavaliar o status ácido-básico. Não corrigir o pH acima de 7.2.' }
    ],
    contraindications: { text: 'Alcalose metabólica ou respiratória, hipocalcemia (alcalose piora a hipocalcemia), hipoventilação.' },
    adverseEffects: { text: 'Alcalose metabólica iatrogênica, hipernatremia, sobrecarga de volume, hipokalemia, tetania hipocalcêmica. A administração rápida pode causar arritmias.' },
    interactions: { text: 'Inativa catecolaminas (dopamina, epinefrina) e não deve ser misturado na mesma linha IV. Altera a excreção de vários fármacos dependendo do pH urinário.' },
    monitoring: { text: 'Monitoramento seriado de gases sanguíneos e eletrólitos é essencial.' },
    evidence: { text: 'Seu uso na acidose lática é controverso. É mais indicado para acidoses com perda de bicarbonato. A terapia deve ser guiada por gasometria.' }
  },
  {
    name: 'Brometo de Potássio (KBr)',
    sector: 'Neurologia',
    class: 'Anticonvulsivante.',
    commercialNames: ['KBr (manipulado)', 'Libromide'],
    highlights: [
      'Anticonvulsivante eficaz, especialmente como terapia adjuvante para epilepsia refratária em cães.',
      'Meia-vida extremamente longa (semanas) requer uma dose de ataque para atingir níveis terapêuticos rapidamente.',
      'Eliminado pelos rins; a dieta rica em cloreto (sal) acelera sua eliminação.'
    ],
    clinicalIndications: { text: 'Tratamento da epilepsia idiopática em cães, geralmente em combinação com o fenobarbital ou outros anticonvulsivantes quando as convulsões não são bem controladas.' },
    mechanism: { text: 'O íon brometo compete com o íon cloreto para entrar nos neurônios através dos canais de cloreto. Isso hiperpolariza a membrana neuronal, tornando-a menos excitável e aumentando o limiar convulsivo.' },
    pharmacokinetics: { text: 'Absorção oral em cães é de 46%. Não é biotransformado; é eliminado pelos rins. Meia-vida: 11 dias em gatos, e varia de 25 a 46 dias em cães.' },
    doses: [
      { species: 'Cão', indication: 'Manutenção', dose: '20–40 mg/kg', route: 'VO', interval: 'q24h', notes: 'Ajustar com base nos níveis séricos. Faixa terapêutica: 1-3 mg/mL (10-30 mmol/L).' },
      { species: 'Cão', indication: 'Dose de Ataque (Oral)', dose: '400–600 mg/kg divididos em 3-5 dias', route: 'VO', interval: 'Dividido', notes: 'Pode causar sedação intensa e vômito. Administrar com alimento.' },
      { species: 'Gato', indication: 'Manutenção', dose: '20–30 mg/kg', route: 'VO', interval: 'q24h', notes: 'USO CONTROVERSO. Alto risco de pneumonite asmática.' }
    ],
    contraindications: { text: 'Usar com extrema cautela em pacientes com insuficiência renal. O uso em gatos é controverso e associado a um alto risco de pneumonite asmática. Não administrar a animais de produção.' },
    adverseEffects: { text: 'Sedação, ataxia, poliúria, polidipsia, polifagia são comuns, especialmente no início. Vômito pode ocorrer. "Bromismo" (toxicidade) manifesta-se com sedação profunda, fraqueza e ataxia.' },
    interactions: { text: 'A ingestão de cloreto (sal) afeta diretamente a excreção de brometo. Dietas com alto teor de cloreto diminuirão os níveis de brometo, enquanto dietas com baixo teor os aumentarão. Fluidoterapia com NaCl 0.9% pode reduzir drasticamente os níveis séricos.' },
    monitoring: { text: 'Monitoramento dos níveis séricos de brometo 1-3 meses após o início da terapia de manutenção ou 1 semana após a dose de ataque. Monitorar a função renal e eletrólitos.' },
    evidence: { text: 'Anticonvulsivante de eficácia comprovada, sendo uma excelente opção adjuvante para o controle de convulsões em cães.' }
  },
  {
    name: 'Buprenorfina',
    sector: 'Analgésicos e Anestésicos',
    class: 'Analgésico opioide; Agonista parcial µ.',
    commercialNames: ['Bupaq®', 'Vetergesic®', 'Buprenex®', 'Buprecare®', 'Buprenodale®', 'Buprevet®'],
    highlights: [
      'Analgésico para dor leve a moderada.',
      'Possui "efeito teto", onde o aumento da dose não aumenta a analgesia, mas prolonga a duração.',
      'Excelente absorção transmucosa oral (OTM) em gatos, facilitando a administração.',
      'Longa duração de ação (6-8 horas).'
    ],
    clinicalIndications: { text: 'Manejo da dor aguda e pós-operatória de intensidade leve a moderada em cães e gatos. Pode ser usada como parte de um protocolo de pré-medicação anestésica.' },
    mechanism: { text: 'Agonista parcial do receptor opioide µ com alta afinidade. Liga-se fortemente ao receptor, deslocando outros agonistas (como morfina), mas produzindo uma resposta submáxima. Também é um antagonista do receptor κ.' },
    pharmacokinetics: { text: 'Sofre extenso metabolismo de primeira passagem, por isso a via oral não é eficaz. A via transmucosa oral em gatos contorna esse metabolismo, oferecendo boa biodisponibilidade.' },
    doses: [
      { species: 'Cão', indication: 'Analgesia', dose: '0.01–0.03 mg/kg', route: 'IV, IM, SC', interval: 'q6-8h', notes: '' },
      { species: 'Gato', indication: 'Analgesia', dose: '0.01–0.03 mg/kg', route: 'IV, IM, SC, OTM', interval: 'q6-8h', notes: 'A via OTM (na gengiva/bochecha) é muito eficaz e menos estressante.' }
    ],
    contraindications: { text: 'A reversão com naloxona pode ser difícil devido à alta afinidade da buprenorfina pelo receptor µ. Não administrar a animais de produção.' },
    adverseEffects: { text: 'Depressão respiratória é menos pronunciada do que com agonistas puros. Sedação é comum. Euforia ou disforia pode ser vista em gatos.' },
    interactions: { text: 'Efeitos sedativos aditivos com outros depressores do SNC (acepromazina, benzodiazepínicos).' },
    monitoring: { text: 'Avaliar o nível de dor e observar a adequação da analgesia. Monitorar a frequência respiratória e o nível de sedação.' },
    evidence: { text: 'Analgésico muito popular e eficaz para dor leve a moderada em pequenos animais, especialmente em gatos, devido à sua facilidade de administração e perfil de segurança favorável.' }
  },
  {
    name: 'Butorfanol',
    sector: 'Analgésicos e Anestésicos',
    class: 'Analgésico opioide; Agonista-antagonista (agonista κ, antagonista µ).',
    commercialNames: ['Torbugesic®', 'Torbutrol®', 'Alvegesic®', 'Dolorex®', 'Torphasol®'],
    highlights: [
      'Proporciona analgesia visceral leve e sedação.',
      'Antitussígeno potente.',
      'Curta duração de ação (1-4 horas).',
      'Antagoniza os efeitos dos agonistas µ (morfina, fentanil).'
    ],
    clinicalIndications: { text: 'Manejo da dor visceral leve, sedação (frequentemente em combinação com outros fármacos como acepromazina ou dexmedetomidina) e supressão da tosse em cães.' },
    mechanism: { text: 'Agonista dos receptores opioides kappa (κ), o que medeia a analgesia e a sedação. Antagonista dos receptores opioides mu (µ), o que limita seu potencial analgésico, mas permite que reverta parcialmente os efeitos de agonistas µ.' },
    pharmacokinetics: { text: 'Início de ação rápido. Curta meia-vida, o que requer dosagem frequente para analgesia contínua.' },
    doses: [
      { species: 'Cão', indication: 'Analgesia/Sedação', dose: '0.1–0.4 mg/kg', route: 'IV, IM, SC', interval: 'q2-4h', notes: 'Para analgesia, a duração é curta.' },
      { species: 'Cão', indication: 'Antitussígeno', dose: '0.55 mg/kg', route: 'VO', interval: 'q6-12h', notes: '' },
      { species: 'Gato', indication: 'Analgesia/Sedação', dose: '0.2–0.4 mg/kg', route: 'IV, IM, SC', interval: 'q3-4h', notes: '' }
    ],
    contraindications: { text: 'Não deve ser usado para dor moderada a severa devido à sua eficácia analgésica limitada. Não administrar a animais de produção.' },
    adverseEffects: { text: 'Sedação é o efeito mais comum. Depressão respiratória é mínima. Disforia pode ocorrer.' },
    interactions: { text: 'Efeitos sedativos aditivos com outros depressores do SNC. Não administrar com agonistas µ puros, pois pode antagonizar sua analgesia.' },
    monitoring: { text: 'Monitorar o nível de sedação e a resposta analgésica.' },
    evidence: { text: 'Fármaco útil para sedação e analgesia visceral leve. Sua curta duração de ação o torna menos ideal para o manejo da dor pós-operatória significativa, a menos que usado em CRI.' }
  },
  {
    name: 'Calcitriol',
    sector: 'Endocrinologia',
    class: 'Hormônio; Forma ativa da Vitamina D.',
    commercialNames: ['Rocaltrol® (humano)', 'Alfacalcidol® (pró-droga)'],
    highlights: [
      'Usado no manejo da doença renal crônica para suprimir o hiperparatireoidismo secundário renal.',
      'Requer monitoramento cuidadoso dos níveis de cálcio e fósforo.',
      'A terapia é iniciada apenas quando o fósforo sérico está controlado.'
    ],
    clinicalIndications: { text: 'Tratamento do hiperparatireoidismo secundário renal em cães e gatos com doença renal crônica.' },
    mechanism: { text: 'O calcitriol (1,25-di-hidroxivitamina D3) é a forma hormonalmente ativa da vitamina D. Atua aumentando a absorção intestinal de cálcio e suprimindo diretamente a produção e secreção do paratormônio (PTH) pelas glândulas paratireoides.' },
    pharmacokinetics: { text: 'Bem absorvido por via oral.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Hiperparatireoidismo Secundário Renal', dose: '1.5–3.5 ng/kg', route: 'VO', interval: 'q24h', notes: 'A dose é em nanogramas (ng). Iniciar a terapia APENAS após o fósforo sérico estar dentro da faixa de referência.' }
    ],
    contraindications: { text: 'Contraindicado em pacientes com hipercalcemia ou hiperfosfatemia.' },
    adverseEffects: { text: 'O principal risco é a hipercalcemia, que pode levar à mineralização de tecidos moles e piora da função renal.' },
    interactions: { text: 'Quelantes de fósforo contendo cálcio podem aumentar o risco de hipercalcemia. Corticoides podem antagonizar os efeitos do calcitriol.' },
    monitoring: { text: 'Monitorar os níveis de cálcio, fósforo e PTH séricos antes e durante a terapia. O cálcio ionizado é o melhor indicador.' },
    evidence: { text: 'Estudos demonstraram que a terapia com doses baixas de calcitriol pode melhorar a sobrevida em cães com DRC, presumivelmente ao controlar os efeitos deletérios do excesso de PTH.' }
  },
  {
    name: 'Capromorelina',
    sector: 'Gastrointestinal',
    class: 'Estimulante de apetite; Agonista do receptor de grelina.',
    commercialNames: ['Entyce®', 'Elura® (gatos)'],
    highlights: [
      'Estimulante de apetite eficaz para cães e gatos.',
      'Mimetiza a ação do hormônio da fome, a grelina.',
      'Disponível em formulação líquida oral.'
    ],
    clinicalIndications: { text: 'Estimulação do apetite em cães (Entyce®) e manejo da perda de peso em gatos com doença renal crônica (Elura®).' },
    mechanism: { text: 'Agonista do receptor da grelina. A ativação deste receptor estimula a secreção de hormônio do crescimento (GH) e sinaliza fome no hipotálamo, resultando em aumento do apetite.' },
    pharmacokinetics: { text: 'Bem absorvida por via oral.' },
    doses: [
      { species: 'Cão', indication: 'Estimulação do apetite', dose: '3 mg/kg', route: 'VO', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Manejo da perda de peso (DRC)', dose: '2 mg/kg', route: 'VO', interval: 'q24h', notes: '' }
    ],
    contraindications: { text: 'Usar com cautela em pacientes com doença hepática ou em fêmeas gestantes/lactantes.' },
    adverseEffects: { text: 'Salivação, vômito e diarreia são os efeitos adversos mais comuns. Em gatos, pode ocorrer hiperglicemia transitória e aumento da pressão arterial.' },
    interactions: { text: 'Usar com cautela com fármacos que inibem o citocromo P450, como antifúngicos azólicos.' },
    monitoring: { text: 'Monitorar o peso corporal, o escore de condição corporal e a ingestão de alimentos. Em gatos, monitorar a pressão arterial e a glicemia.' },
    evidence: { text: 'Demonstrou ser eficaz em aumentar o apetite e o peso corporal em estudos clínicos controlados em cães e gatos.' }
  },
  {
    name: 'Carprofeno',
    sector: 'Bulário Principal',
    class: 'Anti-inflamatório não esteroidal (AINE); Inibidor preferencial da COX-2.',
    commercialNames: ['Rimadyl®', 'Carprieve®', 'Carproflan®'],
    highlights: [
      'Um dos AINEs mais prescritos para o manejo da dor da osteoartrite em cães.',
      'Longo histórico de eficácia e segurança quando usado adequadamente em cães.',
      'Hepatotoxicidade idiossincrática aguda, embora rara, é uma reação adversa grave associada.',
      'A administração pode ser em dose única diária ou dividida a cada 12 horas.',
      'Uso em gatos é "off-label" e não rotineiro.',
    ],
    clinicalIndications: {
      text: 'Primariamente indicado para o alívio da dor e inflamação em cães com osteoartrite e para o controle da dor pós-operatória.',
      tooltip: 'Seu uso em gatos não é recomendado devido à falta de dados de segurança e à disponibilidade de AINEs mais seguros para a espécie.',
    },
    mechanism: {
      text: 'Inibidor preferencial da COX-2, exibindo maior afinidade por esta isoforma em doses terapêuticas, o que resulta em efeitos anti-inflamatórios e analgésicos com menor risco de efeitos adversos GI.',
      tooltip: 'A seletividade pela COX-2 resulta em menor interferência com as funções fisiológicas das prostaglandinas produzidas pela COX-1.',
    },
    pharmacokinetics: {
      text: 'Rapidamente absorvido por via oral em cães. Alta ligação a proteínas plasmáticas (>99%). Metabolismo hepático e eliminação primariamente biliar. Meia-vida de ~8 horas.',
      tooltip: 'A meia-vida de 8 horas permite a administração a cada 12 ou 24 horas, oferecendo flexibilidade posológica.',
    },
    doses: [
      { species: 'Cão', indication: 'OA / Dor', dose: '2.2 mg/kg q12h ou 4.4 mg/kg q24h', route: 'VO, SC, IV', interval: 'q12-24h', notes: 'Dose diária total é 4.4 mg/kg.' },
    ],
    dilutionAndAdministration: {
        text: 'A formulação injetável pode ser administrada por via subcutânea ou intravenosa sem necessidade de diluição. Não é utilizada em infusão contínua.',
        tooltip: 'Como todos os AINEs, a manutenção da normovolemia e da pressão arterial é essencial durante o período perioperatório para proteger a função renal.'
    },
    contraindications: {
      text: 'Contraindicações padrão dos AINEs. Usar com extrema cautela ou evitar em cães com histórico de hepatopatia.',
      tooltip: 'A administração concomitante com corticosteroides ou outros AINEs é estritamente contraindicada.',
    },
    adverseEffects: {
      text: 'Os mais comuns são gastrointestinais. A reação adversa mais notória é a hepatotoxicidade idiossincrática aguda, que pode ser fatal, embora rara.',
      tooltip: 'A hepatotoxicidade parece ser mais prevalente em cães da raça Labrador Retriever. Os sinais clínicos geralmente aparecem nas primeiras 3 semanas de tratamento.',
    },
    interactions: {
      text: 'Interações semelhantes às de outros AINEs. Devido à alta ligação proteica, pode deslocar outros fármacos altamente ligados, como a varfarina.',
      tooltip: 'Aumento do risco de toxicidade com corticosteroides, outros AINEs, diuréticos e inibidores da ECA.',
    },
    monitoring: {
      text: 'Realizar exames de sangue basais e monitoramento periódico (2-4 semanas após o início, depois a cada 3-6 meses) para terapia crônica.',
      tooltip: 'Tutores devem ser educados para monitorar sinais de intolerância gastrointestinal, letargia, icterícia ou alterações na micção e sede.',
    },
    evidence: {
      text: 'Eficácia para o manejo da dor da OA em cães é amplamente comprovada por numerosos estudos clínicos.',
      tooltip: 'O risco de hepatotoxicidade idiossincrática justifica uma conversa franca com os tutores, especialmente de Labradores, e um plano de monitoramento proativo.',
    },
  },
  {
    name: 'Carvedilol',
    sector: 'Cardiovascular',
    class: 'Betabloqueador (não seletivo); Alfabloqueador α1.',
    commercialNames: ['Coreg® (humano)'],
    highlights: [
      'Betabloqueador com propriedades vasodilatadoras (bloqueio α1).',
      'Pode ser usado em cães com insuficiência cardíaca crônica que estão estáveis.',
      'Possui efeitos antioxidantes e antiproliferativos.',
      'O início do tratamento deve ser com doses muito baixas e titulação lenta.'
    ],
    clinicalIndications: { text: 'Usado como terapia adjuvante em cães com cardiomiopatia dilatada (CMD) ou doença valvar crônica que já estão estabilizados com a terapia padrão (diuréticos, iECA, pimobendan).' },
    mechanism: { text: 'Bloqueador não seletivo dos receptores β1, β2 e α1. O bloqueio beta reduz a frequência cardíaca e a contratilidade, enquanto o bloqueio alfa-1 causa vasodilatação, reduzindo a pós-carga.' },
    pharmacokinetics: { text: 'Metabolismo hepático.' },
    doses: [
      { species: 'Cão', indication: 'Insuficiência Cardíaca Crônica (estável)', dose: 'Iniciar com 0.05-0.1 mg/kg q12h, aumentar gradualmente a cada 2-4 semanas para 0.8-1 mg/kg q12h', route: 'VO', interval: 'q12h', notes: 'TITULAÇÃO LENTA É CRUCIAL.' }
    ],
    contraindications: { text: 'Contraindicado em insuficiência cardíaca descompensada (edema pulmonar ativo), bradicardia ou asma.' },
    adverseEffects: { text: 'Piora da insuficiência cardíaca, letargia, bradicardia, hipotensão.' },
    interactions: { text: 'Efeitos aditivos com outros depressores cardíacos ou vasodilatadores.' },
    monitoring: { text: 'Monitoramento cuidadoso da frequência cardíaca, pressão arterial e sinais clínicos de ICC durante a titulação da dose.' },
    evidence: { text: 'Embora controverso, alguns estudos sugerem um benefício na sobrevida de cães com CMD quando adicionado à terapia padrão, mas deve ser iniciado apenas por cardiologistas experientes em pacientes estáveis.' }
  },
  {
    name: 'Cefalexina',
    sector: 'Bulário Principal',
    class: 'Antibacteriano; Cefalosporina de 1ª Geração.',
    commercialNames: ['Rilexine®', 'Keflex® (humano)'],
    highlights: [
      'Antibiótico bactericida de primeira linha para piodermite superficial canina.',
      'Excelente atividade contra cocos Gram-positivos (Staphylococcus, Streptococcus).',
      'Perfil de segurança muito favorável, com baixa incidência de efeitos adversos.',
      'Ação tempo-dependente, requerendo administração a cada 8 a 12 horas.',
      'Atividade limitada contra a maioria das bactérias Gram-negativas.',
    ],
    clinicalIndications: {
      text: 'Tratamento de escolha para foliculite bacteriana superficial em cães. Também usada para cistites não complicadas e infecções de tecidos moles por estafilococos.',
      tooltip: 'O tratamento da piodermite deve ser mantido por um mínimo de 3 semanas, ou por 7 dias após a resolução clínica completa, para prevenir recidivas.',
    },
    mechanism: {
      text: 'Inibe a síntese da parede celular bacteriana ao se ligar às proteínas de ligação à penicilina (PBPs), levando à lise bacteriana. Resistente a algumas β-lactamases estafilocócicas.',
      tooltip: 'Sua eficácia é tempo-dependente, o que significa que o tempo acima da CIM é o principal preditor de sucesso, justificando a dosagem frequente.',
    },
    pharmacokinetics: {
      text: 'Bem absorvida por via oral. Amplamente distribuída, exceto no SNC. Eliminação quase exclusivamente renal, na forma inalterada.',
      tooltip: 'Altas concentrações na urina são vantajosas para o tratamento de ITUs. A meia-vida curta exige administração a cada 8 a 12 horas.',
    },
    doses: [
      { species: 'Cão', indication: 'Piodermite / ITU', dose: '15–30 mg/kg', route: 'VO', interval: 'q8-12h', notes: 'Doses de 22-30 mg/kg q12h são comuns para piodermite.' },
      { species: 'Gato', indication: 'Infecções de Pele / ITU', dose: '15–30 mg/kg', route: 'VO', interval: 'q12h', notes: 'Administrar com alimento se ocorrerem sinais GI.' },
    ],
    dilutionAndAdministration: {
        text: 'A cefalexina para uso veterinário é administrada exclusivamente por via oral. Não é utilizada por via parenteral. Não requer diluição.',
        tooltip: 'Outras cefalosporinas, como a cefazolina, são usadas por via injetável na prática veterinária.'
    },
    contraindications: {
      text: 'Hipersensibilidade conhecida a cefalosporinas ou penicilinas (reatividade cruzada). Cautela em pacientes com insuficiência renal grave.',
      tooltip: 'A reatividade cruzada com penicilinas é possível, embora o risco seja considerado baixo (cerca de 10%).',
    },
    adverseEffects: {
      text: 'Notável por seu excelente perfil de segurança. Efeitos adversos são incomuns e geralmente leves (distúrbios gastrointestinais).',
      tooltip: 'O vômito e a diarreia podem ser minimizados com a administração do fármaco junto com alimentos.',
    },
    interactions: {
      text: 'O probenecide pode aumentar as concentrações séricas da cefalexina. Risco aditivo de nefrotoxicidade com aminoglicosídeos é baixo, mas requer cautela.',
      tooltip: 'As interações medicamentosas clinicamente significativas são raras.',
    },
    monitoring: {
      text: 'Monitoramento baseado na resposta clínica. Para piodermites, a reavaliação a cada 2-3 semanas é recomendada.',
      tooltip: 'Fontes: Plumb\'s 10th Ed., ISCAID Guidelines.'
    },
    evidence: {
      text: 'A cefalexina é consistentemente posicionada por diretrizes internacionais como terapia de primeira linha para piodermite superficial canina.',
      tooltip: 'A falha terapêutica geralmente se deve a duração inadequada, dose insuficiente, ou presença de uma causa subjacente não controlada (alergia, endocrinopatia) ou infecção por Staphylococcus resistente à meticilina (MRS).',
    },
  },
  {
    name: 'Cefdinir',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de terceira geração.',
    commercialNames: ['Omnicef'],
    highlights: [
      'Cefalosporina oral de 3ª geração.',
      'Ativo contra estafilococos e muitos bacilos Gram-negativos.',
      'Uso veterinário baseado em extrapolação humana, sem doses bem estabelecidas.',
      'Risco de hipersensibilidade cruzada com penicilinas é baixo.'
    ],
    clinicalIndications: {
      text: 'É uma cefalosporina de terceira geração administrada por via oral. Apresenta atividade contra estafilococos e muitos bacilos Gram-negativos. É potente no tratamento de infecções de pele, tecidos moles e do trato urinário. Pode ser uma alternativa a outras cefalosporinas de administração oral, como a cefpodoxima proxetil. O uso em medicina veterinária é principalmente derivado de extrapolação humana.'
    },
    mechanism: {
      text: 'É um antibiótico beta-lactâmico que age inibindo a síntese da parede celular bacteriana, o que resulta na morte do microrganismo.'
    },
    pharmacokinetics: {
      text: 'A extensão da sua absorção após a administração oral e sua eficácia em cães e gatos não são totalmente conhecidas.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'N/A', dose: 'Não estabelecida', route: 'VO', interval: 'N/A', notes: 'Doses não estabelecidas em fontes veterinárias; uso baseado em extrapolação humana.' }
    ],
    contraindications: {
      text: 'Não deve ser utilizado em animais com hipersensibilidade a outros antibióticos beta-lactâmicos. Usar com cautela em animais com doenças hemorrágicas ou em tratamento anticoagulante.'
    },
    adverseEffects: {
      text: 'De modo geral, as cefalosporinas são consideradas seguras. Podem ocorrer reações de sensibilidade, raras doenças hemorrágicas, vômitos e diarreia.'
    },
    interactions: {
      text: 'Não há relatos de interações medicamentosas específicas em animais. Não deve ser associado a outros medicamentos em formulações compostas.'
    },
    monitoring: {
      text: 'Antibiograma: O ponto de perda de suscetibilidade (breakpoint) determinado pelo CLSI para o Cefdinir é ≤ 2 μg/mL.'
    },
    evidence: {
      text: 'O uso de Cefdinir em medicina veterinária não foi amplamente relatado em estudos clínicos controlados. As indicações e doses atuais são principalmente extrapoladas de preparações para uso humano.'
    }
  },
  {
    name: 'Cefepime',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de quarta geração.',
    commercialNames: ['Maxipime'],
    highlights: [
      'Cefalosporina de 4ª geração com espectro muito amplo.',
      'Uso clínico limitado e eficácia não documentada em veterinária.',
      'Requer ajuste de dose em insuficiência renal.',
      'Dose pode ser administrada em bolus ou CRI.'
    ],
    clinicalIndications: {
      text: 'Seu uso em medicina veterinária é limitado, apesar do amplo espectro de ação. Estudos experimentais para o estabelecimento de doses foram realizados, mas não há relatos de sua eficácia clínica documentada.'
    },
    mechanism: {
      text: 'Antibiótico beta-lactâmico que age na parede celular bacteriana, ligando-se às Proteínas Ligadoras de Penicilina (PBP). Possui um espectro de atividade mais amplo que o das demais cefalosporinas.'
    },
    pharmacokinetics: {
      text: 'Não há detalhes específicos sobre a farmacocinética do Cefepime em cães e gatos nas fontes fornecidas.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecção', dose: '40 mg/kg', route: 'IV, IM', interval: 'q6h', notes: 'CRI: Ataque 1.4 mg/kg, seguido de 1.1 mg/kg/h.' }
    ],
    dilutionAndAdministration: {
      text: 'Reconstituir o pó com água estéril, NaCl 0,9% ou dextrose 5%. Pode ser reconstituído em lidocaína a 1% para reduzir a dor da injeção IM. Soluções reconstituídas são estáveis por 24h em temperatura ambiente e 7 dias refrigeradas.'
    },
    contraindications: {
      text: 'Não administrar a pacientes sensíveis a cefalosporinas. Em pacientes com insuficiência renal, a frequência de administração deve ser reduzida.'
    },
    adverseEffects: {
      text: 'Geralmente seguro, mas podem ocorrer reações alérgicas, doenças hemorrágicas, vômitos e diarreia.'
    },
    interactions: {
      text: 'Não misturar em frascos ou seringas com outros medicamentos.'
    },
    monitoring: {
      text: 'Não há informações específicas sobre monitoramento.'
    },
    evidence: {
      text: 'Estudos experimentais foram realizados para estabelecer as doses, mas não há relatos documentados de eficácia clínica do Cefepime em medicina veterinária.'
    }
  },
  {
    name: 'Cefotaxima',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de terceira geração.',
    commercialNames: ['Claforan'],
    highlights: [
      'Cefalosporina injetável de 3ª geração.',
      'Uso reservado para infecções resistentes ou do SNC.',
      'Uma das cefalosporinas de 3ª geração mais usadas em pequenos animais, apesar do uso "off-label".',
      'Requer administração frequente (a cada 6h em gatos).'
    ],
    clinicalIndications: {
      text: 'Utilizada em casos de resistência a outros antibióticos ou em infecções do Sistema Nervoso Central (SNC). Devido ao alto custo e necessidade de administração frequente, não é usada para infecções rotineiras. Uso "off-label" comum em pequenos animais.'
    },
    mechanism: {
      text: 'Inibe a síntese da parede celular bacteriana, levando à morte do microrganismo.'
    },
    pharmacokinetics: {
      text: 'Não há detalhes específicos sobre a farmacocinética da Cefotaxima em cães e gatos nas fontes fornecidas.'
    },
    doses: [
      { species: 'Cão', indication: 'CRI', dose: 'Ataque 3.2 mg/kg, seguido de 5 mg/kg/h', route: 'IV', interval: 'Contínuo', notes: '' },
      { species: 'Gato', indication: 'Infecção', dose: '20-80 mg/kg', route: 'IV, IM', interval: 'q6h', notes: '' }
    ],
    contraindications: {
      text: 'Não deve ser utilizada em animais alérgicos a outros antibióticos beta-lactâmicos. Usar com cautela em animais com doenças hemorrágicas.'
    },
    adverseEffects: {
      text: 'Geralmente segura. Podem ocorrer reações de sensibilidade ou, raramente, doenças hemorrágicas.'
    },
    interactions: {
      text: 'Não deve ser misturada em frascos ou seringas com outros fármacos.'
    },
    monitoring: {
      text: 'Antibiograma: O ponto de perda de suscetibilidade (breakpoint) do CLSI é ≤ 2 μg/mL.'
    },
    evidence: {
      text: 'Apesar de não ser aprovada pela FDA para uso em animais, é uma das cefalosporinas de terceira geração mais comumente administradas a pequenos animais na prática clínica.'
    }
  },
  {
    name: 'Cefovecina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de terceira geração.',
    commercialNames: ['Convenia®'],
    highlights: [
      'Antibiótico injetável de longa duração (14 dias).',
      'Ideal para situações onde a administração oral é difícil.',
      'Eficaz para infecções de pele e tecidos moles.',
      'Não é ativa contra Pseudomonas aeruginosa.'
    ],
    clinicalIndications: {
      text: 'Aprovado para o tratamento de infecções de pele e de tecidos moles em cães e gatos. Também utilizado "off-label" para infecções do trato urinário.'
    },
    mechanism: {
      text: 'Inibe a síntese da parede celular bacteriana. Possui boa atividade contra estreptococos, Staphylococcus e bacilos Gram-negativos. Não é ativa contra Pseudomonas ou estafilococos resistentes à meticilina.'
    },
    pharmacokinetics: {
      text: 'Apresenta alta ligação a proteínas (98-99%), o que é responsável por sua longa duração de ação. A meia-vida terminal é de 7 dias em gatos e 5 dias em cães, mantendo concentrações eficazes por até 14 dias.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções de Pele/Tecidos Moles', dose: '8 mg/kg', route: 'SC', interval: 'a cada 14 dias', notes: 'Pode ser repetida se necessário.' }
    ],
    contraindications: {
      text: 'Não deve ser utilizada em animais alérgicos a outros antibióticos beta-lactâmicos. Não administrar a animais de produção.'
    },
    adverseEffects: {
      text: 'Geralmente bem tolerada. Vômitos, diarreia e irritação no local da injeção podem ocorrer. Devido à sua longa meia-vida, pode persistir no organismo por pelo menos 60 dias.'
    },
    interactions: {
      text: 'Não há relatos de interações medicamentosas específicas.'
    },
    dilutionAndAdministration: {
      text: 'A solução reconstituída é estável por 24 horas quando refrigerada.'
    },
    monitoring: {
      text: 'Devido à sua longa persistência no organismo, o monitoramento de quaisquer efeitos adversos, mesmo que tardios, é importante.'
    },
    evidence: {
      text: 'Aprovada pela FDA para infecções de pele em cães e gatos. A eficácia para infecções em outros sítios não foi estabelecida.'
    }
  },
  {
    name: 'Cefoxitina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de segunda geração (Cefamicina).',
    commercialNames: ['Mefoxitin', 'Cefoxil', 'Cefoxitina Sódica(g)'],
    highlights: [
      'Cefalosporina de 2ª geração com excelente atividade contra bactérias anaeróbias.',
      'Frequentemente usada para profilaxia cirúrgica, especialmente em cirurgias gastrointestinais.',
      'Mais estável a beta-lactamases produzidas por anaeróbios como Bacteroides.'
    ],
    clinicalIndications: {
      text: 'Utilizada em casos onde se busca atividade contra bactérias anaeróbicas e para profilaxia em cirurgias colorretais ou gastrointestinais.'
    },
    mechanism: {
      text: 'Inibe a síntese da parede celular bacteriana. Pertence ao grupo da cefamicina, sendo mais estável a beta-lactamases de anaeróbios. É mais ativa contra anaeróbios e bacilos Gram-negativos do que outras cefalosporinas de 2ª geração.'
    },
    pharmacokinetics: {
      text: 'Meia-vida de ~1.5 horas em cães e gatos, requerendo administração frequente.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções/Profilaxia', dose: '30 mg/kg', route: 'IV, IM', interval: 'q6-8h', notes: '' },
      { species: 'Cão/Gato', indication: 'Uso pré-cirúrgico', dose: '22 mg/kg', route: 'IV', interval: 'Dose única', notes: 'Administrar 30-60 min antes da incisão.' }
    ],
    contraindications: {
      text: 'Não utilizar em animais alérgicos a beta-lactâmicos. Usar com cautela em animais com doenças hemorrágicas.'
    },
    adverseEffects: {
      text: 'Geralmente segura. Podem ocorrer reações de sensibilidade. Não afetou a função cardiovascular em cães durante cirurgias.'
    },
    interactions: {
      text: 'Não misturar com outros medicamentos na mesma seringa.'
    },
    monitoring: {
      text: 'Antibiograma: O ponto de perda de suscetibilidade (breakpoint) do CLSI é ≤ 8 μg/mL.'
    },
    evidence: {
      text: 'Fármaco de escolha para profilaxia em cirurgias com risco de contaminação por anaeróbios.'
    }
  },
  {
    name: 'Cefpodoxima Proxetil',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de terceira geração.',
    commercialNames: ['Simplicef® (veterinário)', 'Vantin® (humano)', 'Orelox® (humano)'],
    highlights: [
      'Cefalosporina oral de 3ª geração com administração conveniente (uma vez ao dia).',
      'Aprovada pela FDA para infecções de pele em cães.',
      'Boa atividade contra Staphylococcus e bacilos Gram-negativos.',
      'Uso em gatos é "off-label".'
    ],
    clinicalIndications: {
      text: 'Aprovada para o tratamento de infecções de pele e tecidos moles em cães. Também utilizada para infecções do trato urinário inferior. O uso em gatos é extrapolado.'
    },
    mechanism: {
      text: 'É um pró-fármaco convertido em cefpodoxima ativa. Inibe a síntese da parede celular bacteriana. É mais ativa contra bacilos Gram-negativos do que as cefalosporinas de 1ª geração, e mais ativa contra Staphylococcus do que outras cefalosporinas orais de 3ª geração.'
    },
    pharmacokinetics: {
      text: 'Absorção oral em cães de 35%. Meia-vida de 5.7 horas. Alta ligação proteica (83%).'
    },
    doses: [
      { species: 'Cão', indication: 'Infecções de Pele/ITU', dose: '5-10 mg/kg', route: 'VO', interval: 'q24h', notes: '' },
      { species: 'Gato', indication: 'Uso Extrabula', dose: '5-10 mg/kg', route: 'VO', interval: 'q24h', notes: 'O fabricante não estabeleceu uma dose para gatos.' }
    ],
    contraindications: {
      text: 'Não utilizar em animais alérgicos a beta-lactâmicos. Usar com cautela em animais com doenças hemorrágicas.'
    },
    adverseEffects: {
      text: 'Geralmente segura. Vômito e diarreia podem ocorrer. Reações de sensibilidade são raras.'
    },
    interactions: {
      text: 'Não há relatos específicos, mas precauções gerais para cefalosporinas se aplicam.'
    },
    monitoring: {
      text: 'Antibiograma: O ponto de perda de suscetibilidade (breakpoint) do CLSI é ≤ 2 μg/mL.'
    },
    evidence: {
      text: 'Eficácia estabelecida para infecções de pele em cães. Acredita-se ser eficaz para ITUs devido à excreção urinária. A absorção oral em gatos não foi examinada.'
    }
  },
  {
    name: 'Ceftazidima',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de terceira geração.',
    commercialNames: ['Fortaz®', 'Ceptaz', 'Tazicef', 'Tazidime', 'Cetaz IM/IV(h)'],
    highlights: [
      'Cefalosporina de 3ª geração com potente atividade antipseudomonal.',
      'Fármaco de escolha para infecções graves por Pseudomonas.',
      'Uso comum em animais exóticos e em casos de resistência a outros antibióticos.',
      'Uso em pequenos animais é "off-label".'
    ],
    clinicalIndications: {
      text: 'Utilizada para tratamento de infecções graves por bacilos entéricos Gram-negativos ou P. aeruginosa, incluindo infecções abdominais, feridas em tecidos moles e pneumonia. Também empregada em profilaxia cirúrgica.'
    },
    mechanism: {
      text: 'Inibe a síntese da parede celular bacteriana. É mais eficaz contra Pseudomonas aeruginosa do que outras cefalosporinas de terceira geração.'
    },
    pharmacokinetics: {
      text: 'Estudos farmacocinéticos foram publicados para gatos domésticos.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções por Pseudomonas', dose: '30 mg/kg', route: 'IV, IM, SC', interval: 'q6-8h', notes: 'CRI: Ataque 1.2 mg/kg, seguido de 1.56 mg/kg/h IV.' }
    ],
    dilutionAndAdministration: {
      text: 'A formulação contém L-arginina. Durante a reconstituição com carbonato de sódio, há formação de gás que deve ser liberado. A L-arginina pode reduzir a dor da injeção.'
    },
    contraindications: {
      text: 'Não utilizar em animais alérgicos a beta-lactâmicos. Usar com cautela em animais com doenças hemorrágicas.'
    },
    adverseEffects: {
      text: 'Geralmente segura. Pode causar dor no local da injeção, distúrbios gastrointestinais e superinfecção. Reações alérgicas são raras.'
    },
    interactions: {
      text: 'Inativação mútua quando associada a aminoglicosídeos na mesma seringa/frasco. Pode precipitar quando associada à vancomicina.'
    },
    monitoring: {
      text: 'Não há informações específicas sobre monitoramento.'
    },
    evidence: {
      text: 'Frequentemente administrada a diversas espécies devido à sua eficácia contra microrganismos resistentes, especialmente Pseudomonas aeruginosa. Uso não aprovado pela FDA em animais.'
    }
  },
  {
    name: 'Ceftiofur',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Cefalosporina de terceira geração.',
    commercialNames: ['Naxcel®', 'Excenel®', 'Excede®'],
    highlights: [
      'Licenciado apenas para uso em grandes animais (bovinos, suínos).',
      'Uso em pequenos animais é "off-label" e pouco documentado.',
      'Eficaz contra patógenos respiratórios de grandes animais.',
      'Disponível em formulações de ação curta (sódico) e longa (ácido livre cristalino).'
    ],
    clinicalIndications: {
      text: 'Grandes Animais: Tratamento de doença respiratória, podridão dos cascos e metrite. Pequenos Animais: Uso extrabula e não bem avaliado, exceto para algumas infecções do trato urinário canino.'
    },
    mechanism: {
      text: 'Inibe a síntese da parede celular bacteriana. É metabolizado em desfuroilceftiofur, um metabólito ativo. Possui boa atividade contra Enterobacteriaceae e patógenos respiratórios de grandes animais.'
    },
    pharmacokinetics: {
      text: 'É rapidamente biotransformado em seu metabólito ativo, o desfuroilceftiofur.'
    },
    doses: [
      { species: 'Cão/Gato', indication: 'Uso Extrabula (Ceftiofur Sódico)', dose: '2.2 mg/kg', route: 'IM, SC', interval: 'q12-24h', notes: 'Dose para gatos extrapolada da de cães. Usar com cautela.' }
    ],
    contraindications: {
      text: 'Não administrar a animais sensíveis a beta-lactâmicos. Formulações de longa duração (ácido livre) não devem ser administradas IV e causaram lesões locais em pequenos animais.'
    },
    adverseEffects: {
      text: 'Geralmente seguro. Doses altas podem causar mielossupressão (trombocitopenia, anemia) em cães e diarreia em equinos. Pode causar dor no local da injeção.'
    },
    interactions: {
      text: 'Não misturar com outros fármacos na mesma seringa.'
    },
    monitoring: {
      text: 'Monitorar hemograma se forem administradas doses elevadas por longos períodos.'
    },
    evidence: {
      text: 'O Ceftiofur não é licenciado para uso em pequenos animais, e a eficácia para a maioria das infecções não foi avaliada.'
    }
  },
  {
    name: 'Ceftriaxona',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina.',
    commercialNames: [],
    highlights: ['Informações detalhadas não fornecidas para este fármaco.'],
    clinicalIndications: { text: 'Informações detalhadas sobre indicações clínicas não foram fornecidas.' },
    mechanism: { text: 'Informações detalhadas sobre o mecanismo de ação não foram fornecidas.' },
    pharmacokinetics: { text: 'Informações detalhadas sobre a farmacocinética não foram fornecidas.' },
    doses: [],
    contraindications: { text: 'Informações detalhadas sobre contraindicações não foram fornecidas.' },
    adverseEffects: { text: 'Informações detalhadas sobre efeitos adversos não foram fornecidas.' },
    interactions: { text: 'Informações detalhadas sobre interações medicamentosas não foram fornecidas.' },
    monitoring: { text: 'Informações detalhadas sobre monitoramento não foram fornecidas.' },
    evidence: { text: 'Informações detalhadas sobre evidências de eficácia não foram fornecidas.' }
  },
  {
    name: 'Cefuroxima',
    sector: 'Antimicrobianos',
    class: 'Cefalosporina.',
    commercialNames: ['Zinacef', 'Zinnat'],
    highlights: ['Informações detalhadas não fornecidas para este fármaco.'],
    clinicalIndications: { text: 'Informações detalhadas sobre indicações clínicas não foram fornecidas.' },
    mechanism: { text: 'Informações detalhadas sobre o mecanismo de ação não foram fornecidas.' },
    pharmacokinetics: { text: 'Informações detalhadas sobre a farmacocinética não foram fornecidas.' },
    doses: [],
    contraindications: { text: 'Informações detalhadas sobre contraindicações não foram fornecidas.' },
    adverseEffects: { text: 'Informações detalhadas sobre efeitos adversos não foram fornecidas.' },
    interactions: { text: 'Informações detalhadas sobre interações medicamentosas não foram fornecidas.' },
    monitoring: { text: 'Informações detalhadas sobre monitoramento não foram fornecidas.' },
    evidence: { text: 'Informações detalhadas sobre evidências de eficácia não foram fornecidas.' }
  },
  {
    name: 'Cetamina (Ketamina)',
    sector: 'Analgésicos e Anestésicos',
    class: 'Anestésico Dissociativo; Antagonista NMDA.',
    commercialNames: ['Ketamine', 'Anaestamine', 'Anesketin', 'Ketaset', 'Vetalar-V'],
    highlights: [
      'Anestésico dissociativo que produz analgesia somática profunda.',
      'Mantém reflexos laríngeos e faríngeos, mas não protege completamente as vias aéreas.',
      'Causa estimulação simpática (aumento da frequência cardíaca e pressão).',
      'Usado em doses subanestésicas (CRI) para analgesia multimodal e combate à hiperalgesia.'
    ],
    clinicalIndications: { text: 'Indução e manutenção da anestesia, geralmente em combinação com outros agentes (benzodiazepínicos, alfa-2 agonistas, opioides). Analgesia em infusão contínua (CRI) para dor crônica ou neuropática. Tratamento de status epilepticus em potros.' },
    mechanism: { text: 'Antagonista não competitivo do receptor N-metil-D-aspartato (NMDA). Produz um estado cataléptico, com o paciente parecendo acordado, mas sem resposta a estímulos.' },
    pharmacokinetics: { text: 'Metabolismo hepático. A recuperação depende da redistribuição e do metabolismo.' },
    doses: [
      { species: 'Gato', indication: 'Indução Anestésica', dose: '1-1.3 mg/kg (até 5 mg/kg)', route: 'IV', interval: 'Bolus lento', notes: 'Seguido de doses de 2 mg/kg conforme necessário.' },
      { species: 'Gato', indication: 'CRI (Anestesia)', dose: '7-8 mg/kg/hora', route: 'IV', interval: 'Contínuo', notes: '' }
    ],
    contraindications: { text: 'Usar com cautela em pacientes com doença cardíaca grave (onde o aumento da frequência cardíaca seria deletério), hipertensão, glaucoma ou trauma craniano. Não administrar a animais de produção.' },
    adverseEffects: { text: 'Rigidez muscular (requer co-indução com relaxante muscular como benzodiazepínicos), salivação excessiva, apneia transitória na indução, vocalização e agitação na recuperação.' },
    interactions: { text: 'Usada com segurança em associação com acepromazina, xilazina, detomidina, tiopental e pentobarbital.' },
    monitoring: { text: 'Monitoramento anestésico padrão. Lubrificar os olhos, pois permanecem abertos.' },
    evidence: { text: 'Anestésico fundamental na medicina veterinária, especialmente em combinação com outros fármacos para produzir anestesia balanceada.' }
  },
  {
    name: 'Cetirizina',
    sector: 'Oto-Dermatológico',
    class: 'Anti-histamínico.',
    commercialNames: ['Zyrtec®', 'Piriteze'],
    highlights: [
      'Anti-histamínico de segunda geração com menos efeitos sedativos.',
      'Pode ser usado no manejo de dermatite atópica em cães.',
      'Eficácia pode ser variável entre indivíduos.'
    ],
    clinicalIndications: { text: 'Pode ser tentado como terapia adjuvante no manejo do prurido associado à dermatite atópica em cães.' },
    mechanism: { text: 'Antagonista seletivo do receptor H1 da histamina, com menor capacidade de atravessar a barreira hematoencefálica, resultando em menos sedação.' },
    pharmacokinetics: { text: 'Não há detalhes específicos sobre a farmacocinética em animais nas fontes.' },
    doses: [
      { species: 'Cão', indication: 'Dermatite Atópica', dose: '1 mg/kg', route: 'VO', interval: 'q24h', notes: '' }
    ],
    contraindications: { text: 'Não há contraindicações específicas listadas.' },
    adverseEffects: { text: 'Geralmente bem tolerado. Sonolência pode ocorrer, mas é menos comum do que com anti-histamínicos de primeira geração.' },
    interactions: { text: 'Não há interações significativas listadas.' },
    monitoring: { text: 'Monitorar a redução do prurido e a ocorrência de sedação.' },
    evidence: { text: 'O uso é baseado em extrapolação humana e evidência anedótica. Não há estudos clínicos robustos em animais. A resposta é individual.' }
  },
  {
    name: 'Cetoconazol',
    sector: 'Antifúngicos e Endócrino',
    class: 'Antifúngico; Inibidor da síntese de esteroides.',
    commercialNames: ['Nizoral®', 'Cetoconazol(g)'],
    highlights: [
      'Antifúngico sistêmico com atividade contra leveduras e fungos dimórficos.',
      'Inibe a síntese de cortisol e testosterona, sendo usado para tratar hiperadrenocorticismo.',
      'Potente inibidor de enzimas hepáticas (citocromo P450), causando muitas interações medicamentosas.',
      'Requer ambiente ácido para absorção oral.'
    ],
    clinicalIndications: { text: 'Tratamento de infecções fúngicas sistêmicas (blastomicose, histoplasmose, etc.). Manejo médico de curta duração do hiperadrenocorticismo (Síndrome de Cushing).' },
    mechanism: { text: 'Como antifúngico, inibe a síntese do ergosterol na membrana celular fúngica. Como agente endócrino, inibe as enzimas do citocromo P450 envolvidas na síntese de esteroides adrenais e gonadais.' },
    pharmacokinetics: { text: 'A absorção oral depende da acidez estomacal. Metabolismo hepático.' },
    doses: [
      { species: 'Cão', indication: 'Hiperadrenocorticismo', dose: '5 mg/kg q12h, aumentando para 10-15 mg/kg q12h', route: 'VO', interval: 'q12h', notes: 'Administrar com alimento para melhorar a absorção.' },
      { species: 'Cão/Gato', indication: 'Infecção Fúngica', dose: '5-10 mg/kg', route: 'VO', interval: 'q12-24h', notes: '' }
    ],
    contraindications: { text: 'Não administrar com antiácidos ou inibidores da bomba de prótons. Usar com cautela em pacientes com hepatopatia.' },
    adverseEffects: { text: 'Anorexia, vômito, diarreia e hepatotoxicidade são os efeitos adversos mais comuns. Os efeitos endócrinos (inibição da síntese de cortisol) são o objetivo terapêutico no tratamento de Cushing.' },
    interactions: { text: 'Potente inibidor do P450, aumentando a concentração de muitos fármacos, incluindo ciclosporina, benzodiazepínicos, varfarina e cisaprida. Pode aumentar a concentração de digoxina.' },
    monitoring: { text: 'Monitorar as enzimas hepáticas durante a terapia. Para o tratamento de Cushing, monitorar os níveis de cortisol (teste de estimulação com ACTH).' },
    evidence: { text: 'Antifúngico eficaz, mas seu uso para hiperadrenocorticismo foi amplamente substituído por fármacos mais seguros e eficazes como o trilostano.' }
  },
  {
    name: 'Cianocobalamina (Vitamina B12)',
    sector: 'Gastrointestinal e Metabologia',
    class: 'Vitamina; Suplemento.',
    commercialNames: ['Anivit B12', 'Neo-Cytamen'],
    highlights: [
      'Usada para suplementação em animais com deficiência, comum em doenças gastrointestinais.',
      'A deficiência pode causar anemia, problemas neurológicos e má absorção.',
      'Administração geralmente por via subcutânea.'
    ],
    clinicalIndications: { text: 'Tratamento da deficiência de cobalamina (Vitamina B12), frequentemente associada a insuficiência pancreática exócrina (IPE), doença inflamatória intestinal (DII) e outras enteropatias crônicas em cães e gatos.' },
    mechanism: { text: 'A cobalamina é um cofator essencial para o metabolismo de carboidratos e gorduras e para a síntese de proteínas e mielina. Sua deficiência leva a distúrbios metabólicos e celulares.' },
    pharmacokinetics: { text: 'A absorção intestinal requer o fator intrínseco. A via parenteral contorna a necessidade de absorção intestinal.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Suplementação', dose: 'Gatos: 250 µg; Cães <10kg: 250-500 µg; Cães >10kg: 500-1000 µg', route: 'SC', interval: 'Semanalmente por 6 semanas, depois mensalmente.', notes: 'Dose em microgramas (µg).' }
    ],
    contraindications: { text: 'Não há contraindicações significativas.' },
    adverseEffects: { text: 'Extremamente segura. Reações no local da injeção são raras.' },
    interactions: { text: 'Não há interações significativas conhecidas.' },
    monitoring: { text: 'Monitoramento dos níveis séricos de cobalamina para confirmar a deficiência e avaliar a resposta à terapia.' },
    evidence: { text: 'A suplementação em pacientes com hipocobalaminemia é uma prática padrão e baseada em evidências, melhorando os resultados clínicos em enteropatias crônicas.' }
  },
  {
    name: 'Ciclofosfamida',
    sector: 'Imunossupressores e Oncologia',
    class: 'Antineoplásico; Imunossupressor; Agente alquilante.',
    commercialNames: ['Cytoxan®', 'Endoxana®', 'Ciclofosfamida(g)'],
    highlights: [
      'Agente quimioterápico e imunossupressor potente.',
      'Risco significativo de cistite hemorrágica estéril, especialmente em cães.',
      'Causa mielossupressão dose-dependente.',
      'Usado em combinação com outros agentes para tratar doenças imunomediadas graves e neoplasias.'
    ],
    clinicalIndications: { text: 'Tratamento de neoplasias (linfoma, carcinomas) e doenças imunomediadas graves e refratárias, como anemia hemolítica imunomediada e meningoencefalomielite granulomatosa.' },
    mechanism: { text: 'É um agente alquilante que se liga ao DNA, formando ligações cruzadas e interferindo na replicação celular, o que leva à apoptose, especialmente em células de rápida proliferação como linfócitos e células neoplásicas.' },
    pharmacokinetics: { text: 'É um pró-fármaco ativado no fígado. Seus metabólitos são excretados na urina.' },
    doses: [
      { species: 'Cão', indication: 'Anemia Hemolítica Imunomediada', dose: '2.2 mg/kg', route: 'VO', interval: '3x por semana', notes: '' },
      { species: 'Cão', indication: 'Meningoencefalite Granulomatosa', dose: '2.2 mg/kg', route: 'VO, SC', interval: 'q24h', notes: '' },
      { species: 'Cão', indication: 'Pulsoterapia', dose: '200-250 mg/m²', route: 'IV', interval: 'a cada 3 semanas', notes: '' },
      { species: 'Gato', indication: 'Imunossupressão', dose: '6.25-12.5 mg/gato', route: 'VO', interval: '4 dias por semana', notes: 'Gatos são menos suscetíveis à cistite.' }
    ],
    contraindications: { text: 'Não usar em animais com mielossupressão severa. Não administrar a animais de produção.' },
    adverseEffects: { text: 'Cistite hemorrágica estéril é uma complicação grave, causada por um metabólito tóxico (acroleína). Mielossupressão (nadir em 7-10 dias). Vômito, diarreia e alopecia (em raças de pelo contínuo) também podem ocorrer.' },
    interactions: { text: 'Potencializa a mielossupressão de outros agentes citotóxicos.' },
    monitoring: { text: 'Hemograma completo (monitorar nadir). Urinálise periódica para detectar sinais de cistite. Incentivar a micção frequente e manter a hidratação para reduzir o risco de cistite. O uso de furosemida ou mesna pode ser considerado.' },
    evidence: { text: 'Componente padrão de muitos protocolos de quimioterapia. Seu uso como imunossupressor é reservado para casos graves e refratários devido à sua toxicidade.' }
  },
  {
    name: 'Ciclosporina',
    sector: 'Imunossupressores e Dermatologia',
    class: 'Imunossupressor; Inibidor da calcineurina.',
    commercialNames: ['Atopica®', 'Neoral®', 'Sandimmune®', 'Optimune® (oftálmico)'],
    highlights: [
      'Tratamento de escolha para dermatite atópica canina.',
      'Eficaz para uma variedade de doenças imunomediadas.',
      'As formulações em microemulsão (Atopica, Neoral) têm absorção mais confiável.',
      'O principal efeito adverso é o distúrbio gastrointestinal.'
    ],
    clinicalIndications: { text: 'Tratamento de dermatite atópica, ceratoconjuntivite seca (uso tópico), fístulas perianais, anemia hemolítica imunomediada e outras doenças imunomediadas em cães e gatos (complexo granuloma eosinofílico, DII, asma).' },
    mechanism: { text: 'Inibe a calcineurina, bloqueando a transcrição de citocinas (especialmente IL-2) e a ativação de linfócitos T. É mais específica para a imunidade celular (linfócitos T) do que para a humoral.' },
    pharmacokinetics: { text: 'Absorção oral baixa e variável (20-30%). As formas de microemulsão são absorvidas de forma mais previsível. Meia-vida de 8-10 horas.' },
    doses: [
      { species: 'Cão', indication: 'Atopia/Imunossupressão', dose: '5 mg/kg', route: 'VO', interval: 'q24h', notes: 'Após remissão, pode ser administrada em dias alternados.' },
      { species: 'Gato', indication: 'Atopia/Imunossupressão', dose: '3-5 mg/kg', route: 'VO', interval: 'q24h', notes: 'Pode ser administrada em dias alternados após remissão.' }
    ],
    contraindications: { text: 'Não administrar durante a gestação ou lactação. Cautela ao vacinar animais em tratamento (pode impedir resposta a vacinas de vírus vivo).' },
    adverseEffects: { text: 'Vômito e diarreia são comuns no início do tratamento. Hiperplasia gengival e hipertricose podem ocorrer com o uso crônico. Em gatos, há risco de reativação de infecções por Toxoplasma.' },
    interactions: { text: 'O cetoconazol inibe o metabolismo da ciclosporina, permitindo a redução da dose. Muitos outros fármacos podem afetar seus níveis.' },
    monitoring: { text: 'Monitoramento clínico da resposta e dos efeitos adversos. O monitoramento dos níveis sanguíneos não é rotineiramente necessário, exceto em transplantes.' },
    evidence: { text: 'Eficácia similar à da prednisolona para dermatite atópica canina, mas com um perfil de efeitos adversos diferente. Eficaz para muitas doenças imunomediadas em gatos.' }
  },
  {
    name: 'Ciprofloxacina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Fluoroquinolona.',
    commercialNames: ['Cipro® (humano)', 'Ciprovet Colírio® (veterinário)'],
    highlights: [
      'Fluoroquinolona de amplo espectro com boa atividade contra Pseudomonas.',
      'A absorção oral é baixa e variável em cães e gatos.',
      'A enrofloxacina (que é metabolizada em ciprofloxacina) é geralmente preferida em veterinária para uso sistêmico.',
      'Risco de artropatia em animais jovens.'
    ],
    clinicalIndications: { text: 'Tratamento de infecções bacterianas suscetíveis, especialmente quando a atividade antipseudomonal é desejada. O uso sistêmico é limitado pela baixa biodisponibilidade oral. Usado topicamente em oftalmologia.' },
    mechanism: { text: 'Inibe a DNA girase bacteriana, interferindo na replicação do DNA. É bactericida e concentração-dependente.' },
    pharmacokinetics: { text: 'Absorção oral baixa e variável em cães (42-74%) e gatos (22-33%). A absorção oral em equinos é inferior a 10% (não usar).' },
    doses: [
      { species: 'Cão', indication: 'Infecções (Oral)', dose: '20-25 mg/kg', route: 'VO', interval: 'q24h', notes: 'Doses altas são necessárias para compensar a baixa absorção.' },
      { species: 'Cão', indication: 'Infecções (IV)', dose: '10-15 mg/kg', route: 'IV', interval: 'q24h', notes: 'Administrar lentamente (30 min).' },
      { species: 'Gato', indication: 'Infecções (Oral)', dose: '20 mg/kg', route: 'VO', interval: 'q24h', notes: 'Biodisponibilidade muito baixa.' },
      { species: 'Gato', indication: 'Infecções (IV)', dose: '10 mg/kg', route: 'IV', interval: 'q24h', notes: 'Administrar lentamente.' }
    ],
    contraindications: { text: 'Evitar o uso em animais jovens em crescimento (risco de lesão cartilaginosa). Usar com cautela em animais com histórico de convulsões.' },
    adverseEffects: { text: 'Artropatia em animais jovens. Efeitos no SNC (convulsões) em altas doses. Vômito pode ocorrer. Cegueira (retinopatia) não foi relatada como com a enrofloxacina em gatos.' },
    interactions: { text: 'A absorção é reduzida por antiácidos e sucralfato (administrar com 2h de intervalo). Pode aumentar as concentrações de teofilina.' },
    monitoring: { text: 'Monitoramento clínico. O antibiograma é crucial devido à resistência crescente.' },
    evidence: { text: 'O uso clínico é empírico. A enrofloxacina é geralmente preferida devido à sua farmacocinética superior em animais.' }
  },
  {
    name: 'Cisaprida',
    sector: 'Gastrointestinal',
    class: 'Agente procinético.',
    commercialNames: ['Prepulsid®', 'Propulsid® (comercialização descontinuada)'],
    highlights: [
      'Agente procinético que estimula a motilidade do trato gastrointestinal superior e do cólon.',
      'Útil para constipação e megacólon em gatos.',
      'Comercialização descontinuada; disponível apenas através de farmácias de manipulação.',
      'Risco de arritmias cardíacas em humanos levou à sua retirada do mercado.'
    ],
    clinicalIndications: { text: 'Tratamento de distúrbios de motilidade, como gastroparesia, refluxo gastroesofágico e, principalmente, constipação crônica e megacólon em gatos.' },
    mechanism: { text: 'Agonista do receptor de serotonina 5-HT4, o que aumenta a liberação de acetilcolina no plexo mioentérico, estimulando a contração do músculo liso gastrointestinal.' },
    pharmacokinetics: { text: 'Metabolizada pelo citocromo P450.' },
    doses: [
      { species: 'Cão', indication: 'Procinético', dose: '0.1-0.5 mg/kg', route: 'VO', interval: 'q8-12h', notes: 'Pode ser aumentado para 0.5-1.0 mg/kg.' },
      { species: 'Gato', indication: 'Constipação/Megacólon', dose: '2.5-5 mg/gato', route: 'VO', interval: 'q8-12h', notes: 'Pode ser aumentado para 1 mg/kg a cada 8h.' }
    ],
    contraindications: { text: 'Obstrução ou perfuração gastrointestinal.' },
    adverseEffects: { text: 'Geralmente bem tolerada em animais. Vômito e diarreia podem ocorrer. O risco de arritmias cardíacas parece ser muito baixo em animais em comparação com humanos.' },
    interactions: { text: 'Não usar com inibidores do citocromo P450 (ex: antifúngicos azólicos, macrolídeos), pois isso aumenta o risco de toxicidade. Fármacos anticolinérgicos (atropina) antagonizam seu efeito.' },
    monitoring: { text: 'Monitorar a frequência e a consistência da defecação e observar a ocorrência de efeitos adversos.' },
    evidence: { text: 'O uso é baseado em estudos experimentais e forte evidência empírica, especialmente para o tratamento de megacólon em gatos.' }
  },
  {
    name: 'Citrato de Potássio',
    sector: 'Sistema Urinário',
    class: 'Agente alcalinizante; Suplemento de potássio.',
    commercialNames: ['Urocit-K®'],
    highlights: [
      'Usado para prevenir a formação de cálculos de oxalato de cálcio.',
      'Alcaliniza a urina e aumenta a excreção de citrato.',
      'Fornece suplementação de potássio.'
    ],
    clinicalIndications: { text: 'Prevenção da recorrência de urólitos de oxalato de cálcio em cães e gatos. Tratamento de acidose tubular renal.' },
    mechanism: { text: 'O citrato é metabolizado a bicarbonato, que atua como um agente alcalinizante sistêmico e urinário. A urina mais alcalina aumenta a solubilidade do oxalato de cálcio. O citrato na urina também se liga ao cálcio, reduzindo a formação de cristais.' },
    pharmacokinetics: { text: 'Bem absorvido por via oral.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Prevenção de Urolitíase por Oxalato', dose: '40–75 mg/kg', route: 'VO', interval: 'q12h', notes: 'O objetivo é manter o pH urinário entre 7.0 e 7.5.' }
    ],
    contraindications: { text: 'Hipercalemia, insuficiência renal grave, infecções do trato urinário por bactérias produtoras de urease (risco de cálculos de estruvita).' },
    adverseEffects: { text: 'Distúrbios gastrointestinais leves. O principal risco é a hipercalemia se a dose for excessiva ou em pacientes com insuficiência renal.' },
    interactions: { text: 'Usar com cautela com fármacos que aumentam o potássio sérico, como inibidores da ECA e espironolactona. Baixas doses de potássio podem aumentar a toxicidade da digoxina.' },
    monitoring: { text: 'Monitorar o pH urinário e os eletrólitos séricos (especialmente potássio) periodicamente.' },
    evidence: { text: 'Tratamento padrão e baseado em evidências para a prevenção de cálculos de oxalato de cálcio.' }
  },
  {
    name: 'Claritromicina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Macrolídeo.',
    commercialNames: ['Biaxin®', 'Klaricid® (humano)', 'Claritromicina(g)'],
    highlights: [
      'Macrolídeo com bom espectro contra cocos Gram-positivos e alguns patógenos intracelulares.',
      'Usado em potros para infecções por Rhodococcus equi.',
      'Potente inibidor do citocromo P450.'
    ],
    clinicalIndications: { text: 'Tratamento de infecções cutâneas e respiratórias em pequenos animais. Em humanos, é usado para infecções por Helicobacter. Em potros, é usado em combinação com rifampicina para tratar infecções por Rhodococcus equi.' },
    mechanism: { text: 'Inibe a síntese proteica bacteriana ao se ligar à subunidade 50S do ribossomo. Espectro semelhante ao da eritromicina, com boa atividade contra Mycoplasma e Chlamydia.' },
    pharmacokinetics: { text: 'Absorção oral em cães de 57%. Meia-vida de ~5 horas.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções', dose: '7.5 mg/kg', route: 'VO', interval: 'q12h', notes: '' }
    ],
    contraindications: { text: 'Administrar com cautela a equinos adultos, ruminantes, roedores e coelhos devido ao risco de enterite. Usar com cautela em fêmeas gestantes.' },
    adverseEffects: { text: 'Diarreia e náuseas são os efeitos adversos mais comuns.' },
    interactions: { text: 'É um inibidor do citocromo P450 e pode reduzir o metabolismo de muitos outros fármacos, aumentando suas concentrações e risco de toxicidade (ex: digoxina).' },
    monitoring: { text: 'Monitorar a resposta clínica e a ocorrência de efeitos adversos gastrointestinais.' },
    evidence: { text: 'Em potros, a combinação com rifampicina mostrou-se superior à azitromicina para infecções por Rhodococcus equi. O uso em pequenos animais é menos comum.' }
  },
  {
    name: 'Clindamicina',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Lincosamida.',
    commercialNames: ['Antirobe®', 'Clinacin®', 'Cleocin® (humano)', 'Oralguard® (veterinário)'],
    highlights: [
      'Excelente atividade contra bactérias anaeróbias e a maioria dos cocos Gram-positivos.',
      'Ótima penetração em tecidos, incluindo osso (ideal para osteomielite) e SNC.',
      'Tratamento de escolha para toxoplasmose clínica em cães e gatos.',
      'CRÍTICO: Em gatos, administrar cápsulas/comprimidos com água ou alimento para prevenir esofagite.',
      'Contraindicada em roedores, coelhos e cavalos (risco de enterocolite fatal).'
    ],
    clinicalIndications: {
      text: 'Tratamento de infecções anaeróbias (abscessos, doença periodontal, osteomielite), piodermites, toxoplasmose e feridas de mordida. Recomendada para sepse/bacteremia e pneumonia hospitalar.',
      tooltip: 'Sua eficácia contra anaeróbios e aeróbios comuns da cavidade oral a torna uma escolha frequente para o manejo de doenças periodontais e abscessos dentários.'
    },
    mechanism: {
      text: 'Primariamente bacteriostático, inibe a síntese de proteínas bacterianas ao se ligar à subunidade ribossômica 50S. Também tem atividade contra Toxoplasma gondii e Neospora caninum. Atua de forma tempo-dependente.',
      tooltip: 'Em concentrações mais altas, pode ser bactericida contra alguns organismos. Atinge altas concentrações em osso, bile e fluido prostático.'
    },
    pharmacokinetics: {
      text: 'Bem absorvida por via oral (73% em cães). Excelente penetração na maioria dos tecidos, incluindo osso. Metabolizada no fígado. Meia-vida de 4-5 horas em cães, podendo chegar a 7-10h com doses mais altas.',
      tooltip: 'A excelente penetração óssea é uma vantagem farmacocinética chave para o tratamento da osteomielite, superando muitos outros antibióticos.'
    },
    doses: [
      { species: 'Cão', indication: 'Piodermite/Infecções', dose: '11 mg/kg q12h ou 22 mg/kg q24h', route: 'VO', interval: 'q12-24h', notes: 'Doses de até 33 mg/kg q12h para infecções refratárias.' },
      { species: 'Gato', indication: 'Abscessos/Infecções', dose: '11-33 mg/kg/dia', route: 'VO', interval: 'q12-24h', notes: 'Dividir dose diária q12h. Seguir com água/alimento.' },
      { species: 'Cão/Gato', indication: 'Toxoplasmose Clínica', dose: '10–25 mg/kg', route: 'VO', interval: 'q12h', notes: 'Tratar por 4 semanas.' },
      { species: 'Cão/Gato', indication: 'Injetável', dose: '10 mg/kg', route: 'IV, IM', interval: 'q12h', notes: 'A injeção IV deve ser diluída e infundida lentamente (30-60 min).' }
    ],
    dilutionAndAdministration: {
        text: 'A formulação injetável (fosfato de clindamicina) pode ser administrada por via intramuscular ou intravenosa. Para uso IV, deve ser diluída (geralmente 10:1 em NaCl 0.9%) e administrada como uma infusão lenta. A formulação injetável pode conter álcool benzílico, que pode ser tóxico para animais muito jovens.',
        tooltip: 'A administração IV rápida pode causar disfunção cardiopulmonar e hipotensão.'
    },
    contraindications: {
      text: 'Estritamente contraindicada por via oral em coelhos, hamsters, porquinhos-da-índia, cavalos e ruminantes (risco de enterocolite clostridial fatal).',
      tooltip: 'Em gatos, a administração de formulações orais sólidas deve ser seguida por um bolus de água ou alimento úmido para prevenir esofagite química.'
    },
    adverseEffects: {
      text: 'Em cães e gatos, geralmente bem tolerada. Efeitos gastrointestinais (vômito, diarreia) são os mais comuns. Esofagite em gatos é séria, mas evitável. A formulação líquida pode não ser palatável para gatos.',
      tooltip: 'A prevenção da esofagite em gatos com a administração adequada é um ponto crítico de segurança.'
    },
    interactions: {
      text: 'Pode potencializar os efeitos de agentes bloqueadores neuromusculares. Antagonismo in vitro com macrolídeos e cloranfenicol (evitar uso concomitante). Não misturar com outros fármacos na mesma seringa.',
      tooltip: 'A competição pelo mesmo sítio de ligação no ribossomo com macrolídeos é a base do antagonismo.'
    },
    monitoring: {
      text: 'Monitoramento baseado na resposta clínica. Em tratamento prolongado (osteomielite), a monitoração da função hepática pode ser considerada.',
      tooltip: 'Fontes: Plumb\'s 10th Ed.'
    },
    evidence: {
      text: 'Eficácia para infecções anaeróbias e estafilocócicas é sustentada por longa história de uso clínico. Tratamento padrão para toxoplasmose clínica.',
      tooltip: 'A excelente penetração óssea a torna superior a muitos outros antibióticos para o tratamento da osteomielite.'
    }
  },
  {
    name: 'Clopidogrel',
    sector: 'Bulário Principal',
    class: 'Antiplaquetário; Inibidor do receptor P2Y12.',
    commercialNames: ['Plavix® (humano)', 'Clopidogrel (genérico)'],
    highlights: [
      'Fármaco de primeira escolha para a prevenção de tromboembolismo arterial (TEA) em gatos com doença cardíaca.',
      'Comprovadamente superior à aspirina na prevenção de eventos tromboembólicos recorrentes em gatos.',
      'Inibe a agregação plaquetária de forma irreversível.',
      'O principal efeito adverso é o sabor amargo, que pode causar hipersalivação e dificuldade de administração.',
      'É um pró-fármaco que requer ativação hepática pelo citocromo P450.',
    ],
    clinicalIndications: {
      text: 'Prevenção primária e secundária de tromboembolismo arterial (TEA) em gatos com cardiomiopatia (hipertrófica, restritiva, não classificada) ou outras condições de alto risco trombótico.',
      tooltip: 'O TEA é uma complicação devastadora e frequentemente fatal da doença cardíaca felina, tornando a terapia antiplaquetária um pilar do manejo.'
    },
    mechanism: {
      text: 'Seu metabólito ativo liga-se seletiva e irreversivelmente ao receptor P2Y12 nas plaquetas, bloqueando a ativação e agregação plaquetária induzida pelo ADP.',
      tooltip: 'Como a inibição é irreversível, o efeito dura toda a vida da plaqueta (cerca de 7-10 dias). A função plaquetária só é restaurada à medida que novas plaquetas são produzidas.',
    },
    pharmacokinetics: {
      text: 'Absorção rápida, mas a ativação hepática é variável entre os indivíduos. O efeito antiplaquetário máximo pode levar alguns dias para ser alcançado.',
      tooltip: 'A variabilidade na ativação levou à pesquisa sobre a "resistência ao clopidogrel", embora sua relevância clínica em gatos ainda esteja sendo estudada.',
    },
    doses: [
      { species: 'Gato', indication: 'Prevenção de TEA', dose: '18.75 mg (1/4 de comp. de 75mg)', route: 'VO', interval: 'q24h', notes: 'O sabor amargo é um desafio significativo. Formulações em suspensão podem ser uma alternativa.' },
    ],
    dilutionAndAdministration: {
        text: 'Formulado para administração exclusivamente oral. Não é utilizado por via parenteral. Não requer diluição.',
        tooltip: 'Devido ao sabor amargo, a manipulação em cápsulas ou o uso de formulações em suspensão com sabor podem melhorar a adesão ao tratamento.'
    },
    contraindications: {
      text: 'Contraindicado em animais com sangramento ativo. Usar com cautela em pacientes com risco de sangramento ou antes de procedimentos cirúrgicos.',
      tooltip: 'Idealmente, deve ser descontinuado 7-10 dias antes de uma cirurgia eletiva.'
    },
    adverseEffects: {
      text: 'Sabor amargo intenso causando hipersalivação, aversão alimentar e vômito. Sangramento (gengival, gastrintestinal) é um risco, embora geralmente menor.',
      tooltip: 'A dificuldade de administração é a principal razão para a não adesão ao tratamento.'
    },
    interactions: {
      text: 'Inibidores da bomba de prótons (omeprazol) podem, teoricamente, reduzir sua ativação. Usar com cautela com outros fármacos que afetam a hemostasia (AINEs, heparina, anticoagulantes).',
      tooltip: 'A relevância clínica da interação com IBPs é controversa, mas alguns clínicos preferem usar famotidina em vez de omeprazol em pacientes recebendo clopidogrel.'
    },
    monitoring: {
      text: 'Monitoramento de sinais de sangramento. Não há um teste de rotina para monitorar a eficácia, sendo a decisão baseada em evidências clínicas.',
      tooltip: 'Fontes: Plumb\'s 10th Ed., FATCAT study.'
    },
    evidence: {
      text: 'O estudo FATCAT (Feline Arterial Thromboembolism: Clopidogrel vs. Aspirin Trial) forneceu evidência de Nível I de que o clopidogrel é superior à aspirina para a prevenção secundária de TEA em gatos.',
      tooltip: 'Com base nessas evidências, o clopidogrel substituiu a aspirina como o agente antiplaquetário de escolha na cardiologia felina.'
    }
  },
  {
    name: 'Clorambucil',
    sector: 'Imunossupressores e Oncologia',
    class: 'Agente citotóxico; Imunossupressor; Antineoplásico.',
    commercialNames: ['Leukeran®'],
    highlights: [
      'Imunossupressor alquilante usado para doenças imunomediadas e neoplasias.',
      'Alternativa à azatioprina, especialmente em gatos.',
      'Geralmente melhor tolerado que a ciclofosfamida.',
      'Não causa cistite hemorrágica estéril.'
    ],
    clinicalIndications: { text: 'Tratamento de doenças imunomediadas (doença inflamatória intestinal, pênfigo, glomerulonefrite) e neoplasias linfoides de baixo grau (linfoma, leucemia linfocítica crônica).' },
    mechanism: { text: 'Agente alquilante que causa ligações cruzadas no DNA, interferindo na replicação celular e induzindo apoptose em células de rápida divisão, como linfócitos.' },
    pharmacokinetics: { text: 'Bem absorvido por via oral.' },
    doses: [
      { species: 'Cão', indication: 'Imunossupressão/Oncologia', dose: '2-8 mg/m²', route: 'VO', interval: 'q24h ou em dias alternados', notes: 'Dose empírica; ajustar conforme resposta e toxicidade.' },
      { species: 'Gato', indication: 'Imunossoupressão/Oncologia', dose: '2 mg/gato', route: 'VO', interval: 'q48h', notes: 'Pode ser administrado em pulso (20 mg/m² a cada 2-3 semanas).' }
    ],
    contraindications: { text: 'Não administrar a animais com mielossupressão severa preexistente.' },
    adverseEffects: { text: 'Mielossupressão é o principal efeito adverso, mas geralmente é leve e reversível. Distúrbios gastrointestinais (anorexia, diarreia) podem ocorrer.' },
    interactions: { text: 'Potencializa os efeitos de outros medicamentos imunossupressores, aumentando o risco de mielossupressão.' },
    monitoring: { text: 'Hemograma completo deve ser monitorado periodicamente para detectar mielossupressão.' },
    evidence: { text: 'O uso é largamente empírico, sem estudos clínicos bem controlados em veterinária, mas é considerado um imunossupressor eficaz e relativamente seguro, especialmente para uso crônico em gatos.' }
  },
  {
    name: 'Cloranfenicol',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano.',
    commercialNames: ['Chloromycetin®'],
    highlights: [
      'Antibiótico de amplo espectro com excelente penetração em tecidos, incluindo SNC e olho.',
      'Uso proibido em animais de produção devido ao risco de anemia aplástica em humanos.',
      'Potente inibidor de enzimas hepáticas (citocromo P450).',
      'Pode causar supressão da medula óssea em animais, especialmente em gatos.'
    ],
    clinicalIndications: { text: 'Tratamento de infecções graves onde sua penetração tecidual é vantajosa (ex: infecções do SNC, oculares, prostáticas) ou infecções por organismos resistentes a outros fármacos (com base em antibiograma).' },
    mechanism: { text: 'Inibe a síntese proteica bacteriana ao se ligar à subunidade 50S do ribossomo. Geralmente bacteriostático. Amplo espectro, incluindo Gram-positivos, Gram-negativos e anaeróbios.' },
    pharmacokinetics: { text: 'Bem absorvido por via oral. Meia-vida curta (4-5h em cães e gatos), requerendo dosagem frequente.' },
    doses: [
      { species: 'Cão', indication: 'Infecções', dose: '40-50 mg/kg', route: 'VO, IV, IM', interval: 'q6-8h', notes: '' },
      { species: 'Gato', indication: 'Infecções', dose: '12.5-20 mg/kg', route: 'VO, IV, IM', interval: 'q12h', notes: 'Gatos são mais suscetíveis à toxicidade.' }
    ],
    contraindications: { text: 'NÃO UTILIZAR em animais destinados ao consumo humano. Evitar em animais gestantes ou neonatos. Evitar o uso prolongado em gatos. O proprietário deve ser alertado sobre o risco de anemia aplástica em humanos.' },
    adverseEffects: { text: 'Mielossupressão reversível, dose-dependente (comum) e anemia aplástica idiossincrática, não dose-dependente (rara, mas fatal). Gatos são particularmente suscetíveis à mielossupressão.' },
    interactions: { text: 'Potente inibidor do citocromo P450, aumentando a concentração de fármacos como fenobarbital, fenitoína e ciclosporina. Pode aumentar as concentrações de digoxina.' },
    monitoring: { text: 'Hemograma completo deve ser monitorado durante a terapia, especialmente em tratamentos prolongados ou em gatos.' },
    evidence: { text: 'Seu uso diminuiu devido à disponibilidade de antibióticos mais seguros, mas continua sendo uma ferramenta valiosa para infecções específicas devido à sua penetração e espectro.' }
  },
  {
    name: 'Clorazepato Dipotássico',
    sector: 'Neurologia',
    class: 'Anticonvulsivante; Benzodiazepínico.',
    commercialNames: ['Tranxene®', 'Tranxilene® (humano)'],
    highlights: [
      'Benzodiazepínico usado como terapia adjuvante para convulsões em cães.',
      'Menor probabilidade de causar tolerância em comparação com o diazepam.',
      'Pode ser útil para o tratamento de ansiedade e fobias.'
    ],
    clinicalIndications: { text: 'Terapia adjuvante para convulsões refratárias em cães. Tratamento de cistite idiopática (intersticial) em gatos, possivelmente por seus efeitos ansiolíticos e de relaxamento muscular.' },
    mechanism: { text: 'É um pró-fármaco que é convertido em desmetildiazepam (nordiazepam). Potencializa os efeitos inibitórios do neurotransmissor GABA no SNC ao se ligar ao receptor GABA-A.' },
    pharmacokinetics: { text: 'Bem absorvido por via oral. Possui longa meia-vida devido ao seu metabólito ativo.' },
    doses: [
      { species: 'Cão', indication: 'Anticonvulsivante', dose: '1-2 mg/kg', route: 'VO', interval: 'q12-24h', notes: '' },
      { species: 'Gato', indication: 'Anticonvulsivante/Cistite', dose: '0.5-1.0 mg/kg/dia', route: 'VO', interval: 'q12-24h', notes: 'A dose diária total pode ser de 2-4 mg por gato.' }
    ],
    contraindications: { text: 'Usar com cautela em pacientes com insuficiência hepática ou glaucoma.' },
    adverseEffects: { text: 'Sedação e ataxia são os efeitos adversos mais comuns.' },
    interactions: { text: 'Efeitos sedativos aditivos com outros depressores do SNC. O fenobarbital pode acelerar seu metabolismo.' },
    monitoring: { text: 'Monitorar a frequência das convulsões e o grau de sedação.' },
    evidence: { text: 'Uma opção útil como anticonvulsivante adjuvante em cães, especialmente para aqueles que desenvolvem tolerância ao fenobarbital.' }
  },
  {
    name: 'Clorexidina',
    sector: 'Oto-Dermatológico',
    class: 'Antisséptico.',
    commercialNames: ['Hibiscrub®', 'Malaseb® (com miconazol)', 'Clorexyderm®'],
    highlights: [
      'Antisséptico de amplo espectro, eficaz contra bactérias Gram-positivas e Gram-negativas.',
      'Possui atividade residual, permanecendo na pele após a aplicação.',
      'Comum em xampus, soluções e lenços para uso dermatológico e otológico.'
    ],
    clinicalIndications: { text: 'Limpeza e desinfecção da pele e do canal auditivo. Usado no manejo de piodermite superficial, dermatite por Malassezia e como antisséptico cirúrgico.' },
    mechanism: { text: 'Atua rompendo a membrana celular bacteriana.' },
    pharmacokinetics: { text: 'Ação tópica com mínima absorção sistêmica.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Uso Tópico', dose: 'Varia com a concentração (0.5% a 4%)', route: 'Tópico', interval: 'Conforme indicado', notes: 'Seguir as instruções do produto.' }
    ],
    contraindications: { text: 'Evitar o contato com os olhos em altas concentrações. Pode ser ototóxico se a membrana timpânica estiver rompida (usar produtos formulados para uso otológico).' },
    adverseEffects: { text: 'Pode causar irritação local ou reações alérgicas de contato, embora raras.' },
    interactions: { text: 'Não há interações significativas conhecidas para uso tópico.' },
    monitoring: { text: 'Observar a resolução da infecção e a ocorrência de irritação cutânea.' },
    evidence: { text: 'Um dos antissépticos mais utilizados e eficazes na medicina veterinária.' }
  },
  {
    name: 'Clorfeniramina',
    sector: 'Oto-Dermatológico',
    class: 'Anti-histamínico.',
    commercialNames: ['Chlor-Trimeton®', 'Piriton®'],
    highlights: ['Anti-histamínico de primeira geração.', 'Pode ser usado para reações alérgicas e prurido.', 'Causa sedação.'],
    clinicalIndications: { text: 'Alívio de sinais associados a reações alérgicas, como urticária. Pode ser tentado no manejo do prurido da dermatite atópica.' },
    mechanism: { text: 'Antagonista competitivo do receptor H1 da histamina.' },
    pharmacokinetics: { text: 'Bem absorvido por via oral. Metabolizado no fígado.' },
    doses: [
      { species: 'Cão', indication: 'Alergias/Prurido', dose: '4-12 mg (total por cão)', route: 'VO', interval: 'q8-12h', notes: '' },
      { species: 'Gato', indication: 'Alergias/Prurido', dose: '2-4 mg (total por gato)', route: 'VO', interval: 'q12h', notes: '' }
    ],
    contraindications: { text: 'Usar com cautela em pacientes com glaucoma, hipertrofia prostática ou obstrução urinária.' },
    adverseEffects: { text: 'Sedação é o efeito adverso mais comum. Efeitos anticolinérgicos (boca seca, retenção urinária) podem ocorrer.' },
    interactions: { text: 'Efeitos sedativos aditivos com outros depressores do SNC.' },
    monitoring: { text: 'Monitorar a resposta clínica e o nível de sedação.' },
    evidence: { text: 'A eficácia dos anti-histamínicos para dermatite atópica é variável e geralmente modesta. A resposta é individual.' }
  },
  {
    name: 'Colistina (Colistimetato)',
    sector: 'Antimicrobianos',
    class: 'Antibacteriano; Polimixina.',
    commercialNames: [],
    highlights: ['Antibiótico de último recurso para infecções por bactérias Gram-negativas multirresistentes.', 'Risco significativo de nefrotoxicidade e neurotoxicidade.', 'Uso principalmente em ambiente hospitalar.'],
    clinicalIndications: { text: 'Tratamento de infecções graves causadas por bacilos Gram-negativos multirresistentes, como Pseudomonas aeruginosa, Acinetobacter baumannii e Klebsiella pneumoniae, que são resistentes a outros antibióticos.' },
    mechanism: { text: 'Atua como um detergente catiônico, ligando-se a lipopolissacarídeos (LPS) na membrana externa de bactérias Gram-negativas, desorganizando a membrana e causando a morte celular.' },
    pharmacokinetics: { text: 'O colistimetato de sódio é um pró-fármaco inativo que é hidrolisado in vivo para a colistina ativa. A eliminação é primariamente renal.' },
    doses: [
      { species: 'Cão/Gato', indication: 'Infecções Multirresistentes', dose: 'Dose de ataque: 2.5 mg/kg IV; Manutenção: 1.5 mg/kg IV q12h', route: 'IV', interval: 'q12h', notes: 'Doses baseadas em dados humanos. Requer monitoramento intensivo.' }
    ],
    contraindications: { text: 'Insuficiência renal preexistente. Uso concomitante com outros agentes nefrotóxicos ou neurotóxicos.' },
    adverseEffects: { text: 'Nefrotoxicidade e neurotoxicidade (parestesia, fraqueza, apneia) são os efeitos adversos mais graves e dose-limitantes.' },
    interactions: { text: 'Aumenta o risco de nefrotoxicidade e bloqueio neuromuscular com aminoglicosídeos, AINEs e agentes bloqueadores neuromusculares.' },
    monitoring: { text: 'Monitoramento rigoroso da função renal (ureia, creatinina, débito urinário) é essencial.' },
    evidence: { text: 'O ressurgimento da colistina é devido à falta de novas opções para tratar infecções por Gram-negativos multirresistentes. Seu uso deve ser reservado para situações críticas e guiado por antibiograma.' }
  },
  ...newDrugs,
  ...newDrugs2,
  ...newDrugs3,
  ...newDrugs4,
  ...newDrugs5,
  ...newDrugs7,
  ...newDrugs8,
  ...newDrugs9,
  ...newDrugs10,
  ...newDrugs11,
  ...newDrugs12,
  ...newDrugs13,
  ...newDrugs14,
  ...newDrugs15,
  ...newDrugs16,
  ...newDrugs17,
  ...newDrugs18,
  ...newDrugs19,
  ...newDrugs20,
  ...newDrugs21,
  ...newDrugs22,
  ...newDrugs23,
  ...newDrugs24,
  ...newDrugs25,
  ...newDrugs26,
  ...newDrugs27,
  ...newDrugs28,
  ...newDrugs29,
  ...newDrugs30,
  ...newDrugs31,
  ...newDrugs32,
  ...newDrugs33,
  ...newDrugs34,
  ...newDrugs35
];