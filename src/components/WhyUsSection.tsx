import React from 'react';
import { ArrowRight } from 'lucide-react';

// ================= DUAL-TONE ICONS (Navy #021861 + Red #DE1110) ================= //

// 1. Calendar with 6 red day dots
const CalendarIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2.5" stroke="#021861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="#021861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="#021861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="3" y1="9.5" x2="21" y2="9.5" stroke="#021861" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* 6 Red date dots */}
    <rect x="7" y="12.5" width="2" height="2" fill="#DE1110" rx="0.4" />
    <rect x="11" y="12.5" width="2" height="2" fill="#DE1110" rx="0.4" />
    <rect x="15" y="12.5" width="2" height="2" fill="#DE1110" rx="0.4" />
    <rect x="7" y="16.5" width="2" height="2" fill="#DE1110" rx="0.4" />
    <rect x="11" y="16.5" width="2" height="2" fill="#DE1110" rx="0.4" />
    <rect x="15" y="16.5" width="2" height="2" fill="#DE1110" rx="0.4" />
  </svg>
);

// 2. Shield with red checkmark
const ShieldCheckIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
    <path
      d="M12 21.5s7.5-3.8 7.5-9.5V5.5l-7.5-3-7.5 3V12c0 5.7 7.5 9.5 7.5 9.5z"
      stroke="#021861"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="9 11.8 11.2 14 15.2 9.8"
      stroke="#DE1110"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. Broom with red sparkles
const BroomIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
    <line x1="16" y1="4.5" x2="11.5" y2="12.5" stroke="#021861" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8.5 12h5.5l1 2H7.5l1-2z" stroke="#021861" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M7.5 14l-2 5a1 1 0 001 1h7a1 1 0 001-1l-2-5" stroke="#021861" strokeWidth="1.8" strokeLinejoin="round" />
    {/* Red Sparkles */}
    <path d="M18.5 9.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4z" fill="#DE1110" />
    <path d="M16 15l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4.4-1z" fill="#DE1110" />
  </svg>
);

// 4. Speech bubble with 3 red dots
const ChatBubbleIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
    <path
      d="M20.5 11.5a8 8 0 0 1-.8 3.5 8.2 8.2 0 0 1-7.2 4.5 8 8 0 0 1-3.6-.8L4 20l1.8-5.3a8 8 0 0 1-.8-3.2 8.2 8.2 0 0 1 8.2-8.2h.3a8 8 0 0 1 7 8.2z"
      stroke="#021861"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8.8" cy="12" r="1.1" fill="#DE1110" />
    <circle cx="12" cy="12" r="1.1" fill="#DE1110" />
    <circle cx="15.2" cy="12" r="1.1" fill="#DE1110" />
  </svg>
);

// 5. Coin stack with red Euro badge
const CoinsEuroIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
    <ellipse cx="8.5" cy="6" rx="5.5" ry="2.2" stroke="#021861" strokeWidth="1.8" />
    <path d="M3 6v3.5c0 1.2 2.5 2.2 5.5 2.2s5.5-1 5.5-2.2V6" stroke="#021861" strokeWidth="1.8" />
    <path d="M3 9.5V13c0 1.2 2.5 2.2 5.5 2.2 1 0 1.9-.1 2.8-.4" stroke="#021861" strokeWidth="1.8" />
    <path d="M3 13v3.5c0 1.2 2.5 2.2 5.5 2.2 1 0 1.9-.1 2.7-.4" stroke="#021861" strokeWidth="1.8" />
    {/* Red Euro badge */}
    <circle cx="16.5" cy="16.5" r="4.2" stroke="#DE1110" strokeWidth="1.8" fill="white" />
    <path
      d="M17.6 14.8a1.9 1.9 0 0 0-2.3 1.7c0 1 .6 1.7 1.7 1.7.5 0 1-.2 1.3-.5M14.5 15.8h2.2M14.5 16.9h2.2"
      stroke="#DE1110"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// 6. Stacked layers: top layer RED, lower two NAVY
const LayersDualIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
    <polygon
      points="12 3 3.5 8 12 13 20.5 8 12 3"
      stroke="#DE1110"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="3.5 12.5 12 17.5 20.5 12.5"
      stroke="#021861"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="3.5 16.5 12 21.5 20.5 16.5"
      stroke="#021861"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
}

const whyUsItems: WhyUsItem[] = [
  {
    id: 'erfahrung',
    title: 'Erfahrung zählt',
    description: 'Über 12 Jahre Baupraxis in Berlin und Umgebung.',
    icon: CalendarIcon,
  },
  {
    id: 'zuverlaessigkeit',
    title: 'Zuverlässigkeit',
    description: 'Wir halten Termine ein und liefern wie besprochen.',
    icon: ShieldCheckIcon,
  },
  {
    id: 'saubere-arbeit',
    title: 'Saubere Arbeit',
    description: 'Ordnung auf der Baustelle ist selbstverständlich.',
    icon: BroomIcon,
  },
  {
    id: 'direkter-kontakt',
    title: 'Direkter Kontakt',
    description: 'Sie sprechen direkt mit dem Chef, ohne Umwege.',
    icon: ChatBubbleIcon,
  },
  {
    id: 'faire-preise',
    title: 'Faire Preise',
    description: 'Transparente Angebote ohne versteckte Kosten.',
    icon: CoinsEuroIcon,
  },
  {
    id: 'alles-aus-einer-hand',
    title: 'Alles aus einer Hand',
    description: 'Von Abriss bis Anstrich – wir koordinieren jeden Schritt selbst.',
    icon: LayersDualIcon,
  },
];

export const WhyUsSection: React.FC = () => {
  const scrollToContact = () => {
    const target = document.getElementById('ueber-uns');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="warum-wir"
      className="relative w-full bg-[#FFFFFF] text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-20"
      aria-labelledby="why-us-heading"
    >
      {/* ================= DESKTOP DIAGONAL BACKGROUND SLICE ================= */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 left-0 w-[42%] -z-0 overflow-hidden pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 68% 100%, 0 100%)' }}
        aria-hidden="true"
      >
        {/* Clean renovation room photo — no text artifacts */}
        <img
          src="/why_room_bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Very light navy tint — room stays clearly visible like the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021861]/85 via-[#021861]/40 via-[50%] to-transparent" />
      </div>

      {/* Diagonal Red Accent Line along the slant edge */}
      <svg
        className="hidden lg:block absolute top-0 bottom-0 left-0 w-[42%] h-full pointer-events-none z-[1]"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="whyRedGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DE1110" stopOpacity="0" />
            <stop offset="60%" stopColor="#DE1110" stopOpacity="0.15" />
            <stop offset="85%" stopColor="#DE1110" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DE1110" stopOpacity="1" />
          </linearGradient>
          <filter id="whyGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Soft glow */}
        <line
          x1="1000"
          y1="0"
          x2="680"
          y2="1000"
          stroke="url(#whyRedGlow)"
          strokeWidth="8"
          filter="url(#whyGlowFilter)"
          opacity="0.5"
        />
        {/* Sharp accent line */}
        <line
          x1="1000"
          y1="0"
          x2="680"
          y2="1000"
          stroke="url(#whyRedGlow)"
          strokeWidth="3"
        />
      </svg>

      {/* ================= MOBILE BACKGROUND SLICE ================= */}
      <div
        className="lg:hidden absolute top-0 left-0 right-0 h-[460px] bg-[#021861] -z-0 pointer-events-none overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}
        aria-hidden="true"
      >
        <img
          src="/why_room_bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30 object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#021861]/85 via-[#021861]/80 to-[#021861]" />
      </div>

      {/* ================= SECTION CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-14">
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="w-full lg:w-[380px] xl:w-[410px] flex-shrink-0 text-left text-white pt-4 lg:pt-0">
            {/* Category Tag with Red Bar */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-5">
              <span
                className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-white uppercase">
                WARUM PAVELTUS
              </span>
            </div>

            {/* Main Headline */}
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold text-white tracking-[-0.03em] leading-[1.14] mb-5 sm:mb-6"
            >
              <span className="block whitespace-nowrap">Warum unsere Kunden</span>
              <span className="block">unsere Arbeit</span>
              <span className="block text-[#DE1110]">schätzen</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[14.5px] sm:text-[15.5px] text-white/85 leading-relaxed font-normal mb-8 sm:mb-9 max-w-[340px] sm:max-w-[360px]">
              6 gute Gründe, warum sich so viele Kunden in Berlin und Umgebung
              für Paveltus GmbH entscheiden – Qualität, Zuverlässigkeit und eine
              Zusammenarbeit auf Augenhöhe.
            </p>

            {/* Red CTA Button */}
            <div>
              <button
                type="button"
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.99] text-white text-[14.5px] sm:text-[15px] font-semibold rounded-[6px] shadow-lg shadow-[#021861]/30 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Mehr über Paveltus erfahren</span>
                <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 6 FEATURE CARDS ================= */}
          <div className="w-full lg:flex-1 lg:max-w-[760px] xl:max-w-[820px] pt-4 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-4.5 xl:gap-5">
              {whyUsItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-[18px] sm:rounded-[20px] p-4 sm:p-4.5 xl:p-5 border border-[#E5EDF6] shadow-[0_4px_20px_rgba(2,24,97,0.05)] hover:shadow-[0_12px_28px_rgba(2,24,97,0.12)] hover:-translate-y-1 transition-all duration-300 flex items-center"
                  >
                    {/* Icon container */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[14px] bg-[#EEF4FB] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Icon />
                    </div>

                    {/* Red vertical divider */}
                    <span
                      className="w-[2.5px] h-6 sm:h-7 bg-[#DE1110] rounded-full mx-3.5 sm:mx-4 flex-shrink-0"
                      aria-hidden="true"
                    />

                    {/* Text Block */}
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#021861] font-bold text-[16px] sm:text-[16.5px] leading-snug tracking-tight mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-[12.5px] sm:text-[13px] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};