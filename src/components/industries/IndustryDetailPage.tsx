import React, { useState } from 'react';
import { INDUSTRIES_SERVED, getIndustryById } from '../../data/industriesData';
import { ALL_VERIFIED_PRODUCTS } from '../../data/productsData';
import { OPERATING_FIRMS } from '../../data/firmsData';
import { IndustryCategory, CompanyId, ProductItem } from '../../types';
import {
  ChevronRight,
  ArrowRight,
  Send,
  Building2,
  Package,
  FlaskConical,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface IndustryDetailPageProps {
  industryId: IndustryCategory;
  onBackToHome: () => void;
  onSwitchIndustry: (newIndustryId: IndustryCategory) => void;
  onNavigateFirm: (firmId: CompanyId) => void;
  onOpenRequirementModal: (firmId: CompanyId, productName?: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  industryId,
  onBackToHome,
  onSwitchIndustry,
  onNavigateFirm,
  onOpenRequirementModal,
}) => {
  const industry = getIndustryById(industryId) || INDUSTRIES_SERVED[0];
  const [selectedAppId, setSelectedAppId] = useState<string>('all');
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  // Determine relevant product IDs based on selected sub-application
  let relevantProductIds: string[] = [];
  if (selectedAppId === 'all') {
    industry.applications.forEach((app) => {
      relevantProductIds.push(...app.productIds);
    });
  } else {
    const app = industry.applications.find((a) => a.id === selectedAppId);
    if (app) relevantProductIds = [...app.productIds];
  }

  // Deduplicate product IDs
  const uniqueProductIds = Array.from(new Set(relevantProductIds));

  // Get full product objects
  const relevantProducts = uniqueProductIds
    .map((id) => ALL_VERIFIED_PRODUCTS.find((p) => p.id === id))
    .filter((p): p is ProductItem => p !== undefined);

  // Group products by owning Company
  const productsByCompany: { [key in CompanyId]?: ProductItem[] } = {};
  relevantProducts.forEach((product) => {
    if (!productsByCompany[product.companyId]) {
      productsByCompany[product.companyId] = [];
    }
    productsByCompany[product.companyId]!.push(product);
  });

  const toggleSpecs = (id: string) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-white text-slate-900 min-h-screen">
      {/* Top Breadcrumb Bar & Quick Industry Switcher */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-14 sm:top-16 z-40 py-2.5 px-3 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          {/* Breadcrumb: Home / Industries / [Industry Name] */}
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
              Industries
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="font-bold text-[#E0581E] whitespace-nowrap">
              {industry.title}
            </span>
          </nav>

          {/* Quick Industry Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="font-mono text-[10px] uppercase text-slate-500 shrink-0 mr-1 hidden sm:inline font-bold">
              Switch Sector:
            </span>
            {INDUSTRIES_SERVED.map((ind) => (
              <button
                key={ind.id}
                onClick={() => {
                  onSwitchIndustry(ind.id);
                  setSelectedAppId('all');
                }}
                className={`px-2.5 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  ind.id === industry.id
                    ? 'bg-[#E0581E] text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {ind.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-editorial mt-6 sm:mt-8 space-y-8 sm:space-y-10">
        {/* Industry Header Showcase */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-2xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#E0581E] px-2.5 py-0.5 rounded-full bg-orange-100/80 border border-orange-200">
              INDUSTRY SOLUTIONS
            </span>
            <span className="font-mono text-xs text-slate-500">
              {industry.applications.length} Sub-Applications
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {industry.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed max-w-3xl">
            {industry.shortDescription}
          </p>

          {/* Function Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {industry.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 font-mono text-xs text-slate-800 font-medium shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Application Filter Narrowing Tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
                // Step 1: Narrow by Application
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                Target Manufacturing Applications
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedAppId('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all cursor-pointer ${
                selectedAppId === 'all'
                  ? 'bg-[#E0581E] text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              All Applications ({uniqueProductIds.length})
            </button>

            {industry.applications.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all cursor-pointer ${
                  selectedAppId === app.id
                    ? 'bg-[#E0581E] text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span>{app.name}</span>
                <span className="font-mono text-[10px] ml-1.5 opacity-75">
                  ({app.productIds.length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Relevant Products Grouped Strictly by Supplying Company */}
        <div className="space-y-10">
          <div className="pb-2 border-b border-slate-200">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E0581E] block font-bold">
              // Step 2: Relevant Solutions Grouped by Company
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Verified Formulations & Raw Materials
            </h3>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Products remain strictly owned and distributed by their respective specialized group firms.
            </p>
          </div>

          {OPERATING_FIRMS.filter((firm) => productsByCompany[firm.id]?.length).map((firm) => {
            const firmProducts = productsByCompany[firm.id] || [];

            return (
              <div key={firm.id} className="space-y-4">
                {/* Supplying Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:p-4 rounded-xl bg-slate-100/80 border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-[#E0581E] shrink-0" />
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
                        SUPPLIED BY ENTITY {firm.number}
                      </span>
                      <h4 className="font-display text-base font-bold text-slate-900">
                        {firm.name}
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigateFirm(firm.id)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#E0581E] hover:text-[#D9480F] transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <span>View Full {firm.shortName} Catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Company's Relevant Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {firmProducts.map((product) => {
                    const isSpecsOpen = expandedProductId === product.id;

                    return (
                      <div
                        key={product.id}
                        className="rounded-2xl bg-white border border-slate-200 hover:border-[#E0581E]/40 transition-all duration-200 p-5 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-sm"
                      >
                        <div className="space-y-3">
                          {/* Top Meta: Category + Owning Firm */}
                          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                            <span className="font-mono text-[10.5px] uppercase tracking-wider text-amber-800 font-bold">
                              {product.firmCategoryLabel}
                            </span>
                            <span className="font-mono text-[9.5px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200 font-semibold">
                              {firm.shortName}
                            </span>
                          </div>

                          {/* Product Name & Tagline */}
                          <div>
                            <h5 className="font-display text-lg font-bold text-slate-900 leading-snug">
                              {product.name}
                            </h5>
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
                          <p className="text-xs text-slate-600 font-sans font-normal leading-relaxed">
                            {product.description}
                          </p>

                          {/* Dosage & Packaging */}
                          <div className="space-y-1.5 pt-0.5 font-mono text-xs text-slate-600">
                            {product.dosageOrUsage && (
                              <div className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                                <FlaskConical className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                                <span>
                                  <strong className="text-slate-900">Dosage:</strong>{' '}
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
                          <div className="space-y-1 pt-0.5">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block font-bold">
                              Key Benefits:
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

                          {/* Collapsible Specs */}
                          {isSpecsOpen && product.specifications && (
                            <div className="pt-2 border-t border-slate-100 space-y-1.5 animate-fadeIn">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-amber-800 block font-bold">
                                Technical Specifications:
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

                        {/* Product Actions */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => toggleSpecs(product.id)}
                            className="text-xs font-mono text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer font-semibold"
                          >
                            <span>{isSpecsOpen ? 'Hide Specs' : 'View Specs'}</span>
                            {isSpecsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          <button
                            onClick={() => onOpenRequirementModal(firm.id, product.name)}
                            className="px-3.5 py-1.5 rounded-full bg-[#E0581E] hover:bg-[#D9480F] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer shadow-xs hover:scale-102"
                          >
                            <span>Send Requirement</span>
                            <Send className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustryDetailPage;
