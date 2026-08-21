import React from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { ActiveTab } from '../types';

interface PrivacyViewProps {
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigateToTab }) => {
  return (
    <main className="w-full max-w-[1200px] mx-auto px-5 md:px-20 py-12 md:py-20 flex-grow">
      <article className="max-w-2xl mx-auto">
        {/* Top Back Navigation */}
        <div className="mb-6">
          <button
            onClick={() => onNavigateToTab('inicio')}
            className="inline-flex items-center gap-1.5 text-xs font-sans-editorial font-semibold uppercase tracking-wider text-[#4a4452] hover:text-[#7242be] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Inicio</span>
          </button>
        </div>

        {/* Legal Document Header */}
        <header className="mb-12">
          <p className="font-sans-editorial text-xs text-[#4a4452] mb-3 uppercase tracking-widest font-semibold">
            Legal Document
          </p>
          <h1 className="font-sans-editorial text-3xl md:text-5xl font-semibold text-[#141413] mb-6 tracking-tight">
            Políticas de Privacidad
          </h1>
          <p className="font-serif text-base text-[#4a4452] italic border-l-[3px] border-[#8c5dd9] pl-4 leading-relaxed">
            Última actualización: Octubre 2026. Este documento establece los términos bajo los cuales Medroa recopila, utiliza y protege la información de sus usuarios.
          </p>
        </header>

        {/* Content Sections */}
        <section className="space-y-8 font-serif text-base md:text-lg text-[#141413] leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="font-sans-editorial text-xl font-semibold text-[#141413] mb-4">
              1. Recopilación de Información
            </h2>
            <p className="text-[#4a4452] mb-4">
              En Medroa, la protección de sus datos es primordial. Recopilamos información personal de manera estrictamente necesaria para proveer nuestros servicios. Esto incluye, pero no se limita a, datos de registro, historial de interacciones y preferencias de uso.
            </p>
            <p className="text-[#4a4452]">
              La recolección de estos datos se realiza mediante consentimientos explícitos integrados en nuestros flujos de onboarding, garantizando total transparencia metodológica.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-t border-[#e8e6dc] pt-8">
            <h2 className="font-sans-editorial text-xl font-semibold text-[#141413] mb-4">
              2. Uso de los Datos
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#516439] mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base text-[#4a4452]">
                  Optimización de la experiencia del usuario y personalización de interfaces.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#516439] mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base text-[#4a4452]">
                  Análisis estadístico interno para mejora continua de nuestros algoritmos estructurales.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#516439] mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base text-[#4a4452]">
                  Comunicaciones administrativas estrictamente relevantes al servicio prestado.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="border-t border-[#e8e6dc] pt-8">
            <h2 className="font-sans-editorial text-xl font-semibold text-[#141413] mb-4">
              3. Arquitectura de Seguridad
            </h2>
            <p className="text-[#4a4452]">
              Implementamos protocolos de encriptación avanzados y almacenamiento segregado. Nuestros sistemas están diseñados bajo principios de minimización de datos y privacidad desde el diseño, asegurando que la información transitoria sea depurada conforme a normativas internacionales.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};
