import React from 'react';
import { CheckCircle2, Printer, ArrowLeft } from 'lucide-react';
import { ActiveTab } from '../types';

interface TermsViewProps {
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onNavigateToTab }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="flex-grow max-w-[1200px] mx-auto px-5 md:px-20 py-12 md:py-20 w-full">
      <article className="max-w-3xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => onNavigateToTab('inicio')}
            className="inline-flex items-center gap-1.5 text-xs font-sans-editorial font-semibold uppercase tracking-wider text-[#4a4452] hover:text-[#7242be] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Inicio</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-sans-editorial font-semibold text-[#4a4452] hover:text-[#141413] border border-[#e8e6dc] px-3 py-1.5 rounded transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir / Guardar</span>
          </button>
        </div>

        {/* Title Header */}
        <header className="mb-12 md:mb-16 border-b border-[#e8e6dc] pb-8">
          <h1 className="font-sans-editorial text-3xl md:text-5xl font-semibold text-[#141413] mb-4 tracking-tight">
            Términos de Servicio
          </h1>
          <p className="font-sans-editorial text-sm text-[#4a4452]">
            Última actualización: 2026
          </p>
        </header>

        {/* Content Body */}
        <div className="font-serif text-base md:text-lg text-[#141413] space-y-10 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-sans-editorial text-xl md:text-2xl font-medium text-[#141413] mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="mb-4 text-[#4a4452]">
              Al acceder o utilizar los servicios proporcionados por Medroa, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio. Estos términos constituyen un acuerdo legal vinculante entre usted y Medroa.
            </p>
            <p className="text-[#4a4452]">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Su uso continuado del servicio después de dichos cambios constituye su aceptación de los nuevos Términos de Servicio.
            </p>
          </section>

          <div className="w-full h-px bg-[#e8e6dc]"></div>

          {/* Section 2 */}
          <section>
            <h2 className="font-sans-editorial text-xl md:text-2xl font-medium text-[#141413] mb-4">
              2. Uso de la Plataforma
            </h2>
            <p className="mb-4 text-[#4a4452]">
              Usted se compromete a utilizar la plataforma Medroa únicamente con fines lícitos y de conformidad con estos términos. Queda estrictamente prohibido cualquier uso que pueda dañar, deshabilitar, sobrecargar o deteriorar los servidores de Medroa o las redes conectadas a dichos servidores.
            </p>

            {/* Prohibited Activities Box */}
            <div className="bg-[#f6f3f1] border border-[#e8e6dc] p-6 md:p-8 rounded my-8">
              <h3 className="font-sans-editorial text-base md:text-lg font-semibold text-[#141413] mb-4">
                Actividades Prohibidas
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#516439] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#4a4452]">
                    No intentará obtener acceso no autorizado a ninguna parte de la plataforma.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#516439] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#4a4452]">
                    No utilizará procesos automatizados (bots, scrapers) para acceder a los servicios.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#516439] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#4a4452]">
                    No interferirá con el uso y disfrute de la plataforma por parte de otros usuarios.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <div className="w-full h-px bg-[#e8e6dc]"></div>

          {/* Section 3 */}
          <section>
            <h2 className="font-sans-editorial text-xl md:text-2xl font-medium text-[#141413] mb-4">
              3. Propiedad Intelectual
            </h2>
            <blockquote className="border-l-4 border-[#8c5dd9] pl-6 py-3 my-8 text-base md:text-lg italic text-[#141413] bg-[#ffffff] rounded-r">
              "Todo el contenido, características y funcionalidad de la plataforma son propiedad exclusiva de Medroa y están protegidos por leyes internacionales de derechos de autor, marcas registradas y otras leyes de propiedad intelectual."
            </blockquote>
            <p className="text-[#4a4452]">
              No se le transfiere ningún derecho, título o interés en la plataforma ni en ningún contenido de la plataforma. Nos reservamos todos los derechos no otorgados expresamente.
            </p>
          </section>

          <div className="w-full h-px bg-[#e8e6dc]"></div>

          {/* Section 4 */}
          <section>
            <h2 className="font-sans-editorial text-xl md:text-2xl font-medium text-[#141413] mb-4">
              4. Limitación de Responsabilidad
            </h2>
            <p className="text-[#4a4452]">
              En la máxima medida permitida por la ley aplicable, Medroa no será responsable por ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo, sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) su acceso o uso o incapacidad para acceder o utilizar el servicio; (ii) cualquier conducta o contenido de un tercero en el servicio.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};
