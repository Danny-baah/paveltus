import React from 'react';
import { Layers, PaintRoller, Shovel, Layers3 } from 'lucide-react';

export const ServicesHero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full bg-[#021861] overflow-hidden"
      aria-labelledby="services-hero-heading"
    >
      {/* Background Room Photo with Drywall, Windows, Buckets & Paint Roller */}
      <img
        src="/services_hero_bg.jpg"
        alt="Paveltus Bauleistungen Übersicht"
        className="absolute inset-0 w-full h-full object-cover object-[right_center] pointer-events-none select-none"
        loading="eager"
      />

      {/* Light Navy Translucent Overlay on the left: reduced so the room photograph shines through */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#021861]/70 via-[#021861]/35 via-[46%] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl text-left text-white">
          {/* Eyebrow with Red Bar */}
          <div className="flex items-center space-x-3 mb-3.5 sm:mb-5">
            <span
              className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-white uppercase">
              UNSERE LEISTUNGEN
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="services-hero-heading"
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-8 sm:mb-10"
          >
            Bauleistungen <br />
            <span className="text-[#DE1110]">aus einer Hand.</span>
          </h1>

          {/* Four Service Icons Row with subtle dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 sm:gap-0 max-w-xl sm:border-t sm:border-white/15 pt-6 sm:pt-8">
            {/* Service 1: Trockenbau */}
            <button
              type="button"
              onClick={() => scrollTo('trockenbau')}
              className="flex flex-col items-start text-left sm:pr-4 sm:border-r sm:border-white/20 group cursor-pointer transition-all hover:translate-y-[-2px]"
            >
              <div className="relative mb-2">
                <Layers className="w-6 h-6 text-white stroke-[2] transition-colors group-hover:text-[#DE1110]" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#DE1110]" />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug">
                Trockenbau
              </span>
            </button>

            {/* Service 2: Malerarbeiten */}
            <button
              type="button"
              onClick={() => scrollTo('malerarbeiten')}
              className="flex flex-col items-start text-left sm:px-4 sm:border-r sm:border-white/20 group cursor-pointer transition-all hover:translate-y-[-2px]"
            >
              <div className="relative mb-2">
                <PaintRoller className="w-6 h-6 text-white stroke-[2] transition-colors group-hover:text-[#DE1110]" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#DE1110]" />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug">
                Malerarbeiten
              </span>
            </button>

            {/* Service 3: Abriss & Entrümpelung */}
            <button
              type="button"
              onClick={() => scrollTo('abriss')}
              className="flex flex-col items-start text-left sm:px-4 sm:border-r sm:border-white/20 group cursor-pointer transition-all hover:translate-y-[-2px]"
            >
              <div className="relative mb-2">
                <Shovel className="w-6 h-6 text-white stroke-[2] transition-colors group-hover:text-[#DE1110]" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#DE1110]" />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug">
                Abriss &amp; Entrümpelung
              </span>
            </button>

            {/* Service 4: Zusätzliche Leistungen */}
            <button
              type="button"
              onClick={() => scrollTo('zusatzleistungen')}
              className="flex flex-col items-start text-left sm:pl-4 group cursor-pointer transition-all hover:translate-y-[-2px]"
            >
              <div className="relative mb-2">
                <Layers3 className="w-6 h-6 text-white stroke-[2] transition-colors group-hover:text-[#DE1110]" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#DE1110]" />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug">
                Zusätzliche Leistungen
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
