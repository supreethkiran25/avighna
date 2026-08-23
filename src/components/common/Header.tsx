import React, { useState, useEffect } from 'react';
import { COMPANY_PROFILE } from '../../data/companyData';
import { AvighnaLogo } from './AvighnaLogo';
import { Phone, ArrowUpRight, Menu, X, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenSampleModal?: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSampleModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['overview', 'products', 'flyers', 'calculator', 'ecosystem', 'trust', 'downloads', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const sId of sections) {
        const el = document.getElementById(sId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#products' },
    { label: 'Product Flyers', href: '#flyers' },
    { label: 'Yield Calculator', href: '#calculator' },
    { label: 'Group Ecosystem', href: '#ecosystem' },
    { label: 'Accreditation & Trust', href: '#trust' },
    { label: 'Technical Downloads', href: '#downloads' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = isScrolled ? 80 : 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 sm:py-5 px-3 sm:px-6">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl ${
          isScrolled
            ? 'bg-[#070809]/85 backdrop-blur-2xl border border-white/10 ring-1 ring-white/5'
            : 'bg-[#0E1116]/60 backdrop-blur-xl border border-white/10'
        }`}
      >
        {/* Official Avighna Logo */}
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#overview');
          }}
          className="group focus:outline-none shrink-0"
          aria-label="Avighna Speciality Ingredients Home"
        >
          <AvighnaLogo size={isScrolled ? 'sm' : 'md'} theme="dark" variant="full" />
        </a>

        {/* Desktop Floating Pill Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/5" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E0581E] text-[#070809] font-bold shadow-md'
                    : 'text-[#F9F8F5]/75 hover:text-[#F9F8F5] hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Elements & Hotline */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Direct Phone Desk Pill */}
          <a
            href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
            className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#E0581E]/50 font-mono text-xs text-[#F9F8F5]/85 hover:text-[#E0581E] transition-all"
            title="Direct Executive Hotline (Ashita)"
          >
            <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
            <span>{COMPANY_PROFILE.phones.primary}</span>
          </a>

          {/* Request Sample Pill CTA */}
          <button
            onClick={() => {
              if (onOpenSampleModal) {
                onOpenSampleModal();
              } else {
                handleLinkClick('#contact');
              }
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#E0581E] to-[#F57E25] hover:brightness-110 text-[#070809] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#E0581E]/20 cursor-pointer hover:scale-105"
          >
            <span>Request Samples</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#070809]" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/[0.06] text-[#F9F8F5] border border-white/10 hover:border-[#E0581E] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#E0581E]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-3 top-20 bg-[#070809]/98 backdrop-blur-3xl z-40 lg:hidden rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl overflow-y-auto max-h-[85vh] animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-[#C88E3E] uppercase tracking-widest">
                // Navigation Index
              </span>
              <span className="font-mono text-[11px] text-[#F9F8F5]/50">
                12+ Years South India
              </span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-center justify-between py-3 px-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 font-serif text-lg text-[#F9F8F5] hover:text-[#E0581E] transition-all"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#C88E3E]">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Direct Action Strip */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F9F8F5] hover:border-[#E0581E]"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>Call Desk</span>
              </a>

              <a
                href={COMPANY_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#25D366] hover:border-[#25D366]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenSampleModal) onOpenSampleModal();
                else handleLinkClick('#contact');
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#E0581E] to-[#F57E25] text-[#070809] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E0581E]/30"
            >
              <span>Request Product Samples & Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2">
              <p className="font-mono text-[10px] text-[#F9F8F5]/40">
                #1963/B, BCCHS Layout, Kanakapura Rd, Bengaluru 560109
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
