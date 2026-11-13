import React from 'react';
import { Navbar } from './Navbar';

export const GalleryHero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#021861] overflow-hidden">
      {/* 1. Transparent Navbar with 'Galerie' highlighted */}
      <Navbar activePage="galerie" />

      {/* 2. Full-Width Architectural Background Image */}
      <img
        src="/gallery_hero_bg.jpg"
        alt="Paveltus Galerie - Ausgewählte Renovierungs- und Sanierungsprojekte"
        className="absolute inset-0 w-full h-full object-cover object-[right_center] pointer-events-none select-none"
        loading="eager"
      />

      {/* Light Navy Translucent Overlay on the left: reduced so the room photograph shines through */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#021861]/70 via-[#021861]/35 via-[45%] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Hero Content Container - Compact and balanced like Contact Page */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-10 lg:px-16 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 lg:pb-16 flex flex-col justify-center items-start text-left">
        <div className="w-full max-w-[320px] sm:max-w-lg lg:max-w-xl text-left text-white">
          {/* Eyebrow with Red Dash */}
          <div className="flex items-center space-x-3 mb-3.5 sm:mb-4">
            <span
              className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-white uppercase">
              PROJEKTGALERIE
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="gallery-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-5"
          >
            Unsere Arbeit. <br />
            <span className="text-[#DE1110]">Ihre Inspiration.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-[17px] text-slate-200 font-normal leading-relaxed max-w-lg">
            Einblicke in ausgewählte Renovierungs-, Umbau- und Sanierungsprojekte der Paveltus GmbH.
          </p>
        </div>
      </div>
    </section>
  );
};
