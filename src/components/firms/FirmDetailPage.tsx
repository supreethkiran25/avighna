import React, { useState } from 'react';
import { OPERATING_FIRMS, getFirmById } from '../../data/firmsData';
import { getProductsByFirm } from '../../data/productsData';
import { CompanyId } from '../../types';
import {
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
  ChevronRight,
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
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-white text-slate-900 min-h-screen">
      {/* Top Breadcrumb Bar & Quick Firm Switcher */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-14 sm:top-16 z-40 py-2.5 px-3 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          {/* Strict Hierarchy Breadcrumb: Home / Our Companies / [Company Name] */}
          <nav className="flex items-center gap-1.5 text-xs font-mono text-slate-500 overflow-x-auto no-scrollbar">
            <button
              onClick={onBackToHome}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button
              onClick={onBackToHome}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Our Companies
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="font-bold text-[#E0581E] whitespace-nowrap">
              {firm.shortName}
            </span>
          </nav>

          {/* Quick Firm Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="font-mono text-[10px] uppercase text-slate-500 shrink-0 mr-1 hidden sm:inline font-bold">
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
                className={`px-2.5 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  f.id === firm.id
                    ? 'bg-[#E0581E] text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {f.shortName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-editorial mt-6 sm:mt-8 space-y-8 sm:space-y-10">
        {/* Compact Firm Header & Identity Showcase */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-2xs relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#E0581E] px-2.5 py-0.5 rounded-full bg-orange-100/80 border border-orange-200">
                  ENTITY {firm.number}
                </span>
                <span className="font-mono text-xs text-amber-800 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 font-bold">
                  {firm.badge}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {firm.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
                {firm.description}
              </p>

              {/* Authorized Principals / Partners */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-[10.5px] uppercase text-slate-500 mr-1 font-bold">
                  Partners & Agreements:
                </span>
                {firm.principalsOrPartners.map((principal, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 font-mono text-xs text-slate-800 font-medium shadow-2xs"
                  >
                    {principal}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Commercial & Technical Desk Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3 shrink-0 lg:w-76 shadow-sm">
              <div className="space-y-0.5">
                <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#E0581E] block font-bold">
                  // Direct Entity Desk
                </span>
                <div className="font-display text-base font-bold text-slate-900">
                  {firm.contactPerson}
                </div>
                <div className="font-mono text-xs text-slate-500">
                  {firm.establishedInfo}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1.5 font-mono text-xs">
                <a
                  href={`tel:${firm.primaryPhoneRaw}`}
                  className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#E0581E] transition-colors font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
                  <span>{firm.primaryPhone}</span>
                </a>

                <a
                  href={`mailto:${firm.email}`}
                  className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-700" />
                  <span>{firm.email}</span>
                </a>
              </div>

              <button
                onClick={() => onOpenRequirementModal(firm.id)}
                className="w-full py-2.5 rounded-lg bg-[#E0581E] hover:bg-[#D9480F] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <span>Send Requirement</span>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Catalogue Section */}
        <div className="space-y-6">
          {/* Section Sub-Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
                // Exclusive Catalogue
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                {firm.shortName} Products & Formulations
              </h2>
            </div>

            {firm.brochurePdf && (
              <a
                href={firm.brochurePdf}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono text-slate-800 hover:text-slate-900 transition-all font-semibold"
              >
                <Download className="w-3.5 h-3.5 text-[#E0581E]" />
                <span>Official PDF Sheet</span>
              </a>
            )}
          </div>

          {/* Category-First Tabs Navigation */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Categories */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
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
                    className={`px-3 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#E0581E] text-white font-bold shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {count > 0 && (
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-white text-[#E0581E] font-bold' : 'bg-slate-100 text-slate-600'
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
              <div className="relative min-w-[220px]">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${firm.shortName}...`}
                  className="w-full pl-8 pr-3 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E0581E] shadow-2xs transition-all"
                />
              </div>
            )}
          </div>

          {/* Product Items Display */}
          {firmProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => {
                const isSpecsOpen = expandedProductId === product.id;

                return (
                  <div
                    key={product.id}
                    className="rounded-2xl bg-white border border-slate-200 hover:border-[#E0581E]/40 transition-all duration-200 p-6 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-sm"
                  >
                    <div className="space-y-3">
                      {/* Category & Badge */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber-800 font-bold">
                          {product.firmCategoryLabel}
                        </span>
                        {product.badge && (
                          <span className="font-mono text-[9.5px] uppercase font-bold text-[#E0581E] px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Product Name & Brand */}
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                          {product.name}
                        </h3>
                        {product.brandOrPrincipal && (
                          <p className="font-mono text-xs text-[#E0581E] mt-0.5 font-semibold">
                            Principal: {product.brandOrPrincipal}
                          </p>
                        )}
                        <p className="text-xs font-sans italic text-amber-800 mt-1 font-medium">
                          "{product.tagline}"
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                        {product.description}
                      </p>

                      {/* Dosage & Packaging */}
                      <div className="space-y-1.5 pt-1 font-mono text-xs text-slate-600">
                        {product.dosageOrUsage && (
                          <div className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                            <FlaskConical className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-slate-900">Dosage / Usage:</strong>{' '}
                              {product.dosageOrUsage}
                            </span>
                          </div>
                        )}
                        {product.packaging && (
                          <div className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                            <Package className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-slate-900">Packaging:</strong>{' '}
                              {product.packaging}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Benefits */}
                      <div className="space-y-1 pt-1">
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-500 block font-bold">
                          Verified Key Benefits:
                        </span>
                        <ul className="space-y-1">
                          {product.benefits.slice(0, isSpecsOpen ? undefined : 3).map((b, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 font-sans">
                              <CheckCircle className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Collapsible Full Specs & Applications */}
                      {isSpecsOpen && (
                        <div className="pt-3 border-t border-slate-100 space-y-3 animate-fadeIn">
                          <div className="space-y-1">
                            <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber-800 block font-bold">
                              Target Applications:
                            </span>
                            <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 pl-1">
                              {product.applications.map((app, idx) => (
                                <li key={idx}>{app}</li>
                              ))}
                            </ul>
                          </div>

                          {product.specifications && (
                            <div className="space-y-1">
                              <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber-800 block font-bold">
                                Specifications:
                              </span>
                              <div className="rounded-lg overflow-hidden bg-slate-50 border border-slate-200 divide-y divide-slate-200">
                                {product.specifications.map((s, idx) => (
                                  <div key={idx} className="px-2.5 py-1 flex justify-between text-xs font-mono">
                                    <span className="text-slate-500">{s.label}</span>
                                    <span className="text-slate-900 font-semibold text-right">{s.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Product Card Actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleSpecs(product.id)}
                        className="text-xs font-mono text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer font-semibold"
                      >
                        <span>{isSpecsOpen ? 'Hide Specs' : 'View Specs'}</span>
                        {isSpecsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <div className="flex items-center gap-1.5">
                        {product.documentDownload && (
                          <a
                            href={product.documentDownload}
                            download
                            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                            title="Download PDF"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => onOpenRequirementModal(firm.id, product.name)}
                          className="px-3.5 py-1.5 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer shadow-xs hover:scale-102"
                        >
                          <span>Send Requirement</span>
                          <ArrowRight className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Dedicated Ready / Inquiry State for Atharva Associates */
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-5 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="max-w-xl mx-auto space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 block font-bold">
                  // Commercial Sourcing Desk
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Atharva Associates — Spot Procurement & Trading
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                  Atharva Associates handles spot ingredient procurement, raw material aggregation, and factory distribution contracts across South India.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-0.5 shadow-2xs">
                  <span className="font-mono text-xs text-amber-800 font-bold block">01. Spot Sourcing</span>
                  <p className="text-xs text-slate-600">Fast turnaround for urgent raw material consignments.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-0.5 shadow-2xs">
                  <span className="font-mono text-xs text-amber-800 font-bold block">02. Factory Contracts</span>
                  <p className="text-xs text-slate-600">Scheduled monthly bulk consignments across South India.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-0.5 shadow-2xs">
                  <span className="font-mono text-xs text-amber-800 font-bold block">03. Group Integration</span>
                  <p className="text-xs text-slate-600">Supported by Avighna Technical Application R&D.</p>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onOpenRequirementModal('atharva-associates', 'Atharva Sourcing Inquiry')}
                  className="px-6 py-2.5 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer shadow-sm shadow-[#E0581E]/20"
                >
                  <span>Submit Sourcing Requirement</span>
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Firm Requirement Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-50/80 via-amber-50/50 to-orange-50/80 border border-orange-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="space-y-0.5 text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold">
              Need a Custom Formulation or Bulk Quotation?
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Initiate Direct Procurement Dialogue with {firm.shortName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Our technical leads coordinate trial batches, sample dispatch, CoA documentation, and commercial pricing within 24 hours.
            </p>
          </div>

          <button
            onClick={() => onOpenRequirementModal(firm.id)}
            className="px-6 py-3 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer shadow-md shadow-[#E0581E]/20 flex items-center gap-1.5 hover:scale-102 transition-transform"
          >
            <span>Send Requirement for {firm.shortName}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirmDetailPage;
