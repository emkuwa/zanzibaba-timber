'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LogOut, Save, DollarSign } from 'lucide-react'

const INITIAL_PRICES = {
  '18ft': {
    'Mirunda': { wholesale: 8000, margin: 0, selling: 8000, stock: 'In Stock' },
    '2x2': { wholesale: 8000, margin: 0, selling: 8000, stock: 'In Stock' },
    '2x3': { wholesale: 10000, margin: 0, selling: 10000, stock: 'In Stock' },
    '2x4': { wholesale: 14000, margin: 0, selling: 14000, stock: 'In Stock' },
    '2x6': { wholesale: 24000, margin: 0, selling: 24000, stock: 'In Stock' },
    '1x6': { wholesale: 15000, margin: 0, selling: 15000, stock: 'In Stock' },
    '1x8': { wholesale: 22000, margin: 0, selling: 22000, stock: 'In Stock' },
    '1x10': { wholesale: 35000, margin: 0, selling: 35000, stock: 'In Stock' },
  },
  '12ft': {
    '2x2': { wholesale: 5000, margin: 0, selling: 5000, stock: 'In Stock' },
    '2x3': { wholesale: 7000, margin: 0, selling: 7000, stock: 'In Stock' },
    '2x4': { wholesale: 10000, margin: 0, selling: 10000, stock: 'In Stock' },
    '2x6': { wholesale: 18000, margin: 0, selling: 18000, stock: 'In Stock' },
    '1x6': { wholesale: 8000, margin: 0, selling: 8000, stock: 'In Stock' },
    '1x8': { wholesale: 11000, margin: 0, selling: 11000, stock: 'In Stock' },
    '1x10': { wholesale: 18000, margin: 0, selling: 18000, stock: 'In Stock' },
  },
}

export default function AdminPrices() {
  const router = useRouter()
  const [prices, setPrices] = useState(INITIAL_PRICES)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('admin_auth') !== 'true') {
      router.push('/admin')
    }
    const stored = localStorage.getItem('timber_prices')
    if (stored) setPrices(JSON.parse(stored))
  }, [router])

  const updatePrice = (length: '18ft' | '12ft', size: string, field: string, value: number | string) => {
    const newPrices = { ...prices } as typeof prices
    const existing = prices[length][size as keyof typeof prices[typeof length]]
    newPrices[length][size as keyof typeof newPrices[typeof length]] = { ...existing, [field]: value } as any
    if (field === 'wholesale') {
      newPrices[length][size as keyof typeof newPrices[typeof length]].selling = value as number
    }
    setPrices(newPrices)
    setSaved(false)
  }

  const savePrices = () => {
    localStorage.setItem('timber_prices', JSON.stringify(prices))
    setSaved(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary-600" />
            <h1 className="text-xl font-bold">Timber Prices</h1>
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

      <main className="p-4 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">18ft Prices</h2>
          <div className="space-y-3">
            {Object.entries(prices['18ft']).map(([size, data]: [string, any]) => (
              <div key={size} className="grid grid-cols-4 gap-3 items-center">
                <span className="font-medium">{size}</span>
                <input
                  type="number"
                  value={data.wholesale}
                  onChange={(e) => updatePrice('18ft', size, 'wholesale', Number(e.target.value))}
                  className="px-3 py-1 rounded border"
                  placeholder="Wholesale"
                />
                <span className="text-center text-gray-500">→</span>
                <span className="font-bold text-primary-600">{data.selling.toLocaleString()} TZS</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">12ft Prices</h2>
          <div className="space-y-3">
            {Object.entries(prices['12ft']).map(([size, data]: [string, any]) => (
              <div key={size} className="grid grid-cols-4 gap-3 items-center">
                <span className="font-medium">{size}</span>
                <input
                  type="number"
                  value={data.wholesale}
                  onChange={(e) => updatePrice('12ft', size, 'wholesale', Number(e.target.value))}
                  className="px-3 py-1 rounded border"
                  placeholder="Wholesale"
                />
                <span className="text-center text-gray-500">→</span>
                <span className="font-bold text-primary-600">{data.selling.toLocaleString()} TZS</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={savePrices} className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
          <Save className="w-4 h-4" /> Save Prices {saved && <span className="text-green-300">✓</span>}
        </button>
      </main>
    </div>
  )
}