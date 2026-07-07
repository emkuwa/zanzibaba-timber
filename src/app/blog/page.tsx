import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { BLOG_POSTS, generateWhatsAppLink } from '@/lib/data'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Timber Blog - Zanzibar Construction & Timber Guides | Zanzibaba Timber',
  'Expert guides on treated pine timber in Zanzibar. Construction tips, pricing, delivery info, and location-specific timber advice for Paje, Nungwi, Stone Town & more.',
  'en',
  '/blog'
)

export default function Blog() {
  const grouped = BLOG_POSTS.reduce<Record<string, typeof BLOG_POSTS>>((acc, post) => {
    const cat = post.category || 'General'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(post)
    return acc
  }, {})

  for (const cat of Object.keys(grouped)) {
    grouped[cat].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
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
              <span className="text-gray-500">Blog</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Timber Blog Zanzibar</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              Expert guides, tips, and advice on treated pine timber in Zanzibar. Construction, pricing, delivery, and location-specific information.
            </p>

            <div className="text-center mb-12">
              <a
                href={generateWhatsAppLink('Hello Zanzibaba Timber, I have a question about your timber blog')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700"
              >
                Ask Us on WhatsApp
              </a>
            </div>

            {Object.entries(grouped).map(([category, posts]) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary-600">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <article key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded">{post.category}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 hover:underline font-medium text-sm mt-auto"
                      >
                        Read More →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Timber for Your Project?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Browse our full range of treated pine timber sizes or contact us for a quote with island-wide delivery and flexible payment options.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/timber-sizes"
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700"
                >
                  View Timber Sizes
                </Link>
                <Link
                  href="/timber-zanzibar"
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700"
                >
                  Timber Zanzibar
                </Link>
                <Link
                  href="/locations"
                  className="inline-block border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700"
                >
                  Delivery Locations
                </Link>
                <Link
                  href="/"
                  className="inline-block border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700"
                >
                  Home
                </Link>
              </div>
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
