import React from 'react';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { CompanyId } from '../../types';
import { CompanyLogo } from '../common/CompanyLogo';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface GroupCompaniesSectionProps {
  onSelectFirm: (firmId: CompanyId) => void;
}

export const GroupCompaniesSection: React.FC<GroupCompaniesSectionProps> = ({ onSelectFirm }) => {
  return (
    <section id="companies" className="py-24 sm:py-32 bg-[#0A0C0E] border-t border-white/[0.08] relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-semibold">
            // Corporate Structure & Operating Divisions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9F8F5] tracking-tight">
            Our 4 Operating Companies
          </h2>
          <p className="text-sm sm:text-base text-[#9DA3AF] font-sans font-light leading-relaxed">
            Each firm within our group operates as a specialized entity with dedicated sourcing agreements, product categories, and technical focus areas. Select a firm to explore its exclusive product catalogue.
          </p>
        </div>

        {/* 4 Firms Grid — Clean, Uncluttered, Spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {OPERATING_FIRMS.map((firm) => (
            <div
              key={firm.id}
              className="rounded-3xl bg-[#0E1116] border border-white/10 hover:border-[#E0581E]/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between space-y-8 group shadow-xl hover:-translate-y-1"
            >
              {/* Top Meta Bar */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-xs font-bold text-[#E0581E] px-3 py-1 rounded-full bg-[#E0581E]/10 border border-[#E0581E]/20">
                    ENTITY {firm.number}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#E5B25D] px-3 py-1 rounded-full bg-white/[0.04] border border-white/5">
                    {firm.badge}
                  </span>
                </div>

                {/* Company Logo & Title */}
                <div className="space-y-2">
                  <CompanyLogo companyId={firm.id} size="lg" showText={false} />
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5] group-hover:text-[#E5B25D] transition-colors mt-3">
                    {firm.name}
                  </h3>
                  {firm.kannadaName && (
                    <p className="font-kannada text-xs text-[#E5B25D]">
                      {firm.kannadaName}
                    </p>
                  )}
                </div>

                {/* One-Line Description */}
                <p className="text-sm text-[#F9F8F5]/80 font-sans font-light leading-relaxed">
                  {firm.role}
                </p>

                {/* Primary Category Focus Tags */}
                <div className="space-y-2.5 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#9DA3AF] block font-semibold">
                    Core Product Portfolio:
                  </span>
                  <ul className="space-y-2">
                    {firm.primaryCategories.slice(0, 4).map((cat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F9F8F5]/85 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                        <span>{cat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Explore Catalogue */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-[#9DA3AF]">
                  {firm.hasActiveCatalogue ? 'Verified Specifications & CoA' : 'Inquiry & Spot Sourcing'}
                </span>
                
                <button
                  onClick={() => onSelectFirm(firm.id)}
                  className="px-6 py-3 rounded-full bg-white/[0.04] hover:bg-[#E0581E] text-[#F9F8F5] hover:text-[#08090A] border border-white/15 hover:border-[#E0581E] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md group-hover:scale-102"
                >
                  <span>Explore Catalogue</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompaniesSection;
