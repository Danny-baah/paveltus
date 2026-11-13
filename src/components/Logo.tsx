import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <a
      href="/"
      className={`inline-flex items-center text-white no-underline group select-none tracking-tight ${className}`}
      aria-label="PAVELTUS GmbH Startseite"
    >
      <div className="relative inline-flex items-baseline">
        {/* The Red Roof Accent over ELT */}
        <span className="font-extrabold tracking-tight text-white text-2xl sm:text-[26px] leading-none uppercase">
          PAV
          <span className="relative inline-block">
            {/* Peaked roof icon with chimney */}
            <svg
              className="absolute -top-[13px] left-1/2 -translate-x-1/2 w-[38px] h-[16px] pointer-events-none drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"
              viewBox="0 0 46 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Chimney on the right slope */}
              <path
                d="M29 11.5V3.5H34V15"
                fill="#DE1110"
              />
              {/* Roof slope stroke */}
              <path
                d="M2 17L22 3.5L42 17"
                stroke="#DE1110"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ELT
          </span>
          US
        </span>
        <span className="font-normal text-white text-base sm:text-[17px] ml-1.5 opacity-90 leading-none">
          GmbH
        </span>
      </div>
    </a>
  );
};
