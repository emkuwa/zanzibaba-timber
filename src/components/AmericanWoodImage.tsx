import { species } from '@/lib/american-hardwood'
export default function AmericanWoodImage({slug}:{slug:string}) {
 const i=Math.max(0,species.findIndex(s=>s.slug===slug))
 return <figure><div role="img" aria-label={`Representative illustration of ${species[i].name} grain; not actual stock`} className="h-60 rounded-xl" style={{backgroundImage:'url(/images/american-hardwood-reference.webp)',backgroundSize:'300% 400%',backgroundPosition:`${(i%3)*50}% ${Math.floor(i/3)*100/3}%`}}/><figcaption className="text-sm text-gray-600 mt-2">Representative AI illustration · natural colour and grain vary</figcaption></figure>
}
