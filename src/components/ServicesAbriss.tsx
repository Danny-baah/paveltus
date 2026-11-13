import React from 'react';
import { Hammer, Wrench, Trash2, ArrowRight } from 'lucide-react';

export const ServicesAbriss: React.FC = () => {
  return (
    <section
      id="abriss"
      className="relative w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16 overflow-hidden scroll-mt-16"
      aria-labelledby="abriss-heading"
    >
      {/* Subtle Architectural Watermark Accent in Top-Right Background */}
      <div
        className="absolute top-6 right-6 w-96 h-96 opacity-[0.035] pointer-events-none select-none text-[#021861]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="10,60 50,20 90,60" />
          <polyline points="20,70 50,40 80,70" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center">
          {/* ----- LEFT: LARGE ABRISS & ENTRÜMPELUNG PHOTOGRAPH (Alternating!) ----- */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[560px] rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] overflow-hidden shadow-2xl shadow-[#021861]/10 bg-slate-100">
              <img
                src="/services_abriss.jpg"
                alt="Paveltus Abriss, Entkernung und Entrümpelung Berlin"
                className="w-full h-auto object-cover object-center select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* ----- RIGHT: CONTENT & 3 ICON ROWS ----- */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase mb-2.5">
              ABRISS &amp; ENTRÜMPELUNG
            </span>

            {/* Main Headline */}
            <h2
              id="abriss-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.15] mb-4 sm:mb-5"
            >
              Platz für <span className="text-[#DE1110]">Neues schaffen.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
              Zuverlässige Abriss-, Rückbau- und Entrümpelungsarbeiten für Wohnungen, Gewerberäume und
              Renovierungsprojekte – termingerecht, sicher und inklusive umweltgerechtem Abtransport.
            </p>

            {/* 3 Compact Icon-Led Rows */}
            <div className="space-y-5 sm:space-y-6 w-full mb-8 sm:mb-10">
              {/* Row 01: Innenabriss & Entkernung */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FC] flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <Hammer className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Innenabriss &amp; Entkernung
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Fachgerechter Rückbau nicht-tragender Wände, Decken und Bodenbeläge.
                  </p>
                </div>
              </div>

              {/* Row 02: Fachgerechte Demontage */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FC] flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Fachgerechte Demontage
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Präzises und sauberes Entfernen alter Bauelemente, Türen und Einbauten.
                  </p>
                </div>
              </div>

              {/* Row 03: Entrümpelung & Abtransport */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FC] flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <Trash2 className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Entrümpelung &amp; Abtransport
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Besenreine Räumung und umweltgerechte Entsorgung aller Materialien.
                  </p>
                </div>
              </div>
            </div>

            {/* Red CTA Button */}
            <a
              href="/kontakt"
              className="group inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.98] text-white font-bold text-sm rounded-[8px] shadow-md shadow-[#DE1110]/20 transition-all cursor-pointer"
            >
              <span>Mehr zu Abriss &amp; Entrümpelung</span>
              <ArrowRight className="w-4 h-4 ml-1 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

