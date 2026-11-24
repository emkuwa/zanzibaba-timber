// General species guidance, not a specification or certification for an order.
// Sources: AHEC Species Guide; Hardwood Information Center species guide.
export const hardwoodTerms = 'United States origin. Natural solid hardwood, not engineered or artificially stained. Special order only. Estimated delivery: 3–4 months from order confirmation. Request a quotation. Cash on delivery is not available for American hardwood.'
export const species = [
 {slug:'cherry',name:'Cherry',botanical:'Prunus serotina',colour:'Cream sapwood with reddish-brown heartwood that deepens with light exposure.',character:'Fine, generally straight grain; machines and finishes well. More easily dented than hard maple or oak.',uses:'Furniture, premium doors, cabinetry, wall panelling and interior joinery.',caution:'Choose harder species for heavily trafficked hotel floors.'},
 {slug:'hickory',name:'Hickory',botanical:'Carya species',colour:'Contrasting pale sapwood and tan to brown heartwood.',character:'Dense, hard and shock resistant; demanding to machine and glue. Movement requires careful moisture control.',uses:'Hardwearing flooring, furniture and feature interiors.',caution:'Allow for tooling, acclimatisation and movement when detailing.'},
 {slug:'wormy-red-maple',name:'Wormy Red Maple',botanical:'Acer rubrum — character selection',colour:'Pale cream with irregular darker streaking and small insect-associated holes.',character:'A character description of red maple, not a separate botanical species. Pattern, holes and soundness vary by board.',uses:'Feature furniture, wall panels and decorative joinery.',caution:'Approve board character, drying and soundness before manufacture; no claim of treatment or structural grade.'},
 {slug:'poplar',name:'Poplar',botanical:'Liriodendron tulipifera (yellow poplar / tulipwood)',colour:'Cream sapwood; pale yellow to olive-green heartwood, sometimes darker streaks.',character:'Relatively light, soft hardwood with fine texture; readily machined. Yellow poplar is not a true Populus species.',uses:'Interior mouldings, cabinet components, furniture and low-wear joinery.',caution:'Not a first choice for high-wear flooring; confirm yellow poplar identity in quotation.'},
 {slug:'basswood',name:'Basswood',botanical:'Tilia americana',colour:'Creamy white to pale brown, with subtle natural streaks.',character:'Light, soft and fine textured; particularly suited to hand carving and intricate profiles.',uses:'Carving, interior shutters, mouldings and decorative furniture components.',caution:'Low dent resistance; keep away from high-wear floor applications.'},
 {slug:'walnut',name:'Walnut',botanical:'Juglans nigra',colour:'Cream sapwood contrasting with light brown to chocolate-brown heartwood.',character:'Medium density with generally straight grain, sometimes figured; machines and finishes well.',uses:'Luxury furniture, cabinetry, doors, wall panelling and architectural joinery.',caution:'Specify acceptable sapwood contrast and colour variation; natural colour is not uniform.'},
 {slug:'white-oak',name:'White Oak',botanical:'Quercus species — white oak group',colour:'Pale sapwood with light to medium brown heartwood; quarter-sawn boards can show prominent rays.',character:'Hard, heavy and coarse textured; good bending properties. Grain and movement differ with cutting orientation.',uses:'Flooring, premium doors, cabinetry, furniture and interior panelling.',caution:'Natural durability does not make untreated boards a warranted exterior or marine system.'},
 {slug:'hard-maple',name:'Hard Maple',botanical:'Acer saccharum',colour:'Creamy white sapwood, sometimes reddish; darker reddish-brown heartwood.',character:'Hard and dense with fine, close texture; suited to wear surfaces. Requires sharp tooling.',uses:'Flooring, furniture, cabinetry and interior joinery.',caution:'Specify colour selection and moisture requirements; pale appearance can vary.'},
 {slug:'red-oak',name:'Red Oak',botanical:'Quercus species — red oak group',colour:'Light brown to pinkish reddish-brown with visible open grain.',character:'Hard and heavy, with coarse texture and good machining and steam bending qualities.',uses:'Flooring, doors, cabinetry, furniture and interior architectural joinery.',caution:'Open pores and limited decay resistance mean untreated red oak is unsuitable for wet or exposed use.'},
 {slug:'ash',name:'Ash',botanical:'Fraxinus species',colour:'White to yellow sapwood and light to darker brown heartwood with pronounced grain.',character:'Hard, strong for its weight and shock resistant; good bending and machining properties.',uses:'Flooring, doors, furniture, cabinetry and architectural joinery.',caution:'Untreated ash is not decay resistant; specify dry interior use.'},
 {slug:'birch',name:'Birch',botanical:'Betula species — exact species to be confirmed',colour:'Common yellow birch has pale cream sapwood and light reddish-brown heartwood.',character:'Yellow birch is hard and fine textured, with good turning and machining properties. Other birches differ.',uses:'Cabinetry, furniture, doors and interior joinery.',caution:'Birch is a group name: confirm botanical species and colour selection before ordering.'},
 {slug:'red-maple',name:'Red Maple',botanical:'Acer rubrum',colour:'Creamy white to pale reddish sapwood; light to darker reddish-brown heartwood.',character:'A soft maple species, generally softer than hard maple, with fine texture and good machining qualities.',uses:'Furniture, cabinetry, mouldings, wall panels and interior joinery.',caution:'Soft maple is a trade grouping, not softwood; do not assume hard maple wear performance.'},
]
export type AmericanSpecies = typeof species[number]
export const hardwoodFAQs = [
 {question:'Is American hardwood held in local stock?',answer:'This collection is special order only from the United States. Estimated delivery is 3–4 months from order confirmation; the quotation will confirm the delivery plan.'},
 {question:'Is this natural solid wood?',answer:'Yes. The collection is natural solid hardwood, not engineered wood or artificially stained wood. Colour, grain, sapwood and character vary naturally.'},
 {question:'Can I pay cash on delivery?',answer:'American hardwood is excluded from cash on delivery. Payment terms are agreed in the written quotation before order confirmation.'},
 {question:'Can I request a sample or submit a BOQ?',answer:'Request sample options or submit your BOQ and drawings for review. Sample availability, charges, delivery and exact material selection must be confirmed; samples are not promised as immediately available.'},
 {question:'What specifications should my architect provide?',answer:'Include species, application, rough or finished dimensions, quantity, grade or acceptable defects, colour selection, drying and moisture requirements, finish, site location and required date. Grades, dimensions, certifications and installation scope are confirmed per quotation.'},
 {question:'Is solid hardwood suitable for coastal Zanzibar interiors?',answer:'Suitability depends on species, moisture, site conditions and detailing. Store dry, allow acclimatisation to the intended interior, and design movement allowances. Assess humidity, termites and finishes with the installer; no untreated exterior, structural or wet-area performance is implied.'},
]
export function boardVolume(thickness:number,width:number,length:number,quantity:number,unit:'imperial'|'metric') {
 if (![thickness,width,length,quantity].every(Number.isFinite)||[thickness,width,length,quantity].some(v=>v<=0)||!Number.isInteger(quantity)) return null
 const cbm=unit==='imperial'?thickness*0.0254*width*0.0254*length*0.3048*quantity:thickness/1000*width/1000*length/1000*quantity
 return {cbm,boardFeet:cbm/0.002359737216}
}

export function hardwoodMetadata(title:string,description:string,_locale:string,path:string):import('next').Metadata {
 const url='https://timber.zanzibaba.com'+path
 const image='https://timber.zanzibaba.com/images/american-hardwood-reference.webp'
 return {title,description,alternates:{canonical:url,languages:{en:url}},openGraph:{title,description,url,siteName:'Zanzibaba Timber',locale:'en_TZ',type:'website',images:[{url:image,width:1536,height:1024,alt:'Representative illustrations of natural American hardwood grain; not actual stock'}]},twitter:{card:'summary_large_image',title,description,images:[image]}}
}


// Keep the first external project source while recording the current product page separately.
export function hardwoodSource(incoming:string) {
 if (typeof window === 'undefined') return incoming || 'timber.zanzibaba.com'
 let source=incoming
 try {
  const key='american-hardwood-source'
  const saved=sessionStorage.getItem(key)
  const external=incoming && !incoming.includes('timber.zanzibaba.com')
  source=external?incoming:(saved||incoming||'timber.zanzibaba.com')
  sessionStorage.setItem(key,source.slice(0,500))
 } catch {}
 return source || 'timber.zanzibaba.com'
}
