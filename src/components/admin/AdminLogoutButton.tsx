'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AdminLogoutButton() {
  const router = useRouter()

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
    router.refresh()
  }

  return (
    <button onClick={logout} className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
      <LogOut className="w-4 h-4" /> Logout
    </button>
  )
}
