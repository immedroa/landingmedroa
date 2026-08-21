import React, { useState } from 'react';
import { MessageSquare, X, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { DIRECT_CHANNELS } from '../data';

export const ChatModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const quickQuestions = [
    '¿Mi empresa califica para fondos este año?',
    '¿Cuál es la diferencia con un crédito tradicional?',
    '¿Qué porcentaje de cofinanciamiento no reembolsable puedo obtener?'
  ];

  const handleSendToWhatsApp = (messageText: string) => {
    const text = encodeURIComponent(messageText || 'Hola Medroa, deseo consultar sobre fondos no reembolsables.');
    window.open(`https://wa.me/51906000905?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <aside className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir canal de consulta directa"
          className="bg-[#8c5dd9] text-[#faf9f5] rounded-full p-4 shadow-lg hover:bg-[#7242be] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#8c5dd9] focus:ring-offset-2"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6" />
          )}
        </button>
      </aside>

      {/* Quick Consultation Drawer Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm bg-[#faf9f5] border border-[#e8e6dc] rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#141413] text-[#faf9f5] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#8c5dd9] flex items-center justify-center text-xs font-sans-editorial font-bold">
                M
              </div>
              <div>
                <h4 className="font-sans-editorial text-sm font-semibold">
                  Medroa Consultoría
                </h4>
                <p className="text-[11px] text-[#b0aea5] font-serif">
                  Orientación técnica para fondos
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#b0aea5] hover:text-[#faf9f5] p-1"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3.5 max-h-[380px] overflow-y-auto font-serif text-xs">
            <div className="bg-[#ffffff] border border-[#e8e6dc] p-3 rounded text-[#4a4452] leading-relaxed">
              <div className="flex items-center gap-1.5 text-[#516439] font-sans-editorial font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Atención Especializada</span>
              </div>
              Bienvenido. Nuestros asesores evalúan la admisibilidad de su empresa sin costo preliminar.
            </div>

            <p className="font-sans-editorial text-[11px] uppercase tracking-wider text-[#4a4452] font-semibold">
              Consultas frecuentes de postulantes:
            </p>

            <div className="space-y-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendToWhatsApp(q)}
                  className="w-full text-left p-2 bg-[#f0edeb] hover:bg-[#ecdcff] hover:text-[#7242be] rounded transition-colors text-[11px] text-[#141413] font-sans-editorial flex items-center justify-between group cursor-pointer"
                >
                  <span>{q}</span>
                  <ExternalLink className="w-3 h-3 text-[#b0aea5] group-hover:text-[#7242be] flex-shrink-0 ml-1" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <label className="font-sans-editorial text-[11px] text-[#4a4452] font-semibold mb-1 block">
                Escribir consulta personalizada:
              </label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="Ej: Tengo una empresa de software..."
                  value={quickMsg}
                  onChange={(e) => setQuickMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && quickMsg.trim()) {
                      handleSendToWhatsApp(quickMsg);
                    }
                  }}
                  className="flex-1 bg-white border border-[#e8e6dc] rounded px-3 py-2 text-xs font-serif text-[#141413] outline-none focus:border-[#8c5dd9]"
                />
                <button
                  onClick={() => handleSendToWhatsApp(quickMsg)}
                  className="bg-[#8c5dd9] text-[#faf9f5] px-3 py-2 rounded hover:bg-[#7242be] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Channel Link */}
          <div className="bg-[#f0edeb] border-t border-[#e8e6dc] p-3 flex items-center justify-between text-[11px] font-sans-editorial">
            <span className="text-[#4a4452]">WhatsApp Directo:</span>
            <a
              href={DIRECT_CHANNELS.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7242be] font-semibold hover:underline"
            >
              {DIRECT_CHANNELS.whatsapp.number}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
