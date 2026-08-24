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
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState('Trial Sample (Pilot / Laboratory)');
  const [notes, setNotes] = useState('');
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
    if (!fullName || !email || !phone) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E0581E', '#E5B25D', '#F9F8F5'],
    });

    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-4 my-6 text-slate-900">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block font-bold">
              // B2B Specification Request
            </span>
            <h3 className="font-display text-xl font-bold text-slate-900">
              Send Product Requirement
            </h3>
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
              Requirement Dispatched to {activeFirm.shortName}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-sans">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Our team will review your requirement for <strong className="text-[#E0581E]">{productRequired || activeFirm.shortName}</strong> and follow up with technical documentation and dispatch schedules within 24 hours.
            </p>
            <div className="pt-1 font-mono text-xs text-amber-800 font-semibold">
              Direct desk: {activeFirm.primaryPhone}
            </div>
            <button
              onClick={onClose}
              className="mt-3 px-5 py-2 rounded-full bg-[#E0581E] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Firm Selector */}
            <div>
              <label className="block text-xs font-mono text-amber-800 mb-1 font-bold">
                Target Operating Firm:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {OPERATING_FIRMS.map((firm) => (
                  <button
                    key={firm.id}
                    type="button"
                    onClick={() => setSelectedFirmId(firm.id)}
                    className={`p-2 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                      selectedFirmId === firm.id
                        ? 'bg-orange-50 border-[#E0581E] text-[#E0581E] font-bold shadow-2xs ring-1 ring-[#E0581E]/30'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {firm.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Product */}
            <div>
              <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                Product / Ingredient Required *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Xtendra 06, Sorbitol 70%, Cocoa Powder, ATP Swabs"
                value={productRequired}
                onChange={(e) => setProductRequired(e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
              />
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                  Company / Plant Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Premier Foods Ltd"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                  Mobile / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98450 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            {/* Quantity & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                  Volume / Trial Stage
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:border-[#E0581E]"
                >
                  <option value="Trial Sample (Pilot / Laboratory)">Trial Sample (Pilot / Laboratory)</option>
                  <option value="Initial Batch (100 kg – 500 kg)">Initial Batch (100 kg – 500 kg)</option>
                  <option value="Commercial Consignment (1 MT – 5 MT)">Commercial Consignment (1 MT – 5 MT)</option>
                  <option value="Scheduled Supply (&gt; 10 MT)">Scheduled Supply (&gt; 10 MT)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1 font-medium">
                  Application / Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. 75L fryer, paneer batch"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#E0581E]/25"
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
