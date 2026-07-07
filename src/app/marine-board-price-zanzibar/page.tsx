import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PriceNotice from '@/components/PriceNotice'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, SHEET_PRODUCT_FAQ, PRODUCT_PRICES, generateWhatsAppLink, formatTZS } from '@/lib/data'
import { Truck, Phone, MessageCircle, CheckCircle, Shield, Info, Package } from 'lucide-react'
import Link from 'next/link'

const marineProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board')
const cheapestPlywood = SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood').sort((a, b) => a.finalPrice - b.finalPrice)[0]

export const metadata: Metadata = generateSEOMetadata(
  'Marine Board Price Zanzibar 2026 | Updated Pricing',
  'Current marine board prices in Zanzibar. Marine Board 18mm at TZS 52,000, 12mm at TZS 46,000 per sheet. FREE Delivery Across Zanzibar.',
  'en',
  '/marine-board-price-zanzibar'
)

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Marine Board', url: '/marine-board' },
  { name: 'Marine Board Price Zanzibar', url: '/marine-board-price-zanzibar' },
]

const faqData = [
  { question: 'What are the current marine board prices in Zanzibar?', answer: 'Zanzibaba Timber stocks Marine Board 18mm at TZS 52,000 per sheet and Marine Board 12mm at TZS 46,000 per sheet. All prices exclude VAT. FREE Delivery Across Zanzibar.' },
  { question: 'Why do marine board prices vary between suppliers?', answer: 'Marine board prices vary based on resin quality, core material, supplier margins, and transport costs. Zanzibaba Timber offers transparent fixed pricing with no hidden fees.' },
  { question: 'Do you offer bulk discounts on marine board?', answer: 'Yes, we offer competitive bulk discounts for large orders. Contact us via WhatsApp or phone for custom bulk pricing on marine board orders of any size.' },
  { question: 'How often do marine board prices change?', answer: 'Prices are updated regularly to reflect current market conditions. The prices listed on our website are the latest available. Contact us to confirm current pricing before ordering.' },
]

export default function MarineBoardPriceZanzibarPage() {
  const faqSchema = getFAQSchema(faqData)
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)
  const itemListSchema = getItemListSchema(
    marineProducts.map(p => ({
      name: p.name,
      url: `/marine-board/${p.slug}`,
    })),
    'Marine Board Products Zanzibar'
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
              <Link href="/marine-board" className="hover:text-white">Marine Board</Link>
              <span className="mx-2">/</span>
              <span>Marine Board Price Zanzibar</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Marine Board Price Zanzibar 2026</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
              Current marine board prices in Zanzibar. Transparent pricing on all marine board products. 
              No hidden fees — the price you see is the price you pay. FREE Delivery Across Zanzibar.
            </p>
            <div className="relative w-full h-48 sm:h-56 md:h-72 rounded-lg md:rounded-xl overflow-hidden mt-6 shadow-lg max-w-3xl">
              <Image
                src="/images/gallery/marine-board-zanzibar.jpg"
                alt="Marine Board Supplier in Zanzibar"
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
                <h2 className="text-xl font-bold">How Marine Board Pricing Works</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Marine board prices are determined by several factors including the quality of phenolic resin used, 
                the type of core material (hardwood or softwood), and the manufacturing process. At Zanzibaba Timber, 
                we source directly from established manufacturers to offer the best prices in Zanzibar.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Fixed Pricing</p>
                    <p className="text-xs text-gray-500">No negotiation needed — fair prices for everyone</p>
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
                    <p className="font-semibold text-sm">Quality Guaranteed</p>
                    <p className="text-xs text-gray-500">Premium grade marine board only</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Marine Board Prices — All Thicknesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {marineProducts.map((product) => {
                const waLink = generateWhatsAppLink(`I would like to order ${product.name} (${product.thickness}) - ${formatTZS(product.finalPrice)}`)
                return (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">{product.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{product.thickness} — 4ft x 8ft</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary-600">{formatTZS(product.finalPrice)}</p>
                          <p className="text-xs text-gray-500">per sheet — Prices exclude VAT</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={waLink} target="_blank" rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                        <MessageCircle className="w-5 h-5" />
                        Order via WhatsApp — {formatTZS(product.finalPrice)}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Marine Board Price Comparison</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary-600 bg-primary-50 dark:bg-primary-900/20">
                      <th className="text-left py-3 px-4 font-semibold">Product</th>
                      <th className="text-left py-3 px-4 font-semibold">Thickness</th>
                      <th className="text-left py-3 px-4 font-semibold">Size</th>
                      <th className="text-right py-3 px-4 font-semibold">Price (TZS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marineProducts.map((product, i) => (
                      <tr key={product.id} className={`border-b border-gray-200 dark:border-gray-700 ${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}>
                        <td className="py-3 px-4 font-semibold">{product.name}</td>
                        <td className="py-3 px-4">{product.thickness}</td>
                        <td className="py-3 px-4">4ft x 8ft</td>
                        <td className="py-3 px-4 text-right font-bold text-primary-600">{formatTZS(product.finalPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 p-4">All prices exclude VAT. FREE Delivery Across Zanzibar.</p>
            </div>

            <section className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Marine Board? Get a Quote Now</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact Zanzibaba Timber for marine board in any quantity. Bulk discounts available for large orders.
                We deliver to every location in Zanzibar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={generateWhatsAppLink('I would like a quote for marine board')}
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
                We deliver marine board to every location in Zanzibar — Stone Town, Paje, Nungwi, Kendwa, 
                Jambiani, Matemwe, Kiwengwa, Fumba, and all other areas. Delivery is included in every order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={generateWhatsAppLink('I need marine board delivered to my location in Zanzibar')}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Marine Board Pricing — Frequently Asked Questions</h2>
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
                <Link href="/plywood" className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="font-semibold text-sm">Plywood</p>
                  <p className="text-xs text-gray-500">From {cheapestPlywood ? formatTZS(cheapestPlywood.finalPrice) : 'TZS 18,000'}</p>
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