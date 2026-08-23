import React from 'react';
import { COMPANY_PROFILE } from '../../data/companyData';
import { AvighnaLogo } from './AvighnaLogo';
import { ArrowUp, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050607] border-t border-white/10 text-[#F9F8F5] pt-20 pb-12 overflow-hidden">
      <div className="container-editorial">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand & Corporate Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <AvighnaLogo size="md" theme="dark" variant="full" />

            <p className="text-xs sm:text-sm text-[#9DA3AF] max-w-sm font-sans font-light leading-relaxed pt-2">
              Premier South Indian manufacturer, supplier, and distributor of specialty food flavours, Gujarat Ambuja starch derivatives, Xtendra 06 frying antioxidants, CHR-HANSEN dairy cultures, and pharmacopoeia excipients.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#C88E3E]/40 font-mono text-[10.5px] text-[#E5B25D]">
                Unilever "Best Vendor" Awardee
              </span>
              <span className="font-mono text-[11px] text-[#9DA3AF]">
                12+ Years Excellence
              </span>
            </div>

            <p className="font-mono text-[11px] text-[#6B7A88]">
              Operating Entities: Avighna Speciality Ingredients • M/s. Ganesh Inc. • Asian Apex & Co.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block">
              // Navigation Index
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#overview" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Overview & Credentials
                </a>
              </li>
              <li>
                <a href="#products" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Specialty Formulations
                </a>
              </li>
              <li>
                <a href="#flyers" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Product Flyers Gallery
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Yield & Savings Simulator
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Group Ecosystem & Principals
                </a>
              </li>
              <li>
                <a href="#trust" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Unilever Award & Clients
                </a>
              </li>
              <li>
                <a href="#downloads" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Technical PDF Downloads
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F9F8F5]/70 hover:text-[#E0581E] transition-colors">
                  Sample & Procurement Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Location & Direct Desks (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D] block">
              // Formulation HQ & Desks
            </span>
            
            <p className="text-xs text-[#F9F8F5]/80 leading-relaxed font-sans">
              {COMPANY_PROFILE.locations.headquarters.fullAddress}
            </p>

            <div className="pt-3 space-y-2 font-mono text-xs">
              <a
                href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
                className="flex items-center gap-2.5 text-[#F9F8F5]/90 hover:text-[#E0581E] transition-colors p-2 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>Ashita: {COMPANY_PROFILE.phones.primary} / +91 70194 77940</span>
              </a>

              <a
                href={`tel:${COMPANY_PROFILE.phones.secondaryRaw}`}
                className="flex items-center gap-2.5 text-[#F9F8F5]/90 hover:text-[#E0581E] transition-colors p-2 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C88E3E]" />
                <span>Shashidhar: {COMPANY_PROFILE.phones.secondary}</span>
              </a>

              <a
                href={`mailto:${COMPANY_PROFILE.emails.inquiry}`}
                className="flex items-center gap-2.5 text-[#9DA3AF] hover:text-[#F9F8F5] transition-colors p-2 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <Mail className="w-3.5 h-3.5 text-[#E5B25D]" />
                <span>{COMPANY_PROFILE.emails.inquiry}</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-[#6B7A88] pt-2">
              Plant: Oxycurv Chemicals, Hubli, Karnataka (Make in India)
            </p>
          </div>
        </div>

        {/* Legal & Back to Top Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6B7A88]">
          <div>
            © 2012–2026 {COMPANY_PROFILE.name}. Bengaluru, Karnataka, India. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#E5B25D]/70 text-[11px]">avighnagroups.com • ganeshinc.org</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#F9F8F5]/80 hover:text-[#E0581E] hover:border-[#E0581E]/50 transition-all cursor-pointer hover:scale-105"
              title="Return to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
