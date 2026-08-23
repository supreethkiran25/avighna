import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Eye, Download, Maximize2, X, ShieldCheck } from 'lucide-react';

interface FlyerItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  pdfUrl: string;
  dosage: string;
  highlights: string[];
  description: string;
}

const OFFICIAL_FLYERS: FlyerItem[] = [
  {
    id: 'xtendra',
    title: 'Xtendra 06 — Frying Oil Antioxidant Blend',
    category: 'Fried Food & Snack Processing',
    imageSrc: '/assets/WhatsApp Image 2026-08-22 at 4.11.47 PM.jpeg',
    pdfUrl: '/assets/Avighna Flyer a4 (4 flyers).pdf',
    dosage: '1 gm per 1 kg cooking oil (for 75L–100L continuous fryers)',
    highlights: [
      '5% to 15% lower oil absorption in fried snacks',
      'Significantly lowers Free Fatty Acids (FFA) & Peroxide Value (PV)',
      'Substantially reduces smoking on factory floor',
      'Available in 1L, 5L, 25L food-grade cans',
    ],
    description: 'Proprietary liquid formulation engineered to delay thermal oil degradation, extend frying bath lifetime, and retain fresh crunchy texture.',
  },
  {
    id: 'flavours',
    title: 'Speciality Flavours & Seasonings Portfolio',
    category: 'Food, Beverage & Confectionery',
    imageSrc: '/assets/WhatsApp Image 2026-08-22 at 4.11.46 PM.jpeg',
    pdfUrl: '/assets/Avighna Flyer a4 (4 flyers).pdf',
    dosage: 'Custom formulation dosage (0.05% to 0.5% depending on application)',
    highlights: [
      'Liquid, Powdered & Spray-Dried Encapsulated Aromas',
      'Thermal stability up to 220°C for bakery and extrudates',
      'Custom profiles: Dairy, Fruit, Spice, Savoury & Confectionery',
      'Partnership with Döehler Germany & Mane Kancor',
    ],
    description: 'High-impact aroma and flavouring systems tailored for dairy, beverages, ice creams, bakery, and traditional Indian savouries.',
  },
  {
    id: 'dairy-paneer',
    title: 'EZENTIAL 4001 — High Yield Paneer Coagulant',
    category: 'Dairy & Cheese Processing',
    imageSrc: '/assets/extracted/Avighna_Flyer_a4__4_flyers__pdf_img_5.jpg',
    pdfUrl: '/assets/Avighna Flyer a4 (4 flyers).pdf',
    dosage: '0.35% (3.5g per 1kg milk solids)',
    highlights: [
      '+18% to +20% higher finished paneer yield',
      'Preserves soft, elastic sponge texture after cold-chain transit',
      'Supplying Mozzarella, Cheddar, Curd & Ghee cultures',
      'Authorized distributor for CHR. HANSEN Denmark DVS cultures',
    ],
    description: 'Next-generation bio-coagulant enhancing total solids recovery from milk without altering natural milk aroma or souring profile.',
  },
  {
    id: 'pharma-starch',
    title: 'Starch Derivatives & Pharma Excipients',
    category: 'Pharma, Nutra & Industrial',
    imageSrc: '/assets/extracted/Avighna_Flyer_a4__4_flyers__pdf_img_7.jpg',
    pdfUrl: '/assets/Avighna Flyer a4 (4 flyers).pdf',
    dosage: 'IP / BP / EP / USP Monograph Compliance',
    highlights: [
      'Sorbitol 70% IP Solution & Non-Crystallizing Grades',
      'Maltodextrin, Dextrose Monohydrate & Anhydrous',
      'Liquid Glucose, Maize Starch & Modified Starches',
      'Gujarat Ambuja Exports Ltd (GAEL) Master Stockist',
    ],
    description: 'High-purity excipients, binders, sweeteners, and texturizers serving major pharmaceutical formulation plants and industrial F&B processors.',
  },
];

export const FlyerGallery: React.FC = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<FlyerItem>(OFFICIAL_FLYERS[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="flyers" className="relative py-24 sm:py-32 bg-[#08090A] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E0581E]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="container-editorial relative z-10">
        <SectionHeader
          label="Visual Dossier // Official Technical Sheets"
          title="Authentic Product Flyers & Formulations."
          kannadaSubtitle="ಅಧಿಕೃತ ಉತ್ಪನ್ನ ಕರಪತ್ರಗಳು ಮತ್ತು ತಾಂತ್ರಿಕ ವಿವರಣೆಗಳು"
          description="Direct inspection gallery of Avighna's official technical flyers, dosage guidelines, and food science specifications."
        />

        {/* Interactive Flyer Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Flyer Thumbnail Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {OFFICIAL_FLYERS.map((flyer) => {
              const isActive = flyer.id === selectedFlyer.id;
              return (
                <div
                  key={flyer.id}
                  onClick={() => setSelectedFlyer(flyer)}
                  className={`p-4 sm:p-5 border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                    isActive
                      ? 'bg-[#0F1216] border-[#E0581E] shadow-xl translate-x-1.5'
                      : 'bg-[#0A0C0E] border-white/[0.06] hover:border-white/20 hover:bg-[#0F1216]/50'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-20 shrink-0 overflow-hidden bg-[#08090A] border border-white/10 relative group">
                    <img
                      src={flyer.imageSrc}
                      alt={flyer.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex-grow space-y-1">
                    <span className="font-mono text-[10px] uppercase text-[#E0581E] tracking-wider font-semibold">
                      {flyer.category}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#F9F8F5] leading-snug">
                      {flyer.title}
                    </h4>
                    <p className="text-xs text-[#A3A6AD] line-clamp-1 font-mono">
                      {flyer.dosage}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: High-Res Interactive Viewer (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F1216] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-xs text-[#C88E3E] uppercase tracking-widest block">
                  // Selected Technical Sheet
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F9F8F5] mt-1">
                  {selectedFlyer.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="px-3 py-1.5 bg-[#15191F] hover:bg-[#1C2027] border border-white/10 text-xs font-mono text-[#F9F8F5] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#E5B25D]" />
                  <span>Full Screen</span>
                </button>

                <a
                  href={selectedFlyer.pdfUrl}
                  download
                  className="px-3 py-1.5 bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Sheet</span>
                </a>
              </div>
            </div>

            {/* Visual Display Container with Exact Fit */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#08090A] border border-white/10 group cursor-zoom-in"
            >
              <img
                src={selectedFlyer.imageSrc}
                alt={selectedFlyer.title}
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-[#08090A]/90 border border-white/20 text-xs font-mono text-[#F9F8F5] flex items-center gap-2 shadow-xl">
                  <Eye className="w-4 h-4 text-[#E0581E]" />
                  <span>Click to Zoom High-Res</span>
                </span>
              </div>
            </div>

            {/* Specifications & Dosage Details */}
            <div className="space-y-3 pt-2">
              <div className="p-3 bg-[#08090A] border border-white/[0.06] font-mono text-xs text-[#E5B25D]">
                <strong>Standard Industrial Dosage:</strong> {selectedFlyer.dosage}
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A3A6AD] block">
                  Key Formulation Benefits:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#F9F8F5]/80">
                  {selectedFlyer.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Res Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest">
                High-Resolution Official Flyer
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F9F8F5]">
                {selectedFlyer.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedFlyer.pdfUrl}
                download
                className="px-3.5 py-2 bg-[#E0581E] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Dossier</span>
              </a>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 text-[#F9F8F5] border border-white/20 hover:border-[#E0581E] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6 text-[#E0581E]" />
              </button>
            </div>
          </div>

          {/* Full Image Container */}
          <div className="my-auto max-h-[80vh] flex items-center justify-center p-2 overflow-auto">
            <img
              src={selectedFlyer.imageSrc}
              alt={selectedFlyer.title}
              className="max-h-[78vh] max-w-full object-contain shadow-2xl border border-white/10"
            />
          </div>

          {/* Bottom Caption */}
          <div className="text-center font-mono text-xs text-[#A3A6AD] pt-2 border-t border-white/10">
            Avighna Speciality Ingredients Pvt Ltd • Dosage: {selectedFlyer.dosage}
          </div>
        </div>
      )}
    </section>
  );
};

export default FlyerGallery;
