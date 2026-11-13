import React from 'react';
import { BackgroundVideo } from './BackgroundVideo';
import { TrustIndicators } from './TrustIndicators';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('ueber-uns');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('leistungen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between"
      aria-label="Startseite Hero"
    >
      {/* Cinematic Fullscreen Background Video & Overlay */}
      <BackgroundVideo
        videoSrc="/hero-video.mp4"
        posterSrc="/hero-poster.jpg"
      />

      {/* Top spacing placeholder to balance flex-col with fixed Navbar */}
      <div className="h-20 w-full pointer-events-none" aria-hidden="true" />

      {/* Hero Main Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-4 my-auto">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          {/* Small Introductory Label with Red Accent */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-5 animate-hero-badge">
            <span
              className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.2em] text-white uppercase">
              BAU • RENOVIERUNG • SANIERUNG
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-3 sm:mb-4 animate-hero-headline">
            Handwerk, das
            <br />
            Räume verwandelt.
          </h1>

          {/* Supporting Headline */}
          <h2 className="text-lg sm:text-2xl md:text-[26px] font-semibold text-white tracking-[-0.01em] mb-4 sm:mb-5 animate-hero-subheadline">
            Qualität. Präzision. Vertrauen.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-[17px] text-white/85 max-w-[540px] font-normal leading-relaxed mb-7 sm:mb-9 animate-hero-desc">
            Trockenbau, Malerarbeiten, Abriss und Baureinigung.{' '}
            <br className="hidden sm:inline" />
            Ihr zuverlässiger Partner in Berlin und Umgebung.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 animate-hero-actions">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.99] text-white text-[15px] font-semibold rounded-[4px] shadow-sm transition-all duration-200 text-center cursor-pointer"
            >
              <span>Projekt anfragen</span>
              <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent hover:bg-white/10 active:scale-[0.99] border border-white/80 hover:border-white text-white text-[15px] font-medium rounded-[4px] transition-all duration-200 text-center cursor-pointer"
            >
              Leistungen entdecken
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators near bottom with generous breathing space */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-14 sm:pb-20 pt-4">
        <TrustIndicators />
      </div>
    </section>
  );
};
