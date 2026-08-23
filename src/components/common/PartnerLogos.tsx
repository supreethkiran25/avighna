import React from 'react';

interface PartnerLogoProps {
  id?: string;
  name: string;
  className?: string;
}

export const PartnerLogoBadge: React.FC<PartnerLogoProps> = ({ name, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#111418] border border-white/[0.08] hover:border-[#C88E3E]/50 transition-all duration-300 group ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#E0581E] group-hover:scale-125 transition-transform" />
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
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div className="flex items-center gap-4 min-w-max">
        {principals.map((principal, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 bg-[#0E1116] border border-white/[0.06] hover:border-[#E0581E]/40 transition-colors"
          >
            <span className="font-mono text-[10px] text-[#C88E3E] uppercase tracking-wider font-semibold">
              {principal.origin}
            </span>
            <span className="text-white/20">|</span>
            <span className="font-sans text-xs text-[#F9F8F5]/80 font-medium">
              {principal.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
