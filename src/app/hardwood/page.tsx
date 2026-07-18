import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import HardwoodCatalogue from '@/components/HardwoodCatalogue'
import { HARDWOOD_PRODUCTS } from '@/lib/data'
import { generateSEOMetadata, getBreadcrumbSchema, getItemListSchema } from '@/lib/seo'

export const metadata = generateSEOMetadata(
  'Hardwood Timber Zanzibar | Mninga, Mvule & Mkongo',
  'Buy Mninga, Mvule and Mkongo hardwood timber in Zanzibar. Compare 2x6x8, 2x8x8 and 4x4x8 sizes, prices, qualities and recommended uses.',
  'en',
  '/hardwood',
)

export default function HardwoodPage() {
  const breadcrumb = getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Hardwood Timber', url: '/hardwood' }])
  const itemList = getItemListSchema(HARDWOOD_PRODUCTS.map((product) => ({ name: `${product.name} Hardwood Timber`, url: `/hardwood/${product.slug}` })))

  return (
    <>
      <Header />
      <main className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Hardwood Timber</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">Premium Mninga, Mvule and Mkongo timber for construction, joinery and furniture. Available in three 8ft sizes with delivery across Zanzibar.</p>
          <p className="text-center text-sm font-medium text-primary-700 dark:text-primary-300 mb-10">This category contains hardwood species only. For treated pine and Mirunda poles, visit <a href="/timber-sizes" className="underline">Softwood Timber</a>.</p>
          <HardwoodCatalogue products={HARDWOOD_PRODUCTS} />
        </div>
      </main>
      {[breadcrumb, itemList].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Footer />
      <FloatingButtons />
    </>
  )
}
