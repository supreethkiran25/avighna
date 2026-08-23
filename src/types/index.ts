export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  verifiedSource: string;
  category: 'timeline' | 'volume' | 'network' | 'accolade' | 'retention';
}

export type IndustryCategory = 
  | 'food-processing'
  | 'dairy-icecream'
  | 'beverage-drinks'
  | 'fried-foods'
  | 'pharma-nutra'
  | 'industrial-hygiene';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brandOrPrincipal?: string;
  category: IndustryCategory;
  categoryLabel: string;
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

export interface EcosystemDivision {
  id: string;
  number: string;
  name: string;
  shortName: string;
  kannadaName?: string;
  role: string;
  description: string;
  establishedInfo?: string;
  imageUrl: string;
  keyOfferings: string[];
  principalsOrPartners: string[];
  badge: string;
  contactPerson?: string;
  phone?: string;
}

export interface GlobalPrincipal {
  id: string;
  name: string;
  origin: string;
  role: string;
  productsSupplied: string[];
  accreditation?: string;
  badge?: string;
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
  roleOrContext: string;
  organization?: string;
  rating: number;
  source: string;
  date: string;
  quote: string;
  highlightTag: string;
}

export interface DownloadableDoc {
  id: string;
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
