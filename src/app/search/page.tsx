import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { HARDWOOD_PRODUCTS, TIMBER_SIZES } from '@/lib/data'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata = generateSEOMetadata(
  'Search Timber Products',
  'Search Zanzibaba Timber products, including Mninga, Mvule, Mkongo hardwood and treated pine construction timber.',
  'en',
  '/search',
)

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = (searchParams.q || '').trim()
  const normalizedQuery = query.toLowerCase()
  const results = [
    ...HARDWOOD_PRODUCTS.map((product) => ({
      name: `${product.name} Hardwood Timber`,
      description: product.description,
      details: `${product.botanicalName} · 2x6x8, 2x8x8, 4x4x8`,
      href: `/hardwood/${product.slug}`,
      searchText: [product.name, product.botanicalName, product.description, ...product.features, ...product.uses].join(' '),
    })),
    ...TIMBER_SIZES.map((product) => ({
      name: `${product.name} Treated Pine Timber`,
      description: product.description,
      details: product.dimensions,
      href: `/timber-sizes/${product.id}`,
      searchText: `${product.name} ${product.dimensions} ${product.description}`,
    })),
  ].filter((result) => !normalizedQuery || result.searchText.toLowerCase().includes(normalizedQuery))

  return (
    <>
      <Header />
      <main className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 min-h-[60vh]">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Search Timber Products</h1>
          <form action="/search" method="get" role="search" className="flex gap-3 mb-10">
            <label htmlFor="site-search" className="sr-only">Search all timber products</label>
            <input id="site-search" name="q" type="search" defaultValue={query} placeholder="Search Mninga, Mvule, Mkongo, 2x4…" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" />
            <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg">Search</button>
          </form>
          <p className="mb-5 text-gray-600 dark:text-gray-300">{query ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query}”` : 'Browse all timber products'}</p>
          <div className="grid gap-4">
            {results.map((result) => <Link key={result.href} href={result.href} className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-primary-500 hover:shadow-md transition"><h2 className="text-xl font-bold text-primary-600">{result.name}</h2><p className="text-sm text-gray-500 my-1">{result.details}</p><p className="text-gray-600 dark:text-gray-300">{result.description}</p></Link>)}
            {results.length === 0 && <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center"><p className="mb-4">No products matched your search.</p><Link href="/hardwood" className="text-primary-600 font-semibold hover:underline">Browse hardwood timber</Link></div>}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
