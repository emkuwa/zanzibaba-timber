import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { BLOG_POSTS, generateWhatsAppLink } from '@/lib/data'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Blog ya Mbao - Mwongozo wa Ujenzi na Mbao Zanzibar | Zanzibaba Timber',
  'Mwongozo wa mbao treated pine Zanzibar. Vidokezo vya ujenzi, bei, utoaji, na ushauri wa mbao kwa Paje, Nungwi, Stone Town na zaidi.',
  'sw',
  '/sw/blog'
)

const CATEGORY_SW: Record<string, string> = {
  'Timber Guides': 'Mwongozo wa Mbao',
  'Construction': 'Ujenzi',
  'Location Guide': 'Mwongozo wa Maeneo',
  'Delivery': 'Utoaji',
  'General': 'Jumla',
  'Plywood & Marine Board': 'Plywood na Marine Board',
}

export default function SwBlog() {
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
    { name: 'Nyumbani', url: '/' },
    { name: 'Blog', url: '/sw/blog' },
  ])

  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Blog</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Blog ya Mbao Zanzibar</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              Mwongozo, vidokezo, na ushauri kuhusu mbao treated pine Zanzibar. Ujenzi, bei, utoaji, na taarifa za maeneo maalum.
            </p>

            <div className="text-center mb-12">
              <a href={generateWhatsAppLink('Habari Zanzibaba Timber, nina swali kuhusu blog yako ya mbao')} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700">
                Tuulize kwa WhatsApp
              </a>
            </div>

            {Object.entries(grouped).map(([category, posts]) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary-600">{CATEGORY_SW[category] || category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <article key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded">{CATEGORY_SW[post.category] || post.category}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <Link href={`/sw/blog/${post.slug}`} className="text-primary-600 hover:underline font-medium text-sm mt-auto">
                        Soma Zaidi →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Unahitaji Mbao kwa Mradi Wako?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Tazama saizi zetu zote za mbao treated pine au wasiliana nasi kwa anda na utoaji wa kisiwa kima na malipo wakati wa kuuza.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/sw/timber-sizes" className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700">
                  Tazama Saizi za Mbao
                </Link>
                <Link href="/sw/prices" className="inline-block border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700">
                  Bei za Mbao
                </Link>
                <Link href="/sw" className="inline-block border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700">
                  Nyumbani
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
