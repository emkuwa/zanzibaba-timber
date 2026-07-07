import { TimberSize, Location, ProductVariant, ProductPrice, SheetProductCategory, SheetProduct } from '@/types'

export function sizeToSlug(size: string): string {
  const map: Record<string, string> = {
    'Treated Wood Poles': 'treated-wood-poles',
  }
  return map[size] ?? size.toLowerCase().replace(/\s+/g, '-')
}

export function formatTZS(amount: number): string {
  return `${amount.toLocaleString('en-TZ')} TZS`
}

export function formatSizeName(name: string): string {
  return name.replace(/(\d+)x(\d+)/g, '$1"×$2"')
}

export function formatVariantLabel(v: ProductVariant): string {
  const size = formatSizeName(v.size)
  const length = v.length.replace('ft', "'")
  return `${size}×${length}`
}

export const PRICE_NOTES = [
  'Prices exclude VAT.',
  'Prices exclude transportation.',
  'Delivery is available anywhere in Zanzibar.',
  'FREE delivery is available for qualifying bulk orders.',
] as const

export const PRODUCT_PRICES: ProductPrice[] = [
  // 12ft
  { size: '2x2', length: '12ft', price: 7000 },
  { size: '2x4', length: '12ft', price: 10500 },
  { size: '1x6', length: '12ft', price: 12000 },
  { size: '1x8', length: '12ft', price: 17000 },
  { size: '1x10', length: '12ft', price: 29000 },
  // 18ft
  { size: '2x2', length: '18ft', price: 10500 },
  { size: '2x3', length: '18ft', price: 19000 },
  { size: '2x4', length: '18ft', price: 21000 },
  { size: '2x6', length: '18ft', price: 35000 },
  { size: '2x8', length: '18ft', price: 58000 },
  { size: '1x4', length: '18ft', price: 8000 },
  { size: '1x6', length: '18ft', price: 19000 },
  { size: '1x8', length: '18ft', price: 32000 },
  { size: '1x10', length: '18ft', price: 48000 },
  // Treated Wood Poles (18ft)
  { size: 'Treated Wood Poles', length: '18ft', price: 10500 },
]

export const TIMBER_SIZES: TimberSize[] = [
  { id: 'treated-wood-poles', name: 'Treated Wood Poles', dimensions: '2-6" diameter', popular: true, description: 'Treated Pine Poles 2-6 inch diameter, 18ft length — ideal for construction, fencing, and structural applications' },
  { id: '1x6', name: '1x6', dimensions: '25x150mm', popular: true, description: 'Treated Pine Timber 1x6 — 25x150mm, ideal for roofing, fencing and light framing' },
  { id: '1x8', name: '1x8', dimensions: '25x200mm', popular: true, description: 'Treated Pine Timber 1x8 — 25x200mm, perfect for decking, shelving and joinery' },
  { id: '1x10', name: '1x10', dimensions: '25x250mm', popular: true, description: 'Treated Pine Timber 1x10 — 25x250mm, wide board for cladding and heavy shelving' },
  { id: '2x2', name: '2x2', dimensions: '50x50mm', popular: true, description: 'Treated Pine Timber 2x2 — 50x50mm, structural timber for framing and supports' },
  { id: '2x3', name: '2x3', dimensions: '50x75mm', popular: true, description: 'Treated Pine Timber 2x3 — 50x75mm, robust timber for framing and structural work' },
  { id: '2x4', name: '2x4', dimensions: '50x100mm', popular: true, description: 'Treated Pine Timber 2x4 — 50x100mm, the most popular size for construction framing' },
  { id: '2x6', name: '2x6', dimensions: '50x150mm', popular: true, description: 'Treated Pine Timber 2x6 — 50x150mm, heavy-duty timber for beams and large structures' },
  { id: '2x8', name: '2x8', dimensions: '50x200mm', popular: false, description: 'Treated Pine Timber 2x8 — 50x200mm, extra-heavy timber for large beams and structural applications' },
  { id: '1x4', name: '1x4', dimensions: '25x100mm', popular: false, description: 'Treated Pine Timber 1x4 — 25x100mm, lightweight timber for light framing, battens and furring' },
]

export const SIZE_USE_CASE: Record<string, string> = {
  'Treated Wood Poles': 'Poles, Fencing & Support',
  '2x2': 'Ceilings & Light Framing',
  '2x3': 'Roof Battens & Framing',
  '2x4': 'Roof Trusses & Construction',
  '2x6': 'Heavy Duty Structures',
  '1x6': 'Ceilings & Interior Works',
  '1x8': 'Finishing & Furniture',
  '1x10': 'Premium Joinery & Doors',
  '2x8': 'Heavy Beams & Large Structures',
  '1x4': 'Battens & Light Framing',
}

export const SIZE_USES: Record<string, string[]> = {
  'treated-wood-poles': ['Construction poles', 'Fencing posts', 'Structural supports', 'Landscaping', 'Utility poles'],
  '1x6': ['Roofing battens and purlins', 'Fencing and boundary walls', 'Light framing and partitioning', 'Furniture and shelving', 'Garden structures'],
  '1x8': ['Decking boards and walkways', 'Shelving and storage systems', 'Joinery and cabinet making', 'Cladding and wall lining', 'Signage and display'],
  '1x10': ['Wide decking and platforms', 'Heavy shelving and workbenches', 'Cladding and exterior finishing', 'Counter tops and bench surfaces', 'Cabinet and wardrobe construction'],
  '2x2': ['Wall framing and studwork', 'Furniture frames and supports', 'Garden structures and pergolas', 'Fencing posts and rails', 'General structural supports'],
  '2x3': ['Load-bearing wall framing', 'Roof trusses and rafters', 'Floor joists and supports', 'Structural bracing and ties', 'Heavy-duty shelving frames'],
  '2x4': ['Construction wall framing', 'Roof and ceiling supports', 'Floor framing systems', 'Deck and patio structures', 'General building framework'],
  '2x6': ['Main structural beams', 'Heavy roof trusses', 'Floor joists for large spans', 'Pergola and gazebo beams', 'Commercial construction framing'],
  '2x8': ['Extra-large structural beams', 'Heavy-duty roof trusses', 'Large-span floor joists', 'Commercial and industrial framing', 'Bridge and deck components'],
  '1x4': ['Roofing battens and purlins', 'Furring strips and strapping', 'Light framing and partitioning', 'Paneling and wall lining', 'Crating and packaging'],
}

export const SIZE_FAQ: Record<string, Array<{ question: string; answer: string }>> = {
  'treated-wood-poles': [
    { question: 'What are treated wood poles used for?', answer: 'Treated wood poles (2-6 inch diameter) are used for construction posts, fencing, utility poles, landscaping, and structural supports in Zanzibar.' },
    { question: 'Are treated wood poles available in Zanzibar?', answer: 'Yes, treated wood poles are available in 18ft length at Zanzibaba Timber. We stock diameters from 2 inches to 6 inches.' },
    { question: 'Can I get treated wood poles delivered to my site?', answer: 'Yes, we deliver treated wood poles across all Zanzibar locations including Paje, Nungwi, Stone Town and Kendwa.' },
  ],
  '1x6': [
    { question: 'What is 1x6 pine timber used for?', answer: '1x6 (25x150mm) treated pine timber is commonly used for roofing battens, fencing, light framing, shelving, and garden structures in Zanzibar construction.' },
    { question: 'Is 1x6 timber available in 12ft and 18ft?', answer: 'Yes, 1x6 pine timber is available in both 12ft and 18ft lengths from Zanzibaba Timber.' },
    { question: 'Can I get 1x6 timber delivered to Paje or Nungwi?', answer: 'Yes, we deliver 1x6 treated pine timber to all Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, and across the island.' },
  ],
  '1x8': [
    { question: 'What is 1x8 pine timber used for?', answer: '1x8 (25x200mm) treated pine timber is ideal for decking boards, shelving, joinery, cladding, and cabinet making in Zanzibar construction projects.' },
    { question: 'Is 1x8 timber available in 12ft and 18ft?', answer: 'Yes, 1x8 pine timber is available in both 12ft and 18ft lengths from Zanzibaba Timber. We stock large quantities at our Kwa Ndevu yard.' },
    { question: 'Can I order 1x8 timber for my hotel project?', answer: 'Absolutely. We supply 1x8 treated pine timber to hotels and resorts across Zanzibar including Nungwi, Kendwa, Paje and Kiwengwa.' },
  ],
  '1x10': [
    { question: 'What is 1x10 pine timber used for?', answer: '1x10 (25x250mm) treated pine timber is used for wide decking, heavy shelving, cladding, counter tops, and wardrobe construction in Zanzibar.' },
    { question: 'Is 1x10 timber available in 12ft and 18ft?', answer: 'Yes, 1x10 pine timber is available in both 12ft and 18ft lengths from Zanzibaba Timber. Contact us for custom orders.' },
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
  '2x8': [
    { question: 'What is 2x8 pine timber used for?', answer: '2x8 (50x200mm) treated pine timber is used for extra-large structural beams, heavy-duty roof trusses, large-span floor joists, and commercial/industrial framing projects.' },
    { question: 'Is 2x8 available in 18ft?', answer: 'Yes, 2x8 pine timber is available in 18ft length from Zanzibaba Timber for heavy-duty construction projects.' },
    { question: 'Do you offer wholesale pricing on 2x8 timber?', answer: 'Yes, we offer competitive wholesale pricing on 2x8 and all timber sizes for contractors and large projects across Zanzibar.' },
  ],
  '1x4': [
    { question: 'What is 1x4 pine timber used for?', answer: '1x4 (25x100mm) treated pine timber is used for roofing battens, furring strips, light framing, paneling, and crating applications in Zanzibar construction.' },
    { question: 'Is 1x4 available in 18ft?', answer: 'Yes, 1x4 pine timber is available in 18ft length from Zanzibaba Timber.' },
    { question: 'Can I get 1x4 timber delivered to my site?', answer: 'Yes, we deliver 1x4 treated pine timber across all Zanzibar locations with cash on delivery.' },
  ],
}

export const POLES: ProductVariant[] = [
  { size: '2"', length: '18ft', diameter: '2"', sku: 'POLE-2IN' },
  { size: '3"', length: '18ft', diameter: '3"', sku: 'POLE-3IN' },
  { size: '4"', length: '18ft', diameter: '4"', sku: 'POLE-4IN' },
  { size: '5"', length: '18ft', diameter: '5"', sku: 'POLE-5IN' },
  { size: '6"', length: '18ft', diameter: '6"', sku: 'POLE-6IN' },
]

const PRICE_MAP = new Map(PRODUCT_PRICES.map(p => [`${p.size}|${p.length}`, p.price]))

export const PRODUCT_VARIANTS: ProductVariant[] = [
  // 12ft only - 1x6, 1x8, 1x10
  { size: '1x6', length: '12ft', dimensions: '25x150mm', sku: '1X6-12FT', price: PRICE_MAP.get('1x6|12ft') },
  { size: '1x8', length: '12ft', dimensions: '25x200mm', sku: '1X8-12FT', price: PRICE_MAP.get('1x8|12ft') },
  { size: '1x10', length: '12ft', dimensions: '25x250mm', sku: '1X10-12FT', price: PRICE_MAP.get('1x10|12ft') },
  // both lengths - 2x2, 2x3, 2x4, 2x6
  { size: '2x2', length: '12ft', dimensions: '50x50mm', sku: '2X2-12FT', price: PRICE_MAP.get('2x2|12ft') },
  { size: '2x2', length: '18ft', dimensions: '50x50mm', sku: '2X2-18FT', price: PRICE_MAP.get('2x2|18ft') },
  { size: '2x3', length: '12ft', dimensions: '50x75mm', sku: '2X3-12FT' },
  { size: '2x3', length: '18ft', dimensions: '50x75mm', sku: '2X3-18FT', price: PRICE_MAP.get('2x3|18ft') },
  { size: '2x4', length: '12ft', dimensions: '50x100mm', sku: '2X4-12FT', price: PRICE_MAP.get('2x4|12ft') },
  { size: '2x4', length: '18ft', dimensions: '50x100mm', sku: '2X4-18FT', price: PRICE_MAP.get('2x4|18ft') },
  { size: '2x6', length: '12ft', dimensions: '50x150mm', sku: '2X6-12FT' },
  { size: '2x6', length: '18ft', dimensions: '50x150mm', sku: '2X6-18FT', price: PRICE_MAP.get('2x6|18ft') },
  // 18ft only - 2x8, 1x4
  { size: '2x8', length: '18ft', dimensions: '50x200mm', sku: '2X8-18FT', price: PRICE_MAP.get('2x8|18ft') },
  { size: '1x4', length: '18ft', dimensions: '25x100mm', sku: '1X4-18FT', price: PRICE_MAP.get('1x4|18ft') },
  // 18ft only - 1x6, 1x8, 1x10
  { size: '1x6', length: '18ft', dimensions: '25x150mm', sku: '1X6-18FT', price: PRICE_MAP.get('1x6|18ft') },
  { size: '1x8', length: '18ft', dimensions: '25x200mm', sku: '1X8-18FT', price: PRICE_MAP.get('1x8|18ft') },
  { size: '1x10', length: '18ft', dimensions: '25x250mm', sku: '1X10-18FT', price: PRICE_MAP.get('1x10|18ft') },
  // 18ft only - Treated Wood Poles
  { size: 'Treated Wood Poles', length: '18ft', dimensions: '2-6" diameter', sku: 'POLE-18FT', price: PRICE_MAP.get('Treated Wood Poles|18ft') },
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
  { id: 'chwaka', name: 'Chwaka', slug: 'chwaka', description: 'Treated timber delivery for Chwaka area and surrounding coastal development projects' },
  { id: 'bwejuu', name: 'Bwejuu', slug: 'bwejuu', description: 'Treated timber supply for Bwejuu beach area and east coast construction projects' },
  { id: 'michamvi', name: 'Michamvi', slug: 'michamvi', description: 'Timber delivery for Michamvi and the north-east peninsula development area' },
  { id: 'kizimkazi', name: 'Kizimkazi', slug: 'kizimkazi', description: 'Treated timber for Kizimkazi fishing village and south coast construction projects' },
  { id: 'makunduchi', name: 'Makunduchi', slug: 'makunduchi', description: 'Timber delivery for Makunduchi and the south-east tip of Zanzibar' },
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
  { id: '7', title: 'Mbao Zanzibar: Understanding Local Timber Terms', slug: 'mbao-zanzibar-understanding-local-timber-terms', excerpt: 'A guide to Swahili timber terminology used in Zanzibar\'s construction industry. Learn about mbao, treated wood poles, and more.', date: '2024-05-13', category: 'Guides' },
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

export const PHONE = '+255716002790'
export const WHATSAPP_NUMBER = '255716002790'
export const WHATSAPP_BASE = 'https://wa.me/255716002790'

export const generateWhatsAppLink = (message: string) => 
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

export const SHEET_PRODUCT_CATEGORIES: SheetProductCategory[] = [
  {
    id: 'marine-board',
    name: 'Marine Board',
    slug: 'marine-board',
    description: 'Premium waterproof marine boards for concrete formwork, boat building, and moisture-resistant applications in Zanzibar.',
    shortDescription: 'Waterproof marine-grade boards for construction and formwork',
  },
  {
    id: 'plywood',
    name: 'Plywood',
    slug: 'plywood',
    description: 'High-quality construction plywood in all standard thicknesses for structural, commercial, and residential projects across Zanzibar.',
    shortDescription: 'Construction plywood for structural and commercial use',
  },
]

const TRANSPORT_COST = 1000
const MARGIN = 2000

function calcFinalPrice(supplierPrice: number): number {
  return supplierPrice + TRANSPORT_COST + MARGIN
}

export const SHEET_PRODUCTS: SheetProduct[] = [
  // MARINE BOARD
  {
    id: 'marine-board-18mm',
    categoryId: 'marine-board',
    name: 'Marine Board 18mm',
    slug: '18mm',
    thickness: '18mm',
    supplierPrice: 49000,
    finalPrice: calcFinalPrice(49000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: 'Marine Board 18mm is a premium waterproof plywood sheet designed for heavy-duty applications requiring maximum moisture resistance. Manufactured with marine-grade phenolic resin glue, this 18mm board delivers exceptional strength and durability for concrete formwork, boat construction, and structural projects across Zanzibar. Each sheet measures 4ft x 8ft (1220mm x 2440mm) and is engineered to withstand prolonged exposure to water and humidity without delaminating or losing structural integrity.',
    applications: [
      'Concrete formwork and shuttering',
      'Boat building and marine construction',
      'Outdoor furniture and decking structures',
      'Bathroom and wet area installations',
      'Swimming pool surrounds and liners',
      'Exterior wall cladding and fascia',
      'Industrial flooring and platform construction',
    ],
    features: [
      'Waterproof phenolic resin bond',
      'Marine-grade construction',
      'High structural strength and rigidity',
      'Smooth face for clean concrete finishes',
      'Standard 4ft x 8ft sheet size',
      'Resistant to fungal decay and rot',
      'Suitable for repeated use in formwork',
    ],
    advantages: [
      'Withstands continuous water exposure without delamination',
      'Provides smooth concrete surface finish reducing plastering costs',
      'Can be reused multiple times for formwork saving money',
      'Superior bond strength compared to standard plywood',
      'Meets international marine plywood standards',
      'Ideal for Zanzibar coastal construction conditions',
    ],
    moistureResistance: 'Excellent — Marine Board 18mm is manufactured with waterproof phenolic resin that provides complete moisture resistance. It can be permanently exposed to water and humid conditions without swelling, delaminating, or losing strength. This makes it the ideal choice for Zanzibar\'s tropical coastal climate.',
    suitableProjects: [
      'Commercial building concrete formwork',
      'Residential villa construction shuttering',
      'Marine and boat building projects',
      'Hotel wet area installations',
      'Swimming pool construction',
      'Industrial platform and flooring',
      'Exterior cladding and weather-exposed structures',
    ],
    buyingGuide: 'When purchasing Marine Board 18mm in Zanzibar, consider the specific application requirements. For concrete formwork, the 18mm thickness provides the rigidity needed for large pours and heavy loads. For boat building, this thickness offers the structural integrity required for hull and deck construction. Always verify the resin type — marine boards should use phenolic (waterproof) resin, not urea-formaldehyde. At Zanzibaba Timber, we stock genuine marine-grade boards sourced from certified manufacturers. We deliver across all Zanzibar locations including Paje, Nungwi, Stone Town, and Kendwa.',
    faqs: [
      {
        question: 'What is Marine Board 18mm used for in Zanzibar?',
        answer: 'Marine Board 18mm is primarily used for concrete formwork and shuttering in construction projects across Zanzibar. It is also used for boat building, outdoor furniture, wet area installations, and any application requiring waterproof sheet material. The 18mm thickness provides excellent structural rigidity for heavy-duty applications.',
      },
      {
        question: 'How much does Marine Board 18mm cost in Zanzibar?',
        answer: 'Marine Board 18mm is available at Zanzibaba Timber for TZS 52,000 per sheet. This price includes transport and our service margin. We deliver across all Zanzibar locations. Contact us for bulk order discounts.',
      },
      {
        question: 'Is Marine Board 18mm waterproof?',
        answer: 'Yes, Marine Board 18mm is fully waterproof. It is manufactured with marine-grade phenolic resin glue that bonds the plywood layers permanently. Unlike standard plywood, marine board can be continuously exposed to water without delaminating, swelling, or losing structural integrity.',
      },
      {
        question: 'What is the sheet size for Marine Board 18mm?',
        answer: 'Marine Board 18mm comes in the standard sheet size of 4ft x 8ft (1220mm x 2440mm). This is the most common size for construction formwork and general building applications in Zanzibar.',
      },
      {
        question: 'Can I get Marine Board delivered to my construction site in Zanzibar?',
        answer: 'Yes, Zanzibaba Timber delivers Marine Board 18mm across all Zanzibar locations including Stone Town, Paje, Nungwi, Kendwa, Jambiani, Matemwe, Kiwengwa, Fumba, Chwaka, Kizimkazi, and Makunduchi. We offer cash on delivery and 24-48 hour service for stock items.',
      },
    ],
    seoTitle: 'Marine Board 18mm Zanzibar | Waterproof Marine Plywood | TZS 52,000/Sheet',
    seoDescription: 'Buy Marine Board 18mm in Zanzibar at TZS 52,000 per sheet. Waterproof marine-grade plywood for concrete formwork, boat building, and construction. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['marine board zanzibar', 'marine board price zanzibar', 'marine board supplier zanzibar', 'waterproof marine board zanzibar', 'concrete formwork marine board', '18mm marine board zanzibar', 'marine plywood zanzibar'],
  },
  {
    id: 'marine-board-12mm',
    categoryId: 'marine-board',
    name: 'Marine Board 12mm',
    slug: '12mm',
    thickness: '12mm',
    supplierPrice: 43000,
    finalPrice: calcFinalPrice(43000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: 'Marine Board 12mm is a versatile waterproof plywood sheet offering excellent moisture resistance at a lighter weight. Ideal for applications where the extreme rigidity of 18mm is not required but waterproof performance is essential. Manufactured with marine-grade phenolic resin, this 12mm board is perfect for lighter formwork, interior wet areas, and decorative marine applications across Zanzibar.',
    applications: [
      'Light concrete formwork and shuttering',
      'Interior wall and ceiling paneling',
      'Bathroom and kitchen installations',
      'Furniture making and cabinetry',
      'Signage and display boards',
      'Light-duty marine construction',
      'Temporary structures and partitions',
    ],
    features: [
      'Waterproof phenolic resin construction',
      'Lighter weight than 18mm for easier handling',
      'Smooth surface finish',
      'Standard 4ft x 8ft sheet dimensions',
      'Resistant to moisture and humidity',
      'Easy to cut and fabricate on site',
      'Suitable for repeated formwork use',
    ],
    advantages: [
      'Lighter weight reduces handling costs on site',
      'Lower price point for budget-conscious projects',
      'Versatile thickness for multiple applications',
      'Waterproof performance matching thicker boards',
      'Smooth finish reduces finishing work',
      'Ideal for Zanzibar tropical climate conditions',
    ],
    moistureResistance: 'Very Good — Marine Board 12mm uses waterproof phenolic resin providing excellent moisture resistance. Suitable for wet areas, exterior applications with proper fixing, and formwork where moderate rigidity is sufficient.',
    suitableProjects: [
      'Residential construction formwork',
      'Interior partitioning and paneling',
      'Hotel bathroom installations',
      'Kitchen cabinet construction',
      'Light-duty shelving and storage',
      'Exterior signage and displays',
      'Temporary construction structures',
    ],
    buyingGuide: 'Marine Board 12mm is an excellent choice for lighter-duty applications in Zanzibar construction. While not as rigid as 18mm, it provides the same waterproof performance at a lower cost and weight. Ideal for interior wet areas, lighter formwork panels, and decorative applications. At Zanzibaba Timber, we recommend 12mm for projects where weight and cost are primary considerations while still requiring waterproof performance. We stock genuine marine-grade boards and deliver across all Zanzibar locations.',
    faqs: [
      {
        question: 'What is Marine Board 12mm used for?',
        answer: 'Marine Board 12mm is used for lighter concrete formwork, interior paneling, bathroom and kitchen installations, furniture making, and decorative applications in Zanzibar. It offers waterproof performance at a lighter weight and lower cost than 18mm boards.',
      },
      {
        question: 'How much does Marine Board 12mm cost in Zanzibar?',
        answer: 'Marine Board 12mm is available at Zanzibaba Timber for TZS 46,000 per sheet. This price includes transport. Contact us for bulk pricing and delivery across Zanzibar.',
      },
      {
        question: 'What is the difference between 12mm and 18mm Marine Board?',
        answer: 'The main difference is thickness and rigidity. 18mm provides greater structural strength for heavy formwork loads, while 12mm is lighter and more affordable for lighter applications. Both use the same waterproof phenolic resin and provide excellent moisture resistance.',
      },
    ],
    seoTitle: 'Marine Board 12mm Zanzibar | Waterproof Marine Plywood | TZS 46,000/Sheet',
    seoDescription: 'Buy Marine Board 12mm in Zanzibar at TZS 46,000 per sheet. Waterproof marine-grade plywood for light formwork, interior paneling, and construction. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['marine board 12mm zanzibar', 'marine board price zanzibar', 'waterproof plywood 12mm zanzibar', 'marine board supplier zanzibar'],
  },
  // PLYWOOD
  {
    id: 'plywood-18mm',
    categoryId: 'plywood',
    name: '18mm Plywood',
    slug: '18mm',
    thickness: '18mm',
    supplierPrice: 47000,
    finalPrice: calcFinalPrice(47000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: '18mm Plywood is a robust construction-grade plywood sheet designed for structural applications requiring high strength and rigidity. This thick plywood is ideal for flooring, roofing, concrete formwork, and heavy-duty shelving across Zanzibar. Each 4ft x 8ft sheet provides the structural integrity needed for demanding construction projects while offering excellent value for money.',
    applications: [
      'Structural flooring and subflooring',
      'Roofing and ceiling installations',
      'Concrete formwork and shuttering',
      'Heavy-duty shelving and storage',
      'Workshop benches and work surfaces',
      'Packaging and crating',
      'Exterior wall sheathing',
    ],
    features: [
      'High structural strength and load-bearing capacity',
      'Standard 4ft x 8ft sheet dimensions',
      'Multi-ply construction for durability',
      'Smooth surface for finishing',
      'Suitable for structural applications',
      'Cost-effective building solution',
      'Easy to cut and install on site',
    ],
    advantages: [
      'Provides excellent structural rigidity for flooring and roofing',
      'Cost-effective alternative to solid timber panels',
      'Versatile for structural and finishing applications',
      'Standard sheet size fits all construction requirements',
      'Smooth surface reduces finishing time and costs',
      'Widely available for fast project completion',
    ],
    moistureResistance: 'Moderate — 18mm Plywood provides standard moisture resistance suitable for most indoor and covered outdoor applications. For fully exposed wet conditions, marine board is recommended instead.',
    suitableProjects: [
      'Residential floor and roof construction',
      'Commercial building structural sheathing',
      'Industrial shelving and storage',
      'Hotel and villa construction',
      'Concrete formwork for moderate loads',
      'Workshop and garage flooring',
      'Temporary construction platforms',
    ],
    buyingGuide: 'When purchasing 18mm Plywood in Zanzibar, consider the application carefully. This thickness is ideal for structural flooring, heavy-duty shelving, and formwork where moderate loads are expected. For fully waterproof applications such as boat building or prolonged water exposure, marine board is the better choice. At Zanzibaba Timber, we stock construction-grade 18mm plywood sourced from reputable manufacturers. We deliver across all Zanzibar locations including Paje, Nungwi, Stone Town, Kendwa, and beyond.',
    faqs: [
      {
        question: 'What is 18mm plywood used for in Zanzibar?',
        answer: '18mm plywood is used for structural flooring, roofing, concrete formwork, heavy-duty shelving, workbenches, and wall sheathing in Zanzibar construction projects. It provides excellent strength and rigidity for demanding applications.',
      },
      {
        question: 'How much does 18mm plywood cost in Zanzibar?',
        answer: '18mm plywood is available at Zanzibaba Timber for TZS 50,000 per sheet. This price includes transport and service margin. Contact us for bulk order discounts and delivery scheduling.',
      },
      {
        question: 'Is 18mm plywood waterproof?',
        answer: 'Standard 18mm plywood has moderate moisture resistance suitable for most indoor and covered outdoor applications. For fully waterproof requirements such as concrete formwork with prolonged water contact or marine applications, we recommend our Marine Board products.',
      },
      {
        question: 'What is the standard sheet size for 18mm plywood?',
        answer: '18mm plywood comes in the standard construction sheet size of 4ft x 8ft (1220mm x 2440mm). This is the most widely used size for construction projects in Zanzibar.',
      },
      {
        question: 'Do you deliver plywood to construction sites in Zanzibar?',
        answer: 'Yes, Zanzibaba Timber delivers plywood across all Zanzibar locations. We cover Stone Town, Paje, Nungwi, Kendwa, Jambiani, Matemwe, Kiwengwa, Fumba, Chwaka, Kizimkazi, Makunduchi, and every location across the island.',
      },
    ],
    seoTitle: '18mm Plywood Zanzibar | Construction Plywood | TZS 50,000/Sheet',
    seoDescription: 'Buy 18mm Plywood in Zanzibar at TZS 50,000 per sheet. Construction-grade plywood for flooring, roofing, formwork, and structural applications. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['18mm plywood zanzibar', 'plywood price zanzibar', 'construction plywood zanzibar', 'plywood supplier zanzibar'],
  },
  {
    id: 'plywood-15mm',
    categoryId: 'plywood',
    name: '15mm Plywood',
    slug: '15mm',
    thickness: '15mm',
    supplierPrice: 43000,
    finalPrice: calcFinalPrice(43000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: '15mm Plywood is a mid-range construction plywood sheet offering a balanced combination of strength, weight, and cost-effectiveness. Perfect for wall sheathing, partitioning, ceiling installations, and general construction applications across Zanzibar. This versatile thickness provides sufficient rigidity for most building projects while remaining easy to handle and install.',
    applications: [
      'Wall sheathing and exterior cladding',
      'Interior partitioning and room dividers',
      'Ceiling installations and panels',
      'Light-duty flooring and subflooring',
      'Cabinetry and built-in furniture',
      'Packaging and protective covers',
      'Temporary wall enclosures',
    ],
    features: [
      'Balanced strength-to-weight ratio',
      'Standard 4ft x 8ft sheet dimensions',
      'Multi-ply construction',
      'Smooth working surface',
      'Suitable for wall and ceiling applications',
      'Easy to transport and install',
      'Cost-effective construction solution',
    ],
    advantages: [
      'Ideal balance of strength and weight for wall applications',
      'Easier to handle than thicker plywood sheets',
      'Cost-effective for large-area sheathing projects',
      'Suitable for both structural and decorative use',
      'Standard size fits all construction frames',
      'Versatile across multiple construction applications',
    ],
    moistureResistance: 'Moderate — 15mm Plywood provides standard moisture resistance suitable for covered applications and interior use. Proper sealing is recommended for any moisture-prone areas.',
    suitableProjects: [
      'Residential wall and ceiling construction',
      'Commercial interior fit-out',
      'Hotel room partitioning',
      'Office space division',
      'Retail shop fitting',
      'Temporary construction barriers',
      'Cabinet and furniture making',
    ],
    buyingGuide: '15mm plywood is an excellent all-purpose choice for Zanzibar construction projects. It is thick enough for structural wall sheathing and ceiling installations while being lighter and more affordable than 18mm. For most residential and commercial interior applications, 15mm provides the ideal balance of performance and cost. At Zanzibaba Timber, we recommend 15mm for wall sheathing, partitioning, and ceiling projects. We deliver across all Zanzibar locations.',
    faqs: [
      {
        question: 'What is 15mm plywood used for?',
        answer: '15mm plywood is used for wall sheathing, ceiling installations, interior partitioning, light-duty flooring, and cabinetry in Zanzibar construction projects. It offers a balanced combination of strength and weight.',
      },
      {
        question: 'How much does 15mm plywood cost in Zanzibar?',
        answer: '15mm plywood is available at Zanzibaba Timber for TZS 46,000 per sheet. This price includes transport. We deliver across all Zanzibar locations with cash on delivery available.',
      },
      {
        question: 'Is 15mm plywood strong enough for flooring?',
        answer: 'For light-duty residential flooring with adequate joist spacing, 15mm plywood can be suitable. For heavy-load flooring or commercial applications, we recommend 18mm plywood or marine board for greater structural integrity.',
      },
    ],
    seoTitle: '15mm Plywood Zanzibar | Construction Plywood | TZS 46,000/Sheet',
    seoDescription: 'Buy 15mm Plywood in Zanzibar at TZS 46,000 per sheet. Versatile construction plywood for wall sheathing, ceilings, and partitioning. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['15mm plywood zanzibar', 'plywood price zanzibar', 'construction plywood zanzibar', 'wall sheathing plywood zanzibar'],
  },
  {
    id: 'plywood-12mm',
    categoryId: 'plywood',
    name: '12mm Plywood',
    slug: '12mm',
    thickness: '12mm',
    supplierPrice: 40000,
    finalPrice: calcFinalPrice(40000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: '12mm Plywood is a versatile lightweight plywood sheet ideal for interior applications, furniture making, and decorative projects across Zanzibar. This thinner plywood offers excellent workability and is easy to cut, shape, and install. Perfect for ceiling panels, interior lining, backing boards, and light-duty construction where weight is a consideration.',
    applications: [
      'Interior wall lining and paneling',
      'Ceiling installations and decorative panels',
      'Furniture backing and drawer bottoms',
      'Light-duty shelving and displays',
      'Signage and exhibition boards',
      'Interior door skins and panels',
      'Temporary partitions and screens',
    ],
    features: [
      'Lightweight and easy to handle',
      'Standard 4ft x 8ft sheet dimensions',
      'Smooth finish for decorative use',
      'Easy to cut and fabricate',
      'Multi-ply construction',
      'Affordable construction material',
      'Versatile for multiple applications',
    ],
    advantages: [
      'Lightweight for easy transport and installation',
      'Affordable option for budget-conscious projects',
      'Smooth surface ready for painting or finishing',
      'Easy to work with basic hand tools',
      'Versatile for interior and light-duty applications',
      'Standard sheet size for all construction needs',
    ],
    moistureResistance: 'Limited — 12mm Plywood is suitable for dry interior applications. Not recommended for wet areas or exterior use without additional waterproofing treatment.',
    suitableProjects: [
      'Interior residential lining and paneling',
      'Commercial display and signage',
      'Furniture construction and backing',
      'Retail shop fitting',
      'Exhibition and event structures',
      'Light-duty partitioning',
      'Craft and DIY projects',
    ],
    buyingGuide: '12mm plywood is the go-to choice for interior applications in Zanzibar where weight and cost are primary considerations. It is ideal for furniture backing, ceiling panels, signage, and light-duty shelving. For structural or wet-area applications, consider 15mm or 18mm plywood, or marine board for fully waterproof needs. At Zanzibaba Timber, we stock 12mm plywood for immediate delivery across Zanzibar.',
    faqs: [
      {
        question: 'What is 12mm plywood used for in Zanzibar?',
        answer: '12mm plywood is used for interior wall lining, ceiling panels, furniture backing, light-duty shelving, signage, and decorative applications in Zanzibar. It is lightweight, affordable, and easy to work with.',
      },
      {
        question: 'How much does 12mm plywood cost in Zanzibar?',
        answer: '12mm plywood is available at Zanzibaba Timber for TZS 43,000 per sheet. This price includes transport. We deliver across all Zanzibar locations including Paje, Nungwi, and Stone Town.',
      },
      {
        question: 'Can 12mm plywood be used for flooring?',
        answer: '12mm plywood is generally not recommended for flooring applications as it may not provide sufficient structural support for foot traffic. For flooring, we recommend 18mm plywood or marine board.',
      },
    ],
    seoTitle: '12mm Plywood Zanzibar | Construction Plywood | TZS 43,000/Sheet',
    seoDescription: 'Buy 12mm Plywood in Zanzibar at TZS 43,000 per sheet. Lightweight plywood for interior lining, furniture, and decorative applications. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['12mm plywood zanzibar', 'plywood price zanzibar', 'interior plywood zanzibar', 'lightweight plywood zanzibar'],
  },
  {
    id: 'plywood-9mm',
    categoryId: 'plywood',
    name: '9mm Plywood',
    slug: '9mm',
    thickness: '9mm',
    supplierPrice: 37000,
    finalPrice: calcFinalPrice(37000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: '9mm Plywood is a thin, lightweight plywood sheet designed for interior decorative applications, backing boards, and light-duty construction in Zanzibar. This economical plywood option is perfect for wall linings, cabinet backing, craft projects, and areas where minimal structural load is required. Easy to cut, shape, and install with basic tools.',
    applications: [
      'Interior decorative wall paneling',
      'Cabinet backing and drawer linings',
      'Light-duty display and signage',
      'Craft and hobby projects',
      'Ceiling accent panels',
      'Temporary partitions and covers',
      'Backer board for tiling preparation',
    ],
    features: [
      'Ultra-lightweight construction',
      'Standard 4ft x 8ft sheet dimensions',
      'Smooth surface for finishing',
      'Easy to cut and work with',
      'Multi-ply for durability',
      'Most economical plywood option',
      'Suitable for decorative applications',
    ],
    advantages: [
      'Lightest plywood option for easy handling',
      'Most affordable sheet for budget projects',
      'Perfect for decorative and finishing applications',
      'Easy to cut with basic hand tools',
      'Smooth face for painting or laminating',
      'Ideal for light-duty backing and lining',
    ],
    moistureResistance: 'Limited — 9mm Plywood is intended for dry interior applications only. Not suitable for wet areas or exterior exposure without waterproofing treatment.',
    suitableProjects: [
      'Residential interior decoration',
      'Cabinet and furniture backing',
      'Retail display construction',
      'Exhibition and event panels',
      'Craft and DIY projects',
      'Temporary wall coverings',
      'Light-duty partition backing',
    ],
    buyingGuide: '9mm plywood is the most economical plywood option available at Zanzibaba Timber. It is ideal for decorative applications, backing boards, and light-duty construction where structural strength is not required. For any load-bearing or wet-area applications, consider thicker plywood options or marine board. We deliver 9mm plywood across all Zanzibar locations.',
    faqs: [
      {
        question: 'What is 9mm plywood used for?',
        answer: '9mm plywood is used for interior decorative paneling, cabinet backing, craft projects, signage, and light-duty applications in Zanzibar. It is the most affordable plywood option for non-structural use.',
      },
      {
        question: 'How much does 9mm plywood cost in Zanzibar?',
        answer: '9mm plywood is available at Zanzibaba Timber for TZS 40,000 per sheet. This price includes transport. We offer bulk discounts for large orders.',
      },
    ],
    seoTitle: '9mm Plywood Zanzibar | Lightweight Plywood | TZS 40,000/Sheet',
    seoDescription: 'Buy 9mm Plywood in Zanzibar at TZS 40,000 per sheet. Lightweight plywood for interior decoration, cabinet backing, and craft projects. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['9mm plywood zanzibar', 'plywood price zanzibar', 'lightweight plywood zanzibar', 'interior plywood zanzibar'],
  },
  {
    id: 'plywood-6mm',
    categoryId: 'plywood',
    name: '6mm Plywood',
    slug: '6mm',
    thickness: '6mm',
    supplierPrice: 25000,
    finalPrice: calcFinalPrice(25000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: '6mm Plywood is a thin, flexible plywood sheet ideal for curved applications, decorative linings, and lightweight construction in Zanzibar. This ultra-thin plywood can be bent for curved structures, making it ideal for architectural features, display stands, and craft applications. It is the most affordable plywood option for projects requiring minimal thickness.',
    applications: [
      'Curved architectural features and arches',
      'Decorative wall and ceiling linings',
      'Display stands and exhibition panels',
      'Craft and model-making projects',
      'Light-duty backing boards',
      'Furniture drawer linings',
      'Temporary templates and patterns',
    ],
    features: [
      'Ultra-thin 6mm profile',
      'Flexible for curved applications',
      'Standard 4ft x 8ft sheet dimensions',
      'Lightweight and easy to handle',
      'Smooth working surface',
      'Most affordable plywood option',
      'Easy to cut and shape',
    ],
    advantages: [
      'Can be bent for curved structures and features',
      'Extremely lightweight for easy transport',
      'Most affordable sheet plywood option',
      'Perfect for decorative and craft applications',
      'Easy to work with basic tools',
      'Ideal for architectural detailing',
    ],
    moistureResistance: 'Limited — 6mm Plywood is intended for dry interior decorative applications only. Not suitable for structural use or moisture-prone areas.',
    suitableProjects: [
      'Architectural curved features',
      'Interior decorative installations',
      'Retail and exhibition displays',
      'Craft and artistic projects',
      'Light-duty template and pattern making',
      'Furniture lining and backing',
      'Temporary decorative structures',
    ],
    buyingGuide: '6mm plywood is the thinnest and most affordable plywood available at Zanzibaba Timber. It is perfect for decorative applications, curved architectural features, and craft projects. This is not a structural product — for any load-bearing applications, use 9mm or thicker plywood. We deliver 6mm plywood across Zanzibar.',
    faqs: [
      {
        question: 'What is 6mm plywood used for in Zanzibar?',
        answer: '6mm plywood is used for curved architectural features, decorative linings, display stands, craft projects, and lightweight decorative applications in Zanzibar. Its flexibility allows it to be bent for curved structures.',
      },
      {
        question: 'How much does 6mm plywood cost in Zanzibar?',
        answer: '6mm plywood is available at Zanzibaba Timber for TZS 28,000 per sheet. This is the most affordable plywood option. We deliver across all Zanzibar locations.',
      },
    ],
    seoTitle: '6mm Plywood Zanzibar | Thin Flexible Plywood | TZS 28,000/Sheet',
    seoDescription: 'Buy 6mm Plywood in Zanzibar at TZS 28,000 per sheet. Thin flexible plywood for curved features, decorative linings, and craft projects. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['6mm plywood zanzibar', 'thin plywood zanzibar', 'flexible plywood zanzibar', 'plywood price zanzibar'],
  },
  {
    id: 'plywood-3mm',
    categoryId: 'plywood',
    name: '3mm Plywood',
    slug: '3mm',
    thickness: '3mm',
    supplierPrice: 15000,
    finalPrice: calcFinalPrice(15000),
    sheetSize: '4ft x 8ft (1220mm x 2440mm)',
    description: '3mm Plywood is an ultra-thin plywood sheet designed for delicate craft work, model making, backing boards, and decorative applications in Zanzibar. This is the thinnest plywood available, offering maximum flexibility and the lowest cost per sheet. Ideal for templates, stencils, light-duty display work, and artistic projects.',
    applications: [
      'Model making and prototyping',
      'Template and stencil creation',
      'Delicate craft and art projects',
      'Light-duty backing and lining',
      'Educational and school projects',
      'Decorative overlays and surfaces',
      'Temporary signage and displays',
    ],
    features: [
      'Ultra-thin 3mm profile',
      'Highly flexible and bendable',
      'Standard 4ft x 8ft sheet dimensions',
      'Very lightweight',
      'Smooth surface for detailed work',
      'Lowest cost plywood option',
      'Easy to cut with scissors or knife',
    ],
    advantages: [
      'Extremely affordable for budget projects',
      'Maximum flexibility for curved and detailed work',
      'Ultra-lightweight for easy handling',
      'Perfect for templates, models, and crafts',
      'Easy to cut and shape with basic tools',
      'Ideal for educational and decorative use',
    ],
    moistureResistance: 'Minimal — 3mm Plywood is intended for dry decorative and craft applications only. Not suitable for any structural or moisture-prone use.',
    suitableProjects: [
      'School and educational projects',
      'Craft and artistic installations',
      'Model making and architectural models',
      'Template and pattern creation',
      'Light-duty decorative overlays',
      'Temporary display structures',
      'Prototype development',
    ],
    buyingGuide: '3mm plywood is the thinnest and most affordable plywood available. At Zanzibaba Timber, it is ideal for craft projects, model making, templates, and decorative overlays. This is purely a decorative material — not suitable for any structural application. We deliver 3mm plywood across Zanzibar.',
    faqs: [
      {
        question: 'What is 3mm plywood used for?',
        answer: '3mm plywood is used for model making, craft projects, templates, stencils, decorative overlays, and light-duty backing in Zanzibar. It is the thinnest and most flexible plywood option available.',
      },
      {
        question: 'How much does 3mm plywood cost in Zanzibar?',
        answer: '3mm plywood is available at Zanzibaba Timber for TZS 18,000 per sheet. This is the most affordable plywood product. We deliver across all Zanzibar locations.',
      },
    ],
    seoTitle: '3mm Plywood Zanzibar | Ultra-Thin Craft Plywood | TZS 18,000/Sheet',
    seoDescription: 'Buy 3mm Plywood in Zanzibar at TZS 18,000 per sheet. Ultra-thin plywood for model making, crafts, templates, and decorative applications. 4ft x 8ft sheets. Island-wide delivery.',
    keywords: ['3mm plywood zanzibar', 'thin plywood zanzibar', 'craft plywood zanzibar', 'plywood price zanzibar'],
  },
]

export const SHEET_PRODUCT_FAQ = [
  { question: 'What marine board and plywood products does Zanzibaba Timber stock?', answer: 'Zanzibaba Timber stocks Marine Board in 18mm and 12mm thicknesses, and Plywood in 18mm, 15mm, 12mm, 9mm, 6mm, and 3mm thicknesses. All sheets are standard 4ft x 8ft (1220mm x 2440mm) size. We deliver across all Zanzibar locations.' },
  { question: 'What is the difference between marine board and plywood?', answer: 'Marine board is manufactured with waterproof phenolic resin glue, making it fully waterproof and suitable for continuous water exposure, concrete formwork, and marine construction. Standard plywood uses urea-formaldehyde resin, which provides moderate moisture resistance suitable for interior and covered applications.' },
  { question: 'How are sheet product prices calculated?', answer: 'Our sheet product prices include the supplier cost, transport to Zanzibar (TZS 1,000 per sheet), and Zanzibaba service margin (TZS 2,000 per sheet). The price displayed is the final selling price. Prices exclude VAT.' },
  { question: 'Do you deliver marine board and plywood across Zanzibar?', answer: 'Yes, we deliver marine board and plywood products to every location across Zanzibar including Stone Town, Paje, Nungwi, Kendwa, Jambiani, Matemwe, Kiwengwa, Fumba, Chwaka, Kizimkazi, Makunduchi, and all other areas. Cash on delivery is available.' },
  { question: 'Can I order bulk quantities of marine board or plywood?', answer: 'Yes, we offer bulk order discounts for large quantities. Contact us via WhatsApp or phone for competitive bulk pricing on marine board and plywood products. We handle orders of any size from single sheets to full truckloads.' },
  { question: 'What sheet size do marine board and plywood come in?', answer: 'All marine board and plywood products at Zanzibaba Timber come in the standard construction sheet size of 4ft x 8ft (1220mm x 2440mm). This is the most widely used size for construction projects in Zanzibar.' },
]

export const SEO_KEYWORDS = [
  'timber supplier zanzibar',
  'treated pine timber zanzibar',
  'treated poles zanzibar',
  'treated wood poles zanzibar',
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
  'marine board zanzibar',
  'marine board price zanzibar',
  'marine board supplier zanzibar',
  'waterproof marine board zanzibar',
  'concrete formwork marine board',
  'plywood zanzibar',
  'plywood price zanzibar',
  'construction plywood zanzibar',
  'commercial plywood zanzibar',
  '18mm plywood zanzibar',
  '15mm plywood zanzibar',
  '12mm plywood zanzibar',
]
