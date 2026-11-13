import React from 'react';
import { PaintRoller, Sparkles, Brush, ArrowRight } from 'lucide-react';

export const ServicesMalerarbeiten: React.FC = () => {
  return (
    <section
      id="malerarbeiten"
      className="relative w-full bg-[#F5F7FC] py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16 overflow-hidden scroll-mt-16 border-y border-slate-200/60"
      aria-labelledby="malerarbeiten-heading"
    >
      {/* Subtle Architectural Watermark Accent in Top-Left Background */}
      <div
        className="absolute top-6 left-6 w-96 h-96 opacity-[0.03] pointer-events-none select-none text-[#021861]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="10,60 50,20 90,60" />
          <polyline points="20,70 50,40 80,70" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center">
          {/* ----- LEFT: CONTENT & 3 ICON ROWS (Alternating Composition!) ----- */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase mb-2.5">
              MALERARBEITEN
            </span>

            {/* Main Headline */}
            <h2
              id="malerarbeiten-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.15] mb-4 sm:mb-5"
            >
              Farbe, die <span className="text-[#DE1110]">Räume verwandelt.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
              Professionelle Malerarbeiten und hochwertige Oberflächen für ein gepflegtes, modernes
              Raumgefühl. Ob Neubau oder Renovierung – wir sorgen für makellose Wände und ein
              einwandfreies Finish.
            </p>

            {/* 3 Compact Icon-Led Rows */}
            <div className="space-y-5 sm:space-y-6 w-full mb-8 sm:mb-10">
              {/* Row 01: Innenanstriche & Wandgestaltung */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <Brush className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Innenanstriche &amp; Wandgestaltung
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Farbkonzepte und präzise Kanten für makellose Wandoberflächen.
                  </p>
                </div>
              </div>

              {/* Row 02: Professionelle Oberflächenvorbereitung */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Professionelle Oberflächenvorbereitung
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Gründliches Spachteln, Schleifen und Grundieren für langlebige Ergebnisse.
                  </p>
                </div>
              </div>

              {/* Row 03: Tapezierarbeiten & Wandveredelung */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#021861] flex-shrink-0 mt-0.5">
                  <PaintRoller className="w-5 h-5 text-[#021861] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021861] text-[15px] sm:text-base leading-snug">
                    Tapezierarbeiten &amp; Wandveredelung
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Fachgerechtes Tapezieren und Veredeln von Wand- und Deckenflächen.
                  </p>
                </div>
              </div>
            </div>

            {/* Red CTA Button */}
            <a
              href="/kontakt"
              className="group inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.98] text-white font-bold text-sm rounded-[8px] shadow-md shadow-[#DE1110]/20 transition-all cursor-pointer"
            >
              <span>Mehr zu Malerarbeiten</span>
              <ArrowRight className="w-4 h-4 ml-1 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* ----- RIGHT: LARGE MALER PHOTOGRAPH ----- */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[560px] rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] overflow-hidden shadow-2xl shadow-[#021861]/10 bg-slate-100">
              <img
                src="/services_maler.jpg"
                alt="Paveltus Malerarbeiten und Anstrich Berlin"
                className="w-full h-auto object-cover object-center select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

