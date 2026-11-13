import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BeforeAfterProject {
  id: string;
  eyebrow: string;
  headlineTitle: string;
  headlineHighlight: string;
  description: string;
  highlights: string[];
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const COMPARISON_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'wanddurchbruch',
    eyebrow: 'PROJEKTBEISPIEL 01',
    headlineTitle: 'Wanddurchbruch',
    headlineHighlight: '& Großzügiger Wohnraum.',
    description:
      'Durch den fachgerechten Abbruch einer massiven Zwischenwand entstand ein offener, lichtdurchfluteter Raum mit makellosem Neuanstrich.',
    highlights: [
      'Statischer Wanddurchbruch & fachgerechte Abstützung',
      'Trockenbauverkleidung & sauberer Deckenanschluss',
      'Makelloser Maler- und Glättanstrich in Reinweiß',
    ],
    beforeImage: '/ba_site_p1_before.jpg',
    afterImage: '/ba_site_p1_after.jpg',
    beforeAlt: 'Wohnraum während des Wanddurchbruchs - Paveltus Referenz',
    afterAlt: 'Fertig renovierter, offener Wohnraum in Reinweiß - Paveltus Referenz',
  },
  {
    id: 'bad-sanierung',
    eyebrow: 'PROJEKTBEISPIEL 02',
    headlineTitle: 'Badsanierung',
    headlineHighlight: '& Sanitärinstallation.',
    description:
      'Vollständige Modernisierung eines Altbau-Badezimmers mit neuer Leitungsführung, Vorwandelementen und zeitgemäßer Badausstattung.',
    highlights: [
      'Entkernung & fachgerechte Leitungsinstallation',
      'Vorwandelemente & feuchtigkeitsbeständiger Trockenbau',
      'Fliesen- und Montagearbeiten bis zum bezugsfertigen Ausbau',
    ],
    beforeImage: '/ba_site_p2_before.jpg',
    afterImage: '/ba_site_p2_after.jpg',
    beforeAlt: 'Badezimmer vor der Sanierung im Rohbau - Paveltus Referenz',
    afterAlt: 'Modernes saniertes Bad mit Spiegel und Sanitärkeramik - Paveltus Referenz',
  },
  {
    id: 'wandgestaltung',
    eyebrow: 'PROJEKTBEISPIEL 03',
    headlineTitle: 'Wandgestaltung',
    headlineHighlight: '& Beleuchtungskonzept.',
    description:
      'Von der baulichen Rohphase und Leitungsverlegung bis zur stimmungsvollen Wandgestaltung mit Stuckprofilen und integrierter Beleuchtung.',
    highlights: [
      'Rückbau und saubere Vorbereitung der Leitungen',
      'Präzise Trockenbau- und Spachtelarbeiten (Q3/Q4)',
      'Hochwertige Wandlasur & Wandleuchten mit Lichteffekten',
    ],
    beforeImage: '/ba_site_p3_before.jpg',
    afterImage: '/ba_site_p3_after.jpg',
    beforeAlt: 'Boden und Leitungsbereich vor der Sanierung - Paveltus Referenz',
    afterAlt: 'Fertige Wandgestaltung mit integrierten Leuchten - Paveltus Referenz',
  },
  {
    id: 'komplettumbau',
    eyebrow: 'PROJEKTBEISPIEL 04',
    headlineTitle: 'Komplettumbau',
    headlineHighlight: '& Oberflächenveredelung.',
    description:
      'Altes Badezimmer und Durchgangsbereich komplett entkernt und in eine moderne, offene Raumverbindung mit feiner Putzstruktur verwandelt.',
    highlights: [
      'Abbruch alter Fliesen und Sanitärobjekte',
      'Neuer Durchgang & stabiler Wandaufbau',
      'Edler Feinputz mit eleganter Struktur und Farbanstrich',
    ],
    beforeImage: '/ba_site_p4_before.jpg',
    afterImage: '/ba_site_p4_after.jpg',
    beforeAlt: 'Entkernter Sanitärbereich vor der Sanierung - Paveltus Referenz',
    afterAlt: 'Neuer Raumdurchgang mit Strukturputz - Paveltus Referenz',
  },
];

export const BeforeAfterSection: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0..100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = COMPARISON_PROJECTS[currentProjectIndex];

  // Reset slider position on project change
  const handleProjectChange = (newIndex: number) => {
    setCurrentProjectIndex(newIndex);
    setSliderPosition(50);
  };

  const handlePrev = () => {
    const nextIndex =
      currentProjectIndex > 0 ? currentProjectIndex - 1 : COMPARISON_PROJECTS.length - 1;
    handleProjectChange(nextIndex);
  };

  const handleNext = () => {
    const nextIndex =
      currentProjectIndex < COMPARISON_PROJECTS.length - 1 ? currentProjectIndex + 1 : 0;
    handleProjectChange(nextIndex);
  };

  // Slider position calculation from mouse/touch clientX
  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches[0]) {
        updateSliderPosition(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, updateSliderPosition]);

  return (
    <section
      id="vorher-nachher"
      className="relative w-full bg-[#F5F7FC] py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-slate-200/60"
      aria-labelledby="ba-heading"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase block mb-3">
            VORHER &amp; NACHHER
          </span>
          <h2
            id="ba-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.18] mb-4 sm:mb-5"
          >
            Echte Veränderungen.{' '}
            <span className="text-[#DE1110]">Überzeugende Ergebnisse.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Sehen Sie selbst, wie wir Räume durch professionelle Sanierung, Renovierung und
            Modernisierung in neue Wohlfühlorte verwandeln.
          </p>
        </div>

        {/* ================= 2-COLUMN LAYOUT: SLIDER (LEFT) & PROJECT INFO (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center">
          {/* ----- LEFT: DRAGGABLE BEFORE/AFTER COMPARISON CONTAINER ----- */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="relative w-full max-w-[680px] aspect-[16/10] sm:aspect-[16/10] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-2xl shadow-[#021861]/12 select-none cursor-ew-resize bg-slate-200"
              style={{ touchAction: 'none' }}
              role="slider"
              aria-label="Vorher-Nachher Bildervergleich"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPosition)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  setSliderPosition((prev) => Math.max(0, prev - 5));
                } else if (e.key === 'ArrowRight') {
                  setSliderPosition((prev) => Math.min(100, prev + 5));
                }
              }}
            >
              {/* LAYER 1: BASE BEFORE PHOTOGRAPH */}
              <img
                src={currentProject.beforeImage}
                alt={currentProject.beforeAlt}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              />

              {/* LAYER 2: REVEALED AFTER PHOTOGRAPH (Clipped horizontally) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none"
                style={{
                  clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                  WebkitClipPath: `inset(0 0 0 ${sliderPosition}%)`,
                }}
              >
                <img
                  src={currentProject.afterImage}
                  alt={currentProject.afterAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                />
              </div>

              {/* VORHER BADGE (Top-Left) */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 px-3.5 py-1.5 bg-[#021861] text-white text-[11px] sm:text-xs font-bold rounded-full uppercase tracking-wider shadow-md pointer-events-none">
                VORHER
              </div>

              {/* NACHHER BADGE (Top-Right) */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 px-3.5 py-1.5 bg-[#DE1110] text-white text-[11px] sm:text-xs font-bold rounded-full uppercase tracking-wider shadow-md pointer-events-none">
                NACHHER
              </div>

              {/* VERTICAL DIVIDER LINE & HANDLE */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Circular Draggable Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-white shadow-xl shadow-black/25 flex items-center justify-center text-[#021861] border border-slate-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#021861]"
                  >
                    <polyline points="9 18 3 12 9 6" />
                    <polyline points="15 6 21 12 15 18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ----- RIGHT: PROJECT INFORMATION & CAROUSEL CONTROLS ----- */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase mb-2.5">
              {currentProject.eyebrow}
            </span>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.18] mb-4">
              {currentProject.headlineTitle}{' '}
              <span className="text-[#DE1110]">{currentProject.headlineHighlight}</span>
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-7 max-w-lg">
              {currentProject.description}
            </p>

            {/* 3 Project Highlights with Circle-Check Icons */}
            <div className="space-y-3.5 w-full mb-9">
              {currentProject.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#DE1110]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#DE1110] stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-bold text-[#021861]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Multiple Comparisons Project Controls: Left Arrow, Right Arrow, Counter */}
            <div className="flex items-center space-x-4 pt-2">
              {/* Prev Project Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Vorheriges Projektbeispiel"
                className="w-12 h-12 rounded-full bg-white hover:bg-slate-100 active:scale-95 text-[#021861] flex items-center justify-center transition-all cursor-pointer shadow-sm border border-slate-200"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Next Project Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Nächstes Projektbeispiel"
                className="w-12 h-12 rounded-full bg-[#021861] hover:bg-[#DE1110] active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md shadow-[#021861]/15"
              >
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Project Indicator (e.g. 1 / 4) */}
              <span className="text-sm font-bold text-slate-600 pl-3 select-none">
                {currentProjectIndex + 1} / {COMPARISON_PROJECTS.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
