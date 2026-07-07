import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Link from 'next/link'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import { MessageCircle, Phone, CheckCircle, Layers, Truck, Shield } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Plywood Zanzibar — Construction Plywood Supplier | Zanzibaba Timber',
  'Zanzibaba Timber — Zanzibar\'s trusted plywood supplier. Construction plywood in 18mm, 15mm, 12mm, 9mm, 6mm, 3mm. 4ft x 8ft sheets. From TZS 18,000. Island-wide delivery.',
  'en',
  '/plywood-zanzibar',
  '/plywood'
)

const plywoodProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood')
const cheapestMarineBoard = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board').sort((a, b) => a.finalPrice - b.finalPrice)[0]
const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Plywood Zanzibar', url: '/plywood-zanzibar' },
])
const itemList = getItemListSchema(
  plywoodProducts.map(p => ({ name: p.name, url: `/plywood/${p.slug}` })),
  'Product'
)

const seoFAQ = [
  { question: 'Where can I buy plywood in Zanzibar?', answer: 'Zanzibaba Timber stocks construction plywood in all standard thicknesses (3mm to 18mm) at our Kwa Ndevu yard in Zanzibar. We deliver across all locations including Stone Town, Paje, Nungwi, Kendwa, and every area across the island.' },
  { question: 'What plywood thicknesses are available in Zanzibar?', answer: 'Zanzibaba Timber stocks plywood in 18mm, 15mm, 12mm, 9mm, 6mm, and 3mm thicknesses. All sheets are standard 4ft x 8ft (1220mm x 2440mm). From structural 18mm for flooring and roofing to thin 3mm for crafts and templates.' },
  { question: 'How much does plywood cost in Zanzibar?', answer: 'Plywood prices in Zanzibar at Zanzibaba Timber: 18mm at TZS 50,000, 15mm at TZS 46,000, 12mm at TZS 43,000, 9mm at TZS 40,000, 6mm at TZS 28,000, and 3mm at TZS 18,000 per sheet. Prices exclude VAT. FREE Delivery Across Zanzibar.' },
  { question: 'What is the standard plywood sheet size in Zanzibar?', answer: 'All plywood sheets at Zanzibaba Timber are standard construction size: 4ft x 8ft (1220mm x 2440mm). This is the most widely used size for construction projects across Zanzibar and Tanzania.' },
  { question: 'Can I get plywood delivered to my site in Zanzibar?', answer: 'Yes, Zanzibaba Timber delivers plywood and all construction timber products to every location across Zanzibar. We cover Stone Town, Paje, Nungwi, Kendwa, Jambiani, Matemwe, Kiwengwa, Fumba, and all other areas. FREE Delivery Across Zanzibar.' },
  { question: 'What is the difference between plywood and marine board?', answer: 'Standard plywood provides moderate moisture resistance suitable for interior and covered applications. Marine board uses waterproof phenolic resin for full water resistance, making it ideal for concrete formwork, boat building, and wet areas. Marine board costs more but performs better in wet conditions.' },
  { question: 'Which plywood thickness is best for flooring?', answer: 'For structural flooring and subflooring in Zanzibar, 18mm plywood is recommended. It provides the strength and rigidity needed for load-bearing floor applications. For lighter residential use with closely spaced joists, 15mm may also be suitable.' },
  { question: 'Can plywood be used for concrete formwork?', answer: 'Yes, 15mm and 18mm plywood are commonly used for concrete formwork in Zanzibar. For projects requiring repeated use or prolonged water contact, marine board is a better choice due to its waterproof phenolic resin construction.' },
]

export default function PlywoodZanzibarPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Plywood Zanzibar</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Plywood <span className="text-primary-600">Zanzibar</span> — Construction Plywood Supplier
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-sm md:text-base">
              Zanzibaba Timber is Zanzibar&apos;s trusted supplier of construction plywood. We stock all standard thicknesses from 3mm to 18mm in 4ft x 8ft sheets. From structural flooring and roofing to decorative paneling and craft work — we have the right plywood for every project on the island.
            </p>

            <div className="relative w-full h-48 sm:h-56 md:h-72 rounded-lg md:rounded-xl overflow-hidden mb-8 shadow-lg max-w-5xl mx-auto">
              <Image
                src="/images/gallery/construction-plywood-zanzibar.jpg"
                alt="Construction Plywood Supplier in Zanzibar"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <PriceNotice />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <a
                href={generateWhatsAppLink('Hello Zanzibaba Timber, I need plywood for my construction project. Please share pricing and availability.')}
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
                href="/plywood"
                className="inline-flex items-center justify-center gap-2 border border-primary-600 text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              >
                View All Plywood
              </Link>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">Plywood Products Available in Zanzibar</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {plywoodProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/plywood/${product.slug}`}
                    className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-4 text-white text-center">
                      <div className="text-3xl font-bold">{product.thickness}</div>
                      <div className="text-xs text-white/80">Plywood</div>
                    </div>
                    <div className="p-4">
                      <div className="text-lg font-bold text-primary-600 mb-1">{formatTZS(product.finalPrice)}</div>
                      <div className="text-xs text-gray-400 mb-1">per sheet — 4ft x 8ft</div>
                      <p className="text-xs text-gray-400 mb-2">Prices exclude VAT.</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{product.suitableProjects[0]}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">Plywood Thickness Guide</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary-500" /> Structural Plywood (12mm – 18mm)
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Thicker plywood grades designed for load-bearing applications. Ideal for flooring, roofing, concrete formwork, and heavy-duty construction in Zanzibar.
                  </p>
                  <ul className="space-y-2">
                    {['Flooring and subflooring', 'Roofing installations', 'Concrete formwork', 'Heavy-duty shelving'].map((item) => (
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
                    Lighter plywood grades for interior applications. Perfect for wall lining, furniture backing, decorative paneling, and craft projects across Zanzibar.
                  </p>
                  <ul className="space-y-2">
                    {['Interior wall paneling', 'Furniture backing', 'Decorative applications', 'Craft and model making'].map((item) => (
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
              <h2 className="text-2xl font-bold mb-6">Plywood Specifications</h2>
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

            <div className="max-w-4xl mx-auto mb-12">
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

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/marine-board" className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-primary-600 mb-1">Marine Board</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Waterproof sheets for formwork and marine use.</p>
                  <p className="text-xs text-gray-400 mt-1">From {cheapestMarineBoard ? formatTZS(cheapestMarineBoard.finalPrice) : 'TZS 46,000'} — Prices exclude VAT.</p>
                </Link>
                <Link href="/construction-plywood-zanzibar" className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-primary-600 mb-1">Construction Plywood</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Structural-grade plywood for building projects.</p>
                  <p className="text-xs text-gray-400 mt-1">FREE Delivery Across Zanzibar.</p>
                </Link>
                <Link href="/plywood-price-zanzibar" className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-primary-600 mb-1">Plywood Prices</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Updated pricing for all plywood thicknesses.</p>
                  <p className="text-xs text-gray-400 mt-1">TZS 18,000 — TZS 50,000.</p>
                </Link>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions About Plywood in Zanzibar</h2>
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
              <h2 className="text-xl md:text-2xl font-bold mb-3">Need Plywood in Zanzibar?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Contact Zanzibaba Timber for quality plywood at competitive prices. We respond within 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber, I need plywood for my project.')}
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
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                <Link href="/plywood" className="text-primary-600 hover:underline">Plywood Products</Link>
                <span className="text-gray-300">|</span>
                <Link href="/marine-board" className="text-primary-600 hover:underline">Marine Board Products</Link>
                <span className="text-gray-300">|</span>
                <Link href="/prices" className="text-primary-600 hover:underline">All Prices</Link>
                <span className="text-gray-300">|</span>
                <Link href="/delivery" className="text-primary-600 hover:underline">Delivery Service</Link>
                <span className="text-gray-300">|</span>
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
