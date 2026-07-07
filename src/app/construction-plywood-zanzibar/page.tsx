import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import { Truck, Phone, MessageCircle, CheckCircle, Shield, Package } from 'lucide-react'
import Link from 'next/link'

const plywoodProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood')

export const metadata: Metadata = generateSEOMetadata(
  'Construction Plywood Zanzibar — Structural Grade Plywood Sheets',
  'Construction-grade plywood and marine board in Zanzibar. All thicknesses from 3mm to 18mm. 4ft x 8ft sheets for structural and commercial projects. TZS 18,000 to TZS 50,000. FREE Delivery.',
  'en',
  '/construction-plywood-zanzibar'
)

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Plywood', url: '/plywood' },
  { name: 'Construction Plywood Zanzibar', url: '/construction-plywood-zanzibar' },
]

const faqData = [
  { question: 'What is construction plywood?', answer: 'Construction plywood is structural-grade plywood designed for building applications. It uses layered wood veneers bonded with waterproof adhesive, providing strength and stability for walls, floors, roofs, and commercial construction projects.' },
  { question: 'What plywood thickness do I need for my construction project?', answer: 'For flooring and structural sheathing, use 12mm-18mm plywood. For wall cladding and partitions, 9mm-12mm is suitable. For ceiling linings and decorative applications, 6mm-9mm works well. For formwork and heavy loads, 18mm is recommended.' },
  { question: 'Do you supply plywood for commercial construction projects?', answer: 'Yes, Zanzibaba Timber supplies plywood for commercial construction projects of all sizes. We offer bulk pricing for contractors and builders. Contact us for project-specific quotes and delivery scheduling.' },
  { question: 'What size are construction plywood sheets?', answer: 'All construction plywood at Zanzibaba Timber comes in the standard 4ft x 8ft (1220mm x 2440mm) size, which is compatible with standard construction framing and easily transported to any site in Zanzibar.' },
]

export default function ConstructionPlywoodZanzibarPage() {
  const faqSchema = getFAQSchema(faqData)
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)
  const itemListSchema = getItemListSchema(
    plywoodProducts.map(p => ({
      name: p.name,
      url: `/plywood/${p.slug}`,
    })),
    'Construction Plywood Zanzibar'
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
              <span>Construction Plywood Zanzibar</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Construction Plywood — Zanzibar</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
              Construction-grade plywood for projects in Zanzibar. Marine board and plywood in all thicknesses from 3mm to 18mm.
              Standard 4ft x 8ft sheets for residential and commercial building. FREE Delivery Across Zanzibar.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-10">
              <h2 className="text-2xl font-bold mb-4">Construction Plywood Guide — Zanzibar</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Construction plywood is an essential building material used across Zanzibar for structural sheathing, 
                flooring substrates, wall cladding, roofing, and general construction applications. The right plywood 
                thickness depends on your specific application and load requirements.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                At Zanzibaba Timber, we stock construction-grade plywood in 6 thicknesses to cover every building 
                need — from thin 3mm sheets for decorative lining to heavy-duty 18mm panels for structural flooring 
                and formwork. All sheets are standard 4ft x 8ft size.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Plywood by Application — Choose the Right Thickness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {plywoodProducts.map((product) => {
                const waLink = generateWhatsAppLink(`I need ${product.name} (${product.thickness}) for my construction project - ${formatTZS(product.finalPrice)}`)
                return (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="bg-primary-50 dark:bg-primary-900/20 p-6">
                      <h3 className="text-lg font-bold text-primary-700 dark:text-primary-300">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.thickness} — 4ft x 8ft</p>
                      <p className="text-2xl font-bold text-primary-600 mt-2">{formatTZS(product.finalPrice)}</p>
                      <p className="text-xs text-gray-500">per sheet — Prices exclude VAT</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{product.description}</p>
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

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Thickness Selection Guide</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary-600 bg-primary-50 dark:bg-primary-900/20">
                      <th className="text-left py-3 px-4 font-semibold">Thickness</th>
                      <th className="text-left py-3 px-4 font-semibold">Best For</th>
                      <th className="text-left py-3 px-4 font-semibold">Load Capacity</th>
                      <th className="text-right py-3 px-4 font-semibold">Price (TZS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plywoodProducts.map((product, i) => {
                      const loadMap: Record<string, string> = {
                        '3mm': 'Light duty', '6mm': 'Light-medium duty', '9mm': 'Medium duty',
                        '12mm': 'Medium-heavy duty', '15mm': 'Heavy duty', '18mm': 'Maximum',
                      }
                      return (
                        <tr key={product.id} className={`border-b border-gray-200 dark:border-gray-700 ${i % 2 === 1 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}>
                          <td className="py-3 px-4 font-semibold">{product.thickness}</td>
                          <td className="py-3 px-4 text-sm">{product.description}</td>
                          <td className="py-3 px-4 text-sm">{loadMap[product.thickness] || 'Medium duty'}</td>
                          <td className="py-3 px-4 text-right font-bold text-primary-600">{formatTZS(product.finalPrice)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 p-4">Prices Excluding VAT. Free Delivery Across Zanzibar.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-3">Residential Construction</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  For residential building projects in Zanzibar, plywood is used for roof sheathing, wall cladding, 
                  flooring substrates, and ceiling linings. The 9mm-12mm range covers most residential applications.
                </p>
                <Link href="/plywood" className="text-primary-600 text-sm font-semibold hover:underline">
                  View all plywood products →
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-3">Commercial Construction</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Commercial projects in Zanzibar require 12mm-18mm plywood for structural sheathing, formwork, 
                  and heavy-duty applications. We offer bulk pricing for contractors and builders.
                </p>
                <Link href="/contractor-supply" className="text-primary-600 text-sm font-semibold hover:underline">
                  View contractor supply →
                </Link>
              </div>
            </div>

            <section className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Need Construction Plywood? Get a Quote</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact Zanzibaba Timber for construction plywood in any quantity. Bulk discounts available for projects.
                We deliver to every location in Zanzibar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={generateWhatsAppLink('I need a quote for construction plywood')}
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

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Construction Plywood — Frequently Asked Questions</h2>
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
                  <p className="text-xs text-gray-500">From {formatTZS(46000)}</p>
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