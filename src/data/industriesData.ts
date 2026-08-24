import { IndustryItem } from '../types';

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'food-snacks',
    title: 'Snack, Savoury & Fried Foods',
    kannadaTitle: 'ತಿಂಡಿ ಮತ್ತು ಕರಿದ ಆಹಾರಗಳು',
    description: 'Advanced solutions to extend frying oil lifetime, curb oil absorption, and deliver signature Indian snack seasonings with superior thermal stability.',
    applications: [
      'Continuous 75L–100L+ snack fryers',
      'Namkeen, sev, bhujia & banana chips',
      'Extruded snacks & pellets',
      'Commercial bakery and doughnut production',
    ],
    keyIngredients: [
      'Xtendra 06 Natural Antioxidants',
      'GAEL Maltodextrin & Dextrose',
      'Custom Savoury Seasonings',
      'Baking-Stable Oleoresins',
    ],
    supplyingFirms: [
      { firmId: 'avighna', firmName: 'Avighna Speciality Ingredients', role: 'Xtendra 06 & Seasonings' },
      { firmId: 'ganesh-inc', firmName: 'M/s. Ganesh Inc.', role: 'GAEL Starch Derivatives' },
      { firmId: 'atharva-associates', firmName: 'Atharva Associates', role: 'Bulk Raw Material Sourcing' },
    ],
  },
  {
    id: 'dairy-cheese',
    title: 'Dairy, Paneer & Cheese Processing',
    kannadaTitle: 'ಡೈರಿ, ಪನೀರ್ ಮತ್ತು ಚೀಸ್ ಸಂಸ್ಕರಣೆ',
    description: 'High-yield bio-coagulants and world-standard freeze-dried DVS bacterial cultures engineered to enhance curd yields and ensure pristine cheese texture.',
    applications: [
      'Commercial & cooperative paneer processing',
      'Dahi, yoghurt, and probiotic curd',
      'Mozzarella, Cheddar & artisanal cheeses',
      'Ice creams and frozen dairy desserts',
    ],
    keyIngredients: [
      'EZENTIAL 4001 High-Yield Coagulants (+18% Yield)',
      'CHR. HANSEN Direct Vat Set (DVS) Cultures',
      'Dairy Rennet Bio-Enzymes',
      'Sorbitol 70% & Liquid Glucose',
    ],
    supplyingFirms: [
      { firmId: 'avighna', firmName: 'Avighna Speciality Ingredients', role: 'EZENTIAL 4001 Coagulant' },
      { firmId: 'ganesh-inc', firmName: 'M/s. Ganesh Inc.', role: 'CHR. HANSEN DVS Cultures' },
    ],
  },
  {
    id: 'beverage-confectionery',
    title: 'Beverage, Bakery & Confectionery',
    kannadaTitle: 'ಪಾನೀಯಗಳು, ಬೇಕರಿ ಮತ್ತು ಮಿಠಾಯಿ',
    description: 'Authentic German flavour compounds, fruit crushes, pure Karnataka cocoa, bake-stable chocolate chips, and industrial syrups.',
    applications: [
      'Ready-to-drink (RTD) beverages & craft breweries',
      'Industrial biscuits, cookies & cakes',
      'Hard-boiled candy, jellies & gums',
      'Ice cream variegates & dipping pastes',
    ],
    keyIngredients: [
      'Döehler German Flavours & Fruit Concentrates',
      'CAMPCO Alkalized Cocoa Powder & Chocolate Slabs',
      'Bake-Stable Chocó Chips & Pastes',
      'Liquid Glucose & Dextrose Monohydrate',
    ],
    supplyingFirms: [
      { firmId: 'ganesh-inc', firmName: 'M/s. Ganesh Inc.', role: 'CAMPCO Cocoa & Döehler Flavours' },
      { firmId: 'avighna', firmName: 'Avighna Speciality Ingredients', role: 'Custom Flavour Systems' },
      { firmId: 'asian-apex', firmName: 'Asian Apex & Co.', role: 'Beverage Acidulants & Citrates' },
    ],
  },
  {
    id: 'pharma-nutra',
    title: 'Pharmaceutical & Nutraceutical',
    kannadaTitle: 'ಔಷಧೀಯ ಮತ್ತು ನ್ಯೂಟ್ರಾಸ್ಯುಟಿಕಲ್',
    description: 'Strictly audited IP, BP, EP, and USP pharmacopoeia-grade excipients, bulk non-crystallizing sweeteners, and active carrier vehicles.',
    applications: [
      'Cough syrups & oral liquid tonics',
      'Oral rehydration salts (ORS) & protein shakes',
      'Tablet granulation & suspension vehicles',
      'Effervescent vitamins & dietary supplements',
    ],
    keyIngredients: [
      'Sorbitol 70% IP Solution',
      'Dextrose Anhydrous IP & Monohydrate',
      'Micro-Encapsulated Active API Flavours',
      'High-Purity Citric Acid & Sodium Citrate',
    ],
    supplyingFirms: [
      { firmId: 'avighna', firmName: 'Avighna Speciality Ingredients', role: 'Pharma Flavouring & Vehicles' },
      { firmId: 'ganesh-inc', firmName: 'M/s. Ganesh Inc.', role: 'GAEL Sorbitol 70% IP & Dextrose IP' },
      { firmId: 'asian-apex', firmName: 'Asian Apex & Co.', role: 'Pure Citric Acid & Citrates' },
    ],
  },
  {
    id: 'industrial-hygiene',
    title: 'Industrial Sanitation & Plant Hygiene',
    kannadaTitle: 'ಕೈಗಾರಿಕಾ ನೈರ್ಮಲ್ಯ ಮತ್ತು ರಾಸಾಯನಿಕಗಳು',
    description: '15-second rapid ATP hygiene verification instruments and Make-in-India active oxygen bleaching compounds for factory audit compliance.',
    applications: [
      'Food & beverage plant CIP validation',
      'Dairy tanker sanitation & swab tests',
      'Commercial detergent & bleach manufacturing',
      'Aquaculture pond oxygenation & water treatment',
    ],
    keyIngredients: [
      'HYGIENA EnSURE ATP Luminometers',
      'MicroSnap Coliform / E.coli Test Kits',
      'Oxycurv Coated Sodium Percarbonate',
      'Food Plant Disinfectants & Citrates',
    ],
    supplyingFirms: [
      { firmId: 'asian-apex', firmName: 'Asian Apex & Co.', role: 'HYGIENA UK ATP Testing' },
      { firmId: 'ganesh-inc', firmName: 'M/s. Ganesh Inc.', role: 'Oxycurv Hubli Percarbonate' },
    ],
  },
];
