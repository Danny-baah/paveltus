import React from 'react';

export const ContactHero: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#021861] overflow-hidden"
      aria-labelledby="contact-hero-heading"
    >
      {/* Background Room Photo with Drywall, Ladder, Bucket, Roller & Corner Accent */}
      <img
        src="/contact_hero_bg_clean.jpg"
        alt="Paveltus Kontakt Renovierungsraum"
        className="absolute inset-0 w-full h-full object-cover object-[right_center] pointer-events-none select-none"
        loading="eager"
      />

      {/* Light Navy Translucent Overlay: reduced so background room is clearly visible */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#021861]/70 via-[#021861]/35 via-[48%] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28">
        <div className="w-full max-w-[320px] sm:max-w-lg lg:max-w-xl text-left text-white">
          {/* Category Tag with Red Bar */}
          <div className="flex items-center space-x-3 mb-3.5 sm:mb-5">
            <span
              className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-white uppercase">
              KONTAKT
            </span>
          </div>

          {/* Main Headline with Red Accent */}
          <h1
            id="contact-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-6"
          >
            Nehmen Sie <br />
            <span className="text-[#DE1110]">Kontakt</span> mit uns auf.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-[17px] text-slate-200 font-normal leading-relaxed">
            Sie haben Fragen, planen ein Projekt oder möchten ein Angebot erhalten? Wir sind gerne
            für Sie da.
          </p>
        </div>
      </div>
    </section>
  );
};
