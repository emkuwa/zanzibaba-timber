import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema, getFAQSchema, getProductSchema } from '@/lib/seo'
import { POLES, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MessageCircle, Ruler, TreePine, Fence, Building2, Warehouse } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Mirunda Zanzibar | Nguzo za Mbao na Treated Wood Poles — Zanzibaba Timber',
  'Mirunda (treated wood poles) Zanzibar. Nguzo za mbao za dawa kwa ujenzi, uzio, na miundo. Kipenyo 2" hadi 6" kwa futi 18. Usafiri bure Zanzibar zima. Malipo baada ya kupelekwa. Piga +255 716 002 790.',
  'sw',
  '/sw/mirunda'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Mirunda', url: '/sw/mirunda' },
])

const FAQS = [
  { question: 'Mirunda ni nini?', answer: 'Mirunda ni nguzo za mbao za mviringo (round timber poles) zinazotumika kwa ujenzi, uzio, na miundo mbalimbali Zanzibar. Mirunda hutengenezwa kwa mbao za pine zilizowekewa dawa (treated pine) ili kuzuia mchwa, kuvu, na kuoza. Hizi ndizo nguzo za mbao maarufu kwa ujenzi wa magorofa na mabanda.' },
  { question: 'Je, mirunda inapatikana Zanzibar?', answer: 'Ndiyo, Zanzibaba Timber ndio msambazaji mkuu wa mirunda (treated wood poles) Zanzibar. Tunauza mirunda kipenyo 2" hadi 6" kwa urefu wa futi 18. Mirunda inapatikana kwa wingi kwenye yadi yetu Kwa Ndevu, Daraja Bovu. Tunasafirisha kote Zanzibar bure.' },
  { question: 'Mirunda inatumika kwa ajili ya nini?', answer: 'Mirunda inatumika kwa ujenzi wa magorofa (multi-storey buildings), mabanda, uzio, nguzo za umeme, miundo ya hoteli na resort, nguzo za kilimo, na miundo ya pwani. Pia inatumika kwa uzio wa mashamba, viwanja, na mipaka ya hoteli Zanzibar.' },
  { question: 'Je, mirunda ina dawa (imewekewa dawa)?', answer: 'Ndiyo, mirunda zote kutoka Zanzibaba Timber zimewekewa dawa maalum (treated) kwa kutumia mashine ya shinikizo la juu (pressure treatment). Dawa hizi huzuia mchwa, kuvu, na kuoza. Mirunda yetu inadumu miaka mingi hata ikiwa kwenye ardhi au kwenye mazingira ya pwani.' },
  { question: 'Je, mnasafirisha mirunda Zanzibar?', answer: 'Ndiyo, tunasafirisha mirunda kote Zanzibar bure. Tunawasilisha Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu, na Kwa Ndevu. Malipo baada ya kupelekwa (cash on delivery) inakubaliwa.' },
  { question: 'Je, mirunda inalinganishwaje na mbao za ujenzi (2x4, 2x6)?', answer: 'Mirunda ni bora kwa matumizi yanayohitaji nguvu ya asili ya mbao bila kukatwa — kama uzio, nguzo za umeme, na miundo. Mbao za ujenzi (sawn timber) kama 2x4 na 2x6 ni bora kwa framing, paa, deck, na ujenzi wa kina. Tuna aina zote mbili Zanzibar.' },
]

const mirundaBenefits = [
  { icon: TreePine, title: 'Mirunda ya Dawa', desc: 'Mirunda zilizowekewa dawa kwa mashine ya shinikizo. Zinastahimili mchwa, kuvu, na kuoza. Bora kwa hali ya hewa ya Zanzibar.' },
  { icon: Fence, title: 'Nguzo za Uzio na Umeme', desc: 'Nguzo imara za mirunda kwa uzio wa mashamba, hoteli, nyumba, na nguzo za umeme. Kipenyo 2" hadi 6" zinapatikana.' },
  { icon: Building2, title: 'Mirunda kwa Ujenzi', desc: 'Nguzo za mbao kwa ujenzi wa magorofa, mabanda, na miundo. Mirunda ina nguvu ya asili ya kubeba mzigo.' },
  { icon: Warehouse, title: 'Ugavi na Usafiri Bure', desc: 'Mirunda nyingi kwenye yadi yetu Kwa Ndevu. Usafiri bure Zanzibar zima. Malipo baada ya kupelekwa.' },
]

const mirundaUses = [
  { title: 'Ujenzi wa Magorofa na Mabanda', desc: 'Mirunda hutumika kwa wingi kwa ujenzi wa magorofa (multi-storey) na mabanda Zanzibar. Umbile la mviringo linatoa nguvu ya asili ya kubeba mzigo. Inatumika kwa nguzo za msingi hadi sakafu za juu.' },
  { title: 'Uzio wa Mashamba na Viwanja', desc: 'Nguzo za mirunda ndio chaguo bora kwa uzio wa mashamba, hoteli, resort, na nyumba Zanzibar. Mirunda yetu inadumu miaka 15+ iwapo iko kwenye ardhi.' },
  { title: 'Nguzo za Umeme na Mawasiliano', desc: 'Mirunda imara kwa nguzo za umeme, simu, na mawasiliano. Inastahimili hali ya hewa na kudumu kwa miaka mingi.' },
  { title: 'Miundo ya Pwani na Hoteli', desc: 'Mirunda inayostahimili chumvi kwa hoteli za pwani, cabanas, deck za pwani, na miundo ya baharini. Dawa hulinda dhidi ya unyevu na jua.' },
  { title: 'Kilimo na Mashamba', desc: 'Nguzo za mirunda kwa uzio wa mifugo, mazao, na majengo ya kilimo. Imara na bei nafuu kwa wakulima Zanzibar.' },
  { title: 'Miundo ya Bustani na Mapambo', desc: 'Mirunda kwa bustani, pergolas, gazebos, na miundo ya mapambo kwa hoteli, resort, na nyumba Zanzibar.' },
]

export default function MirundaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-green-900 via-primary-900 to-gray-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-primary-200" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-300 hover:underline">Nyumbani</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-100">Mirunda</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mirunda <span className="text-green-400">Zanzibar</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl">
                Mirunda (treated wood poles) za ubora kwa ujenzi, uzio, na miundo Zanzibar. Nguzo za mbao zilizowekewa dawa kuzuia mchwa na kuoza. Kipenyo 2" hadi 6" kwa urefu futi 18. Usafiri bure Zanzibar zima — malipo baada ya kupelekwa.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={generateWhatsAppLink('Habari, nataka kununua mirunda. Tafadhali niambie bei na ukubwa unaopatikana.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                  <MessageCircle className="w-5 h-5" /> Pata Bei za Mirunda
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Mirunda Inapatikana Sasa</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Nguzo za mbao za mviringo kwa ujenzi, uzio na miundo. Stock kubwa kwenye yadi yetu Kwa Ndevu.</p>
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

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Ukubwa wa Mirunda na Bei</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Kipenyo mbalimbali — mirunda ya treated pine, urefu futi 18. Wasiliana kwa bei za sasa.</p>
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
                        <td className="py-3 px-3 font-semibold text-sm">{pole.diameter} Mirunda</td>
                        <td className="py-3 px-3 text-sm text-gray-500">{pole.length}</td>
                        <td className="py-3 px-3 text-center">
                          {(() => {
                            const prices: Record<string, number> = { '2"': 8500, '3"': 12000, '4"': 15000, '5"': 20000, '6"': 25000 }
                            return <span className="font-bold text-sm">{formatTZS(prices[pole.diameter || '2"'])}</span>
                          })()}
                        </td>
                        <td className="py-3 px-3 text-center">
                          <a href={generateWhatsAppLink(`Nataka mirunda diameter ${pole.diameter} ${pole.length}`)} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs font-semibold">
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

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Matumizi ya Mirunda Zanzibar</h2>
            <p className="text-center text-gray-500 mb-8">Jinsi nguzo za mbao za mviringo zinavyotumika kwa ujenzi, kilimo, na hoteli</p>
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

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Kwa Nini Wateja Wanachagua Zanzibaba Timber?</h2>
            <p className="text-center text-gray-500 mb-8">Mirunda bora inayotokana na uzoefu wa miaka mingi Zanzibar</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: 'Mirunda ya Dawa', desc: 'Mirunda zote zimewekewa dawa kwa mashine (pressure treated) kuzuia mchwa, kuvu, na kuoza. Inafaa kwa ardhi na mazingira ya pwani.' },
                { icon: CheckCircle, title: 'Stock Kubwa Tayari', desc: 'Tuna mirunda nyingi kwenye yadi yetu Kwa Ndevu. Hakuna kusubiri — tayari kwa usafiri na utoaji haraka.' },
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

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Maswali — Mirunda</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-sm hover:text-primary-600 transition-colors">{faq.question}</summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary-700 text-white text-center">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Unahitaji Mirunda au Mbao za Ujenzi Leo?</h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">Pata bei ya mirunda ndani ya dakika 30. Tunasafirisha mirunda na mbao zote kote Zanzibar.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={generateWhatsAppLink('Habari, nataka kununua mirunda. Tafadhali niambie bei na ukubwa unaopatikana.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema('Mirunda Zanzibar', 'Mirunda (treated wood poles) kwa ujenzi, uzio na miundo Zanzibar. Kipenyo 2" hadi 6" kwa futi 18. Treated pine.', '2"-6" x 18ft')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQS)) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
