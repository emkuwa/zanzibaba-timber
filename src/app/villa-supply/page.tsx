import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { BLOG_POSTS, TIMBER_SIZES, INDUSTRIES, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Villa Timber Supply Zanzibar - Premium Treated Pine for Luxury Villas',
  'Premium treated pine timber for luxury villa construction in Zanzibar. Serving Paje, Nungwi, Kendwa, Matemwe & Jambiani. Custom timber, traditional joinery, decking, roofing and landscaping supply with island-wide delivery.',
  'en',
  '/villa-supply'
)

const faq = [
  {
    question: 'What timber is best for beachfront villa construction in Zanzibar?',
    answer: 'Treated pine timber is the best choice for beachfront villa construction in Zanzibar. It is professionally treated to resist termites, rot, and salt air corrosion. 2x4 and 2x6 for framing, 1x8 for decking, and 4x4 for structural posts are the most popular sizes.',
  },
  {
    question: 'Do you deliver timber to villa construction sites?',
    answer: 'Yes, we deliver directly to villa construction sites across Zanzibar including Paje, Nungwi, Kendwa, Matemwe, and Jambiani. Cash on delivery is available. Typical delivery is within 24-48 hours for stock items.',
  },
  {
    question: 'Can you supply timber for traditional Swahili-style villas?',
    answer: 'Absolutely. We supply timber suitable for traditional Swahili architecture including custom sizes for joinery, carved elements, and structural components. Our team can advise on the right timber for authentic Zanzibar design.',
  },
  {
    question: 'Do you offer bulk discounts for villa developers?',
    answer: 'Yes, we offer volume discounts for villa developers and contractors. Orders above 500m qualify for 15% discount, and orders above 1000m qualify for 20% discount. Contact us for a custom quote on your villa project.',
  },
]

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Villa Construction', url: '/villa-supply' },
])

export default function VillaSupply() {
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
              <span className="text-gray-500">Villa Construction</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Villa Construction Timber Supply Zanzibar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Luxury villas across Zanzibar trust Zanzibaba Timber for their construction needs. From <strong>beachfront developments in Paje</strong> to <strong>high-end residences in Kendwa</strong>, we supply premium treated pine timber that combines structural integrity with the natural aesthetic the island is famous for.
                </p>

                <ImageWithFallback
                  src="/images/gallery/villa-construction-zanzibar.jpg"
                  alt="Luxury villa construction using Zanzibaba Timber in Zanzibar"
                  aspectRatio="16/9"
                  className="w-full rounded-xl shadow-lg mb-8"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />

                <h2 className="text-2xl font-bold mb-4">Premium Timber for Luxury Villa Developments</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Building a villa in Zanzibar demands materials that can withstand the tropical coastal environment while delivering the quality finishes expected in luxury developments. Our treated pine timber is kiln-dried and professionally treated to resist termites, rot, and humidity — making it the preferred choice for villa architects and builders across the island.
                </p>

                <h3 className="text-xl font-bold mb-3">Areas We Serve for Villa Construction</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { name: 'Paje', desc: 'Beachfront and eco-luxury villas' },
                    { name: 'Nungwi', desc: 'Northern beach resorts and villas' },
                    { name: 'Kendwa', desc: 'Premium luxury developments' },
                    { name: 'Matemwe', desc: 'North-east coastal villas' },
                    { name: 'Jambiani', desc: 'South-east beach properties' },
                  ].map((area) => (
                    <Link
                      key={area.name}
                      href={`/locations/${area.name.toLowerCase()}`}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="font-bold text-primary-600">{area.name}</div>
                      <div className="text-sm text-gray-500">{area.desc}</div>
                    </Link>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3">Villa Timber Services</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Custom Timber Supply', desc: 'Sizes and lengths tailored to your villa plans. We stock all standard sizes and accommodate custom orders.' },
                    { title: 'Traditional Joinery Timber', desc: 'Specialist timber for Swahili-style joinery, carved doors, window frames, and decorative elements.' },
                    { title: 'Decking & Flooring', desc: 'High-quality 1x8 and 1x10 treated pine for villa decks, verandas, and interior flooring applications.' },
                    { title: 'Roofing Timber', desc: '2x4 and 2x6 for roof framing, trusses, and pergolas. Treated to withstand Zanzibar sun and rain.' },
                    { title: 'Landscaping Timber', desc: 'Timber for garden structures, boundary fencing, pergolas, and outdoor living spaces around your villa.' },
                    { title: 'Island-Wide Delivery', desc: 'Direct delivery to your villa site with cash on payment. Fast 24-48 hour service for stock items.' },
                  ].map((service) => (
                    <div key={service.title} className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-bold text-primary-600 mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">Why Villa Developers Choose Zanzibaba Timber</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Villa developers and architects choose Zanzibaba Timber for our <strong>consistent quality</strong>, <strong>competitive pricing</strong>, and <strong>reliable delivery</strong>. Our treated pine timber is sustainably sourced and professionally processed to meet the exacting standards of luxury villa construction. We work closely with builders to ensure the right materials arrive on time and on budget.
                </p>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Villa Timber Supply in Zanzibar</h2>
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
                  <h3 className="text-xl font-bold mb-3">Start Your Villa Project</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Contact us on WhatsApp for pricing and availability. We respond within 30 minutes.
                  </p>
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, I need timber for my villa construction project in Zanzibar. Please share pricing.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700"
                  >
                    Request Villa Supply Quote
                  </a>
                </div>

                {/* Related Blog Articles */}
                {BLOG_POSTS.filter(p => p.category === 'Locations').slice(0, 4).length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {BLOG_POSTS.filter(p => p.category === 'Locations').slice(0, 4).map((post) => (
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
                    <Link href="/locations" className="text-primary-600 hover:underline">Delivery Locations</Link>
                    <Link href="/hotel-supply" className="text-primary-600 hover:underline">Hotel & Resort Supply</Link>
                    <Link href="/government-supply" className="text-primary-600 hover:underline">Government Projects</Link>
                    <Link href="/wholesale" className="text-primary-600 hover:underline">Wholesale Supply</Link>
                    <Link href="/delivery" className="text-primary-600 hover:underline">Delivery Service</Link>
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
                    {INDUSTRIES.filter(i => i.id !== 'villa-supply').map((industry) => (
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
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, villa timber supply inquiry.')}
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
