import React from 'react';
import { CompanyId } from '../../types';
import { AvighnaLogo } from './AvighnaLogo';

interface CompanyLogoProps {
  companyId: CompanyId | 'all';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  companyId,
  size = 'md',
  showText = true,
  className = '',
}) => {
  if (companyId === 'avighna') {
    return (
      <AvighnaLogo
        size={size}
        variant={showText ? 'full' : 'mark'}
        theme="dark"
        className={className}
      />
    );
  }

  if (companyId === 'ganesh-inc') {
    const heightMap = { sm: 'h-6', md: 'h-8', lg: 'h-10' };
    return (
      <div className={`inline-flex items-center gap-2.5 select-none shrink-0 ${className}`}>
        <div className="px-2.5 py-1 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
          <img
            src="/assets/extracted/GANESH_INC_PRODUCTS_pdf_img_0.jpg"
            alt="M/s. GANESH INC. Logo"
            className={`${heightMap[size]} object-contain brightness-110 contrast-125 filter invert`}
            onError={(e) => {
              // Fallback to stylized text if image load error
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        {showText && (
          <div className="flex flex-col justify-center">
            <span className="font-serif font-black uppercase text-base sm:text-lg tracking-wider text-[#F9F8F5] leading-none">
              GANESH INC.
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#E5B25D] mt-0.5 leading-none">
              Institutional Sourcing
            </span>
          </div>
        )}
      </div>
    );
  }

  if (companyId === 'asian-apex') {
    const sizeMap = { sm: 'w-7 h-7', md: 'w-9 h-9', lg: 'w-11 h-11' };
    return (
      <div className={`inline-flex items-center gap-2.5 select-none shrink-0 ${className}`}>
        <div className={`${sizeMap[size]} rounded-xl overflow-hidden bg-[#FAF6EE] p-0.5 border border-white/10 flex items-center justify-center shrink-0`}>
          <img
            src="/assets/extracted/Asian_Apex_pdf_img_0.jpg"
            alt="Asian Apex & Co. Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {showText && (
          <div className="flex flex-col justify-center">
            <span className="font-serif font-bold uppercase text-base sm:text-lg tracking-wider text-[#F9F8F5] leading-none">
              ASIAN APEX
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#60A5FA] mt-0.5 leading-none">
              Hygiene & Pharma
            </span>
          </div>
        )}
      </div>
    );
  }

  if (companyId === 'atharva-associates') {
    const sizeMap = { sm: 'w-7 h-7', md: 'w-9 h-9', lg: 'w-11 h-11' };
    return (
      <div className={`inline-flex items-center gap-2.5 select-none shrink-0 ${className}`}>
        {/* Geometric Monogram Emblem for Atharva Associates */}
        <div className={`${sizeMap[size]} rounded-xl bg-gradient-to-br from-[#10B981]/20 via-[#059669]/30 to-[#047857]/40 border border-[#10B981]/40 flex items-center justify-center shrink-0 shadow-sm`}>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="w-5 h-5 text-[#34D399]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L32 30H24L20 22L16 30H8L20 6Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            <path
              d="M14 24H26"
              stroke="#FDE08B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {showText && (
          <div className="flex flex-col justify-center">
            <span className="font-serif font-bold uppercase text-base sm:text-lg tracking-wider text-[#F9F8F5] leading-none">
              ATHARVA
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#34D399] mt-0.5 leading-none">
              Associates & Trading
            </span>
          </div>
        )}
      </div>
    );
  }

  // All Companies / Group Icon
  return (
    <div className={`inline-flex items-center gap-2 select-none shrink-0 ${className}`}>
      <div className="w-8 h-8 rounded-xl bg-[#E0581E]/15 border border-[#E0581E]/30 flex items-center justify-center text-[#E0581E] font-mono text-xs font-bold">
        4F
      </div>
      {showText && (
        <span className="font-serif font-bold text-base text-[#F9F8F5]">
          Group Portfolio
        </span>
      )}
    </div>
  );
};

export default CompanyLogo;
