import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { BLOG_POSTS, generateWhatsAppLink, TIMBER_SIZES } from '@/lib/data'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { BlogPost } from '@/types'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return generateSEOMetadata(
    `${post.title} | Zanzibar Timber Blog`,
    post.excerpt,
    'en',
    `/blog/${post.slug}`
  )
}

function getRelatedPosts(current: BlogPost): BlogPost[] {
  return BLOG_POSTS
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, 3)
}

function getContentPadding(): string {
  const sizeMentions = TIMBER_SIZES.map(s => `${s.name} (${s.dimensions})`).join(', ')
  return `At Zanzibaba Timber, we supply premium treated pine timber across Zanzibar including Paje, Nungwi, Kendwa, Stone Town, and all locations. Our timber is kiln-dried and professionally treated to withstand Zanzibar's tropical climate, making it ideal for construction projects of all sizes.

We stock a comprehensive range of sizes including ${sizeMentions}. All sizes are available with island-wide delivery and cash on payment. Our team provides expert advice on timber selection, quantities, and project planning.

For bulk orders, we offer competitive wholesale pricing for contractors, hotels, resorts, and government projects. Special sizes are available on request. Contact us for current pricing and availability.

Whether you are building a beachfront villa in Paje, a resort in Nungwi, restoring a heritage building in Stone Town, or working on a government project, Zanzibaba Timber is your trusted timber supplier in Zanzibar.

Visit our timber yard at Kwa Ndevu, Daraja Bovu, or contact us via WhatsApp for prompt assistance. We respond within 30 minutes and can arrange delivery within 24-48 hours for stock items.`
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)
  const content = `${post.excerpt}\n\n${getContentPadding()}`

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      <Header />
      <main>
        <article className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <nav className="mb-6 text-sm" aria-label="Breadcrumb">
                  <Link href="/" className="text-primary-600 hover:underline">Home</Link>
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="/blog" className="text-primary-600 hover:underline">Blog</Link>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">{post.title}</span>
                </nav>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded">{post.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>

                <div className="prose dark:prose-invert max-w-none">
                  {content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 bg-primary-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Need Timber Advice?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Contact Zanzibaba Timber on WhatsApp for expert guidance, pricing, and delivery information.
                  </p>
                  <a
                    href={generateWhatsAppLink(`Hello Zanzibaba Timber, I read your article: ${post.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/timber-sizes"
                    className="text-primary-600 hover:underline text-sm"
                  >
                    View All Timber Sizes →
                  </Link>
                  <Link
                    href="/locations"
                    className="text-primary-600 hover:underline text-sm"
                  >
                    Delivery Locations →
                  </Link>
                  <Link
                    href="/"
                    className="text-primary-600 hover:underline text-sm"
                  >
                    Home →
                  </Link>
                </div>
              </div>

              <aside className="mt-8 lg:mt-0">
                <div className="sticky top-24">
                  {related.length > 0 && (
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                      <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {related.map((r) => (
                          <Link
                            key={r.id}
                            href={`/blog/${r.slug}`}
                            className="block border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0"
                          >
                            <span className="text-xs text-gray-500">{r.date}</span>
                            <h4 className="font-medium text-sm mt-1 text-gray-800 dark:text-gray-200 hover:text-primary-600">{r.title}</h4>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-3">Timber Sizes</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Browse our full range of treated pine timber sizes available in Zanzibar.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TIMBER_SIZES.slice(0, 4).map((s) => (
                        <Link
                          key={s.id}
                          href={`/timber-sizes/${s.id}`}
                          className="text-xs bg-white dark:bg-gray-700 px-3 py-1.5 rounded border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all"
                        >
                          {s.name}
                        </Link>
                      ))}
                      <Link
                        href="/timber-sizes"
                        className="text-xs text-primary-600 hover:underline px-3 py-1.5"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
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
