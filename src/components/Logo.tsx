import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light' }) => {
  const logoSrc = variant === 'dark' ? '/paveltus-logo-orig.png' : '/paveltus-logo-white.png';

  return (
    <div
      className={`inline-flex items-center no-underline group select-none ${className}`}
      aria-label="PAVELTUS GmbH Startseite"
    >
      <img
        src={logoSrc}
        alt="Paveltus GmbH"
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        loading="eager"
      />
    </div>
  );
};
