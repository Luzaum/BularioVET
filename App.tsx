
import React, { useState } from 'react';
import { Drug, ConditionSystem } from './types';
import HomePage from './HomePage';
import FormularyView from './FormularyView';
import { drugs as initialDrugs } from './data/drugs';
import { clinicalConditions as initialConditions } from './data/conditions';

export type View = 'home' | 'formulary';

const App: React.FC = () => {
    const [view, setView] = useState<View>('home');
    const [initialDrug, setInitialDrug] = useState<Drug | null>(null);
    const [drugList, setDrugList] = useState<Drug[]>(initialDrugs);
    const [conditionList, setConditionList] = useState<ConditionSystem[]>(initialConditions);

    const navigateToFormulary = (drug: Drug | null = null) => {
        setInitialDrug(drug);
        setView('formulary');
    };

    const navigateHome = () => {
        setView('home');
        setInitialDrug(null); // Reset initial drug when going home
    };

    const addDrugs = (newDrugs: Drug[]) => {
        let addedCount = 0;
        let updatedCount = 0;

        setDrugList(prev => {
            const drugMap = new Map<string, Drug>();
            
            // Populate map with existing drugs, using a composite key
            prev.forEach(d => {
                const key = `${d.sector || ''}::${d.name}`.toLowerCase();
                drugMap.set(key, d);
            });

            // Merge new drugs, counting additions and updates
            newDrugs.forEach(newDrug => {
                const key = `${newDrug.sector || ''}::${newDrug.name}`.toLowerCase();
                if (drugMap.has(key)) {
                    updatedCount++;
                } else {
                    addedCount++;
                }
                drugMap.set(key, newDrug); // Upsert
            });

            const alertMessages = [];
            if (addedCount > 0) {
                alertMessages.push(`${addedCount} novo(s) medicamento(s) foram adicionados.`);
            }
            if (updatedCount > 0) {
                alertMessages.push(`${updatedCount} medicamento(s) existentes foram atualizados.`);
            }
            if (alertMessages.length > 0) {
                alert(alertMessages.join('\n'));
            } else {
                alert('Nenhuma alteração foi necessária. Os medicamentos importados já estavam atualizados no bulário.');
            }

            // Return the new sorted list
            const newList = Array.from(drugMap.values());
            newList.sort((a, b) => a.name.localeCompare(b.name));
            return newList;
        });
    };

    const addConditions = (newConditions: ConditionSystem[]) => {
        let addedCount = 0;
        setConditionList(prev => {
            const newSystemMap = new Map<string, ConditionSystem>();
            
            // Populate map with existing conditions
            prev.forEach(system => {
                newSystemMap.set(system.systemName, { 
                    systemName: system.systemName, 
                    conditions: [...system.conditions] 
                });
            });

            // Merge new conditions
            newConditions.forEach(system => {
                if (!newSystemMap.has(system.systemName)) {
                    newSystemMap.set(system.systemName, { systemName: system.systemName, conditions: [] });
                }
                const existingSystem = newSystemMap.get(system.systemName)!;
                const conditionNames = new Set(existingSystem.conditions.map(c => c.name.toLowerCase()));
                
                system.conditions.forEach(condition => {
                    if (!conditionNames.has(condition.name.toLowerCase())) {
                        existingSystem.conditions.push(condition);
                        conditionNames.add(condition.name.toLowerCase());
                        addedCount++;
                    }
                });
            });
             if (addedCount > 0) {
                 alert(`${addedCount} nova(s) condição(ões) clínica(s) adicionada(s) com sucesso!`);
            } else {
                 alert('Nenhuma condição nova foi adicionada. Os itens do arquivo já existiam na lista.');
            }
            return Array.from(newSystemMap.values());
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 text-slate-800 font-sans antialiased">
            {view === 'home' && (
                <HomePage 
                    onNavigateToFormulary={navigateToFormulary}
                    drugList={drugList}
                    conditionList={conditionList}
                    onAddDrugs={addDrugs}
                    onAddConditions={addConditions}
                />
            )}
            {view === 'formulary' && (
                <FormularyView 
                    onNavigateHome={navigateHome} 
                    initialDrug={initialDrug} 
                    drugList={drugList}
                />
            )}
        </div>
    );
};

export default App;
