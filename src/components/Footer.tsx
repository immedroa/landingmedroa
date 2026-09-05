import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { ActiveTab } from '../types';

const TiktokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

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
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/marfinanciamient"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a4452] hover:text-[#8c5dd9] transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/mar.financiamiento/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a4452] hover:text-[#8c5dd9] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@mar.financiamiento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a4452] hover:text-[#8c5dd9] transition-colors duration-200"
              aria-label="TikTok"
            >
              <TiktokIcon className="w-5 h-5" />
            </a>
          </div>
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

        {/* Company Summary */}
        <div className="flex flex-col justify-start">
          <p className="font-sans-editorial text-sm text-[#4a4452] leading-relaxed italic border-l-2 border-[#8c5dd9] pl-3">
            Asesoría técnica y estratégica para la postulación a fondos de cofinanciamiento no reembolsable.
          </p>
        </div>
      </div>
    </footer>
  );
};
