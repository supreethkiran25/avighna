import React from 'react';
import { VERIFIED_METRICS } from '../../data/companyData';

export const MetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="relative py-24 md:py-32 bg-[#0E1013] border-t border-b border-white/[0.08]">
      <div className="container-editorial">
        {/* Eyebrow */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-[1px] bg-[#C5A059]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
              Verified Institutional Record
            </span>
          </div>
          <span className="font-mono text-xs text-[#F9F8F5]/50">
            Source: avighnagroups.com & Corporate Audits
          </span>
        </div>

        {/* Annual Report Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {VERIFIED_METRICS.map((metric) => (
            <div key={metric.id} className="space-y-3">
              {/* Massive Monolithic Typography */}
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F9F8F5]">
                {metric.value}
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#C5A059]">
                  {metric.label}
                </h3>
                <p className="text-xs text-[#F9F8F5]/60 leading-relaxed">
                  {metric.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Trust Footnote */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#F9F8F5]/50">
          <span>85% of total business volume derived from recurring client partnerships across Karnataka.</span>
          <span className="text-[#C5A059]">Audited Performance Metrics // 2016–2024</span>
        </div>
      </div>
    </section>
  );
};
