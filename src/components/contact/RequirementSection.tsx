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
      particleCount: 70,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#E0581E', '#E5B25D', '#F9F8F5'],
    });

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
            // Commercial & Technical RFQ Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Send Product Requirement
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
            Submit your specific raw material, dosage, or formulation inquiry. Our commercial and technical leads will respond with specifications, sample dispatch details, and competitive pricing within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contacts & Registered Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-3">
              <span className="font-mono text-xs text-amber-800 uppercase tracking-widest block font-bold">
                // Direct Executive Contacts
              </span>

              {/* Ashita Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-slate-900">
                    Ashita
                  </h4>
                  <span className="font-mono text-[9.5px] uppercase text-amber-800 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 font-semibold">
                    Operations & Commercial
                  </span>
                </div>
                <div className="space-y-1.5 font-mono text-xs pt-0.5">
                  <a
                    href="tel:9483389387"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-[#E0581E] transition-colors font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                    <span>+91 94833 89387 / +91 70194 77940</span>
                  </a>
                  <a
                    href="mailto:ashita@ganeshinc.org"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>ashita@ganeshinc.org</span>
                  </a>
                </div>
              </div>

              {/* Shashidhar Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-slate-900">
                    Shashidhar
                  </h4>
                  <span className="font-mono text-[9.5px] uppercase text-amber-800 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 font-semibold">
                    Technical & Sales Lead
                  </span>
                </div>
                <div className="space-y-1.5 font-mono text-xs pt-0.5">
                  <a
                    href="tel:9916917517"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-[#E0581E] transition-colors font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                    <span>+91 99169 17517 / +91 96867 09673</span>
                  </a>
                  <a
                    href="mailto:ask.avighna@gmail.com"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
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
              className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-300 hover:border-emerald-500 text-emerald-800 font-mono text-xs flex items-center justify-between transition-all shadow-2xs block font-bold"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Connect on Direct WhatsApp Desk</span>
              </div>
              <span className="text-xs">→</span>
            </a>

            {/* Headquarters Address */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-2xs">
              <span className="font-mono text-xs text-amber-800 uppercase tracking-widest block font-bold">
                // Corporate Office & Technical Desk
              </span>
              <p className="text-xs text-slate-700 font-sans leading-relaxed">
                {COMPANY_PROFILE.locations.headquarters.fullAddress}
              </p>
              <p className="font-mono text-[10.5px] text-slate-500">
                Landmark: Near Vajarahalli Metro Station, Kanakapura Road
              </p>
              <div className="pt-1.5 border-t border-slate-200 flex items-center gap-1.5 font-mono text-[10.5px] text-[#E0581E] font-semibold">
                <MapPin className="w-3 h-3" />
                <span>Plant: Hubli, Karnataka (Oxycurv Chemicals)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smart B2B Requirement Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Requirement Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong> ({companyName || 'Valued Partner'}). Your requirement for <strong className="text-[#E0581E]">{activeFirm.shortName}</strong> has been logged. Our commercial desk will review and dispatch technical dossiers and quotation within 24 hours.
                </p>
                <div className="pt-2 font-mono text-xs text-amber-800 font-semibold">
                  Direct Follow-up Desk: {activeFirm.primaryPhone}
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono text-slate-800 hover:border-[#E0581E] transition-all cursor-pointer font-bold"
                >
                  Send Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-2 border-b border-slate-100">
                  <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block font-bold">
                    // Structured B2B Submission
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">
                    Submit Raw Material Specification
                  </h3>
                </div>

                {/* 1. Select Operating Firm (Crucial separation) */}
                <div>
                  <label className="block text-xs font-mono text-amber-800 mb-1.5 font-bold">
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
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedFirmId === firm.id
                            ? 'bg-orange-50 border-[#E0581E] text-[#E0581E] shadow-2xs ring-1 ring-[#E0581E]/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <span className="font-display text-xs font-bold block">{firm.shortName}</span>
                        <span className="font-mono text-[9.5px] opacity-75 line-clamp-1">{firm.badge}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Select Product Category & Specific Product */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      2. Product Category ({activeFirm.shortName})
                    </label>
                    <select
                      value={selectedCategoryId}
                      onChange={(e) => setSelectedCategoryId(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#E0581E]"
                    >
                      <option value="all">All {activeFirm.shortName} Categories</option>
                      {firmCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      Target Product / Ingredient Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Xtendra 06, Sorbitol 70%, Cocoa, ATP Swab"
                      value={productRequired}
                      onChange={(e) => setProductRequired(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                {/* 3. Contact Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      Company / Processing Plant Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Premier Dairy & Foods Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@premierfoods.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98450 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                {/* 4. Requirement Volume & Application */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      Estimated Requirement Volume
                    </label>
                    <select
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#E0581E]"
                    >
                      <option value="Trial Sample (Laboratory / Pilot)">Trial Sample (Laboratory / Pilot)</option>
                      <option value="Initial Commercial Batch (100 kg – 500 kg)">Initial Commercial Batch (100 kg – 500 kg)</option>
                      <option value="Full Industrial Consignment (1 MT – 5 MT)">Full Industrial Consignment (1 MT – 5 MT)</option>
                      <option value="Monthly Scheduled Supply Contract (> 10 MT)">Monthly Supply Contract (&gt; 10 MT)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                      Application / Plant Setup
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 100L continuous fryer, paneer vat"
                      value={applicationUseCase}
                      onChange={(e) => setApplicationUseCase(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                    Specific Technical Details / Monograph Requirement
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide any target specifications, DE rating, fat percentage, or delivery timelines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#E0581E]/25 hover:scale-101"
                >
                  <span>Submit Requirement to {activeFirm.shortName}</span>
                  <Send className="w-4 h-4 text-white" />
                </button>

                <p className="text-[10.5px] font-mono text-slate-500 text-center">
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
