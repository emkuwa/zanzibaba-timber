import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PriceNotice from '@/components/PriceNotice'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, SHEET_PRODUCT_FAQ, generateWhatsAppLink, formatTZS } from '@/lib/data'
import { Truck, Phone, MessageCircle, CheckCircle, Shield, Info, Package } from 'lucide-react'
import Link from 'next/link'

const plywoodProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood')
const cheapestMarineBoard = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board').sort((a, b) => a.finalPrice - b.finalPrice)[0]

export const metadata: Metadata = generateSEOMetadata(
  'Plywood Price Zanzibar 2026 | All Thicknesses',
  'Current plywood prices in Zanzibar. 18mm TZS 50,000, 15mm TZS 46,000, 12mm TZS 43,000, 9mm TZS 40,000, 6mm TZS 28,000, 3mm TZS 18,000. FREE Delivery.',
  'en',
  '/plywood-price-zanzibar'
)

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Plywood', url: '/plywood' },
  { name: 'Plywood Price Zanzibar', url: '/plywood-price-zanzibar' },
]

const faqData = [
  { question: 'What are the current plywood prices in Zanzibar?', answer: 'Zanzibaba Timber offers Plywood 18mm at TZS 50,000, 15mm at TZS 46,000, 12mm at TZS 43,000, 9mm at TZS 40,000, 6mm at TZS 28,000, and 3mm at TZS 18,000 per sheet. All prices exclude VAT. FREE Delivery Across Zanzibar.' },
  { question: 'Which plywood thickness offers the best value?', answer: 'The best value depends on your application. For general construction, 12mm plywood at TZS 43,000 offers excellent strength at a moderate price. For budget projects, 6mm at TZS 28,000 is the most affordable structural option.' },
  { question: 'Do you offer bulk discounts on plywood?', answer: 'Yes, we offer competitive bulk discounts for large plywood orders. Contact us via WhatsApp or phone for custom bulk pricing on orders of any size.' },
  { question: 'What is the standard plywood sheet size?', answer: 'All plywood sheets at Zanzibaba Timber are standard 4ft x 8ft (1220mm x 2440mm), which is the most widely used size for construction projects in Zanzibar.' },
]

export default function PlywoodPriceZanzibarPage() {
  const faqSchema = getFAQSchema(faqData)
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)
  const itemListSchema = getItemListSchema(
    plywoodProducts.map(p => ({
      name: p.name,
      url: `/plywood/${p.slug}`,
    })),
    'Plywood Products Zanzibar'
  )

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary-700 to-primary-500 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm mb-4 text-primary-200">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/plywood" className="hover:text-white">Plywood</Link>
              <span className="mx-2">/</span>
              <span>Plywood Price Zanzibar</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Plywood Price Zanzibar 2026</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
              Complete plywood pricing guide for Zanzibar. All thicknesses from 3mm to 18mm. 
              Transparent fixed pricing with no hidden fees. FREE Delivery Across Zanzibar.
            </p>
            <div className="relative w-full h-48 sm:h-56 md:h-72 rounded-lg md:rounded-xl overflow-hidden mt-6 shadow-lg max-w-3xl">
              <Image
                src="/images/gallery/construction-plywood-zanzibar.jpg"
                alt="Construction Plywood Supplier in Zanzibar"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <PriceNotice />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-primary-600" />
                <h2 className="text-xl font-bold">Plywood Pricing Guide</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plywood prices vary by thickness, grade, and manufacturer. Thicker plywood costs more but provides 
                greater structural strength. At Zanzibaba Timber, we stock construction-grade plywood at competitive 
                fixed prices — no negotiation needed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">6 Thicknesses Available</p>
                    <p className="text-xs text-gray-500">3mm to 18mm — something for every project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-500">Included in every order across Zanzibar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Quality Assured</p>
                    <p className="text-xs text-gray-500">Construction-grade plywood only</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Plywood Prices — All Thicknesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {plywoodProducts.map((product) => {
                const waLink = generateWhatsAppLink(`I would like to order ${product.name} (${product.thickness}) - ${formatTZS(product.finalPrice)}`)
                return (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-6">
                      <h3 className="text-lg font-bold text-primary-700 dark:text-primary-300">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.thickness} — 4ft x 8ft</p>
                      <p className="text-2xl font-bold text-primary-600 mt-2">{formatTZS(product.finalPrice)}</p>
                      <p className="text-xs text-gray-500">per sheet — Prices exclude VAT</p>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-1 mb-4">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={waLink} target="_blank" rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">
                        <MessageCircle className="w-4 h-4" />
                        Order via WhatsApp
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Complete Plywood Price Table</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary-600 bg-primary-50 dark:bg-primary-900/20">
                      <th className="text-left py-3 px-4 font-semibold">Product</th>
                      <th className="text-left py-3 px-4 font-semibold">Thickness</th>
                      <th className="text-left py-3 px-4 font-semibold">Best For</th>
                      <th className="text-right py-3 px-4 font-semibold">Price (TZS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plywoodProducts.map((product, i) => (
                      <tr key={product.id} className={`border-b border-gray-200 dark:border-gray-700 ${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}>
                        <td className="py-3 px-4 font-semibold">
                          <Link href={`/plywood/${product.slug}`} className="text-primary-600 hover:underline">{product.name}</Link>
                        </td>
                        <td className="py-3 px-4">{product.thickness}</td>
                        <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{product.description}</td>
                        <td className="py-3 px-4 text-right font-bold text-primary-600">{formatTZS(product.finalPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 p-4">All prices exclude VAT. FREE Delivery Across Zanzibar.</p>
            </div>

            <section className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Plywood? Get a Quote Now</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact Zanzibaba Timber for plywood in any quantity. Bulk discounts available for large orders.
                We deliver to every location in Zanzibar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={generateWhatsAppLink('I would like a quote for plywood')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </a>
                <a href="tel:+255716002790"
                  className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </section>

            <section className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold">FREE Delivery Across Zanzibar</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We deliver plywood to every location in Zanzibar — Stone Town, Paje, Nungwi, Kendwa, 
                Jambiani, Matemwe, Kiwengwa, Fumba, and all other areas. Delivery is included in every order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={generateWhatsAppLink('I need plywood delivered to my location in Zanzibar')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for Delivery
                </a>
                <a href="tel:+255716002790"
                  className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Plywood Pricing — Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">Also Available at Zanzibaba Timber</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/marine-board" className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="font-semibold text-sm">Marine Board</p>
                  <p className="text-xs text-gray-500">From {cheapestMarineBoard ? formatTZS(cheapestMarineBoard.finalPrice) : '46,000'}</p>
                </Link>
                <Link href="/treated-timber" className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="font-semibold text-sm">Treated Timber</p>
                  <p className="text-xs text-gray-500">From {formatTZS(8000)}</p>
                </Link>
                <Link href="/ceiling-board" className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="font-semibold text-sm">Ceiling Board</p>
                  <p className="text-xs text-gray-500">All sizes</p>
                </Link>
                <Link href="/prices" className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="font-semibold text-sm">All Prices</p>
                  <p className="text-xs text-gray-500">Complete list</p>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  )
}