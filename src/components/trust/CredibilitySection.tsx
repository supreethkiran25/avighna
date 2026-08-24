import React from 'react';
import { Award, ShieldCheck, Building, Truck, Clock } from 'lucide-react';
import { INSTITUTIONAL_CLIENTS } from '../../data/trustData';

export const CredibilitySection: React.FC = () => {
  const differentiators = [
    {
      icon: Award,
      title: 'Unilever "Best Vendor" Awardee',
      description: 'M/s. Ganesh Inc. was honored with "The Best Vendor" award by UNILEVER for exemplary supply consistency, quality deliverance, and competitive institutional pricing.',
      tag: 'Industry Accolade',
    },
    {
      icon: ShieldCheck,
      title: 'Authorized MNC Representation',
      description: 'Direct South India distribution partnerships with Gujarat Ambuja Exports Ltd (GAEL), CHR. HANSEN Denmark, Döehler Germany, and The CAMPCO Ltd.',
      tag: 'Direct Sourcing',
    },
    {
      icon: Clock,
      title: '12+ Years Track Record',
      description: 'Over a decade of continuous operational excellence in supply chain reliability, zero plant stoppage track record, and technical formulation support.',
      tag: 'Operational Maturity',
    },
    {
      icon: Truck,
      title: 'Southern India Distribution Network',
      description: 'Warehouses and fast regional dispatch hubs serving Karnataka (Bengaluru, Hubli, Bagalkot, Mangaluru), Tamil Nadu, Andhra Pradesh, and Telangana.',
      tag: 'Regional Reach',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8FAFC] border-t border-slate-200/80 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
            // Institutional Trust & Accreditations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Why Work With Our Group
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
            Our multi-firm architecture combines deep technical application formulation with large-scale multinational ingredient distribution and reliable regional logistics.
          </p>
        </div>

        {/* 4 Clean Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 space-y-4 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E0581E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase text-amber-800 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/60 font-semibold">
                      {diff.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-sans font-normal leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unilever Award Spotlight Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-amber-50/90 border-2 border-amber-300 relative overflow-hidden shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300 font-mono text-xs text-amber-800 uppercase tracking-wider font-bold shadow-2xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Premier Vendor Accolade</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Recipient of "The Best Vendor" Award Presented by UNILEVER
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 font-sans font-normal leading-relaxed">
                "Quality isn't just a promise – it's our operating foundation. Every product batch delivered across South India meets stringent national and international monographs."
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-amber-200 text-center space-y-2 shadow-sm">
              <span className="font-mono text-[10.5px] uppercase tracking-widest text-amber-800 block font-bold">
                // Enterprise Client Trust
              </span>
              <div className="font-serif text-2xl font-bold text-slate-900">
                Hindustan Unilever
              </div>
              <p className="text-xs text-slate-600 font-sans">
                Supplying major industrial food & FMCG manufacturing lines.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Client Portfolio */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-slate-200">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
              // Institutional Deliveries
            </span>
            <span className="font-mono text-xs text-slate-500">
              Regular supply partners across Karnataka & South India
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONAL_CLIENTS.map((client) => (
              <div
                key={client.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-amber-800 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 font-semibold">
                    {client.highlight}
                  </span>
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <h4 className="font-serif text-lg font-bold text-slate-900">
                  {client.name}
                </h4>

                <p className="text-xs font-mono text-[#E0581E] font-semibold">
                  {client.category}
                </p>

                <p className="text-xs text-slate-600 font-sans font-normal pt-1">
                  {client.relationship}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
