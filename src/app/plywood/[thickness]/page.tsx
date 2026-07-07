import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SHEET_PRODUCTS, SHEET_PRODUCT_FAQ, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getProductSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { Truck, Phone, MessageCircle, CheckCircle, Shield, Layers, Package } from 'lucide-react'

export async function generateStaticParams() {
  return SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood').map((product) => ({
    thickness: product.slug,
  }))
}

export function generateMetadata({ params }: { params: { thickness: string } }) {
  const product = SHEET_PRODUCTS.find(p => p.categoryId === 'plywood' && p.slug === params.thickness)
  if (!product) return {}

  return generateSEOMetadata(
    product.seoTitle,
    product.seoDescription,
    'en',
    `/plywood/${product.slug}`
  )
}

export default function PlywoodProductPage({ params }: { params: { thickness: string } }) {
  const product = SHEET_PRODUCTS.find(p => p.categoryId === 'plywood' && p.slug === params.thickness)
  if (!product) notFound()

  const otherProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood' && p.id !== product.id)
  const marineProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board')

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Plywood', url: '/plywood' },
    { name: product.name, url: `/plywood/${product.slug}` },
  ])

  return (
    <>
      <Header />
      <main>
        <section className="py-6 md:py-12 bg-white dark:bg-gray-900">
          <div className="container-custom px-3 md:px-4">
            <div className="relative w-full h-48 sm:h-56 md:h-72 rounded-lg md:rounded-xl overflow-hidden mb-6 md:mb-8 shadow-lg">
              <Image
                src="/images/gallery/timber-sizes-display.jpg"
                alt={`${product.name} construction plywood at Zanzibaba Timber yard in Zanzibar`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  {product.name} <span className="text-primary-300">Zanzibar</span>
                </h1>
                <p className="text-gray-200 mt-1 text-xs sm:text-sm">Construction Plywood — {product.thickness} — {product.sheetSize}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
              <div className="md:col-span-3">
                <nav className="mb-3 md:mb-4 text-xs md:text-sm" aria-label="Breadcrumb">
                  <Link href="/" className="text-primary-600 hover:underline">Home</Link>
                  <span className="mx-1 text-gray-400">/</span>
                  <Link href="/plywood" className="text-primary-600 hover:underline">Plywood</Link>
                  <span className="mx-1 text-gray-400">/</span>
                  <span className="text-gray-500">{product.name}</span>
                </nav>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Price per sheet</div>
                      <div className="text-3xl font-bold text-primary-600">{formatTZS(product.finalPrice)}</div>
                      <div className="text-xs text-gray-400">Price excludes VAT</div>
                    </div>
                    <a
                      href={generateWhatsAppLink(`Hello Zanzibaba Timber, I need ${product.name} for my project.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-lg text-sm"
                    >
                      Order Now
                    </a>
                  </div>
                </div>

                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  {product.name} — Construction Plywood
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Thickness:</strong> {product.thickness}
                </p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Sheet Size:</strong> {product.sheetSize}
                </p>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <PriceNotice />
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-500" /> Moisture Resistance
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{product.moistureResistance}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Applications
                  </h3>
                  <ul className="space-y-1.5">
                    {product.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-500" /> Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f) => (
                      <span key={f} className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-3">Advantages</h3>
                  <ul className="space-y-1.5">
                    {product.advantages.map((adv) => (
                      <li key={adv} className="flex items-start gap-2 text-sm">
                        <span className="text-primary-600 mt-0.5">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-3">Suitable Projects</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.suitableProjects.map((proj) => (
                      <span key={proj} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full">{proj}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-base mb-2">Buying Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{product.buyingGuide}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-6">
                  <a
                    href={generateWhatsAppLink(`Hello Zanzibaba Timber, I need ${product.name} for my project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> Request Quote
                  </a>
                  <a
                    href="tel:+255716002790"
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href={generateWhatsAppLink(`Hello Zanzibaba Timber, I need a bulk order of ${product.name}. Please share bulk pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-primary-600 text-primary-600 font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm"
                  >
                    <Package className="w-4 h-4" /> Bulk Order
                  </a>
                </div>

                <div className="border-t pt-4 md:pt-6 mt-4 md:mt-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">FAQs: {product.name}</h2>
                  <div className="space-y-2 md:space-y-3">
                    {product.faqs.map((faq, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 md:p-4">
                        <h3 className="font-semibold text-xs md:text-sm mb-1">{faq.question}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Other Plywood Sizes</h3>
                  <div className="space-y-2 md:space-y-3">
                    {otherProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/plywood/${p.slug}`}
                        className="block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all"
                      >
                        <div className="font-semibold text-primary-600 text-sm">{p.name}</div>
                        <div className="text-xs text-gray-500">{p.sheetSize}</div>
                        <div className="text-sm font-bold text-green-600 mt-1">{formatTZS(p.finalPrice)}</div>
                      </Link>
                    ))}
                  </div>

                  <h3 className="font-bold text-sm md:text-base mt-4 md:mt-6 mb-2 md:mb-3">Marine Board</h3>
                  <div className="space-y-2">
                    {marineProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/marine-board/${p.slug}`}
                        className="block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all"
                      >
                        <div className="font-semibold text-primary-600 text-sm">{p.name}</div>
                        <div className="text-xs text-gray-500">{p.sheetSize}</div>
                        <div className="text-sm font-bold text-green-600 mt-1">{formatTZS(p.finalPrice)}</div>
                      </Link>
                    ))}
                    <Link href="/marine-board" className="block text-center text-xs text-primary-600 hover:underline font-semibold">
                      View All Marine Board →
                    </Link>
                  </div>

                  <h3 className="font-bold text-sm md:text-base mt-4 md:mt-6 mb-2 md:mb-3">Delivery Areas</h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {LOCATIONS.slice(0, 6).map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="text-xs text-primary-600 hover:underline"
                      >
                        {loc.name}
                      </Link>
                    ))}
                    <Link href="/locations" className="text-xs text-primary-600 hover:underline font-semibold">
                      View all →
                    </Link>
                  </div>

                  <div className="mt-4 md:mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="w-4 h-4 text-primary-600" />
                      <h4 className="font-semibold text-sm">Island-Wide Delivery</h4>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                      We deliver plywood and marine board across all Zanzibar locations. Cash on delivery available.
                    </p>
                    <a
                      href={generateWhatsAppLink('Hello Zanzibaba Timber, I need delivery of plywood in Zanzibar.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-lg"
                    >
                      Request Delivery
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-10 border-t pt-4 md:pt-6">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                <Link href="/plywood" className="text-primary-600 hover:underline">← All Plywood</Link>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema(product.name, product.description, product.thickness)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {product.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(product.faqs)) }} />
      )}
      <Footer />
      <FloatingButtons />
    </>
  )
}
