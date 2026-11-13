import React from 'react';
import { Award, ShieldCheck, Layers, Settings, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const scrollToContactOrTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="ueber-uns"
      className="relative w-full bg-[#F4F7FC] text-slate-900 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36 px-6 sm:px-10 lg:px-16 overflow-hidden scroll-mt-16"
      aria-labelledby="about-heading"
    >
      {/* Decorative Dark Navy Diagonal Background Accent on the Left (Desktop only to protect mobile copy readability) */}
      <div
        className="hidden lg:block absolute top-12 sm:top-16 lg:top-20 bottom-0 left-0 w-[48%] bg-[#021861] -z-0 pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0 100%)',
        }}
        aria-hidden="true"
      />

      {/* Mobile Subtle Navy Accent block behind image section */}
      <div
        className="lg:hidden absolute top-12 left-0 right-0 h-[480px] bg-[#021861] -z-0 pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Red Corner Accent Lines (Architectural Framing) */}
      <div
        className="absolute top-20 sm:top-28 lg:top-32 left-[18%] sm:left-[24%] lg:left-[22%] w-44 h-28 border-t-2 border-r-2 border-[#DE1110] rounded-tr-3xl -z-0 pointer-events-none hidden lg:block opacity-90"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 left-6 sm:left-12 w-28 h-28 border-b-2 border-l-2 border-[#DE1110] rounded-bl-3xl -z-0 pointer-events-none hidden lg:block opacity-90"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT COLUMN: 3-IMAGE COLLAGE ================= */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full max-w-[480px] sm:max-w-[530px] lg:max-w-none mx-auto h-[440px] sm:h-[490px] lg:h-[510px]">
              {/* 1. Main Large Card (Top) */}
              <div className="absolute top-0 right-0 w-[84%] sm:w-[82%] h-[270px] sm:h-[310px] lg:h-[330px] z-10">
                <div className="w-full h-full overflow-hidden rounded-[22px] sm:rounded-[26px] border-[5px] sm:border-[6px] border-white shadow-2xl shadow-[#021861]/35 bg-slate-200">
                  <img
                    src="/about-craftsman.jpg"
                    alt="PAVELTUS Handwerker bei der präzisen Wandglättung und Spachtelarbeit"
                    className="w-full h-full object-cover object-[center_35%]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Overlaid Red Experience Badge */}
              <div className="absolute top-[220px] sm:top-[250px] lg:top-[270px] left-0 sm:left-2 lg:left-4 z-30 bg-[#DE1110] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-[12px] border-2 border-white shadow-2xl shadow-black/30 flex items-center space-x-3 select-none">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-[13px] font-bold leading-tight tracking-normal">
                    Über 12 Jahre
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold leading-tight tracking-normal opacity-95">
                    Erfahrung
                  </span>
                </div>
              </div>

              {/* 2. Bottom-Left Card (Paint Roller Close-Up) */}
              <div className="absolute bottom-0 left-0 w-[46%] sm:w-[44%] h-[160px] sm:h-[185px] lg:h-[195px] z-20">
                <div className="w-full h-full overflow-hidden rounded-[18px] sm:rounded-[22px] border-[4px] sm:border-[5px] border-white shadow-2xl shadow-[#021861]/40 bg-slate-100">
                  <img
                    src="/about-roller.jpg"
                    alt="Professionelle Malerarbeiten mit Farbroller"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 3. Bottom-Right Card (Bright Modern Renovated Room) */}
              <div className="absolute bottom-2 right-0 w-[54%] sm:w-[52%] h-[165px] sm:h-[190px] lg:h-[200px] z-20">
                <div className="w-full h-full overflow-hidden rounded-[18px] sm:rounded-[22px] border-[4px] sm:border-[5px] border-white shadow-2xl shadow-[#021861]/25 bg-slate-100">
                  <img
                    src="/about-renovated.jpg"
                    alt="Renovierter heller Raum mit Holzparkett und Altbaufenstern"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT & TYPOGRAPHY ================= */}
          <div className="lg:col-span-6 text-left pl-0 lg:pl-6 pt-4 lg:pt-0">
            {/* Introductory Label with Red Bar */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-5">
              <span
                className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase">
                ÜBER UNS
              </span>
            </div>

            {/* Main Headline with "in Berlin" highlighted in Red */}
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[45px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.14] mb-5 sm:mb-6"
            >
              PAVELTUS GmbH –<br />
              Ihr Partner für Renovierung<br />
              und Sanierung <span className="text-[#DE1110]">in Berlin</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal mb-8 sm:mb-10 max-w-xl">
              Seit über 12 Jahren stehen wir für qualitatives Handwerk, zuverlässige
              Ausführung und saubere Ergebnisse. Ob Trockenbau, Malerarbeiten, Abriss
              oder Baureinigung – wir realisieren Projekte effizient, termintreu und
              mit höchstem Anspruch an die Qualität.
            </p>

            {/* Three Feature Indicators with Thin Vertical Dividers (Exact Layout from Reference) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-2 pt-2 pb-8 sm:pb-10 max-w-xl">
              {/* Feature 1 */}
              <div className="flex items-center space-x-3 group">
                <Settings className="w-8 h-8 text-[#DE1110] stroke-[1.8] flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <div className="flex flex-col text-left">
                  <span className="text-[14px] font-bold text-[#021861] leading-[1.25]">
                    Erfahrenes
                  </span>
                  <span className="text-[14px] font-bold text-[#021861] leading-[1.25]">
                    Fachteam
                  </span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-8 w-px bg-slate-200" aria-hidden="true" />

              {/* Feature 2 */}
              <div className="flex items-center space-x-3 group">
                <ShieldCheck className="w-8 h-8 text-[#DE1110] stroke-[1.8] flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <div className="flex flex-col text-left">
                  <span className="text-[14px] font-bold text-[#021861] leading-[1.25]">
                    Zuverlässige
                  </span>
                  <span className="text-[14px] font-bold text-[#021861] leading-[1.25]">
                    Abwicklung
                  </span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-8 w-px bg-slate-200" aria-hidden="true" />

              {/* Feature 3 */}
              <div className="flex items-center space-x-3 group">
                <Layers className="w-8 h-8 text-[#DE1110] stroke-[1.8] flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <div className="flex flex-col text-left">
                  <span className="text-[14px] font-bold text-[#021861] leading-[1.25]">
                    Saubere &amp;
                  </span>
                  <span className="text-[14px] font-bold text-[#021861] leading-[1.25]">
                    präzise Arbeit
                  </span>
                </div>
              </div>
            </div>

            {/* Red Call-To-Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToContactOrTop}
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.99] text-white text-[15px] font-semibold rounded-[4px] shadow-sm transition-all duration-200 text-center cursor-pointer"
              >
                <span>Mehr über uns erfahren</span>
                <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
