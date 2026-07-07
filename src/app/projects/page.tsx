import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo'
import { generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'
import { Project } from '@/types'

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Luxury Resort Construction - Nungwi',
    description: 'Supplied premium pine timber for beachfront resort construction including roofing, decking, and structural framing.',
    location: 'Nungwi',
    image: '/images/gallery/resort-construction-zanzibar.jpg',
    type: 'hotel',
  },
  {
    id: '2',
    title: 'Villa Renovation - Stone Town',
    description: 'Historical villa renovation project requiring custom timber sizes and traditional joinery.',
    location: 'Stone Town',
    image: '/images/gallery/villa-construction-zanzibar.jpg',
    type: 'villa',
  },
  {
    id: '3',
    title: 'Government School Project',
    description: 'Large-scale school construction timber supply with classroom and administrative buildings.',
    location: 'Zanzibar',
    image: '/images/gallery/government-construction-project.jpg',
    type: 'government',
  },
  {
    id: '4',
    title: 'Beachfront Villa Development - Paje',
    description: 'Complete timber supply for a luxury beachfront villa development including structural framing, decking, roofing, and interior finishing.',
    location: 'Paje',
    image: '/images/gallery/villa-construction-zanzibar.jpg',
    type: 'villa',
  },
  {
    id: '5',
    title: 'Hotel Expansion - Kendwa',
    description: 'Supplied treated pine timber for a major hotel expansion project including new guest rooms, restaurant deck, and poolside cabanas.',
    location: 'Kendwa',
    image: '/images/gallery/resort-construction-zanzibar.jpg',
    type: 'hotel',
  },
  {
    id: '6',
    title: 'Community Health Centre - Matemwe',
    description: 'Government-funded community health centre project requiring structural timber, roofing materials, and treated poles.',
    location: 'Matemwe',
    image: '/images/gallery/government-construction-project.jpg',
    type: 'government',
  },
]

const PROJECT_TYPES = [
  { type: 'Hotel & Resort', slug: '/hotel-supply', description: 'Bulk treated pine timber for hotels, resorts, and lodges across Zanzibar.', count: '15+' },
  { type: 'Villa Construction', slug: '/villa-supply', description: 'Premium timber for luxury villas, private residences, and beachfront homes.', count: '25+' },
  { type: 'Government', slug: '/government-supply', description: 'Reliable timber supply for schools, health centres, and public infrastructure.', count: '10+' },
  { type: 'Wholesale', slug: '/wholesale', description: 'Volume timber supply for contractors, developers, and bulk buyers.', count: '50+' },
]

const faq = [
  { question: 'What types of timber projects do you supply in Zanzibar?', answer: 'We supply timber for hotels, resorts, luxury villas, government buildings, schools, health centres, and residential constructions across all Zanzibar locations including Nungwi, Paje, Kendwa, Stone Town, Jambiani, and Matemwe.' },
  { question: 'Can you handle large-scale hotel construction timber supply?', answer: 'Yes, we specialise in bulk timber supply for hotel and resort construction. We have delivered projects for major beachfront resorts in Nungwi, Kendwa, and Paje. Contact us with your project specifications for a custom quote.' },
  { question: 'Do you deliver timber directly to construction sites?', answer: 'Yes, we deliver directly to construction sites anywhere in Zanzibar. Our fleet can handle both small residential deliveries and large bulk orders for commercial projects.' },
  { question: 'What timber sizes are commonly used in Zanzibar construction projects?', answer: 'The most commonly used sizes are 2x4 (50x100mm) and 2x6 (50x150mm) for framing and structural work, 1x6 (25x150mm) for decking, and 4x4 for structural posts. All available in 12ft and 18ft lengths.' },
]

export const metadata = generateSEOMetadata(
  'Our Projects - Zanzibar Timber Portfolio | Hotels, Villas & Government',
  'Explore our completed timber supply projects across Zanzibar. Hotels, luxury villas, government buildings, and residential constructions. 50+ projects delivered island-wide.',
  'en',
  '/projects'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
])

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Our Projects</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Timber Supply Projects in Zanzibar</h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              From luxury beachfront resorts to government infrastructure, Zanzibaba Timber has been the trusted timber supplier for over 50 projects across the island. Browse our portfolio below.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {PROJECT_TYPES.map((pt) => (
                <Link key={pt.type} href={pt.slug} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <span className="text-3xl font-bold text-primary-600 block mb-1">{pt.count}</span>
                  <span className="text-lg font-semibold">{pt.type}</span>
                  <p className="text-sm text-gray-500 mt-2">{pt.description}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <article key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    aspectRatio="16/9"
                    className="w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded mb-2 uppercase tracking-wide">{project.type}</span>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="text-sm text-primary-600 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {project.location}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12 space-y-4">
              <p className="text-lg text-gray-600">Ready to start your project? Get a free quote today.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700">
                  Start Your Project
                </Link>
                <a href={generateWhatsAppLink('Hello Zanzibaba Timber, I have a construction project and need timber supply information.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faq)) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}