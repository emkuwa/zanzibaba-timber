'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, Search } from 'lucide-react'
import AdminLogoutButton from '@/components/admin/AdminLogoutButton'

export default function AdminLeads() {
  const [leads, setLeads] = useState([
    { id: 1, name: 'Ahmed Said', phone: '+25571234567', size: '2x4 (18ft)', message: 'Need timber for house', date: '2024-06-08', status: 'New' },
    { id: 2, name: 'Fatma Ali', phone: '+25579876543', size: '1x8 (12ft)', message: 'Inquiry for villa project', date: '2024-06-07', status: 'Contacted' },
  ])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary-600" />
            <h1 className="text-xl font-bold">Leads</h1>
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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          <div className="p-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input placeholder="Search leads..." className="w-full pl-10 pr-4 py-2 rounded-lg border" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-sm">Name</th>
                  <th className="px-4 py-2 text-left text-sm">Phone</th>
                  <th className="px-4 py-2 text-left text-sm">Size</th>
                  <th className="px-4 py-2 text-left text-sm">Status</th>
                  <th className="px-4 py-2 text-left text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-t">
                    <td className="px-4 py-2">{lead.name}</td>
                    <td className="px-4 py-2">{lead.phone}</td>
                    <td className="px-4 py-2">{lead.size}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs ${lead.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
