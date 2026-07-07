import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import { Truck, Phone, MessageCircle, CheckCircle, Shield, Droplets, Package } from 'lucide-react'
import Link from 'next/link'

const marineBoard = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board')

export const metadata: Metadata = generateSEOMetadata(
  'Concrete Formwork Marine Board Zanzibar | Reusable Shuttering',
  'Premium marine board for concrete formwork in Zanzibar. Reusable shuttering panels, clean concrete finishes. 18mm at TZS 52,000 and 12mm at TZS 46,000. FREE Delivery.',
  'en',
  '/concrete-formwork-marine-board'
)

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Marine Board', url: '/marine-board' },
  { name: 'Concrete Formwork Marine Board', url: '/concrete-formwork-marine-board' },
]

const faqData = [
  { question: 'Why use marine board for concrete formwork?', answer: 'Marine board is made with waterproof phenolic resin, making it ideal for concrete formwork. It bonds less with concrete, produces a smoother finish, and can be reused 8-15 times, making it more cost-effective than standard plywood or timber formwork.' },
  { question: 'How many times can marine board formwork be reused?', answer: 'Marine board formwork can typically be reused 8-15 times with proper care. Clean the surface after each pour, store flat, and apply form oil before each use to maximize reuse cycles.' },
  { question: 'Which marine board thickness is best for formwork?', answer: 'For standard concrete walls and slabs, 18mm marine board is recommended as it provides maximum rigidity and can handle heavier concrete loads. 12mm marine board is suitable for smaller formwork and curved applications.' },
  { question: 'Do you deliver formwork materials across Zanzibar?', answer: 'Yes, we deliver marine board for formwork to every location across Zanzibar including Stone Town, Paje, Nungwi, Kendwa, Jambiani, and all other areas. FREE Delivery Across Zanzibar.' },
]

export default function ConcreteFormworkMarineBoardPage() {
  const faqSchema = getFAQSchema(faqData)
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)

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
              <span>Concrete Formwork Marine Board</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Concrete Formwork Marine Board — Zanzibar</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
              Premium marine board for concrete formwork and shuttering in Zanzibar. Reusable panels for clean concrete finishes.
              18mm and 12mm available. FREE Delivery Across Zanzibar.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-4">Why Marine Board for Concrete Formwork?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Marine board is the preferred material for concrete formwork in Zanzibar due to its waterproof 
                    phenolic resin construction. Unlike standard plywood, marine board does not absorb water from 
                    the concrete mix, resulting in a smoother surface finish and easier removal after the concrete sets.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The smooth phenolic surface of marine board creates a clean, almost polished concrete finish 
                    that reduces the need for additional plastering or surface treatment. This saves both time and 
                    money on construction projects.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    For contractors and builders in Zanzibar, marine board formwork represents excellent value — 
                    the initial cost is offset by multiple reuses. With proper maintenance, marine board panels 
                    can be reused 8-15 times, making the per-pour cost significantly lower than alternatives.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-4">Marine Board vs Other Formwork Materials</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold">Marine Board vs Standard Plywood</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Marine board lasts 3-5x longer, produces smoother finishes, and costs less per pour over its lifetime.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold">Marine Board vs Steel Formwork</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Marine board is lighter, easier to handle, and more versatile for custom shapes. Steel is better for very large repetitive pours.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold">Marine Board vs Timber Planks</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Marine board provides a smoother finish, is faster to install, and does not warp or twist like timber planks.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-4">Formwork Tips & Best Practices</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Storage Tips</h3>
                      <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                        <li>• Store panels flat on a level surface</li>
                        <li>• Cover with tarpaulin to protect from rain and sun</li>
                        <li>• Stack with spacers to allow air circulation</li>
                        <li>• Keep away from standing water</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Installation Tips</h3>
                      <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                        <li>• Apply form oil before each concrete pour</li>
                        <li>• Use consistent bracing to prevent bowing</li>
                        <li>• Seal edges and joints to prevent grout loss</li>
                        <li>• Remove formwork when concrete reaches sufficient strength</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {marineBoard.map((product) => {
                  const waLink = generateWhatsAppLink(`I need ${product.name} (${product.thickness}) for concrete formwork - ${formatTZS(product.finalPrice)}`)
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
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a href={waLink} target="_blank" rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">
                          <MessageCircle className="w-4 h-4" />
                          Order for Formwork
                        </a>
                      </div>
                    </div>
                  )
                })}

                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3">Need Help Choosing?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Contact us for expert advice on the right marine board for your formwork project.
                  </p>
                  <a href={generateWhatsAppLink('I need advice on marine board for concrete formwork')}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp for Advice
                  </a>
                </div>
              </div>
            </div>

            <section className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Order Formwork Marine Board?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact Zanzibaba Timber for marine board formwork panels. Bulk discounts available for construction projects.
                We deliver to every location in Zanzibar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={generateWhatsAppLink('I would like to order marine board for concrete formwork')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Order
                </a>
                <a href="tel:+255777777777"
                  className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Concrete Formwork — Frequently Asked Questions</h2>
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
                  <p className="text-xs text-gray-500">From TZS 18,000</p>
                </Link>
                <Link href="/treated-timber" className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="font-semibold text-sm">Treated Timber</p>
                  <p className="text-xs text-gray-500">From TZS 18,000</p>
                </Link>
                <Link href="/marine-board" className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="font-semibold text-sm">All Marine Board</p>
                  <p className="text-xs text-gray-500">All thicknesses</p>
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
    </>
  )
}