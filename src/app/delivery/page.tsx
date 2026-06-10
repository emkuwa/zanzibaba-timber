import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { TIMBER_SIZES, INDUSTRIES, LOCATIONS, BLOG_POSTS, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Timber Delivery Zanzibar - Island-Wide Service | Cash on Delivery | 24-48hr',
  'Fast timber delivery across all Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu. Cash on delivery. Bulk loads. 24-48 hour service.',
  'en',
  '/delivery'
)

const faq = [
  {
    question: 'How fast is timber delivery in Zanzibar?',
    answer: 'We offer 24-48 hour delivery for stock items across Zanzibar. Larger bulk orders may require additional processing time. Contact us to confirm availability and schedule your delivery.',
  },
  {
    question: 'Do you offer cash on delivery for timber?',
    answer: 'Yes, cash on delivery is available for all timber orders across Zanzibar. You only pay when your timber arrives at your site. We accept cash and mobile money payments.',
  },
  {
    question: 'What areas of Zanzibar do you deliver to?',
    answer: 'We deliver to all major locations including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu, and Ndevu. If you are building anywhere in Zanzibar, we can deliver.',
  },
  {
    question: 'Can you deliver bulk loads of timber?',
    answer: 'Yes, we have a fleet capable of delivering bulk loads of any size. From small orders for home renovations to full truckloads for major construction projects across the island.',
  },
]

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Delivery Service', url: '/delivery' },
])

const deliveryAreas = [
  { name: 'Paje', slug: 'paje', desc: 'Beach and resort area on the east coast' },
  { name: 'Jambiani', slug: 'jambiani', desc: 'South-east coastal village' },
  { name: 'Nungwi', slug: 'nungwi', desc: 'Northern tip beach destination' },
  { name: 'Kendwa', slug: 'kendwa', desc: 'North-west luxury resort area' },
  { name: 'Stone Town', slug: 'stone-town', desc: 'Historic city center' },
  { name: 'Kiwengwa', slug: 'kiwengwa', desc: 'North-east beach resort strip' },
  { name: 'Matemwe', slug: 'matemwe', desc: 'North-east coastal area' },
  { name: 'Fumba', slug: 'fumba', desc: 'South-west peninsula development' },
  { name: 'Chukwani', slug: 'chukwani', desc: 'Central-west residential area' },
  { name: 'Bububu', slug: 'bububu', desc: 'North-west coastal strip' },
  { name: 'Ndevu', slug: 'ndevu', desc: 'Kwa Ndevu yard and distribution hub' },
]

export default function Delivery() {
  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/locations" className="text-primary-600 hover:underline">Locations</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Delivery Service</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Timber Delivery Across Zanzibar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Zanzibaba Timber offers <strong>fast, reliable timber delivery</strong> to every corner of Zanzibar. With <strong>cash on delivery</strong>, <strong>24-48 hour service</strong>, and a fleet capable of handling bulk loads, we make getting timber to your project site simple and hassle-free.
                </p>

                <ImageWithFallback
                  src="/images/gallery/timber-delivery-zanzibar.jpg"
                  alt="Timber delivery truck delivering to a construction site in Zanzibar"
                  aspectRatio="16/9"
                  className="w-full rounded-xl shadow-lg mb-8"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />

                <h2 className="text-2xl font-bold mb-4">Island-Wide Timber Delivery Service</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Whether you are building a resort in Nungwi, a villa in Paje, or a community project in Fumba, we deliver your treated pine timber directly to your site. Our logistics team coordinates efficient routes across the island to ensure your timber arrives on time and in perfect condition. We cover all main roads and can access remote project locations across Zanzibar.
                </p>

                <h3 className="text-xl font-bold mb-3">Delivery Areas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {deliveryAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/locations/${area.slug}`}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="font-bold text-primary-600">{area.name}</div>
                      <div className="text-sm text-gray-500">{area.desc}</div>
                    </Link>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3">Delivery Features</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Fast Delivery', desc: '24-48 hour delivery for stock items. We prioritize speed without compromising quality.' },
                    { title: 'Cash on Delivery', desc: 'Pay when your timber arrives. No advance payment needed for standard orders.' },
                    { title: 'Island-Wide Coverage', desc: 'We deliver to all 11 locations across Zanzibar. From north to south, east to west.' },
                    { title: 'Bulk Loads', desc: 'Our fleet handles orders of any size. Full truckloads for major construction projects.' },
                    { title: 'Quality Inspection', desc: 'Inspect your timber before payment. We ensure every piece meets our quality standards.' },
                    { title: 'Flexible Scheduling', desc: 'Choose a delivery time that works for your project schedule. Morning or afternoon slots available.' },
                  ].map((feature) => (
                    <div key={feature.title} className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-bold text-primary-600 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">How Delivery Works</h2>
                <div className="grid md:grid-cols-5 gap-4 mb-8">
                  {[
                    { step: 1, title: 'Contact Us', desc: 'Reach out via WhatsApp with your timber requirements.' },
                    { step: 2, title: 'Get a Quote', desc: 'We respond within 30 minutes with competitive pricing.' },
                    { step: 3, title: 'Confirm Order', desc: 'Choose your delivery date and confirm your order.' },
                    { step: 4, title: 'Quality Check', desc: 'Your timber is inspected and loaded at our Kwa Ndevu yard.' },
                    { step: 5, title: 'Delivery & Pay', desc: 'Timber arrives at your site. Inspect and pay on delivery.' },
                  ].map((step) => (
                    <div key={step.step} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">{step.step}</div>
                      <div className="font-semibold text-sm mb-1">{step.title}</div>
                      <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                  ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Timber Delivery in Zanzibar</h2>
                  <div className="space-y-4">
                    {faq.map((item, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                        <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center bg-primary-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Schedule Your Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Contact us on WhatsApp to arrange your timber delivery. We respond within 30 minutes.
                  </p>
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, I want to arrange timber delivery in Zanzibar. Please share pricing and availability.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700"
                  >
                    Arrange Delivery
                  </a>
                </div>

                {/* Related Blog Articles */}
                {BLOG_POSTS.filter(p => p.category === 'Delivery').slice(0, 4).length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {BLOG_POSTS.filter(p => p.category === 'Delivery').slice(0, 4).map((post) => (
                        <Link
                          key={post.id}
                          href={`/blog/${post.slug}`}
                          className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all"
                        >
                          <div className="text-xs text-primary-600 mb-1">{post.category}</div>
                          <h3 className="font-semibold mb-1">{post.title}</h3>
                          <p className="text-sm text-gray-500">{post.excerpt}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Internal Links */}
                <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Explore More</h3>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/" className="text-primary-600 hover:underline">Home</Link>
                    <Link href="/timber-sizes" className="text-primary-600 hover:underline">Timber Sizes</Link>
                    <Link href="/locations" className="text-primary-600 hover:underline">All Delivery Locations</Link>
                    <Link href="/hotel-supply" className="text-primary-600 hover:underline">Hotel & Resort Supply</Link>
                    <Link href="/villa-supply" className="text-primary-600 hover:underline">Villa Construction</Link>
                    <Link href="/government-supply" className="text-primary-600 hover:underline">Government Projects</Link>
                    <Link href="/wholesale" className="text-primary-600 hover:underline">Wholesale Supply</Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Our Timber Sizes</h3>
                  <div className="space-y-3">
                    {TIMBER_SIZES.map((size) => (
                      <Link
                        key={size.id}
                        href={`/timber-sizes/${size.id}`}
                        className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
                      >
                        <div className="font-semibold text-primary-600">{size.name}</div>
                        <div className="text-sm text-gray-500">{size.dimensions}</div>
                        <div className="text-xs text-gray-400 mt-1">{size.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {INDUSTRIES.filter(i => i.id !== 'delivery').map((industry) => (
                      <Link
                        key={industry.id}
                        href={`/${industry.slug}`}
                        className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
                      >
                        <div className="font-semibold text-primary-600">{industry.name}</div>
                        <div className="text-sm text-gray-500">{industry.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-primary-50 dark:bg-gray-800 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Quick Quote</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Message us on WhatsApp for instant pricing and availability.
                  </p>
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, delivery inquiry.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 text-sm"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Footer />
      <FloatingButtons />
    </>
  )
}
