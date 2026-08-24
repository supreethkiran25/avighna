import React, { useState, useEffect } from 'react';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { CompanyId } from '../../types';
import { X, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFirmId?: CompanyId;
  initialProduct?: string;
}

export const RequirementModal: React.FC<RequirementModalProps> = ({
  isOpen,
  onClose,
  initialFirmId = 'avighna',
  initialProduct = '',
}) => {
  const [selectedFirmId, setSelectedFirmId] = useState<CompanyId>(initialFirmId);
  const [productRequired, setProductRequired] = useState(initialProduct);
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
    if (initialProduct) setProductRequired(initialProduct);
    if (isOpen) setIsSubmitted(false);
  }, [initialFirmId, initialProduct, isOpen]);

  if (!isOpen) return null;

  const activeFirm = OPERATING_FIRMS.find((f) => f.id === selectedFirmId) || OPERATING_FIRMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !productRequired) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E0581E', '#E5B25D', '#0F172A'],
    });

    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4 my-6 text-slate-900">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900">
              Submit Your Requirement
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Tell us what you need and we'll connect you with the right team.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-3 animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-display text-xl font-bold text-slate-900">
              Requirement Received
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. We have routed your requirement for <strong className="text-[#E0581E]">{productRequired}</strong> to <strong className="text-slate-900">{activeFirm.shortName}</strong>. Our team will contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-5 py-2 rounded-full bg-[#E0581E] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* 1. Who should handle this? */}
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                Who should handle this?
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {OPERATING_FIRMS.map((firm) => (
                  <button
                    key={firm.id}
                    type="button"
                    onClick={() => setSelectedFirmId(firm.id)}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedFirmId === firm.id
                        ? 'bg-orange-50 border-[#E0581E] text-[#E0581E] font-bold shadow-2xs ring-1 ring-[#E0581E]/30'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <span className="font-display text-xs block">{firm.shortName}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. What do you need? */}
            <div className="space-y-2.5">
              <div>
                <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                  Product / Ingredient *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Xtendra 06, Cocoa, Sorbitol"
                  value={productRequired}
                  onChange={(e) => setProductRequired(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                    Application / Use
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Paneer, Chips, Beverage"
                    value={applicationUseCase}
                    onChange={(e) => setApplicationUseCase(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={estimatedQuantity}
                    onChange={(e) => setEstimatedQuantity(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 focus:outline-none focus:border-[#E0581E]"
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
            <div>
              <label className="block text-xs font-sans font-semibold text-slate-800 mb-1">
                Anything else we should know?
              </label>
              <textarea
                rows={2}
                placeholder="Specifications, technical requirements or other details…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
              />
            </div>

            {/* 4. Your Details */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              <span className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Your Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-sans font-medium text-slate-700 mb-0.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-slate-700 mb-0.5">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-sans font-medium text-slate-700 mb-0.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-slate-700 mb-0.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#E0581E]/25"
            >
              <span>Submit Requirement</span>
              <Send className="w-3.5 h-3.5 text-white" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequirementModal;
