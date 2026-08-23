import React, { useState } from 'react';
import { VERIFIED_PRODUCTS, INDUSTRY_CATEGORIES } from '../../data/productsData';
import { ProductCard } from './ProductCard';
import { ProductItem } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { Search, Sparkles, Download } from 'lucide-react';

interface ProductCatalogProps {
  onRequestSample: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onRequestSample }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = VERIFIED_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.brandOrPrincipal && product.brandOrPrincipal.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#070809] border-t border-white/[0.08] relative">
      <div className="container-editorial">
        {/* Section Header */}
        <SectionHeader
          label="Formulations & Sourcing // Product Catalog"
          title="Engineered Ingredients. Authentic Flavour."
          kannadaSubtitle="ವಿಶೇಷ ಆಹಾರ ಪದಾರ್ಥಗಳು ಮತ್ತು ರಾಸಾಯನಿಕ ಸೂತ್ರೀಕರಣಗಳು"
          description="Direct manufacturer and institutional distributor for food flavours, frying antioxidants, GAEL starch derivatives, CHR-HANSEN dairy cultures, and pharmacopoeia excipients."
        />

        {/* Filter Toolbar & Search Bar with Fluid Rounded Glass Ergonomics */}
        <div className="mt-10 space-y-4">
          {/* Top Search & Results Counter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 sm:p-4 rounded-3xl bg-[#0E1116]/80 backdrop-blur-xl border border-white/10 shadow-xl">
            {/* Search Input in Pill Container */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-[#9DA3AF] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g., Xtendra, Paneer, Sorbitol, Cocoa)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-black/40 border border-white/10 text-xs font-sans text-[#F9F8F5] placeholder-[#9DA3AF] focus:outline-none focus:border-[#E0581E] transition-all shadow-inner"
              />
            </div>

            {/* Results Counter & Brochure Download Action */}
            <div className="flex items-center justify-between sm:justify-end gap-4 font-mono text-xs text-[#9DA3AF] px-2">
              <span>
                Showing <strong className="text-[#E0581E]">{filteredProducts.length}</strong> of {VERIFIED_PRODUCTS.length} formulations
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
                  ? VERIFIED_PRODUCTS.length
                  : VERIFIED_PRODUCTS.filter((p) => p.category === cat.id).length;

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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRequestSample={onRequestSample}
            />
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProducts.length === 0 && (
          <div className="mt-12 p-12 text-center rounded-3xl bg-[#0E1116]/80 backdrop-blur-xl border border-white/10 space-y-4">
            <Sparkles className="w-8 h-8 text-[#E0581E] mx-auto opacity-60" />
            <h4 className="font-serif text-xl text-[#F9F8F5]">No matching formulations found</h4>
            <p className="text-xs sm:text-sm text-[#9DA3AF] max-w-md mx-auto">
              We engineer custom blends for specific industrial requirements. Contact our technical formulation desk to discuss your customized raw material specification.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-[#E0581E] text-xs font-mono text-[#E0581E] hover:bg-[#E0581E] hover:text-[#070809] transition-all cursor-pointer shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
