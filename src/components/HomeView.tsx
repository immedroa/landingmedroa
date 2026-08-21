import React, { useState } from 'react';
import {
  Laptop,
  CheckCircle,
  Lightbulb,
  Recycle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Coins,
  Code,
  Target
} from 'lucide-react';
import { CATEGORIES, METHOD_STEPS, HERO_IMAGE_URL, SERVICES } from '../data';
import { ActiveTab, CategoryInfo, ServiceInfo } from '../types';

interface HomeViewProps {
  onNavigateToContact: (prefillCategory?: string) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateToContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'devices':
        return <Laptop className="w-8 h-8 text-[#8c5dd9]" />;
      case 'verified':
        return <CheckCircle className="w-8 h-8 text-[#8c5dd9]" />;
      case 'lightbulb':
        return <Lightbulb className="w-8 h-8 text-[#8c5dd9]" />;
      case 'recycling':
        return <Recycle className="w-8 h-8 text-[#8c5dd9]" />;
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceAction = (srv: ServiceInfo) => {
    if (srv.id === 'fondos') {
      const el = document.getElementById('evaluator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        const catEl = document.getElementById('categories');
        if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      handleStartConsultation(srv.prefillValue);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] mx-auto px-5 md:px-20 py-12 md:py-20 flex flex-col gap-6 relative">
        <h1 className="font-sans-editorial text-3xl md:text-6xl font-semibold text-[#141413] tracking-tight max-w-[95%] md:max-w-[90%] leading-[1.15]">
          Aceleración Empresarial B2B:<br />
          <span className="text-[#8c5dd9]">Fondos, Tecnología y Marketing</span>
        </h1>
        <p className="font-serif text-lg md:text-xl text-[#4a4452] max-w-[95%] md:max-w-[80%] leading-relaxed">
          Impulsamos el crecimiento estructural de tu empresa. Te ayudamos a captar fondos no reembolsables de hasta S/ 500,000, desarrollamos tu software a medida y escalamos tus ventas con marketing de alta tracción.
        </p>

        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-[#8c5dd9] text-[#faf9f5] px-6 py-3.5 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#7242be] transition-colors cursor-pointer text-center"
          >
            Explorar Servicios B2B
          </a>
          <button
            onClick={() => handleStartConsultation()}
            className="inline-flex items-center justify-center border border-[#141413] text-[#141413] px-6 py-3.5 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#e8e6dc] transition-colors cursor-pointer text-center"
          >
            Solicitar Diagnóstico
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-6 relative w-full h-[320px] md:h-[480px] rounded border border-[#e8e6dc] overflow-hidden shadow-[0_4px_20px_-10px_rgba(20,20,19,0.05)] bg-[#f6f3f1]">
          <img
            className="w-full h-full object-cover"
            src={HERO_IMAGE_URL}
            alt="Espacio de trabajo minimalista con laptop, planos y cuaderno Medroa para postulación a fondos"
            loading="eager"
          />
          <div className="absolute bottom-4 right-4 bg-[#faf9f5]/90 backdrop-blur-sm px-3 py-1.5 rounded border border-[#e8e6dc] text-[11px] font-sans-editorial font-medium text-[#4a4452]">
            Convocatorias 2026
          </div>
        </div>
      </section>

      {/* B2B Services Pillars Section */}
      <section className="w-full bg-[#f6f3f1] border-y border-[#e8e6dc] py-16 md:py-24 animate-in fade-in duration-500" id="services">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="text-center mb-12">
            <span className="font-sans-editorial text-xs uppercase tracking-widest text-[#8c5dd9] font-semibold">
              Soluciones Corporativas
            </span>
            <h2 className="font-sans-editorial text-3xl md:text-4xl font-medium text-[#141413] mt-2">
              Nuestros Pilares de Servicios B2B
            </h2>
            <p className="font-serif text-base text-[#4a4452] mt-4 max-w-2xl mx-auto leading-relaxed">
              Diseñamos soluciones integrales para potenciar su empresa en cada etapa de su ciclo de vida comercial y tecnológico.
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
                    className="w-full inline-flex items-center justify-center bg-[#141413] text-[#faf9f5] py-3 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#8c5dd9] transition-all cursor-pointer shadow-sm group"
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


      {/* Academic Explanation / Quote */}
      <section className="w-full bg-white border-y border-[#e8e6dc] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="academic-quote text-lg md:text-xl text-[#141413] max-w-[95%] mx-auto leading-relaxed">
            "Los fondos no reembolsables representan capital libre de capital accionario o deuda, otorgado por instituciones públicas para fomentar la innovación y la competitividad estructural del tejido empresarial."
          </div>
          <p className="mt-8 text-base md:text-lg text-[#4a4452] font-serif leading-relaxed max-w-[95%] mx-auto">
            A diferencia de los créditos tradicionales, estos instrumentos no requieren devolución, siempre y cuando se demuestre la correcta ejecución técnica y financiera del proyecto adjudicado. Nuestro enfoque metodológico asegura el rigor necesario para cumplir con estos altos estándares.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full max-w-[1200px] mx-auto px-5 md:px-20 py-16 md:py-24" id="categories">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-sans-editorial text-xs uppercase tracking-widest text-[#7242be] font-semibold">
              Líneas Concursables
            </span>
            <h2 className="font-sans-editorial text-2xl md:text-4xl font-medium text-[#141413] mt-2">
              Categorías de Financiación
            </h2>
          </div>
          <p className="font-serif text-sm md:text-base text-[#4a4452] max-w-md">
            Identificamos el fondo exacto correspondiente al estado de madurez de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <span className="font-sans-editorial text-xs font-semibold text-[#516439] bg-[#d4eab4]/50 px-2.5 py-1 rounded">
                    {cat.maxGrantEstimate}
                  </span>
                </div>

                <h3 className="font-sans-editorial text-xl font-semibold text-[#141413] mb-2 group-hover:text-[#7242be] transition-colors">
                  {cat.title}
                </h3>
                <p className="font-serif text-sm md:text-base text-[#4a4452] leading-relaxed mb-4">
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
                  className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#2d628f] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Detalles Técnicos <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleStartConsultation(cat.title)}
                  className="font-sans-editorial text-xs font-semibold bg-[#141413] text-[#faf9f5] px-3.5 py-1.5 rounded hover:bg-[#8c5dd9] transition-colors cursor-pointer"
                >
                  Postular
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-white border-y border-[#e8e6dc] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="max-w-2xl mb-12">
            <span className="font-sans-editorial text-xs uppercase tracking-widest text-[#7242be] font-semibold">
              Rigor y Ejecución
            </span>
            <h2 className="font-sans-editorial text-2xl md:text-4xl font-medium text-[#141413] mt-2">
              Proceso Metodológico
            </h2>
            <p className="font-serif text-sm md:text-base text-[#4a4452] mt-2">
              Una estructura secuencial diseñada para mitigar observaciones técnicas y maximizar el puntaje de evaluación.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:gap-12 relative max-w-3xl">
            {METHOD_STEPS.map((step) => (
              <div key={step.number} className="process-step flex items-start gap-5 relative z-10">
                <div
                  className={`process-line relative flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-sans-editorial text-xs font-semibold ${
                    step.number === 1
                      ? 'bg-[#8c5dd9] text-[#faf9f5]'
                      : 'border border-[#8c5dd9] text-[#8c5dd9] bg-[#faf9f5]'
                  }`}
                >
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="font-sans-editorial text-lg md:text-xl font-semibold text-[#141413]">
                    {step.title}
                  </h3>
                  <p className="font-serif text-sm md:text-base text-[#4a4452] mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {step.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f0edeb] text-[#4a4452] text-[11px] font-sans-editorial px-2.5 py-0.5 rounded border border-[#e8e6dc]"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
          className="inline-flex items-center justify-center bg-[#8c5dd9] text-[#faf9f5] px-8 py-4 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#7242be] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-sm w-full sm:w-auto"
        >
          Solicitar Diagnóstico
        </button>
      </section>

      {/* Category Detail Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#faf9f5] border border-[#e8e6dc] rounded-lg max-w-lg w-full p-6 md:p-8 shadow-xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 text-[#4a4452] hover:text-[#141413] text-sm font-sans-editorial p-1"
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
                <span className="text-xs font-sans-editorial text-[#516439] font-medium">
                  {selectedCategory.maxGrantEstimate}
                </span>
              </div>
            </div>

            <p className="font-serif text-sm text-[#4a4452] leading-relaxed mb-4">
              {selectedCategory.description}
            </p>

            <div className="bg-[#f0edeb] p-3.5 rounded border border-[#e8e6dc] mb-4">
              <p className="font-sans-editorial text-xs font-semibold text-[#141413] mb-1">
                Estrategia Financiera:
              </p>
              <p className="font-serif text-xs text-[#4a4452]">
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
                className="flex-1 bg-[#8c5dd9] text-[#faf9f5] py-3 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#7242be] transition-colors"
              >
                Postular a esta categoría
              </button>
              <button
                onClick={() => setSelectedCategory(null)}
                className="border border-[#e8e6dc] text-[#141413] px-4 py-3 rounded font-sans-editorial text-xs uppercase tracking-wider hover:bg-[#e8e6dc]"
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
