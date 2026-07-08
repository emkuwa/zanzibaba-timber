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
    `${post.title} | Blog ya Mbao Zanzibar`,
    post.excerpt,
    'sw',
    `/sw/blog/${post.slug}`
  )
}

function getRelatedPosts(current: BlogPost): BlogPost[] {
  return BLOG_POSTS
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, 3)
}

function getContentPadding(): string {
  const sizeMentions = TIMBER_SIZES.map(s => `${s.name} (${s.dimensions})`).join(', ')
  return `Katika Zanzibaba Timber, tunauza mbao za treated pine kote Zanzibar — Paje, Nungwi, Kendwa, Stone Town, na maeneo yote. Mbao zetu ni kiln-dried na zinatibiwa kustahimili hali ya hewa ya Zanzibar, zinafaa kwa miradi ya ujenzi ya kila aina.

Tuna saizi mbalimbali ikiwemo ${sizeMentions}. Saizi zote zinapatikana kwa usafiri Zanzibar zima na malipo baada ya kupelekwa. Timu yetu inatoa ushauri kuhusu uteuzi wa mbao, kiasi, na mipango ya mradi.

Kwa maagizo ya jumla, tunatoa bei nafuu kwa makandarasi, hoteli, resort, na miradi ya serikali. Saizi maalum zinaweza kuombwa. Wasiliana nasi kwa bei.

Iwe unajenga villa Paje, resort Nungwi, unarejesha jengo la kihistoria Stone Town, au unafanya kazi ya mradi wa serikali, Zanzibaba Timber ndio duka lako la mbao Zanzibar.

Tembelea kiwanda chetu Kwa Ndevu, Daraja Bovu, au wasiliana nasi kwa WhatsApp. Tunajibu ndani ya dakika 30 na tunapanga usafiri ndani ya saa 24-48 kwa bidhaa zilizo stock.`
}

export default function SwBlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)
  const content = `${post.excerpt}\n\n${getContentPadding()}`

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Nyumbani', url: '/sw' },
    { name: 'Blog', url: '/sw/blog' },
    { name: post.title, url: `/sw/blog/${post.slug}` },
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
                  <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="/sw/blog" className="text-primary-600 hover:underline">Blog</Link>
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
                  <h3 className="font-bold text-lg mb-2">Unahitaji Ushauri wa Mbao?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Wasiliana na Zanzibaba Timber kwa WhatsApp kwa mwongozo wa kitaalamu, bei, na taarifa za utoaji.
                  </p>
                  <a href={generateWhatsAppLink(`Habari Zanzibaba Timber, nimesoma makala yako: ${post.title}`)} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700">
                    Wasiliana kwa WhatsApp
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <Link href="/sw/timber-sizes" className="text-primary-600 hover:underline text-sm">
                    Tazama Saizi Zote za Mbao →
                  </Link>
                  <Link href="/sw/prices" className="text-primary-600 hover:underline text-sm">
                    Bei za Mbao →
                  </Link>
                  <Link href="/sw" className="text-primary-600 hover:underline text-sm">
                    Nyumbani →
                  </Link>
                </div>
              </div>

              <aside className="mt-8 lg:mt-0">
                <div className="sticky top-24">
                  {related.length > 0 && (
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                      <h3 className="font-bold text-lg mb-4">Makala Zinazohusiana</h3>
                      <div className="space-y-4">
                        {related.map((r) => (
                          <Link key={r.id} href={`/sw/blog/${r.slug}`} className="block border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                            <span className="text-xs text-gray-500">{r.date}</span>
                            <h4 className="font-medium text-sm mt-1 text-gray-800 dark:text-gray-200 hover:text-primary-600">{r.title}</h4>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-primary-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-3">Saizi za Mbao</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Tazama saizi zetu zote za mbao treated pine zinazopatikana Zanzibar.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TIMBER_SIZES.slice(0, 4).map((s) => (
                        <Link key={s.id} href={`/timber-sizes/${s.id}`} className="text-xs bg-white dark:bg-gray-700 px-3 py-1.5 rounded border border-gray-200 dark:border-gray-600 hover:border-primary-300 transition-all">
                          {s.name}
                        </Link>
                      ))}
                      <Link href="/sw/timber-sizes" className="text-xs text-primary-600 hover:underline px-3 py-1.5">
                        Tazama Zote
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
