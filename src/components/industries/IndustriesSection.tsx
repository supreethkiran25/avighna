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
    <section id="industries" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
            // Cross-Industry Supply Matrix
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries & Applications Served
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
            Our multi-firm network supplies specialized raw materials, functional texturizers, enzyme formulations, and hygiene validation tools across key South Indian manufacturing sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-all duration-200 p-6 flex flex-col justify-between space-y-5 shadow-2xs hover:shadow-xs"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="pb-3 border-b border-slate-200">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {ind.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                  {ind.description}
                </p>

                {/* Key Applications */}
                <div className="space-y-1.5 pt-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-500 block font-bold">
                    Target Setups:
                  </span>
                  <ul className="space-y-1">
                    {ind.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E0581E] mt-1.5 shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Ingredients Supplied */}
                <div className="space-y-1.5 pt-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber-800 block font-bold">
                    Key Raw Materials:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.keyIngredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-white border border-slate-200 font-mono text-[10.5px] text-slate-800 shadow-2xs font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Supplying Entities Footer */}
              <div className="pt-3 border-t border-slate-200 space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block font-bold">
                  Supplied Through:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ind.supplyingFirms.map((f, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSelectFirm(f.firmId)}
                      className="px-2.5 py-1 rounded-full bg-white hover:bg-[#E0581E] text-slate-800 hover:text-white border border-slate-300 hover:border-[#E0581E] text-[11px] font-mono transition-colors cursor-pointer shadow-2xs font-semibold"
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
