
export interface Dose {
  species: string;
  indication: string;
  dose: string;
  route: string;
  interval: string;
  notes: string;
}

export interface DrugSection {
  text: string;
  tooltip?: string;
}

export interface Drug {
  name: string;
  sector?: string;
  class: string;
  commercialNames: string[];
  highlights: string[];
  clinicalIndications: DrugSection;
  mechanism: DrugSection;
  pharmacokinetics: DrugSection;
  doses: Dose[];
  dilutionAndAdministration?: DrugSection;
  contraindications: DrugSection;
  adverseEffects: DrugSection;
  interactions: DrugSection;
  monitoring: DrugSection;
  evidence: DrugSection;
}

export interface SuggestedDrug {
  drugName: string;
  justification: string;
  dose: string;
  contraindication: string;
  interactions: string;
}

export interface ClinicalCondition {
  name: string;
}

export interface ConditionSystem {
  systemName: string;
  conditions: ClinicalCondition[];
}