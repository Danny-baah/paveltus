import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full bg-[#021861] text-white overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-10"
      aria-label="Website-Footer"
    >
      {/* Modern Architectural Geometric Facade Background on the Right */}
      <svg
        className="hidden lg:block absolute top-0 bottom-0 right-0 w-[36%] xl:w-[33%] h-full pointer-events-none select-none z-0"
        preserveAspectRatio="none"
        viewBox="0 0 500 350"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="footerSkyFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#021861" stopOpacity="1" />
            <stop offset="35%" stopColor="#021861" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#021861" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="footerWallLeft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#031a4a" />
            <stop offset="100%" stopColor="#06225e" />
          </linearGradient>
          <linearGradient id="footerWallRight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#082b72" />
            <stop offset="100%" stopColor="#051f56" />
          </linearGradient>
          <linearGradient id="footerRoofParapet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e3482" />
            <stop offset="100%" stopColor="#06225e" />
          </linearGradient>
          <linearGradient id="footerWindowRecess" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#020d28" />
            <stop offset="100%" stopColor="#04153d" />
          </linearGradient>
        </defs>

        {/* Left Facade Face */}
        <polygon points="120,350 120,180 320,30 320,350" fill="url(#footerWallLeft)" opacity="0.65" />

        {/* Right Facade Face */}
        <polygon points="320,30 500,120 500,350 320,350" fill="url(#footerWallRight)" opacity="0.75" />

        {/* Modern Recessed Window Frame */}
        <polygon points="370,140 470,185 470,330 370,290" fill="url(#footerWindowRecess)" opacity="0.9" />
        <polyline points="370,140 470,185 470,330 370,290 370,140" stroke="#0e3888" strokeWidth="2.5" opacity="0.8" />
        <line x1="420" y1="162" x2="420" y2="310" stroke="#0e3888" strokeWidth="2" opacity="0.7" />

        {/* Roof Parapet Trim Band */}
        <polygon points="120,180 320,30 320,50 120,195" fill="url(#footerRoofParapet)" opacity="0.85" />
        <polygon points="320,30 500,120 500,140 320,50" fill="url(#footerRoofParapet)" opacity="0.9" />

        {/* Corner Vertical Pillar Line */}
        <line x1="320" y1="30" x2="320" y2="350" stroke="#0a2a6d" strokeWidth="3" opacity="0.9" />

        {/* Left smooth fade to transparent */}
        <rect x="0" y="0" width="220" height="350" fill="url(#footerSkyFade)" />

        {/* Vibrant Red Triangular Wedge at Bottom-Right Corner */}
        <polygon points="500,240 500,350 400,350" fill="#DE1110" />
      </svg>

      {/* Mobile Subtle Red Corner Accent */}
      <div
        className="lg:hidden absolute bottom-0 right-0 w-24 h-16 bg-[#DE1110] -z-0 pointer-events-none"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* 4-Column Grid: 4 + 2 + 3 + 3 = 12 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-start">
          {/* ================= COLUMN 1: BRAND, ABOUT & TRUST (Col 1-4) ================= */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <div className="flex flex-col items-start select-none">
              <div className="flex flex-col items-start">
                {/* Red Roof Icon with 4-square window */}
                <svg
                  viewBox="0 0 60 28"
                  fill="none"
                  className="w-12 h-6 mb-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3 24L30 5L57 24"
                    stroke="#DE1110"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M41 15V7H47V19" fill="#DE1110" />
                  <rect x="26.5" y="11" width="3" height="3" fill="white" rx="0.5" />
                  <rect x="31.2" y="11" width="3" height="3" fill="white" rx="0.5" />
                  <rect x="26.5" y="15.5" width="3" height="3" fill="white" rx="0.5" />
                  <rect x="31.2" y="15.5" width="3" height="3" fill="white" rx="0.5" />
                </svg>
                {/* Brand Wordmark */}
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-extrabold tracking-tight text-white text-[22px] sm:text-2xl leading-none">
                    PAVELTUS
                  </span>
                  <span className="font-normal text-white text-[15px] sm:text-base leading-none opacity-90">
                    GmbH
                  </span>
                </div>
              </div>
              {/* Red bar under logo */}
              <span
                className="w-9 h-[3px] bg-[#DE1110] rounded-full mt-2.5 mb-4 inline-block"
                aria-hidden="true"
              />
            </div>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14px] text-white/80 leading-relaxed font-normal mb-6 max-w-[310px]">
              Ihr zuverlässiger Partner für Trockenbau, Malerarbeiten, Abriss und
              weitere Bauleistungen in Berlin und Umgebung.
            </p>

            {/* Trust Indicators Row */}
            <div className="flex items-center space-x-3 text-white/90 text-xs sm:text-[13px] font-medium pt-1">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-white stroke-[2]" />
                <span>Zuverlässig</span>
              </div>
              <span className="text-white/30 text-xs font-light">|</span>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
                <span>Fair</span>
              </div>
              <span className="text-white/30 text-xs font-light">|</span>
              <div className="flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-white stroke-[2]" />
                <span>Professionell</span>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: SCHNELLZUGRIFF (Col 5-6) ================= */}
          <div className="lg:col-span-2 lg:pl-2">
            <h3 className="text-white font-bold text-[17px] sm:text-[18px] leading-tight">
              Schnellzugriff
            </h3>
            <span
              className="w-8 h-[3px] bg-[#DE1110] rounded-full mt-2 mb-4 inline-block"
              aria-hidden="true"
            />
            <ul className="space-y-2.5 text-[14px] text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Startseite
                </a>
              </li>
              <li>
                <a href="/leistungen" className="hover:text-white transition-colors duration-200">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/galerie" className="hover:text-white transition-colors duration-200">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-white transition-colors duration-200">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-white transition-colors duration-200">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 3: UNSERE LEISTUNGEN (Col 7-9) ================= */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="text-white font-bold text-[17px] sm:text-[18px] leading-tight">
              Unsere Leistungen
            </h3>
            <span
              className="w-8 h-[3px] bg-[#DE1110] rounded-full mt-2 mb-4 inline-block"
              aria-hidden="true"
            />
            <ul className="space-y-2.5 text-[14px] text-white/80">
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors duration-200">
                  Trockenbau
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors duration-200">
                  Malerarbeiten
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors duration-200">
                  Abriss & Entrümpelung
                </a>
              </li>
              <li>
                <a href="#zusatzleistungen" className="hover:text-white transition-colors duration-200">
                  Zusätzliche Leistungen
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 4: KONTAKT (Col 10-12) ================= */}
          <div className="lg:col-span-3 relative z-10 lg:pl-2">
            <h3 className="text-white font-bold text-[17px] sm:text-[18px] leading-tight">
              Kontakt
            </h3>
            <span
              className="w-8 h-[3px] bg-[#DE1110] rounded-full mt-2 mb-4 inline-block"
              aria-hidden="true"
            />
            <ul className="space-y-3.5 text-[14px] text-white/85">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#DE1110] flex-shrink-0 stroke-[2.2]" />
                <span>Berlin, Deutschland</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#DE1110] flex-shrink-0 stroke-[2.2]" />
                <a href="tel:+493012345678" className="hover:text-white transition-colors">
                  +49 30 12345678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#DE1110] flex-shrink-0 stroke-[2.2]" />
                <a href="mailto:info@paveltus.de" className="hover:text-white transition-colors">
                  info@paveltus.de
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#DE1110] flex-shrink-0 stroke-[2.2]" />
                <span>Mo – Fr: 08:00 – 17:00 Uhr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="relative z-10 mt-12 sm:mt-16 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-white/75">
            {/* Copyright */}
            <div>
              © 2026 Paveltus GmbH. Alle Rechte vorbehalten.
            </div>

            {/* Center: Webdesign by Emancopys */}
            <div className="flex items-center space-x-4">
              <span className="text-white/30 hidden md:inline">|</span>
              <span className="font-bold text-white tracking-wide">
                Webdesign by Emancopys
              </span>
              <span className="text-white/30 hidden md:inline">|</span>
            </div>

            {/* Right: Legal Links */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </a>
              <span className="text-white/30">|</span>
              <a href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};