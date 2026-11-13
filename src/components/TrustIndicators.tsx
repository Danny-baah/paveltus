import React from 'react';
import { Calendar, ShieldCheck, Layers, MapPin } from 'lucide-react';

interface TrustItem {
  icon: React.ComponentType<{ className?: string }>;
  line1: string;
  line2: string;
}

const trustItems: TrustItem[] = [
  {
    icon: Calendar,
    line1: 'Über 12 Jahre',
    line2: 'Erfahrung',
  },
  {
    icon: ShieldCheck,
    line1: 'Zuverlässig',
    line2: '& termintreu',
  },
  {
    icon: Layers,
    line1: 'Vielseitige',
    line2: 'Leistungen',
  },
  {
    icon: MapPin,
    line1: 'Aus Berlin',
    line2: 'für Berlin',
  },
];

export const TrustIndicators: React.FC = () => {
  return (
    <div className="w-full animate-hero-indicators">
      {/* Desktop & Tablet layout: horizontal with vertical dividers */}
      <div className="hidden sm:flex items-center justify-between max-w-4xl lg:max-w-5xl">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={index}>
              <div className="flex items-center space-x-3.5 group">
                <div className="text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[13px] lg:text-[14px] font-medium text-white tracking-normal leading-[1.25]">
                    {item.line1}
                  </span>
                  <span className="text-[13px] lg:text-[14px] font-medium text-white/90 tracking-normal leading-[1.25]">
                    {item.line2}
                  </span>
                </div>
              </div>

              {/* Vertical divider between items */}
              {index < trustItems.length - 1 && (
                <div
                  className="h-9 w-[1px] bg-white/20 mx-2 lg:mx-4 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile layout: clean, compact 2x2 grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:hidden">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-2.5 p-2 rounded-md bg-white/[0.04] backdrop-blur-[2px] border border-white/10"
            >
              <div className="text-white flex-shrink-0">
                <Icon className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-white leading-tight">
                  {item.line1}
                </span>
                <span className="text-xs font-medium text-white/85 leading-tight">
                  {item.line2}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

