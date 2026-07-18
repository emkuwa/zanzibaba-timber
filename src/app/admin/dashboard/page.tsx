'use client'

import Link from 'next/link'
import { Package, Users, MessageSquare, FileText } from 'lucide-react'
import AdminLogoutButton from '@/components/admin/AdminLogoutButton'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Leads', value: '127', icon: Users, color: 'blue' },
    { label: 'Quote Requests', value: '42', icon: FileText, color: 'green' },
    { label: 'Popular Size', value: '2x4 (18ft)', icon: Package, color: 'orange' },
    { label: 'Inquiries Today', value: '8', icon: MessageSquare, color: 'purple' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <AdminLogoutButton />
        </div>
      </header>

      <nav className="bg-white dark:bg-gray-800 border-b px-4 py-2">
        <div className="flex gap-2 overflow-x-auto">
          <Link href="/admin/dashboard" className="px-4 py-2 rounded-lg bg-primary-50 text-primary-600 font-medium">Dashboard</Link>
          <Link href="/admin/prices" className="px-4 py-2 rounded-lg hover:bg-gray-100">Prices</Link>
          <Link href="/admin/inventory" className="px-4 py-2 rounded-lg hover:bg-gray-100">Inventory</Link>
          <Link href="/admin/leads" className="px-4 py-2 rounded-lg hover:bg-gray-100">Leads</Link>
          <Link href="/admin/quotes" className="px-4 py-2 rounded-lg hover:bg-gray-100">Quotes</Link>
          <Link href="/admin/whatsapp" className="px-4 py-2 rounded-lg hover:bg-gray-100">WhatsApp</Link>
        </div>
      </nav>

      <main className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
              <stat.icon className={`w-8 h-8 text-${stat.color}-500 mb-2`} />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Inquiries</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="font-medium">Ahmed Said</div>
                  <div className="text-sm text-gray-500">2x4 • Need timber for house</div>
                </div>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
