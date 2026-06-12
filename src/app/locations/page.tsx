import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'
import { LOCATIONS, TIMBER_SIZES, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Timber Delivery Locations Zanzibar | Paje, Nungwi, Stone Town & All Areas',
  'Zanzibaba Timber delivers premium treated pine timber to all Zanzibar locations: Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu and Ndevu. Cash on delivery. 24-48 hour service.',
  'en',
  '/locations'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Delivery Locations', url: '/locations' },
])

const locationFaq = [
  { question: 'What areas of Zanzibar do you deliver timber to?', answer: 'We deliver premium treated pine timber to all 11 Zanzibar locations: Paje, Nungwi, Kendwa, Jambiani, Kiwengwa, Matemwe, Stone Town, Fumba, Bububu, Chukwani, and Ndevu. Our fleet covers the entire island with 24-48 hour delivery for stock items.' },
  { question: 'How fast is timber delivery in Zanzibar?', answer: 'Delivery is typically within 24-48 hours for stock items across all Zanzibar locations. Same-day delivery may be available for urgent orders in select areas. Contact us via WhatsApp to check availability for your location.' },
  { question: 'Do you offer cash on delivery across Zanzibar?', answer: 'Yes, cash on delivery is available for all locations across Zanzibar. You only pay when your timber arrives at your site. This applies to all areas including Paje, Nungwi, Kendwa, Stone Town, and all other locations we serve.' },
  { question: 'Can I visit your timber yard?', answer: 'Yes, our main timber yard is located at Kwa Ndevu, Daraja Bovu, Zanzibar. You are welcome to visit, inspect our timber quality, and discuss your requirements with our team. We serve customers from all across Zanzibar.' },
]

const itemList = getItemListSchema(
  LOCATIONS.map(l => ({ name: `Pine Timber Delivery ${l.name}`, url: `/locations/${l.slug}` })),
  'Service'
)

export default function LocationsPage() {
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

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Timber Delivery Locations Across Zanzibar</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              Zanzibaba Timber delivers premium treated pine timber and construction materials to every corner of Zanzibar. 
              From beachfront resorts in Nungwi to heritage projects in Stone Town, our fleet covers all 11 major locations 
              with cash on delivery and 24-48 hour service.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={generateWhatsAppLink('Hello Zanzibaba Timber, I need timber delivery in Zanzibar. Please share pricing and availability for my area.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Order Timber Delivery
              </a>
              <a
                href="tel:+255716002790"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Call +255 716 002 790
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all bg-white dark:bg-gray-800 group"
                >
                  <h2 className="text-xl font-bold text-primary-600 mb-2 group-hover:underline">{loc.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{loc.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
                    <span>Order Timber for {loc.name}</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Timber Sizes Available for Delivery</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                All standard treated pine timber sizes are available for delivery to every Zanzibar location. 
                We stock the full range of construction timber sizes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {TIMBER_SIZES.map((size) => (
                  <Link
                    key={size.id}
                    href={`/timber-sizes/${size.id}`}
                    className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all text-center"
                  >
                    <div className="font-semibold text-primary-600">{size.name}</div>
                    <div className="text-xs text-gray-500">{size.dimensions}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Timber Delivery in Zanzibar</h2>
              <div className="space-y-4">
                {locationFaq.map((item, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                    <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-primary-50 dark:bg-gray-800 rounded-xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-3">Need Delivery to a Specific Location?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Contact us on WhatsApp with your location and requirements. We respond within 30 minutes during business hours.
              </p>
              <a
                href={generateWhatsAppLink('Hello Zanzibaba Timber, I need timber delivery to my location in Zanzibar. Please advise on pricing and availability.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Inquire About Delivery
              </a>
            </div>

            <div className="border-t pt-8">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/" className="text-primary-600 hover:underline">Home</Link>
                <span className="text-gray-300">|</span>
                <Link href="/timber-sizes" className="text-primary-600 hover:underline">Timber Sizes</Link>
                <span className="text-gray-300">|</span>
                <Link href="/prices" className="text-primary-600 hover:underline">Timber Prices</Link>
                <span className="text-gray-300">|</span>
                <Link href="/delivery" className="text-primary-600 hover:underline">Delivery Service</Link>
                <span className="text-gray-300">|</span>
                <Link href="/timber-zanzibar" className="text-primary-600 hover:underline">Timber Zanzibar</Link>
                <span className="text-gray-300">|</span>
                <Link href="/contact" className="text-primary-600 hover:underline">Contact Us</Link>
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
