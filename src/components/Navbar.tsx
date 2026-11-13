import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';

export interface NavbarProps {
  activePage?: 'home' | 'kontakt' | 'leistungen' | 'galerie';
}

interface NavItem {
  id: string;
  name: string;
  href: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    activePage === 'kontakt'
      ? 'kontakt'
      : activePage === 'leistungen'
      ? 'leistungen'
      : activePage === 'galerie'
      ? 'galerie'
      : 'home'
  );

  const navItems: NavItem[] =
    activePage === 'galerie'
      ? [
          { id: 'home', name: 'Startseite', href: '/' },
          { id: 'ueber-uns', name: 'Über uns', href: '/#ueber-uns' },
          { id: 'leistungen', name: 'Leistungen', href: '/leistungen' },
          { id: 'galerie', name: 'Galerie', href: '/galerie' },
          { id: 'kontakt', name: 'Kontakt', href: '/kontakt' },
        ]
      : activePage === 'kontakt'
      ? [
          { id: 'home', name: 'Startseite', href: '/' },
          { id: 'ueber-uns', name: 'Über uns', href: '/#ueber-uns' },
          { id: 'leistungen', name: 'Leistungen', href: '/leistungen' },
          { id: 'galerie', name: 'Galerie', href: '/galerie' },
          { id: 'kontakt', name: 'Kontakt', href: '/kontakt' },
        ]
      : activePage === 'leistungen'
      ? [
          { id: 'home', name: 'Startseite', href: '/' },
          { id: 'ueber-uns', name: 'Über uns', href: '/#ueber-uns' },
          { id: 'leistungen', name: 'Leistungen', href: '/leistungen' },
          { id: 'galerie', name: 'Galerie', href: '/galerie' },
          { id: 'kontakt', name: 'Kontakt', href: '/kontakt' },
        ]
      : [
          { id: 'home', name: 'Startseite', href: '#' },
          { id: 'ueber-uns', name: 'Über uns', href: '#ueber-uns' },
          { id: 'leistungen', name: 'Leistungen', href: '/leistungen' },
          { id: 'galerie', name: 'Galerie', href: '/galerie' },
          { id: 'kontakt', name: 'Kontakt', href: '/kontakt' },
        ];

  useEffect(() => {
    if (activePage === 'kontakt') {
      setActiveSection('kontakt');
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    if (activePage === 'leistungen') {
      setActiveSection('leistungen');
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    if (activePage === 'galerie') {
      setActiveSection('galerie');
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const warumWirSection = document.getElementById('warum-wir');
      const servicesSection = document.getElementById('leistungen');
      const aboutSection = document.getElementById('ueber-uns');

      if (warumWirSection && scrollY >= warumWirSection.offsetTop - 240) {
        setActiveSection('warum-wir');
      } else if (servicesSection && scrollY >= servicesSection.offsetTop - 240) {
        setActiveSection('leistungen');
      } else if (aboutSection && scrollY >= aboutSection.offsetTop - 240) {
        setActiveSection('ueber-uns');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    setMobileMenuOpen(false);

    if (item.href.startsWith('/#') && activePage !== 'home') {
      window.location.href = item.href;
      return;
    }

    if (item.id === 'kontakt') {
      if (activePage !== 'kontakt') {
        window.location.href = '/kontakt';
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.id === 'galerie') {
      if (activePage !== 'galerie') {
        window.location.href = '/galerie';
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.id === 'leistungen') {
      if (activePage !== 'leistungen') {
        window.location.href = '/leistungen';
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (activePage !== 'home') {
      if (item.id === 'home') {
        window.location.href = '/';
        return;
      }
      window.location.href = item.href;
      return;
    }

    // On home page:
    if (item.id === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    if (item.id === 'warum-wir') {
      e.preventDefault();
      const target = document.getElementById('warum-wir');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('warum-wir');
        return;
      }
    }

    if (item.id === 'ueber-uns') {
      e.preventDefault();
      const target = document.getElementById('ueber-uns');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('ueber-uns');
        return;
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        {/* Semi-transparent navy background with blur when scrolled */}
        {scrolled && (
          <div
            className="absolute inset-0 bg-[#021861]/95 backdrop-blur-md border-b border-white/10 shadow-lg pointer-events-none"
            aria-hidden="true"
          />
        )}

        <div
          className={`relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between transition-all duration-300 ${
            !scrolled && !mobileMenuOpen ? 'pt-8 pb-4' : 'py-4'
          }`}
        >
          {/* Logo */}
          <a href="/" className="cursor-pointer" aria-label="Paveltus Startseite">
            <Logo imgClassName={scrolled ? 'h-[44px] sm:h-[48px] lg:h-[54px]' : 'h-[48px] sm:h-[56px] lg:h-[66px]'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-7 xl:space-x-8"
            aria-label="Hauptnavigation"
          >
            {navItems.map((item) => {
              const active = item.id === activeSection;

              return (
                <div key={item.id} className="relative py-1">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-[15px] font-medium transition-colors duration-200 tracking-normal ${
                      active ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#DE1110] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Prominent Desktop CTA: Red Phone Pill across all pages */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+493012345678"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.98] text-white text-[14px] font-bold rounded-full shadow-md shadow-[#DE1110]/20 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white" />
              <span>+49 30 12345678</span>
            </a>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="tel:+493012345678"
              className="sm:inline-flex hidden items-center justify-center px-3.5 py-1.5 bg-[#DE1110] hover:bg-[#c20e0d] text-white text-xs font-semibold rounded-full shadow-sm transition-colors cursor-pointer"
            >
              <Phone className="w-3 h-3 fill-white mr-1.5" />
              <span>Anrufen</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DE1110] rounded-md cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40 bg-[#021861] border-t border-white/10 px-6 py-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const active = item.id === activeSection;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`py-3 px-4 rounded-md text-[17px] font-medium tracking-normal transition-colors flex items-center justify-between cursor-pointer ${
                    active
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <div className="flex items-center space-x-3">
                    {active && (
                      <span className="w-1.5 h-4 bg-[#DE1110] rounded-full inline-block" />
                    )}
                    <span>{item.name}</span>
                  </div>
                  {active && (
                    <span className="text-xs uppercase tracking-wider text-[#DE1110] font-bold">
                      Aktiv
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Prominent Mobile CTA Button & Info */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col space-y-4">
            <a
              href="tel:+493012345678"
              className="w-full inline-flex items-center justify-center py-3.5 px-6 bg-[#DE1110] hover:bg-[#c20e0d] active:scale-[0.99] text-white text-[15px] font-semibold rounded-full shadow-sm transition-colors text-center cursor-pointer space-x-2"
            >
              <Phone className="w-4 h-4 fill-white text-white" />
              <span>+49 30 12345678 anrufen</span>
            </a>

            <div className="text-xs text-white/70 space-y-1 text-center">
              <p className="font-semibold text-white/90">PAVELTUS GmbH • Berlin</p>
              <p>Trockenbau • Malerarbeiten • Abriss</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
