import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { LOCATIONS, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'
import { MapPin, Truck, Phone, MessageCircle, Package, ShieldCheck } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'About Zanzibaba Timber - Leading Timber Supplier in Zanzibar Since 2010',
  'Zanzibaba Timber: Zanzibar\'s trusted timber supplier since 2010. Based at Kwa Ndevu, Daraja Bovu, we supply premium treated pine timber to contractors, hotels, villas, and government projects across the island.',
  'en',
  '/about-zanzibaba-timber'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About Zanzibaba Timber', url: '/about-zanzibaba-timber' },
])

export default function AboutZanzibabaTimber() {
  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-600 hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">About Zanzibaba Timber</span>
            </nav>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zanzibaba Timber</h1>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg font-semibold">
                  Zanzibaba Timber has been Zanzibar's trusted timber supplier since 2010, providing premium treated pine timber, 
                  construction materials, and treated poles to homeowners, contractors, hotels, resorts, and government projects 
                  across the island.
                </p>

                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden my-8 not-prose">
                  <ImageWithFallback
                    src="/images/gallery/timber-yard-aerial-view.jpg"
                    alt="Zanzibaba Timber Yard at Kwa Ndevu, Daraja Bovu, Zanzibar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2>Our Timber Yard</h2>
                <p>
                  Our main timber yard is located at <strong>Kwa Ndevu, Daraja Bovu, Zanzibar</strong>. This strategic location 
                  allows us to serve customers across the entire island efficiently. Our yard features:
                </p>
                <ul>
                  <li>Large covered storage sheds protecting timber from the elements</li>
                  <li>Dedicated loading area for quick turnaround on orders</li>
                  <li>Comprehensive inventory of all standard timber sizes</li>
                  <li>Treated poles from 2 to 6 inches diameter in 18ft lengths</li>
                  <li>Professional quality inspection station for every order</li>
                  <li>Secure yard with organized inventory management</li>
                </ul>

                <h2>Delivery Capability</h2>
                <p>
                  Our delivery fleet covers every corner of Zanzibar, from Nungwi at the northern tip to Jambiani in the 
                  southeast, from Stone Town's historic streets to the developing Fumba peninsula. We deliver to all 11 
                  major locations:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4 not-prose">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="text-primary-600 hover:underline text-sm"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
                <p>
                  With flexible payment options available for all locations (cash on delivery, mobile money, bank transfer), we make it simple and risk-free to order 
                  <strong> Timber Zanzibar</strong>. Standard delivery is within 24-48 hours for stock items.
                </p>

                <h2>Project Experience</h2>
                <p>
                  Over the past decade, Zanzibaba Timber has supplied materials for hundreds of projects across Zanzibar:
                </p>
                <ul>
                  <li><strong>Hotels & Resorts:</strong> Bulk timber supply for beachfront resorts in Nungwi, boutique hotels in Paje, and luxury lodges in Kendwa</li>
                  <li><strong>Villa Developments:</strong> Premium treated pine for luxury villa construction in Paje, Matemwe, and Jambiani</li>
                  <li><strong>Government Projects:</strong> School construction, healthcare facilities, and public infrastructure across Zanzibar</li>
                  <li><strong>Residential:</strong> Timber for homes, renovations, and community buildings island-wide</li>
                  <li><strong>Commercial:</strong> Retail spaces, office buildings, and hospitality venues</li>
                </ul>

                <h2>Contractor Support</h2>
                <p>
                  We work extensively with contractors and builders across Zanzibar, offering:
                </p>
                <ul>
                  <li>Competitive wholesale pricing for bulk orders</li>
                  <li>Dedicated account management for regular contractor supply</li>
                  <li>Flexible delivery scheduling to match project timelines</li>
                  <li>Custom cutting and sizing for special requirements</li>
                  <li>Priority processing for time-sensitive orders</li>
                  <li>Consistent quality across every batch</li>
                </ul>

                <h2>Quality & Treatment</h2>
                <p>
                  All timber supplied by Zanzibaba Timber is premium treated pine, professionally processed for 
                  Zanzibar's tropical climate:
                </p>
                <ul>
                  <li>Pressure-treated for termite and rot resistance</li>
                  <li>Kiln-dried to optimal moisture content</li>
                  <li>Quality inspected before every delivery</li>
                  <li>Sustainably sourced from managed plantations</li>
                  <li>Available in all standard sizes from 1x6 to 2x6</li>
                </ul>

                <h2>Media-Ready Company Profile</h2>
                <p>
                  <strong>Company Name:</strong> Zanzibaba Timber<br />
                  <strong>Founded:</strong> 2010<br />
                  <strong>Location:</strong> Kwa Ndevu, Daraja Bovu, Zanzibar<br />
                  <strong>Service Area:</strong> All Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu, and Ndevu<br />
                  <strong>Products:</strong> Treated pine timber, construction timber, treated poles, mbao za pine<br />
                  <strong>Delivery:</strong> Island-wide with flexible payment options<br />
                  <strong>Contact:</strong> +255 716 002 790 | WhatsApp: +255 716 002 790<br />
                  <strong>Email:</strong> info@timber.zanzibaba.com
                </p>
              </div>

              <div className="mt-12 bg-primary-50 dark:bg-gray-800 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">Contact Zanzibaba Timber</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  For media inquiries, partnership opportunities, or timber supply requirements, contact our team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={generateWhatsAppLink('Hello Zanzibaba Timber, I would like to discuss a partnership or timber supply.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+255716002790"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call +255 716 002 790
                  </a>
                </div>
              </div>

              <div className="mt-8 border-t pt-8">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link href="/" className="text-primary-600 hover:underline">Home</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/timber-sizes" className="text-primary-600 hover:underline">Timber Sizes</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/locations" className="text-primary-600 hover:underline">Delivery Locations</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/timber-zanzibar" className="text-primary-600 hover:underline">Timber Zanzibar</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/prices" className="text-primary-600 hover:underline">Prices</Link>
                </div>
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
