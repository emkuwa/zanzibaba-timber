import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomerGallery from '@/components/CustomerGallery'
import {generateSEOMetadata} from '@/lib/seo'
export const metadata=generateSEOMetadata('Timber, Flooring, Doors & Cabinetry Inspiration','Explore timber samples, flooring, doors, cabinets and interior design references. Request a project quotation from Zanzibaba Timber.','en','/gallery')
export default function Gallery(){return <><Header/><main style={{background:'#faf7ef'}}><div className="container-custom py-8"><h1 className="sr-only">Timber and interior reference gallery</h1><CustomerGallery full/></div></main><Footer/></>}
