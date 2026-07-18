import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { HARDWOOD_PRODUCTS, generateWhatsAppLink, formatHardwoodSize } from '@/lib/data'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo'

const siteUrl = 'https://timber.zanzibaba.com'

export function generateStaticParams() {
  return HARDWOOD_PRODUCTS.map((product) => ({ species: product.slug }))
}

export function generateMetadata({ params }: { params: { species: string } }): Metadata {
  const product = HARDWOOD_PRODUCTS.find((item) => item.slug === params.species)
  if (!product) return {}
  const canonical = `${siteUrl}/hardwood/${product.slug}`
  const image = `${siteUrl}${product.image}`

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title: product.metaTitle,
      description: product.metaDescription,
      url: canonical,
      siteName: 'Zanzibaba Timber',
      locale: 'en_TZ',
      images: [{ url: image, alt: product.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [image],
    },
  }
}

export default function HardwoodProductPage({ params }: { params: { species: string } }) {
  const product = HARDWOOD_PRODUCTS.find((item) => item.slug === params.species)
  if (!product) notFound()

  const productUrl = `${siteUrl}/hardwood/${product.slug}`
  const relatedProducts = HARDWOOD_PRODUCTS.filter((item) => item.id !== product.id)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: `${product.name} Hardwood Timber`,
    description: product.metaDescription,
    image: [`${siteUrl}${product.image}`],
    url: productUrl,
    sku: `${product.id.toUpperCase()}-HARDWOOD`,
    material: product.name,
    category: 'Hardwood Timber',
    brand: { '@type': 'Brand', name: 'Zanzibaba Timber' },
    offers: product.variants.map((variant) => ({
      '@type': 'Offer',
      name: `${product.name} ${variant.size}`,
      sku: variant.sku,
      price: variant.sellingPrice,
      priceCurrency: 'TZS',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `${productUrl}#${variant.sku.toLowerCase()}`,
      seller: { '@type': 'Organization', name: 'Zanzibaba Timber' },
    })),
  }
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Hardwood Timber', url: '/hardwood' },
    { name: product.name, url: `/hardwood/${product.slug}` },
  ])
  const faqSchema = getFAQSchema(product.faq)

  return (
    <>
      <Header />
      <main className="py-10 md:py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="text-sm mb-6">
            <Link href="/" className="text-primary-600 hover:underline">Home</Link><span className="mx-2">/</span>
            <Link href="/hardwood" className="text-primary-600 hover:underline">Hardwood Timber</Link><span className="mx-2">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            <div className="relative min-h-80 rounded-2xl overflow-hidden">
              <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
            </div>
            <div>
              <p className="text-primary-600 font-semibold">Premium African Hardwood</p>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">{product.name} Hardwood Timber</h1>
              <p className="italic text-gray-500 mt-1 mb-5">{product.botanicalName}</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
              <h2 className="font-bold text-xl mb-3">Key qualities</h2>
              <ul className="grid sm:grid-cols-2 gap-2 mb-7">{product.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
              <a href={generateWhatsAppLink(`Hello Zanzibaba Timber, please add ${product.name} hardwood to my order`)} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3 rounded-lg">Add to Order</a>
            </div>
          </div>

          <section className="mb-14" aria-labelledby="sizes-prices">
            <h2 id="sizes-prices" className="text-3xl font-bold mb-6">{product.name} Sizes & Prices</h2>
            <div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr className="bg-primary-600 text-white"><th className="text-left p-4">Full Dimensions</th><th className="text-right p-4">Selling Price</th><th className="text-center p-4">Order</th></tr></thead><tbody>{product.variants.map((variant) => <tr id={variant.sku.toLowerCase()} key={variant.sku} className="border-b dark:border-gray-700"><td className="p-4 font-bold">{formatHardwoodSize(variant.size)}</td><td className="p-4 text-right text-xl font-bold">TZS {variant.sellingPrice.toLocaleString()}</td><td className="p-4 text-center"><a target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline" href={generateWhatsAppLink(`Hello Zanzibaba Timber, please add ${product.name} ${formatHardwoodSize(variant.size)} at TZS ${variant.sellingPrice.toLocaleString()} to my order`)}>Add to Order</a></td></tr>)}</tbody></table></div>
          </section>

          <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-14"><h2 className="text-2xl font-bold mb-2">Recommended Applications for {product.name}</h2><p className="text-sm text-gray-500 dark:text-gray-400 mb-4">These are examples of how this timber can be used—not separate product categories.</p><div className="flex flex-wrap gap-3">{product.uses.map((use) => <span key={use} className="bg-white dark:bg-gray-700 shadow-sm px-4 py-2 rounded-full">{use}</span>)}</div></section>

          <section className="mb-14" aria-labelledby="frequently-asked-questions">
            <h2 id="frequently-asked-questions" className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">{product.faq.map((item) => <article key={item.question} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6"><h3 className="font-bold text-lg mb-2">{item.question}</h3><p className="text-gray-600 dark:text-gray-300">{item.answer}</p></article>)}</div>
          </section>

          <section aria-labelledby="related-hardwood">
            <h2 id="related-hardwood" className="text-3xl font-bold mb-6">Related Hardwood Timber</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((related) => <Link key={related.id} href={`/hardwood/${related.slug}`} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-primary-500 hover:shadow-md transition"><h3 className="font-bold text-xl text-primary-600">{related.name} Hardwood</h3><p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{related.description}</p></Link>)}
              <Link href="/timber-sizes" className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-primary-500 hover:shadow-md transition"><h3 className="font-bold text-xl text-primary-600">Treated Pine Timber</h3><p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Compare our complete range of treated pine construction timber sizes.</p></Link>
            </div>
          </section>
        </div>
      </main>
      {[productSchema, breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Footer />
      <FloatingButtons />
    </>
  )
}
