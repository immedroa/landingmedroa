import React, { useState } from 'react';
import {
  Laptop,
  CheckCircle,
  Lightbulb,
  Sparkles,
  ChevronRight,
  Coins,
  Code,
  Target,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES, HERO_IMAGE_URL, SERVICES, METHOD_STEPS } from '../data';
import { ActiveTab, CategoryInfo, ServiceInfo } from '../types';
import { ContactView } from './ContactView';

interface HomeViewProps {
  onNavigateToContact: (prefillCategory?: string) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
  prefillProject: string;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateToContact, prefillProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'devices':
        return <Laptop className="w-8 h-8 text-[#8c5dd9]" />;
      case 'verified':
        return <CheckCircle className="w-8 h-8 text-[#8c5dd9]" />;
      case 'lightbulb':
        return <Lightbulb className="w-8 h-8 text-[#8c5dd9]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#8c5dd9]" />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'coins':
        return <Coins className="w-6 h-6" />;
      case 'code':
        return <Code className="w-6 h-6" />;
      case 'marketing':
        return <Target className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const handleStartConsultation = (categoryTitle?: string) => {
    onNavigateToContact(categoryTitle);
  };

  const handleServiceAction = (srv: ServiceInfo) => {
    handleStartConsultation(srv.prefillValue);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="inicio" className="w-full max-w-[1200px] mx-auto px-5 md:px-20 py-12 md:py-20 flex flex-col gap-6 relative">
        <span className="font-sans-editorial text-xs uppercase tracking-widest text-[#8c5dd9] font-semibold">
          Consultoría en fondos no reembolsables
        </span>
        <h1 className="font-sans-editorial text-3xl md:text-6xl font-semibold text-[#141413] tracking-tight max-w-[95%] md:max-w-[90%] leading-[1.15]">
          Formulamos y acompañamos postulaciones a fondos no reembolsables
        </h1>
        <p className="font-serif text-lg md:text-xl text-[#4a4452] max-w-[95%] md:max-w-[80%] leading-relaxed">
          Ayudamos a empresas y mipymes a identificar oportunidades de cofinanciamiento, estructurar proyectos sólidos y postular con mayor claridad técnica, documental y estratégica.
        </p>

        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('servicios');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center bg-[#8c5dd9] text-[#faf9f5] px-6 py-3.5 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#7242be] transition-colors cursor-pointer text-center border-none"
          >
            Explorar servicios
          </button>
          <button
            onClick={() => handleStartConsultation()}
            className="inline-flex items-center justify-center border border-[#141413] text-[#141413] px-6 py-3.5 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#e8e6dc] transition-colors cursor-pointer text-center"
          >
            Solicitar diagnóstico
          </button>
        </div>

        <p className="text-xs md:text-sm font-sans-editorial text-[#4a4452]/80 mt-1">
          Diagnóstico de elegibilidad &middot; Formulación técnica &middot; Acompañamiento en postulación
        </p>

        {/* Hero Image */}
        <div className="mt-6 relative w-full h-[320px] md:h-[480px] rounded border border-[#e8e6dc] overflow-hidden shadow-[0_4px_20px_-10px_rgba(20,20,19,0.05)] bg-[#f6f3f1]">
          <img
            className="w-full h-full object-cover"
            src={HERO_IMAGE_URL}
            alt="Consultoría de negocios y proyectos de innovación"
            loading="eager"
          />
          <div className="absolute bottom-4 right-4 bg-[#faf9f5]/90 backdrop-blur-sm px-3 py-1.5 rounded border border-[#e8e6dc] text-[11px] font-sans-editorial font-medium text-[#4a4452]">
            Convocatorias 2026
          </div>
        </div>
      </section>

      {/* Services Pillars Section */}
      <section className="w-full bg-[#f6f3f1] border-y border-[#e8e6dc] py-16 md:py-24" id="servicios">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="text-center mb-12">
            <span className="font-sans-editorial text-xs uppercase tracking-widest text-[#8c5dd9] font-semibold">
              Servicios especializados
            </span>
            <h2 className="font-sans-editorial text-3xl md:text-4xl font-medium text-[#141413] mt-2">
              Nuestros servicios para postular a fondos no reembolsables
            </h2>
            <p className="font-serif text-base text-[#4a4452] mt-4 max-w-2xl mx-auto leading-relaxed">
              Te acompañamos desde la evaluación inicial hasta la presentación de una postulación bien sustentada, alineada con los requisitos de cada convocatoria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <article
                key={srv.id}
                className="bg-[#faf9f5] border border-[#e8e6dc] rounded p-6 md:p-8 flex flex-col justify-between hover:border-[#8c5dd9] transition-all duration-300 hover:shadow-[0_8px_30px_-15px_rgba(140,93,217,0.15)] group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 bg-[#e8e6dc]/50 rounded-lg group-hover:bg-[#ecdcff] group-hover:text-[#7242be] transition-colors text-[#141413]">
                      {getServiceIcon(srv.icon)}
                    </div>
                    <div>
                      <span className="text-[11px] font-sans-editorial font-bold text-[#8c5dd9] uppercase tracking-wider block">
                        {srv.subtitle}
                      </span>
                      <h3 className="font-sans-editorial text-lg font-bold text-[#141413] group-hover:text-[#7242be] transition-colors">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-serif text-sm text-[#4a4452] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-3 mb-8 border-t border-[#e8e6dc] pt-6">
                    <p className="font-sans-editorial text-xs font-semibold text-[#141413] uppercase tracking-wider">
                      ¿Qué incluye?
                    </p>
                    <ul className="text-xs font-serif text-[#4a4452] space-y-2.5">
                      {srv.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#8c5dd9] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e8e6dc]">
                  <button
                    onClick={() => handleServiceAction(srv)}
                    className="w-full inline-flex items-center justify-center bg-[#141413] text-[#faf9f5] py-3 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#8c5dd9] transition-all cursor-pointer shadow-sm group border-none"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Explanatory Section */}
      <section className="w-full bg-white border-y border-[#e8e6dc] py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-5 md:px-20 flex flex-col gap-6">
          <h2 className="font-sans-editorial text-2xl md:text-4xl font-semibold text-[#141413] tracking-tight text-center mb-4">
            ¿Qué son los fondos no reembolsables?
          </h2>
          <p className="font-serif text-base md:text-lg text-[#4a4452] leading-relaxed">
            Son mecanismos de cofinanciamiento promovidos por instituciones públicas para impulsar la competitividad, la innovación, la digitalización, la calidad y la sostenibilidad de empresas y mipymes.
          </p>
          <p className="font-serif text-base md:text-lg text-[#4a4452] leading-relaxed">
            No funcionan como un crédito tradicional: no implican deuda financiera, pero sí exigen una postulación sólida, cumplimiento de bases y correcta sustentación técnica y documental del proyecto.
          </p>
          <p className="font-serif text-base md:text-lg text-[#4a4452] leading-relaxed">
            Nuestro trabajo consiste en ayudarte a estructurar una postulación seria, viable y mejor presentada, de acuerdo con la naturaleza de tu empresa y la línea concursable aplicable.
          </p>
        </div>
      </section>

      {/* Categories Section (Fondos) */}
      <section className="w-full max-w-[1200px] mx-auto px-5 md:px-20 py-16 md:py-24" id="fondos">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-sans-editorial text-xs uppercase tracking-widest text-[#7242be] font-semibold">
              Líneas concursables
            </span>
            <h2 className="font-sans-editorial text-2xl md:text-4xl font-semibold text-[#141413] mt-2">
              Líneas de proyectos que podemos ayudarte a formular
            </h2>
          </div>
          <p className="font-serif text-sm md:text-base text-[#4a4452] max-w-md leading-relaxed">
            Identificamos el tipo de fondo más adecuado según el nivel de madurez de tu empresa, la naturaleza del proyecto y los requisitos de la convocatoria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="bg-[#faf9f5] border border-[#e8e6dc] rounded p-6 md:p-8 flex flex-col justify-between hover:border-[#8c5dd9] transition-all duration-300 hover:shadow-[0_4px_20px_-10px_rgba(20,20,19,0.08)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#e8e6dc]/50 rounded-lg group-hover:bg-[#ecdcff] transition-colors">
                    {getCategoryIcon(cat.icon)}
                  </div>
                </div>

                <span className="font-sans-editorial text-[10px] font-bold text-[#516439] bg-[#d4eab4]/50 px-2 py-1 rounded inline-block mb-3">
                  {cat.maxGrantEstimate}
                </span>

                <h3 className="font-sans-editorial text-xl font-semibold text-[#141413] mb-2 group-hover:text-[#7242be] transition-colors">
                  {cat.title}
                </h3>
                <p className="font-serif text-sm text-[#4a4452] leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="space-y-1.5 border-t border-[#e8e6dc] pt-3 mb-4">
                  <p className="font-sans-editorial text-xs font-semibold text-[#141413]">Proyectos Típicos:</p>
                  <ul className="text-xs font-serif text-[#4a4452] space-y-1">
                    {cat.examples.map((ex, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c5dd9]"></span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#e8e6dc]">
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#2d628f] hover:underline flex items-center gap-1 cursor-pointer border-none bg-transparent"
                >
                  Detalles Técnicos <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleStartConsultation(cat.title)}
                  className="font-sans-editorial text-xs font-semibold bg-[#141413] text-[#faf9f5] px-3.5 py-1.5 rounded hover:bg-[#8c5dd9] transition-colors cursor-pointer border-none"
                >
                  Postular
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Proceso Section (Cómo trabajamos) */}
      <section className="w-full bg-[#f6f3f1] border-y border-[#e8e6dc] py-16 md:py-24" id="proceso">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <span className="font-sans-editorial text-xs uppercase tracking-widest text-[#8c5dd9] font-semibold">
              Metodología de trabajo
            </span>
            <h2 className="font-sans-editorial text-3xl md:text-4xl font-semibold text-[#141413] mt-2">
              Cómo trabajamos
            </h2>
            <p className="font-serif text-base text-[#4a4452] mt-4 max-w-2xl mx-auto leading-relaxed">
              Un proceso ordenado y riguroso para maximizar la viabilidad y calidad técnica de tu postulación.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#e8e6dc] -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {METHOD_STEPS.map((step) => (
                <article
                  key={step.number}
                  className="bg-[#faf9f5] border border-[#e8e6dc] rounded p-6 flex flex-col justify-between hover:border-[#8c5dd9] transition-all duration-300 hover:shadow-[0_4px_20px_-10px_rgba(140,93,217,0.1)] group min-h-[220px]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#ecdcff] flex items-center justify-center font-sans-editorial text-sm font-bold text-[#7242be] mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-sans-editorial text-base font-bold text-[#141413] mb-2 group-hover:text-[#7242be] transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-serif text-xs md:text-sm text-[#4a4452] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full max-w-[1200px] mx-auto px-5 md:px-20 py-20 md:py-28 flex flex-col items-center text-center">
        <h2 className="font-sans-editorial text-2xl md:text-4xl font-semibold text-[#141413] max-w-[90%] md:max-w-2xl mb-4 tracking-tight">
          Cupos limitados por convocatoria.
        </h2>
        <p className="font-serif text-base md:text-lg text-[#4a4452] max-w-xl mb-8 leading-relaxed">
          Reserva tu diagnóstico estructural hoy y asegura una postulación competitiva con asesoría editorial personalizada.
        </p>
        <button
          onClick={() => handleStartConsultation()}
          className="inline-flex items-center justify-center bg-[#8c5dd9] text-[#faf9f5] px-8 py-4 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#7242be] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-sm w-full sm:w-auto border-none"
        >
          Solicitar Diagnóstico
        </button>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="w-full bg-[#faf9f5] border-t border-[#e8e6dc] py-16 md:py-24">
        <ContactView initialProjectType={prefillProject} />
      </section>

      {/* Category Detail Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#faf9f5] border border-[#e8e6dc] rounded-lg max-w-lg w-full p-6 md:p-8 shadow-xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 text-[#4a4452] hover:text-[#141413] text-sm font-sans-editorial p-1 border-none bg-transparent cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-[#ecdcff] rounded">
                {getCategoryIcon(selectedCategory.icon)}
              </div>
              <div>
                <h3 className="font-sans-editorial text-xl font-bold text-[#141413]">
                  {selectedCategory.title}
                </h3>
                <span className="text-xs font-sans-editorial text-[#516439] bg-[#d4eab4]/50 px-2.5 py-1 rounded font-medium inline-block mt-1">
                  {selectedCategory.maxGrantEstimate}
                </span>
              </div>
            </div>

            <p className="font-serif text-sm text-[#4a4452] leading-relaxed mb-4">
              {selectedCategory.description}
            </p>

            <div className="bg-[#f0edeb] p-3.5 rounded border border-[#e8e6dc] mb-4">
              <p className="font-sans-editorial text-xs font-semibold text-[#141413] mb-1">
                Estrategia Financiera / Financiamiento:
              </p>
              <p className="font-serif text-xs text-[#4a4452] leading-relaxed">
                {selectedCategory.highlight}
              </p>
            </div>

            <div className="mb-6">
              <p className="font-sans-editorial text-xs font-semibold text-[#141413] mb-2">
                Alcance y Gastos Elegibles:
              </p>
              <ul className="text-xs font-serif text-[#4a4452] space-y-1.5">
                {selectedCategory.examples.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#8c5dd9] rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const title = selectedCategory.title;
                  setSelectedCategory(null);
                  handleStartConsultation(title);
                }}
                className="flex-1 bg-[#8c5dd9] text-[#faf9f5] py-3 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#7242be] transition-colors border-none cursor-pointer"
              >
                Postular a esta categoría
              </button>
              <button
                onClick={() => setSelectedCategory(null)}
                className="border border-[#e8e6dc] text-[#141413] px-4 py-3 rounded font-sans-editorial text-xs uppercase tracking-wider hover:bg-[#e8e6dc] bg-transparent cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
