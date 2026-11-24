'use client'
import {useEffect} from 'react'
import {hardwoodSource} from '@/lib/american-hardwood'
export default function HardwoodAttribution(){useEffect(()=>{
 const incoming=new URLSearchParams(location.search).get('source')
 hardwoodSource(incoming||'')
 function click(e:MouseEvent){const a=(e.target as Element)?.closest('a');if(!a)return;const u=new URL(a.href,location.href)
 const source=hardwoodSource(incoming||'')
 if(u.hostname==='wa.me'){const text=u.searchParams.get('text')||'American hardwood enquiry';u.searchParams.set('text',`${text}\nProduct / page: ${location.href}\nOriginal source: ${source}\nAmerican hardwood: special order only, estimated 3–4 months; quotation required, no cash on delivery.`);a.href=u.href}
 else if(u.origin===location.origin&&u.pathname.startsWith('/american-hardwood')){u.searchParams.set('source',source);a.href=u.href}
 }
 document.addEventListener('click',click,true);return()=>document.removeEventListener('click',click,true)
 },[]);return null}
