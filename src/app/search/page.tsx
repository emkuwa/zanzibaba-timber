import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { HARDWOOD_PRODUCTS, TIMBER_SIZES, PRODUCT_VARIANTS, formatVariantLabel, formatHardwoodSize } from '@/lib/data'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata = generateSEOMetadata('Search Timber Products', 'Search Zanzibaba Timber softwood and hardwood products.', 'en', '/search')

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = (searchParams.q || '').trim()
  const normalizedQuery = query.toLowerCase()
  const matches = (text: string) => !normalizedQuery || text.toLowerCase().includes(normalizedQuery)
  const softwoodResults = TIMBER_SIZES.map((product) => ({
    name: `${product.name.replace(/(\d+)x(\d+)/, '$1"x$2"')} Treated Softwood`, description: product.description,
    details: PRODUCT_VARIANTS.filter(variant => variant.size === product.name).map(formatVariantLabel).join(' · ') || `${product.dimensions} × 18feet`,
    href: `/timber-sizes/${product.id}`, searchText: `${product.name} ${product.dimensions} ${product.description} softwood treated pine`,
  })).filter((result) => matches(result.searchText))
  const hardwoodResults = HARDWOOD_PRODUCTS.map((product) => ({
    name: `${product.name} Hardwood Timber`, description: product.description,
    details: `${product.botanicalName} · ${product.variants.map(variant => formatHardwoodSize(variant.size)).join(' · ')}`, href: `/hardwood/${product.slug}`,
    searchText: [product.name, product.botanicalName, product.description, ...product.features, ...product.uses, 'hardwood'].join(' '),
  })).filter((result) => matches(result.searchText))
  const totalResults = softwoodResults.length + hardwoodResults.length

  const ResultList = ({ results }: { results: typeof softwoodResults }) => (
    <div className="grid gap-4">{results.map((result) => <Link key={result.href} href={result.href} className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-primary-500 hover:shadow-md transition"><h3 className="text-xl font-bold text-primary-600">{result.name}</h3><p className="text-sm text-gray-500 my-1">{result.details}</p><p className="text-gray-600 dark:text-gray-300">{result.description}</p></Link>)}</div>
  )

  return <><Header /><main className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 min-h-[60vh]"><div className="container-custom max-w-4xl">
    <h1 className="text-4xl font-bold mb-6">Search Timber Products</h1>
    <form action="/search" method="get" role="search" className="flex gap-3 mb-10"><label htmlFor="site-search" className="sr-only">Search all timber products</label><input id="site-search" name="q" type="search" defaultValue={query} placeholder="Search softwood, hardwood, Mninga, 2x4…" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" /><button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg">Search</button></form>
    <p className="mb-8 text-gray-600 dark:text-gray-300">{query ? `${totalResults} result${totalResults === 1 ? '' : 's'} for “${query}”` : 'Browse products by timber category'}</p>
    {softwoodResults.length > 0 && <section className="mb-12"><div className="flex items-end justify-between mb-5"><div><p className="text-xs uppercase tracking-widest font-bold text-primary-600">Category</p><h2 className="text-3xl font-bold">Treated Softwood</h2></div><Link href="/timber-sizes" className="text-primary-600 font-semibold hover:underline">View all treated softwood →</Link></div><ResultList results={softwoodResults} /></section>}
    {hardwoodResults.length > 0 && <section><div className="flex items-end justify-between mb-5"><div><p className="text-xs uppercase tracking-widest font-bold text-primary-600">Category</p><h2 className="text-3xl font-bold">Hardwood</h2></div><Link href="/hardwood" className="text-primary-600 font-semibold hover:underline">View all hardwood →</Link></div><ResultList results={hardwoodResults} /></section>}
    {totalResults === 0 && <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center"><p className="mb-4">No products matched your search.</p><div className="flex justify-center gap-5"><Link href="/timber-sizes" className="text-primary-600 font-semibold hover:underline">Browse Treated Softwood</Link><Link href="/hardwood" className="text-primary-600 font-semibold hover:underline">Browse Hardwood</Link></div></div>}
  </div></main><Footer /><FloatingButtons /></>
}
