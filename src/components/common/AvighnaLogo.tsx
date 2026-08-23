import React from 'react';

interface AvighnaLogoProps {
  variant?: 'full' | 'compact' | 'mark';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AvighnaLogo: React.FC<AvighnaLogoProps> = ({
  variant = 'full',
  theme = 'dark',
  className = '',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  
  const sizeMap = {
    sm: { markSize: 26, textClass: 'text-lg', subClass: 'text-[7.5px] tracking-[0.2em]' },
    md: { markSize: 32, textClass: 'text-xl sm:text-2xl', subClass: 'text-[8.5px] tracking-[0.24em]' },
    lg: { markSize: 42, textClass: 'text-2xl sm:text-3xl', subClass: 'text-[10px] tracking-[0.28em]' },
  };

  const { markSize, textClass, subClass } = sizeMap[size];

  // The authentic dual-petal fluid organic mark
  const MarkSvg = (
    <svg
      width={markSize}
      height={markSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Avighna Speciality Ingredients Insignia"
    >
      <defs>
        {/* Left Warm Saffron / Amber Petal Gradient */}
        <linearGradient id="avighnaOrangeGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#FFA24C" />
          <stop offset="50%" stopColor="#F57E25" />
          <stop offset="100%" stopColor="#C94412" />
        </linearGradient>

        {/* Right Golden Amber / Olive Gold Petal Gradient */}
        <linearGradient id="avighnaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE08B" />
          <stop offset="50%" stopColor="#E5B25D" />
          <stop offset="100%" stopColor="#A66E22" />
        </linearGradient>

        <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#E0581E" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Stylized Right Petal (Gold Wing) */}
      <path
        d="M 52 28 C 68 18, 86 32, 84 56 C 82 72, 64 82, 46 84 C 62 76, 70 60, 66 46 C 63 36, 56 30, 52 28 Z"
        fill="url(#avighnaGoldGrad)"
      />

      {/* Stylized Left Petal (Orange Wing - Overlapping & Arched) */}
      <path
        d="M 48 24 C 32 30, 18 48, 22 70 C 26 84, 42 88, 58 84 C 40 84, 30 72, 32 56 C 34 42, 42 32, 48 24 Z"
        fill="url(#avighnaOrangeGrad)"
        filter="url(#subtleGlow)"
      />

      {/* Internal Organic Aperture */}
      <path
        d="M 45 42 C 48 48, 54 58, 52 68 C 46 64, 42 54, 45 42 Z"
        fill="#FFFFFF"
        opacity="0.25"
      />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{MarkSvg}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none shrink-0 ${className}`}>
      {MarkSvg}

      <div className="flex flex-col justify-center">
        {/* Bold & Bossy Clean Wordmark */}
        <span
          style={{ fontFamily: "'Syne', 'Plus Jakarta Sans', sans-serif" }}
          className={`${textClass} font-[900] uppercase tracking-[-0.01em] leading-none transition-colors ${
            isDark
              ? 'text-[#F9F8F5] group-hover:text-[#E5B25D]'
              : 'text-[#070809] group-hover:text-[#E0581E]'
          }`}
        >
          Avighna
        </span>

        {/* Subtitle / Legal Entity Descriptor perfectly aligned beneath */}
        {variant === 'full' && (
          <span
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className={`${subClass} font-bold uppercase mt-0.5 leading-none ${
              isDark
                ? 'text-[#C88E3E] group-hover:text-[#E5B25D]'
                : 'text-[#8A5A1A]'
            }`}
          >
            Speciality Ingredients
          </span>
        )}
      </div>
    </div>
  );
};

export default AvighnaLogo;
