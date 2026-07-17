import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TIMBER_SIZES, SIZE_USES, SIZE_FAQ, LOCATIONS, PRODUCT_VARIANTS, BLOG_POSTS, generateWhatsAppLink, sizeToSlug, formatTZS, formatVariantLabel, formatSizeName } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import TransportCalculator from '@/components/TransportCalculator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getProductSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'

export async function generateStaticParams() {
  return TIMBER_SIZES.map((size) => ({
    size: size.id,
  }))
}

export function generateMetadata({ params }: { params: { size: string } }) {
  const timber = TIMBER_SIZES.find((s) => s.id === params.size)
  if (!timber) return {}

  const isTeak = timber.woodType === 'teak'
  const woodType = isTeak ? 'Teak (Mitiki)' : 'Pine'

  const baseKeywords = [
    `${timber.name} timber zanzibar`,
    `${timber.name} ${woodType.toLowerCase()}`,
    'construction timber',
    'delivery zanzibar',
  ]

  return generateSEOMetadata(
    `${timber.name} (${timber.dimensions}) ${woodType} Timber Zanzibar - ${isTeak ? 'Teak Wood Poles' : 'Treated Pine Timber'} Supplier`,
    `Premium ${timber.name} (${timber.dimensions}) ${isTeak ? 'teak wood poles' : 'treated pine timber'} in Zanzibar. ${timber.description}. Quality timber for construction, delivery across Zanzibar. Cash on delivery, mobile money & bank transfer.`,
    'en',
    `/timber-sizes/${timber.id}`,
    undefined,
    baseKeywords
  )
}

export default function TimberSizePage({ params }: { params: { size: string } }) {
  const timber = TIMBER_SIZES.find((s) => s.id === params.size)
  if (!timber) notFound()

  const isTeak = timber.woodType === 'teak'
  const woodType = isTeak ? 'Teak (Mitiki)' : 'Pine'

  const uses = SIZE_USES[timber.id] || []
  const faqs = SIZE_FAQ[timber.id] || []
  const otherSizes = TIMBER_SIZES.filter((s) => s.id !== timber.id)
  const variants = PRODUCT_VARIANTS.filter((v) => sizeToSlug(v.size) === timber.id)
  const has18ft = variants.some((v) => v.length === '18ft')
  const has12ft = variants.some((v) => v.length === '12ft')

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Timber Sizes', url: '/timber-sizes' },
    { name: `${timber.name} ${woodType} Timber`, url: `/timber-sizes/${timber.id}` },
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
                alt={`${timber.name} (${timber.dimensions}) treated pine timber at Zanzibaba Timber yard`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  {formatSizeName(timber.name)} {woodType} Timber <span className="text-primary-300">Zanzibar</span>
                </h1>
                <p className="text-gray-200 mt-1 text-xs sm:text-sm">{timber.dimensions} — {isTeak ? 'Teak Wood Poles' : 'Treated Pine'}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
              <div className="md:col-span-3">
                <nav className="mb-3 md:mb-4 text-xs md:text-sm" aria-label="Breadcrumb">
                  <Link href="/" className="text-primary-600 hover:underline">Home</Link>
                  <span className="mx-1 text-gray-400">/</span>
                  <Link href="/timber-sizes" className="text-primary-600 hover:underline">Sizes</Link>
                  <span className="mx-1 text-gray-400">/</span>
                  <span className="text-gray-500">{formatSizeName(timber.name)}</span>
                </nav>

                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  {formatSizeName(timber.name)} {woodType} Timber in Zanzibar
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Dimensions:</strong> {timber.dimensions}
                </p>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-6">
                  Available in {has12ft ? '12ft' : ''}{has12ft && has18ft ? ' & ' : ''}{has18ft ? '18ft' : ''}
                </p>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {timber.description}. Professionally treated for Zanzibar's tropical climate.
                </p>

                {variants.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {variants.map((v) => v.price && (
                      <div key={v.sku} className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                        <div>
                          <span className="font-semibold text-sm">{formatVariantLabel(v)}</span>
                          {v.dimensions && <span className="text-xs text-gray-400 ml-1">— {v.dimensions}</span>}
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-600">{formatTZS(v.price)}</div>
                          <div className="text-[10px] text-gray-400">per piece</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-4">
                  <PriceNotice />
                </div>

                {uses.length > 0 && (
                  <div className="mb-4 md:mb-6">
                    <h3 className="font-semibold text-sm md:text-base mb-2">Common Uses:</h3>
                    <ul className="text-xs md:text-sm space-y-1">
                      {uses.map((use) => (
                        <li key={use} className="flex items-start gap-1">
                          <span className="text-primary-600 mt-0.5">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-4 md:mb-6">
                  <a
                    href={`https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20I%20need%20${timber.name}%20timber`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-xs md:text-sm"
                  >
                    Get Quote: {timber.name}
                  </a>
                  <a
                    href="tel:+255716002790"
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-xs md:text-sm"
                  >
                    Call Now
                  </a>
                </div>

                {faqs.length > 0 && (
                  <div className="border-t pt-4 md:pt-6 mt-4 md:mt-6">
                    <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">FAQs: {timber.name} Timber</h2>
                    <div className="space-y-2 md:space-y-3">
                      {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 md:p-4">
                          <h3 className="font-semibold text-xs md:text-sm mb-1">{faq.question}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Other Sizes</h3>
                  <div className="space-y-2 md:space-y-3">
                    {otherSizes.map((s) => (
                      <Link
                        key={s.id}
                        href={`/timber-sizes/${s.id}`}
                        className="block p-2 md:p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all"
                      >
                        <div className="font-semibold text-primary-600 text-xs md:text-sm">{s.name}</div>
                        <div className="text-xs text-gray-500">{s.dimensions}</div>
                      </Link>
                    ))}
                  </div>

                  <h3 className="font-bold text-sm md:text-base mt-4 md:mt-6 mb-2 md:mb-3">Delivery Areas</h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {LOCATIONS.slice(0, 5).map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="text-xs md:text-sm text-primary-600 hover:underline"
                      >
                        {loc.name}
                      </Link>
                    ))}
                    <Link href="/locations" className="text-xs md:text-sm text-primary-600 hover:underline font-semibold">
                      View all →
                    </Link>
                  </div>

                  <div className="mt-4 md:mt-6">
                    <TransportCalculator />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-10 border-t pt-4 md:pt-6">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                <Link href="/timber-sizes" className="text-primary-600 hover:underline">
                  ← All Sizes
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/prices" className="text-primary-600 hover:underline">
                  Prices
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/timber-zanzibar" className="text-primary-600 hover:underline">
                  Timber Zanzibar
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/" className="text-primary-600 hover:underline">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProductSchema(`${timber.name} ${woodType} Timber`, timber.description!, timber.name)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
        />
      )}
      <Footer />
      <FloatingButtons />
    </>
  )
}