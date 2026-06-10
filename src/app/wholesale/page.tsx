import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { BLOG_POSTS, TIMBER_SIZES, INDUSTRIES, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Wholesale Pine Timber Zanzibar - Bulk Pricing from 500m & 1000m+',
  'Wholesale treated pine timber in Zanzibar with volume discounts. 500m+ = 15% off. 1000m+ = 20% off. Custom sizes available. Dedicated account manager, scheduled delivery, and priority service for bulk buyers.',
  'en',
  '/wholesale'
)

const faq = [
  {
    question: 'What wholesale timber discounts do you offer in Zanzibar?',
    answer: 'We offer tiered wholesale pricing: orders above 500 meters receive 15% discount, and orders above 1000 meters receive 20% discount. Contact us for custom quotes on very large orders.',
  },
  {
    question: 'Can I order custom timber sizes for wholesale?',
    answer: 'Yes, special sizes are available for wholesale orders. Contact us with your requirements and we will source or cut timber to your specifications. Minimum quantities may apply for custom sizes.',
  },
  {
    question: 'Do you offer scheduled delivery for wholesale buyers?',
    answer: 'Yes, wholesale buyers receive priority scheduled delivery. We work with your project timeline to ensure timber arrives when you need it. Cash on delivery is available for all wholesale orders.',
  },
  {
    question: 'What is the minimum order for wholesale pricing?',
    answer: 'Wholesale pricing applies to orders above 500 meters of timber. However, we encourage all buyers to contact us — we may be able to offer competitive pricing on smaller quantities depending on current stock and availability.',
  },
]

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Wholesale Supply', url: '/wholesale' },
])

export default function Wholesale() {
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
              <span className="text-gray-500">Wholesale Supply</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Wholesale Timber Supply Zanzibar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Zanzibaba Timber offers the most competitive <strong>wholesale pricing</strong> for treated pine timber in Zanzibar. Whether you are a contractor building multiple projects, a retailer stocking your yard, or a developer managing large-scale construction, our tiered wholesale discounts help you maximize your budget.
                </p>

                <ImageWithFallback
                  src="/images/gallery/timber-loading-truck.jpg"
                  alt="Wholesale timber loading truck at Zanzibaba Timber yard"
                  aspectRatio="16/9"
                  className="w-full rounded-xl shadow-lg mb-8"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />

                <h2 className="text-2xl font-bold mb-4">Bulk Pricing Tiers</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 border-2 border-primary-200 dark:border-primary-800 rounded-xl text-center bg-primary-50/50 dark:bg-gray-800">
                    <div className="text-5xl font-bold text-primary-600 mb-2">500m+</div>
                    <div className="text-2xl font-semibold text-green-600 mb-3">15% OFF</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Standard wholesale tier. Ideal for medium-sized projects and contractor supply.</p>
                  </div>
                  <div className="p-6 border-2 border-primary-400 dark:border-primary-600 rounded-xl text-center bg-primary-50/50 dark:bg-gray-800">
                    <div className="text-5xl font-bold text-primary-600 mb-2">1000m+</div>
                    <div className="text-2xl font-semibold text-green-600 mb-3">20% OFF</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Premium wholesale tier. Best value for large-scale developments and bulk buyers.</p>
                  </div>
                  <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-center bg-gray-50/50 dark:bg-gray-800">
                    <div className="text-5xl font-bold text-primary-600 mb-2">Custom</div>
                    <div className="text-2xl font-semibold text-primary-600 mb-3">Any Size</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Special sizes available on request. We accommodate unique project requirements.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">Wholesale Features</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Volume Discounts', desc: 'Tiered pricing from 500m+ with up to 20% off. The more you order, the more you save.' },
                    { title: 'Dedicated Account Manager', desc: 'A personal account manager for all your wholesale orders. Consistent, reliable service.' },
                    { title: 'Scheduled Delivery', desc: 'Plan your deliveries around your project schedule. Priority booking for wholesale clients.' },
                    { title: 'Priority Service', desc: 'Express processing and loading for wholesale orders. Your time is valuable.' },
                    { title: 'Custom Sizes Available', desc: 'Special dimensions cut to your specifications. Contact us with your requirements.' },
                    { title: 'Consistent Quality', desc: 'All wholesale timber is professionally treated, kiln-dried, and inspected before delivery.' },
                  ].map((feature) => (
                    <div key={feature.title} className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-bold text-primary-600 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">Why Buy Wholesale from Zanzibaba Timber</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Contractors, retailers, and developers across Zanzibar choose Zanzibaba Timber for wholesale supply because we offer <strong>genuine volume discounts</strong>, <strong>consistent stock availability</strong>, and <strong>reliable delivery logistics</strong>. Our treated pine timber is sourced from sustainable plantations and processed to meet international quality standards. With our Kwa Ndevu yard serving as Zanzibar&apos;s central timber hub, we can fulfill large orders quickly and efficiently.
                </p>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Wholesale Timber in Zanzibar</h2>
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
                  <h3 className="text-xl font-bold mb-3">Get Your Wholesale Price List</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Contact us on WhatsApp for current wholesale pricing and availability. We respond within 30 minutes.
                  </p>
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, I am interested in wholesale pricing for bulk timber in Zanzibar. Please send me your price list.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700"
                  >
                    Get Wholesale Price List
                  </a>
                </div>

                {/* Related Blog Articles */}
                {BLOG_POSTS.filter(p => p.category === 'Contractors').slice(0, 4).length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {BLOG_POSTS.filter(p => p.category === 'Contractors').slice(0, 4).map((post) => (
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
                    <Link href="/villa-supply" className="text-primary-600 hover:underline">Villa Construction</Link>
                    <Link href="/government-supply" className="text-primary-600 hover:underline">Government Projects</Link>
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
                    {INDUSTRIES.filter(i => i.id !== 'wholesale').map((industry) => (
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
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, wholesale pricing inquiry.')}
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
