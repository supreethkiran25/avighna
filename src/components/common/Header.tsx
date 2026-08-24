import React, { useState, useEffect } from 'react';
import { COMPANY_PROFILE } from '../../data/companyData';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { AvighnaLogo } from './AvighnaLogo';
import { CompanyId } from '../../types';
import { Phone, ArrowRight, Menu, X, Building2, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'firm';
  selectedFirmId: CompanyId;
  onNavigateHome: () => void;
  onNavigateFirm: (firmId: CompanyId) => void;
  onOpenRequirementModal: (firmId?: CompanyId, productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  selectedFirmId,
  onNavigateHome,
  onNavigateFirm,
  onOpenRequirementModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [firmsDropdownOpen, setFirmsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setFirmsDropdownOpen(false);
    if (currentView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full px-5 sm:px-8 py-3 flex items-center justify-between gap-4 sm:gap-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090A]/95 backdrop-blur-2xl border border-white/10 shadow-2xl'
            : 'bg-[#0E1116]/80 backdrop-blur-xl border border-white/10'
        }`}
      >
        {/* Brand Identity / Group Logo */}
        <button
          onClick={onNavigateHome}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer shrink-0"
          aria-label="Avighna Speciality Ingredients Home"
        >
          <AvighnaLogo size="sm" theme="dark" variant="full" />
        </button>

        {/* Desktop Primary Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans text-xs uppercase tracking-wider font-semibold text-[#F9F8F5]/75">
          {/* Companies Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setFirmsDropdownOpen(!firmsDropdownOpen)}
              onMouseEnter={() => setFirmsDropdownOpen(true)}
              className={`flex items-center gap-1.5 py-1 transition-colors hover:text-[#F9F8F5] cursor-pointer ${
                currentView === 'firm' || firmsDropdownOpen ? 'text-[#E0581E]' : ''
              }`}
            >
              <span>Our Companies</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {firmsDropdownOpen && (
              <div
                onMouseLeave={() => setFirmsDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#0E1116] border border-white/10 p-3 shadow-2xl space-y-1 animate-fadeIn"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono text-[#E5B25D] uppercase tracking-widest border-b border-white/5">
                  4 Operating Entities
                </div>
                {OPERATING_FIRMS.map((firm) => (
                  <button
                    key={firm.id}
                    onClick={() => {
                      onNavigateFirm(firm.id);
                      setFirmsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex flex-col cursor-pointer ${
                      currentView === 'firm' && selectedFirmId === firm.id
                        ? 'bg-[#E0581E]/15 text-[#E0581E] border border-[#E0581E]/30'
                        : 'hover:bg-white/[0.05] text-[#F9F8F5]'
                    }`}
                  >
                    <span className="font-serif text-sm font-bold leading-tight">
                      {firm.shortName}
                    </span>
                    <span className="text-[10.5px] font-mono text-[#9DA3AF] line-clamp-1 mt-0.5 normal-case">
                      {firm.role}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('industries')}
            className="hover:text-[#F9F8F5] transition-colors cursor-pointer py-1"
          >
            Industries
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-[#F9F8F5] transition-colors cursor-pointer py-1"
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-[#F9F8F5] transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Action Header Desk & Send Requirement Primary CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Direct Phone Hotline */}
          <a
            href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#E0581E] font-mono text-xs text-[#F9F8F5]/85 hover:text-[#E0581E] transition-all"
            title="Direct Executive Hotline (Ashita)"
          >
            <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
            <span>{COMPANY_PROFILE.phones.primary}</span>
          </a>

          {/* Primary CTA: Send Requirement */}
          <button
            onClick={() => onOpenRequirementModal(currentView === 'firm' ? selectedFirmId : undefined)}
            className="px-5 py-2.5 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#E0581E]/20 flex items-center gap-2 cursor-pointer hover:scale-102"
          >
            <span>Send Requirement</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#08090A]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/[0.06] text-[#F9F8F5] border border-white/10 hover:border-[#E0581E] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E0581E]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 bg-[#08090A]/98 backdrop-blur-3xl z-40 lg:hidden rounded-3xl p-6 border border-white/15 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-[#E5B25D] uppercase tracking-widest">
                // Group Navigation
              </span>
              <span className="font-mono text-[11px] text-[#9DA3AF]">
                4 Separate Entities
              </span>
            </div>

            {/* Operating Companies Mobile Block */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E0581E] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Our 4 Operating Companies:</span>
              </span>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {OPERATING_FIRMS.map((firm) => (
                  <button
                    key={firm.id}
                    onClick={() => {
                      onNavigateFirm(firm.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      currentView === 'firm' && selectedFirmId === firm.id
                        ? 'bg-[#0E1116] border-[#E0581E] text-[#E0581E]'
                        : 'bg-white/[0.02] border-white/5 text-[#F9F8F5] hover:bg-white/[0.05]'
                    }`}
                  >
                    <div>
                      <span className="font-serif text-base font-bold block">{firm.shortName}</span>
                      <span className="font-mono text-[11px] text-[#9DA3AF] line-clamp-1">{firm.role}</span>
                    </div>
                    <span className="font-mono text-xs text-[#E0581E]">0{firm.number}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* General Section Links */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <button
                onClick={() => handleNavClick('industries')}
                className="w-full text-left py-3 px-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 font-sans text-sm font-semibold text-[#F9F8F5] block"
              >
                Industries Served
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-3 px-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 font-sans text-sm font-semibold text-[#F9F8F5] block"
              >
                About The Group & Credentials
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-3 px-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 font-sans text-sm font-semibold text-[#F9F8F5] block"
              >
                Contact & Formulation HQ
              </button>
            </div>

            {/* Direct Hotlines & Submission */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
                className="w-full py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F9F8F5] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>Call Executive Desk: {COMPANY_PROFILE.phones.primary}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRequirementModal(currentView === 'firm' ? selectedFirmId : undefined);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#E0581E] text-[#08090A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#E0581E]/30"
              >
                <span>Send Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
