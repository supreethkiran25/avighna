import { IndustryItem } from '../types';

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'food-snacks',
    title: 'Snacks & Food Processing',
    shortDescription: 'High-performance frying antioxidants, custom snack seasonings, starch texturizers, and shelf-life extenders.',
    tags: ['Frying', 'Seasoning', 'Texture', 'Shelf Life'],
    applications: [
      {
        id: 'frying-oil',
        name: 'Frying & Oil Life Extension',
        description: 'Antioxidant solutions lowering oil absorption and extending frying bath stability in continuous fryers.',
        productIds: ['xtendra-06'],
      },
      {
        id: 'seasonings-extrudates',
        name: 'Savoury Seasonings & Extrudates',
        description: 'Thermal-stable snack seasoning profiles, sprays, and encapsulated top-note aromas.',
        productIds: ['avighna-flavours-seasonings'],
      },
      {
        id: 'starch-polyols',
        name: 'Starch Texturizers & Polyols',
        description: 'High-purity maltodextrins, liquid glucose, and dextrose for crispness and binding.',
        productIds: ['starch-derivatives'],
      },
    ],
  },
  {
    id: 'dairy-cheese',
    title: 'Dairy',
    shortDescription: 'High-yield paneer bio-coagulants, DVS cheese & yoghurt cultures, and texture stabilizers.',
    tags: ['Coagulation', 'Cultures', 'Texture', 'Frozen Desserts'],
    applications: [
      {
        id: 'paneer-cheese',
        name: 'Paneer & Cheese Coagulation',
        description: 'Advanced bio-coagulants boosting finished paneer yield by 18–20% with superior soft elasticity.',
        productIds: ['ezential-4001'],
      },
      {
        id: 'yoghurt-fermentation',
        name: 'Yoghurt & Cultured Products',
        description: 'Danish freeze-dried DVS direct-vat bacterial cultures for consistent viscosity and flavour.',
        productIds: ['chr-hansen-cultures'],
      },
      {
        id: 'dairy-desserts',
        name: 'Ice Cream & Frozen Desserts',
        description: 'Karnataka alkalized cocoa powder, chocolate dipping pastes, and German dessert fruit flavours.',
        productIds: ['campco-cocoa-chocolate', 'doehler-flavours'],
      },
    ],
  },
  {
    id: 'beverage-confectionery',
    title: 'Beverages, Bakery & Confectionery',
    shortDescription: 'German flavours, fruit concentrates, pure cocoa powders, chocolate slabs, and polyol sweeteners.',
    tags: ['Flavour', 'Cocoa', 'Sweetening', 'Fruit Solutions'],
    applications: [
      {
        id: 'beverages-rtd',
        name: 'RTD Beverages, Juices & Breweries',
        description: 'Natural German flavours, fruit crushes, clouding compounds, and citric acidulants.',
        productIds: ['doehler-flavours', 'asian-apex-pharma-chemicals'],
      },
      {
        id: 'bakery-chocolate',
        name: 'Bakery, Biscuits & Cocoa Compounds',
        description: 'Bake-stable chocolate chips, dark/milk slabs, and heat-resistant baking essences.',
        productIds: ['campco-cocoa-chocolate', 'avighna-flavours-seasonings'],
      },
      {
        id: 'confectionery-sweetening',
        name: 'Confectionery & Sweetening',
        description: 'Liquid glucose, sorbitol 70%, and crystallization-control carbohydrate syrups.',
        productIds: ['starch-derivatives'],
      },
    ],
  },
  {
    id: 'pharma-nutra',
    title: 'Pharmaceutical & Nutraceutical',
    shortDescription: 'Monograph IP/BP excipients, non-crystallizing sweeteners, active API flavours, and vehicle carriers.',
    tags: ['Excipients', 'Sweeteners', 'Flavouring', 'Carriers'],
    applications: [
      {
        id: 'liquid-syrups',
        name: 'Syrups, Suspensions & Liquid Tonics',
        description: 'Pharmacopoeia-grade Sorbitol 70% IP, Dextrose Anhydrous IP, and bitter-masking flavours.',
        productIds: ['starch-derivatives', 'pharma-materials'],
      },
      {
        id: 'solid-excipients',
        name: 'Tablets, ORS & Buffer Citrates',
        description: 'Pure citric acid monohydrate, sodium citrate buffers, and encapsulation vehicles.',
        productIds: ['asian-apex-pharma-chemicals', 'pharma-materials'],
      },
    ],
  },
  {
    id: 'industrial-hygiene',
    title: 'Industrial Sanitation & Hygiene',
    shortDescription: '15-second rapid ATP testing luminometers, pathogen detection kits, and active oxygen sanitizers.',
    tags: ['ATP Testing', 'Microbial Testing', 'Sanitation', 'Water Treatment'],
    applications: [
      {
        id: 'rapid-atp-testing',
        name: 'ATP & Pathogen Surface Testing',
        description: 'Hygiena UK 15-second luminometers and MicroSnap kits for audit-ready plant CIP verification.',
        productIds: ['hygiena-microbial-testing'],
      },
      {
        id: 'bleach-oxygenation',
        name: 'Industrial Sanitation & Bleaching',
        description: 'Make in India high-active coated Sodium Percarbonate (≥13.5% AvOx) for laundry and water care.',
        productIds: ['oxycurv-sodium-percarbonate'],
      },
    ],
  },
];

export const getIndustryById = (id: string): IndustryItem | undefined => {
  return INDUSTRIES_SERVED.find((ind) => ind.id === id);
};
