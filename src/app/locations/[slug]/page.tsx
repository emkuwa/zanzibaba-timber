import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCATIONS, TIMBER_SIZES, PRODUCT_VARIANTS, BLOG_POSTS, generateWhatsAppLink, formatVariantLabel } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const location = LOCATIONS.find((l) => l.slug === params.slug)
  if (!location) return {}

  return generateSEOMetadata(
    `Timber Delivery ${location.name} Zanzibar - Treated Pine & Teak Wood Poles Supplier`,
    `${location.description}. Buy premium timber in ${location.name}, Zanzibar. 2x2, 2x3, 2x4, 2x6, 2x8 in Treated Pine. Teak wood poles 2-6 inch. Cash on delivery, mobile money & bank transfer. Order your construction timber in ${location.name} today.`,
    'en',
    `/locations/${location.slug}`,
    undefined,
    [
      `timber delivery ${location.name}`,
      `treated pine zanzibar`,
      `teak poles zanzibar`,
      `construction timber zanzibar`,
      `mbao za pine`,
      `mbao za dawa`,
    ]
  )
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = LOCATIONS.find((l) => l.slug === params.slug)
  if (!location) notFound()

  const otherLocations = LOCATIONS.filter((l) => l.slug !== params.slug).slice(0, 5)

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Delivery Locations', url: '/locations' },
    { name: location.name, url: `/locations/${location.slug}` },
  ])

  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/locations" className="text-primary-600 hover:underline">Delivery Locations</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">{location.name}</span>
            </nav>

            <div className="grid md:grid-cols-5 gap-8 md:gap-12">
              <div className="md:col-span-3">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Timber Delivery in <span className="text-primary-600">{location.name}</span>
                </h1>

                <div className="prose dark:prose-invert max-w-none mb-8">
                  <p>{location.description}. We provide fast, reliable timber delivery throughout {location.name} and surrounding areas with cash on delivery, mobile money, and bank transfer payments available.</p>

                  {location.uniqueContent && (
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{location.uniqueContent}</p>
                    </div>
                  )}

                  <h2>Timber Sizes Available in {location.name}</h2>
                  <p>We deliver all premium timber sizes to {location.name}. 1x6, 1x8, 1x10 in Mninga/Hardwood. 2x2, 2x3, 2x4, 2x6 in Treated Pine. Here are the standard sizes we supply:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-6">
                    {TIMBER_SIZES.map((s) => (
                      <Link
                        key={s.id}
                        href={`/timber-sizes/${s.id}`}
                        className="block p-4 bg-primary-50 dark:bg-gray-800 rounded-lg border border-primary-100 dark:border-gray-700 hover:border-primary-300 hover:shadow-md transition-all text-center"
                      >
                        <div className="font-bold text-primary-600 text-lg">{PRODUCT_VARIANTS.filter(variant => variant.size === s.name).map(formatVariantLabel).join(' / ') || s.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{s.dimensions}</div>
                      </Link>
                    ))}
                  </div>
                  <p>Each size is available in 12ft and/or 18ft lengths. All timber is kiln-dried, treated pine — perfect for {location.name}’s tropical climate. Contact us for pricing and availability.</p>

                  <h2>Our Services in {location.name}</h2>
                  <ul>
                    <li>Treated pine timber supply for residential and commercial projects</li>
                    <li>Hotel and resort construction materials delivery</li>
                    <li>Villa construction timber supply</li>
                    <li>Custom cutting and sizing available</li>
                    <li>Wholesale and bulk pricing for contractors</li>
                    <li>Cash on delivery, mobile money & bank transfer — flexible payment</li>
                  </ul>

                  <h2>Why Choose Zanzibaba Timber for {location.name}</h2>
                  <ul>
                    <li><strong>High Quality Treated Timber</strong> — Professionally treated pine for Zanzibar’s tropical climate</li>
                    <li><strong>Reliable Delivery</strong> — Fast, scheduled delivery to {location.name} and surrounding areas</li>
                    <li><strong>Flexible Payments</strong> — Cash on delivery, mobile money, or bank transfer</li>
                    <li><strong>Large Stock</strong> — All standard sizes always available at our Kwa Ndevu yard</li>
                    <li><strong>Competitive Prices</strong> — Affordable rates for every project size</li>
                  </ul>
                </div>

                {/* Local FAQ Section */}
                <div className="border-t pt-8 mt-8">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Timber Delivery to {location.name}</h2>
                  <div className="space-y-4">
                    {[
                      {
                        question: `How fast is timber delivery to ${location.name}?`,
                        answer: `We offer fast, reliable timber delivery to ${location.name} within 24-48 hours for standard orders. Same-day delivery may be available for urgent orders — contact us via WhatsApp to check availability.`,
                      },
                      {
                        question: `What timber sizes are available in ${location.name}?`,
                        answer: `All standard timber sizes are available for delivery to ${location.name}: 1x6 (25x150mm), 1x8 (25x200mm), 1x10 (25x250mm) in Mninga/Hardwood, and 2x2 (50x50mm), 2x3 (50x75mm), 2x4 (50x100mm), and 2x6 (50x150mm) in Treated Pine — in 12ft and 18ft lengths.`,
                      },
                      {
                        question: `What payment options are available in ${location.name}?`,
                        answer: `We offer cash on delivery, mobile money, and bank transfer payments for all orders to ${location.name}. You only pay when your timber arrives at your site. Choose the payment method that works best for you.`,
                      },
                    ].map((faq, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                        <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href={`https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20I%20need%20timber%20delivery%20to%20${location.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Order Timber for {location.name}
                  </a>
                  <a
                    href="tel:+255716002790"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Call +255 716 002 790
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sticky top-28">
                  <h3 className="font-bold text-lg mb-4">Other Delivery Locations</h3>
                  <div className="space-y-3">
                    {otherLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all"
                      >
                        <div className="font-semibold text-primary-600">{loc.name}</div>
                        <div className="text-xs text-gray-500">{loc.description.slice(0, 60)}...</div>
                      </Link>
                    ))}
                  </div>

                  <h3 className="font-bold text-lg mt-6 mb-3">Available Timber Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {TIMBER_SIZES.map((s) => (
                      <Link
                        key={s.id}
                        href={`/timber-sizes/${s.id}`}
                        className="text-sm bg-primary-50 dark:bg-gray-700 text-primary-600 px-3 py-1 rounded-full hover:bg-primary-100"
                      >
                        {PRODUCT_VARIANTS.filter(variant => variant.size === s.name).map(formatVariantLabel).join(' / ') || s.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-500 mb-2">Need delivery to {location.name}?</p>
                    <a
                      href={`https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20I%20need%20timber%20delivery%20to%20${location.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Blog Articles */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles About Timber Supply in {location.name}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {BLOG_POSTS.filter(p => p.category === 'Locations' || p.slug.includes(location.slug)).slice(0, 4).map((post) => (
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

            <div className="border-t pt-8 mt-8 text-center">
              <Link href="/locations" className="text-primary-600 hover:underline font-medium">
                ← View All Delivery Locations
              </Link>
              <span className="mx-3 text-gray-300">|</span>
              <Link href="/timber-sizes" className="text-primary-600 hover:underline font-medium">
                View Timber Sizes
              </Link>
              <span className="mx-3 text-gray-300">|</span>
              <Link href="/timber-zanzibar" className="text-primary-600 hover:underline font-medium">
                Timber Zanzibar
              </Link>
              <span className="mx-3 text-gray-300">|</span>
              <Link href="/" className="text-primary-600 hover:underline font-medium">
                Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Footer />
      <FloatingButtons />
    </>
  )
}
