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
      setIsScrolled(window.scrollY > 30);

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
      const navOffset = isScrolled ? 72 : 88;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090A]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#08090A]/90 via-[#08090A]/40 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        {/* Official Avighna Logo */}
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#overview');
          }}
          className="group focus:outline-none focus:ring-1 focus:ring-[#E0581E]"
          aria-label="Avighna Speciality Ingredients Home"
        >
          <AvighnaLogo size={isScrolled ? 'sm' : 'md'} theme="dark" variant="full" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary Navigation">
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
                className={`font-sans text-[13px] font-medium tracking-wide transition-all relative py-1 focus:outline-none ${
                  isActive ? 'text-[#F9F8F5] font-semibold' : 'text-[#F9F8F5]/70 hover:text-[#F9F8F5]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#E0581E] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Elements & Direct Contacts */}
        <div className="flex items-center gap-3.5 sm:gap-5">
          {/* Direct Phone Desk */}
          <a
            href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
            className="hidden xl:flex items-center gap-2 font-mono text-xs text-[#F9F8F5]/80 hover:text-[#E0581E] transition-colors py-1.5 px-2.5 border border-white/[0.06] bg-[#0F1216]/60 rounded-none"
            title="Direct Executive Hotline (Ashita)"
          >
            <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
            <span>{COMPANY_PROFILE.phones.primary}</span>
          </a>

          {/* Request Sample / Inquire CTA */}
          <button
            onClick={() => {
              if (onOpenSampleModal) {
                onOpenSampleModal();
              } else {
                handleLinkClick('#contact');
              }
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>Request Samples</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#08090A]" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#F9F8F5] border border-white/10 hover:border-[#E0581E] transition-colors focus:outline-none focus:ring-1 focus:ring-[#E0581E] cursor-pointer"
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
          className="fixed inset-0 top-[60px] sm:top-[70px] bg-[#08090A]/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-between p-6 sm:p-8 border-t border-white/10 overflow-y-auto animate-fadeIn"
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

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-center justify-between py-3.5 px-3 border-b border-white/5 font-serif text-xl sm:text-2xl text-[#F9F8F5] hover:text-[#E0581E] hover:bg-white/[0.02] transition-all rounded"
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
                className="flex items-center justify-center gap-2 py-3 bg-[#0F1216] border border-white/10 text-xs font-mono text-[#F9F8F5] hover:border-[#E0581E]"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>Call Desk</span>
              </a>

              <a
                href={COMPANY_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#0F1216] border border-white/10 text-xs font-mono text-[#25D366] hover:border-[#25D366]"
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
              className="w-full py-3.5 bg-[#E0581E] text-[#08090A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
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
