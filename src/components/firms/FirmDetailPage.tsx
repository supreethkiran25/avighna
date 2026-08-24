import React, { useState } from 'react';
import { OPERATING_FIRMS, getFirmById } from '../../data/firmsData';
import { getProductsByFirm } from '../../data/productsData';
import { CompanyId } from '../../types';
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Search,
  Download,
  CheckCircle,
  FlaskConical,
  Package,
  ChevronDown,
  ChevronUp,
  Building2,
  Send,
} from 'lucide-react';

interface FirmDetailPageProps {
  firmId: CompanyId;
  onBackToHome: () => void;
  onSwitchFirm: (newFirmId: CompanyId) => void;
  onOpenRequirementModal: (firmId: CompanyId, productName?: string) => void;
}

export const FirmDetailPage: React.FC<FirmDetailPageProps> = ({
  firmId,
  onBackToHome,
  onSwitchFirm,
  onOpenRequirementModal,
}) => {
  const firm = getFirmById(firmId) || OPERATING_FIRMS[0];
  const firmProducts = getProductsByFirm(firm.id);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  // Filter products by selected category and search
  const filteredProducts = firmProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.firmCategoryId === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.brandOrPrincipal &&
        product.brandOrPrincipal.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const toggleSpecs = (id: string) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#08090A] text-[#F9F8F5] min-h-screen">
      {/* Top Breadcrumb Bar & Quick Firm Switcher */}
      <div className="border-b border-white/[0.08] bg-[#0A0C0E]/90 backdrop-blur-md sticky top-16 sm:top-20 z-40 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#9DA3AF] hover:text-[#E0581E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Group Companies</span>
          </button>

          {/* Quick Firm Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="font-mono text-[10.5px] uppercase text-[#9DA3AF] shrink-0 mr-1 hidden sm:inline">
              Switch Entity:
            </span>
            {OPERATING_FIRMS.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  onSwitchFirm(f.id);
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  f.id === firm.id
                    ? 'bg-[#E0581E] text-[#08090A] font-bold'
                    : 'bg-white/[0.03] text-[#9DA3AF] hover:text-[#F9F8F5] border border-white/5 hover:border-white/15'
                }`}
              >
                {f.shortName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-editorial mt-8 sm:mt-12 space-y-12">
        {/* Firm Header & Identity Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1116] border border-white/10 space-y-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0581E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#E0581E] px-3.5 py-1 rounded-full bg-[#E0581E]/10 border border-[#E0581E]/20">
                  ENTITY {firm.number}
                </span>
                <span className="font-mono text-xs text-[#E5B25D] px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/5">
                  {firm.badge}
                </span>
              </div>

              <div className="space-y-1">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9F8F5]">
                  {firm.name}
                </h1>
                {firm.kannadaName && (
                  <p className="font-kannada text-sm sm:text-base text-[#E5B25D]">
                    {firm.kannadaName}
                  </p>
                )}
              </div>

              <p className="text-base sm:text-lg text-[#F9F8F5]/85 font-sans font-light leading-relaxed">
                {firm.description}
              </p>

              {/* Authorized Principals / Partners */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase text-[#9DA3AF] mr-1">
                  Representation / Agreements:
                </span>
                {firm.principalsOrPartners.map((principal, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 font-mono text-xs text-[#E5B25D]"
                  >
                    {principal}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Commercial & Technical Desk Card */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 shrink-0 lg:w-80">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E5B25D] block">
                  // Direct Entity Desk
                </span>
                <div className="font-serif text-lg font-bold text-[#F9F8F5]">
                  {firm.contactPerson}
                </div>
                <div className="font-mono text-xs text-[#9DA3AF]">
                  {firm.establishedInfo}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.08] space-y-2 font-mono text-xs">
                <a
                  href={`tel:${firm.primaryPhoneRaw}`}
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#F9F8F5] hover:text-[#E0581E] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                  <span>{firm.primaryPhone}</span>
                </a>

                <a
                  href={`mailto:${firm.email}`}
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#9DA3AF] hover:text-[#F9F8F5] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E5B25D]" />
                  <span>{firm.email}</span>
                </a>
              </div>

              <button
                onClick={() => onOpenRequirementModal(firm.id)}
                className="w-full py-3 rounded-xl bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Send Requirement</span>
                <Send className="w-3.5 h-3.5 text-[#08090A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Catalogue Section */}
        <div className="space-y-8">
          {/* Section Sub-Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-semibold">
                // Exclusive Catalogue
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5] mt-1">
                {firm.shortName} Products & Formulations
              </h2>
            </div>

            {firm.brochurePdf && (
              <a
                href={firm.brochurePdf}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-[#E5B25D] hover:text-[#F9F8F5] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Official PDF Sheet</span>
              </a>
            )}
          </div>

          {/* Category-First Tabs Navigation */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {firm.firmCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? firmProducts.length
                    : firmProducts.filter((p) => p.firmCategoryId === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#E0581E] text-[#08090A] font-bold shadow-md shadow-[#E0581E]/25'
                        : 'bg-[#0E1116] text-[#F9F8F5]/80 border border-white/[0.08] hover:border-white/20 hover:text-[#F9F8F5]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {count > 0 && (
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive ? 'bg-[#08090A] text-[#E5B25D]' : 'bg-white/[0.05] text-[#9DA3AF]'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Search within this Firm */}
            {firmProducts.length > 0 && (
              <div className="relative min-w-[240px]">
                <Search className="w-3.5 h-3.5 text-[#9DA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${firm.shortName}...`}
                  className="w-full pl-9 pr-4 py-2 rounded-full bg-[#0E1116] border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#9DA3AF] focus:outline-none focus:border-[#E0581E] transition-all"
                />
              </div>
            )}
          </div>

          {/* Product Items Display */}
          {firmProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product) => {
                const isSpecsOpen = expandedProductId === product.id;

                return (
                  <div
                    key={product.id}
                    className="rounded-3xl bg-[#0E1116] border border-white/10 hover:border-white/20 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl"
                  >
                    <div className="space-y-4">
                      {/* Category & Badge */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5B25D] font-semibold">
                          {product.firmCategoryLabel}
                        </span>
                        {product.badge && (
                          <span className="font-mono text-[10px] uppercase font-bold text-[#E0581E] px-2.5 py-0.5 rounded-full bg-[#E0581E]/10 border border-[#E0581E]/20">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Product Name & Brand */}
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F9F8F5] leading-snug">
                          {product.name}
                        </h3>
                        {product.brandOrPrincipal && (
                          <p className="font-mono text-xs text-[#E0581E] mt-1">
                            Principal: {product.brandOrPrincipal}
                          </p>
                        )}
                        <p className="text-xs sm:text-sm font-sans italic text-[#C88E3E] mt-1.5">
                          "{product.tagline}"
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#F9F8F5]/80 font-sans font-light leading-relaxed">
                        {product.description}
                      </p>

                      {/* Dosage & Packaging */}
                      <div className="space-y-2 pt-2 font-mono text-xs text-[#9DA3AF]">
                        {product.dosageOrUsage && (
                          <div className="flex items-start gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                            <FlaskConical className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-[#F9F8F5]">Dosage / Usage:</strong>{' '}
                              {product.dosageOrUsage}
                            </span>
                          </div>
                        )}
                        {product.packaging && (
                          <div className="flex items-start gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                            <Package className="w-3.5 h-3.5 text-[#E5B25D] shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-[#F9F8F5]">Packaging:</strong>{' '}
                              {product.packaging}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2 pt-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#9DA3AF] block font-semibold">
                          Verified Key Benefits:
                        </span>
                        <ul className="space-y-1.5">
                          {product.benefits.slice(0, isSpecsOpen ? undefined : 3).map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#F9F8F5]/85 font-sans">
                              <CheckCircle className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Collapsible Full Specs & Applications */}
                      {isSpecsOpen && (
                        <div className="pt-4 border-t border-white/[0.08] space-y-4 animate-fadeIn">
                          <div className="space-y-1.5">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5B25D] block font-semibold">
                              Target Applications:
                            </span>
                            <ul className="list-disc list-inside text-xs text-[#F9F8F5]/75 space-y-1 pl-1">
                              {product.applications.map((app, idx) => (
                                <li key={idx}>{app}</li>
                              ))}
                            </ul>
                          </div>

                          {product.specifications && (
                            <div className="space-y-1.5">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5B25D] block font-semibold">
                                Specifications:
                              </span>
                              <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 divide-y divide-white/[0.06]">
                                {product.specifications.map((s, idx) => (
                                  <div key={idx} className="px-3 py-1.5 flex justify-between text-xs font-mono">
                                    <span className="text-[#9DA3AF]">{s.label}</span>
                                    <span className="text-[#F9F8F5] font-medium text-right">{s.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Product Card Actions */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                      <button
                        onClick={() => toggleSpecs(product.id)}
                        className="text-xs font-mono text-[#9DA3AF] hover:text-[#F9F8F5] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isSpecsOpen ? 'Hide Specs' : 'View Full Specs'}</span>
                        {isSpecsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <div className="flex items-center gap-2">
                        {product.documentDownload && (
                          <a
                            href={product.documentDownload}
                            download
                            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#9DA3AF] hover:text-[#E5B25D] transition-colors"
                            title="Download PDF"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => onOpenRequirementModal(firm.id, product.name)}
                          className="px-4 py-2 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer hover:scale-102"
                        >
                          <span>Send Requirement</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#08090A]" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Dedicated Ready / Inquiry State for Atharva Associates */
            <div className="p-10 sm:p-14 rounded-3xl bg-[#0E1116] border border-white/10 text-center space-y-6 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto text-[#34D399]">
                <Building2 className="w-7 h-7" />
              </div>

              <div className="max-w-xl mx-auto space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#34D399] block font-semibold">
                  // Commercial Sourcing Desk
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5]">
                  Atharva Associates — Spot Procurement & Trading
                </h3>
                <p className="text-xs sm:text-sm text-[#9DA3AF] font-sans font-light leading-relaxed">
                  Atharva Associates handles spot ingredient procurement, raw material aggregation, and factory distribution contracts. The full digital specifications sheet is compiled on a per-consignment basis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="font-mono text-xs text-[#E5B25D] font-bold block">01. Spot Sourcing</span>
                  <p className="text-xs text-[#F9F8F5]/70">Fast turnaround for urgent raw material requirements.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="font-mono text-xs text-[#E5B25D] font-bold block">02. Factory Contracts</span>
                  <p className="text-xs text-[#F9F8F5]/70">Scheduled monthly bulk consignments across South India.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="font-mono text-xs text-[#E5B25D] font-bold block">03. Group Integration</span>
                  <p className="text-xs text-[#F9F8F5]/70">Supported by Avighna Technical Application R&D.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenRequirementModal('atharva-associates', 'Atharva Sourcing Inquiry')}
                  className="px-8 py-3.5 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E0581E]/20"
                >
                  <span>Submit Sourcing Requirement</span>
                  <Send className="w-3.5 h-3.5 text-[#08090A]" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Firm Requirement Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0E1116] via-[#14181F] to-[#0E1116] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5B25D]">
              Need a Custom Formulation or Bulk Quotation?
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#F9F8F5]">
              Initiate Direct Procurement Dialogue with {firm.shortName}
            </h3>
            <p className="text-xs sm:text-sm text-[#9DA3AF] max-w-xl">
              Our technical leads coordinate trial batches, sample dispatch, CoA documentation, and commercial pricing within 24 hours.
            </p>
          </div>

          <button
            onClick={() => onOpenRequirementModal(firm.id)}
            className="px-8 py-4 rounded-full bg-[#E0581E] hover:bg-[#F57E25] text-[#08090A] text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer shadow-lg shadow-[#E0581E]/30 flex items-center gap-2 hover:scale-102 transition-transform"
          >
            <span>Send Requirement for {firm.shortName}</span>
            <ArrowRight className="w-4 h-4 text-[#08090A]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirmDetailPage;
