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
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#0E1116] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div>
            <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block font-semibold">
              // B2B Specification Request
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#F9F8F5]">
              Send Product Requirement
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#9DA3AF] hover:text-[#F9F8F5] border border-white/10 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
            <h4 className="font-serif text-2xl font-bold text-[#F9F8F5]">
              Requirement Dispatched to {activeFirm.shortName}
            </h4>
            <p className="text-xs sm:text-sm text-[#9DA3AF] max-w-md mx-auto font-sans">
              Thank you, <strong className="text-[#F9F8F5]">{fullName}</strong>. Our team will review your requirement for <strong className="text-[#E0581E]">{productRequired || activeFirm.shortName}</strong> and follow up with technical documentation and dispatch schedules within 24 hours.
            </p>
            <div className="pt-2 font-mono text-xs text-[#E5B25D]">
              Direct desk: {activeFirm.primaryPhone}
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#E0581E] text-[#08090A] text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Firm Selector */}
            <div>
              <label className="block text-xs font-mono text-[#E5B25D] mb-1.5 font-semibold">
                Target Operating Firm:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {OPERATING_FIRMS.map((firm) => (
                  <button
                    key={firm.id}
                    type="button"
                    onClick={() => setSelectedFirmId(firm.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                      selectedFirmId === firm.id
                        ? 'bg-black/60 border-[#E0581E] text-[#E0581E] font-bold'
                        : 'bg-white/[0.02] border-white/5 text-[#9DA3AF] hover:text-[#F9F8F5]'
                    }`}
                  >
                    {firm.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Product */}
            <div>
              <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                Product / Ingredient Required *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Xtendra 06, Sorbitol 70%, Cocoa Powder, ATP Swabs"
                value={productRequired}
                onChange={(e) => setProductRequired(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
              />
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Company / Plant Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Premier Foods Ltd"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ramesh@premierfoods.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Mobile / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98450 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            {/* Quantity & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Volume / Trial Stage
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                >
                  <option value="Trial Sample (Pilot / Laboratory)">Trial Sample (Pilot / Laboratory)</option>
                  <option value="Initial Batch (100 kg – 500 kg)">Initial Batch (100 kg – 500 kg)</option>
                  <option value="Commercial Consignment (1 MT – 5 MT)">Commercial Consignment (1 MT – 5 MT)</option>
                  <option value="Scheduled Supply (&gt; 10 MT)">Scheduled Supply (&gt; 10 MT)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Application / Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. 75L fryer, paneer batch"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E0581E]/30"
            >
              <span>Submit Requirement</span>
              <Send className="w-3.5 h-3.5 text-[#08090A]" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequirementModal;
