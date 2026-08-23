import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  kannadaSubtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  lightMode?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  kannadaSubtitle,
  description,
  align = 'left',
  lightMode = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}>
      {/* Editorial Eyebrow */}
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="w-2 h-[1px] bg-[#C5A059]" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
          {label}
        </span>
      </div>

      {/* Main Title with Luxury Serif Typography */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] mb-4 ${
          lightMode ? 'text-[#0A0C0E]' : 'text-[#F9F8F5]'
        }`}
      >
        {title}
      </h2>

      {/* Kannada Subtitle */}
      {kannadaSubtitle && (
        <p
          className={`font-kannada text-sm md:text-base mb-4 tracking-wide ${
            lightMode ? 'text-[#0A0C0E]/70' : 'text-[#C5A059]/90'
          }`}
        >
          {kannadaSubtitle}
        </p>
      )}

      {/* Description Narrative */}
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            lightMode ? 'text-[#0A0C0E]/75' : 'text-[#F9F8F5]/70'
          }`}
        >
          {description}
        </p>
      )}

      {/* Hairline Divider */}
      <div
        className={`mt-6 h-[1px] w-20 ${
          isCenter ? 'mx-auto' : ''
        } ${lightMode ? 'bg-[#0A0C0E]/20' : 'bg-[#C5A059]/40'}`}
      />
    </div>
  );
};
