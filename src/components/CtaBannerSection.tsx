import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

// Custom Calendar Icon matching the exact style from the reference button
const ButtonCalendarIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5 mr-2.5 flex-shrink-0"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="3"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="16" y1="2" x2="16" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="2" x2="8" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" />
    {/* Grid of 6 date dots */}
    <rect x="7" y="12" width="2" height="2" fill="white" rx="0.5" />
    <rect x="11" y="12" width="2" height="2" fill="white" rx="0.5" />
    <rect x="15" y="12" width="2" height="2" fill="white" rx="0.5" />
    <rect x="7" y="16" width="2" height="2" fill="white" rx="0.5" />
    <rect x="11" y="16" width="2" height="2" fill="white" rx="0.5" />
    <rect x="15" y="16" width="2" height="2" fill="white" rx="0.5" />
  </svg>
);

export const CtaBannerSection: React.FC = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt';
  };

  const handleCall = () => {
    window.location.href = 'tel:+493012345678';
  };

  return (
    <section
      id="kontakt-banner"
      className="relative w-full bg-[#FFFFFF] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 scroll-mt-20"
      aria-labelledby="cta-banner-heading"
    >
      {/* Floating Rounded Banner Container on White Background */}
      <div className="relative max-w-[1360px] mx-auto rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#021861] shadow-2xl shadow-[#021861]/12">
        {/* Continuous Full Photographic Background Image (Room, Walls, Floor, Paint Roller & Bucket) */}
        <img
          src="/cta_banner_continuous_clean.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[right_center] pointer-events-none select-none"
          loading="lazy"
        />

        {/* Light Navy Overlay where writings are (preserves image background visibility underneath) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#021861]/80 via-[#021861]/55 via-[48%] to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 py-12 sm:py-14 lg:py-16 xl:py-18 px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-xl text-left text-white">
            {/* Small Category Label with Red Bar */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-5">
              <span
                className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-white uppercase">
                IHR PROJEKT
              </span>
            </div>

            {/* Main Headline */}
            <h2
              id="cta-banner-heading"
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-5"
            >
              Lassen Sie uns Ihr
              <br />
              Bauvorhaben <span className="text-[#DE1110]">realisieren.</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-[14.5px] sm:text-[15.5px] text-white/90 leading-relaxed font-normal mb-8 sm:mb-9 max-w-lg">
              Sie planen einen Umbau, eine Renovierung oder einen Rückbau?
              <br className="hidden sm:inline" />
              {' '}Wir beraten Sie unverbindlich und erstellen Ihnen ein faires Angebot.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              {/* Primary CTA Button: Jetzt Angebot anfordern */}
              <button
                type="button"
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.99] text-white text-[14.5px] sm:text-[15px] font-semibold rounded-[8px] shadow-lg shadow-[#021861]/30 transition-all duration-200 cursor-pointer text-center"
              >
                <ButtonCalendarIcon />
                <span>Jetzt Angebot anfordern</span>
                <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA Button: Direkt anrufen */}
              <button
                type="button"
                onClick={handleCall}
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-transparent hover:bg-white/10 active:scale-[0.99] text-white text-[14.5px] sm:text-[15px] font-semibold rounded-[8px] border border-white/80 transition-all duration-200 cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 mr-2.5 fill-white stroke-none transition-transform duration-200 group-hover:scale-110" />
                <span>Direkt anrufen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};