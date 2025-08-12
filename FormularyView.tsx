
import React, { useState, useMemo, useEffect } from 'react';
import { Drug } from './types';
import { Header } from './components/Header';
import { DrugList } from './components/DrugList';
import { DrugDetail } from './components/DrugDetail';
import { useDebounce } from './hooks/useDebounce';

interface FormularyViewProps {
    onNavigateHome: () => void;
    initialDrug: Drug | null;
    drugList: Drug[];
}

const FormularyView: React.FC<FormularyViewProps> = ({ onNavigateHome, initialDrug, drugList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(initialDrug);

  const debouncedSearchTerm = useDebounce(searchTerm, 200);

  const sortedDrugList = useMemo(() => 
    [...drugList].sort((a, b) => a.name.localeCompare(b.name)), 
  [drugList]);

  const filteredDrugs = useMemo(() => {
    if (!debouncedSearchTerm) {
      return sortedDrugList;
    }
    return sortedDrugList.filter(drug =>
      drug.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      drug.commercialNames.some(cn => cn.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) ||
      drug.sector?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm, sortedDrugList]);
  
  useEffect(() => {
    if (initialDrug) {
        setSelectedDrug(initialDrug);
    } else if (filteredDrugs.length > 0 && !selectedDrug) {
        setSelectedDrug(filteredDrugs[0]);
    } else if (filteredDrugs.length > 0 && selectedDrug && !filteredDrugs.some(d => d.name === selectedDrug.name && d.sector === selectedDrug.sector)) {
        setSelectedDrug(filteredDrugs[0]);
    } else if (filteredDrugs.length === 0) {
        setSelectedDrug(null);
    }
  }, [debouncedSearchTerm, filteredDrugs, initialDrug, selectedDrug]);


  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased">
      <aside className="w-72 flex flex-col bg-white border-r border-slate-200 shadow-sm">
        <Header onSearchChange={setSearchTerm} onNavigateHome={onNavigateHome}/>
        <DrugList
          drugs={filteredDrugs}
          selectedDrug={selectedDrug}
          onSelectDrug={setSelectedDrug}
        />
      </aside>
      <main className="flex-1 overflow-hidden">
        <DrugDetail drug={selectedDrug} />
      </main>
    </div>
  );
};

export default FormularyView;
