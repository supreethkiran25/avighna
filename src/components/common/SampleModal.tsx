import React, { useState } from 'react';
import { VERIFIED_PRODUCTS } from '../../data/productsData';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const SampleModal: React.FC<SampleModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productName: initialProduct || VERIFIED_PRODUCTS[0].name,
    timeline: 'Immediate Trial (0-1 Month)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#E0581E', '#C88E3E', '#F9F8F5', '#E5B25D'],
    });

    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0E1116]/95 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#9DA3AF] hover:text-[#F9F8F5] bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
          aria-label="Close Sample Request Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-[#F9F8F5]">
              Sample Request Dispatched
            </h3>
            <p className="text-xs sm:text-sm text-[#9DA3AF] max-w-sm mx-auto font-sans">
              Thank you, <strong className="text-[#F9F8F5]">{formData.fullName}</strong>. Ashita and our formulation team will arrange samples of <strong className="text-[#E0581E]">{formData.productName}</strong> and contact you at <strong className="text-[#F9F8F5]">{formData.phone}</strong>.
            </p>
            <div className="pt-2 font-mono text-xs text-[#E5B25D]">
              Direct Hotline: +91 94833 89387 / ashita@ganeshinc.org
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#E0581E] text-[#070809] text-xs font-bold uppercase tracking-wider cursor-pointer hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pb-3 border-b border-white/[0.08]">
              <span className="font-mono text-[11px] text-[#E0581E] uppercase tracking-widest block">
                // Quick Sample Request
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F9F8F5] mt-1">
                Request Product Formulation Sample
              </h3>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                Product of Interest
              </label>
              <select
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
              >
                {VERIFIED_PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.name} className="bg-[#0E1116]">
                    {prod.name}
                  </option>
                ))}
                <option value="Custom Flavour System" className="bg-[#0E1116]">Custom Flavour System</option>
                <option value="General Institutional Inquiry" className="bg-[#0E1116]">General Institutional Inquiry</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Premier Foods"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ramesh@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98450 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9DA3AF] mb-1">
                Trial Requirements / Batch Size
              </label>
              <textarea
                rows={2}
                placeholder="Application notes (e.g. 75L snack fryer trial, paneer batch size)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E0581E] to-[#F57E25] hover:brightness-110 text-[#070809] font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-[#E0581E]/30 hover:scale-102"
            >
              <span>Submit Request For Sample Dispatch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SampleModal;
