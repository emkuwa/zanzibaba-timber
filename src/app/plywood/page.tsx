import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Link from 'next/link'
import { generateSEOMetadata, getFAQSchema, getItemListSchema, getBreadcrumbSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, SHEET_PRODUCT_FAQ, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import { Truck, Phone, MessageCircle, Shield, CheckCircle, Layers } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Plywood Zanzibar | Construction Plywood Supplier | All Thicknesses Available',
  'Buy quality construction plywood in Zanzibar. 18mm, 15mm, 12mm, 9mm, 6mm, and 3mm plywood sheets. 4ft x 8ft sheets from TZS 18,000. Island-wide delivery.',
  'en',
  '/plywood'
)

const plywoodProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood')
const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Plywood', url: '/plywood' },
])
const itemList = getItemListSchema(
  plywoodProducts.map(p => ({ name: p.name, url: `/plywood/${p.slug}` })),
  'Product'
)

export default function PlywoodPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Plywood</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
              Plywood <span className="text-primary-600">Zanzibar</span>
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-sm md:text-base">
              Zanzibaba Timber supplies premium construction plywood across Zanzibar in every standard thickness from 3mm to 18mm. Our full range covers structural flooring and roofing projects as well as decorative interior paneling and craft applications — all in standard 4ft x 8ft sheets ready for island-wide delivery.
            </p>

            <div className="max-w-3xl mx-auto mb-8">
              <PriceNotice />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
              {plywoodProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/plywood/${product.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-4 text-white text-center">
                    <div className="text-3xl md:text-4xl font-bold">{product.thickness}</div>
                    <div className="text-xs text-white/80">Plywood</div>
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-bold text-primary-600 mb-1">{formatTZS(product.finalPrice)}</div>
                    <div className="text-xs text-gray-400 mb-1">per sheet (4ft x 8ft)</div>
                    <p className="text-xs text-gray-400 mb-2">Prices exclude VAT.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                      {product.description.slice(0, 100)}...
                    </p>
                    <span className="text-xs font-semibold text-primary-600 group-hover:underline">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Choose Plywood from Zanzibaba Timber?</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: Layers, title: 'All Thicknesses In Stock', desc: 'We carry every standard plywood thickness from 3mm through 18mm. Whatever your project demands — structural load-bearing or lightweight decorative work — we have the right sheet ready to go.' },
                  { icon: Shield, title: 'Construction-Grade Quality', desc: 'Every plywood sheet is sourced from certified manufacturers and meets construction industry standards. Multi-ply construction ensures consistent strength, smooth finishing surfaces, and reliable performance across Zanzibar.' },
                  { icon: Truck, title: 'FREE Delivery Across Zanzibar', desc: 'We deliver plywood sheets to every location in Zanzibar — Stone Town, Paje, Nungwi, Kendwa, Jambiani, and beyond. FREE Delivery Across Zanzibar.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary-600 mb-2" />
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Plywood Thickness Guide for Zanzibar</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary-500" /> Structural Plywood (12mm – 18mm)
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Thicker plywood grades designed for load-bearing applications. Ideal for flooring, roofing, concrete formwork, heavy-duty shelving, and structural sheathing in Zanzibar construction projects.
                  </p>
                  <ul className="space-y-2">
                    {['Structural flooring and subflooring', 'Roofing and ceiling installations', 'Concrete formwork and shuttering', 'Heavy-duty shelving and storage'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-500" /> Interior & Decorative (3mm – 9mm)
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Lighter plywood grades for interior and decorative use. Perfect for wall paneling, furniture backing, ceiling accents, signage, and craft projects across Zanzibar.
                  </p>
                  <ul className="space-y-2">
                    {['Interior wall paneling and lining', 'Furniture backing and drawer bottoms', 'Decorative ceiling panels', 'Craft, model-making, and signage'].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">Plywood Specifications Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Thickness</th>
                      <th className="text-left py-3 px-3 text-sm">Sheet Size</th>
                      <th className="text-left py-3 px-3 text-sm">Material</th>
                      <th className="text-left py-3 px-3 text-sm">Moisture Resistance</th>
                      <th className="text-right py-3 px-3 text-sm">Price (TZS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plywoodProducts.map((product) => (
                      <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-3 font-semibold text-sm">
                          <Link href={`/plywood/${product.slug}`} className="text-primary-600 hover:underline">{product.thickness}</Link>
                        </td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">1220 × 2440 mm / 4ft × 8ft</td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Construction Plywood</td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">
                          {product.thickness === '18mm' || product.thickness === '15mm' ? 'Moderate' : product.thickness === '12mm' ? 'Limited' : 'Minimal'}
                        </td>
                        <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(product.finalPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Prices exclude VAT.</p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">FREE Delivery Across Zanzibar</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                We deliver construction plywood and marine board to every location across Zanzibar. FREE Delivery Across Zanzibar.
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
              <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to Order Plywood?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Contact us on WhatsApp for instant pricing, bulk discounts, and delivery scheduling. We respond within 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber, I need plywood for my construction project. Please share pricing and delivery options.')}
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

            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                <Link href="/plywood" className="font-semibold text-primary-600 hover:underline">All Plywood</Link>
                <span className="text-gray-300">|</span>
                <Link href="/marine-board" className="text-primary-600 hover:underline">Marine Board</Link>
                <span className="text-gray-300">|</span>
                <Link href="/prices" className="text-primary-600 hover:underline">Prices</Link>
                <span className="text-gray-300">|</span>
                <Link href="/" className="text-primary-600 hover:underline">Home</Link>
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
