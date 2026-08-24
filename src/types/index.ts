export type CompanyId = 'avighna' | 'ganesh-inc' | 'asian-apex' | 'atharva-associates';

export type IndustryCategory = 
  | 'food-snacks'
  | 'dairy-cheese'
  | 'beverage-confectionery'
  | 'pharma-nutra'
  | 'industrial-hygiene';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  companyId: CompanyId;
  name: string;
  brandOrPrincipal?: string;
  firmCategoryId: string;
  firmCategoryLabel: string;
  industryCategory: IndustryCategory;
  industryCategoryLabel: string;
  tagline: string;
  description: string;
  dosageOrUsage?: string;
  packaging?: string;
  benefits: string[];
  applications: string[];
  specifications?: ProductSpecification[];
  featured?: boolean;
  badge?: string;
  imageUrl?: string;
  documentDownload?: string;
}

export interface FirmCategory {
  id: string;
  label: string;
  description?: string;
}

export interface OperatingFirm {
  id: CompanyId;
  number: string;
  name: string;
  shortName: string;
  legalName: string;
  kannadaName?: string;
  badge: string;
  tagline: string;
  role: string;
  description: string;
  establishedInfo: string;
  primaryCategories: string[];
  firmCategories: FirmCategory[];
  principalsOrPartners: string[];
  contactPerson: string;
  phones: string[];
  primaryPhone: string;
  primaryPhoneRaw: string;
  email: string;
  hasActiveCatalogue: boolean;
  brochurePdf?: string;
}

export interface IndustrySubApplication {
  id: string;
  name: string;
  description: string;
  productIds: string[];
}

export interface IndustryItem {
  id: IndustryCategory;
  title: string;
  shortDescription: string;
  tags: string[];
  applications: IndustrySubApplication[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  verifiedSource: string;
  category: 'timeline' | 'volume' | 'network' | 'accolade' | 'retention';
}

export interface ClientPartner {
  id: string;
  name: string;
  category: string;
  relationship: string;
  highlight?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  organization: string;
  roleOrContext: string;
  rating: number;
  source: string;
  date: string;
  quote: string;
  highlightTag: string;
}

export interface DownloadableDoc {
  id: string;
  firmId?: CompanyId | 'all';
  title: string;
  category: string;
  description: string;
  fileSize: string;
  format: 'PDF';
  fileName: string;
  fileUrl: string;
  previewImage?: string;
  pageCount: number;
}
