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
      className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-36 sm:pt-44 pb-16 bg-[#FFFFFF] text-slate-900 overflow-hidden"
    >
      {/* Subtle, refined ambient background */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-orange-100/60 to-amber-50/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-slate-100/80 to-orange-50/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="container-editorial relative z-10 my-auto">
        <div className="max-w-4xl space-y-8 animate-fadeIn">
          
          {/* Subtle Group Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-50/80 border border-amber-200 text-xs font-mono text-amber-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E0581E] shadow-[0_0_8px_#E0581E]" />
            <span className="uppercase tracking-wider font-semibold">Speciality Ingredients Group • South India</span>
          </div>

          {/* Confident, Strong Headline */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Speciality Ingredients & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-800 to-[#E0581E]">
                Industrial Raw Materials.
              </span>
            </h1>
          </div>

          {/* Concise, Professional Value Proposition */}
          <p className="text-base sm:text-xl text-slate-600 font-sans font-normal leading-relaxed max-w-3xl">
            A trusted multi-firm distribution and technical formulation group catering to food processors, industrial dairies, beverage bottlers, and pharmaceutical manufacturers across Southern India.
          </p>

          {/* Primary Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onExploreCompanies}
              className="px-8 py-4 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#E0581E]/25 flex items-center gap-2.5 cursor-pointer hover:scale-102"
            >
              <span>Explore Our Companies</span>
              <Building2 className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onSendRequirement}
              className="px-8 py-4 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-[#E0581E] text-slate-800 font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-sm hover:scale-102"
            >
              <span>Send Requirement</span>
              <ArrowRight className="w-4 h-4 text-[#E0581E]" />
            </button>
          </div>

          {/* Genuine Credibility Bar */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-medium">Unilever Best Vendor</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E0581E] shrink-0" />
              <span className="font-medium">12+ Years Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">4 Operating Entities</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-medium">FSSAI & IP/BP Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
