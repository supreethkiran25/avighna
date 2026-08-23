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
    sm: { markSize: 28, textClass: 'text-lg', subClass: 'text-[8.5px]' },
    md: { markSize: 38, textClass: 'text-2xl', subClass: 'text-[10px]' },
    lg: { markSize: 48, textClass: 'text-3xl', subClass: 'text-[12px]' },
  };

  const { markSize, textClass, subClass } = sizeMap[size];

  // The authentic dual-petal fluid organic mark extracted from Avighna's official documentation
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
        <linearGradient id="avighnaOrangeGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#F57E25" />
          <stop offset="60%" stopColor="#E0581E" />
          <stop offset="100%" stopColor="#C94412" />
        </linearGradient>

        {/* Right Golden Amber / Olive Gold Petal Gradient */}
        <linearGradient id="avighnaGoldGrad" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#E5B25D" />
          <stop offset="50%" stopColor="#C88E3E" />
          <stop offset="100%" stopColor="#A66E22" />
        </linearGradient>

        <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#E0581E" floodOpacity="0.25" />
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
        opacity="0.18"
      />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{MarkSvg}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {MarkSvg}

      <div className="flex flex-col justify-center">
        {/* Avighna Wordmark with Distinct High-End Kerning */}
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-serif ${textClass} font-bold tracking-tight transition-colors ${
              isDark ? 'text-[#F9F8F5] group-hover:text-[#E5B25D]' : 'text-[#0A0C0E] group-hover:text-[#E0581E]'
            }`}
          >
            Avighna
          </span>
          <span className="hidden sm:inline-block font-kannada text-[11px] opacity-40 text-[#F9F8F5]">
            ಅವಿಘ್ನ
          </span>
        </div>

        {/* Subtitle / Legal Entity Descriptor */}
        {variant === 'full' && (
          <span
            className={`font-sans ${subClass} font-semibold uppercase tracking-[0.18em] mt-1 leading-none ${
              isDark ? 'text-[#C88E3E]' : 'text-[#8A5A1A]'
            }`}
          >
            Speciality Ingredients Pvt Ltd
          </span>
        )}
      </div>
    </div>
  );
};

export default AvighnaLogo;
