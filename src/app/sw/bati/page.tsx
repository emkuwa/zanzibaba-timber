import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MessageCircle, Sun, Shield, Thermometer, Zap } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Mabati Zanzibar — Bati za Kuezekea Bei | Zanzibaba Timber',
  'Mabati bora Zanzibar — bati za kuezekea, bati za rangi, G30 na G28. Bati za migongo mikubwa na midogo, vigae, kofia na valley. Usafiri bure Zanzibar zima. Piga simu +255 716 002 790.',
  'sw',
  '/sw/bati'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Mabati', url: '/sw/bati' },
])

export default function SwBati() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-primary-200" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-300 hover:underline">Nyumbani</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-100">Mabati</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mabati <span className="text-green-400">Zanzibar</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl">
                Bati bora za kuezekea Zanzibar — G30 na G28, migongo mikubwa na midogo, vigae, kofia na valley. Tunatoa usafiri bure Zanzibar zima na malipo baada ya kupelekwa.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={generateWhatsAppLink('Habari, nataka kununua mabati')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                  <MessageCircle className="w-5 h-5" /> Pata Bei Bure
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Aina za Mabati Zanzibar</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Tunatoa aina mbalimbali za bati za kuezekea kwa ajili ya nyumba, biashara na miradi mikubwa</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: 'Bati G30', desc: 'Bati za kuezekea gauge 30 — bei nafuu na zinazofaa kwa nyumba za makazi. Zinapatikana kwa migongo mikubwa na midogo. Bei shilingi 20,000 kwa pc.' },
                { icon: Shield, title: 'Bati G28', desc: 'Bati za kuezekea gauge 28 — nene na imara zaidi, zinafaa kwa majengo ya biashara na hoteli. Bei shilingi 34,000 kwa pc.' },
                { icon: Sun, title: 'Bati za Rangi', desc: 'Bati za rangi original ambazo hazipauki wala kuchoka. Rangi mbalimbali zinapatikana kwa ajili ya urembo wa nyumba yako.' },
                { icon: CheckCircle, title: 'Bati za Migongo Mikubwa', desc: 'Migongo mipana inatoa mwonekano mzuri na nguvu zaidi. Zinafaa kwa nyumba za kisasa na majengo ya kifahari.' },
                { icon: CheckCircle, title: 'Bati za Migongo Midogo', desc: 'Migongo midogo ni bei nafuu na bado inatoa ulinzi bora dhidi ya jua na mvua. Chaguo maarufu kwa nyumba nyingi Zanzibar.' },
                { icon: Zap, title: 'Vigae, Kofia na Valley', desc: 'Vigae vya versatile, kofia za bati na valley kwa ajili ya kukamilisha paa lako. Vipengele vyote vinapatikana kwa ubora wa juu.' },
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Bei za Mabati Zanzibar</h2>
            <p className="text-center text-gray-500 mb-8">Bei za sasa za mabati Zanzibar — ubora wa juu kwa bei nafuu</p>
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Aina ya Bati</th>
                      <th className="text-left py-3 px-3 text-sm">Gauge</th>
                      <th className="text-center py-3 px-3 text-sm">Upana</th>
                      <th className="text-center py-3 px-3 text-sm">Bei (TZS) kwa pc</th>
                      <th className="text-center py-3 px-3 text-sm">Bei (TZS) kwa bando</th>
                      <th className="text-center py-3 px-3 text-sm">Agiza</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Bati G30 Mgongo Mpana', gauge: 'G30', width: 'Mgongo Mpana', pc: 20500, bundle: 328000 },
                      { name: 'Bati G30 Mgongo Mdogo', gauge: 'G30', width: 'Mgongo Mdogo', pc: 20500, bundle: 328000 },
                      { name: 'Bati G28 Mgongo Mpana', gauge: 'G28', width: 'Mgongo Mpana', pc: 34000, bundle: 544000 },
                      { name: 'Bati G28 Mgongo Mdogo', gauge: 'G28', width: 'Mgongo Mdogo', pc: 34000, bundle: 544000 },
                      { name: 'Bati za Rangi G30', gauge: 'G30', width: 'Rangi', pc: 23000, bundle: 368000 },
                      { name: 'Vigae Versatile', gauge: '-', width: 'Vigae', pc: 34000, bundle: null },
                      { name: 'Kofia na Valley', gauge: '-', width: 'Kofia/Valley', pc: 10000, bundle: null },
                    ].map((b, i) => (
                      <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3 font-semibold text-sm">{b.name}</td>
                        <td className="py-3 px-3 text-sm text-gray-500">{b.gauge}</td>
                        <td className="py-3 px-3 text-center text-sm text-gray-500">{b.width}</td>
                        <td className="py-3 px-3 text-center font-bold text-sm">TZS {b.pc.toLocaleString()}</td>
                        <td className="py-3 px-3 text-center text-sm">{b.bundle ? `TZS ${b.bundle.toLocaleString()}` : '-'}</td>
                        <td className="py-3 px-3 text-center">
                          <a href={generateWhatsAppLink(`Nataka ${b.name}`)} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs font-semibold">
                            <MessageCircle className="w-3 h-3 inline mr-1" />WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Bei hazina VAT. Bando moja lina karatasi 16. Usafiri bure Zanzibar Zima kwa maagizo yote.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Matumizi ya Mabati Zanzibar</h2>
            <p className="text-center text-gray-500 mb-8">Mabati yetu yanafaa kwa matumizi mbalimbali ya kuezekea na ujenzi</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Nyumba za Makazi', desc: 'Bati G30 na G30 za rangi ndio chaguo bora kwa nyumba za makazi Zanzibar. Zinastahimili jua kali na mvua za masika.' },
                { title: 'Hoteli na Resorts', desc: 'Bati G28 na bati za rangi za ubora wa juu kwa hoteli na resort. Tuna uwezo wa kusambaza kwa wingi kwa miradi mikubwa.' },
                { title: 'Vibanda na Ujenzi wa Mashamba', desc: 'Bati za bei nafuu G30 kwa vibanda, ghala, na miradi ya mashamba. Tunatoa usafiri bure mpaka kwenye tovuti yako.' },
                { title: 'Majengo ya Biashara', desc: 'Bati nene G28 kwa majengo ya biashara, maduka, na ofisi. Zinatoa ulinzi bora na muda mrefu wa matumizi.' },
                { title: 'Vigae vya Paa', desc: 'Vigae versatile vinafaa kwa nyumba za kisasa zinazohitaji mwonekano wa kifahari. Zinapatikana kwa rangi mbalimbali.' },
                { title: 'Miradi ya Serikali', desc: 'Tunawahudumia wakandarasi wa serikali kwa usambazaji wa mabati kwa wingi kwa shule, vituo vya afya, na majengo ya umma.' },
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Maswali — Mabati Zanzibar</h2>
            <div className="space-y-4">
              {[
                { q: 'Mabati G30 na G28 ni tofauti gani?', a: 'Bati G30 ni nyembamba (gauge 30) na bei nafuu, inafaa kwa nyumba za makazi. Bati G28 ni nene zaidi (gauge 28) na imara zaidi, inafaa kwa hoteli, majengo ya biashara, na maeneo yenye upepo mkali. G28 inadumu muda mrefu zaidi.' },
                { q: 'Je, mnauza bati za rangi Zanzibar?', a: 'Ndiyo, tunauza bati za rangi original ambazo hazipauki wala kuchoka. Rangi zinapatikana kwa migongo mikubwa na midogo. Bati za rangi ni chaguo maarufu kwa nyumba za kisasa Zanzibar.' },
                { q: 'Je, mnatoa usafiri bure kwa mabati?', a: 'Ndiyo, tunatoa usafiri bure (free delivery) kwa maagizo ya mabati Zanzibar zima. Tunawasilisha mpaka kwenye tovuti yako ya ujenzi kwa maeneo yote ikiwemo Paje, Nungwi, Kendwa, Stone Town, na zaidi.' },
                { q: 'Bando la mabati lina karatasi ngapi?', a: 'Bando moja la mabati lina karatasi 16. Unaweza kununua kwa rejareja (kwa pc) au kwa bando kwa bei ya jumla. Bei za wingi zinapatikana kwa maagizo makubwa.' },
                { q: 'Je, mnauza misumari ya mabati?', a: 'Ndiyo, tunauza misumari ya mabati (roofing nails) kwa kilo. Kila bando la mabati linakuja na misumari 5kg kwa urahisi wako wa ufungaji wa paa.' },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Unahitaji Mabati Leo?</h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">Pata bei za mabati leo. Tunatoa usafiri bure Zanzibar zima na malipo baada ya kupelekwa.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={generateWhatsAppLink('Habari, nataka bei za mabati Zanzibar')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
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
      <Footer />
      <FloatingButtons />
    </>
  )
}
