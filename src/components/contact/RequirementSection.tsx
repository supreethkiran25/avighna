import React, { useState, useEffect } from 'react';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { COMPANY_PROFILE } from '../../data/companyData';
import { CompanyId } from '../../types';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RequirementSectionProps {
  initialFirmId?: CompanyId;
  initialProduct?: string;
}

export const RequirementSection: React.FC<RequirementSectionProps> = ({
  initialFirmId = 'avighna',
  initialProduct = '',
}) => {
  const [selectedFirmId, setSelectedFirmId] = useState<CompanyId>(initialFirmId);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [productRequired, setProductRequired] = useState<string>(initialProduct);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [applicationUseCase, setApplicationUseCase] = useState('');
  const [estimatedQuantity, setEstimatedQuantity] = useState('Trial Sample (Laboratory / Pilot)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update firm when prop changes
  useEffect(() => {
    if (initialFirmId) setSelectedFirmId(initialFirmId);
  }, [initialFirmId]);

  useEffect(() => {
    if (initialProduct) setProductRequired(initialProduct);
  }, [initialProduct]);

  const activeFirm = OPERATING_FIRMS.find((f) => f.id === selectedFirmId) || OPERATING_FIRMS[0];
  const firmCategories = activeFirm.firmCategories.filter((c) => c.id !== 'all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#E0581E', '#E5B25D', '#F9F8F5', '#C88E3E'],
    });

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#08090A] border-t border-white/[0.08] relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-semibold">
            // Commercial & Technical RFQ Desk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9F8F5] tracking-tight">
            Send Product Requirement
          </h2>
          <p className="text-sm sm:text-base text-[#9DA3AF] font-sans font-light leading-relaxed">
            Submit your specific raw material, dosage, or formulation inquiry. Our commercial and technical leads will respond with specifications, sample dispatch details, and competitive pricing within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contacts & Registered Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#E5B25D] uppercase tracking-widest block font-semibold">
                // Direct Executive Contacts
              </span>

              {/* Ashita Card */}
              <div className="p-6 rounded-3xl bg-[#0E1116] border border-white/10 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-[#F9F8F5]">
                    Ashita
                  </h4>
                  <span className="font-mono text-[10px] uppercase text-[#E5B25D] px-2.5 py-0.5 rounded-full bg-white/[0.04]">
                    Operations & Commercial
                  </span>
                </div>
                <div className="space-y-2 font-mono text-xs pt-1">
                  <a
                    href="tel:9483389387"
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#F9F8F5] hover:text-[#E0581E] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                    <span>+91 94833 89387 / +91 70194 77940</span>
                  </a>
                  <a
                    href="mailto:ashita@ganeshinc.org"
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#9DA3AF] hover:text-[#F9F8F5] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#E5B25D]" />
                    <span>ashita@ganeshinc.org</span>
                  </a>
                </div>
              </div>

              {/* Shashidhar Card */}
              <div className="p-6 rounded-3xl bg-[#0E1116] border border-white/10 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-[#F9F8F5]">
                    Shashidhar
                  </h4>
                  <span className="font-mono text-[10px] uppercase text-[#E5B25D] px-2.5 py-0.5 rounded-full bg-white/[0.04]">
                    Technical & Sales Lead
                  </span>
                </div>
                <div className="space-y-2 font-mono text-xs pt-1">
                  <a
                    href="tel:9916917517"
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#F9F8F5] hover:text-[#E0581E] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                    <span>+91 99169 17517 / +91 96867 09673</span>
                  </a>
                  <a
                    href="mailto:ask.avighna@gmail.com"
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#9DA3AF] hover:text-[#F9F8F5] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#E5B25D]" />
                    <span>ask.avighna@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Fast Channel */}
            <a
              href={COMPANY_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0E1116] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] font-mono text-xs flex items-center justify-between transition-all shadow-md block"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span className="font-semibold">Connect on Direct WhatsApp Desk</span>
              </div>
              <span className="text-xs">→</span>
            </a>

            {/* Headquarters Address */}
            <div className="p-6 rounded-3xl bg-[#0E1116] border border-white/10 space-y-3 shadow-xl">
              <span className="font-mono text-xs text-[#E5B25D] uppercase tracking-widest block font-semibold">
                // Corporate Office & Technical Desk
              </span>
              <p className="text-xs text-[#F9F8F5]/85 font-sans leading-relaxed">
                {COMPANY_PROFILE.locations.headquarters.fullAddress}
              </p>
              <p className="font-mono text-[11px] text-[#9DA3AF]">
                Landmark: Near Vajarahalli Metro Station, Kanakapura Road
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[11px] text-[#E0581E]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Plant: Hubli, Karnataka (Oxycurv Chemicals)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smart B2B Requirement Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0E1116] border border-white/10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5]">
                  Requirement Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#9DA3AF] max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <strong className="text-[#F9F8F5]">{fullName}</strong> ({companyName || 'Valued Partner'}). Your requirement for <strong className="text-[#E0581E]">{activeFirm.shortName}</strong> has been logged. Our commercial desk will review and dispatch technical dossiers and quotation within 24 hours.
                </p>
                <div className="pt-4 font-mono text-xs text-[#E5B25D]">
                  Direct Follow-up Desk: {activeFirm.primaryPhone}
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-[#F9F8F5] hover:border-[#E0581E] transition-all cursor-pointer"
                >
                  Send Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="pb-3 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block font-semibold">
                    // Structured B2B Submission
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#F9F8F5] mt-1">
                    Submit Raw Material Specification
                  </h3>
                </div>

                {/* 1. Select Operating Firm (Crucial separation) */}
                <div>
                  <label className="block text-xs font-mono text-[#E5B25D] mb-2 font-semibold">
                    1. Select Target Operating Firm *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {OPERATING_FIRMS.map((firm) => (
                      <button
                        key={firm.id}
                        type="button"
                        onClick={() => {
                          setSelectedFirmId(firm.id);
                          setSelectedCategoryId('all');
                          setProductRequired('');
                        }}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          selectedFirmId === firm.id
                            ? 'bg-[#08090A] border-[#E0581E] text-[#E0581E] shadow-md ring-1 ring-[#E0581E]/40'
                            : 'bg-white/[0.02] border-white/5 text-[#9DA3AF] hover:text-[#F9F8F5] hover:bg-white/[0.04]'
                        }`}
                      >
                        <span className="font-serif text-xs font-bold block">{firm.shortName}</span>
                        <span className="font-mono text-[10px] opacity-75 line-clamp-1">{firm.badge}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Select Product Category & Specific Product */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      2. Product Category ({activeFirm.shortName})
                    </label>
                    <select
                      value={selectedCategoryId}
                      onChange={(e) => setSelectedCategoryId(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                    >
                      <option value="all">All {activeFirm.shortName} Categories</option>
                      {firmCategories.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-[#0E1116]">
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      Target Product / Ingredient Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Xtendra 06, Sorbitol 70%, Cocoa, ATP Swab"
                      value={productRequired}
                      onChange={(e) => setProductRequired(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                {/* 3. Contact Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      Company / Processing Plant Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Premier Dairy & Foods Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@premierfoods.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98450 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                {/* 4. Requirement Volume & Application */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      Estimated Requirement Volume
                    </label>
                    <select
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                    >
                      <option value="Trial Sample (Laboratory / Pilot)">Trial Sample (Laboratory / Pilot)</option>
                      <option value="Initial Commercial Batch (100 kg – 500 kg)">Initial Commercial Batch (100 kg – 500 kg)</option>
                      <option value="Full Industrial Consignment (1 MT – 5 MT)">Full Industrial Consignment (1 MT – 5 MT)</option>
                      <option value="Monthly Scheduled Supply Contract (> 10 MT)">Monthly Supply Contract (&gt; 10 MT)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                      Application / Plant Setup
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 100L continuous fryer, paneer vat"
                      value={applicationUseCase}
                      onChange={(e) => setApplicationUseCase(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9DA3AF] mb-1.5">
                    Specific Technical Details / Monograph Requirement
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any target specifications, DE rating, fat percentage, or delivery timelines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#E0581E]/25 hover:scale-101"
                >
                  <span>Submit Requirement to {activeFirm.shortName}</span>
                  <Send className="w-4 h-4 text-[#08090A]" />
                </button>

                <p className="text-[11px] font-mono text-[#9DA3AF] text-center">
                  Direct dispatch to commercial plants across South India • Full CoA & MSDS provided
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementSection;
