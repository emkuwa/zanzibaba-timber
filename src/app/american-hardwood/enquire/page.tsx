import { hardwoodMetadata as generateSEOMetadata } from '@/lib/american-hardwood'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AmericanHardwoodEnquiry from '@/components/AmericanHardwoodEnquiry'

export const metadata=generateSEOMetadata('Premium American Hardwood Hospitality Quotation & BOQ','Request premium exotic American hardwood for hotel, resort, lodge, restaurant and villa projects in Zanzibar and Tanzania. Special order from the United States, estimated 3–4 months.','en','/american-hardwood/enquire')
export default function Page(){return <><Header/><main className="container-custom py-12 pb-24"><a className="underline text-primary-700" href="/american-hardwood">← American hardwood catalogue</a><h1 className="text-4xl font-bold my-6">Premium American hardwood for your hospitality project</h1><p className="text-lg mb-8 max-w-3xl">Planning a hotel, resort, lodge, restaurant or hospitality villa? Request a project quotation, ask about samples or submit your BOQ. Include your project location, intended applications, sizes, quantities and target installation date so we can review the specification and delivery requirements.</p><AmericanHardwoodEnquiry/></main><Footer/></>}
