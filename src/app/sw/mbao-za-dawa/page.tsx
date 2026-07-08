import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema, getFAQSchema, getProductSchema } from '@/lib/seo'
import { TIMBER_SIZES, generateWhatsAppLink, formatTZS, PRODUCT_VARIANTS } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MessageCircle, Shield, Thermometer, Bug, Droplets } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Mbao za Dawa Zanzibar | Treated Pine — Zanzibaba Timber',
  'Mbao za dawa (treated pine) Zanzibar. Mbao zenye dawa za kuzuia mchwa, kuvu, na kuoza. Kiln-dried. Usafiri bure Zanzibar zima. Piga +255 716 002 790.',
  'sw',
  '/sw/mbao-za-dawa'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Mbao za Dawa', url: '/sw/mbao-za-dawa' },
])

const faqSchema = getFAQSchema([
  { question: 'Mbao za dawa ni nini?', answer: '                Mbao za dawa (treated pine) ni mbao zilizotibiwa kwa kemikali maalum kuzuia mchwa, kuvu, na kuoza. Pia huitwa mirunda zilizowekewa dawa au mbao zilizochemishwa kwa dawa. Hii inamaanisha mbao zinadumu muda mrefu hasa katika hali ya hewa ya Zanzibar.' },
  { question: 'Je, mbao za dawa ni salama kwa matumizi ya nyumba?', answer: 'Ndiyo, mbao za dawa (treated pine) zinatibiwa kwa viwango vya usalama na zinafaa kwa matumizi ya nyumba, paa, na miundo ya nje. Treated pine inatumika kwa wingi katika ujenzi duniani.' },
  { question: 'Mbao za dawa zinadumu muda gani?', answer: 'Mbao treated pine zinaweza kudumu miaka 15-25 au zaidi nje, na muda mrefu zaidi kwa matumizi ya ndani. Maisha ya mbao yanategemea mazingira na matengenezo.' },
  { question: 'Je, mnauza mbao za dawa Zanzibar?', answer: 'Ndiyo, Zanzibaba Timber ndio duka la mbao za dawa (treated pine) Zanzibar. Tunauza saizi zote: 1x6, 1x8, 1x10, 2x2, 2x3, 2x4, 2x6, na treated wood poles. Usafiri bure Zanzibar zima.' },
])

export default function MbaoZaDawa() {
  const variants = PRODUCT_VARIANTS.filter(v => v.price).slice(0, 8)

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-primary-200" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-300 hover:underline">Nyumbani</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-100">Mbao za Dawa</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mbao za Dawa <span className="text-green-400">Zanzibar</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl">
                Treated pine zenye dawa za kuzuia mchwa, kuvu, na kuoza. Kiln-dried na tayari kwa ujenzi. Usafiri bure Zanzibar zima.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={generateWhatsAppLink('Habari, nataka kununua mbao za dawa')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                  <MessageCircle className="w-5 h-5" /> Pata Anda Bure
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Faida za Mbao za Dawa</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Kwa nini uchague treated pine kwa mradi wako wa ujenzi Zanzibar</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Bug, title: 'Kinga ya Mchwa', desc: 'Mbao zinatibiwa kwa dawa maalum zinazozuia mchwa na wadudu waharibifu. Hii inahakikisha mbao zako zinadumu kwa miaka mingi.' },
                { icon: Droplets, title: 'Kinga ya Kuoza', desc: 'Treated pine inastahimili unyevu na mvua. Inafaa kwa matumizi ya nje kama vile veranda, nguzo, na miundo iliyo wazi.' },
                { icon: Thermometer, title: 'Kiln-Dried', desc: 'Mbao zetu zimekaushwa kwa tanuru maalum (kiln-dried) ili kuhakikisha hazipindi au kufanya kasoro baada ya kujenga.' },
                { icon: Shield, title: 'Kinga ya Kuvu', desc: 'Dawa za kuzuia kuvu na ukungu huwekwa kwenye mbao. Muhimu haswa kwa hali ya hewa ya unyevu ya Zanzibar.' },
                { icon: CheckCircle, title: 'Ubora wa Juu', desc: 'Mbao zote zinakaguliwa ubora kabla ya kusambazwa. Tunahakikisha kila kipande kinakidhi viwango vya kimataifa.' },
                { icon: MessageCircle, title: 'Utoaji BURE', desc: 'Tunawasilisha mbao zako kote Zanzibar bure. Kutoka Paje hadi Nungwi, Stone Town hadi Jambiani.' },
              ].map((f) => (
                <div key={f.title} className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow">
                  <f.icon className="w-10 h-10 text-primary-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Saizi za Mbao za Dawa</h2>
            <p className="text-center text-gray-500 mb-8">Saizi zote za mbao treated pine zinapatikana Zanzibar — bei kwa kila kipande (kwa pic)</p>
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Saizi</th>
                      <th className="text-left py-3 px-3 text-sm">Urefu (futi)</th>
                      <th className="text-center py-3 px-3 text-sm">Bei (TZS) kwa pic</th>
                      <th className="text-center py-3 px-3 text-sm">Agiza</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((v) => (
                      <tr key={v.sku} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3 font-semibold text-sm">{v.size}</td>
                        <td className="py-3 px-3 text-sm text-gray-500">{v.length}</td>
                        <td className="py-3 px-3 text-center font-bold text-sm">{v.price ? formatTZS(v.price) : '-'}</td>
                        <td className="py-3 px-3 text-center">
                          <a href={generateWhatsAppLink(`Nataka ${v.size} ${v.length} mbao za dawa`)} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs font-semibold">
                            <MessageCircle className="w-3 h-3 inline mr-1" />WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Bei hazina VAT. Usafiri bure Zanzibar Zima.</p>
            </div>
            <div className="text-center mt-8">
              <Link href="/sw/prices" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all">
                Tazama Bei Zote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Matumizi ya Mbao za Dawa</h2>
            <p className="text-center text-gray-500 mb-8">Mbao treated pine zinafaa kwa matumizi mbalimbali ya ujenzi</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Paa na Miundo', desc: 'Mbao 2x4 na 2x6 treated pine ndio bora kwa ajili ya paa, miundo ya kuezekea, na framing. Zinastahimili mzigo na hali ya hewa.' },
                { title: 'Veranda na Deck', desc: 'Treated pine inafaa kwa deck, veranda, na matumizi ya nje. Inastahimili jua, mvua, na unyevu bila kuoza.' },
                { title: 'Nguzo na Uzio', desc: 'Nguzo za mbao treated pine na treated wood poles ni bora kwa ua na uzio. Zinadumu kwa miaka mingi bila kuharibika.' },
                { title: 'Kuta na Dari', desc: 'Mbao 1x6 na 1x8 treated pine zinafaa kwa ajili ya kuta, dari, na mapambo ya ndani. Zina mwonekano mzuri na ni imara.' },
                { title: 'Samani na Makabati', desc: 'Mbao 1x8 na 1x10 zinafaa kwa samani, makabati, na meza. Treated pine ni imara na ina muda mrefu wa matumizi.' },
                { title: 'Miradi ya Biashara', desc: 'Hoteli, resort, na miradi ya serikali hutumia treated pine kwa wingi kwa ajili ya ujenzi wa kibiashara. Tuna uwezo wa kusambaza kwa wingi.' },
              ].map((u) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Maswali — Mbao za Dawa</h2>
            <div className="space-y-4">
              {[
                { q: 'Mbao za dawa ni nini?', a: 'Mbao za dawa (pia huitwa mbao zilizochemishwa kwa dawa au treated pine) ni mbao ambazo zimetibiwa kwa kemikali maalum kuzuia mchwa, kuvu, na kuoza. Treated pine ni chaguo bora kwa ujenzi wa kisasa Zanzibar.' },
                { q: 'Je, mbao za dawa zinatofautianaje na mbao za kawaida?', a: 'Mbao za kawaida hazina dawa za kuzuia mchwa na kuvu. Mbao treated pine zinatibiwa kwa shinikizo la juu (pressure treated) ambapo dawa huingia ndani ya mbao. Hii inazifanya zidumu mara 3-5 zaidi ya mbao za kawaida.' },
                { q: 'Je, mbao za dawa zinauzwa Zanzibar?', a: 'Ndiyo, Zanzibaba Timber ndio msambazaji mkuu wa mbao za dawa (treated pine) Zanzibar. Tuna yadi yetu Kwa Ndevu, Daraja Bovu, na tunasambaza kote kisiwani. Piga +255 716 002 790 au WhatsApp kwa bei.' },
                { q: 'Je, mbao treated pine ni salama kwa mazingira?', a: 'Ndiyo, mbao treated pine zinatibiwa kwa kemikali ambazo zimeidhinishwa na viwango vya kimataifa vya usalama. Kemikali zinazotumika ni salama kwa wanadamu na wanyama baada ya kutibiwa. Treated pine inachukuliwa kuwa rafiki wa mazingira kwa sababu inadumu muda mrefu.' },
                { q: 'Je, mnatoa usafiri bure Zanzibar?', a: 'Ndiyo, tunatoa usafiri bure (free delivery) kwa maagizo yote Zanzibar Zima. Tunawasilisha mbao zako moja kwa moja kwenye tovuti ya ujenzi kwa maeneo yote ikiwemo Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu, na Kwa Ndevu.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-sm hover:text-primary-600 transition-colors">{faq.q}</summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary-700 text-white text-center">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Unahitaji Mbao za Dawa Leo?</h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">Pata anda yako bure ndani ya dakika 30. Tutoa mbao kote Zanzibar.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={generateWhatsAppLink('Habari, nataka kununua mbao za dawa')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                <MessageCircle className="w-5 h-5" /> Pata Anda Bure
              </a>
              <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-white/20">
                Piga +255 716 002 790
              </a>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
