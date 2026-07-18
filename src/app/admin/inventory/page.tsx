'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Package } from 'lucide-react'
import AdminLogoutButton from '@/components/admin/AdminLogoutButton'

export default function AdminInventory() {
  const [inventory, setInventory] = useState({
    inStock: 1200,
    lowStock: 3,
    outOfStock: 1,
    notes: 'Mirunda running low',
  })

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-primary-600" />
            <h1 className="text-xl font-bold">Inventory</h1>
          </div>
          <AdminLogoutButton />
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
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{inventory.inStock}</div>
            <div className="text-sm">In Stock</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{inventory.lowStock}</div>
            <div className="text-sm">Low Stock</div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{inventory.outOfStock}</div>
            <div className="text-sm">Out of Stock</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="font-semibold mb-4">Notes</h2>
          <textarea
            value={inventory.notes}
            onChange={(e) => setInventory({ ...inventory, notes: e.target.value })}
            className="w-full p-3 rounded-lg border mb-4"
            rows={3}
          />
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg">Save Notes</button>
        </div>
      </main>
    </div>
  )
}
