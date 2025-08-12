
import React, { useState, useMemo } from 'react';
import { read, utils, WorkBook } from 'xlsx';
import { Drug, SuggestedDrug, ConditionSystem, ClinicalCondition, Dose } from './types';
import { findDrugsForCondition } from './api';
import { LoadingSpinner } from './LoadingSpinner';
import { parseDrugsFromText } from './utils/freeTextParser';

// --- PROPS INTERFACE ---
interface HomePageProps {
    onNavigateToFormulary: (drug?: Drug | null) => void;
    drugList: Drug[];
    conditionList: ConditionSystem[];
    onAddDrugs: (drugs: Drug[]) => void;
    onAddConditions: (conditions: ConditionSystem[]) => void;
}

// --- HELPER FUNCTIONS ---
const normalizeText = (text: any = ''): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[–—]/g, '-'); // standardize dashes
};

// --- CANONICAL SCHEMA ---
const CANONICAL_COLUMNS: string[] = [
  'Setor', 'Fármaco (genérico)', 'Marcas/Apresentações comuns', 
  'Indicações clínicas (resumo)', 'Mecanismo de ação', 'Dose – Cães (padrão)', 
  'Dose – Gatos (padrão)', 'Doses por condição (detalhes)', 'Vias de administração',
  'Infusão IV – diluentes aceitos', 'Compatibilidade IV (Y-site) – notas', 
  'Interações medicamentosas (principais)', 'Precauções/Monitorização', 'PK - Absorção',
  'PK - Metabolismo', 'PK - Excreção', 'Fonte – Plumb’s (cap./pág.)', 
  'Observações (Cunningham/Nelson & Couto)'
];
const REQUIRED_CANONICAL_COLUMNS = ['Fármaco (genérico)'];

// --- IMPORT VIEW COMPONENT ---

interface ImportViewProps {
    onBack: () => void;
    onAddDrugs: (drugs: Drug[]) => void;
}

const ImportView: React.FC<ImportViewProps> = ({ onBack, onAddDrugs }) => {
    type ImportStep = 'upload' | 'mapping' | 'preview' | 'done';
    
    const [step, setStep] = useState<ImportStep>('upload');
    const [fileName, setFileName] = useState('');
    const [fileHeaders, setFileHeaders] = useState<string[]>([]);
    const [fileData, setFileData] = useState<any[]>([]);
    const [columnMap, setColumnMap] = useState<Record<string, string>>({});
    const [processedData, setProcessedData] = useState<Drug[]>([]);
    const [importStats, setImportStats] = useState({ total: 0, merged: 0, warnings: 0 });
    const [error, setError] = useState<string | null>(null);

    const handleFileDrop = (file: File) => {
        setError(null);
        if (file.name.endsWith('.xlsm')) {
            setError("Arquivos com macro (.xlsm) não são permitidos por segurança.");
            return;
        }
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = e.target?.result;
                const workbook = read(data, { type: 'array' });
                
                if (new Set(workbook.SheetNames.map(s => s.toLowerCase())).size !== workbook.SheetNames.length) {
                    setError("O arquivo contém abas com nomes duplicados (ignorando maiúsculas/minúsculas), o que não é permitido.");
                    return;
                }

                let allRows: any[] = [];
                const sheetNames = workbook.SheetNames;
                const masterSheetName = sheetNames.find(s => s.toUpperCase() === 'MASTER');

                if (masterSheetName) {
                    const masterSheet = workbook.Sheets[masterSheetName];
                    const rows = utils.sheet_to_json(masterSheet, { defval: "" });
                    rows.forEach((row: any) => row.__sheetName = masterSheetName);
                    allRows.push(...rows);
                }

                sheetNames.forEach(sheetName => {
                    if (sheetName.toUpperCase() !== 'MASTER') {
                        const worksheet = workbook.Sheets[sheetName];
                        const rows = utils.sheet_to_json(worksheet, { defval: "" });
                        rows.forEach((row: any) => row.__sheetName = sheetName);
                        allRows.push(...rows);
                    }
                });

                if (allRows.length > 0) {
                    const headers: string[] = Object.keys(allRows[0]);
                    setFileHeaders(headers);
                    setFileData(allRows);
                    autoMapColumns(headers);
                    setStep('mapping');
                } else {
                    setError("O arquivo parece estar vazio ou em um formato não reconhecido.");
                }
            } catch (err) {
                console.error(err);
                setError("Ocorreu um erro ao ler o arquivo. Verifique se o formato é .xlsx ou .csv válido.");
            }
        };
        reader.readAsArrayBuffer(file);
    };

    const autoMapColumns = (headers: string[]) => {
        const newMap: Record<string, string> = {};
        CANONICAL_COLUMNS.forEach(canonCol => {
            const normalizedCanon = normalizeText(canonCol);
            const foundHeader = headers.find(header => normalizeText(header) === normalizedCanon);
            if (foundHeader) {
                newMap[canonCol] = foundHeader;
            }
        });
        setColumnMap(newMap);
    };

    const handleProceedToPreview = () => {
        setError(null);
        const mappedRequiredCols = REQUIRED_CANONICAL_COLUMNS.filter(col => !columnMap[col]);
        if (mappedRequiredCols.length > 0) {
            setError(`As seguintes colunas obrigatórias não foram mapeadas: ${mappedRequiredCols.join(', ')}`);
            return;
        }
        
        // 1. Map raw data to canonical schema
        const canonicalData = fileData.map(row => {
            const newRow: any = { __sheetName: row.__sheetName };
            CANONICAL_COLUMNS.forEach(canonCol => {
                newRow[canonCol] = row[columnMap[canonCol]] || '';
            });
            return newRow;
        });

        // 2. Normalize and Deduplicate
        const drugGroups = new Map<string, any[]>();
        canonicalData.forEach(row => {
            let sector = row['Setor'] || row.__sheetName;
            let drugName = row['Fármaco (genérico)'];

            if (!drugName) return; // Skip rows without a drug name

            const key = normalizeText(`${sector}::${drugName}`);
            if (!drugGroups.has(key)) {
                drugGroups.set(key, []);
            }
            drugGroups.get(key)!.push(row);
        });

        // 3. Merge duplicated rows
        const mergedData: any[] = [];
        let mergedCount = 0;
        drugGroups.forEach(group => {
            if (group.length === 1) {
                mergedData.push(group[0]);
            } else {
                const base = { ...group[0] };
                mergedCount += group.length - 1;
                for (let i = 1; i < group.length; i++) {
                    CANONICAL_COLUMNS.forEach(col => {
                        if (!base[col] && group[i][col]) {
                            base[col] = group[i][col];
                        }
                    });
                }
                mergedData.push(base);
            }
        });

        setImportStats({ total: fileData.length, merged: mergedCount, warnings: 0 });
        
        // 4. Convert to Drug type
        const finalDrugs = mergedData.map(row => mapCanonicalToDrug(row));
        setProcessedData(finalDrugs);
        setStep('preview');
    };

    const mapCanonicalToDrug = (row: any): Drug => {
        const pk_text = [row['PK - Absorção'], row['PK - Metabolismo'], row['PK - Excreção']].filter(Boolean).join('\n');
        const evidence_text = [row['Fonte – Plumb’s (cap./pág.)'], row['Observações (Cunningham/Nelson & Couto)']].filter(Boolean).join('\n');
        let dilution_text = [row['Infusão IV – diluentes aceitos'], row['Compatibilidade IV (Y-site) – notas']].filter(Boolean).join('\n');
        
        const doses: Dose[] = [];
        if (row['Dose – Cães (padrão)']) {
            doses.push({ species: 'Cão', indication: 'Padrão', dose: row['Dose – Cães (padrão)'], route: row['Vias de administração'] || 'N/A', interval: 'N/A', notes: '' });
        }
        if (row['Dose – Gatos (padrão)']) {
            doses.push({ species: 'Gato', indication: 'Padrão', dose: row['Dose – Gatos (padrão)'], route: row['Vias de administração'] || 'N/A', interval: 'N/A', notes: '' });
        }
         // Append detailed dose info to dilution/admin notes if it exists
        if (row['Doses por condição (detalhes)']) {
            dilution_text += (dilution_text ? '\n\n' : '') + `Doses por Condição (Detalhes):\n${row['Doses por condição (detalhes)']}`;
        }
        
            return {
            name: row['Fármaco (genérico)'] || 'Nome Desconhecido',
            sector: row['Setor'] || row.__sheetName || 'Geral',
            class: row['Mecanismo de ação'] || '',
            commercialNames: row['Marcas/Apresentações comuns'] ? String(row['Marcas/Apresentações comuns']).split(',').map(s => s.trim()) : [],
            highlights: [], // Not in canonical schema
            clinicalIndications: { text: row['Indicações clínicas (resumo)'] || '' },
            mechanism: { text: row['Mecanismo de ação'] || '' },
            pharmacokinetics: { text: pk_text },
            doses: doses,
            dilutionAndAdministration: dilution_text ? { text: dilution_text } : undefined,
            contraindications: { text: row['Precauções/Monitorização'] || '' },
            adverseEffects: { text: '' }, // Not in canonical schema
            interactions: { text: row['Interações medicamentosas (principais)'] || '' },
            monitoring: { text: row['Precauções/Monitorização'] || '' },
            evidence: { text: evidence_text }
        };
    };

    const handleFinalImport = () => {
        onAddDrugs(processedData);
        setStep('done');
    };

    const resetImporter = () => {
        setStep('upload');
        setFileName('');
        setFileHeaders([]);
        setFileData([]);
        setColumnMap({});
        setProcessedData([]);
        setImportStats({ total: 0, merged: 0, warnings: 0 });
        setError(null);
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-50">
            <main className="w-full max-w-5xl">
                <button onClick={onBack} className="mb-6 text-emerald-600 hover:text-emerald-800 font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Voltar
                </button>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-800">Importar Bulário</h1>
                    <p className="text-md text-slate-500 mt-1">Siga as etapas para adicionar ou atualizar medicamentos.</p>
                </div>

                {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md" role="alert"><p className="font-bold">Erro</p><p>{error}</p></div>}
                
                {step === 'upload' && <UploadStep onFileDrop={handleFileDrop} />}
                {step === 'mapping' && <MappingStep fileName={fileName} fileHeaders={fileHeaders} columnMap={columnMap} setColumnMap={setColumnMap} onProceed={handleProceedToPreview} />}
                {step === 'preview' && <PreviewStep data={processedData} stats={importStats} onConfirm={handleFinalImport} onBack={() => setStep('mapping')} />}
                {step === 'done' && <DoneStep stats={importStats} onReset={resetImporter} />}
            </main>
        </div>
    );
};

const UploadStep: React.FC<{onFileDrop: (file: File) => void}> = ({ onFileDrop }) => {
    const [isDragging, setIsDragging] = useState(false);
    const handleDrag = (e: React.DragEvent, enter: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(enter);
    };
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileDrop(e.dataTransfer.files[0]);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileDrop(e.target.files[0]);
        }
    }
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Etapa 1: Upload do Arquivo</h2>
            <p className="text-sm text-slate-500 mb-4">Arraste e solte ou selecione um arquivo .xlsx ou .csv.</p>
            <label 
                htmlFor="file-upload" 
                onDragEnter={(e) => handleDrag(e, true)}
                onDragLeave={(e) => handleDrag(e, false)}
                onDragOver={(e) => handleDrag(e, true)}
                onDrop={handleDrop}
                className={`flex justify-center w-full h-48 px-6 pt-5 pb-6 border-2 ${isDragging ? 'border-emerald-500 bg-emerald-50' : 'border-slate-300'} border-dashed rounded-md cursor-pointer transition-colors`}
            >
                <div className="space-y-1 text-center self-center">
                    <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div className="flex text-sm text-slate-600"><p className="pl-1">Arraste seu arquivo aqui ou <span className="font-semibold text-emerald-600">clique para selecionar</span></p></div>
                    <p className="text-xs text-slate-500">XLSX, CSV até 15MB</p>
                </div>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange} accept=".xlsx, .xls, .csv" />
            </label>
        </div>
    );
};

const MappingStep: React.FC<{fileName: string; fileHeaders: string[]; columnMap: Record<string, string>; setColumnMap: (map: Record<string, string>) => void; onProceed: () => void;}> = ({ fileName, fileHeaders, columnMap, setColumnMap, onProceed }) => {
    const handleMapChange = (canonicalCol: string, fileCol: string) => {
        setColumnMap({ ...columnMap, [canonicalCol]: fileCol });
    };
    const unmappedRequired = REQUIRED_CANONICAL_COLUMNS.some(col => !columnMap[col]);

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Etapa 2: Mapeamento de Colunas</h2>
            <p className="text-sm text-slate-500 mb-4">Arquivo: <span className="font-medium">{fileName}</span></p>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {CANONICAL_COLUMNS.map(canonCol => {
                    const isRequired = REQUIRED_CANONICAL_COLUMNS.includes(canonCol);
                    const isMapped = !!columnMap[canonCol];
                    return (
                        <div key={canonCol} className="grid grid-cols-2 gap-4 items-center">
                            <label className="text-sm font-semibold text-slate-700 text-right flex items-center justify-end">
                                {isRequired && <span className="text-red-500 mr-1">*</span>}
                                {canonCol}
                                {!isMapped && isRequired && <span className="ml-2 text-red-500 text-xs">(Obrigatório)</span>}
                            </label>
                            <select
                                value={columnMap[canonCol] || ''}
                                onChange={(e) => handleMapChange(canonCol, e.target.value)}
                                className={`w-full text-sm border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${!isMapped && isRequired ? 'border-red-500' : 'border-slate-300'}`}
                            >
                                <option value="">-- Não Mapeado --</option>
                                {fileHeaders.map(header => <option key={header} value={header}>{header}</option>)}
                            </select>
                        </div>
                    )
                })}
            </div>
            <button onClick={onProceed} disabled={unmappedRequired} className="mt-6 w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed">
                {unmappedRequired ? "Mapeie os campos obrigatórios" : "Processar e Visualizar"}
            </button>
        </div>
    );
};

const PreviewStep: React.FC<{data: Drug[]; stats: any; onConfirm: () => void; onBack: () => void;}> = ({ data, stats, onConfirm, onBack }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Etapa 3: Pré-visualização e Confirmação</h2>
            <p className="text-sm text-slate-500 mb-4">Confira os dados processados antes da importação final.</p>
            <div className="flex justify-around p-4 bg-slate-50 rounded-lg mb-4 text-center">
                <div><p className="text-2xl font-bold text-slate-800">{stats.total}</p><p className="text-sm text-slate-500">Linhas Lidas</p></div>
                <div><p className="text-2xl font-bold text-emerald-600">{stats.merged}</p><p className="text-sm text-slate-500">Duplicatas Unificadas</p></div>
                <div><p className="text-2xl font-bold text-blue-600">{data.length}</p><p className="text-sm text-slate-500">Registros Finais</p></div>
            </div>
            <div className="overflow-x-auto max-h-96 border rounded-lg">
                <table className="min-w-full bg-white text-sm">
                    <thead className="bg-slate-100 sticky top-0"><tr >
                        <th className="py-2 px-3 text-left font-semibold text-slate-600">Fármaco (genérico)</th>
                        <th className="py-2 px-3 text-left font-semibold text-slate-600">Setor</th>
                        <th className="py-2 px-3 text-left font-semibold text-slate-600">Nomes Comerciais</th>
                    </tr></thead>
                    <tbody className="divide-y divide-slate-200">
                        {data.slice(0, 50).map((drug, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                                <td className="py-2 px-3 font-medium text-slate-800">{drug.name}</td>
                                <td className="py-2 px-3 text-slate-600">{drug.sector}</td>
                                <td className="py-2 px-3 text-slate-600">{drug.commercialNames.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {data.length > 50 && <p className="text-xs text-center text-slate-500 mt-2">Mostrando as primeiras 50 de {data.length} linhas.</p>}
            <div className="flex gap-4 mt-6">
                 <button onClick={onBack} className="w-1/3 bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-colors">Voltar</button>
                <button onClick={onConfirm} className="w-2/3 bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors">Confirmar e Importar {data.length} Medicamentos</button>
            </div>
        </div>
    );
};

const DoneStep: React.FC<{stats: any; onReset: () => void}> = ({ stats, onReset }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-200 text-center">
             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Importação Concluída!</h2>
            <p className="text-slate-600 mb-4">{stats.total - stats.merged} registros foram adicionados ou atualizados no seu bulário.</p>
            <button onClick={onReset} className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-700 transition-colors">Importar Outro Arquivo</button>
        </div>
    );
};

// --- MAIN HOME PAGE COMPONENT ---
const HomePage: React.FC<HomePageProps> = ({ onNavigateToFormulary, drugList, conditionList, onAddDrugs, onAddConditions }) => {
    const [pageState, setPageState] = useState<'main' | 'searching' | 'importing' | 'importing-text'>('main');
    const [selectedConditions, setSelectedConditions] = useState<Set<string>>(new Set());
    const [results, setResults] = useState<SuggestedDrug[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleToggleCondition = (conditionName: string) => {
        setSelectedConditions(prev => {
            const newSet = new Set(prev);
            if (newSet.has(conditionName)) {
                newSet.delete(conditionName);
            } else {
                newSet.add(conditionName);
            }
            return newSet;
        });
    };

    const handleSearch = async () => {
        if (selectedConditions.size === 0) return;
        
        setIsLoading(true);
        setError(null);
        setHasSearched(true);
        setResults([]);

        try {
            const data = await findDrugsForCondition(Array.from(selectedConditions), drugList);
            setResults(data);
        } catch (err: any) {
            setError(err.message || 'Ocorreu um erro desconhecido.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const findDrugByName = (name: string): Drug | undefined => {
        return drugList.find(d => d.name.toLowerCase() === name.toLowerCase());
    }

    const resetSearch = () => {
        setPageState('main');
        setHasSearched(false);
        setResults([]);
        setError(null);
        setSelectedConditions(new Set());
    };

    if (pageState === 'importing') {
        return <ImportView onBack={resetSearch} onAddDrugs={onAddDrugs} />;
    }

    if (pageState === 'importing-text') {
        return <TextImportView onBack={resetSearch} onAddDrugs={onAddDrugs} />;
    }

    if (pageState === 'main') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-emerald-700">Estoque Farmacológico</h1>
                    <p className="text-lg text-slate-500 mt-2">Seu assistente de farmacologia veterinária.</p>
                </header>
                <main className="w-full max-w-2xl flex flex-col items-center gap-6">
                    <button 
                        onClick={() => onNavigateToFormulary()} 
                        className="group w-full bg-emerald-100/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-200 text-center hover:shadow-emerald-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-3xl font-bold text-emerald-800 flex items-center justify-center gap-3">
                            <span className="text-4xl transition-transform group-hover:scale-110">📖</span>
                            Consultar Bulário Completo
                        </h2>
                        <p className="text-emerald-700/90 mt-2">Navegue pela lista completa de fármacos, doses e informações detalhadas.</p>
                    </button>

                    <button 
                        onClick={() => setPageState('searching')} 
                        className="group w-full md:w-11/12 bg-blue-100/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200 text-center hover:shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-bold text-blue-800 flex items-center justify-center gap-3">
                            <span className="text-2xl transition-transform group-hover:rotate-[-10deg]">🩺</span>
                            Pesquisar por Condição Clínica
                        </h2>
                        <p className="text-blue-700/90 mt-2 text-sm">Receba sugestões de fármacos com base em IA para condições específicas.</p>
                    </button>
                    
                     <button 
                        onClick={() => setPageState('importing')} 
                        className="group w-full md:w-10/12 bg-purple-100/60 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-purple-200 text-center hover:shadow-purple-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-lg font-bold text-purple-800 flex items-center justify-center gap-3">
                            <span className="text-2xl transition-transform group-hover:translate-y-[-2px]">📤</span>
                             Importar Dados do Bulário
                        </h2>
                        <p className="text-purple-700/90 mt-1 text-xs">Adicione ou atualize medicamentos a partir de uma planilha Excel.</p>
                    </button>

                    <button 
                        onClick={() => setPageState('importing-text')} 
                        className="group w-full md:w-10/12 bg-orange-100/60 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-orange-200 text-center hover:shadow-orange-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-lg font-bold text-orange-800 flex items-center justify-center gap-3">
                            <span className="text-2xl">📝</span>
                            Importar por Texto (Colar)
                        </h2>
                        <p className="text-orange-700/90 mt-1 text-xs">Cole blocos de texto do bulário e deixe o app organizar automaticamente.</p>
                    </button>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-50">
            <main className="w-full max-w-5xl">
                <button onClick={resetSearch} className="mb-6 text-emerald-600 hover:text-emerald-800 font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Voltar
                </button>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Selecione as Condições Clínicas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 max-h-[50vh] overflow-y-auto pr-2">
                        {conditionList.map(system => (
                            <div key={system.systemName}>
                                <h3 className="font-bold text-emerald-700 mb-2 border-b border-emerald-200 pb-1">{system.systemName}</h3>
                                <div className="space-y-2">
                                    {system.conditions.map(condition => (
                                        <label key={condition.name} className="flex items-center space-x-3 cursor-pointer">
                                            <input 
                                                type="checkbox"
                                                checked={selectedConditions.has(condition.name)}
                                                onChange={() => handleToggleCondition(condition.name)}
                                                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <span className="text-slate-700">{condition.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleSearch}
                        disabled={isLoading || selectedConditions.size === 0}
                        className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400 flex items-center justify-center"
                    >
                        {isLoading ? <LoadingSpinner /> : `Obter Sugestões (${selectedConditions.size})`}
                    </button>
                </div>
                
                {hasSearched && (
                    <div className="mt-12 w-full">
                        <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">Resultados da Análise</h3>
                        {isLoading && <div className="flex justify-center"><LoadingSpinner /></div>}
                        {error && <p className="text-center text-red-500 bg-red-100 p-4 rounded-lg">{error}</p>}
                        {!isLoading && !error && results.length === 0 && <p className="text-center text-slate-500 bg-slate-100 p-4 rounded-lg">Nenhuma sugestão de fármaco encontrada para as condições descritas.</p>}
                        
                        <div className="space-y-4">
                            {results.map((res, index) => {
                                const drugDetails = findDrugByName(res.drugName);
                                return (
                                <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 transition-all hover:shadow-md">
                                    <div className="flex justify-between items-start gap-4">
                                        <h4 className="text-xl font-bold text-emerald-700">{res.drugName}</h4>
                                        {drugDetails && (
                                            <button onClick={() => onNavigateToFormulary(drugDetails)} className="flex-shrink-0 text-sm bg-emerald-100 text-emerald-800 font-semibold py-1 px-3 rounded-full hover:bg-emerald-200 transition">
                                                Ver no Bulário
                                            </button>
                                        )}
                                    </div>
                                    <div className="mt-3 space-y-2 text-sm text-slate-800">
                                      <p><strong className="font-semibold text-slate-600">Justificativa:</strong> {res.justification}</p>
                                      <p><strong className="font-semibold text-slate-600">Dose Sugerida:</strong> {res.dose}</p>
                                      <p><strong className="font-semibold text-slate-600">Contraindicação Chave:</strong> {res.contraindication}</p>
                                      <p><strong className="font-semibold text-slate-600">Interações:</strong> {res.interactions}</p>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default HomePage;

// --- TEXT IMPORT VIEW ---
interface TextImportViewProps { onBack: () => void; onAddDrugs: (drugs: Drug[]) => void; }
const TextImportView: React.FC<TextImportViewProps> = ({ onBack, onAddDrugs }) => {
    const [rawText, setRawText] = useState<string>('');
    const [parsed, setParsed] = useState<Drug[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleParse = () => {
        setError(null);
        try {
            const result = parseDrugsFromText(rawText);
            setParsed(result);
        } catch (e: any) {
            setError(e.message || 'Falha ao processar o texto.');
        }
    };

    const handleConfirm = () => {
        if (parsed && parsed.length > 0) {
            onAddDrugs(parsed);
            onBack();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-50">
            <main className="w-full max-w-5xl">
                <button onClick={onBack} className="mb-6 text-emerald-600 hover:text-emerald-800 font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Voltar
                </button>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-800 mb-2">Importar por Texto (Colar)</h2>
                    <p className="text-sm text-slate-500 mb-4">Cole aqui o bloco de texto no formato livre. O app identificará seções como Indicações, Mecanismo, Doses, etc., e criará as entradas do bulário.</p>
                    <textarea
                        className="w-full h-72 p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm"
                        placeholder="Cole aqui o texto do(s) medicamento(s)..."
                        value={rawText}
                        onChange={(e) => setRawText(e.target.value)}
                    />
                    <div className="flex gap-3 mt-4">
                        <button onClick={handleParse} className="bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">Processar Texto</button>
                        {parsed && parsed.length > 0 && (
                            <button onClick={handleConfirm} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Confirmar e Importar {parsed.length} medicamento(s)</button>
                        )}
                    </div>
                    {error && <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md">{error}</div>}
                    {parsed && (
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Prévia</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {parsed.map((d, i) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                                        <p className="font-bold text-emerald-700">{d.name}</p>
                                        <p className="text-xs text-slate-600">{d.class}</p>
                                        <p className="text-xs text-slate-600">Nomes Comerciais: {d.commercialNames.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};
