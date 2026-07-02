import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Image from 'next/image'
import { generateSEOMetadata, getFAQSchema, getItemListSchema, getBreadcrumbSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, TIMBER_SIZES, LOCATIONS, HOMEPAGE_FAQ, generateWhatsAppLink, sizeToSlug, formatTZS, formatVariantLabel, formatSizeName } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Treated Pine Timber Sizes Zanzibar | 1x6, 1x8, 1x10, 2x2, 2x3, 2x4, 2x6 - 12ft & 18ft',
  'Complete range of treated pine timber sizes in Zanzibar. 1x6, 1x8, 1x10 in 12ft. 2x2, 2x3, 2x4, 2x6 in 12ft & 18ft. High quality construction timber with island-wide delivery.',
  'en',
  '/timber-sizes'
)

export default function TimberSizes() {
  const ft18Variants = PRODUCT_VARIANTS.filter(v => v.length === '18ft')
  const ft12Variants = PRODUCT_VARIANTS.filter(v => v.length === '12ft')

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Timber Sizes', url: '/timber-sizes' },
  ])

  const itemList = getItemListSchema(
    TIMBER_SIZES.map(s => ({ name: `${s.name} Pine Timber (${s.dimensions})`, url: `/timber-sizes/${s.id}` })),
    'Product'
  )

  return (
    <>
      <Header />
      <main>
        <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Timber Sizes</span>
            </nav>

            <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-8 md:mb-12 shadow-lg">
              <Image
                src="/images/gallery/timber-sizes-display.jpg"
                alt="Complete display of treated pine timber sizes at Zanzibaba Timber yard including 2x4, 2x6, 1x6, and 1x8 lumber"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Treated Pine Timber Sizes <span className="text-primary-300">Zanzibar</span>
                </h1>
                <p className="text-gray-200 mt-1 md:mt-2 text-xs sm:text-sm md:text-lg leading-tight">1x6, 1x8, 1x10 in 12ft • 2x2, 2x3, 2x4, 2x6 in 12ft &amp; 18ft</p>
              </div>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto text-sm md:text-base px-2">
              High quality treated pine timber available in all standard sizes. Kiln-dried and professionally treated for Zanzibar&apos;s tropical climate.
            </p>

            <div className="max-w-3xl mx-auto mb-8 md:mb-10 px-2">
              <PriceNotice />
            </div>

            <div className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 px-2">18ft Timber Sizes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
                  {ft18Variants.map((v) => (
                  <Link
                    key={v.sku}
                    href={`/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`}
                    className="p-3 md:p-5 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all hover:border-primary-300 bg-white dark:bg-gray-800"
                  >
                    <div className="text-lg md:text-2xl font-bold text-primary-600 mb-1">{formatVariantLabel(v)}</div>
                    <div className="text-xs text-gray-400 mb-1">{v.dimensions}</div>
                    {v.price && <div className="text-xs font-semibold text-green-600 mt-1">{formatTZS(v.price)}</div>}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 px-2">12ft Timber Sizes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
                  {ft12Variants.map((v) => (
                  <Link
                    key={v.sku}
                    href={`/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`}
                    className="p-3 md:p-5 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all hover:border-primary-300 bg-white dark:bg-gray-800"
                  >
                    <div className="text-lg md:text-2xl font-bold text-primary-600 mb-1">{formatVariantLabel(v)}</div>
                    <div className="text-xs text-gray-400 mb-1">{v.dimensions}</div>
                    {v.price && <div className="text-xs font-semibold text-green-600 mt-1">{formatTZS(v.price)}</div>}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 px-2">Timber Size Specifications & Uses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {TIMBER_SIZES.map((s) => (
                  <Link
                    key={s.id}
                    href={`/timber-sizes/${s.id}`}
                    className="p-3 md:p-5 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all bg-white dark:bg-gray-800 flex flex-col h-full"
                  >
                    <h3 className="font-bold text-base md:text-lg text-primary-600">{formatSizeName(s.name)}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">{s.dimensions}</p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 flex-1">{s.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-8 md:mb-12 bg-primary-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-4 md:p-8 flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Need a Different Size?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                    Special Sizes Available. Contact us for custom orders and non-standard dimensions.
                  </p>
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, I need a custom timber size inquiry. Please advise on availability.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-primary-700 text-center text-sm md:text-base"
                  >
                    Request Custom Size
                  </a>
                </div>
<div className="relative h-40 sm:h-48 md:h-auto md:flex-1">
                   <Image
                     src="/images/gallery/contractor-inspecting-timber.jpg"
                     alt="Contractor inspecting quality of treated pine timber at Zanzibaba yard before purchase"
                     fill
                     className="object-cover"
                     sizes="(max-width: 768px) 100vw, 50vw"
                   />
                 </div>
              </div>
            </div>

            <div className="mb-8 md:mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
<div className="relative h-40 sm:h-48 md:h-auto md:flex-1 order-2 md:order-1">
                   <Image
                     src="/images/gallery/timber-delivery-zanzibar.jpg"
                     alt="Bulk timber delivery truck transporting treated pine across Zanzibar island from Kwa Ndevu yard"
                     fill
                     className="object-cover"
                     sizes="(max-width: 768px) 100vw, 50vw"
                   />
                 </div>
                <div className="p-4 md:p-8 flex flex-col justify-center order-1 md:order-2">
                  <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">We Deliver Timber Across Zanzibar</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">All timber sizes available with island-wide delivery. Cash on payment option available.</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="bg-white dark:bg-gray-700 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all text-xs md:text-sm font-medium"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 px-2">FAQs About Timber Sizes in Zanzibar</h2>
              <div className="space-y-3 md:space-y-4">
                {HOMEPAGE_FAQ.slice(0, 5).map((faq, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 md:p-5">
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(HOMEPAGE_FAQ.slice(0, 5))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <Footer />
      <FloatingButtons />
    </>
  )
}