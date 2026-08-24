import React, { useState, useEffect } from 'react';
import { COMPANY_PROFILE } from '../../data/companyData';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { AvighnaLogo } from './AvighnaLogo';
import { CompanyId } from '../../types';
import { Phone, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 15);
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
          const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 py-2.5 sm:py-3 px-3 sm:px-6">
      <div
        className={`max-w-7xl mx-auto rounded-xl sm:rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border border-slate-200 shadow-md'
            : 'bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs'
        }`}
      >
        {/* Brand Identity / Group Logo */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 text-left focus:outline-none cursor-pointer shrink-0"
          aria-label="Avighna Speciality Ingredients Home"
        >
          <AvighnaLogo size="sm" theme="light" variant="full" />
        </button>

        {/* Desktop Primary Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 font-sans text-xs uppercase tracking-wider font-semibold text-slate-600">
          {/* Companies Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setFirmsDropdownOpen(!firmsDropdownOpen)}
              onMouseEnter={() => setFirmsDropdownOpen(true)}
              className={`flex items-center gap-1 py-1 transition-colors hover:text-slate-900 cursor-pointer ${
                currentView === 'firm' || firmsDropdownOpen ? 'text-[#E0581E] font-bold' : ''
              }`}
            >
              <span>Our Companies</span>
              <ChevronDown className="w-3 h-3 transition-transform duration-200" />
            </button>

            {firmsDropdownOpen && (
              <div
                onMouseLeave={() => setFirmsDropdownOpen(false)}
                className="absolute top-full left-0 mt-1.5 w-76 rounded-2xl bg-white border border-slate-200 p-2 shadow-xl space-y-1 animate-fadeIn"
              >
                <div className="px-2.5 py-1 text-[9.5px] font-mono text-amber-800 uppercase tracking-widest border-b border-slate-100 font-bold">
                  4 Operating Entities
                </div>
                {OPERATING_FIRMS.map((firm) => (
                  <button
                    key={firm.id}
                    onClick={() => {
                      onNavigateFirm(firm.id);
                      setFirmsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-xl transition-all flex flex-col cursor-pointer ${
                      currentView === 'firm' && selectedFirmId === firm.id
                        ? 'bg-orange-50 text-[#E0581E] border border-orange-200'
                        : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span className="font-display text-xs font-bold leading-tight">
                      {firm.shortName}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 line-clamp-1 mt-0.5 normal-case">
                      {firm.role}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('industries')}
            className="hover:text-slate-900 transition-colors cursor-pointer py-1"
          >
            Industries
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-slate-900 transition-colors cursor-pointer py-1"
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-slate-900 transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Action Header Desk & Send Requirement Primary CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Direct Phone Hotline */}
          <a
            href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:border-[#E0581E] font-mono text-xs text-slate-700 hover:text-[#E0581E] transition-all"
            title="Direct Executive Hotline (Ashita)"
          >
            <Phone className="w-3 h-3 text-[#E0581E]" />
            <span className="font-semibold">{COMPANY_PROFILE.phones.primary}</span>
          </a>

          {/* Primary CTA: Send Requirement */}
          <button
            onClick={() => onOpenRequirementModal(currentView === 'firm' ? selectedFirmId : undefined)}
            className="px-4 sm:px-5 py-2 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm shadow-[#E0581E]/20 flex items-center gap-1.5 cursor-pointer hover:scale-102"
          >
            <span>Send Requirement</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 hover:border-[#E0581E] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#E0581E]" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-3 top-16 bg-white/98 backdrop-blur-3xl z-40 lg:hidden rounded-2xl p-5 border border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-mono text-xs text-amber-800 uppercase tracking-widest font-bold">
                // Group Navigation
              </span>
              <span className="font-mono text-[11px] text-slate-500">
                4 Separate Entities
              </span>
            </div>

            {/* Operating Companies Mobile Block */}
            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#E0581E] uppercase tracking-wider font-bold">
                Our 4 Operating Companies:
              </span>
              <div className="grid grid-cols-1 gap-1.5 pt-1">
                {OPERATING_FIRMS.map((firm) => (
                  <button
                    key={firm.id}
                    onClick={() => {
                      onNavigateFirm(firm.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      currentView === 'firm' && selectedFirmId === firm.id
                        ? 'bg-orange-50 border-[#E0581E] text-[#E0581E]'
                        : 'bg-slate-50 border-slate-200/80 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <div>
                      <span className="font-display text-sm font-bold block">{firm.shortName}</span>
                      <span className="font-mono text-[10.5px] text-slate-500 line-clamp-1">{firm.role}</span>
                    </div>
                    <span className="font-mono text-xs text-[#E0581E] font-bold">0{firm.number}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* General Section Links */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <button
                onClick={() => handleNavClick('industries')}
                className="w-full text-left py-2.5 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 font-sans text-xs font-semibold text-slate-800 block"
              >
                Industries Served
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-2.5 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 font-sans text-xs font-semibold text-slate-800 block"
              >
                About The Group
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-2.5 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 font-sans text-xs font-semibold text-slate-800 block"
              >
                Contact & Formulation HQ
              </button>
            </div>

            {/* Direct Hotlines & Submission */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
                className="w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>Executive Desk: {COMPANY_PROFILE.phones.primary}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRequirementModal(currentView === 'firm' ? selectedFirmId : undefined);
                }}
                className="w-full py-3 rounded-xl bg-[#E0581E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#E0581E]/30"
              >
                <span>Send Requirement</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
