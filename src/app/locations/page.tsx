import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { LOCATIONS, TIMBER_SIZES } from '@/lib/data'
import { generateSEOMetadata, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Timber Delivery Locations Zanzibar - Paje, Nungwi, Stone Town & All Areas',
  'We deliver premium treated pine timber across all Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa and more. Cash on delivery, fast service.',
  'en',
  '/locations'
)

export default function Locations() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Delivery Locations', url: '/locations' },
  ])

  const itemList = getItemListSchema(
    LOCATIONS.map(l => ({ name: `Timber Delivery ${l.name}`, url: `/locations/${l.slug}` })),
    'Service'
  )

  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Delivery Locations</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Timber Delivery Across Zanzibar</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We deliver high quality treated pine timber to all major towns and resort areas across Zanzibar. 
              <strong> Cash on delivery</strong> available. Fast 24-48 hour service.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {LOCATIONS.map((location) => (
                <Link
                  key={location.id}
                  href={`/locations/${location.slug}`}
                  className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all"
                >
                  <h2 className="font-bold text-xl mb-2">{location.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{location.description}</p>
                  <span className="inline-block mt-3 text-primary-600 text-sm font-semibold">Order timber for {location.name} →</span>
                </Link>
              ))}
            </div>

            {/* Timber sizes available */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Timber Sizes Available for Delivery</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">All locations receive the full range of treated pine timber sizes:</p>
              <div className="flex flex-wrap gap-3">
                {TIMBER_SIZES.map((s) => (
                  <Link
                    key={s.id}
                    href={`/timber-sizes/${s.id}`}
                    className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all text-sm font-medium"
                  >
                    {s.name} ({s.dimensions})
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber%2C%20I%20need%20timber%20delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Order Timber Delivery via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
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
