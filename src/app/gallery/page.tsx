import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata = generateSEOMetadata(
  'Timber Gallery - Zanzibar Projects & Products',
  'View our premium pine timber products and completed projects across Zanzibar. Hotels, villas, residential and commercial work.',
  'en',
  '/gallery'
)

export default function Gallery() {
  const images = [
    { id: '1', src: '/images/gallery/timber-yard-aerial-view.jpg', alt: 'Timber storage yard in Kwa Ndevu' },
    { id: '2', src: '/images/gallery/timber-sizes-display.jpg', alt: 'Pine timber 2x4 for construction' },
    { id: '3', src: '/images/gallery/hotel-project-zanzibar.jpg', alt: 'Hotel project Nungwi' },
    { id: '4', src: '/images/gallery/villa-construction-zanzibar.jpg', alt: 'Villa construction Paje' },
    { id: '5', src: '/images/gallery/timber-delivery-zanzibar.jpg', alt: 'Bulk timber delivery' },
    { id: '6', src: '/images/gallery/contractor-inspecting-timber.jpg', alt: 'Custom timber cutting' },
    { id: '7', src: '/images/gallery/residential-house-construction.jpg', alt: 'Finished villa project' },
    { id: '8', src: '/images/gallery/resort-construction-zanzibar.jpg', alt: 'Roof construction timber' },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Project Gallery</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}