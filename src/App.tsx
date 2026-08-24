import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { HeroSection } from './components/hero/HeroSection';
import { PartnerLogosStrip } from './components/common/PartnerLogos';
import { GroupCompaniesSection } from './components/companies/GroupCompaniesSection';
import { FirmDetailPage } from './components/firms/FirmDetailPage';
import { IndustriesSection } from './components/industries/IndustriesSection';
import { IndustryDetailPage } from './components/industries/IndustryDetailPage';
import { CredibilitySection } from './components/trust/CredibilitySection';
import { RequirementSection } from './components/contact/RequirementSection';
import { Footer } from './components/common/Footer';
import { RequirementModal } from './components/common/RequirementModal';
import { CompanyId, IndustryCategory } from './types';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'firm' | 'industry'>('home');
  const [selectedFirmId, setSelectedFirmId] = useState<CompanyId>('avighna');
  const [selectedIndustryId, setSelectedIndustryId] = useState<IndustryCategory>('food-snacks');
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);
  const [modalFirmId, setModalFirmId] = useState<CompanyId>('avighna');
  const [modalProduct, setModalProduct] = useState<string>('');

  // Synchronize with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith('#/companies/')) {
        const firmKey = hash.replace('#/companies/', '') as CompanyId;
        if (['avighna', 'ganesh-inc', 'asian-apex', 'atharva-associates'].includes(firmKey)) {
          setSelectedFirmId(firmKey);
          setCurrentView('firm');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash.startsWith('#/industries/')) {
        const indKey = hash.replace('#/industries/', '') as IndustryCategory;
        if ([
          'food-snacks',
          'dairy-cheese',
          'beverage-confectionery',
          'pharma-nutra',
          'industrial-hygiene',
        ].includes(indKey)) {
          setSelectedIndustryId(indKey);
          setCurrentView('industry');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      setCurrentView('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateHome = () => {
    window.location.hash = '#/';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFirm = (firmId: CompanyId) => {
    window.location.hash = `#/companies/${firmId}`;
    setSelectedFirmId(firmId);
    setCurrentView('firm');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateIndustry = (industryId: IndustryCategory) => {
    window.location.hash = `#/industries/${industryId}`;
    setSelectedIndustryId(industryId);
    setCurrentView('industry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRequirementModal = (firmId?: CompanyId, product?: string) => {
    setModalFirmId(firmId || selectedFirmId || 'avighna');
    setModalProduct(product || '');
    setIsRequirementModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] flex flex-col selection:bg-[#FED7AA] selection:text-[#7C2D12] antialiased">
      {/* Clean Modern B2B Header */}
      <Header
        currentView={currentView === 'industry' ? 'home' : currentView}
        selectedFirmId={selectedFirmId}
        onNavigateHome={handleNavigateHome}
        onNavigateFirm={handleNavigateFirm}
        onOpenRequirementModal={handleOpenRequirementModal}
      />

      {/* Main View Flow */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* Minimal, Confident B2B Hero */}
            <HeroSection
              onExploreCompanies={() => scrollToSection('companies')}
              onSendRequirement={() => scrollToSection('contact')}
            />

            {/* Global Authorized Principals Representation Strip */}
            <div className="border-y border-slate-200/80 bg-white">
              <div className="container-editorial">
                <PartnerLogosStrip />
              </div>
            </div>

            {/* Group Companies Section (The 4 Entities Highlight) */}
            <GroupCompaniesSection onSelectFirm={handleNavigateFirm} />

            {/* Layer 1: Clean, Compact Industry Discovery Section */}
            <IndustriesSection onSelectIndustry={handleNavigateIndustry} />

            {/* Genuine Credibility, Unilever Award & Client Roster */}
            <CredibilitySection />

            {/* Structured B2B Requirement Form */}
            <RequirementSection
              initialFirmId={selectedFirmId}
              initialProduct={modalProduct}
            />
          </>
        )}

        {currentView === 'firm' && (
          /* Dedicated Firm Page & Exclusive Catalogue */
          <FirmDetailPage
            firmId={selectedFirmId}
            onBackToHome={handleNavigateHome}
            onSwitchFirm={handleNavigateFirm}
            onOpenRequirementModal={handleOpenRequirementModal}
          />
        )}

        {currentView === 'industry' && (
          /* Layer 2: Dedicated Industry Solutions Page with Company Grouping */
          <IndustryDetailPage
            industryId={selectedIndustryId}
            onBackToHome={handleNavigateHome}
            onSwitchIndustry={handleNavigateIndustry}
            onNavigateFirm={handleNavigateFirm}
            onOpenRequirementModal={handleOpenRequirementModal}
          />
        )}
      </main>

      {/* Structured Clean Corporate Footer */}
      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateFirm={handleNavigateFirm}
        onOpenRequirementModal={() => handleOpenRequirementModal()}
      />

      {/* Reusable Requirement Modal */}
      <RequirementModal
        isOpen={isRequirementModalOpen}
        onClose={() => setIsRequirementModalOpen(false)}
        initialFirmId={modalFirmId}
        initialProduct={modalProduct}
      />
    </div>
  );
};

export default App;
