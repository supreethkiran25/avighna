import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_PROFILE } from '../../data/companyData';
import { VERIFIED_PRODUCTS } from '../../data/productsData';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactExperienceProps {
  initialService?: string;
}

export const ContactExperience: React.FC<ContactExperienceProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: initialService || VERIFIED_PRODUCTS[0].name,
    batchVolume: 'Commercial Frying (75L - 100L+)',
    timeline: 'Immediate Trial (0-1 Month)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, productCategory: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#E0581E', '#C88E3E', '#F9F8F5', '#E5B25D'],
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#08090A] border-t border-white/[0.08]">
      <div className="container-editorial">
        {/* Section Header */}
        <SectionHeader
          label="Procurement & Technical Consultation // Contact Desk"
          title="Initiate Formulation Dialogue & Sample Dispatch."
          kannadaSubtitle="ಮಾದರಿ ಪದಾರ್ಥಗಳಿಗಾಗಿ ನೇರ ಸಂಪರ್ಕ ಮತ್ತು ಸಮಾಲೋಚನೆ"
          description="Connect directly with our technical formulation leads for product samples, trial batches, CoA documentation, or institutional supply contracts."
        />

        {/* Split Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contacts & Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Executive Contacts Cards */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block">
                // Direct Executive Hotlines
              </span>

              {/* Ashita Card */}
              <div className="p-6 bg-[#0F1216] border border-white/[0.08] hover:border-[#E0581E]/40 transition-colors space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-[#F9F8F5]">
                    Ashita
                  </h4>
                  <span className="px-2 py-0.5 bg-[#15191F] font-mono text-[10px] text-[#E5B25D]">
                    Operations & Commercial Lead
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <a
                    href={`tel:9483389387`}
                    className="flex items-center gap-2 text-[#F9F8F5] hover:text-[#E0581E] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                    <span>+91 94833 89387 / +91 70194 77940</span>
                  </a>

                  <a
                    href="mailto:ashita@ganeshinc.org"
                    className="flex items-center gap-2 text-[#A3A6AD] hover:text-[#F9F8F5] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C88E3E]" />
                    <span>ashita@ganeshinc.org</span>
                  </a>
                </div>
              </div>

              {/* Shashidhar Card */}
              <div className="p-6 bg-[#0F1216] border border-white/[0.08] hover:border-[#C88E3E]/40 transition-colors space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-[#F9F8F5]">
                    Shashidhar
                  </h4>
                  <span className="px-2 py-0.5 bg-[#15191F] font-mono text-[10px] text-[#E5B25D]">
                    Technical & Sales Lead
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <a
                    href={`tel:9916917517`}
                    className="flex items-center gap-2 text-[#F9F8F5] hover:text-[#E0581E] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                    <span>+91 99169 17517 / +91 96867 09673</span>
                  </a>

                  <a
                    href="mailto:ask.avighna@gmail.com"
                    className="flex items-center gap-2 text-[#A3A6AD] hover:text-[#F9F8F5] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C88E3E]" />
                    <span>ask.avighna@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Action */}
            <a
              href={COMPANY_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#0F1216] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] font-mono text-xs flex items-center justify-between transition-colors block"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span className="font-semibold">Connect on WhatsApp Procurement Desk</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Registered Address Coordinates */}
            <div className="p-6 bg-[#0F1216] border border-white/[0.08] space-y-3">
              <span className="font-mono text-xs text-[#C88E3E] uppercase tracking-widest block">
                // Corporate Formulation Office
              </span>
              <p className="text-xs text-[#F9F8F5]/80 font-sans leading-relaxed">
                {COMPANY_PROFILE.locations.headquarters.fullAddress}
              </p>
              <p className="font-mono text-[11px] text-[#A3A6AD]">
                Landmark: Near Vajarahalli Metro Station, Kanakapura Road, Thalgatpura
              </p>

              <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[11px] text-[#E0581E]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Manufacturing Plant: Hubli, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sample Request Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0F1216] border border-white/[0.08]">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5]">
                  Sample Request Dispatched
                </h3>
                <p className="text-sm text-[#A3A6AD] max-w-md mx-auto font-sans">
                  Thank you, <strong className="text-[#F9F8F5]">{formData.fullName}</strong>. Ashita and our technical team will review your requirement for <strong className="text-[#E0581E]">{formData.productCategory}</strong> and coordinate sample dispatch within 24 business hours.
                </p>
                <div className="pt-4 font-mono text-xs text-[#C88E3E]">
                  Direct follow-up: +91 94833 89387 / ask.avighna@gmail.com
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[#15191F] border border-white/15 text-xs font-mono text-[#F9F8F5] hover:border-[#E0581E] transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="pb-3 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest block">
                    // Product Sample & Formulation Request
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#F9F8F5] mt-1">
                    Request Trial Batches & Technical Dossier
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A3A6AD] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#08090A] border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A3A6AD] mb-1.5">
                      Company / Processing Plant Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Premier Foods Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#08090A] border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A3A6AD] mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@premierfoods.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#08090A] border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A3A6AD] mb-1.5">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98450 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#08090A] border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A3A6AD] mb-1.5">
                      Product Formulation of Interest
                    </label>
                    <select
                      value={formData.productCategory}
                      onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#08090A] border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                    >
                      {VERIFIED_PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name} className="bg-[#08090A]">
                          {prod.name}
                        </option>
                      ))}
                      <option value="Custom Flavour Development" className="bg-[#08090A]">
                        Custom Flavour Development
                      </option>
                      <option value="General Institutional Sourcing" className="bg-[#08090A]">
                        General Institutional Sourcing
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A3A6AD] mb-1.5">
                      Estimated Trial Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#08090A] border border-white/10 text-xs font-mono text-[#F9F8F5] focus:outline-none focus:border-[#E0581E]"
                    >
                      <option value="Immediate Trial (0-1 Month)">Immediate Trial (0-1 Month)</option>
                      <option value="Upcoming Product Formulation (1-3 Months)">Upcoming Formulation (1-3 Months)</option>
                      <option value="Regular Annual Procurement">Regular Annual Procurement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A3A6AD] mb-1.5">
                    Specific Technical Details / Application Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your production setup (e.g., 100L continuous fryer, paneer batch size, specific flavour profile requirement)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#08090A] border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#6B7A88] focus:outline-none focus:border-[#E0581E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Submit Sample & Formulation Request</span>
                  <ArrowUpRight className="w-4 h-4 text-[#08090A]" />
                </button>

                <p className="text-[11px] font-mono text-[#A3A6AD] text-center">
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

export default ContactExperience;
