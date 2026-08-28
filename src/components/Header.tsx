import React, { useState } from 'react';
import { Landmark, Menu, X, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab, onNavigateToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavSection = (sectionId: string) => {
    onNavigateToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleNavTab = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 border-b border-[#e8e6dc] bg-[#faf9f5]/95 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 flex justify-between items-center h-20">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavSection('inicio')}
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
            onClick={() => handleNavSection('inicio')}
            className={`transition-all duration-200 py-1 cursor-pointer focus:outline-none ${
              activeTab === 'inicio'
                ? 'text-[#7242be]'
                : 'text-[#4a4452] hover:text-[#141413]'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavSection('servicios')}
            className="transition-all duration-200 py-1 cursor-pointer focus:outline-none text-[#4a4452] hover:text-[#141413]"
          >
            Servicios
          </button>
          <button
            onClick={() => handleNavSection('fondos')}
            className="transition-all duration-200 py-1 cursor-pointer focus:outline-none text-[#4a4452] hover:text-[#141413]"
          >
            Fondos
          </button>
          <button
            onClick={() => handleNavSection('proceso')}
            className="transition-all duration-200 py-1 cursor-pointer focus:outline-none text-[#4a4452] hover:text-[#141413]"
          >
            Proceso
          </button>
          <button
            onClick={() => handleNavTab('contacto')}
            className={`transition-all duration-200 py-1 cursor-pointer focus:outline-none ${
              activeTab === 'contacto'
                ? 'text-[#7242be] border-b-2 border-[#7242be]'
                : 'text-[#4a4452] hover:text-[#141413]'
            }`}
          >
            Contacto
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavTab('contacto')}
            className={`font-sans-editorial text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded transition-all duration-200 cursor-pointer ${
              activeTab === 'contacto'
                ? 'bg-[#7242be] text-[#faf9f5] shadow-sm'
                : 'bg-[#8c5dd9] text-[#faf9f5] hover:bg-[#7242be]'
            }`}
          >
            Solicitar diagnóstico
          </button>
        </div>

        {/* Mobile Hamburger & Contact button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => handleNavTab('contacto')}
            className="text-[#7242be] font-sans-editorial text-xs uppercase tracking-wider font-semibold py-1.5 px-2 hover:opacity-80 cursor-pointer"
          >
            Solicitar diagnóstico
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-[#141413] hover:text-[#7242be] focus:outline-none cursor-pointer"
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
            onClick={() => handleNavSection('inicio')}
            className="text-left py-2 flex items-center justify-between font-semibold text-[#141413] cursor-pointer"
          >
            <span>Inicio</span>
          </button>
          <button
            onClick={() => handleNavSection('servicios')}
            className="text-left py-2 flex items-center justify-between font-semibold text-[#141413] cursor-pointer"
          >
            <span>Servicios</span>
          </button>
          <button
            onClick={() => handleNavSection('fondos')}
            className="text-left py-2 flex items-center justify-between font-semibold text-[#141413] cursor-pointer"
          >
            <span>Fondos</span>
          </button>
          <button
            onClick={() => handleNavSection('proceso')}
            className="text-left py-2 flex items-center justify-between font-semibold text-[#141413] cursor-pointer"
          >
            <span>Proceso</span>
          </button>
          <button
            onClick={() => handleNavTab('contacto')}
            className={`text-left py-2 flex items-center justify-between font-semibold cursor-pointer ${
              activeTab === 'contacto' ? 'text-[#7242be]' : 'text-[#141413]'
            }`}
          >
            <span>Contacto</span>
            {activeTab === 'contacto' && <ArrowRight className="w-4 h-4 text-[#7242be]" />}
          </button>
        </div>
      )}
    </header>
  );
};
