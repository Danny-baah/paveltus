import React from 'react';
import { Layers, Sparkles, PaintRoller, Truck, Package, ArrowRight } from 'lucide-react';

// Custom SVG: Bauschuttentsorgung Bin with 3 vertical slats
const TrashBinIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Lid handle */}
    <path d="M10 3.5h4" />
    {/* Lid rim */}
    <path d="M4.5 6.5h15" />
    {/* Bin body */}
    <path d="M6 6.5l1.2 13.5a2 2 0 002 1.8h5.6a2 2 0 002-1.8l1.2-13.5" />
    {/* 3 Vertical Slats */}
    <line x1="9.5" y1="10.5" x2="9.5" y2="17.5" />
    <line x1="12" y1="10.5" x2="12" y2="17.5" />
    <line x1="14.5" y1="10.5" x2="14.5" y2="17.5" />
  </svg>
);

// Custom SVG: Crossed Wrench & Screwdriver for Kleinere Reparaturarbeiten
const ToolsIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Screwdriver (angled top-right to bottom-left) */}
    <path d="M18.5 4.5l1 1-3.5 3.5-1-1 3.5-3.5z" />
    <line x1="15" y1="8" x2="10" y2="13" />
    <path d="M10 13l-4 4c-.8.8-.8 2 0 2.8s2 .8 2.8 0l4-4" />
    {/* Wrench (angled top-left to bottom-right) */}
    <path d="M5.5 4a3 3 0 0 0 3 4l1.5-1.5-1-1 1-1-1.5-1.5-2 1z" />
    <line x1="8.5" y1="8" x2="15" y2="14.5" />
    <circle cx="17.5" cy="17" r="2.5" />
  </svg>
);

// Custom SVG: Brick wall for Entkernung einzelner Räume (running bond pattern)
const BrickWallIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Outer frame */}
    <rect x="2.5" y="6" width="19" height="12" rx="1" />
    {/* Horizontal divider lines */}
    <line x1="2.5" y1="10" x2="21.5" y2="10" />
    <line x1="2.5" y1="14" x2="21.5" y2="14" />
    {/* Vertical joints Row 1 */}
    <line x1="8.5" y1="6" x2="8.5" y2="10" />
    <line x1="15.5" y1="6" x2="15.5" y2="10" />
    {/* Vertical joints Row 2 (offset) */}
    <line x1="5.5" y1="10" x2="5.5" y2="14" />
    <line x1="12" y1="10" x2="12" y2="14" />
    <line x1="18.5" y1="10" x2="18.5" y2="14" />
    {/* Vertical joints Row 3 */}
    <line x1="8.5" y1="14" x2="8.5" y2="18" />
    <line x1="15.5" y1="14" x2="15.5" y2="18" />
  </svg>
);

interface AdditionalService {
  id: string;
  title: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const additionalServices: AdditionalService[] = [
  {
    id: 'bauschutt',
    title: ['Bauschuttentsorgung'],
    icon: TrashBinIcon,
  },
  {
    id: 'endreinigung',
    title: ['Endreinigung nach', 'Bauarbeiten'],
    icon: Sparkles,
  },
  {
    id: 'bodenbelaege',
    title: ['Bodenbeläge', 'entfernen'],
    icon: Layers,
  },
  {
    id: 'tapeten',
    title: ['Tapeten abreißen'],
    icon: PaintRoller,
  },
  {
    id: 'sperrmuell',
    title: ['Sperrmüllabholung'],
    icon: Truck,
  },
  {
    id: 'reparaturen',
    title: ['Kleinere', 'Reparaturarbeiten'],
    icon: ToolsIcon,
  },
  {
    id: 'transport',
    title: ['Transport und', 'Abtransport von', 'Materialien'],
    icon: Package,
  },
  {
    id: 'entkernung',
    title: ['Entkernung', 'einzelner Räume'],
    icon: BrickWallIcon,
  },
];

export interface AdditionalServicesSectionProps {
  bgColor?: string;
}

export const AdditionalServicesSection: React.FC<AdditionalServicesSectionProps> = ({
  bgColor = 'bg-[#F5F7FC]',
}) => {
  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="zusatzleistungen"
      className={`relative w-full ${bgColor} text-slate-900 py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden scroll-mt-16 border-t border-slate-200/60`}
      aria-labelledby="additional-services-heading"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 text-left">
            {/* Small Introductory Label with Red Bar */}
            <div className="flex items-center space-x-3 mb-5">
              <span
                className="w-7 sm:w-8 h-[3px] bg-[#DE1110] rounded-full inline-block flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.18em] text-[#021861] uppercase">
                ZUSÄTZLICHE LEISTUNGEN
              </span>
            </div>

            {/* Main Headline with Red Period */}
            <h2
              id="additional-services-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#021861] tracking-[-0.035em] leading-[1.08] mb-6"
            >
              Wir bieten noch
              <br />
              mehr an<span className="text-[#DE1110]">.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal mb-8 max-w-md">
              Neben unseren Hauptleistungen unterstützen wir Sie mit weiteren,
              ergänzenden Services rund um Ihr Bau- oder Renovierungsprojekt –{' '}
              zuverlässig, flexibel und termingerecht.
            </p>

            {/* CTA Text Link with Red Underline Accent */}
            <div className="pt-1">
              <button
                type="button"
                onClick={scrollToContact}
                className="group inline-flex flex-col text-left cursor-pointer"
              >
                <div className="flex items-center space-x-2 text-[#DE1110] text-[15px] sm:text-[16px] font-bold group-hover:text-[#c20e0d] transition-colors duration-200">
                  <span>Alle Leistungen entdecken</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
                </div>
                {/* Red Underline Accent */}
                <span
                  className="w-20 sm:w-24 h-[2.5px] bg-[#DE1110] rounded-full mt-1.5 transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 4-ROW X 2-COLUMN GRID ================= */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                const isLeftCol = index % 2 === 0;
                const rowIndex = Math.floor(index / 2);
                const isLastRow = rowIndex === 3;

                return (
                  <div
                    key={service.id}
                    className={`flex items-center space-x-4 py-5 sm:py-6 px-4 sm:px-6 lg:px-8 transition-colors duration-200 hover:bg-slate-50/70 group ${isLeftCol ? 'sm:border-r sm:border-slate-200/90' : ''
                      } ${!isLastRow ? 'border-b border-slate-200/90' : index !== 7 ? 'border-b sm:border-b-0 border-slate-200/90' : ''
                      }`}
                  >
                    {/* Icon in Navy (#021861) */}
                    <div className="text-[#021861] flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                      <Icon className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.8]" />
                    </div>

                    {/* Text in Navy (#021861) */}
                    <div className="flex flex-col text-left">
                      {service.title.map((line, i) => (
                        <span
                          key={i}
                          className="text-[15px] sm:text-[16px] lg:text-[16.5px] font-bold text-[#021861] leading-[1.28] tracking-[-0.01em]"
                        >
                          {line}
                        </span>
                      ))}
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
