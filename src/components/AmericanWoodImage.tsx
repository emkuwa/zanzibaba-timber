import Image from 'next/image'
import { species } from '@/lib/american-hardwood'
export default function AmericanWoodImage({slug}:{slug:string}) {
 const product=species.find(s=>s.slug===slug) || species[0]
 return <figure><Image src={`/images/american-hardwood/${product.slug}.webp`} alt={`Representative AI illustration of natural solid American ${product.name} boards; not actual stock`} width={1536} height={1024} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-60 w-full rounded-xl object-cover"/><figcaption className="text-sm text-gray-600 mt-2">{product.slug==='birch'?'Representative AI illustration of yellow birch; exact birch species to be confirmed':'Representative AI illustration · natural colour and grain vary'}</figcaption></figure>
}
