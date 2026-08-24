import React from 'react';
import { Award, ShieldCheck, ArrowRight, Building2, FileText, FlaskConical, Truck } from 'lucide-react';

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
      {/* Refined ambient background glows (Light Theme) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-b from-orange-100/50 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-6 w-72 h-72 bg-orange-100/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-12 right-6 w-72 h-72 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="container-editorial relative z-10">
        <div className="relative">

          {/* Left Floating Cool Accent Cards (Desktop Only) */}
          <div className="hidden xl:flex flex-col gap-5 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto">
            {/* Left Card 1: Unilever Award */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 space-y-1 w-64 hover:-translate-y-1 text-left group">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-800 font-bold block">
                    UNILEVER AWARDEE
                  </span>
                  <h4 className="font-display text-xs font-bold text-slate-900 leading-tight">
                    "The Best Vendor"
                  </h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-sans leading-tight pl-0.5">
                Exemplary supply consistency & quality
              </p>
            </div>

            {/* Left Card 2: Technical R&D */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 space-y-1 w-64 hover:-translate-y-1 text-left group">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E0581E] shrink-0">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#E0581E] font-bold block">
                    TECHNICAL R&D
                  </span>
                  <h4 className="font-display text-xs font-bold text-slate-900 leading-tight">
                    +18% Yield Coagulants
                  </h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-sans leading-tight pl-0.5">
                Bio-formulations & frying antioxidants
              </p>
            </div>
          </div>

          {/* Right Floating Cool Accent Cards (Desktop Only) */}
          <div className="hidden xl:flex flex-col gap-5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto">
            {/* Right Card 1: Direct MNC Representation */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 space-y-1 w-64 hover:-translate-y-1 text-left group">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 font-bold block">
                    DIRECT MNC SOURCING
                  </span>
                  <h4 className="font-display text-xs font-bold text-slate-900 leading-tight">
                    Authorized Representation
                  </h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-sans leading-tight pl-0.5">
                GAEL • Chr. Hansen • Döehler • Campco
              </p>
            </div>

            {/* Right Card 2: South India Logistics */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 space-y-1 w-64 hover:-translate-y-1 text-left group">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-blue-800 font-bold block">
                    REGIONAL LOGISTICS
                  </span>
                  <h4 className="font-display text-xs font-bold text-slate-900 leading-tight">
                    South India Dispatch
                  </h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-sans leading-tight pl-0.5">
                Bangalore HQ & Hubli Plant dispatch
              </p>
            </div>
          </div>

          {/* Centered Main Hero Content */}
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fadeIn">
            
            {/* Group Identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50/90 border border-amber-200 text-xs font-mono text-amber-900 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E0581E] shadow-[0_0_6px_#E0581E]" />
              <span className="uppercase tracking-wider font-bold">Speciality Ingredients Group • South India</span>
            </div>

            {/* Confident, Strong Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Speciality Ingredients & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-800 to-[#E0581E]">
                Industrial Raw Materials.
              </span>
            </h1>

            {/* Concise, Professional Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              A trusted multi-firm distribution and technical formulation group catering to food processors, industrial dairies, beverage bottlers, and pharmaceutical manufacturers across Southern India.
            </p>

            {/* Primary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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

            {/* Centered Credibility Badges */}
            <div className="pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#E0581E] shrink-0" />
                <span className="font-semibold text-slate-800">12+ Years Leadership</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">4 Operating Entities</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
                <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-800">FSSAI & IP/BP Certified</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
