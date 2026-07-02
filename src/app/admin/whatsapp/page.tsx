'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LogOut, Copy, MessageCircle } from 'lucide-react'

export default function AdminWhatsapp() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  
  const prices = {
    '18ft': {
      '2x2': 10500,
      '2x3': 19000,
      '2x4': 21000,
      '2x6': 35000,
      '2x8': 58000,
      '1x4': 8000,
      '1x6': 19000,
      '1x8': 32000,
      '1x10': 48000,
      'Treated Wood Poles': 10500,
    },
    '12ft': {
      '2x2': 7000,
      '2x4': 10500,
      '1x6': 12000,
      '1x8': 17000,
      '1x10': 29000,
    },
  }

  const generatePriceList = () => {
    let text = 'ZANZIBABA TIMBER PRICE LIST\n\n18ft:\n'
    Object.entries(prices['18ft']).forEach(([size, price]) => {
      text += `${size}: ${price.toLocaleString()} TZS\n`
    })
    text += '\n12ft:\n'
    Object.entries(prices['12ft']).forEach(([size, price]) => {
      text += `${size}: ${price.toLocaleString()} TZS\n`
    })
    text += '\n📞 +255 716 002 790\n📍 Kwa Ndevu, Daraja Bovu, Zanzibar'
    return text
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('admin_auth') !== 'true') {
      router.push('/admin')
    }
  }, [router])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePriceList())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary-600" />
            <h1 className="text-xl font-bold">WhatsApp Price List</h1>
          </div>
          <button onClick={() => { localStorage.removeItem('admin_auth'); router.push('/admin') }} className="flex items-center gap-2 text-gray-600">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <nav className="bg-white dark:bg-gray-800 border-b px-4 py-2">
        <div className="flex gap-2 overflow-x-auto">
          {['Dashboard', 'Prices', 'Inventory', 'Leads', 'Quotes', 'WhatsApp'].map((item) => (
            <Link key={item} href={`/admin/${item.toLowerCase()}`} className="px-4 py-2 rounded-lg hover:bg-gray-100">
              {item}
            </Link>
          ))}
        </div>
      </nav>

      <main className="p-4 max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow mb-6">
          <h2 className="font-semibold mb-4">Generated Price List</h2>
          <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-sm whitespace-pre-wrap mb-4">
            {generatePriceList()}
          </pre>
          <button
            onClick={copyToClipboard}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/255716002790?text=${encodeURIComponent(generatePriceList())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            <MessageCircle className="w-5 h-5" /> Send via WhatsApp
          </a>
        </div>
      </main>
    </div>
  )
}