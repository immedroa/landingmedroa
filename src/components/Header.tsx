import React, { useState } from 'react';
import { Landmark, Menu, X, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 border-b border-[#e8e6dc] bg-[#faf9f5]/95 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 flex justify-between items-center h-20">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNav('inicio')}
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80 text-left focus:outline-none"
        >
          <div className="w-8 h-8 flex items-center justify-center text-[#7242be]">
            <Landmark className="w-6 h-6 stroke-[2.2]" />
          </div>
          <span className="font-sans-editorial text-2xl md:text-3xl font-medium tracking-tight text-[#141413]">
            Medroa
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans-editorial text-xs uppercase tracking-wider font-semibold">
          <button
            onClick={() => handleNav('inicio')}
            className={`transition-all duration-200 py-1 cursor-pointer focus:outline-none ${
              activeTab === 'inicio'
                ? 'text-[#7242be] border-b-2 border-[#7242be]'
                : 'text-[#4a4452] hover:text-[#141413]'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNav('terminos')}
            className={`transition-all duration-200 py-1 cursor-pointer focus:outline-none ${
              activeTab === 'terminos'
                ? 'text-[#7242be] border-b-2 border-[#7242be]'
                : 'text-[#4a4452] hover:text-[#141413]'
            }`}
          >
            Términos
          </button>
          <button
            onClick={() => handleNav('privacidad')}
            className={`transition-all duration-200 py-1 cursor-pointer focus:outline-none ${
              activeTab === 'privacidad'
                ? 'text-[#7242be] border-b-2 border-[#7242be]'
                : 'text-[#4a4452] hover:text-[#141413]'
            }`}
          >
            Privacidad
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNav('contacto')}
            className={`font-sans-editorial text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded transition-all duration-200 cursor-pointer ${
              activeTab === 'contacto'
                ? 'bg-[#7242be] text-[#faf9f5] shadow-sm'
                : 'bg-[#8c5dd9] text-[#faf9f5] hover:bg-[#7242be]'
            }`}
          >
            Contacto
          </button>
        </div>

        {/* Mobile Hamburger & Contact button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => handleNav('contacto')}
            className="text-[#7242be] font-sans-editorial text-xs uppercase tracking-wider font-semibold py-1.5 px-2 hover:opacity-80"
          >
            Contacto
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-[#141413] hover:text-[#7242be] focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e8e6dc] bg-[#faf9f5] px-6 py-5 flex flex-col gap-4 font-sans-editorial text-sm">
          <button
            onClick={() => handleNav('inicio')}
            className={`text-left py-2 flex items-center justify-between font-semibold ${
              activeTab === 'inicio' ? 'text-[#7242be]' : 'text-[#141413]'
            }`}
          >
            <span>Inicio & Fondos</span>
            {activeTab === 'inicio' && <ArrowRight className="w-4 h-4 text-[#7242be]" />}
          </button>
          <button
            onClick={() => handleNav('contacto')}
            className={`text-left py-2 flex items-center justify-between font-semibold ${
              activeTab === 'contacto' ? 'text-[#7242be]' : 'text-[#141413]'
            }`}
          >
            <span>Contáctanos</span>
            {activeTab === 'contacto' && <ArrowRight className="w-4 h-4 text-[#7242be]" />}
          </button>
          <button
            onClick={() => handleNav('terminos')}
            className={`text-left py-2 flex items-center justify-between font-semibold ${
              activeTab === 'terminos' ? 'text-[#7242be]' : 'text-[#141413]'
            }`}
          >
            <span>Términos de Servicio</span>
            {activeTab === 'terminos' && <ArrowRight className="w-4 h-4 text-[#7242be]" />}
          </button>
          <button
            onClick={() => handleNav('privacidad')}
            className={`text-left py-2 flex items-center justify-between font-semibold ${
              activeTab === 'privacidad' ? 'text-[#7242be]' : 'text-[#141413]'
            }`}
          >
            <span>Políticas de Privacidad</span>
            {activeTab === 'privacidad' && <ArrowRight className="w-4 h-4 text-[#7242be]" />}
          </button>
        </div>
      )}
    </header>
  );
};
