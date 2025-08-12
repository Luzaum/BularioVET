
import React from 'react';
import { Drug } from '../types';

interface DrugListProps {
  drugs: Drug[];
  selectedDrug: Drug | null;
  onSelectDrug: (drug: Drug) => void;
}

export const DrugList: React.FC<DrugListProps> = ({ drugs, selectedDrug, onSelectDrug }) => {
  return (
    <nav className="flex-1 overflow-y-auto">
      <ul>
        {drugs.map((drug) => (
          <li key={`${drug.sector}-${drug.name}`}>
            <button
              onClick={() => onSelectDrug(drug)}
              className={`w-full text-left p-3 transition-colors duration-150 border-l-4
                ${selectedDrug?.name === drug.name && selectedDrug?.sector === drug.sector
                  ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                  : 'text-slate-700 hover:bg-slate-100 border-transparent'
                }`}
            >
              <span className="text-sm font-medium">{drug.name}</span>
              {drug.sector && <span className="block text-xs text-slate-500">{drug.sector}</span>}
            </button>
          </li>
        ))}
        {drugs.length === 0 && (
            <li className="p-4 text-center text-slate-500">
                Nenhum fármaco encontrado.
            </li>
        )}
      </ul>
    </nav>
  );
};
