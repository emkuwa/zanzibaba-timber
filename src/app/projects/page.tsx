import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata } from '@/lib/seo'
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
]

export const metadata = generateSEOMetadata(
  'Our Projects - Zanzibar Timber Portfolio',
  'View our completed timber supply projects across Zanzibar. Hotels, villas, government buildings and residential constructions.',
  'en',
  '/projects'
)

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Projects</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <article key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="text-sm text-primary-600">{project.location}</div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}