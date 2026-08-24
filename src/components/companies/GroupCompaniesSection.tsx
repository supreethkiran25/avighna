import React from 'react';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { CompanyId } from '../../types';
import { CompanyLogo } from '../common/CompanyLogo';
import { ArrowRight } from 'lucide-react';

interface GroupCompaniesSectionProps {
  onSelectFirm: (firmId: CompanyId) => void;
}

export const GroupCompaniesSection: React.FC<GroupCompaniesSectionProps> = ({ onSelectFirm }) => {
  return (
    <section id="companies" className="py-14 sm:py-18 bg-[#F8FAFC] border-t border-slate-200/80 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8 sm:mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
            // Group Operating Structure
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 4 Operating Companies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
            Select a company to open its dedicated profile and explore its exclusive product catalogue.
          </p>
        </div>

        {/* 4 Clean, Compact, Clickable Firm Cards (Reduced content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {OPERATING_FIRMS.map((firm) => (
            <div
              key={firm.id}
              onClick={() => onSelectFirm(firm.id)}
              className="rounded-2xl bg-white border border-slate-200 hover:border-[#E0581E] transition-all duration-200 p-6 flex flex-col justify-between space-y-5 group shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="space-y-3.5">
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <span className="font-mono text-[11px] font-bold text-[#E0581E] px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200">
                    ENTITY {firm.number}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-amber-800 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 font-bold">
                    {firm.badge}
                  </span>
                </div>

                {/* Company Logo & Title */}
                <div className="space-y-1">
                  <CompanyLogo companyId={firm.id} size="md" showText={false} theme="light" />
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#E0581E] transition-colors mt-2">
                    {firm.name}
                  </h3>
                </div>

                {/* One-Line Focus Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                  {firm.role}
                </p>

                {/* Compact Product Tags (Less content / no long bullet list) */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {firm.primaryCategories.slice(0, 3).map((cat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700 font-medium group-hover:border-slate-300"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar: Click to Open Dedicated Catalogue */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 font-medium">
                  {firm.hasActiveCatalogue ? 'Dedicated Catalogue' : 'Direct Sourcing Desk'}
                </span>
                
                <div className="px-4 py-1.5 rounded-full bg-[#E0581E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-2xs group-hover:bg-[#D9480F]">
                  <span>Explore Catalogue</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompaniesSection;
