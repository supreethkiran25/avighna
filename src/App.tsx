import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { HeroSection } from './components/hero/HeroSection';
import { PartnerLogosStrip } from './components/common/PartnerLogos';
import { ProductCatalog } from './components/products/ProductCatalog';
import { FlyerGallery } from './components/gallery/FlyerGallery';
import { EcosystemSection } from './components/ecosystem/EcosystemSection';
import { TrustSection } from './components/trust/TrustSection';
import { DownloadCenter } from './components/downloads/DownloadCenter';
import { ContactExperience } from './components/contact/ContactExperience';
import { Footer } from './components/common/Footer';
import { SampleModal } from './components/common/SampleModal';
import { ProductItem } from './types';

export const App: React.FC = () => {
  const [inquiryProduct, setInquiryProduct] = useState<string>('');
  const [isSampleModalOpen, setIsSampleModalOpen] = useState<boolean>(false);

  const handleRequestSample = (product?: ProductItem | string) => {
    if (typeof product === 'string') {
      setInquiryProduct(product);
    } else if (product && product.name) {
      setInquiryProduct(product.name);
    }
    setIsSampleModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-[#F9F8F5] flex flex-col selection:bg-[#E0581E] selection:text-[#08090A] antialiased">
      {/* Rebuilt Architectural Navigation Bar */}
      <Header onOpenSampleModal={() => handleRequestSample()} />

      {/* Main Continuous Editorial & Data Flow */}
      <main className="flex-grow">
        {/* Cinematic Hero Section with Ground-Truth Identity */}
        <HeroSection onOpenSampleModal={() => handleRequestSample()} />

        {/* Global Principals Representation Strip */}
        <div className="border-y border-white/[0.06] bg-[#0A0C0E]">
          <div className="container-editorial">
            <PartnerLogosStrip />
          </div>
        </div>

        {/* Interactive Filterable Products & Formulations Catalog */}
        <ProductCatalog onRequestSample={handleRequestSample} />

        {/* Official Product Flyers & Technical Dossier Lightbox Gallery */}
        <FlyerGallery />

        {/* Group Ecosystem (Avighna Speciality, Ganesh Inc., Asian Apex, Atharva Associates) & Principals */}
        <EcosystemSection />

        {/* Institutional Trust, Unilever Best Vendor Award & Client Roster */}
        <TrustSection />

        {/* Official Technical PDF Downloads & Dossiers Center */}
        <DownloadCenter />

        {/* Executive Formulation & Sample Request Desk */}
        <ContactExperience initialService={inquiryProduct} />
      </main>

      {/* Corporate Editorial Footer */}
      <Footer />

      {/* Interactive Formulation Sample Request Modal */}
      <SampleModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        initialProduct={inquiryProduct}
      />
    </div>
  );
};

export default App;
