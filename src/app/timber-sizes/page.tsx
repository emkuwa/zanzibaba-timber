import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Image from 'next/image'
import { generateSEOMetadata, getFAQSchema, getItemListSchema, getBreadcrumbSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, TIMBER_SIZES, WOOD_TYPE_GROUPS, LOCATIONS, HOMEPAGE_FAQ, generateWhatsAppLink, sizeToSlug, formatTZS, formatVariantLabel, formatSizeName } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Softwood Timber Sizes Zanzibar | Treated Pine & Teak Wood Poles',
  'Complete range of timber sizes in Zanzibar. Treated pine: 2x2, 2x3, 2x4, 2x6, 2x8. Teak wood poles (mitiki) 2-6 inch. Free delivery across Zanzibar.',
  'en',
  '/timber-sizes',
  undefined,
  [
    'timber zanzibar', 'treated pine', 'teak poles', 'mitiki',
    'construction timber', '2x4 timber', '2x6 timber',
    'mbao za pine', 'mbao za ujenzi', 'mbao za dawa',
  ]
)

export default function TimberSizes() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Softwood', url: '/timber-sizes' },
  ])

  const itemList = getItemListSchema(
    TIMBER_SIZES.map(s => {
      const group = WOOD_TYPE_GROUPS.find(g => g.woodType === s.woodType)
      const woodLabel = group?.name || 'Timber'
      return { name: `${s.name} ${woodLabel} (${s.dimensions})`, url: `/timber-sizes/${s.id}` }
    }),
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
              <span className="text-gray-500">Softwood</span>
            </nav>

            <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-8 md:mb-12 shadow-lg">
              <Image
                src="/images/gallery/timber-sizes-display.jpg"
                alt="Complete display of timber sizes at Zanzibaba Timber yard — treated pine and teak poles"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Softwood Timber <span className="text-primary-300">Zanzibar</span>
                </h1>
                <p className="text-gray-200 mt-1 md:mt-2 text-xs sm:text-sm md:text-lg leading-tight">Treated Pine • Teak Wood Poles</p>
              </div>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto text-sm md:text-base px-2">
              Premium timber for every project. Treated pine for framing. Teak poles for construction. Free delivery across Zanzibar.
            </p>
            <p className="text-center mb-8"><Link href="/hardwood" className="text-primary-600 font-semibold hover:underline">Looking for Mninga, Mvule or Mkongo? Browse Hardwood →</Link></p>

            <div className="max-w-3xl mx-auto mb-8 md:mb-10 px-2">
              <PriceNotice />
            </div>

            {/* Wood Type Groups with Header Images */}
            {WOOD_TYPE_GROUPS.map((group) => {
              const groupSizes = TIMBER_SIZES.filter(s => s.woodType === group.woodType)
              const groupVariants = PRODUCT_VARIANTS.filter(v => {
                const size = TIMBER_SIZES.find(s => s.id === sizeToSlug(v.size))
                return size?.woodType === group.woodType
              })

              return (
                <div key={group.id} className="mb-10 md:mb-16">
                  {/* Text above image */}
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{group.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-3xl">{group.description}</p>
                  </div>

                  {/* Header Image */}
                  <div className="w-full rounded-xl overflow-hidden mb-6 shadow-lg bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={group.image}
                      alt={group.name}
                      width={1600}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Group Products Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {groupVariants.map((v) => (
                      <Link
                        key={v.sku}
                        href={`/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`}
                        className="p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all hover:border-primary-300 bg-white dark:bg-gray-800"
                      >
                        <div className="text-base md:text-lg font-bold text-primary-600 mb-1">{formatVariantLabel(v)}</div>
                        <div className="text-xs text-gray-400 mb-1">{v.dimensions}</div>
                        {v.price && <div className="text-xs font-semibold text-green-600 mt-1">{formatTZS(v.price)}</div>}
                      </Link>
                    ))}
                  </div>

                  {/* View All Link */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {groupSizes.map(s => (
                      <Link
                        key={s.id}
                        href={`/timber-sizes/${s.id}`}
                        className="text-xs md:text-sm text-primary-600 hover:underline"
                      >
                        {formatSizeName(s.name)} →
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Delivery & CTA */}
            <div className="mb-8 md:mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-40 sm:h-48 md:h-auto md:flex-1 order-2 md:order-1">
                  <Image
                    src="/images/gallery/timber-delivery-zanzibar.jpg"
                    alt="Bulk timber delivery truck transporting timber across Zanzibar island from Kwa Ndevu yard"
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

            {/* FAQs */}
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
