import React from 'react';
import { COMPANY_PROFILE, VERIFIED_METRICS } from '../../data/companyData';
import { ArrowRight, Award, ShieldCheck, Download, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenSampleModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSampleModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] w-full flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-8 bg-[#08090A] text-[#F9F8F5] overflow-hidden"
    >
      {/* Cinematic Background Atmosphere with Authentic Ingredient Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep subtle gradient mesh */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#E0581E]/12 via-[#C88E3E]/6 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#15191F]/90 to-transparent rounded-full blur-2xl opacity-40" />

        {/* 1px Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Main Editorial Hero Grid */}
      <div className="container-editorial relative z-10 my-auto py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning & Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow & Unilever Award Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0F1216] border border-[#E0581E]/40 text-[#E0581E] font-mono text-[11px] uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>12+ Years South India</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0F1216] border border-[#C88E3E]/40 text-[#E5B25D] font-mono text-[11px] uppercase tracking-wider font-medium">
                <Award className="w-3.5 h-3.5 text-[#C88E3E]" />
                <span>Unilever Best Vendor Awardee</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-[#F9F8F5]/50">
                <MapPin className="w-3 h-3 text-[#C88E3E]" />
                <span>Bengaluru & Hubli</span>
              </div>
            </div>

            {/* Main Headline from Authentic Avighna Documentation */}
            <div className="space-y-2">
              <p className="font-kannada text-base sm:text-lg text-[#C88E3E] font-medium tracking-wide">
                {COMPANY_PROFILE.kannadaName}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#F9F8F5] leading-[1.08]">
                Create Better Taste. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9F8F5] via-[#E5B25D] to-[#E0581E]">
                  Build Stronger Products.
                </span>
              </h1>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#F9F8F5]/80 font-sans font-light leading-relaxed max-w-2xl">
              South India’s trusted single-source manufacturer and distributor of specialty food flavours, Gujarat Ambuja starch derivatives, Xtendra 06 frying antioxidants, CHR-HANSEN dairy cultures, and pharmaceutical excipients.
            </p>

            {/* Action CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={() => {
                  if (onOpenSampleModal) onOpenSampleModal();
                  else scrollToSection('contact');
                }}
                className="px-6 py-3.5 bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Request Formulation Samples</span>
                <ArrowRight className="w-4 h-4 text-[#08090A] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('products')}
                className="px-5 py-3.5 bg-[#0F1216] border border-white/15 hover:border-[#C88E3E] text-[#F9F8F5] font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Solutions</span>
              </button>

              <button
                onClick={() => scrollToSection('downloads')}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C88E3E] hover:text-[#F9F8F5] transition-colors py-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Catalog (3.4 MB)</span>
              </button>
            </div>

            {/* Verified Trust Tokens */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#F9F8F5]/60 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E0581E]" />
                <span>FSSAI & IP/BP Certified</span>
              </span>
              <span className="text-white/20">•</span>
              <span>GAEL, Döehler & Chr. Hansen Authorized</span>
              <span className="text-white/20">•</span>
              <span>15–20% Annual Growth</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Dossier Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/10 bg-[#0F1216] p-4 sm:p-5 shadow-2xl">
              
              {/* Top Accent Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/[0.08] font-mono text-[11px] text-[#A3A6AD]">
                <span className="text-[#E0581E] font-semibold">// PRODUCT SPOTLIGHT</span>
                <span>Xtendra 06 & Formulations</span>
              </div>

              {/* Primary Visual with Authentic Flyer Graphic */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#08090A] border border-white/[0.06] group">
                <img
                  src="/assets/WhatsApp Image 2026-08-22 at 4.11.46 PM.jpeg"
                  alt="Avighna Speciality Ingredients Flavour and Seasoning Solutions"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between font-mono text-[11px]">
                  <span className="px-2.5 py-1 bg-[#08090A]/90 text-[#E5B25D] border border-white/10">
                    Avighna Speciality Ingredients
                  </span>
                  <span className="text-[#F9F8F5]/70">F&B Solutions</span>
                </div>
              </div>

              {/* Secondary Metric Highlights Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#15191F] border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase text-[#E0581E] block font-semibold">
                    Xtendra 06 Anti-Oxidant
                  </span>
                  <p className="font-display text-xl font-bold text-[#F9F8F5] mt-0.5">
                    -5% to -15%
                  </p>
                  <p className="text-[11px] text-[#A3A6AD] leading-tight mt-1">
                    Oil absorption reduction in commercial frying
                  </p>
                </div>

                <div className="p-3 bg-[#15191F] border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase text-[#C88E3E] block font-semibold">
                    EZENTIAL 4001 Dairy
                  </span>
                  <p className="font-display text-xl font-bold text-[#F9F8F5] mt-0.5">
                    +18% to +20%
                  </p>
                  <p className="text-[11px] text-[#A3A6AD] leading-tight mt-1">
                    Higher finished paneer & curd yield
                  </p>
                </div>
              </div>

              {/* Bottom Client Proof Line */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A3A6AD]">
                <span>Supplying: HUL, MTR, Hatsun, ITC</span>
                <button
                  onClick={() => scrollToSection('trust')}
                  className="text-[#E5B25D] hover:underline cursor-pointer"
                >
                  View Client Roster →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Ledger Strip */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#0A0C0E]/95 backdrop-blur-md mt-6">
        <div className="container-editorial py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {VERIFIED_METRICS.map((metric) => (
              <div key={metric.id} className="space-y-1">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#F9F8F5] tracking-tight">
                  {metric.value}
                </div>
                <p className="font-mono text-[10.5px] uppercase tracking-wider text-[#C88E3E] font-semibold">
                  {metric.label}
                </p>
                <p className="text-xs text-[#A3A6AD] line-clamp-1">
                  {metric.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
