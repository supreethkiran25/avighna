import React from 'react';
import { INDUSTRIES_SERVED } from '../../data/industriesData';
import { CompanyId } from '../../types';

interface IndustriesSectionProps {
  onSelectFirm: (firmId: CompanyId) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectFirm,
}) => {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#08090A] border-t border-white/[0.08] relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D] block font-semibold">
            // Cross-Industry Supply Matrix
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9F8F5] tracking-tight">
            Industries & Applications Served
          </h2>
          <p className="text-sm sm:text-base text-[#9DA3AF] font-sans font-light leading-relaxed">
            Our multi-firm network supplies specialized raw materials, functional texturizers, enzyme formulations, and hygiene validation tools across key South Indian manufacturing sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="rounded-3xl bg-[#0E1116] border border-white/10 hover:border-white/20 transition-all duration-300 p-8 flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="space-y-1 pb-4 border-b border-white/[0.06]">
                  <h3 className="font-serif text-2xl font-bold text-[#F9F8F5]">
                    {ind.title}
                  </h3>
                  {ind.kannadaTitle && (
                    <p className="font-kannada text-xs text-[#E5B25D]">
                      {ind.kannadaTitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#F9F8F5]/80 font-sans font-light leading-relaxed">
                  {ind.description}
                </p>

                {/* Key Applications */}
                <div className="space-y-2 pt-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#9DA3AF] block font-semibold">
                    Target Setups:
                  </span>
                  <ul className="space-y-1.5">
                    {ind.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#F9F8F5]/85 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E0581E] mt-1.5 shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Ingredients Supplied */}
                <div className="space-y-2 pt-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5B25D] block font-semibold">
                    Key Raw Materials Supplied:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.keyIngredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[11px] text-[#F9F8F5]/80"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Supplying Entities Footer */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#9DA3AF] block">
                  Supplied Through:
                </span>
                <div className="flex flex-wrap gap-2">
                  {ind.supplyingFirms.map((f, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSelectFirm(f.firmId)}
                      className="px-3 py-1 rounded-full bg-white/[0.04] hover:bg-[#E0581E] text-[#E5B25D] hover:text-[#08090A] border border-white/10 text-xs font-mono transition-colors cursor-pointer"
                    >
                      {f.firmName} →
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
