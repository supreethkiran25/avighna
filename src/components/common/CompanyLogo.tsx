import React from 'react';
import { CompanyId } from '../../types';
import { AvighnaLogo } from './AvighnaLogo';

interface CompanyLogoProps {
  companyId: CompanyId | 'all';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  companyId,
  size = 'md',
  showText = true,
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  if (companyId === 'avighna') {
    return (
      <AvighnaLogo
        size={size}
        variant={showText ? 'full' : 'mark'}
        theme={theme}
        className={className}
      />
    );
  }

  if (companyId === 'ganesh-inc') {
    const heightMap = { sm: 'h-6', md: 'h-8', lg: 'h-10' };
    return (
      <div className={`inline-flex items-center gap-2.5 select-none shrink-0 ${className}`}>
        <div className={`px-2.5 py-1 rounded-xl border flex items-center justify-center ${
          isDark ? 'bg-white/[0.06] border-white/10' : 'bg-slate-50 border-slate-200'
        }`}>
          <img
            src="/assets/extracted/GANESH_INC_PRODUCTS_pdf_img_0.jpg"
            alt="M/s. GANESH INC. Logo"
            className={`${heightMap[size]} object-contain ${isDark ? 'brightness-110 contrast-125 filter invert' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        {showText && (
          <div className="flex flex-col justify-center">
            <span className={`font-serif font-black uppercase text-base sm:text-lg tracking-wider leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              GANESH INC.
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#B45309] mt-0.5 leading-none font-semibold">
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
        <div className={`${sizeMap[size]} rounded-xl overflow-hidden bg-[#FAF6EE] p-0.5 border ${
          isDark ? 'border-white/10' : 'border-slate-200'
        } flex items-center justify-center shrink-0`}>
          <img
            src="/assets/extracted/Asian_Apex_pdf_img_0.jpg"
            alt="Asian Apex & Co. Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {showText && (
          <div className="flex flex-col justify-center">
            <span className={`font-serif font-bold uppercase text-base sm:text-lg tracking-wider leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              ASIAN APEX
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-blue-600 mt-0.5 leading-none font-semibold">
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
        <div className={`${sizeMap[size]} rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/30 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-sm`}>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            className="w-5 h-5 text-emerald-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L32 30H24L20 22L16 30H8L20 6Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            <path
              d="M14 24H26"
              stroke="#D97706"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {showText && (
          <div className="flex flex-col justify-center">
            <span className={`font-serif font-bold uppercase text-base sm:text-lg tracking-wider leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              ATHARVA
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-emerald-600 mt-0.5 leading-none font-semibold">
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
      <div className="w-8 h-8 rounded-xl bg-[#E0581E]/10 border border-[#E0581E]/30 flex items-center justify-center text-[#E0581E] font-mono text-xs font-bold">
        4F
      </div>
      {showText && (
        <span className={`font-serif font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Group Portfolio
        </span>
      )}
    </div>
  );
};

export default CompanyLogo;
