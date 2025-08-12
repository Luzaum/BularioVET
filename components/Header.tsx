
import React from 'react';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  onNavigateHome: () => void;
}

const SearchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const HomeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);


export const Header: React.FC<HeaderProps> = ({ onSearchChange, onNavigateHome }) => {
  return (
    <div className="p-4 bg-white border-b border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-slate-800">
          Bulário
        </h1>
        <button 
          onClick={onNavigateHome}
          className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-emerald-600 transition-colors"
          aria-label="Voltar à página inicial"
        >
            <HomeIcon />
        </button>
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Buscar fármaco..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Buscar fármaco"
        />
      </div>
    </div>
  );
};
