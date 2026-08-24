import React, { useState } from 'react';
import { VERIFIED_PRODUCTS, INDUSTRY_CATEGORIES, GROUP_COMPANIES } from '../../data/productsData';
import { ProductCard } from './ProductCard';
import { ProductItem, CompanyId } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { CompanyLogo } from '../common/CompanyLogo';
import { Search, Sparkles, Download, Phone, Building2, ArrowRight } from 'lucide-react';

interface ProductCatalogProps {
  onRequestSample: (product: ProductItem | string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onRequestSample }) => {
  const [selectedCompany, setSelectedCompany] = useState<'all' | CompanyId>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCompanyMeta = GROUP_COMPANIES.find((c) => c.id === selectedCompany) || GROUP_COMPANIES[0];

  const filteredProducts = VERIFIED_PRODUCTS.filter((product) => {
    const matchesCompany = selectedCompany === 'all' || product.companyId === selectedCompany;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.brandOrPrincipal && product.brandOrPrincipal.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCompany && matchesCategory && matchesSearch;
  });

  // Calculate product counts per company
  const getCompanyCount = (companyId: 'all' | CompanyId) => {
    if (companyId === 'all') return VERIFIED_PRODUCTS.length;
    return VERIFIED_PRODUCTS.filter((p) => p.companyId === companyId).length;
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#070809] border-t border-white/[0.08] relative">
      {/* Ambient background glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E0581E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E5B25D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="Corporate Formulations & Sourcing // Multi-Firm Catalog"
          title="Four Specialized Entities. Complete Industry Solutions."
          kannadaSubtitle="೪ ಪ್ರತ್ಯೇಕ ಸಂಸ್ಥೆಗಳು — ಸೂಕ್ತ ಉತ್ಪನ್ನವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ"
          description="Select any entity from our group ecosystem to explore their specialized product portfolios, formulations, global principals, and official technical specifications."
        />

        {/* 4-Company Interactive Switcher Deck (Prominent Tabs) */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#E0581E] uppercase tracking-widest flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Select Operating Firm / Portfolio:</span>
            </span>
            <span className="font-mono text-[11px] text-[#9DA3AF]">
              4 Group Entities Available
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {GROUP_COMPANIES.map((company) => {
              const isActive = selectedCompany === company.id;
              const count = getCompanyCount(company.id);

              return (
                <button
                  key={company.id}
                  onClick={() => {
                    setSelectedCompany(company.id);
                    setSelectedCategory('all');
                  }}
                  className={`p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between relative group cursor-pointer ${
                    isActive
                      ? 'bg-[#0E1116] border-[#E0581E] shadow-2xl scale-[1.02] ring-1 ring-[#E0581E]/50'
                      : 'bg-white/[0.02] backdrop-blur-md border-white/[0.08] hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Top Badge & Count */}
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-[9.5px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-[#E0581E] text-[#070809]'
                          : 'bg-white/[0.04] text-[#E5B25D] border border-white/5'
                      }`}
                    >
                      {company.badge}
                    </span>

                    <span className="font-mono text-[10px] text-[#9DA3AF]">
                      {count > 0 ? `${count} Items` : 'Ready'}
                    </span>
                  </div>

                  {/* Company Name & Identity */}
                  <div className="mt-3">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#F9F8F5] group-hover:text-[#E5B25D] transition-colors leading-tight">
                      {company.shortName}
                    </h4>
                    <p className="font-mono text-[10.5px] text-[#9DA3AF] line-clamp-1 mt-1">
                      {company.role}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  <div
                    className={`mt-3 h-1 w-full rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#E0581E]' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Entity Spotlight Banner */}
        <div className="mt-6 p-5 sm:p-6 rounded-3xl bg-[#0E1116]/80 backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start sm:items-center gap-4">
            <CompanyLogo companyId={selectedCompany} size="lg" showText={false} />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F9F8F5]">
                  {activeCompanyMeta.name}
                </h3>
                {activeCompanyMeta.kannadaName && (
                  <span className="font-kannada text-xs text-[#E5B25D]">
                    {activeCompanyMeta.kannadaName}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#F9F8F5]/80 font-sans font-light max-w-2xl">
                {activeCompanyMeta.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 self-end md:self-auto font-mono text-xs">
            <a
              href={`tel:${activeCompanyMeta.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#E0581E] text-[#F9F8F5] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#E0581E]" />
              <span>{activeCompanyMeta.contactPerson}: {activeCompanyMeta.phone}</span>
            </a>
          </div>
        </div>

        {/* Filter Toolbar & Search Bar */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 sm:p-4 rounded-3xl bg-[#0E1116]/80 backdrop-blur-xl border border-white/10 shadow-xl">
            {/* Search Input in Pill Container */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-[#9DA3AF] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g., Xtendra, Paneer, Sorbitol, Cocoa, ATP)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#9DA3AF] focus:outline-none focus:border-[#E0581E] transition-all shadow-inner"
              />
            </div>

            {/* Results Counter & Brochure Download Action */}
            <div className="flex items-center justify-between sm:justify-end gap-4 font-mono text-xs text-[#9DA3AF] px-2">
              <span>
                Showing <strong className="text-[#E0581E]">{filteredProducts.length}</strong> formulations
              </span>
              <a
                href="/assets/Avighna Flyer a4 (4 flyers).pdf"
                download
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#E5B25D] hover:text-[#F9F8F5] hover:bg-white/[0.08] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>All PDF Sheets</span>
              </a>
            </div>
          </div>

          {/* Category Floating Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {INDUSTRY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? (selectedCompany === 'all'
                      ? VERIFIED_PRODUCTS.length
                      : VERIFIED_PRODUCTS.filter((p) => p.companyId === selectedCompany).length)
                  : (selectedCompany === 'all'
                      ? VERIFIED_PRODUCTS.filter((p) => p.category === cat.id).length
                      : VERIFIED_PRODUCTS.filter((p) => p.companyId === selectedCompany && p.category === cat.id).length);

              // Don't render category if count is 0 when a specific company is selected
              if (selectedCompany !== 'all' && count === 0 && cat.id !== 'all') {
                return null;
              }

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E0581E] to-[#F57E25] text-[#070809] font-bold shadow-md shadow-[#E0581E]/30 scale-105'
                      : 'bg-white/[0.03] backdrop-blur-md text-[#F9F8F5]/80 border border-white/[0.08] hover:border-white/20 hover:text-[#F9F8F5] hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-[#070809] text-[#E5B25D]' : 'bg-black/40 text-[#9DA3AF]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestSample={onRequestSample}
              />
            ))}
          </div>
        ) : selectedCompany === 'atharva-associates' ? (
          /* Sleek Branded Placeholder / Open Inquiry State for Atharva Associates */
          <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#0E1116]/80 backdrop-blur-2xl border border-white/10 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981]/20 via-[#059669]/30 to-[#047857]/40 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#34D399] shadow-lg">
              <Building2 className="w-8 h-8" />
            </div>

            <div className="max-w-2xl mx-auto space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#34D399] block font-semibold">
                // Operating Entity Portfolio
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F8F5]">
                Atharva Associates — Product Catalog Under Documentation
              </h4>
              <p className="text-xs sm:text-sm text-[#9DA3AF] font-sans font-light leading-relaxed">
                Atharva Associates handles specialty ingredient aggregation, spot supply trading, and bulk consignments. The full digital product catalog and technical specifications sheet are currently being compiled.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-mono text-[11px] text-[#E5B25D] font-bold block">01. Spot Sourcing</span>
                <p className="text-xs text-[#F9F8F5]/70">Fast procurement of hard-to-source raw materials for commercial kitchens & factories.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-mono text-[11px] text-[#E5B25D] font-bold block">02. Bulk Consignments</span>
                <p className="text-xs text-[#F9F8F5]/70">Direct factory contracts & scheduled monthly deliveries across South India.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-mono text-[11px] text-[#E5B25D] font-bold block">03. Custom Formulations</span>
                <p className="text-xs text-[#F9F8F5]/70">Coordinated formulation development with Avighna Technical Application R&D.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onRequestSample('Atharva Associates Specialty Sourcing Inquiry')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E0581E] to-[#F57E25] hover:brightness-110 text-[#070809] text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E0581E]/30 hover:scale-105 transition-transform"
              >
                <span>Inquire With Atharva Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setSelectedCompany('all');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#F9F8F5] hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                Explore Other Group Entities
              </button>
            </div>
          </div>
        ) : (
          /* General Empty Fallback */
          <div className="mt-12 p-12 text-center rounded-3xl bg-[#0E1116]/80 backdrop-blur-xl border border-white/10 space-y-4">
            <Sparkles className="w-8 h-8 text-[#E0581E] mx-auto opacity-60" />
            <h4 className="font-serif text-xl text-[#F9F8F5]">No matching formulations found in this selection</h4>
            <p className="text-xs sm:text-sm text-[#9DA3AF] max-w-md mx-auto">
              We engineer custom blends for specific industrial requirements. Contact our technical formulation desk to discuss your customized raw material specification.
            </p>
            <button
              onClick={() => {
                setSelectedCompany('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-[#E0581E] text-xs font-mono text-[#E0581E] hover:bg-[#E0581E] hover:text-[#070809] transition-all cursor-pointer shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
