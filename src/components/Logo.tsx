import React from 'react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  imgClassName = '',
  variant = 'light',
}) => {
  const logoSrc = variant === 'dark' ? '/paveltus-logo-orig.png' : '/paveltus-logo-white.png';

  return (
    <div
      className={`inline-flex items-center no-underline group select-none ${className}`}
      aria-label="PAVELTUS GmbH Startseite"
    >
      <img
        src={logoSrc}
        alt="Paveltus GmbH"
        className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
          imgClassName || 'h-[46px] sm:h-[54px] lg:h-[64px]'
        }`}
        loading="eager"
      />
    </div>
  );
};
