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
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white text-slate-900 overflow-hidden"
    >
      {/* Subtle, refined background glow */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-6 left-0 w-[350px] h-[350px] bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl space-y-6 animate-fadeIn">
          
          {/* Group Identity Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E0581E] shadow-[0_0_6px_#E0581E]" />
            <span className="uppercase tracking-wider font-bold">Speciality Ingredients Group • South India</span>
          </div>

          {/* Confident, Strong Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Speciality Ingredients & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-800 to-[#E0581E]">
              Industrial Raw Materials.
            </span>
          </h1>

          {/* Concise, Professional Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed max-w-2xl">
            A trusted multi-firm distribution and technical formulation group catering to food processors, industrial dairies, beverage bottlers, and pharmaceutical manufacturers across Southern India.
          </p>

          {/* Primary Action CTAs */}
          <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreCompanies}
              className="px-6 py-3.5 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#E0581E]/20 flex items-center gap-2 cursor-pointer hover:scale-102"
            >
              <span>Explore Our Companies</span>
              <Building2 className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onSendRequirement}
              className="px-6 py-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-[#E0581E] text-slate-800 font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-2xs hover:scale-102"
            >
              <span>Send Requirement</span>
              <ArrowRight className="w-4 h-4 text-[#E0581E]" />
            </button>
          </div>

          {/* Genuine Credibility Bar */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-semibold">Unilever Best Vendor</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E0581E] shrink-0" />
              <span className="font-semibold">12+ Years Leadership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">4 Operating Entities</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-semibold">FSSAI & IP/BP Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
