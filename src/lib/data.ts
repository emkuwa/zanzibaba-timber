import { TimberSize, Location, ProductVariant, HardwoodProduct } from '@/types'
export { PHONE, WHATSAPP_NUMBER, WHATSAPP_BASE, generateWhatsAppLink } from '@/lib/contact'

const HARDWOOD_VARIANTS = [
  { size: '2x6x8' as const, buyingPrice: 80000, margin: 15000, sellingPrice: 95000 },
  { size: '2x8x8' as const, buyingPrice: 135000, margin: 15000, sellingPrice: 150000 },
  { size: '4x4x8' as const, buyingPrice: 135000, margin: 15000, sellingPrice: 150000 },
]

export const HARDWOOD_PRODUCTS: HardwoodProduct[] = [
  {
    id: 'mninga', slug: 'mninga-hardwood-timber-zanzibar', name: 'Mninga', botanicalName: 'Pterocarpus angolensis',
    description: 'Premium East African hardwood valued for its warm colour, attractive grain and dependable strength.',
    metaTitle: 'Mninga Hardwood Timber Zanzibar | Sizes & Prices',
    metaDescription: 'Buy Mninga hardwood timber in Zanzibar in 2x6x8, 2x8x8 and 4x4x8 sizes from TZS 95,000. Quality timber for doors, furniture and joinery with island-wide delivery.',
    imageAlt: 'Stacked Mninga hardwood timber for furniture and joinery in Zanzibar',
    features: ['Durable and strong', 'Attractive natural grain', 'Machines and finishes well', 'Suitable for quality joinery'],
    uses: ['Doors and frames', 'Furniture', 'Cabinetry', 'Stairs and interior joinery'],
    image: '/images/products/mninga-hardwood-timber-zanzibar.jpg',
    faq: [
      { question: 'What is Mninga hardwood used for?', answer: 'Mninga hardwood is ideal for doors, frames, furniture, cabinetry, stairs and detailed interior joinery.' },
      { question: 'What Mninga timber sizes are available?', answer: 'Zanzibaba Timber supplies Mninga in 2x6x8, 2x8x8 and 4x4x8 sizes.' },
      { question: 'How much does Mninga timber cost in Zanzibar?', answer: 'Mninga prices start at TZS 95,000 for 2x6x8. The 2x8x8 and 4x4x8 sizes are TZS 150,000 each.' },
      { question: 'Can Mninga hardwood be delivered across Zanzibar?', answer: 'Yes. We arrange delivery of Mninga hardwood to construction sites, workshops, hotels and homes across Zanzibar.' },
    ],
    variants: HARDWOOD_VARIANTS.map(v => ({ ...v, sku: `MNINGA-${v.size.toUpperCase()}` })),
  },
  {
    id: 'mvule', slug: 'mvule-hardwood-timber-zanzibar', name: 'Mvule', botanicalName: 'Milicia excelsa',
    description: 'Dense, naturally durable African hardwood suited to demanding construction and architectural applications.',
    metaTitle: 'Mvule Hardwood Timber Zanzibar | Sizes & Prices',
    metaDescription: 'Buy durable Mvule hardwood timber in Zanzibar in 2x6x8, 2x8x8 and 4x4x8 sizes from TZS 95,000. Ideal for beams, decking, doors and windows.',
    imageAlt: 'Premium Mvule hardwood timber inspected for construction use in Zanzibar',
    features: ['High natural durability', 'Termite resistant', 'Excellent structural strength', 'Stable in tropical conditions'],
    uses: ['Structural beams', 'Doors and windows', 'Decking', 'Heavy-duty furniture'],
    image: '/images/products/mvule-hardwood-timber-zanzibar.jpg',
    faq: [
      { question: 'What is Mvule hardwood used for?', answer: 'Mvule is suitable for structural beams, doors, windows, decking and heavy-duty furniture because it is strong and naturally durable.' },
      { question: 'What Mvule timber sizes are available?', answer: 'Zanzibaba Timber supplies Mvule in 2x6x8, 2x8x8 and 4x4x8 sizes.' },
      { question: 'How much does Mvule timber cost in Zanzibar?', answer: 'Mvule prices start at TZS 95,000 for 2x6x8. The 2x8x8 and 4x4x8 sizes are TZS 150,000 each.' },
      { question: 'Is Mvule suitable for outdoor projects?', answer: 'Yes. Its natural durability and stability make Mvule a strong option for decking and demanding tropical applications when detailed and maintained correctly.' },
    ],
    variants: HARDWOOD_VARIANTS.map(v => ({ ...v, sku: `MVULE-${v.size.toUpperCase()}` })),
  },
  {
    id: 'mkongo', slug: 'mkongo-hardwood-timber-zanzibar', name: 'Mkongo', botanicalName: 'Afzelia quanzensis',
    description: 'Heavy premium hardwood known for strength, stability and long service life in interior and exterior work.',
    metaTitle: 'Mkongo Hardwood Timber Zanzibar | Sizes & Prices',
    metaDescription: 'Buy strong Mkongo hardwood timber in Zanzibar in 2x6x8, 2x8x8 and 4x4x8 sizes from TZS 95,000. Premium wood for flooring, decking, doors and furniture.',
    imageAlt: 'Mkongo hardwood timber prepared for flooring and structural joinery in Zanzibar',
    features: ['Very strong and hard-wearing', 'Excellent dimensional stability', 'Rich natural appearance', 'Long service life'],
    uses: ['Flooring and decking', 'Doors', 'Fine furniture', 'Structural and marine joinery'],
    image: '/images/products/mkongo-hardwood-timber-zanzibar.jpg',
    faq: [
      { question: 'What is Mkongo hardwood used for?', answer: 'Mkongo is used for flooring, decking, doors, fine furniture, structural work and marine joinery.' },
      { question: 'What Mkongo timber sizes are available?', answer: 'Zanzibaba Timber supplies Mkongo in 2x6x8, 2x8x8 and 4x4x8 sizes.' },
      { question: 'How much does Mkongo timber cost in Zanzibar?', answer: 'Mkongo prices start at TZS 95,000 for 2x6x8. The 2x8x8 and 4x4x8 sizes are TZS 150,000 each.' },
      { question: 'Why choose Mkongo hardwood?', answer: 'Mkongo offers excellent strength, dimensional stability, a rich natural appearance and a long service life.' },
    ],
    variants: HARDWOOD_VARIANTS.map(v => ({ ...v, sku: `MKONGO-${v.size.toUpperCase()}` })),
  },
]

export const TIMBER_SIZES: TimberSize[] = [
  { id: 'mirunda', name: 'Mirunda', dimensions: '2-6" diameter', popular: true, description: 'Treated Pine Poles 2-6 inch diameter, 18ft length — ideal for construction, fencing, and structural applications' },
  { id: '1x6', name: '1x6', dimensions: '25x150mm', popular: true, description: 'Treated Pine Timber 1x6 — 25x150mm, ideal for roofing, fencing and light framing' },
  { id: '1x8', name: '1x8', dimensions: '25x200mm', popular: true, description: 'Treated Pine Timber 1x8 — 25x200mm, perfect for decking, shelving and joinery' },
  { id: '1x10', name: '1x10', dimensions: '25x250mm', popular: true, description: 'Treated Pine Timber 1x10 — 25x250mm, wide board for cladding and heavy shelving' },
  { id: '2x2', name: '2x2', dimensions: '50x50mm', popular: true, description: 'Treated Pine Timber 2x2 — 50x50mm, structural timber for framing and supports' },
  { id: '2x3', name: '2x3', dimensions: '50x75mm', popular: true, description: 'Treated Pine Timber 2x3 — 50x75mm, robust timber for framing and structural work' },
  { id: '2x4', name: '2x4', dimensions: '50x100mm', popular: true, description: 'Treated Pine Timber 2x4 — 50x100mm, the most popular size for construction framing' },
  { id: '2x6', name: '2x6', dimensions: '50x150mm', popular: true, description: 'Treated Pine Timber 2x6 — 50x150mm, heavy-duty timber for beams and large structures' },
]

export const SIZE_USES: Record<string, string[]> = {
  'mirunda': ['Construction poles', 'Fencing posts', 'Structural supports', 'Landscaping', 'Utility poles'],
  '1x6': ['Roofing battens and purlins', 'Fencing and boundary walls', 'Light framing and partitioning', 'Furniture and shelving', 'Garden structures'],
  '1x8': ['Decking boards and walkways', 'Shelving and storage systems', 'Joinery and cabinet making', 'Cladding and wall lining', 'Signage and display'],
  '1x10': ['Wide decking and platforms', 'Heavy shelving and workbenches', 'Cladding and exterior finishing', 'Counter tops and bench surfaces', 'Cabinet and wardrobe construction'],
  '2x2': ['Wall framing and studwork', 'Furniture frames and supports', 'Garden structures and pergolas', 'Fencing posts and rails', 'General structural supports'],
  '2x3': ['Load-bearing wall framing', 'Roof trusses and rafters', 'Floor joists and supports', 'Structural bracing and ties', 'Heavy-duty shelving frames'],
  '2x4': ['Construction wall framing', 'Roof and ceiling supports', 'Floor framing systems', 'Deck and patio structures', 'General building framework'],
  '2x6': ['Main structural beams', 'Heavy roof trusses', 'Floor joists for large spans', 'Pergola and gazebo beams', 'Commercial construction framing'],
}

export const SIZE_FAQ: Record<string, Array<{ question: string; answer: string }>> = {
  'mirunda': [
    { question: 'What are Mirunda treated poles used for?', answer: 'Mirunda (2-6 inch diameter) treated poles are used for construction posts, fencing, utility poles, landscaping, and structural supports in Zanzibar.' },
    { question: 'Are Mirunda poles available in Zanzibar?', answer: 'Yes, Mirunda treated poles are available in 18ft length at Zanzibaba Timber. We stock diameters from 2 inches to 6 inches.' },
    { question: 'Can I get Mirunda poles delivered to my site?', answer: 'Yes, we deliver Mirunda treated poles across all Zanzibar locations including Paje, Nungwi, Stone Town and Kendwa.' },
  ],
  '1x6': [
    { question: 'What is 1x6 pine timber used for?', answer: '1x6 (25x150mm) treated pine timber is commonly used for roofing battens, fencing, light framing, shelving, and garden structures in Zanzibar construction.' },
    { question: 'Is 1x6 timber available in 12ft and 18ft?', answer: '1x6 pine timber is available in 12ft length only from Zanzibaba Timber. Contact us for special size requirements.' },
    { question: 'Can I get 1x6 timber delivered to Paje or Nungwi?', answer: 'Yes, we deliver 1x6 treated pine timber to all Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, and across the island.' },
  ],
  '1x8': [
    { question: 'What is 1x8 pine timber used for?', answer: '1x8 (25x200mm) treated pine timber is ideal for decking boards, shelving, joinery, cladding, and cabinet making in Zanzibar construction projects.' },
    { question: 'Is 1x8 timber available in 12ft and 18ft?', answer: '1x8 pine timber is available in 12ft length only from Zanzibaba Timber. We stock large quantities at our Kwa Ndevu yard.' },
    { question: 'Can I order 1x8 timber for my hotel project?', answer: 'Absolutely. We supply 1x8 treated pine timber to hotels and resorts across Zanzibar including Nungwi, Kendwa, Paje and Kiwengwa.' },
  ],
  '1x10': [
    { question: 'What is 1x10 pine timber used for?', answer: '1x10 (25x250mm) treated pine timber is used for wide decking, heavy shelving, cladding, counter tops, and wardrobe construction in Zanzibar.' },
    { question: 'Is 1x10 timber available in 12ft and 18ft?', answer: '1x10 pine timber is available in 12ft length only from Zanzibaba Timber. Contact us for custom orders.' },
    { question: 'Do you deliver 1x10 timber to Stone Town?', answer: 'Yes, we deliver 1x10 treated pine timber to Stone Town, historical restoration projects, and all areas of Zanzibar with cash on delivery.' },
  ],
  '2x2': [
    { question: 'What is 2x2 pine timber used for?', answer: '2x2 (50x50mm) treated pine timber is used for wall framing, furniture frames, garden structures, pergolas, fencing posts and general supports.' },
    { question: 'Is 2x2 available in both 12ft and 18ft?', answer: 'Yes, 2x2 pine timber is available in both 12ft and 18ft lengths from Zanzibaba Timber, giving you flexibility for your project.' },
    { question: 'Can I get 2x2 timber for my residential project?', answer: 'Yes, we supply 2x2 treated pine timber for residential construction across all Zanzibar locations. Cash on delivery available.' },
  ],
  '2x3': [
    { question: 'What is 2x3 pine timber used for?', answer: '2x3 (50x75mm) treated pine timber is used for load-bearing wall framing, roof trusses, floor joists, structural bracing, and heavy shelving.' },
    { question: 'Is 2x3 available in both 12ft and 18ft?', answer: 'Yes, 2x3 pine timber is available in both 12ft and 18ft lengths from Zanzibaba Timber for all construction needs.' },
    { question: 'Do you offer wholesale pricing on 2x3 timber?', answer: 'Yes, we offer competitive wholesale pricing on 2x3 and all timber sizes for contractors, hotels, and bulk orders across Zanzibar.' },
  ],
  '2x4': [
    { question: 'What is 2x4 pine timber used for?', answer: '2x4 (50x100mm) is the most popular construction timber size. Used for wall framing, roof supports, floor framing, deck structures, and general building framework.' },
    { question: 'Is 2x4 available in 12ft and 18ft?', answer: 'Yes, 2x4 pine timber is our most popular size and is available in both 12ft and 18ft lengths with large stock always available.' },
    { question: 'How much does 2x4 timber cost in Zanzibar?', answer: 'Contact Zanzibaba Timber for current 2x4 pricing. We offer competitive rates for all quantities with delivery across Zanzibar.' },
  ],
  '2x6': [
    { question: 'What is 2x6 pine timber used for?', answer: '2x6 (50x150mm) treated pine timber is used for main structural beams, heavy roof trusses, large-span floor joists, pergola beams, and commercial framing.' },
    { question: 'Is 2x6 available in both 12ft and 18ft?', answer: 'Yes, 2x6 pine timber is available in both 12ft and 18ft lengths from Zanzibaba Timber for heavy-duty construction projects.' },
    { question: 'Do you supply 2x6 timber for government projects?', answer: 'Yes, we supply 2x6 and all timber sizes for government and commercial construction projects across Zanzibar including schools and hospitals.' },
  ],
}

export const POLES: ProductVariant[] = [
  { size: '2"', length: '18ft', diameter: '2"', sku: 'POLE-2IN' },
  { size: '3"', length: '18ft', diameter: '3"', sku: 'POLE-3IN' },
  { size: '4"', length: '18ft', diameter: '4"', sku: 'POLE-4IN' },
  { size: '5"', length: '18ft', diameter: '5"', sku: 'POLE-5IN' },
  { size: '6"', length: '18ft', diameter: '6"', sku: 'POLE-6IN' },
]

export const PRODUCT_VARIANTS: ProductVariant[] = [
  // 12ft only - 1x6, 1x8, 1x10
  { size: '1x6', length: '12ft', dimensions: '25x150mm', sku: '1X6-12FT' },
  { size: '1x8', length: '12ft', dimensions: '25x200mm', sku: '1X8-12FT' },
  { size: '1x10', length: '12ft', dimensions: '25x250mm', sku: '1X10-12FT' },
  // both lengths - 2x2, 2x3, 2x4, 2x6
  { size: '2x2', length: '12ft', dimensions: '50x50mm', sku: '2X2-12FT' },
  { size: '2x2', length: '18ft', dimensions: '50x50mm', sku: '2X2-18FT' },
  { size: '2x3', length: '12ft', dimensions: '50x75mm', sku: '2X3-12FT' },
  { size: '2x3', length: '18ft', dimensions: '50x75mm', sku: '2X3-18FT' },
  { size: '2x4', length: '12ft', dimensions: '50x100mm', sku: '2X4-12FT' },
  { size: '2x4', length: '18ft', dimensions: '50x100mm', sku: '2X4-18FT' },
  { size: '2x6', length: '12ft', dimensions: '50x150mm', sku: '2X6-12FT' },
  { size: '2x6', length: '18ft', dimensions: '50x150mm', sku: '2X6-18FT' },
  // 18ft only - Mirunda
  { size: 'Mirunda', length: '18ft', dimensions: '2-6" diameter', sku: 'MIRUNDA-18FT' },
]

export const LOCATIONS: Location[] = [
  { id: 'paje', name: 'Paje', slug: 'paje', description: 'Premium treated timber delivery to Paje beach and resort area — the heart of Zanzibar\'s east coast tourism' },
  { id: 'nungwi', name: 'Nungwi', slug: 'nungwi', description: 'Treated timber for Nungwi hotels and resorts — Zanzibar\'s premier beach destination at the northern tip' },
  { id: 'kendwa', name: 'Kendwa', slug: 'kendwa', description: 'Quality treated timber for Kendwa luxury developments and beachfront villas on the north-west coast' },
  { id: 'kiwengwa', name: 'Kiwengwa', slug: 'kiwengwa', description: 'Treated timber for Kiwengwa beach properties and resort construction on Zanzibar\'s north-east coast' },
  { id: 'matemwe', name: 'Matemwe', slug: 'matemwe', description: 'Treated timber supply Matemwe North East Zanzibar for resorts, villas and residential projects' },
  { id: 'jambiani', name: 'Jambiani', slug: 'jambiani', description: 'Treated timber for Jambiani beachfront projects and community construction on the south-east coast' },
  { id: 'stone-town', name: 'Stone Town', slug: 'stone-town', description: 'Historical restoration with treated timber — supplying Stone Town\'s heritage buildings and urban projects' },
  { id: 'fumba', name: 'Fumba', slug: 'fumba', description: 'Treated timber for Fumba peninsula development and new construction projects in south-west Zanzibar' },
  { id: 'chukwani', name: 'Chukwani', slug: 'chukwani', description: 'Treated timber supply for Chukwani area and surrounding residential developments' },
  { id: 'bububu', name: 'Bububu', slug: 'bububu', description: 'Treated timber delivery for Bububu and the north-west coastal strip development corridor' },
  { id: 'ndevu', name: 'Ndevu', slug: 'ndevu', description: 'Kwa Ndevu, Daraja Bovu — our main timber yard location and central Zanzibar distribution hub' },
]

export const INDUSTRIES = [
  { id: 'hotel-supply', name: 'Hotel & Resort Supply', slug: 'hotel-supply', description: 'Bulk timber supply for Zanzibar\'s hospitality sector', image: '/images/gallery/hotel-project-zanzibar.jpg' },
  { id: 'villa-supply', name: 'Villa Construction', slug: 'villa-supply', description: 'Premium timber for luxury villa developments', image: '/images/gallery/villa-construction-zanzibar.jpg' },
  { id: 'government-supply', name: 'Government Projects', slug: 'government-supply', description: 'Timber for schools, hospitals and public works', image: '/images/gallery/government-construction-project.jpg' },
  { id: 'wholesale', name: 'Wholesale Supply', slug: 'wholesale', description: 'Bulk and wholesale timber for contractors', image: '/images/gallery/timber-loading-truck.jpg' },
  { id: 'delivery', name: 'Delivery Service', slug: 'delivery', description: 'Fast timber delivery across all Zanzibar', image: '/images/gallery/timber-delivery-zanzibar.jpg' },
]

export const HOMEPAGE_FAQ = [
  { question: 'What timber sizes are available in Zanzibar?', answer: 'Zanzibaba Timber stocks premium treated pine timber in sizes 1x6 (25x150mm), 1x8 (25x200mm), 1x10 (25x250mm), 2x2 (50x50mm), 2x3 (50x75mm), 2x4 (50x100mm), and 2x6 (50x150mm). Sizes 1x6, 1x8, and 1x10 are available in 12ft lengths. Sizes 2x2, 2x3, 2x4, and 2x6 are available in both 12ft and 18ft lengths. We also stock treated poles from 2 inches to 6 inches diameter in 18ft lengths.' },
  { question: 'Do you deliver timber across Zanzibar?', answer: 'Yes, we deliver high quality treated pine timber to every corner of Zanzibar including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu, and Ndevu. We offer cash on delivery and aim for 24-48 hour delivery for stock items.' },
  { question: 'What is treated pine timber?', answer: 'Treated pine timber is pine wood that has been chemically treated to resist termites, rot, fungi, and weather damage. At Zanzibaba Timber, all our pine timber is professionally treated and kiln-dried to withstand Zanzibar\'s tropical climate, making it ideal for construction, decking, fencing, and structural applications.' },
  { question: 'How much does timber cost in Zanzibar?', answer: 'Timber prices in Zanzibar vary by size, length, and quantity. Contact Zanzibaba Timber directly for current pricing on all sizes. We offer competitive rates and bulk discounts for contractors, hotels, and large projects. Special sizes available on request.' },
  { question: 'Do you offer cash on delivery?', answer: 'Yes, we offer cash on delivery for timber orders across all Zanzibar locations. You only pay when your timber arrives at your site, giving you complete peace of mind and convenience.' },
  { question: 'Can I order custom timber sizes?', answer: 'Yes, special sizes are available. Contact Zanzibaba Timber with your requirements and we will source or cut timber to your specifications. We accommodate custom orders for hotels, villas, and unique construction projects.' },
  { question: 'What is the delivery time for timber in Zanzibar?', answer: 'For stock items, delivery is typically within 24-48 hours across Zanzibar. Larger orders may require additional processing time. Contact us to confirm availability and schedule your delivery.' },
  { question: 'Do you supply timber for government projects?', answer: 'Yes, we are an experienced supplier for government and commercial construction projects across Zanzibar including schools, healthcare facilities, government offices, and public buildings. We handle large-scale orders with competitive pricing.' },
  { question: 'What is mbao in Swahili?', answer: 'Mbao is the Swahili word for timber or wood. When customers search for "mbao Zanzibar" or "mbao za pine Zanzibar", they are looking for quality timber suppliers in Zanzibar. Zanzibaba Timber is a leading provider of mbao treated pine for construction across the island.' },
  { question: 'Where is Zanzibaba Timber located?', answer: 'Our main timber yard is located at Kwa Ndevu, Daraja Bovu, Zanzibar. We welcome customers to visit our yard to inspect timber quality and stock availability. We serve all areas of Zanzibar with reliable delivery.' },
]

export const DELIVERY_PROCESS = [
  { step: 1, title: 'Contact Us', description: 'Reach out via WhatsApp, phone, or our quote form with your timber requirements — sizes, lengths, and quantities.' },
  { step: 2, title: 'Get a Quote', description: 'We respond within 30 minutes with competitive pricing. Bulk discounts available for large orders.' },
  { step: 3, title: 'Order Confirmed', description: 'Confirm your order and choose your delivery date. We coordinate with your project schedule.' },
  { step: 4, title: 'Quality Check', description: 'Your timber is inspected for quality, loaded carefully, and prepared for transport from our Kwa Ndevu yard.' },
  { step: 5, title: 'Delivery & Payment', description: 'We deliver across Zanzibar with cash on delivery. You inspect and pay when your timber arrives.' },
]

export const TESTIMONIALS = [
  {
    name: 'Ali Hassan',
    role: 'Contractor, Nungwi',
    text: 'Zanzibaba Timber has been our go-to supplier for over 3 years. The quality of their treated pine is consistently excellent, and their delivery to Nungwi is always on time.',
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Hotel Owner, Paje',
    text: 'We used Zanzibaba Timber for our entire beachfront hotel construction. The 2x4 and 2x6 treated pine has held up beautifully against the coastal elements.',
    rating: 5,
  },
  {
    name: 'Juma Mwinyi',
    role: 'Project Manager, Stone Town',
    text: 'For our government school project, Zanzibaba Timber delivered on time and within budget. Their bulk pricing made a significant difference for our project.',
    rating: 5,
  },
  {
    name: 'Emma Richardson',
    role: 'Villa Developer, Kendwa',
    text: 'The timber quality is outstanding. We specified Zanzibaba Timber for our luxury villa development and the results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Bakari Othman',
    role: 'Wholesale Buyer, Zanzibar',
    text: 'I\'ve been buying wholesale timber from Zanzibaba for my hardware shop for 2 years. Competitive prices, consistent quality, and reliable delivery every time.',
    rating: 5,
  },
]

export const BLOG_POSTS = [
  { id: '1', title: 'Complete Guide to Treated Pine Timber in Zanzibar', slug: 'complete-guide-treated-pine-timber-zanzibar', excerpt: 'Everything you need to know about buying and using treated pine timber for construction in Zanzibar\'s tropical climate.', date: '2024-06-01', category: 'Guides' },
  { id: '2', title: 'Timber Prices in Zanzibar 2024: What You Need to Know', slug: 'timber-prices-zanzibar-2024', excerpt: 'Current market rates for pine timber in Zanzibar. Factors affecting pricing and how to get the best value for your construction project.', date: '2024-05-28', category: 'Pricing' },
  { id: '3', title: 'Building a Beachfront Villa in Zanzibar: Timber Guide', slug: 'building-beachfront-villa-zanzibar-timber-guide', excerpt: 'Essential timber considerations for beachfront villa construction in Zanzibar. Species, treatment, and maintenance tips.', date: '2024-05-25', category: 'Construction' },
  { id: '4', title: 'Why Treated Pine is Best for Zanzibar Construction', slug: 'why-treated-pine-best-zanzibar-construction', excerpt: 'Discover why treated pine timber is the preferred choice for construction across Zanzibar\'s unique tropical environment.', date: '2024-05-22', category: 'Guides' },
  { id: '5', title: 'Hotel Construction Timber: A Guide for Zanzibar Developers', slug: 'hotel-construction-timber-zanzibar-developers', excerpt: 'Comprehensive guide for hotel developers on selecting the right timber for Zanzibar hospitality projects.', date: '2024-05-19', category: 'Hotels' },
  { id: '6', title: 'Timber Delivery Zanzibar: What to Expect', slug: 'timber-delivery-zanzibar-expect', excerpt: 'Everything about timber delivery across Zanzibar. Timelines, costs, cash on delivery, and how to prepare for your timber shipment.', date: '2024-05-16', category: 'Delivery' },
  { id: '7', title: 'Mbao Zanzibar: Understanding Local Timber Terms', slug: 'mbao-zanzibar-understanding-local-timber-terms', excerpt: 'A guide to Swahili timber terminology used in Zanzibar\'s construction industry. Learn about mbao, mirunda, and more.', date: '2024-05-13', category: 'Guides' },
  { id: '8', title: 'Paje Construction Boom: Timber Supply Guide', slug: 'paje-construction-timber-supply', excerpt: 'How Paje\'s rapid development is driving timber demand and what contractors need to know about supply in this growing area.', date: '2024-05-10', category: 'Locations' },
  { id: '9', title: 'Nungwi Resort Development: Timber Requirements', slug: 'nungwi-resort-timber-requirements', excerpt: 'Understanding the timber needs for Nungwi\'s expanding resort and hospitality sector. Sizes, quantities, and delivery logistics.', date: '2024-05-07', category: 'Locations' },
  { id: '10', title: 'Roofing Timber Zanzibar: Sizes and Specifications', slug: 'roofing-timber-zanzibar-sizes-specifications', excerpt: 'Complete guide to roofing timber in Zanzibar. Standard sizes, load requirements, and treated pine options for roof construction.', date: '2024-05-04', category: 'Construction' },
  { id: '11', title: 'Timber Treatment Process: How Pine Is Protected', slug: 'timber-treatment-process-pine-protected', excerpt: 'Understanding how pine timber is treated for durability in tropical climates. Pressure treatment, kiln drying, and quality standards.', date: '2024-05-01', category: 'Guides' },
  { id: '12', title: 'Contractor Timber Supply Zanzibar: Bulk Buying Guide', slug: 'contractor-timber-supply-zanzibar-bulk-guide', excerpt: 'How contractors can optimize timber purchasing in Zanzibar. Bulk discounts, delivery scheduling, and project planning.', date: '2024-04-28', category: 'Contractors' },
  { id: '13', title: 'Kendwa Luxury Villa Timber: Selection Guide', slug: 'kendwa-luxury-villa-timber-selection', excerpt: 'Selecting the right timber for Kendwa\'s luxury villa market. Quality standards, aesthetic considerations, and supplier selection.', date: '2024-04-25', category: 'Locations' },
  { id: '14', title: 'Government Timber Supply Zanzibar: Procurement Guide', slug: 'government-timber-supply-zanzibar-procurement', excerpt: 'Guide for government agencies procuring timber in Zanzibar. Tender requirements, bulk ordering, and compliance standards.', date: '2024-04-22', category: 'Government' },
  { id: '15', title: 'Timber for Schools: Zanzibar Education Infrastructure', slug: 'timber-schools-zanzibar-education-infrastructure', excerpt: 'How timber is used in Zanzibar\'s school construction projects. Sizes, treatment requirements, and supply chain considerations.', date: '2024-04-19', category: 'Government' },
  { id: '16', title: 'Kiwengwa Beach Resort Construction Timber', slug: 'kiwengwa-beach-resort-construction-timber', excerpt: 'Timber requirements for Kiwengwa\'s growing beach resort sector. What developers need to know about supply and delivery.', date: '2024-04-16', category: 'Locations' },
  { id: '17', title: 'Matemwe Development: Timber Supply for North East', slug: 'matemwe-timber-supply-north-east', excerpt: 'Timber supply solutions for Matemwe and North East Zanzibar. Logistics, delivery times, and stock availability for remote areas.', date: '2024-04-13', category: 'Locations' },
  { id: '18', title: 'Jambiani Construction: Community Building Guide', slug: 'jambiani-construction-community-building', excerpt: 'Timber for Jambiani community and residential construction. Local building practices, material choices, and supply considerations.', date: '2024-04-10', category: 'Locations' },
  { id: '19', title: 'Stone Town Heritage Restoration: Timber Guide', slug: 'stone-town-heritage-restoration-timber-guide', excerpt: 'Special timber considerations for Stone Town\'s historic building restoration. Traditional materials and modern treated alternatives.', date: '2024-04-07', category: 'Locations' },
  { id: '20', title: '2x4 Timber Zanzibar: The Most Popular Size Explained', slug: '2x4-timber-zanzibar-popular-size', excerpt: 'Why 2x4 timber is the most popular construction size in Zanzibar. Applications, availability, and pricing guide.', date: '2024-04-04', category: 'Sizes' },
  { id: '21', title: 'Timber Framing Zanzibar: Techniques and Materials', slug: 'timber-framing-zanzibar-techniques-materials', excerpt: 'Modern timber framing techniques suitable for Zanzibar construction. Material selection, joint types, and structural considerations.', date: '2024-04-01', category: 'Construction' },
  { id: '22', title: 'Cash on Delivery Timber Zanzibar: How It Works', slug: 'cash-on-delivery-timber-zanzibar', excerpt: 'Everything about cash on delivery timber purchasing in Zanzibar. Benefits, process, and tips for a smooth transaction.', date: '2024-03-29', category: 'Delivery' },
  { id: '23', title: 'Wholesale Timber Zanzibar: Contractor Pricing Guide', slug: 'wholesale-timber-zanzibar-contractor-pricing', excerpt: 'Wholesale timber pricing guide for Zanzibar contractors. Volume discounts, minimum orders, and how to maximize value.', date: '2024-03-26', category: 'Contractors' },
  { id: '24', title: 'Decking Timber Zanzibar: Best Materials for Outdoors', slug: 'decking-timber-zanzibar-best-materials', excerpt: 'Best timber options for outdoor decking in Zanzibar. Treated pine options, maintenance, and durability considerations.', date: '2024-03-23', category: 'Construction' },
  { id: '25', title: 'Fencing Timber Zanzibar: Permanent and Temporary', slug: 'fencing-timber-zanzibar-permanent-temporary', excerpt: 'Timber fencing solutions for Zanzibar properties. Permanent boundaries, temporary site fencing, and agricultural applications.', date: '2024-03-20', category: 'Construction' },
  { id: '26', title: '1x6 Pine Timber Uses in Zanzibar Construction', slug: '1x6-pine-timber-uses-zanzibar-construction', excerpt: 'Versatile applications of 1x6 treated pine timber in Zanzibar building projects. From roofing to shelving.', date: '2024-03-17', category: 'Sizes' },
  { id: '27', title: '2x6 Timber: Heavy-Duty Construction in Zanzibar', slug: '2x6-timber-heavy-duty-construction', excerpt: 'When and where to use 2x6 timber in Zanzibar construction. Beam specifications, load-bearing applications, and availability.', date: '2024-03-14', category: 'Sizes' },
  { id: '28', title: 'Construction Timber Sizes Zanzibar: Complete Reference', slug: 'construction-timber-sizes-zanzibar-reference', excerpt: 'Complete reference guide to all standard construction timber sizes available in Zanzibar. Dimensions, uses, and stock information.', date: '2024-03-11', category: 'Sizes' },
  { id: '29', title: 'Timber Supplier Zanzibar: How to Choose the Right One', slug: 'timber-supplier-zanzibar-choose-right', excerpt: 'Key factors to consider when selecting a timber supplier in Zanzibar. Quality, pricing, delivery, and reliability.', date: '2024-03-08', category: 'Guides' },
  { id: '30', title: 'Sustainable Timber Sourcing in Zanzibar', slug: 'sustainable-timber-sourcing-zanzibar', excerpt: 'How Zanzibar\'s timber industry is moving toward sustainable sourcing. What it means for construction and the environment.', date: '2024-03-05', category: 'Guides' },
  { id: '31', title: 'Timber Storage Tips for Zanzibar Climate', slug: 'timber-storage-tips-zanzibar-climate', excerpt: 'Proper timber storage techniques for Zanzibar\'s humid tropical climate. Preventing warping, mold, and pest damage.', date: '2024-03-02', category: 'Guides' },
  { id: '32', title: 'Building Permits Zanzibar: Timber Construction Rules', slug: 'building-permits-zanzibar-timber-rules', excerpt: 'Understanding building permit requirements for timber construction in Zanzibar. Regulations, inspections, and compliance.', date: '2024-02-28', category: 'Guides' },
  { id: '33', title: 'Fumba Peninsula Development: Timber Supply Solutions', slug: 'fumba-peninsula-timber-supply-solutions', excerpt: 'Timber supply for the rapidly developing Fumba peninsula. Logistics, delivery routes, and project planning for builders.', date: '2024-02-25', category: 'Locations' },
  { id: '34', title: 'Bububu Construction: Timber for Coastal Development', slug: 'bububu-construction-timber-coastal', excerpt: 'Timber requirements for the Bububu coastal development corridor. Supply chain and delivery considerations for this growing area.', date: '2024-02-22', category: 'Locations' },
  { id: '35', title: 'Chukwani Residential Timber: Home Building Guide', slug: 'chukwani-residential-timber-home-building', excerpt: 'Timber guide for residential construction in Chukwani. Popular sizes, quantities needed, and delivery information.', date: '2024-02-19', category: 'Locations' },
  { id: '36', title: 'Hospital Timber Supply: Zanzibar Healthcare Projects', slug: 'hospital-timber-supply-zanzibar-healthcare', excerpt: 'Timber requirements for healthcare facility construction in Zanzibar. Specifications, volumes, and procurement for hospital projects.', date: '2024-02-16', category: 'Government' },
  { id: '37', title: 'Timber Treatment Standards in Tanzania', slug: 'timber-treatment-standards-tanzania', excerpt: 'Understanding timber treatment standards and certifications in Tanzania. What to look for when buying treated pine.', date: '2024-02-13', category: 'Guides' },
  { id: '38', title: 'Pergola Construction Zanzibar: Timber Guide', slug: 'pergola-construction-zanzibar-timber-guide', excerpt: 'Building timber pergolas in Zanzibar. Design ideas, material selection, and construction tips for outdoor structures.', date: '2024-02-10', category: 'Construction' },
  { id: '39', title: 'Timber for Construction: Pine vs Hardwood in Zanzibar', slug: 'timber-pine-vs-hardwood-zanzibar', excerpt: 'Comparing pine timber and hardwood for Zanzibar construction. Cost, durability, and application differences explained.', date: '2024-02-07', category: 'Guides' },
  { id: '40', title: 'Bulk Timber Orders Zanzibar: Volume Planning Guide', slug: 'bulk-timber-orders-zanzibar-planning', excerpt: 'How to plan and execute bulk timber orders in Zanzibar. Quantity estimation, delivery scheduling, and cost optimization.', date: '2024-02-04', category: 'Contractors' },
  { id: '41', title: 'Timber for Roof Trusses: Zanzibar Engineering Guide', slug: 'timber-roof-trusses-zanzibar-engineering', excerpt: 'Engineering considerations for timber roof trusses in Zanzibar. Load calculations, timber sizes, and construction methods.', date: '2024-02-01', category: 'Construction' },
  { id: '42', title: 'Ndevu Timber Yard: Zanzibar\'s Central Timber Hub', slug: 'ndevu-timber-yard-zanzibar-hub', excerpt: 'Why Kwa Ndevu has become Zanzibar\'s central timber yard location. Accessibility, stock capacity, and distribution advantages.', date: '2024-01-29', category: 'Locations' },
  { id: '43', title: 'Timber Measurement Guide: How Much Do You Need?', slug: 'timber-measurement-guide-how-much', excerpt: 'Practical guide to calculating timber quantities for Zanzibar construction projects. Formulas, examples, and planning tips.', date: '2024-01-26', category: 'Guides' },
  { id: '44', title: 'Construction Site Timber Management in Zanzibar', slug: 'construction-site-timber-management', excerpt: 'Best practices for managing timber on Zanzibar construction sites. Storage, security, and waste reduction strategies.', date: '2024-01-23', category: 'Contractors' },
  { id: '45', title: 'Timber for Hospitality: Zanzibar Resort Construction', slug: 'timber-hospitality-zanzibar-resort-construction', excerpt: 'Specialized timber solutions for Zanzibar\'s hospitality and resort construction sector. Quality standards and bulk supply.', date: '2024-01-20', category: 'Hotels' },
  { id: '46', title: 'Restoration Timber: Traditional Zanzibar Architecture', slug: 'restoration-timber-traditional-zanzibar-architecture', excerpt: 'Timber for restoring traditional Zanzibar architecture. Authentic materials, modern treated alternatives, and heritage considerations.', date: '2024-01-17', category: 'Construction' },
  { id: '47', title: 'Timber Pricing Trends in Zanzibar 2024', slug: 'timber-pricing-trends-zanzibar-2024', excerpt: 'Analysis of timber pricing trends in Zanzibar for 2024. Market factors, seasonal variations, and forecasting for buyers.', date: '2024-01-14', category: 'Pricing' },
  { id: '48', title: 'Construction Material Supply Chain Zanzibar', slug: 'construction-material-supply-chain-zanzibar', excerpt: 'Understanding Zanzibar\'s construction material supply chain. How timber gets from mainland Tanzania to your project site.', date: '2024-01-11', category: 'Guides' },
  { id: '49', title: 'Timber Quality Checklist for Zanzibar Buyers', slug: 'timber-quality-checklist-zanzibar-buyers', excerpt: 'Essential quality checklist for buying timber in Zanzibar. What to inspect, questions to ask, and red flags to watch for.', date: '2024-01-08', category: 'Guides' },
  { id: '50', title: 'Future of Timber Construction in Zanzibar', slug: 'future-timber-construction-zanzibar', excerpt: 'Trends and innovations shaping the future of timber construction in Zanzibar. Sustainable building and modern techniques.', date: '2024-01-05', category: 'Guides' },
]

export const SEO_KEYWORDS = [
  'timber supplier zanzibar',
  'treated pine timber zanzibar',
  'treated poles zanzibar',
  'mirunda zanzibar',
  'construction timber zanzibar',
  'timber prices zanzibar',
  'timber delivery zanzibar',
  'treated timber nungwi',
  'treated timber paje',
  'pole supplier zanzibar',
  'pine timber zanzibar',
  'mbao zanzibar',
  'mbao za pine zanzibar',
  'building materials zanzibar',
  'wood supplier zanzibar',
  'timber yard zanzibar',
  'contractor timber zanzibar',
  'wholesale timber zanzibar',
]
