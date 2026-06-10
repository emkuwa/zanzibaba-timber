import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { BLOG_POSTS, TIMBER_SIZES, INDUSTRIES, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Government Timber Supply Zanzibar - Schools, Hospitals & Public Works',
  'Trusted bulk timber supplier for government contracts in Zanzibar. Schools, hospitals, infrastructure and community projects. Volume discounts, credit terms, dedicated account manager and island-wide delivery.',
  'en',
  '/government-supply'
)

const faq = [
  {
    question: 'Does Zanzibaba Timber supply timber for government projects?',
    answer: 'Yes, we are an established supplier for government and public sector construction projects across Zanzibar. We have experience supplying timber for schools, healthcare facilities, government offices, and community infrastructure projects.',
  },
  {
    question: 'Do you offer credit terms for government contracts?',
    answer: 'Yes, we offer flexible credit terms for government agencies and approved contractors. We understand the procurement cycles and payment schedules involved in public sector projects.',
  },
  {
    question: 'Can you handle large-scale bulk orders for public works?',
    answer: 'Absolutely. We maintain large stock levels at our Kwa Ndevu yard and can handle orders of any scale for government projects. Our supply chain ensures consistent delivery even for the largest contracts.',
  },
  {
    question: 'What timber sizes are commonly used in school construction?',
    answer: 'School construction in Zanzibar typically uses 2x4 and 2x6 for structural framing, 1x6 for roofing battens, and 2x2 for partitioning. All sizes are available in 12ft and 18ft lengths with bulk pricing.',
  },
]

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Government Projects', url: '/government-supply' },
])

export default function GovernmentSupply() {
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
              <span className="text-gray-500">Government Projects</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Government & Contractor Timber Supply Zanzibar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Zanzibaba Timber is a trusted partner for <strong>government agencies</strong>, <strong>public works contractors</strong>, and <strong>large-scale developers</strong> across Zanzibar. We provide bulk treated pine timber for schools, hospitals, infrastructure projects, and community development with competitive pricing and reliable supply chains.
                </p>

                <ImageWithFallback
                  src="/images/gallery/government-construction-project.jpg"
                  alt="Government construction project using Zanzibaba Timber supply in Zanzibar"
                  aspectRatio="16/9"
                  className="w-full rounded-xl shadow-lg mb-8"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />

                <h2 className="text-2xl font-bold mb-4">Large-Scale Timber Solutions for Public Projects</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Government construction projects demand reliability, consistency, and value for money. At Zanzibaba Timber, we have the stock capacity, logistics network, and procurement expertise to meet these requirements. Our treated pine timber is ideal for public buildings, educational facilities, healthcare infrastructure, and community projects across Zanzibar.
                </p>

                <h3 className="text-xl font-bold mb-3">Project Types We Supply</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'School Construction', desc: 'Classrooms, administrative buildings, and dormitories. All timber sizes required for educational infrastructure.' },
                    { title: 'Healthcare Facilities', desc: 'Hospitals, clinics, and health centers. Treated timber for medical facility construction and expansion.' },
                    { title: 'Public Infrastructure', desc: 'Government offices, community centers, and public buildings. Reliable supply for civic projects.' },
                    { title: 'Community Projects', desc: 'Housing schemes, religious buildings, and community facilities. Supporting Zanzibar development.' },
                  ].map((project) => (
                    <div key={project.title} className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-bold text-primary-600 mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3">Government Contract Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Volume Discounts', desc: 'Competitive pricing for large-scale orders. Reduced rates for government and institutional procurement.' },
                    { title: 'Credit Terms', desc: 'Flexible payment arrangements aligned with government budget cycles and procurement processes.' },
                    { title: 'Project Consultation', desc: 'Technical advice on timber selection, quantities, and specifications for public projects.' },
                    { title: 'Dedicated Account Manager', desc: 'A single point of contact for your entire project, ensuring consistency and accountability.' },
                    { title: 'Bulk Stock Availability', desc: 'Large inventory maintained at our Kwa Ndevu yard to meet urgent project deadlines.' },
                    { title: 'Island-Wide Delivery', desc: 'Fleet capacity to deliver to any location in Zanzibar, including remote community projects.' },
                  ].map((benefit) => (
                    <div key={benefit.title} className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-bold text-primary-600 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-4">Why Government Agencies Choose Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Government contractors and agencies choose Zanzibaba Timber because we deliver <strong>consistent quality</strong>, <strong>competitive government pricing</strong>, and <strong>reliable logistics</strong>. We understand the importance of keeping public projects on schedule and within budget. Our treated pine timber meets the required standards for public buildings and infrastructure, and our team is experienced in handling government procurement procedures.
                </p>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Government Timber Supply in Zanzibar</h2>
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
                  <h3 className="text-xl font-bold mb-3">Discuss Your Government Project</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Contact our government contracts team on WhatsApp for a customized proposal.
                  </p>
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, I would like to discuss a government contract for timber supply in Zanzibar.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700"
                  >
                    Contact for Government Projects
                  </a>
                </div>

                {/* Related Blog Articles */}
                {BLOG_POSTS.filter(p => p.category === 'Government').slice(0, 4).length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {BLOG_POSTS.filter(p => p.category === 'Government').slice(0, 4).map((post) => (
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
                    {INDUSTRIES.filter(i => i.id !== 'government-supply').map((industry) => (
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
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, government contract timber inquiry.')}
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
