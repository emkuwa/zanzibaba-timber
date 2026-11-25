import Showroom from '@/components/Showroom'
import { getLocalBusinessSchema, getWebSiteSchema } from '@/lib/seo'
export default function Home() {
return <><Showroom/>{[getLocalBusinessSchema(),getWebSiteSchema()].map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}</>
}
