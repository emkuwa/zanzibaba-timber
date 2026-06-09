import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { BLOG_POSTS, TIMBER_SIZES, INDUSTRIES, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Hotel Timber Supply Zanzibar - Bulk Treated Pine for Resorts & Lodges',
  'Specialized bulk treated pine timber supply for Zanzibar hotels resorts and lodges. Serving Nungwi, Kendwa, Paje, Stone Town & Kiwengwa. Custom cutting, pressure-treated, island-wide delivery with cash on delivery.',
  'en',
  '/hotel-supply'
)

const faq = [
  {
    question: 'Do you supply bulk timber to hotels in Zanzibar?',
    answer: 'Yes, we specialize in bulk timber supply for hotels resorts and lodges across Zanzibar including Nungwi, Kendwa, Paje, Stone Town and Kiwengwa. We handle orders of any size with competitive bulk pricing.',
  },
  {
    question: 'What timber sizes are recommended for hotel construction?',
    answer: 'For hotel construction in Zanzibar we recommend 2x4 and 2x6 for structural framing, 1x8 for decking and joinery, and 4x4 posts for columns and outdoor structures. All sizes stock at our Kwa Ndevu yard.',
  },
  {
    question: 'Can you deliver timber to my hotel project site?',
    answer: 'Absolutely. We deliver timber directly to hotel construction sites across Zanzibar with our own fleet. Cash on delivery is available. Typical delivery is within 24-48 hours for stock items.',
  },
  {
    question: 'Do you offer payment terms for hospitality businesses?',
    answer: 'Yes, we offer flexible payment terms for established hotels and hospitality businesses. Contact us to discuss credit arrangements for your ongoing supply needs.',
  },
]

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Hotel & Resort Supply', url: '/hotel-supply' },
])

export default function HotelSupply() {
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
              <span className="text-gray-500">Hotel & Resort Supply</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Hotel & Resort Timber Supply Zanzibar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  From beachfront resorts in <strong>Nungwi</strong> to boutique hotels in <strong>Stone Town</strong>, Zanzibaba Timber is the trusted supplier for Zanzibar&apos;s hospitality sector. We deliver bulk quantities of premium treated pine timber tailored to hotel construction, renovation, and ongoing maintenance.
                </p>

                <img
                  src="/images/gallery/hotel-project-zanzibar.jpg"
                  alt="Hotel construction project using Zanzibaba Timber supply in Zanzibar"
                  className="w-full rounded-xl shadow-lg mb-8"
                  loading="lazy"
                />

                <h2 className="text-2xl font-bold mb-4">Bulk Timber for Hospitality Construction</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Zanzibar&apos;s hospitality industry is growing rapidly, with new resorts and hotel expansions across the island. At Zanzibaba Timber, we understand the unique demands of hotel construction — tight deadlines, large volumes, consistent quality, and reliable supply chains. Our treated pine timber is kiln-dried and professionally treated to withstand Zanzibar&apos;s tropical coastal climate, making it the ideal choice for hotel projects.
                </p>

                <h3 className="text-xl font-bold mb-3">Hotels and Resorts We Serve</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { name: 'Nungwi', desc: 'Beach resorts and luxury lodges' },
                    { name: 'Kendwa', desc: 'Premium beachfront hotels' },
                    { name: 'Paje', desc: 'Boutique hotels and eco-lodges' },
                    { name: 'Stone Town', desc: 'Heritage and boutique properties' },
                    { name: 'Kiwengwa', desc: 'All-inclusive beach resorts' },
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

                <h3 className="text-xl font-bold mb-3">Our Hotel Supply Services</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Bulk Timber Supply', desc: 'Large volume orders for major hotel projects. We maintain high stock levels to meet your schedule.' },
                    { title: 'Custom Cutting', desc: 'Pre-cut timber to your specifications. Save time and reduce waste on your construction site.' },
                    { title: 'Pressure-Treated Options', desc: 'All timber is professionally treated for termite and weather resistance. Ideal for coastal environments.' },
                    { title: 'Island-Wide Delivery', desc: 'Our fleet delivers directly to your hotel site across Zanzibar. Cash on delivery available.' },
                    { title: 'Flexible Payment Terms', desc: 'We work with hospitality businesses to arrange payment schedules that suit your project cash flow.' },
                    { title: 'Dedicated Account Management', desc: 'A single point of contact for all your hotel supply needs, ensuring consistency and reliability.' },
                  ].map((service) => (
                    <div key={service.title} className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-bold text-primary-600 mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">Why Hotels Choose Zanzibaba Timber</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Hotel developers and contractors across Zanzibar choose us because we deliver <strong>consistent quality</strong> at <strong>competitive prices</strong> with <strong>reliable logistics</strong>. Our treated pine timber is sourced from sustainable plantations and processed to meet international standards. Whether you&apos;re building a 50-room resort in Nungwi or renovating a boutique hotel in Stone Town, we have the stock and expertise to support your project.
                </p>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Hotel Timber Supply in Zanzibar</h2>
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
                  <h3 className="text-xl font-bold mb-3">Ready to Order Hotel Timber?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Contact us on WhatsApp for a quick quote. We respond within 30 minutes.
                  </p>
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, I need bulk timber for my hotel project in Zanzibar. Please share pricing and availability.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700"
                  >
                    Get Hotel Supply Quote
                  </a>
                </div>

                {/* Related Blog Articles */}
                {BLOG_POSTS.filter(p => p.category === 'Hotels').slice(0, 4).length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {BLOG_POSTS.filter(p => p.category === 'Hotels').slice(0, 4).map((post) => (
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
                    <Link href="/villa-supply" className="text-primary-600 hover:underline">Villa Construction</Link>
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
                    {INDUSTRIES.filter(i => i.id !== 'hotel-supply').map((industry) => (
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
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, hotel timber supply inquiry.')}
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
