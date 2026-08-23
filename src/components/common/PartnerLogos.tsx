import React from 'react';

interface PartnerLogoProps {
  id?: string;
  name: string;
  className?: string;
}

export const PartnerLogoBadge: React.FC<PartnerLogoProps> = ({ name, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#E5B25D]/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-sm hover:scale-105 ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#E0581E] group-hover:scale-125 transition-transform shadow-[0_0_8px_#E0581E]" />
      <span className="font-sans text-xs font-semibold text-[#F9F8F5]/85 group-hover:text-[#F9F8F5] tracking-wide">
        {name}
      </span>
    </div>
  );
};

export const PartnerLogosStrip: React.FC = () => {
  const principals = [
    { name: 'Gujarat Ambuja Exports', origin: 'GAEL' },
    { name: 'Döehler Group', origin: 'Germany' },
    { name: 'CHR. Hansen', origin: 'Denmark' },
    { name: 'The CAMPCO Ltd', origin: 'Karnataka' },
    { name: 'Hygiena International', origin: 'United Kingdom' },
    { name: 'Oxycurv Chemicals', origin: 'Make in India' },
    { name: 'Mane Kancor', origin: 'Natural Extracts' },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-3 sm:py-4">
      <div className="flex items-center gap-3 sm:gap-4 min-w-max">
        {principals.map((principal, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-[#E0581E]/50 hover:bg-white/[0.06] transition-all duration-300 group shadow-sm hover:-translate-y-0.5"
          >
            <span className="font-mono text-[10px] text-[#E5B25D] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white/[0.05]">
              {principal.origin}
            </span>
            <span className="font-sans text-xs text-[#F9F8F5]/85 font-medium group-hover:text-[#F9F8F5]">
              {principal.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
