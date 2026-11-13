import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { ContactHero } from './ContactHero';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Kontakt – PAVELTUS GmbH Berlin';
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#021861] text-white selection:bg-[#DE1110] selection:text-white overflow-x-hidden">
      <Navbar activePage="kontakt" />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

