import React from 'react';
import { COMPANY_PROFILE } from '../../data/companyData';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { INDUSTRIES_SERVED } from '../../data/industriesData';
import { AvighnaLogo } from './AvighnaLogo';
import { CompanyId } from '../../types';
import { ArrowUp, Phone, Mail, Send, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateFirm: (firmId: CompanyId) => void;
  onOpenRequirementModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateFirm,
  onOpenRequirementModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F17] border-t border-slate-800 text-[#F9F8F5] pt-14 pb-10 overflow-hidden">
      <div className="container-editorial">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Group Identity & Credentials (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <button onClick={onNavigateHome} className="text-left focus:outline-none cursor-pointer">
              <AvighnaLogo size="sm" theme="dark" variant="full" />
            </button>

            <p className="text-xs text-slate-400 font-sans font-normal leading-relaxed max-w-sm pt-1">
              Premier South Indian multi-firm group specializing in technical food formulations, Gujarat Ambuja starch derivatives, CAMPCO cocoa, CHR. HANSEN cultures, and pharmaceutical excipients.
            </p>

            <div className="pt-0.5 flex flex-wrap items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-amber-500/40 font-mono text-[10px] text-[#E5B25D] font-bold">
                Unilever "Best Vendor" Awardee
              </span>
              <span className="font-mono text-[10.5px] text-slate-400">
                12+ Years South India
              </span>
            </div>

            <div className="pt-1.5">
              <button
                onClick={onOpenRequirementModal}
                className="px-4 py-1.5 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <span>Send Requirement</span>
                <Send className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>

          {/* Column 2: Operating Firms Catalogues (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
              // Our Operating Firms
            </span>
            <ul className="space-y-1.5 text-xs font-sans">
              {OPERATING_FIRMS.map((firm) => (
                <li key={firm.id}>
                  <button
                    onClick={() => onNavigateFirm(firm.id)}
                    className="text-slate-300 hover:text-[#E0581E] transition-colors text-left flex items-center gap-1 cursor-pointer py-0.5"
                  >
                    <span>{firm.shortName}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries Served (2 cols) */}
          <div className="md:col-span-2 space-y-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D] block font-bold">
              // Industries
            </span>
            <ul className="space-y-1.5 text-xs font-sans text-slate-300">
              {INDUSTRIES_SERVED.map((ind) => (
                <li key={ind.id} className="py-0.5">
                  <span>{ind.title.split(',')[0]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Formulation HQ & Direct Lines (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D] block font-bold">
              // Corporate Coordinates
            </span>
            
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {COMPANY_PROFILE.locations.headquarters.fullAddress}
            </p>

            <div className="pt-1 space-y-1 font-mono text-xs">
              <a
                href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
                className="flex items-center gap-1.5 text-slate-200 hover:text-[#E0581E] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#E0581E]" />
                <span>Ashita: {COMPANY_PROFILE.phones.primary}</span>
              </a>

              <a
                href={`tel:${COMPANY_PROFILE.phones.secondaryRaw}`}
                className="flex items-center gap-1.5 text-slate-200 hover:text-[#E0581E] transition-colors"
              >
                <Phone className="w-3 h-3 text-amber-400" />
                <span>Shashidhar: {COMPANY_PROFILE.phones.secondary}</span>
              </a>

              <a
                href={`mailto:${COMPANY_PROFILE.emails.inquiry}`}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3 text-[#E5B25D]" />
                <span>{COMPANY_PROFILE.emails.inquiry}</span>
              </a>
            </div>

            <p className="text-[10.5px] font-mono text-slate-500 pt-0.5">
              Plant: Oxycurv Chemicals, Hubli, Karnataka
            </p>
          </div>
        </div>

        {/* Legal & Back-To-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-slate-500">
          <div>
            © 2012–2026 {COMPANY_PROFILE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <span className="text-amber-400/80 text-[10.5px]">avighnagroups.com • ganeshinc.org</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
