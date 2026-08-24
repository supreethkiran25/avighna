import React, { useState, useEffect } from 'react';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { COMPANY_PROFILE } from '../../data/companyData';
import { CompanyId } from '../../types';
import { Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';
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
  const [productRequired, setProductRequired] = useState<string>(initialProduct);
  const [applicationUseCase, setApplicationUseCase] = useState('');
  const [estimatedQuantity, setEstimatedQuantity] = useState('Trial Sample');
  const [message, setMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialFirmId) setSelectedFirmId(initialFirmId);
  }, [initialFirmId]);

  useEffect(() => {
    if (initialProduct) setProductRequired(initialProduct);
  }, [initialProduct]);

  const activeFirm = OPERATING_FIRMS.find((f) => f.id === selectedFirmId) || OPERATING_FIRMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !productRequired) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#E0581E', '#E5B25D', '#0F172A'],
    });

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-18 bg-white border-t border-slate-200/80 relative">
      <div className="container-editorial">
        {/* Simplified Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Submit Your Requirement
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal">
            Tell us what you need and we'll connect you with the right team.
          </p>
        </div>

        {/* Clean, Full-Width Centered Form */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Requirement Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. We have routed your requirement for <strong className="text-[#E0581E]">{productRequired}</strong> to the <strong className="text-slate-900">{activeFirm.shortName}</strong> team. We will be in touch within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setProductRequired('');
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-800 hover:border-[#E0581E] transition-all cursor-pointer"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 1. Who Should Handle This? */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                    Who should handle this?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {OPERATING_FIRMS.map((firm) => (
                      <button
                        key={firm.id}
                        type="button"
                        onClick={() => setSelectedFirmId(firm.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedFirmId === firm.id
                            ? 'bg-orange-50 border-[#E0581E] text-[#E0581E] font-bold shadow-2xs ring-1 ring-[#E0581E]/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium'
                        }`}
                      >
                        <span className="font-display text-xs block leading-tight">{firm.shortName}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] font-sans text-slate-500">
                    Not sure which company? We'll route your requirement to the right team.
                  </p>
                </div>

                {/* 2. What Do You Need? */}
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                        Product / Ingredient *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Xtendra 06, Cocoa, Sorbitol"
                        value={productRequired}
                        onChange={(e) => setProductRequired(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                        Application / Use
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Paneer, Chips, Beverage"
                        value={applicationUseCase}
                        onChange={(e) => setApplicationUseCase(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                        Estimated Quantity
                      </label>
                      <select
                        value={estimatedQuantity}
                        onChange={(e) => setEstimatedQuantity(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#E0581E]"
                      >
                        <option value="Trial Sample">Trial Sample</option>
                        <option value="100 kg – 500 kg">100 kg – 500 kg</option>
                        <option value="1 MT – 5 MT">1 MT – 5 MT</option>
                        <option value="Monthly Supply (> 10 MT)">Monthly Supply (&gt; 10 MT)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Additional Details */}
                <div className="space-y-1">
                  <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                    Anything else we should know?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specifications, technical requirements or other details…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                  />
                </div>

                {/* 4. Your Details */}
                <div className="space-y-2.5 pt-1 border-t border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider block pt-1">
                    Your Details
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans font-medium text-slate-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-medium text-slate-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company or plant name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-medium text-slate-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98450 XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#E0581E]/25 hover:scale-101"
                  >
                    <span>Submit Requirement</span>
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Compact Help Strip Below Form */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-600">
            <span className="font-medium text-slate-800">
              Need immediate assistance?
            </span>
            <div className="flex items-center gap-4">
              <a
                href={COMPANY_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`tel:${COMPANY_PROFILE.phones.primaryRaw}`}
                className="inline-flex items-center gap-1 text-[#E0581E] hover:text-[#D9480F] font-semibold font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {COMPANY_PROFILE.phones.primary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementSection;
