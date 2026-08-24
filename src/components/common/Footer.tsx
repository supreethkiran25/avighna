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
    <footer className="bg-[#050607] border-t border-white/10 text-[#F9F8F5] pt-20 pb-12 overflow-hidden">
      <div className="container-editorial">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Column 1: Group Identity & Credentials (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <button onClick={onNavigateHome} className="text-left focus:outline-none cursor-pointer">
              <AvighnaLogo size="md" theme="dark" variant="full" />
            </button>

            <p className="text-xs sm:text-sm text-[#9DA3AF] font-sans font-light leading-relaxed max-w-sm pt-2">
              Premier South Indian multi-firm group specializing in technical food formulations, Gujarat Ambuja starch derivatives, CAMPCO cocoa, CHR. HANSEN cultures, and pharmaceutical excipients.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-[#C88E3E]/40 font-mono text-[10.5px] text-[#E5B25D]">
                Unilever "Best Vendor" Awardee
              </span>
              <span className="font-mono text-[11px] text-[#9DA3AF]">
                12+ Years South India
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRequirementModal}
                className="px-5 py-2 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Send Requirement</span>
                <Send className="w-3.5 h-3.5 text-[#08090A]" />
              </button>
            </div>
          </div>

          {/* Column 2: Operating Firms Catalogues (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-semibold">
              // Our Operating Firms
            </span>
            <ul className="space-y-2 text-xs font-sans">
              {OPERATING_FIRMS.map((firm) => (
                <li key={firm.id}>
                  <button
                    onClick={() => onNavigateFirm(firm.id)}
                    className="text-[#F9F8F5]/75 hover:text-[#E0581E] transition-colors text-left flex items-center gap-1.5 cursor-pointer py-0.5"
                  >
                    <span>{firm.shortName}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9DA3AF]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries Served (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D] block font-semibold">
              // Industries
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#F9F8F5]/75">
              {INDUSTRIES_SERVED.map((ind) => (
                <li key={ind.id} className="py-0.5">
                  <span>{ind.title.split(',')[0]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Formulation HQ & Direct Lines (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D] block font-semibold">
              // Corporate Coordinates
            </span>
            
            <p className="text-xs text-[#F9F8F5]/80 leading-relaxed font-sans">
              {COMPANY_PROFILE.locations.headquarters.fullAddress}
            </p>

            <div className="pt-2 space-y-1.5 font-mono text-xs">
              <a
                href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
                className="flex items-center gap-2 text-[#F9F8F5]/90 hover:text-[#E0581E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>Ashita: {COMPANY_PROFILE.phones.primary}</span>
              </a>

              <a
                href={`tel:${COMPANY_PROFILE.phones.secondaryRaw}`}
                className="flex items-center gap-2 text-[#F9F8F5]/90 hover:text-[#E0581E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C88E3E]" />
                <span>Shashidhar: {COMPANY_PROFILE.phones.secondary}</span>
              </a>

              <a
                href={`mailto:${COMPANY_PROFILE.emails.inquiry}`}
                className="flex items-center gap-2 text-[#9DA3AF] hover:text-[#F9F8F5] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#E5B25D]" />
                <span>{COMPANY_PROFILE.emails.inquiry}</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-[#6B7A88] pt-1">
              Plant: Oxycurv Chemicals, Hubli, Karnataka
            </p>
          </div>
        </div>

        {/* Legal & Back-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6B7A88]">
          <div>
            © 2012–2026 {COMPANY_PROFILE.name}. Bengaluru, Karnataka, India. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#E5B25D]/70 text-[11px]">avighnagroups.com • ganeshinc.org</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#F9F8F5]/80 hover:text-[#E0581E] transition-all cursor-pointer"
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
