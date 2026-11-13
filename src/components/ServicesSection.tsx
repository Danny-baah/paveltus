import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  image: string;
}

const serviceCards: ServiceCardData[] = [
  {
    id: 'trockenbau',
    title: 'Trockenbau',
    description: 'Moderne Raumlösungen mit Trennwänden, Decken- und Bodensystemen.',
    image: '/card_trockenbau_exact.png',
  },
  {
    id: 'malerarbeiten',
    title: 'Malerarbeiten',
    description: 'Professionelle Maler- und Wandarbeiten für ein hochwertiges und langlebiges Ergebnis.',
    image: '/card_maler_exact.png',
  },
  {
    id: 'abriss',
    title: 'Abriss & Entrümpelung',
    description: 'Fachgerechter Rückbau, Abriss und die besenreine Entrümpelung von Immobilien.',
    image: '/card_abriss_exact.png',
  },
];

export const ServicesSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="leistungen"
      className="relative w-full bg-[#FFFFFF] text-slate-900 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32 px-6 sm:px-10 lg:px-16 overflow-hidden scroll-mt-16"
      aria-labelledby="services-heading"
    >
      {/* Decorative Architectural Background Elements from the reference */}
      {/* Top-Right Architectural Facade Window Silhouette */}
      <div
        className="absolute top-0 right-0 w-[420px] lg:w-[540px] h-[340px] pointer-events-none opacity-[0.07] select-none -z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 300" fill="none" stroke="#021861" strokeWidth="1.5" className="w-full h-full">
          {/* Diagonal architectural cut lines */}
          <line x1="120" y1="0" x2="400" y2="280" />
          <line x1="200" y1="0" x2="400" y2="200" />
          {/* Modern building window grid */}
          <rect x="240" y="40" width="140" height="180" />
          <line x1="310" y1="40" x2="310" y2="220" />
          <line x1="240" y1="100" x2="380" y2="100" />
          <line x1="240" y1="160" x2="380" y2="160" />
        </svg>
      </div>

      {/* Top-Left Subtle Angled Lines */}
      <div
        className="absolute top-0 left-0 w-80 h-64 pointer-events-none opacity-[0.06] select-none -z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 300 240" fill="none" stroke="#021861" strokeWidth="1.5" className="w-full h-full">
          <line x1="0" y1="60" x2="220" y2="0" />
          <line x1="0" y1="140" x2="280" y2="20" />
        </svg>
      </div>

      {/* Bottom-Right Soft Diagonal Geometry Accent */}
      <div
        className="absolute bottom-0 right-0 w-[40%] h-48 bg-gradient-to-tl from-[#F1F5F9]/80 to-transparent pointer-events-none -z-0"
        style={{ clipPath: 'polygon(30% 100%, 100% 0, 100% 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Small Introductory Label with Red Bar */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span
              className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase">
              LEISTUNGEN
            </span>
          </div>

          {/* Main Headline */}
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.15] mb-4 sm:mb-5"
          >
            Unsere Leistungen im <span className="text-[#DE1110]">Überblick</span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Ob Trockenbau, Malerarbeiten oder Abriss und Entrümpelung – wir bieten{' '}
            <br className="hidden sm:inline" />
            professionelle Bauleistungen mit Qualität, Zuverlässigkeit und Erfahrung.
          </p>
        </div>

        {/* ================= 3 SERVICE CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1320px] mx-auto mb-12 sm:mb-14">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="group relative aspect-[307/268] w-full rounded-[22px] sm:rounded-[26px] overflow-hidden border border-slate-200/70 shadow-lg shadow-[#021861]/8 hover:shadow-2xl hover:shadow-[#021861]/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-slate-900"
            >
              {/* Exact High-Resolution Card Visual (Clear, less overlay, full visibility) */}
              <img
                src={card.image}
                alt={`${card.title} - ${card.description}`}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Accessible description for screen readers */}
              <span className="sr-only">
                {card.title}: {card.description}
              </span>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA BUTTON ================= */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center px-8 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.99] text-white text-[15px] font-semibold rounded-[6px] shadow-sm transition-all duration-200 cursor-pointer text-center"
          >
            <span>Alle Leistungen entdecken</span>
            <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
