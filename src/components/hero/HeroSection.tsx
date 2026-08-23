import React from 'react';
import { COMPANY_PROFILE, VERIFIED_METRICS } from '../../data/companyData';
import { MolecularAuraBackground } from '../common/MolecularAuraBackground';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ArrowRight, Award, ShieldCheck, Download, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenSampleModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSampleModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="overview"
      className="relative min-h-[95vh] w-full flex flex-col justify-between pt-32 sm:pt-40 lg:pt-44 pb-10 bg-[#070809] text-[#F9F8F5] overflow-hidden"
    >
      {/* AI Generated Food Science Molecular Aura Background */}
      <MolecularAuraBackground variant="hero" />

      {/* Deep subtle glowing ambient aura mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-5 w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-gradient-to-br from-[#E0581E]/15 via-[#C88E3E]/8 to-transparent rounded-full blur-3xl opacity-70 animate-floatSlow" />
        <div className="absolute bottom-10 left-5 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-[#E5B25D]/10 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      {/* Main Editorial Hero Grid */}
      <div className="container-editorial relative z-10 my-auto py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning & Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-7 animate-fadeIn">
            
            {/* Floating Glass Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-[#E0581E]/40 text-[#E0581E] font-mono text-[11px] uppercase tracking-wider font-semibold shadow-sm hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>12+ Years South India</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-[#C88E3E]/40 text-[#E5B25D] font-mono text-[11px] uppercase tracking-wider font-medium shadow-sm hover:scale-105 transition-transform">
                <Award className="w-3.5 h-3.5 text-[#C88E3E]" />
                <span>Unilever Best Vendor Awardee</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 font-mono text-xs text-[#F9F8F5]/60">
                <MapPin className="w-3 h-3 text-[#C88E3E]" />
                <span>Bengaluru & Hubli</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="font-kannada text-base sm:text-lg text-[#E5B25D] font-medium tracking-wide">
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

            {/* Action CTA Floating Pill Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-5">
              <button
                onClick={() => {
                  if (onOpenSampleModal) onOpenSampleModal();
                  else scrollToSection('contact');
                }}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E0581E] to-[#F57E25] hover:brightness-110 text-[#070809] font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#E0581E]/25 flex items-center gap-2.5 group cursor-pointer hover:scale-105"
              >
                <span>Request Formulation Samples</span>
                <ArrowRight className="w-4 h-4 text-[#070809] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('flyers')}
                className="px-6 py-3.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-[#E5B25D] text-[#F9F8F5] font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer hover:bg-white/[0.08] hover:scale-105"
              >
                <span>View Product Flyers</span>
              </button>

              <button
                onClick={() => scrollToSection('downloads')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs text-[#E5B25D] hover:text-[#F9F8F5] transition-colors cursor-pointer hover:bg-white/[0.03]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Dossier (3.4 MB)</span>
              </button>
            </div>

            {/* Verified Trust Tokens in Flowing Pill Chips */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-[#F9F8F5]/65 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>FSSAI & IP/BP Certified</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                GAEL, Döehler & Chr. Hansen Authorized
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[#E5B25D]">
                15–20% Annual Growth
              </span>
            </div>
          </div>

          {/* Right Column: Floating Curved Glass Showcase Dossier (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0E1116]/80 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] hover:border-[#E0581E]/40 transition-all duration-500 group">
              
              {/* Top Accent Header with Floating Pills */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/[0.08] font-mono text-[11px] text-[#9DA3AF]">
                <span className="px-2.5 py-1 rounded-full bg-[#E0581E]/15 text-[#E0581E] font-bold border border-[#E0581E]/30">
                  FEATURED SPOTLIGHT
                </span>
                <span className="text-[#F9F8F5]/60">Xtendra 06 & Formulations</span>
              </div>

              {/* Primary Visual with Curved Mask */}
              <div
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#070809] border border-white/10 group cursor-pointer shadow-inner"
                onClick={() => scrollToSection('flyers')}
              >
                <img
                  src="/assets/WhatsApp Image 2026-08-22 at 4.11.46 PM.jpeg"
                  alt="Avighna Speciality Ingredients Flavour and Seasoning Solutions"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070809]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between font-mono text-[11px]">
                  <span className="px-3 py-1 rounded-full bg-[#070809]/90 backdrop-blur-md text-[#E5B25D] border border-white/10">
                    Avighna Speciality Ingredients
                  </span>
                  <span className="text-[#F9F8F5]/80">F&B Solutions</span>
                </div>
              </div>

              {/* Secondary Rounded Metric Highlights Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-[#E0581E]/30 transition-colors">
                  <span className="font-mono text-[10px] uppercase text-[#E0581E] block font-semibold">
                    Xtendra 06 Anti-Oxidant
                  </span>
                  <p className="font-display text-xl font-bold text-[#F9F8F5] mt-0.5">
                    <AnimatedCounter value="-5% to -15%" />
                  </p>
                  <p className="text-[11px] text-[#9DA3AF] leading-tight mt-1">
                    Oil absorption reduction in continuous fryers
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-[#C88E3E]/30 transition-colors">
                  <span className="font-mono text-[10px] uppercase text-[#C88E3E] block font-semibold">
                    EZENTIAL 4001 Dairy
                  </span>
                  <p className="font-display text-xl font-bold text-[#F9F8F5] mt-0.5">
                    <AnimatedCounter value="+18% to +20%" />
                  </p>
                  <p className="text-[11px] text-[#9DA3AF] leading-tight mt-1">
                    Higher finished paneer & curd yield
                  </p>
                </div>
              </div>

              {/* Bottom Client Proof Line */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#9DA3AF]">
                <span>Supplying: HUL, MTR, Hatsun, ITC</span>
                <button
                  onClick={() => scrollToSection('trust')}
                  className="text-[#E5B25D] hover:underline cursor-pointer font-medium"
                >
                  View Client Roster →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Ledger Strip with Fluid Rounded Glass Pills */}
      <div className="relative z-10 mt-8">
        <div className="container-editorial">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-[#0E1116]/60 backdrop-blur-xl border border-white/10 shadow-2xl">
            {VERIFIED_METRICS.map((metric) => (
              <div key={metric.id} className="p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#E0581E]/30 transition-all duration-300">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#F9F8F5] tracking-tight">
                  <AnimatedCounter value={metric.value} />
                </div>
                <p className="font-mono text-[10.5px] uppercase tracking-wider text-[#E5B25D] font-semibold mt-1">
                  {metric.label}
                </p>
                <p className="text-xs text-[#9DA3AF] line-clamp-1 mt-0.5">
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
