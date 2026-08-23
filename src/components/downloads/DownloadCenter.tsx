import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { DOWNLOADABLE_DOCS } from '../../data/downloadsData';
import { Download, Eye, ShieldAlert } from 'lucide-react';

export const DownloadCenter: React.FC = () => {
  return (
    <section id="downloads" className="py-24 sm:py-32 bg-[#08090A] border-t border-white/[0.08]">
      <div className="container-editorial">
        {/* Section Header */}
        <SectionHeader
          label="Documentation & Regulatory Sheets // Download Center"
          title="Official Technical Dossiers & Product Catalogs."
          kannadaSubtitle="ಅಧಿಕೃತ ಉತ್ಪನ್ನ ವಿವರಣೆಗಳು ಮತ್ತು ಕ್ಯಾಟಲಾಗ್‌ಗಳು"
          description="Direct access to verified PDF catalogs, dosage manuals, Unilever credentials, and hygiene monitoring documentation."
        />

        {/* Downloadable Documents Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOWNLOADABLE_DOCS.map((doc) => (
            <div
              key={doc.id}
              className="p-6 sm:p-7 bg-[#0F1216] border border-white/[0.08] hover:border-[#C88E3E]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div>
                {/* Header with Format and File Size */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="px-2.5 py-0.5 bg-[#E0581E]/15 text-[#E0581E] font-mono text-[10px] font-bold tracking-wider border border-[#E0581E]/30 uppercase">
                    {doc.format} • {doc.pageCount} Pages
                  </span>
                  <span className="font-mono text-xs text-[#A3A6AD]">{doc.fileSize}</span>
                </div>

                <div className="mt-4 space-y-2">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#C88E3E] block">
                    {doc.category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F9F8F5] group-hover:text-[#E5B25D] transition-colors leading-snug">
                    {doc.title}
                  </h4>
                </div>

                <p className="mt-3 text-xs text-[#F9F8F5]/75 font-sans font-light leading-relaxed">
                  {doc.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-[#15191F] hover:bg-[#1C2027] border border-white/10 text-xs font-mono text-[#F9F8F5] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C88E3E]" />
                  <span>Preview PDF</span>
                </a>

                <a
                  href={doc.fileUrl}
                  download={doc.fileName}
                  className="flex-1 py-2.5 px-3 bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#08090A]" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Confidential Formulations */}
        <div className="mt-12 p-5 bg-[#0F1216] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A3A6AD]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#E0581E] shrink-0" />
            <span>Need custom Certificate of Analysis (CoA), MSDS, or proprietary blend dossiers?</span>
          </div>
          <a
            href="#contact"
            className="text-[#E5B25D] hover:underline font-semibold whitespace-nowrap"
          >
            Contact Formulation Desk →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;
