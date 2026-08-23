import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { AVIGHNA_ECOSYSTEM, GLOBAL_PRINCIPALS } from '../../data/ecosystemData';
import { ArrowUpRight, Phone } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const [activeDivisionId, setActiveDivisionId] = useState<string>(AVIGHNA_ECOSYSTEM[0].id);

  const activeDivision =
    AVIGHNA_ECOSYSTEM.find((d) => d.id === activeDivisionId) || AVIGHNA_ECOSYSTEM[0];

  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-[#08090A] border-t border-white/[0.08]">
      <div className="container-editorial">
        {/* Section Header */}
        <SectionHeader
          label="Corporate Architecture // Group Ecosystem"
          title="One Standard. Three Specialized Entities."
          kannadaSubtitle="ಅವಿಘ್ನ ಸ್ಪೆಷಾಲಿಟಿ, ಗಣೇಶ್ ಇಂಕ್ ಮತ್ತು ಏಷ್ಯನ್ ಅಪೆಕ್ಸ್ ಸಹಯೋಗ"
          description="A unified distribution and technical formulation network catering to food processors, industrial dairies, beverage bottlers, and pharmaceutical plants across Southern India."
        />

        {/* Operating Entities Interactive Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Entity Tabs List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {AVIGHNA_ECOSYSTEM.map((division) => {
              const isActive = division.id === activeDivisionId;
              return (
                <div
                  key={division.id}
                  onClick={() => setActiveDivisionId(division.id)}
                  className={`p-6 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F1216] border-[#E0581E] shadow-xl translate-x-1'
                      : 'bg-[#0A0C0E] border-white/[0.06] hover:border-white/20 hover:bg-[#0F1216]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#E0581E] font-bold">
                      {division.number}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#15191F] border border-white/[0.06] font-mono text-[10px] uppercase text-[#E5B25D]">
                      {division.badge}
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-[#F9F8F5]">
                    {division.name}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-[#A3A6AD]">
                    {division.role}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#F9F8F5]/60">
                    <span>Contact: {division.contactPerson}</span>
                    <span className="text-[#E0581E] flex items-center gap-1 font-semibold">
                      Explore Entity <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Entity Dossier & Offerings Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F1216] border border-white/[0.08] p-6 sm:p-8 space-y-6">
            
            {/* Entity Header */}
            <div className="pb-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block">
                  // Operating Entity Dossier
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5] mt-1">
                  {activeDivision.name}
                </h4>
                {activeDivision.kannadaName && (
                  <p className="font-kannada text-xs text-[#C88E3E] mt-0.5">
                    {activeDivision.kannadaName}
                  </p>
                )}
              </div>

              {activeDivision.phone && (
                <a
                  href={`tel:${activeDivision.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#15191F] border border-white/10 text-xs font-mono text-[#F9F8F5] hover:border-[#E0581E] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                  <span>{activeDivision.phone}</span>
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#F9F8F5]/85 font-sans font-light leading-relaxed">
              {activeDivision.description}
            </p>

            {/* Key Offerings List */}
            <div className="space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C88E3E] block font-semibold">
                Core Portfolio & Capabilities:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#F9F8F5]/80">
                {activeDivision.keyOfferings.map((offering, idx) => (
                  <li key={idx} className="p-2.5 bg-[#08090A] border border-white/[0.06] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0581E] shrink-0 mt-1.5" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Principals / Representation */}
            <div className="pt-4 border-t border-white/[0.08] space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A3A6AD] block">
                Authorized Principals & Formulations:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDivision.principalsOrPartners.map((principal, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#15191F] border border-white/10 font-mono text-xs text-[#E5B25D]"
                  >
                    {principal}
                  </span>
                ))}
              </div>
            </div>

            {/* Established Baseline */}
            <div className="p-3 bg-[#08090A] border border-white/[0.06] font-mono text-xs text-[#A3A6AD]">
              {activeDivision.establishedInfo}
            </div>
          </div>
        </div>

        {/* Global Principals & Supply Network Ledger */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block">
                // Representation Agreements
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5] mt-1">
                Global Principals & Manufacturing Network
              </h3>
            </div>
            <p className="font-mono text-xs text-[#A3A6AD]">
              Authorized South India Institutional Supply
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GLOBAL_PRINCIPALS.map((principal) => (
              <div
                key={principal.id}
                className="p-5 bg-[#0F1216] border border-white/[0.08] hover:border-[#C88E3E]/50 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-[#E0581E] font-semibold">
                      {principal.origin}
                    </span>
                    <span className="px-2 py-0.5 bg-[#15191F] font-mono text-[9.5px] uppercase text-[#E5B25D]">
                      {principal.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#F9F8F5] mt-2">
                    {principal.name}
                  </h4>
                  <p className="text-xs font-mono text-[#A3A6AD]">{principal.role}</p>

                  <div className="mt-3 pt-2 border-t border-white/[0.06] space-y-1">
                    <span className="text-[10px] font-mono text-[#F9F8F5]/50 block">Supplied:</span>
                    <p className="text-xs text-[#F9F8F5]/80 font-sans line-clamp-2">
                      {principal.productsSupplied.join(', ')}
                    </p>
                  </div>
                </div>

                {principal.accreditation && (
                  <p className="text-[10.5px] font-mono text-[#C88E3E] pt-2 border-t border-white/[0.04]">
                    {principal.accreditation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
