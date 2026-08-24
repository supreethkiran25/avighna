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
    <section id="about" className="py-24 sm:py-32 bg-[#0A0C0E] border-t border-white/[0.08] relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-semibold">
            // Institutional Trust & Accreditations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9F8F5] tracking-tight">
            Why Work With Our Group
          </h2>
          <p className="text-sm sm:text-base text-[#9DA3AF] font-sans font-light leading-relaxed">
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
                className="p-7 rounded-3xl bg-[#0E1116] border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E0581E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase text-[#E5B25D] px-2.5 py-0.5 rounded-full bg-white/[0.03]">
                      {diff.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#F9F8F5] leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-[#F9F8F5]/75 font-sans font-light leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unilever Award Spotlight Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1116] border-2 border-[#C88E3E]/40 relative overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#C88E3E]/40 font-mono text-xs text-[#E5B25D] uppercase tracking-wider font-semibold">
                <Award className="w-4 h-4 text-[#C88E3E]" />
                <span>Premier Vendor Accolade</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5]">
                Recipient of "The Best Vendor" Award Presented by UNILEVER
              </h3>

              <p className="text-xs sm:text-sm text-[#F9F8F5]/80 font-sans font-light leading-relaxed">
                "Quality isn't just a promise – it's our operating foundation. Every product batch delivered across South India meets stringent national and international monographs."
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/40 border border-white/10 text-center space-y-2">
              <span className="font-mono text-[10.5px] uppercase tracking-widest text-[#E5B25D] block">
                // Enterprise Client Trust
              </span>
              <div className="font-serif text-2xl font-bold text-[#F9F8F5]">
                Hindustan Unilever
              </div>
              <p className="text-xs text-[#9DA3AF] font-sans">
                Supplying major industrial food & FMCG manufacturing lines.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Client Portfolio */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-white/[0.08]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-semibold">
              // Institutional Deliveries
            </span>
            <span className="font-mono text-xs text-[#9DA3AF]">
              Regular supply partners across Karnataka & South India
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONAL_CLIENTS.map((client) => (
              <div
                key={client.id}
                className="p-6 rounded-2xl bg-[#0E1116] border border-white/10 space-y-2 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-[#E5B25D] px-2 py-0.5 rounded-full bg-white/[0.03]">
                    {client.highlight}
                  </span>
                  <Building className="w-3.5 h-3.5 text-[#9DA3AF]" />
                </div>

                <h4 className="font-serif text-lg font-bold text-[#F9F8F5]">
                  {client.name}
                </h4>

                <p className="text-xs font-mono text-[#E0581E]">
                  {client.category}
                </p>

                <p className="text-xs text-[#F9F8F5]/70 font-sans font-light pt-1">
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
