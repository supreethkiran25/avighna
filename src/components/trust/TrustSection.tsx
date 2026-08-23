import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { INSTITUTIONAL_CLIENTS, VERIFIED_REVIEWS } from '../../data/trustData';
import { Award, Star, Building } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="relative py-24 sm:py-32 bg-[#0E1116] border-t border-white/[0.08] overflow-hidden">
      {/* Ambient AI Molecular Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/assets/ai_molecular_backdrop.jpg')` }}
      />

      <div className="container-editorial relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="Reputation & Compliance // Institutional Trust"
          title="Award-Winning Quality. Trusted by Industry Leaders."
          kannadaSubtitle="ಯೂನಿಲಿವರ್ ಬೆಸ್ಟ್ ವೆಂಡರ್ ಪ್ರಶಸ್ತಿ ಮತ್ತು ಪ್ರಮುಖ ಗ್ರಾಹಕರ ಜಾಲ"
          description="Proven delivery track record across South India’s premier food processing, dairy manufacturing, and pharmaceutical conglomerates."
        />

        {/* Major Accolade Spotlight: UNILEVER "The Best Vendor" Award in Curved Glass Showcase */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#070809]/90 border-2 border-[#C88E3E]/60 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
          {/* Subtle Golden Botanical Essence AI Artwork Overlay */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
            style={{ backgroundImage: `url('/assets/ai_ingredient_essence.jpg')` }}
          />

          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C88E3E]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C88E3E]/40 font-mono text-xs text-[#E5B25D] uppercase tracking-wider font-semibold shadow-md">
                <Award className="w-4 h-4 text-[#C88E3E]" />
                <span>Premier Accolade</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9F8F5]">
                Recipient of "The Best Vendor" Award Presented by UNILEVER
              </h3>

              <p className="text-sm sm:text-base text-[#F9F8F5]/80 font-sans font-light leading-relaxed max-w-3xl">
                "At M/s. Ganesh Inc. and Avighna, quality isn't just a promise – it's our foundation. Every product we deliver meets stringent industry standards. Our recognition has been reflected through our quality deliverance along with competent pricing to institutional customers."
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#9DA3AF]">
                <span className="px-3 py-1 rounded-full bg-[#E0581E]/10 border border-[#E0581E]/20 text-[#E0581E] font-semibold">12+ Years Partnership</span>
                <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">Zero Supply Disruption</span>
                <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">FSSAI & Global Monograph Audit Ready</span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center space-y-2 shadow-xl">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#E5B25D] block">
                // Industry Recognition
              </span>
              <div className="font-serif text-3xl font-bold text-[#F9F8F5]">
                Hindustan Unilever
              </div>
              <p className="text-xs text-[#9DA3AF] font-sans">
                Acknowledged for consistency, quality assurance, and supply chain speed across South India.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Clients Roster Grid */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block">
                // Client Portfolio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5] mt-1">
                Institutional Enterprise Clients
              </h3>
            </div>
            <p className="font-mono text-xs text-[#9DA3AF]">
              Regular supply partners across Karnataka & South India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONAL_CLIENTS.map((client) => (
              <div
                key={client.id}
                className="p-6 rounded-3xl bg-[#070809]/80 backdrop-blur-xl border border-white/10 hover:border-[#E0581E]/40 transition-all duration-300 space-y-3 shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] font-mono text-[10px] uppercase text-[#E5B25D] border border-white/5">
                    {client.highlight}
                  </span>
                  <Building className="w-4 h-4 text-[#9DA3AF]" />
                </div>

                <h4 className="font-serif text-xl font-bold text-[#F9F8F5]">
                  {client.name}
                </h4>

                <p className="text-xs font-mono text-[#E0581E]">
                  {client.category}
                </p>

                <p className="text-xs text-[#F9F8F5]/75 font-sans font-light leading-relaxed pt-2 border-t border-white/[0.06]">
                  {client.relationship}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Industrial Client Feedback */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <div className="mb-8">
            <span className="font-mono text-xs text-[#E5B25D] uppercase tracking-widest block">
              // Technical Feedback
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5] mt-1">
              Field Reviews from Plant & Quality Heads
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-7 rounded-3xl bg-[#070809]/80 backdrop-blur-xl border border-white/10 flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#E0581E]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] font-mono text-[10px] text-[#E5B25D] border border-white/5">
                      {rev.highlightTag}
                    </span>
                  </div>

                  <p className="text-sm text-[#F9F8F5]/85 font-sans italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] font-mono text-xs space-y-0.5">
                  <span className="text-[#F9F8F5] font-bold block">{rev.author}</span>
                  <span className="text-[#9DA3AF] text-[11px] block">{rev.roleOrContext}</span>
                  <span className="text-[#E5B25D] text-[10px] block">{rev.organization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
