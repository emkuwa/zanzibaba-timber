import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema, getFAQSchema, getProductSchema } from '@/lib/seo'
import { POLES, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MessageCircle, Ruler, TreePine, Fence, Building2, Warehouse, Shield, Thermometer, Droplets, Bug } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Miti ya Mitiki na Mirunda Zanzibar | Nguzo za Mbao Asilia kwa Ujenzi — Zanzibaba Timber',
  'Miti ya Mitiki (Teak wood poles) Zanzibar. Nguzo za mbao asilia — mirunda / milunda — zinazostahimili mchwa na hali ya hewa ya pwani. Kipenyo 2" hadi 6" kwa urefu futi 18. Usafiri bure Zanzibar zima. Piga +255 716 002 790.',
  'sw',
  '/sw/mirunda'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Miti ya Mitiki / Mirunda', url: '/sw/mirunda' },
])

const FAQS = [
  { question: 'Miti ya Mitiki ni nini?', answer: 'Miti ya Mitiki (pia hujulikana kwa jina la kisayansi Tectona grandis) ni mbao ngumu za asili zinazostahimili mchwa, kuvu, na kuoza. Mitiki haihitaji dawa za kuweka — ina mafuta asilia yanayolinda dhidi ya wadudu na unyevu. Hii ndiyo sababu nguzo za mitiki (mirunda/milunda) zinadumu miaka mingi Zanzibar bila kuharibika.' },
  { question: 'Mirunda / Milunda ni nini?', answer: 'Mirunda (pia hujulikana kama Milunda katika baadhi ya maeneo) ni nguzo za mbao za mviringo (round timber poles) zinazotumika kwa ujenzi, uzio, na miundo mbalimbali Zanzibar. Tofauti na mbao za pine zilizowekewa dawa, mirunda ya mitiki ina nguvu ya asili ya kustahimili mchwa, unyevu, na hali ya hewa ya pwani. Hizi ndizo nguzo bora kwa ujenzi wa kudumu Zanzibar.' },
  { question: 'Je, miti ya mitiki / mirunda inapatikana Zanzibar?', answer: 'Ndiyo, Zanzibaba Timber ndio msambazaji wa miti ya mitiki na mirunda Zanzibar. Tunauza nguzo za mitiki kipenyo 2" hadi 6" kwa urefu wa futi 18. Nguzo za mitiki zinapatikana kwa wingi kwenye yadi yetu Kwa Ndevu, Daraja Bovu. Tunasafirisha kote Zanzibar bure.' },
  { question: 'Kwa nini nguzo za mitiki ni bora kuliko pine iliyowekewa dawa?', answer: 'Nguzo za mitiki hazihitaji dawa yoyote — zina mafuta asilia (teak oil) yanayozuia mchwa, kuvu, na kuoza. Pine iliyowekewa dawa inategemea kemikali za nje ambazo zinaweza kuchakaa baada ya muda. Mitiki ni ngumu zaidi na inadumu muda mrefu zaidi, hasa katika mazingira ya pwani ya Zanzibar. Pia ni salama kwa mazingira na afya.' },
  { question: 'Je, miti ya mitiki inafaa kwa matumizi gani?', answer: 'Miti ya mitiki na mirunda hutumika kwa ujenzi wa magorofa, mabanda, uzio wa mashamba na hoteli, nguzo za kilimo (miti ya shamba), nguzo za ujenzi (nguzo za kujengea), miundo ya hoteli na resort, na miundo ya pwani. Pia inafaa kwa uzio wa viwanja, mipaka ya hoteli, na bustani.' },
  { question: 'Je, mnasafirisha miti ya mitiki Zanzibar?', answer: 'Ndiyo, tunasafirisha miti ya mitiki na mirunda kote Zanzibar bure. Tunawasilisha Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu, na Kwa Ndevu. Malipo baada ya kupelekwa (cash on delivery) inakubaliwa.' },
]

const mirundaBenefits = [
  { icon: TreePine, title: 'Miti ya Mitiki Asilia', desc: 'Nguzo za mitiki (teak wood poles) zenye nguvu ya asili. Hazihitaji dawa — zinajilinda zenyewe dhidi ya mchwa, unyevu, na kuoza. Bora kwa hali ya hewa ya Zanzibar.' },
  { icon: Shield, title: 'Zinastahimili Mchwa Asilia', desc: 'Mitiki ina mafuta asilia yanayowafukuza mchwa na wadudu wengine. Hakuna kemikali za kuweka — nguzo zinajilinda zenyewe kwa miaka mingi. Salama kwa mazingira na familia.' },
  { icon: Building2, title: 'Nguzo za Ujenzi na Uzio', desc: 'Nguzo imara za mitiki kwa ujenzi, uzio wa mashamba na hoteli, na miundo ya pwani. Kipenyo 2" hadi 6" zinapatikana. Mitiki inastahimili jua, mvua, na chumvi.' },
  { icon: Warehouse, title: 'Ugavi na Usafiri Bure', desc: 'Nguzo nyingi za mitiki kwenye yadi yetu Kwa Ndevu. Usafiri bure Zanzibar zima. Malipo baada ya kupelekwa.' },
]

const mirundaUses = [
  { title: 'Ujenzi wa Magorofa na Mabanda', desc: 'Nguzo za mitiki hutumika kwa wingi kwa ujenzi wa magorofa (multi-storey) na mabanda Zanzibar. Umbile la mviringo linatoa nguvu ya asili ya kubeba mzigo. Mitiki inadumu kwa miongo kadhaa bila kuhitaji kubadilishwa.' },
  { title: 'Uzio wa Mashamba na Viwanja', desc: 'Nguzo za mitiki ndio chaguo bora kwa uzio wa mashamba, hoteli, resort, na nyumba Zanzibar. Nguzo za mitiki zinadumu miaka 25+ iwapo ziko kwenye ardhi bila kuoza au kushambuliwa na mchwa.' },
  { title: 'Kilimo na Mashamba (Miti ya Shamba)', desc: 'Nguzo za mitiki kwa uzio wa mifugo, mazao, na majengo ya kilimo. Mitiki haiozi haraka kwenye ardhi yenye unyevu, na haivutii mchwa. Imara na ya kudumu kwa wakulima Zanzibar.' },
  { title: 'Miundo ya Pwani na Hoteli', desc: 'Mitiki inastahimili chumvi, jua, na unyevu wa pwani kwa asili — hakuna dawa zinazohitajika. Bora kwa hoteli za pwani, cabanas, deck, na miundo ya baharini Zanzibar.' },
  { title: 'Hoteli na Resorts', desc: 'Nguzo za mitiki zinapendwa na waendelezaji wa hoteli kwa uzuri wao wa asili na uimara. Zinafaa kwa fencing, pergolas, cabanas, na miundo ya bustani katika hoteli za kifahari.' },
  { title: 'Miundo ya Bustani na Mapambo', desc: 'Nguzo za mitiki kwa bustani, pergolas, gazebos, na miundo ya mapambo kwa hoteli, resort, na nyumba Zanzibar. Rangi ya dhahabu-kahawia ya mitiki inaongeza thamani ya urembo.' },
]

export default function MirundaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-amber-900 via-primary-900 to-gray-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-primary-200" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-300 hover:underline">Nyumbani</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-100">Miti ya Mitiki / Mirunda</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Miti ya Mitiki na Mirunda <span className="text-amber-400">Zanzibar</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl">
                Miti ya Mitiki (Teak wood poles — pia hujulikana kama <strong className="text-white">Mirunda au Milunda</strong>) ni nguzo za mbao asilia zinazostahimili mchwa, unyevu, na hali ya hewa ya pwani. Hazihitaji dawa yoyote — zinajilinda zenyewe kwa asili. Kipenyo 2" hadi 6" kwa urefu futi 18. Usafiri bure Zanzibar zima — malipo baada ya kupelekwa.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={generateWhatsAppLink('Habari, nataka kununua miti ya mitiki / mirunda. Tafadhali niambie bei na ukubwa unaopatikana.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                  <MessageCircle className="w-5 h-5" /> Pata Bei za Mitiki
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-white/20">
                  Piga +255 716 002 790
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Miti ya Mitiki Inapatikana Sasa</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Nguzo za mitiki kwa ujenzi, uzio, na kilimo. Stock kubwa kwenye yadi yetu Kwa Ndevu.</p>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {mirundaBenefits.map((b) => (
                <div key={b.title} className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow">
                  <b.icon className="w-10 h-10 text-primary-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-amber-50 dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Kwa Nini Mitiki? Faida za Asili</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Mitiki (Teak / Tectona grandis) ni mbao ngumu asilia — haihitaji dawa yoyote</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Bug, title: 'Inastahimili Mchwa Asilia', desc: 'Mitiki ina mafuta asilia (teak oil) yanayowafukuza mchwa na wadudu wanaotoboa mbao. Hakuna dawa za kemikali zinazohitajika — nguzo zinajilinda zenyewe.' },
                { icon: Droplets, title: 'Inastahimili Hali ya Hewa', desc: 'Msongamano wa mitiki na mafuta yake asilia yanaifanya kustahimili mvua, unyevu, na chumvi ya baharini. Bora kwa hali ya hewa ya pwani ya Zanzibar.' },
                { icon: Shield, title: 'Inadumu Miaka Mingi', desc: 'Nguzo za mitiki zinaweza kudumu miaka 25+ iwapo ziko kwenye ardhi. Tofauti na pine, mitiki haiozi haraka — inakuwa ngumu zaidi kadri inavyozeeka.' },
              ].map((f) => (
                <div key={f.title} className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <f.icon className="w-10 h-10 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Ukubwa wa Nguzo za Mitiki na Bei</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Kipenyo mbalimbali — miti ya mitiki, urefu futi 18. Wasiliana kwa bei za sasa.</p>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Kipenyo</th>
                      <th className="text-left py-3 px-3 text-sm">Urefu (futi)</th>
                      <th className="text-center py-3 px-3 text-sm">Bei (TZS)</th>
                      <th className="text-center py-3 px-3 text-sm">Agiza</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POLES.map((pole) => (
                      <tr key={pole.sku} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3 font-semibold text-sm">{pole.diameter} Nguzo</td>
                        <td className="py-3 px-3 text-sm text-gray-500">{pole.length}</td>
                        <td className="py-3 px-3 text-center">
                          {(() => {
                            const prices: Record<string, number> = { '2"': 8500, '3"': 12000, '4"': 15000, '5"': 20000, '6"': 25000 }
                            return <span className="font-bold text-sm">{formatTZS(prices[pole.diameter || '2"'])}</span>
                          })()}
                        </td>
                        <td className="py-3 px-3 text-center">
                          <a href={generateWhatsAppLink(`Nataka nguzo za mitiki diameter ${pole.diameter} ${pole.length}`)} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs font-semibold">
                            <MessageCircle className="w-3 h-3 inline mr-1" />WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Bei hazina VAT. Usafiri bure Zanzibar Zima. Malipo baada ya kupelekwa, mobile money, au bank transfer.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Matumizi ya Miti ya Mitiki Zanzibar</h2>
            <p className="text-center text-gray-500 mb-8">Jinsi nguzo za mitiki (mirunda) zinavyotumika kwa ujenzi, kilimo, na hoteli</p>
            <div className="grid md:grid-cols-2 gap-6">
              {mirundaUses.map((u) => (
                <div key={u.title} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">{u.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Kwa Nini Wateja Wanachagua Zanzibaba Timber?</h2>
            <p className="text-center text-gray-500 mb-8">Nguzo bora za mitiki zinazotokana na uzoefu wa miaka mingi Zanzibar</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: 'Mitiki Bora Asilia', desc: 'Nguzo zote ni mitiki (teak) asilia — zinastahimili mchwa na hali ya hewa kwa asili. Hakuna dawa za kemikali zinazohitajika.' },
                { icon: CheckCircle, title: 'Stock Kubwa Tayari', desc: 'Tuna nguzo nyingi za mitiki kwenye yadi yetu Kwa Ndevu. Hakuna kusubiri — tayari kwa usafiri na utoaji haraka.' },
                { icon: CheckCircle, title: 'Usafiri Bure Zanzibar', desc: 'Usafiri bure kote Zanzibar — Paje, Nungwi, Kendwa, Stone Town, na maeneo yote. Malipo baada ya kupelekwa.' },
              ].map((f) => (
                <div key={f.title} className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <f.icon className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Maswali — Miti ya Mitiki na Mirunda</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-sm hover:text-primary-600 transition-colors">{faq.question}</summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary-700 text-white text-center">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Unahitaji Miti ya Mitiki au Mbao Leo?</h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">Pata bei ya nguzo za mitiki ndani ya dakika 30. Tunasafirisha miti ya mitiki na mbao zote kote Zanzibar.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={generateWhatsAppLink('Habari, nataka kununua miti ya mitiki / mirunda. Tafadhali niambie bei na ukubwa unaopatikana.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                <MessageCircle className="w-5 h-5" /> Pata Bei Bure
              </a>
              <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-white/20">
                Piga +255 716 002 790
              </a>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema('Miti ya Mitiki na Mirunda Zanzibar', 'Nguzo za mitiki (teak wood poles) kwa ujenzi, uzio, na miundo Zanzibar. Kipenyo 2" hadi 6" kwa futi 18. Mitiki asilia inayostahimili mchwa.', '2"-6" x 18ft')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQS)) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
