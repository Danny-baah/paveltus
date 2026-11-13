import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { ServicesHero } from './ServicesHero';
import { ServicesTrockenbau } from './ServicesTrockenbau';
import { ServicesMalerarbeiten } from './ServicesMalerarbeiten';
import { ServicesAbriss } from './ServicesAbriss';
import { AdditionalServicesSection } from './AdditionalServicesSection';
import { CtaBannerSection } from './CtaBannerSection';
import { Footer } from './Footer';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Unsere Leistungen – Trockenbau, Malerarbeiten & Abriss | PAVELTUS GmbH Berlin';
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-slate-900 selection:bg-[#DE1110] selection:text-white overflow-x-hidden">
      {/* Navigation with active state on 'leistungen' */}
      <Navbar activePage="leistungen" />

      {/* Main Page Sequence */}
      <main>
        {/* 1. Services Hero */}
        <ServicesHero />

        {/* 2. Service Section 01 – Trockenbau (Image Left, Text Right) */}
        <ServicesTrockenbau />

        {/* 3. Service Section 02 – Malerarbeiten (Text Left, Image Right) */}
        <ServicesMalerarbeiten />

        {/* 4. Service Section 03 – Abriss & Entrümpelung (Image Left, Text Right) */}
        <ServicesAbriss />

        {/* 5. Additional Services Grid */}
        <AdditionalServicesSection />

        {/* 6. Final CTA Banner Section */}
        <CtaBannerSection />
      </main>

      {/* 7. Website Footer */}
      <Footer />
    </div>
  );
};

