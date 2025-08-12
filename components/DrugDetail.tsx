
import React from 'react';
import { Drug, Dose } from '../types';
import { InfoIcon } from './Tooltip';

const DetailSection: React.FC<{ title: string; tooltipText?: string; children: React.ReactNode }> = ({ title, tooltipText, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-emerald-800 mb-3 flex items-center border-b-2 border-emerald-100 pb-2">
      {title}
      {tooltipText && <InfoIcon tooltipText={tooltipText} />}
    </h2>
    <div className="text-slate-700 leading-relaxed space-y-2 text-justify">
      {children}
    </div>
  </section>
);

const DoseTable: React.FC<{ doses: Dose[] }> = ({ doses }) => (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full bg-white text-sm">
            <thead className="bg-slate-100">
                <tr>
                    <th className="py-2 px-3 border-b text-left font-semibold text-slate-600">Espécie</th>
                    <th className="py-2 px-3 border-b text-left font-semibold text-slate-600">Indicação</th>
                    <th className="py-2 px-3 border-b text-left font-semibold text-slate-600">Dose</th>
                    <th className="py-2 px-3 border-b text-left font-semibold text-slate-600">Via</th>
                    <th className="py-2 px-3 border-b text-left font-semibold text-slate-600">Intervalo</th>
                    <th className="py-2 px-3 border-b text-left font-semibold text-slate-600">Notas</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
                {doses.map((dose, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                        <td className="py-2 px-3">{dose.species}</td>
                        <td className="py-2 px-3">{dose.indication}</td>
                        <td className="py-2 px-3">{dose.dose}</td>
                        <td className="py-2 px-3">{dose.route}</td>
                        <td className="py-2 px-3">{dose.interval}</td>
                        <td className="py-2 px-3">{dose.notes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


export const DrugDetail: React.FC<{ drug: Drug | null }> = ({ drug }) => {
  if (!drug) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-slate-500 bg-white p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h2 className="text-xl font-semibold text-slate-700">Bem-vindo ao Estoque Farmacológico</h2>
        <p className="max-w-md mt-2">Selecione um fármaco na lista à esquerda para ver os detalhes ou retorne à página inicial para pesquisar por condição clínica.</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 overflow-y-auto h-full bg-white">
        <header className="mb-8 pb-4 border-b border-slate-200">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-700">{drug.name}</h1>
            <p className="text-lg text-slate-600 mt-1">{drug.class}</p>
             {drug.sector && <p className="text-sm font-semibold text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded mt-2">{drug.sector}</p>}
            <p className="text-sm text-slate-500 mt-2">Nomes Comerciais: {drug.commercialNames.join(', ')}</p>
        </header>

        <DetailSection title="Destaques Clínicos">
            <ul className="list-disc list-inside space-y-2 text-slate-700 marker:text-emerald-500">
                {drug.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
            </ul>
        </DetailSection>

         <DetailSection title="Indicações Clínicas e Uso" tooltipText={drug.clinicalIndications.tooltip}>
            <p>{drug.clinicalIndications.text}</p>
        </DetailSection>

         <DetailSection title="Mecanismo de Ação e Farmacodinâmica" tooltipText={drug.mechanism.tooltip}>
            <p>{drug.mechanism.text}</p>
        </DetailSection>
        
        <DetailSection title="Doses e Administração">
            <DoseTable doses={drug.doses} />
        </DetailSection>

        {drug.dilutionAndAdministration && (
            <DetailSection title="Diluição e Administração" tooltipText={drug.dilutionAndAdministration.tooltip}>
                <p>{drug.dilutionAndAdministration.text}</p>
            </DetailSection>
        )}
        
         <DetailSection title="Farmacocinética" tooltipText={drug.pharmacokinetics.tooltip}>
            <p>{drug.pharmacokinetics.text}</p>
        </DetailSection>

         <DetailSection title="Contraindicações, Advertências e Precauções" tooltipText={drug.contraindications.tooltip}>
            <p>{drug.contraindications.text}</p>
        </DetailSection>

         <DetailSection title="Efeitos Adversos" tooltipText={drug.adverseEffects.tooltip}>
            <p>{drug.adverseEffects.text}</p>
        </DetailSection>

         <DetailSection title="Interações Medicamentosas" tooltipText={drug.interactions.tooltip}>
            <p>{drug.interactions.text}</p>
        </DetailSection>

         <DetailSection title="Monitoramento Clínico" tooltipText={drug.monitoring.tooltip}>
            <p>{drug.monitoring.text}</p>
        </DetailSection>
        
         <DetailSection title="Evidências de Eficácia e Notas do Especialista" tooltipText={drug.evidence.tooltip}>
            <p>{drug.evidence.text}</p>
        </DetailSection>
    </div>
  );
};
