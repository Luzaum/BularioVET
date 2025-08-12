import { ConditionSystem } from '../types';

export const clinicalConditions: ConditionSystem[] = [
  {
    systemName: 'Sistema Dermatológico',
    conditions: [
      { name: 'Piodermite Superficial Canina' },
      { name: 'Piodermite Profunda Canina' },
      { name: 'Dermatite Alérgica à Picada de Pulgas (DAPP)' },
      { name: 'Otite Externa' },
      { name: 'Abscessos Cutâneos Felinos' },
    ],
  },
  {
    systemName: 'Sistema Gastrointestinal',
    conditions: [
      { name: 'Vômito Agudo' },
      { name: 'Diarreia Aguda' },
      { name: 'Gastroparesia / Íleo Paralítico' },
      { name: 'Ulceração Gastroduodenal' },
      { name: 'Esofagite por Refluxo' },
      { name: 'Colite' },
    ],
  },
  {
    systemName: 'Sistema Urinário',
    conditions: [
      { name: 'Cistite Bacteriana Esporádica' },
      { name: 'Pielonefrite' },
      { name: 'Leptospirose (estado de portador renal)' },
      { name: 'Doença Renal Crônica (DRC) com Hipertensão' },
    ],
  },
  {
    systemName: 'Sistema Cardiovascular',
    conditions: [
      { name: 'Insuficiência Cardíaca Congestiva (ICC)' },
      { name: 'Hipertensão Sistêmica Felina' },
      { name: 'Cardiomiopatia Dilatada (CMD)' },
      { name: 'Prevenção de Tromboembolismo Arterial' },
    ],
  },
  {
    systemName: 'Sistema Neurológico',
    conditions: [
      { name: 'Dor Neuropática' },
      { name: 'Sedação para Manejo/Ansiedade' },
      { name: 'Manejo de Convulsões Refratárias' },
    ]
  },
  {
    systemName: 'Sistema Respiratório',
    conditions: [
      { name: 'Tosse Infecciosa Canina (Bordetella)' },
      { name: 'Infecção Respiratória Superior Felina (Clamidiose)' },
      { name: 'Asma Felina' },
    ],
  },
  {
    systemName: 'Doenças Infecciosas e Parasitárias',
    conditions: [
      { name: 'Erliquiose Monocítica Canina' },
      { name: 'Anaplasmose Granulocítica' },
      { name: 'Hemoplasmose Felina (Anemia Infecciosa Felina)' },
      { name: 'Toxoplasmose Clínica' },
      { name: 'Dirofilariose (terapia adjuvante)' },
    ],
  },
  {
    systemName: 'Sistema Musculoesquelético',
    conditions: [
        { name: 'Osteoartrite (Dor Crônica)' },
        { name: 'Dor Pós-operatória Ortopédica' },
        { name: 'Poliartrite Imunomediada' },
        { name: 'Osteomielite' },
    ]
  },
  {
    systemName: 'Emergência e Terapia Intensiva',
    conditions: [
        { name: 'Choque Séptico (Hipotensão Refratária)' },
        { name: 'Choque Cardiogênico (Baixo Débito)' },
        { name: 'Taquiarritmias Ventriculares' },
        { name: 'Status Epilepticus' },
        { name: 'Choque Anafilático' },
    ]
  }
];
