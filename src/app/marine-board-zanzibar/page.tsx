import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Link from 'next/link'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, SHEET_PRODUCT_FAQ, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import { MessageCircle, Phone, CheckCircle, Truck, Shield, Droplets } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Marine Board Zanzibar | Waterproof Marine Plywood Supplier | Zanzibaba Timber',
  'Zanzibaba Timber — Zanzibar\'s leading marine board supplier. Waterproof marine-grade plywood for concrete formwork, boat building, and construction. 18mm and 12mm available. Island-wide delivery.',
  'en',
  '/marine-board-zanzibar'
)

const marineProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board')
const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Marine Board Zanzibar', url: '/marine-board-zanzibar' },
])
const itemList = getItemListSchema(
  marineProducts.map(p => ({ name: p.name, url: `/marine-board/${p.slug}` })),
  'Product'
)

const seoFAQ = [
  { question: 'Where can I buy marine board in Zanzibar?', answer: 'Zanzibaba Timber is Zanzibar\'s leading marine board supplier. We stock marine board in 18mm and 12mm thicknesses at our Kwa Ndevu yard. We deliver across all Zanzibar locations including Stone Town, Paje, Nungwi, Kendwa, and every area across the island.' },
  { question: 'What is marine board used for in Zanzibar construction?', answer: 'Marine board is used for concrete formwork and shuttering, boat building and marine construction, outdoor furniture, bathroom and wet area installations, swimming pool surrounds, and exterior wall cladding. Its waterproof properties make it ideal for Zanzibar\'s tropical coastal climate.' },
  { question: 'How much does marine board cost in Zanzibar?', answer: 'Marine board 18mm costs TZS 52,000 per sheet and marine board 12mm costs TZS 46,000 per sheet at Zanzibaba Timber. All prices include transport and service margin. Prices exclude VAT. Contact us for bulk order discounts.' },
  { question: 'What is the difference between marine board and regular plywood?', answer: 'Marine board is manufactured with waterproof phenolic resin glue that makes it fully waterproof — it can be continuously exposed to water without delaminating. Regular plywood uses urea-formaldehyde resin which provides only moderate moisture resistance. Marine board is preferred for concrete formwork, boat building, and wet area installations.' },
  { question: 'Do you deliver marine board across Zanzibar?', answer: 'Yes, Zanzibaba Timber delivers marine board to every location across Zanzibar including Stone Town, Paje, Nungwi, Kendwa, Jambiani, Matemwe, Kiwengwa, Fumba, Chwaka, Kizimkazi, Makunduchi, and all other areas. Cash on delivery is available.' },
]

export default function MarineBoardZanzibarPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Marine Board Zanzibar</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Marine Board <span className="text-primary-600">Zanzibar</span>
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-sm md:text-base">
              Zanzibaba Timber is Zanzibar&apos;s trusted supplier of premium waterproof marine boards. We stock marine-grade plywood in 18mm and 12mm thicknesses for concrete formwork, boat building, and construction projects across the island.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <a
                href={generateWhatsAppLink('Hello Zanzibaba Timber, I need marine board for my construction project. Please share pricing and availability.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Request Quote
              </a>
              <a
                href="tel:+255716002790"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link
                href="/marine-board"
                className="inline-flex items-center justify-center gap-2 border border-primary-600 text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              >
                View All Marine Board
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {marineProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/marine-board/${product.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                    <div className="text-3xl font-bold">{formatTZS(product.finalPrice)}</div>
                    <div className="text-sm text-primary-200">per sheet — {product.sheetSize}</div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description.slice(0, 150)}...</p>
                    <span className="text-sm font-semibold text-primary-600 group-hover:underline">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">Marine Board Applications in Zanzibar</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-500" /> Concrete Formwork
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Marine board is the preferred material for concrete formwork in Zanzibar construction projects. Its waterproof phenolic resin bond ensures clean concrete finishes and the boards can be reused for multiple pours, providing excellent value for contractors.
                  </p>
                  <ul className="space-y-2">
                    {['Column and beam formwork', 'Slab shuttering', 'Foundation forms', 'Reusable panels'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-500" /> Boat Building & Marine
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    For Zanzibar&apos;s coastal boat building industry, marine board provides the waterproof performance needed for hull construction, deck structures, and interior fittings exposed to saltwater conditions.
                  </p>
                  <ul className="space-y-2">
                    {['Hull and deck construction', 'Marine interior paneling', 'Dock structures', 'Waterfront furniture'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Delivery Across Zanzibar</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                We deliver marine board and construction timber products across all Zanzibar. Cash on delivery available. 24-48 hour delivery for stock items.
              </p>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all text-sm font-medium"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions About Marine Board in Zanzibar</h2>
              <div className="space-y-3">
                {seoFAQ.map((faq, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-sm mb-1">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-primary-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Need Marine Board in Zanzibar?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Contact Zanzibaba Timber for premium marine board at competitive prices. We respond within 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber, I need marine board for my project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a
                  href="tel:+255716002790"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" /> +255 716 002 790
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/marine-board" className="text-primary-600 hover:underline">Marine Board Products</Link>
                <Link href="/plywood" className="text-primary-600 hover:underline">Plywood Products</Link>
                <Link href="/prices" className="text-primary-600 hover:underline">All Prices</Link>
                <Link href="/delivery" className="text-primary-600 hover:underline">Delivery Service</Link>
                <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(seoFAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
