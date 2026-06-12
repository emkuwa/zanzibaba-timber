import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Image from 'next/image'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, TIMBER_SIZES, LOCATIONS, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Timber Zanzibar | Treated Pine Timber Supplier | Mbao Zanzibar',
  'Timber Zanzibar: Zanzibaba Timber is the leading supplier of premium treated pine timber, mbao za pine, and construction timber across Zanzibar. Island-wide delivery with cash on delivery. Quality timber for contractors, hotels, villas and government projects.',
  'en',
  '/timber-zanzibar'
)

const faq = [
  { question: 'What is Timber Zanzibar?', answer: 'Timber Zanzibar refers to the supply of quality treated pine timber, mbao za pine, and construction timber available across Zanzibar island. Zanzibaba Timber is the leading Timber Zanzibar supplier, offering premium treated pine in all standard sizes with island-wide delivery and cash on delivery.' },
  { question: 'Where can I buy Timber in Zanzibar?', answer: 'Zanzibaba Timber at Kwa Ndevu, Daraja Bovu, is the premier Timber Zanzibar supplier. We stock all standard sizes from 1x6 to 2x6 in 12ft and 18ft lengths, plus treated poles. Visit our yard or order via WhatsApp for delivery across the island.' },
  { question: 'What does Mbao Zanzibar mean?', answer: 'Mbao is the Swahili word for timber or wood. Mbao Zanzibar refers to timber and wood products available in Zanzibar. At Zanzibaba Timber, we supply high quality Mbao Zanzibar including treated pine timber, mbao za pine, and construction timber for all building projects.' },
  { question: 'Do you deliver timber across Zanzibar?', answer: 'Yes, we deliver Timber Zanzibar to every location including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu, and Ndevu. 24-48 hour delivery with cash on delivery.' },
  { question: 'What timber sizes are available in Zanzibar?', answer: 'We stock all standard Timber Zanzibar sizes: 1x6 (25x150mm), 1x8 (25x200mm), 1x10 (25x250mm), 2x2 (50x50mm), 2x3 (50x75mm), 2x4 (50x100mm), and 2x6 (50x150mm). Available in 12ft and 18ft lengths. Treated poles 2-6 inch diameter also in stock.' },
  { question: 'How much does Timber cost in Zanzibar?', answer: 'Timber prices in Zanzibar vary by size, length, and quantity. Contact Zanzibaba Timber for current pricing on all Timber Zanzibar products. We offer competitive rates and bulk discounts for contractors, hotels, and large projects.' },
]

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Timber Zanzibar', url: '/timber-zanzibar' },
])

export default function TimberZanzibarPage() {
  const ft18Variants = PRODUCT_VARIANTS.filter(v => v.length === '18ft')
  const ft12Variants = PRODUCT_VARIANTS.filter(v => v.length === '12ft')

  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Timber Zanzibar</span>
            </nav>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Timber Zanzibar</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                Zanzibaba Timber is the leading <strong>Timber Zanzibar</strong> supplier, providing premium treated pine timber, 
                <strong> mbao za pine</strong>, construction timber, and treated poles across the island. Whether you are a contractor 
                building in Nungwi, a hotel developer in Paje, or a homeowner in Stone Town, we deliver quality 
                <strong> Timber Zanzibar</strong> with cash on delivery and island-wide service.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber, I need timber in Zanzibar. Please share your price list and delivery options.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Get Timber Price List
                </a>
                <a
                  href="tel:+255716002790"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Call +255 716 002 790
                </a>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
              <Image
                src="/images/gallery/zanzibaba-timber-hero-banner.jpg"
                alt="Timber Zanzibar - premium treated pine timber supply at Zanzibaba Timber yard"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl md:text-2xl font-bold">Timber Zanzibar — Quality Treated Pine Since 2010</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto prose dark:prose-invert">
              <h2>Why Choose Zanzibaba Timber for Your Timber Zanzibar Needs</h2>
              <p>
                When you search for <strong>Timber Zanzibar</strong>, you are looking for a reliable supplier who can deliver quality 
                treated pine timber to your project site. Zanzibaba Timber has been serving Zanzibar since 2010, building a reputation 
                for consistent quality, competitive pricing, and reliable delivery. Our <strong>Timber Zanzibar</strong> inventory 
                includes all standard sizes of treated pine timber, treated poles, and specialized construction timber for every type 
                of project.
              </p>
              <p>
                As a leading <strong>Timber Supplier Zanzibar</strong>, we understand the unique challenges of construction in Zanzibar's 
                tropical climate. Our pine timber is professionally treated and kiln-dried to resist termites, rot, and weather damage — 
                ensuring your <strong>Pine Timber Zanzibar</strong> lasts for years. Every piece of <strong>Treated Timber Zanzibar</strong> 
                that leaves our Kwa Ndevu yard is quality inspected before delivery.
              </p>

              <h2>Timber Sizes Available in Zanzibar</h2>
              <p>
                We stock the most comprehensive range of <strong>Timber Zanzibar</strong> sizes on the island. All timber is premium 
                treated pine, kiln-dried, and ready for construction.
              </p>
            </div>

            <div className="mb-8 mt-6">
              <h3 className="text-xl font-bold mb-4">18ft Timber Sizes</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {ft18Variants.map((v) => (
                  <Link
                    key={v.sku}
                    href={`/timber-sizes/${v.size === 'Treated Wood Poles' ? 'treated-wood-poles' : v.size.toLowerCase()}?length=${v.length}`}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all bg-white dark:bg-gray-800"
                  >
                    <div className="text-lg font-bold text-primary-600">{v.size}</div>
                    <div className="text-sm text-gray-500">18ft</div>
                    <div className="text-xs text-gray-400">{v.dimensions}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">12ft Timber Sizes</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
                {ft12Variants.map((v) => (
                  <Link
                    key={v.sku}
                    href={`/timber-sizes/${v.size.toLowerCase()}?length=${v.length}`}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all bg-white dark:bg-gray-800"
                  >
                    <div className="text-lg font-bold text-primary-600">{v.size}</div>
                    <div className="text-sm text-gray-500">12ft</div>
                    <div className="text-xs text-gray-400">{v.dimensions}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto prose dark:prose-invert">
              <h2>Delivery Locations Across Zanzibar</h2>
              <p>
                We deliver <strong>Timber Zanzibar</strong> to every corner of the island. Our fleet covers all major 
                locations including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, 
                Bububu, and Ndevu. With cash on delivery available, you only pay when your timber arrives.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6 not-prose">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all text-center"
                  >
                    <div className="font-semibold text-primary-600">{loc.name}</div>
                    <div className="text-xs text-gray-500">Timber Delivery</div>
                  </Link>
                ))}
              </div>

              <h2>Mbao Zanzibar — Quality Timber in Swahili</h2>
              <p>
                <strong>Mbao Zanzibar</strong> is the Swahili term for timber in Zanzibar. When customers search for 
                <strong> Mbao Zanzibar</strong> or <strong>mbao za pine Zanzibar</strong>, they are looking for quality 
                timber suppliers they can trust. At Zanzibaba Timber, we are proud to be a leading provider of 
                <strong> Mbao Zanzibar</strong> — offering premium treated pine timber, treated poles, and construction 
                materials to customers across the island.
              </p>
              <p>
                Our <strong>mbao za pine Zanzibar</strong> (pine timber in Zanzibar) is sustainably sourced from mainland 
                Tanzania and professionally treated for tropical durability. Whether you need <strong>mbao za ujenzi Zanzibar</strong> 
                (construction timber) or <strong>mbao za kuezekea Zanzibar</strong> (roofing timber), we have the right 
                products in stock.
              </p>

              <h2>Pricing Information</h2>
              <p>
                Timber prices in Zanzibar depend on size, length, and quantity ordered. At Zanzibaba Timber, we offer 
                competitive pricing on all <strong>Timber Zanzibar</strong> products with bulk discounts for larger orders:
              </p>
              <ul>
                <li><strong>Standard Pricing:</strong> Contact us for current rates on individual sizes and lengths</li>
                <li><strong>Bulk Orders (500m+):</strong> 15% discount on standard pricing</li>
                <li><strong>Large Orders (1000m+):</strong> 20% discount on standard pricing</li>
                <li><strong>Contractor Pricing:</strong> Special rates for regular contractor supply</li>
                <li><strong>Hotel & Resort:</strong> Volume pricing for hospitality projects</li>
                <li><strong>Government Projects:</strong> Tender-ready pricing with credit terms available</li>
              </ul>
              <p>
                All prices include quality inspection and loading at our Kwa Ndevu yard. Delivery pricing depends on 
                location and order size. Contact us via WhatsApp for a personalized quote on your <strong>Timber Zanzibar</strong> order.
              </p>

              <h2>Industries We Serve with Timber Zanzibar</h2>
              <p>
                Our <strong>Timber Supplier Zanzibar</strong> services extend across multiple sectors:
              </p>
              <ul>
                <li><strong>Residential Construction:</strong> Timber for homes, renovations, and extensions</li>
                <li><strong>Hotel & Resort Development:</strong> Bulk timber supply for hospitality projects in Nungwi, Paje, Kendwa, and Kiwengwa</li>
                <li><strong>Villa Construction:</strong> Premium treated pine for luxury villa developments</li>
                <li><strong>Government Projects:</strong> Schools, hospitals, and public infrastructure</li>
                <li><strong>Wholesale Supply:</strong> Volume pricing for contractors and retailers</li>
              </ul>

              <h2>Why Timber Zanzibar Trusts Zanzibaba</h2>
              <p>
                Since 2010, Zanzibaba Timber has been the island's trusted <strong>Timber Zanzibar</strong> supplier. 
                Our Kwa Ndevu yard maintains one of the largest inventories of <strong>Pine Timber Zanzibar</strong> 
                and <strong>Treated Timber Zanzibar</strong> on the island. Every order is backed by:
              </p>
              <ul>
                <li>Professional treatment and kiln drying for tropical climate durability</li>
                <li>Quality inspection before every delivery</li>
                <li>Cash on delivery for peace of mind</li>
                <li>24-48 hour delivery for stock items</li>
                <li>Island-wide coverage from Paje to Nungwi</li>
                <li>Bulk capacity for large-scale projects</li>
              </ul>

              <div className="bg-primary-50 dark:bg-gray-800 rounded-xl p-8 text-center not-prose my-8">
                <h3 className="text-xl font-bold mb-3">Ready to Order Timber Zanzibar?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Contact us on WhatsApp for current pricing, availability, and delivery scheduling.
                </p>
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber, I need Timber Zanzibar for my project. Please send me your price list and delivery options.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Order Timber Zanzibar on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Timber Zanzibar</h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {faq.map((item, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                    <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t pt-8">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/" className="text-primary-600 hover:underline">Home</Link>
                <span className="text-gray-300">|</span>
                <Link href="/timber-sizes" className="text-primary-600 hover:underline">Timber Sizes</Link>
                <span className="text-gray-300">|</span>
                <Link href="/locations" className="text-primary-600 hover:underline">Delivery Locations</Link>
                <span className="text-gray-300">|</span>
                <Link href="/prices" className="text-primary-600 hover:underline">Prices</Link>
                <span className="text-gray-300">|</span>
                <Link href="/delivery" className="text-primary-600 hover:underline">Delivery Service</Link>
                <span className="text-gray-300">|</span>
                <Link href="/contact" className="text-primary-600 hover:underline">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Footer />
      <FloatingButtons />
    </>
  )
}
