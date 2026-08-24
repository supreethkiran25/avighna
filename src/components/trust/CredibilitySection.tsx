import React from 'react';
import { Award, ShieldCheck, Building2, Truck, Clock } from 'lucide-react';
import { INSTITUTIONAL_CLIENTS } from '../../data/trustData';

export const CredibilitySection: React.FC = () => {
  const differentiators = [
    {
      icon: Award,
      title: 'Unilever "Best Vendor" Awardee',
      tag: 'Industry Accolade',
    },
    {
      icon: ShieldCheck,
      title: 'Authorized MNC Representation',
      tag: 'Direct Sourcing',
    },
    {
      icon: Clock,
      title: '12+ Years Track Record',
      tag: 'Operational Maturity',
    },
    {
      icon: Truck,
      title: 'Southern India Distribution Network',
      tag: 'Regional Reach',
    },
  ];

  // Extended client list for seamless infinite marquee loop
  const marqueeClients = [
    ...INSTITUTIONAL_CLIENTS,
    {
      id: 'parle',
      name: 'Parle Products Ltd',
      category: 'Biscuits & Confectionery',
      relationship: 'Raw materials & liquid glucose sourcing',
      highlight: 'FMCG Major',
    },
    {
      id: 'vadilal',
      name: 'Vadilal Industries Ltd',
      category: 'Ice Creams & Dairy',
      relationship: 'Dairy ingredients & cocoa compounds',
      highlight: 'Dairy Leader',
    },
    {
      id: 'britannia',
      name: 'Britannia Industries',
      category: 'Bakery & Dairy',
      relationship: 'Starch derivatives & flavours',
      highlight: 'Bakery Leader',
    },
  ];

  // Duplicate array for seamless infinite scroll
  const duplicatedClients = [...marqueeClients, ...marqueeClients];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
            // Institutional Trust & Accreditations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Work With Our Group
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
            Our multi-firm architecture combines deep technical application formulation with large-scale multinational ingredient distribution and reliable regional logistics.
          </p>
        </div>

        {/* 4 Clean Minimal Differentiator Cards (No paragraph clutter) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#E0581E]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between space-y-6 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E0581E] shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] uppercase text-amber-800 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 font-bold">
                    {diff.tag}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {diff.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Unilever Award Spotlight Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-amber-50/90 border-2 border-amber-300 relative overflow-hidden shadow-md mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300 font-mono text-xs text-amber-800 uppercase tracking-wider font-bold shadow-2xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Premier Vendor Accolade</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
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
              <div className="font-display text-2xl font-extrabold text-slate-900">
                Hindustan Unilever
              </div>
              <p className="text-xs text-slate-600 font-sans">
                Supplying major industrial food & FMCG manufacturing lines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Client Portfolio Marquee Section (Image 2 Reference Style) */}
      <div className="pt-4 pb-2 space-y-8">
        {/* Centered Portfolio Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto px-4">
          <div className="inline-block relative">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Client Portfolio
            </h3>
            <div className="w-16 h-1 bg-[#E0581E] rounded-full mx-auto mt-2" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal">
            Trusted by India's leading enterprises across diverse food, dairy, beverage & FMCG sectors.
          </p>
        </div>

        {/* Smooth Infinite Marquee Track */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-6 px-4">
            {duplicatedClients.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="w-72 sm:w-80 p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#E0581E]/40 space-y-2.5 shadow-sm hover:shadow-md transition-all shrink-0 select-none"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9.5px] uppercase text-amber-800 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 font-bold">
                    {client.highlight}
                  </span>
                  <Building2 className="w-4 h-4 text-slate-400" />
                </div>

                <div>
                  <h4 className="font-display text-base font-bold text-slate-900 line-clamp-1">
                    {client.name}
                  </h4>
                  <p className="text-xs font-mono text-[#E0581E] font-semibold mt-0.5">
                    {client.category}
                  </p>
                </div>

                <p className="text-xs text-slate-600 font-sans line-clamp-2 pt-1 border-t border-slate-100">
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
