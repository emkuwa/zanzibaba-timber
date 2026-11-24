import { hardwoodMetadata as generateSEOMetadata } from '@/lib/american-hardwood'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AmericanHardwoodEnquiry from '@/components/AmericanHardwoodEnquiry'

export const metadata=generateSEOMetadata('American Hardwood Project Quotation, Samples & BOQ','Submit a qualified American hardwood project enquiry for Zanzibar or Tanzania. Special order from the United States, estimated 3–4 months.','en','/american-hardwood/enquire')
export default function Page(){return <><Header/><main className="container-custom py-12 pb-24"><a className="underline text-primary-700" href="/american-hardwood">← American hardwood catalogue</a><h1 className="text-4xl font-bold my-6">Let’s specify your American hardwood</h1><p className="text-lg mb-8 max-w-3xl">Request a Project Quotation, ask about sample options, or submit your BOQ. Tell us what you are building so we can review species, specifications and delivery requirements.</p><AmericanHardwoodEnquiry/></main><Footer/></>}
