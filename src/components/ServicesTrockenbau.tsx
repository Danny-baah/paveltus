import React from 'react';
import { Layers, Gem, ArrowRight } from 'lucide-react';

export const ServicesTrockenbau: React.FC = () => {
  return (
    <section
      id="trockenbau"
      className="relative w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16 overflow-hidden scroll-mt-16"
      aria-labelledby="trockenbau-heading"
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
          {/* ----- LEFT: LARGE TROCKENBAU PHOTOGRAPH ----- */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[560px] rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] overflow-hidden shadow-2xl shadow-[#021861]/10 bg-slate-100">
              <img
                src="/services_trockenbau_800.jpg"
                alt="Paveltus Trockenbau und Innenausbau Berlin"
                className="w-full h-auto object-cover object-center select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* ----- RIGHT: CONTENT & 3 ICON ROWS ----- */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow (No red bar, clean typography) */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase mb-2.5">
              TROCKENBAU
            </span>

            {/* Main Headline */}
            <h2
              id="trockenbau-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.15] mb-4 sm:mb-5"
            >
              Trockenbau <span className="text-[#DE1110]">nach Maß.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
              Flexible und moderne Innenausbauten für Wohn- und Gewerberäume – präzise, sauber und
              termingerecht umgesetzt.
            </p>

            {/* 3 Compact Icon-Led Rows matching reference */}
            <div className="space-y-5 sm:space-y-6 w-full mb-8 sm:mb-10">
              {/* Row 01: Wände & Raumaufteilung */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FC] flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <Layers className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Wände &amp; Raumaufteilung
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Individuelle Trennwände für neue Raumkonzepte.
                  </p>
                </div>
              </div>

              {/* Row 02: Deckenverkleidungen */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FC] flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <Gem className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Deckenverkleidungen
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Abgehängte Decken für eine moderne Optik.
                  </p>
                </div>
              </div>

              {/* Row 03: Schall- & Wärmeschutz */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FC] flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-[#021861]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 11v2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Schall- &amp; Wärmeschutz
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Mehr Ruhe und ein angenehmes Raumklima.
                  </p>
                </div>
              </div>
            </div>

            {/* Red CTA Button */}
            <a
              href="/kontakt"
              className="group inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.98] text-white font-bold text-sm rounded-[8px] shadow-md shadow-[#DE1110]/20 transition-all cursor-pointer"
            >
              <span>Mehr zum Trockenbau</span>
              <ArrowRight className="w-4 h-4 ml-1 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
