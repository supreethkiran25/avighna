import React from 'react';
import { Award, ShieldCheck, ArrowRight, Building2, FileText } from 'lucide-react';

interface HeroSectionProps {
  onExploreCompanies: () => void;
  onSendRequirement: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCompanies,
  onSendRequirement,
}) => {
  return (
    <section
      id="overview"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-36 sm:pt-44 pb-16 bg-[#08090A] text-[#F9F8F5] overflow-hidden"
    >
      {/* Subtle, restrained ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E0581E]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#E5B25D]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="container-editorial relative z-10 my-auto">
        <div className="max-w-4xl space-y-8 animate-fadeIn">
          
          {/* Subtle Group Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#E5B25D]">
            <span className="w-2 h-2 rounded-full bg-[#E0581E] shadow-[0_0_8px_#E0581E]" />
            <span className="uppercase tracking-wider font-semibold">Speciality Ingredients Group • South India</span>
          </div>

          {/* Confident, Strong Headline */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F9F8F5] leading-[1.08]">
              Speciality Ingredients & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9F8F5] via-[#E5B25D] to-[#E0581E]">
                Industrial Raw Materials.
              </span>
            </h1>
            <p className="font-kannada text-sm sm:text-base text-[#E5B25D]/80">
              ಅವಿಘ್ನ ಸ್ಪೆಷಾಲಿಟಿ, ಗಣೇಶ್ ಇಂಕ್, ಏಷ್ಯನ್ ಅಪೆಕ್ಸ್ & ಅಥರ್ವ ಅಸೋಸಿಯೇಟ್ಸ್ ಸಮೂಹ
            </p>
          </div>

          {/* Concise, Professional Value Proposition */}
          <p className="text-base sm:text-xl text-[#F9F8F5]/80 font-sans font-light leading-relaxed max-w-3xl">
            A trusted multi-firm distribution and technical formulation group catering to food processors, industrial dairies, beverage bottlers, and pharmaceutical manufacturers across Southern India.
          </p>

          {/* Primary Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onExploreCompanies}
              className="px-8 py-4 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#E0581E]/20 flex items-center gap-2.5 cursor-pointer hover:scale-102"
            >
              <span>Explore Our Companies</span>
              <Building2 className="w-4 h-4 text-[#08090A]" />
            </button>

            <button
              onClick={onSendRequirement}
              className="px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#E5B25D] text-[#F9F8F5] font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2.5 cursor-pointer hover:scale-102"
            >
              <span>Send Requirement</span>
              <ArrowRight className="w-4 h-4 text-[#E5B25D]" />
            </button>
          </div>

          {/* Genuine Credibility Bar */}
          <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#9DA3AF]">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#E5B25D] shrink-0" />
              <span>Unilever Best Vendor Awardee</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E0581E] shrink-0" />
              <span>12+ Years Market Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#34D399] shrink-0" />
              <span>4 Specialized Operating Firms</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#60A5FA] shrink-0" />
              <span>FSSAI & IP/BP Certified Supply</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
