import React from 'react';
import { ActiveTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: ActiveTab) => void;
  activeTab: ActiveTab;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, activeTab }) => {
  const handleNav = (tab: ActiveTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 md:py-20 border-t border-[#e8e6dc] bg-[#e8e6dc]/60 mt-auto">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-3">
          <span className="font-sans-editorial text-xl font-semibold text-[#141413] tracking-tight">
            Medroa
          </span>
          <p className="font-serif text-sm text-[#4a4452] leading-relaxed">
            © 2026 Medroa. Todos los derechos reservados.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-col gap-3">
          <nav className="flex flex-col gap-2 font-serif text-sm">
            <button
              onClick={() => handleNav('inicio')}
              className={`text-left transition-colors duration-200 cursor-pointer ${
                activeTab === 'inicio' ? 'text-[#141413] font-semibold underline' : 'text-[#4a4452] hover:text-[#7242be]'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNav('contacto')}
              className={`text-left transition-colors duration-200 cursor-pointer ${
                activeTab === 'contacto' ? 'text-[#141413] font-semibold underline' : 'text-[#4a4452] hover:text-[#7242be]'
              }`}
            >
              Contacto
            </button>
            <button
              onClick={() => handleNav('privacidad')}
              className={`text-left transition-colors duration-200 cursor-pointer ${
                activeTab === 'privacidad' ? 'text-[#141413] font-semibold underline' : 'text-[#4a4452] hover:text-[#7242be]'
              }`}
            >
              Privacidad
            </button>
            <button
              onClick={() => handleNav('terminos')}
              className={`text-left transition-colors duration-200 cursor-pointer ${
                activeTab === 'terminos' ? 'text-[#141413] font-semibold underline' : 'text-[#4a4452] hover:text-[#7242be]'
              }`}
            >
              Términos
            </button>
          </nav>
        </div>

        {/* Architectural Motto */}
        <div className="flex flex-col justify-start">
          <p className="font-sans-editorial text-sm text-[#4a4452] leading-relaxed italic border-l-2 border-[#b0aea5] pl-3">
            Diseño enfocado en la claridad intelectual y la permanencia arquitectónica.
          </p>
        </div>
      </div>
    </footer>
  );
};
