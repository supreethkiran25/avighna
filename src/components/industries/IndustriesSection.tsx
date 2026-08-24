import React from 'react';
import { INDUSTRIES_SERVED } from '../../data/industriesData';
import { IndustryCategory } from '../../types';
import { ArrowRight, Layers } from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry: (industryId: IndustryCategory) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustry,
}) => {
  return (
    <section id="industries" className="py-14 sm:py-18 bg-white border-t border-slate-200/80 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8 sm:mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
            // Industry Applications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries & Applications Served
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
            Discover functional ingredient formulations, enzyme systems, texturizers, and hygiene tools tailored to your manufacturing vertical.
          </p>
        </div>

        {/* 5 Clean, Compact Industry Discovery Cards (Layer 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              onClick={() => onSelectIndustry(ind.id)}
              className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#E0581E]/50 transition-all duration-200 p-6 flex flex-col justify-between space-y-5 group shadow-2xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="space-y-3.5">
                {/* Industry Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#E0581E] transition-colors">
                    {ind.title}
                  </h3>
                  <Layers className="w-4 h-4 text-slate-400 group-hover:text-[#E0581E] transition-colors shrink-0" />
                </div>

                {/* One Concise Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                  {ind.shortDescription}
                </p>

                {/* 3-5 Application / Function Tags */}
                <div className="pt-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-500 block font-bold mb-1.5">
                    Applications / Functions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 font-mono text-[11px] text-slate-700 font-medium group-hover:border-slate-300 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Explore Solutions */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">
                  {ind.applications.length} Specialized Solutions
                </span>

                <div className="px-3.5 py-1.5 rounded-full bg-white group-hover:bg-[#E0581E] text-slate-800 group-hover:text-white border border-slate-300 group-hover:border-[#E0581E] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1 shadow-2xs">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
