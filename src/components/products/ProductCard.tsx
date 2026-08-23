import React, { useState } from 'react';
import { ProductItem } from '../../types';
import { CheckCircle, Package, FlaskConical, ChevronDown, ChevronUp, ArrowUpRight, Download } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onRequestSample: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onRequestSample }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-3xl bg-[#0E1116]/80 backdrop-blur-xl border border-white/10 hover:border-[#E0581E]/40 transition-all duration-500 flex flex-col justify-between p-6 sm:p-7 relative group shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(224,88,30,0.15)]">
      
      {/* Top Header & Badges */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
          <span className="px-3 py-1 rounded-full bg-white/[0.04] text-[#E5B25D] font-mono text-[10.5px] uppercase tracking-wider font-semibold border border-white/10">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="px-3 py-1 rounded-full bg-[#E0581E]/15 text-[#E0581E] font-mono text-[10.5px] uppercase tracking-wider font-bold border border-[#E0581E]/30">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Name & Tagline */}
        <div className="mt-4 space-y-1.5">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F9F8F5] group-hover:text-[#E5B25D] transition-colors leading-snug">
            {product.name}
          </h3>
          {product.brandOrPrincipal && (
            <p className="font-mono text-xs text-[#E0581E] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0581E]" />
              <span>{product.brandOrPrincipal}</span>
            </p>
          )}
          <p className="text-xs sm:text-sm font-sans font-medium text-[#C88E3E] italic pt-1">
            "{product.tagline}"
          </p>
        </div>

        {/* Short Description */}
        <p className="mt-3 text-xs sm:text-sm text-[#F9F8F5]/75 font-sans font-light leading-relaxed">
          {product.description}
        </p>

        {/* Dosage & Packaging Badges in Rounded Glass Chips */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-2 font-mono text-xs text-[#9DA3AF]">
          {product.dosageOrUsage && (
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <FlaskConical className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#F9F8F5]">Dosage / Usage:</strong> {product.dosageOrUsage}
              </span>
            </div>
          )}

          {product.packaging && (
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <Package className="w-3.5 h-3.5 text-[#C88E3E] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#F9F8F5]">Packaging:</strong> {product.packaging}
              </span>
            </div>
          )}
        </div>

        {/* Key Benefits List */}
        <div className="mt-5 space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#F9F8F5]/50 block">
            // Verified Performance Benefits
          </span>
          <ul className="space-y-1.5">
            {product.benefits.slice(0, expanded ? undefined : 3).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#F9F8F5]/85 font-sans">
                <CheckCircle className="w-3.5 h-3.5 text-[#E0581E] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Specifications & Applications */}
        {expanded && (
          <div className="mt-5 pt-4 border-t border-white/[0.08] space-y-4 animate-fadeIn">
            {/* Applications */}
            <div className="space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5B25D] block">
                Target Industrial Applications:
              </span>
              <ul className="list-disc list-inside text-xs text-[#F9F8F5]/70 space-y-1 pl-1">
                {product.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>

            {/* Specifications Table in Rounded Container */}
            {product.specifications && (
              <div className="space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5B25D] block">
                  Technical Specifications:
                </span>
                <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 divide-y divide-white/[0.06]">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="px-3.5 py-2 flex justify-between text-xs font-mono">
                      <span className="text-[#9DA3AF]">{spec.label}</span>
                      <span className="text-[#F9F8F5] font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Action Strip */}
      <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-mono text-[#9DA3AF] hover:text-[#F9F8F5] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>{expanded ? 'Hide Specs' : 'View Full Specs'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <div className="flex items-center gap-2">
          {product.documentDownload && (
            <a
              href={product.documentDownload}
              download
              className="p-2.5 rounded-full text-[#9DA3AF] hover:text-[#E5B25D] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
              title="Download Product PDF"
            >
              <Download className="w-4 h-4" />
            </a>
          )}

          <button
            onClick={() => onRequestSample(product)}
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#E0581E] to-[#F57E25] hover:brightness-110 text-[#070809] font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-[#E0581E]/20 hover:scale-105"
          >
            <span>Request Sample</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
