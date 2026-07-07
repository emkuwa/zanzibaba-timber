import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Link from 'next/link'
import { generateSEOMetadata, getFAQSchema, getItemListSchema, getBreadcrumbSchema, getProductSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, SHEET_PRODUCT_FAQ, SHEET_PRODUCT_CATEGORIES, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import { Truck, Phone, MessageCircle, Shield, Droplets, CheckCircle } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Marine Board Zanzibar | Waterproof Marine Plywood Supplier | Concrete Formwork',
  'Buy premium marine board in Zanzibar. Waterproof marine-grade plywood for concrete formwork, boat building, and construction. 18mm and 12mm sheets. TZS 46,000 - TZS 52,000 per sheet. Island-wide delivery.',
  'en',
  '/marine-board'
)

const marineProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board')
const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Marine Board', url: '/marine-board' },
])
const itemList = getItemListSchema(
  marineProducts.map(p => ({ name: p.name, url: `/marine-board/${p.slug}` })),
  'Product'
)

export default function MarineBoardPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Marine Board</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
              Marine Board <span className="text-primary-600">Zanzibar</span>
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-sm md:text-base">
              Premium waterproof marine boards for concrete formwork, boat building, and moisture-resistant construction. Available in 18mm and 12mm thicknesses. 4ft x 8ft sheets.
            </p>

            <div className="max-w-3xl mx-auto mb-8">
              <PriceNotice />
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {marineProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/marine-board/${product.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white">
                    <div className="text-sm font-semibold text-primary-200 mb-1">Marine Board</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{product.thickness} Thickness</h2>
                    <div className="text-3xl font-bold">{formatTZS(product.finalPrice)}</div>
                    <div className="text-sm text-primary-200">per sheet (4ft x 8ft)</div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{product.description.slice(0, 150)}...</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 4).map((f) => (
                        <span key={f} className="text-[10px] bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:underline">
                      View Details & Pricing →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Choose Marine Board from Zanzibaba Timber?</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: Droplets, title: 'Fully Waterproof', desc: 'Manufactured with marine-grade phenolic resin. Can be continuously exposed to water without delaminating or losing strength.' },
                  { icon: Shield, title: 'Concrete Formwork Grade', desc: 'Smooth face provides clean concrete finishes. Reusable for multiple pours, saving money on construction projects.' },
                  { icon: CheckCircle, title: 'Delivered Across Zanzibar', desc: 'We deliver marine board to every location including Stone Town, Paje, Nungwi, Kendwa, and all construction sites across the island.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary-600 mb-2" />
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Marine Board Applications in Zanzibar</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Construction Formwork</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Marine board is the preferred material for concrete formwork in Zanzibar construction projects. Its waterproof properties ensure clean concrete finishes and the boards can be reused for multiple pours, providing excellent value for contractors and builders.
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
                  <h3 className="font-semibold text-lg mb-3">Marine & Boat Building</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    For Zanzibar&apos;s coastal boat building industry, marine board provides the waterproof performance needed for hull construction, deck structures, and interior fittings that will be continuously exposed to saltwater conditions.
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
              <h2 className="text-2xl font-bold mb-4">We Deliver Marine Board Across Zanzibar</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                We deliver construction timber products including marine board and plywood across all Zanzibar. Cash on delivery available. 24-48 hour delivery for stock items.
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

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Marine Board Prices in Zanzibar</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Product</th>
                      <th className="text-left py-3 px-3 text-sm">Thickness</th>
                      <th className="text-left py-3 px-3 text-sm">Sheet Size</th>
                      <th className="text-right py-3 px-3 text-sm">Price (TZS)</th>
                      <th className="text-center py-3 px-3 text-sm">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marineProducts.map((product) => (
                      <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-3 font-semibold text-sm">
                          <Link href={`/marine-board/${product.slug}`} className="text-primary-600 hover:underline">{product.name}</Link>
                        </td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{product.thickness}</td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{product.sheetSize}</td>
                        <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(product.finalPrice)}</td>
                        <td className="py-3 px-3 text-center">
                          <a
                            href={generateWhatsAppLink(`Hello Zanzibaba Timber, I need ${product.name} for my project. Please share pricing and availability.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-semibold"
                          >
                            <MessageCircle className="w-3 h-3" /> WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Price excludes VAT.</p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {SHEET_PRODUCT_FAQ.slice(0, 5).map((faq, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-sm mb-1">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center bg-primary-50 dark:bg-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to Order Marine Board?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Contact us on WhatsApp for instant pricing, bulk discounts, and delivery scheduling. We respond within 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber, I need marine board for my construction project. Please share pricing and delivery options.')}
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(SHEET_PRODUCT_FAQ.slice(0, 5))) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
