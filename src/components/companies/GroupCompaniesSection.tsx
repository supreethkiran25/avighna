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
    <section id="companies" className="py-24 sm:py-32 bg-[#F8FAFC] border-t border-slate-200/80 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
            // Corporate Structure & Operating Divisions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our 4 Operating Companies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
            Each firm within our group operates as a specialized entity with dedicated sourcing agreements, product categories, and technical focus areas. Select a firm to explore its exclusive product catalogue.
          </p>
        </div>

        {/* 4 Firms Grid — Clean, Uncluttered, Spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {OPERATING_FIRMS.map((firm) => (
            <div
              key={firm.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-[#E0581E]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between space-y-8 group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Top Meta Bar */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-[#E0581E] px-3 py-1 rounded-full bg-orange-50 border border-orange-200">
                    ENTITY {firm.number}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber-800 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 font-semibold">
                    {firm.badge}
                  </span>
                </div>

                {/* Company Logo & Title */}
                <div className="space-y-2">
                  <CompanyLogo companyId={firm.id} size="lg" showText={false} theme="light" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#E0581E] transition-colors mt-3">
                    {firm.name}
                  </h3>
                  {firm.kannadaName && (
                    <p className="font-kannada text-xs text-amber-800 font-medium">
                      {firm.kannadaName}
                    </p>
                  )}
                </div>

                {/* One-Line Description */}
                <p className="text-sm text-slate-600 font-sans font-normal leading-relaxed">
                  {firm.role}
                </p>

                {/* Primary Category Focus Tags */}
                <div className="space-y-2.5 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block font-bold">
                    Core Product Portfolio:
                  </span>
                  <ul className="space-y-2">
                    {firm.primaryCategories.slice(0, 4).map((cat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                        <span className="font-medium">{cat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Explore Catalogue */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">
                  {firm.hasActiveCatalogue ? 'Verified Specifications & CoA' : 'Inquiry & Spot Sourcing'}
                </span>
                
                <button
                  onClick={() => onSelectFirm(firm.id)}
                  className="px-6 py-3 rounded-full bg-slate-50 hover:bg-[#E0581E] text-slate-800 hover:text-white border border-slate-300 hover:border-[#E0581E] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs group-hover:scale-102"
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
