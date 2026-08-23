import { MetricItem } from '../types';

export const COMPANY_PROFILE = {
  name: 'Avighna Speciality Ingredients Pvt Ltd',
  tradeName: 'Avighna Speciality Ingredients',
  shortName: 'Avighna',
  kannadaName: 'ಅವಿಘ್ನ ಸ್ಪೆಷಾಲಿಟಿ ಇಂಗ್ರೀಡಿಯೆಂಟ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್',
  associateEntities: ['Ganesh Inc.', 'Asian Apex & Co.'],
  tagline: 'Create Better Taste. Build Stronger Products.',
  subtagline: 'Premier Partner in Food, Dairy, Beverage & Pharma Raw Materials Across Southern India.',
  establishedYears: '12+ Years of Operational Excellence',
  annualGrowth: '15–20% Annual Growth',
  
  // Executive Contacts
  leadership: [
    {
      name: 'Ashita',
      designation: 'Executive Director & Operations Lead',
      phones: ['+91 94833 89387', '+91 70194 77940', '+91 99169 17517'],
      primaryPhone: '+91 94833 89387',
      primaryPhoneRaw: '9483389387',
      email: 'ashita@ganeshinc.org',
      alternateEmail: 'ashita.ganeshinc@gmail.com',
    },
    {
      name: 'Shashidhar',
      designation: 'Commercial & Technical Sales Lead',
      phones: ['+91 99169 17517', '+91 96867 09673'],
      primaryPhone: '+91 99169 17517',
      primaryPhoneRaw: '9916917517',
      email: 'ask.avighna@gmail.com',
    }
  ],

  // Direct Lines
  phones: {
    primary: '+91 94833 89387',
    primaryRaw: '9483389387',
    secondary: '+91 99169 17517',
    secondaryRaw: '9916917517',
    general: '+91 96867 09673',
    generalRaw: '9686709673',
    support: '+91 70194 77940',
    supportRaw: '7019477940',
  },

  // Emails
  emails: {
    inquiry: 'ask.avighna@gmail.com',
    commercial: 'ashita@ganeshinc.org',
    technical: 'info@asianapex.in',
  },

  // Official Registered Coordinates
  locations: {
    headquarters: {
      label: 'Registered Corporate Office & Formulation Desk',
      address: '#1963/B, BCCHS Layout, Shani Mahatma Temple Street, Raghuvanhalli, Kanakapura Road',
      landmark: 'Near Vajarahalli Metro Station, Thalgatpura',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560109',
      country: 'India',
      fullAddress: '#1963/B, BCCHS Layout, near Vajarahalli Metro Station, Kanakapura Road, Bengaluru, Karnataka 560109',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1963+BCCHS+Layout+Shani+Mahatma+Temple+Street+Raghuvanhalli+Bengaluru+560109',
    },
    manufacturingPlant: {
      label: 'Sodium Percarbonate Manufacturing Unit (Oxycurv Chemicals)',
      location: 'Hubli, Karnataka',
      initiative: 'Make in India Initiative (Commissioned Jan 2021)',
    },
    regionalNetwork: {
      label: 'Southern India Distribution Network',
      coverage: 'Karnataka (Bengaluru, Hubli, Jamkhandi, Bagalkot, Mangaluru), Tamil Nadu, Andhra Pradesh & Telangana',
    }
  },

  // Web Properties
  websites: {
    avighna: 'https://www.avighnagroups.com',
    ganeshInc: 'https://www.ganeshinc.org',
    asianApex: 'https://www.asianapex.in',
  },

  whatsappUrl: 'https://wa.me/919483389387?text=Hello%20Avighna%20Speciality%20Ingredients%20team,%20I%20would%20like%20to%20request%20a%20product%20sample%20and%20technical%20catalog.',
};

export const VERIFIED_METRICS: MetricItem[] = [
  {
    id: 'experience',
    value: '12+',
    label: 'Years of Market Leadership',
    sublabel: 'Dedicated supply & technical formulation support across South India',
    verifiedSource: 'Official Corporate Profile & Brochure',
    category: 'timeline',
  },
  {
    id: 'award',
    value: 'Best Vendor',
    label: 'Awarded by UNILEVER',
    sublabel: 'Prestigious industry recognition for exemplary quality deliverance and supply reliability',
    verifiedSource: 'Unilever Best Vendor Award Recognition',
    category: 'accolade',
  },
  {
    id: 'clients',
    value: '500+',
    label: 'Institutional B2B Deliveries',
    sublabel: 'Supplying leaders including HUL, MTR Foods, Hatsun Agro, ITC & Aditya Milk',
    verifiedSource: 'Institutional Client Portfolio',
    category: 'volume',
  },
  {
    id: 'growth',
    value: '15–20%',
    label: 'Annual Growth Rate',
    sublabel: 'Consistent expansion across Food, Dairy, Pharma & Beverage verticals',
    verifiedSource: 'Verified Financial & Operational Track Record',
    category: 'network',
  },
  {
    id: 'principals',
    value: '10+',
    label: 'Global Multinational Principals',
    sublabel: 'Authorized South India distribution for Döehler, Chr. Hansen, Gujarat Ambuja & Campco',
    verifiedSource: 'Direct MNC Representation Agreements',
    category: 'retention',
  },
];
