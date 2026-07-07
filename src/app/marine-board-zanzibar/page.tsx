import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Link from 'next/link'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import { MessageCircle, Phone, CheckCircle, Droplets, Truck, Shield, ArrowRight } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Marine Board Zanzibar | Waterproof Marine Plywood Supplier | Zanzibaba Timber',
  'Zanzibaba Timber — Zanzibar\'s trusted marine board supplier. Waterproof marine-grade plywood in 18mm and 12mm. 4ft x 8ft sheets. Concrete formwork, boat building, construction. Island-wide delivery.',
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
  { question: 'Where can I buy marine board in Zanzibar?', answer: 'Zanzibaba Timber stocks marine board in 18mm and 12mm thicknesses at our Kwa Ndevu yard in Zanzibar. We deliver across all locations including Stone Town, Paje, Nungwi, Kendwa, Jambiani, Matemwe, Kiwengwa, Fumba, and every area across the island.' },
  { question: 'What marine board thicknesses are available in Zanzibar?', answer: 'Zanzibaba Timber stocks marine board in 18mm and 12mm thicknesses. Both come in standard 4ft x 8ft (1220mm x 2440mm) sheets. The 18mm is ideal for heavy-duty formwork and boat building, while the 12mm suits lighter applications and interior paneling.' },
  { question: 'How much does marine board cost in Zanzibar?', answer: 'Marine board prices at Zanzibaba Timber: 18mm at TZS 52,000 and 12mm at TZS 46,000 per sheet. Prices include transport. Prices exclude VAT. Contact us for bulk order discounts and delivery scheduling.' },
  { question: 'What is marine board used for in Zanzibar?', answer: 'Marine board in Zanzibar is primarily used for concrete formwork and shuttering, boat building and marine construction, bathroom and wet area installations, swimming pool surrounds, and any application requiring continuous water exposure resistance.' },
  { question: 'Is marine board waterproof?', answer: 'Yes, marine board is fully waterproof. It is manufactured with marine-grade phenolic resin glue that permanently bonds the plywood layers. Unlike standard plywood, marine board can be continuously exposed to water without delaminating, swelling, or losing structural integrity.' },
  { question: 'Can I get marine board delivered to my construction site in Zanzibar?', answer: 'Yes, Zanzibaba Timber delivers marine board to every location across Zanzibar. We cover Stone Town, Paje, Nungwi, Kendwa, Jambiani, Matemwe, Kiwengwa, Fumba, Chwaka, Kizimkazi, Makunduchi, and all other areas. FREE Delivery Across Zanzibar.' },
  { question: 'What is the difference between marine board and plywood?', answer: 'Marine board uses waterproof phenolic resin for full water resistance, making it ideal for concrete formwork, boat building, and continuous wet exposure. Standard plywood uses urea-formaldehyde resin providing moderate moisture resistance for interior and covered applications. Marine board costs more but performs better in wet conditions.' },
  { question: 'Can marine board be reused for concrete formwork?', answer: 'Yes, marine board can be reused for multiple concrete pours. Its waterproof phenolic resin bond prevents water absorption and concrete adhesion, allowing clean removal and reuse. This makes it a cost-effective choice for formwork projects in Zanzibar.' },
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
              Marine board is a waterproof plywood engineered with phenolic resin for maximum moisture resistance. The go-to material for concrete formwork, boat building, and construction projects exposed to water or humidity in Zanzibar. Available in 18mm and 12mm thicknesses — 4ft x 8ft sheets.
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
                View All Marine Board <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">Marine Board Products Available in Zanzibar</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {marineProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/marine-board/${product.slug}`}
                    className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-5 text-white">
                      <div className="text-sm font-semibold text-primary-200 mb-1">Marine Board</div>
                      <h3 className="text-2xl font-bold mb-2">{product.thickness} Thickness</h3>
                      <div className="text-3xl font-bold">{formatTZS(product.finalPrice)}</div>
                      <div className="text-sm text-primary-200">per sheet (4ft x 8ft)</div>
                      <div className="text-xs text-primary-300 mt-1">Prices exclude VAT.</div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">{product.description.slice(0, 120)}...</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-[10px] bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">{f}</span>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-primary-600 group-hover:underline">View Details & Pricing →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Marine Board Applications in Zanzibar</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-500" /> Concrete Formwork & Shuttering
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Marine board is the preferred material for concrete formwork in Zanzibar construction projects. Its waterproof properties ensure clean concrete finishes and the boards can be reused for multiple pours, saving money on every project.
                  </p>
                  <ul className="space-y-2">
                    {['Concrete column and beam formwork', 'Slab shuttering for floors and roofs', 'Foundation and retaining wall forms', 'Reusable formwork panels'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-500" /> Marine & Boat Building
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    For Zanzibar&apos;s coastal boat building industry, marine board provides the waterproof performance needed for hull construction, deck structures, and interior fittings exposed to saltwater conditions and tropical humidity.
                  </p>
                  <ul className="space-y-2">
                    {['Boat hull and deck construction', 'Marine interior paneling', 'Dock and pier structures', 'Waterfront furniture and fixtures'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Marine Board Specifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Specification</th>
                      <th className="text-left py-3 px-3 text-sm">Marine Board 18mm</th>
                      <th className="text-left py-3 px-3 text-sm">Marine Board 12mm</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3 px-3 font-semibold text-sm">Thickness</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">18mm</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">12mm</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3 px-3 font-semibold text-sm">Sheet Size</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">1220 × 2440 mm / 4ft × 8ft</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">1220 × 2440 mm / 4ft × 8ft</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3 px-3 font-semibold text-sm">Material</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Marine-grade plywood</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Marine-grade plywood</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3 px-3 font-semibold text-sm">Moisture Resistance</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Excellent — waterproof phenolic resin</td>
                      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Very Good — waterproof phenolic resin</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3 px-3 font-semibold text-sm">Price</td>
                      <td className="py-3 px-3 text-sm font-bold">{formatTZS(marineProducts[0]?.finalPrice ?? 0)}</td>
                      <td className="py-3 px-3 text-sm font-bold">{formatTZS(marineProducts[1]?.finalPrice ?? 0)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Prices exclude VAT.</p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">FREE Delivery Across Zanzibar</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                We deliver marine board and plywood to every location across Zanzibar. FREE Delivery Across Zanzibar.
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
                Contact Zanzibaba Timber for quality marine board at competitive prices. We respond within 30 minutes.
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
