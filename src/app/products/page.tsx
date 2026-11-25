import type { Metadata } from 'next'
import Showroom from '@/components/Showroom'
export const metadata: Metadata={title:'All Products — Timber, Boards & Hardwood',description:'Browse construction timber, hardwood, plywood, marine board, MDF and wood poles. Choose sizes and build a quotation list with Zanzibaba Timber in Zanzibar.',alternates:{canonical:'https://timber.zanzibaba.com/products'}}
export default function ProductsPage(){return <Showroom catalogue/>}
