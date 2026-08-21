import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { DIRECT_CHANNELS, PAPER_IMAGE_URL } from '../data';
import { ContactFormData } from '../types';

interface ContactViewProps {
  initialProjectType?: string;
}

const PROJECT_OPTIONS = [
  {
    value: 'Consultoría Fondos No Reembolsables (PYMES y Startups).',
    label: 'Consultoría Fondos No Reembolsables (PYMES y Startups).'
  },
  {
    value: 'Creación de soluciones digitales - Software, websites.',
    label: 'Creación de soluciones digitales - Software, websites.'
  },
  {
    value: 'Escalamiento de presencia en redes sociales, marketing y publicidad.',
    label: 'Escalamiento de presencia en redes sociales, marketing y publicidad.'
  }
];

const getProjectTypeFromInitial = (initial: string) => {
  if (!initial) return '';
  const initialLower = initial.toLowerCase();
  if (initialLower.includes('software') || initialLower.includes('digitales') || initialLower.includes('tecnología') || initialLower.includes('ti')) {
    return 'Creación de soluciones digitales - Software, websites.';
  }
  if (initialLower.includes('marketing') || initialLower.includes('redes') || initialLower.includes('publicidad') || initialLower.includes('growth')) {
    return 'Escalamiento de presencia en redes sociales, marketing y publicidad.';
  }
  return 'Consultoría Fondos No Reembolsables (PYMES y Startups).';
};

const getMessageFromInitial = (initial: string) => {
  if (!initial) return '';
  const initialLower = initial.toLowerCase();
  
  if (initialLower.includes('software') || initialLower.includes('digitales') || initialLower.includes('tecnología') || initialLower.includes('ti')) {
    return 'Hola Medroa, deseo solicitar una cotización para el desarrollo de un proyecto de tecnología o software. Me gustaría coordinar una reunión de diagnóstico técnico.';
  }
  if (initialLower.includes('marketing') || initialLower.includes('redes') || initialLower.includes('publicidad') || initialLower.includes('growth')) {
    return 'Hola Medroa, me interesa recibir información sobre los servicios de marketing digital, publicidad y planes de growth hacking para escalar nuestras ventas.';
  }
  if (initial.startsWith('Diagnóstico:')) {
    return `Hola Medroa, he completado el Evaluador Rápido de Elegibilidad y me interesa postular a fondos públicos. Los datos de mi perfil son: ${initial.replace('Diagnóstico:', '').trim()}.`;
  }
  return `Hola Medroa, me interesa postular o recibir asesoría técnica para la convocatoria de fondos de: ${initial}.`;
};

export const ContactView: React.FC<ContactViewProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: getProjectTypeFromInitial(initialProjectType),
    message: getMessageFromInitial(initialProjectType)
  });

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({
        ...prev,
        projectType: getProjectTypeFromInitial(initialProjectType),
        message: getMessageFromInitial(initialProjectType)
      }));
    }
  }, [initialProjectType]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('No se pudo procesar la solicitud en el servidor. Por favor intente de nuevo.');
      }

      const resData = await response.json();
      if (resData.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(resData.error || 'Ocurrió un error inesperado al guardar los datos.');
      }
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitError(err.message || 'Error de conexión. Asegúrese de que el servidor backend esté corriendo.');
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      message: ''
    });
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 md:px-20 pt-12 pb-24 md:pt-16">
      {/* Header Section */}
      <div className="max-w-2xl mb-12">
        <h1 className="font-sans-editorial text-3xl md:text-5xl font-semibold text-[#141413] tracking-tight mb-6">
          Contáctanos
        </h1>
        {/* Academic Quote / Urgency Message */}
        <div className="border-l-[3px] border-[#8c5dd9] pl-6 py-2 my-6">
          <p className="font-serif text-lg md:text-xl italic text-[#141413] opacity-90">
            Cupos limitados para la convocatoria actual (Agosto 2026)
          </p>
        </div>
      </div>

      {/* Two Column Layout for Desktop, Stacked for Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Form Section (Left) */}
        <div className="md:col-span-7 lg:col-span-8">
          {isSubmitted ? (
            <div className="bg-[#faf9f5] border border-[#788c5d] p-8 rounded-lg animate-in fade-in duration-300">
              <div className="flex items-center gap-3 text-[#516439] mb-4">
                <CheckCircle className="w-8 h-8" />
                <h3 className="font-sans-editorial text-xl font-semibold text-[#141413]">
                  Solicitud Recibida con Éxito
                </h3>
              </div>
              <p className="font-serif text-base text-[#4a4452] leading-relaxed mb-6">
                Estimado/a <strong>{formData.name || 'Empresario'}</strong>, hemos registrado su consulta preliminar. Un consultor sénior de Medroa revisará sus antecedentes y se comunicará a <strong>{formData.email}</strong> o por WhatsApp dentro de las próximas 24 horas hábiles.
              </p>

              <div className="bg-[#f0edeb] p-4 rounded border border-[#e8e6dc] mb-6 text-xs font-sans-editorial text-[#4a4452] space-y-1">
                <p><strong>Organización:</strong> {formData.company || 'No especificada'}</p>
                <p><strong>Teléfono:</strong> {formData.phone || 'No especificado'}</p>
                <p><strong>Tipo de Requerimiento:</strong> {formData.projectType || 'General'}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleReset}
                  className="bg-[#141413] text-[#faf9f5] px-6 py-2.5 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#8c5dd9] transition-colors"
                >
                  Enviar otra consulta
                </button>
                <a
                  href={DIRECT_CHANNELS.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#788c5d] text-[#faf9f5] px-6 py-2.5 rounded font-sans-editorial text-xs uppercase tracking-wider font-semibold hover:bg-[#516439] transition-colors inline-flex items-center gap-2"
                >
                  <span>Hablar directo por WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="flex flex-col relative group">
                  <label
                    className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#4a4452] mb-2 transition-colors group-focus-within:text-[#2d628f]"
                    htmlFor="name"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-[#b0aea5] py-2 font-serif text-base text-[#141413] outline-none focus:border-[#2d628f] transition-colors"
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Ej. Marcelo Medroa"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col relative group">
                  <label
                    className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#4a4452] mb-2 transition-colors group-focus-within:text-[#2d628f]"
                    htmlFor="email"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-[#b0aea5] py-2 font-serif text-base text-[#141413] outline-none focus:border-[#2d628f] transition-colors"
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="ejemplo@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone Input */}
                <div className="flex flex-col relative group">
                  <label
                    className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#4a4452] mb-2 transition-colors group-focus-within:text-[#2d628f]"
                    htmlFor="phone"
                  >
                    Teléfono / WhatsApp
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-[#b0aea5] py-2 font-serif text-base text-[#141413] outline-none focus:border-[#2d628f] transition-colors"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+51 900 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Company Input */}
                <div className="flex flex-col relative group">
                  <label
                    className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#4a4452] mb-2 transition-colors group-focus-within:text-[#2d628f]"
                    htmlFor="company"
                  >
                    Organización / Empresa
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-[#b0aea5] py-2 font-serif text-base text-[#141413] outline-none focus:border-[#2d628f] transition-colors"
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre o Razón Social"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              {/* Project Type Select */}
              <div className="flex flex-col relative group">
                <label
                  className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#4a4452] mb-2 transition-colors group-focus-within:text-[#2d628f]"
                  htmlFor="project_type"
                >
                  Tipo de Proyecto
                </label>
                <div className="relative w-full">
                  <select
                    className="w-full bg-transparent border-b border-[#b0aea5] py-2 font-serif text-base text-[#141413] outline-none focus:border-[#2d628f] transition-colors appearance-none cursor-pointer rounded-none"
                    id="project_type"
                    name="project_type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="" disabled className="bg-[#faf9f5] text-[#b0aea5]">
                      Seleccione una opción
                    </option>
                    {PROJECT_OPTIONS.map((opt, idx) => (
                      <option key={idx} value={opt.value} className="bg-[#faf9f5] text-[#141413]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#b0aea5] group-focus-within:text-[#2d628f] transition-colors">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col relative group">
                <label
                  className="font-sans-editorial text-xs uppercase tracking-wider font-semibold text-[#4a4452] mb-2 transition-colors group-focus-within:text-[#2d628f]"
                  htmlFor="message"
                >
                  Mensaje / Requerimientos *
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-[#b0aea5] py-2 font-serif text-base text-[#141413] outline-none focus:border-[#2d628f] transition-colors resize-none leading-relaxed"
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describa brevemente la actividad de su empresa, el proyecto a financiar o su duda específica."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="text-red-600 font-serif text-sm bg-red-50 border border-red-200 p-3 rounded mb-4">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-[#8c5dd9] text-[#faf9f5] font-sans-editorial text-xs uppercase tracking-wider font-semibold py-4 px-8 rounded transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7242be] focus:outline-none focus:ring-2 focus:ring-[#2d628f] cursor-pointer disabled:opacity-50"
                >
                  {isSending ? 'Enviando Solicitud...' : 'Enviar Solicitud'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct Links Section (Right) */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 mt-12 md:mt-0">
          <div className="font-sans-editorial text-xs text-[#4a4452] font-semibold uppercase tracking-widest border-b border-[#e8e6dc] pb-2">
            Canales Directos
          </div>

          {/* WhatsApp Card */}
          <a
            className="group flex items-start gap-4 p-5 md:p-6 bg-[#ffffff] border border-[#e8e6dc] rounded transition-all duration-300 hover:border-[#8c5dd9] hover:shadow-[0_4px_20px_-10px_rgba(20,20,19,0.05)] cursor-pointer"
            href={DIRECT_CHANNELS.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-full bg-[#e8e6dc] flex items-center justify-center flex-shrink-0 group-hover:bg-[#8c5dd9] group-hover:text-[#faf9f5] transition-colors duration-300 text-[#141413]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans-editorial text-sm font-semibold text-[#141413] mb-1">
                WhatsApp
              </h3>
              <p className="font-serif text-sm text-[#4a4452] group-hover:text-[#8c5dd9] transition-colors duration-300">
                {DIRECT_CHANNELS.whatsapp.number}
              </p>
            </div>
          </a>

          {/* Email Card */}
          <a
            className="group flex items-start gap-4 p-5 md:p-6 bg-[#ffffff] border border-[#e8e6dc] rounded transition-all duration-300 hover:border-[#8c5dd9] hover:shadow-[0_4px_20px_-10px_rgba(20,20,19,0.05)] cursor-pointer"
            href={DIRECT_CHANNELS.email.link}
          >
            <div className="w-10 h-10 rounded-full bg-[#e8e6dc] flex items-center justify-center flex-shrink-0 group-hover:bg-[#8c5dd9] group-hover:text-[#faf9f5] transition-colors duration-300 text-[#141413]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans-editorial text-sm font-semibold text-[#141413] mb-1">
                Correo Electrónico
              </h3>
              <p className="font-serif text-sm text-[#4a4452] group-hover:text-[#8c5dd9] transition-colors duration-300 break-all">
                {DIRECT_CHANNELS.email.address}
              </p>
            </div>
          </a>

          {/* Cal.com Card */}
          <a
            className="group flex items-start gap-4 p-5 md:p-6 bg-[#ffffff] border border-[#e8e6dc] rounded transition-all duration-300 hover:border-[#8c5dd9] hover:shadow-[0_4px_20px_-10px_rgba(20,20,19,0.05)] cursor-pointer"
            href={DIRECT_CHANNELS.calendar.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-full bg-[#e8e6dc] flex items-center justify-center flex-shrink-0 group-hover:bg-[#8c5dd9] group-hover:text-[#faf9f5] transition-colors duration-300 text-[#141413]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans-editorial text-sm font-semibold text-[#141413] mb-1">
                Agendar Reunión
              </h3>
              <p className="font-serif text-sm text-[#4a4452] group-hover:text-[#8c5dd9] transition-colors duration-300">
                {DIRECT_CHANNELS.calendar.url}
              </p>
            </div>
          </a>

          {/* Aesthetic Image */}
          <div className="mt-4 rounded overflow-hidden border border-[#e8e6dc] h-48 w-full relative bg-[#f6f3f1]">
            <img
              className="object-cover w-full h-full opacity-90 mix-blend-multiply"
              src={PAPER_IMAGE_URL}
              alt="Pliegues de papel arquitectónico minimalista"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
