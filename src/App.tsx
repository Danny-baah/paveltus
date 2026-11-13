import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AdditionalServicesSection } from './components/AdditionalServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { ServicesPage } from './components/ServicesPage';
import { GalleryPage } from './components/GalleryPage';
import { ImpressumPage } from './components/ImpressumPage';
import { DatenschutzPage } from './components/DatenschutzPage';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#021861] text-white selection:bg-[#DE1110] selection:text-white overflow-x-hidden">
      <Navbar activePage="home" />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <AdditionalServicesSection />
        <WhyUsSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<ServicesPage />} />
        <Route path="/galerie" element={<GalleryPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
