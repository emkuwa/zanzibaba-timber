'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, LogOut, Home, DollarSign, Package, Users, MessageSquare, FileText, BarChart3, Copy } from 'lucide-react'

const ADMIN_PASSWORD = 'zanzibaba-admin-2024'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_auth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <Lock className="w-12 h-12 mx-auto text-primary-600 mb-3" />
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-sm text-gray-500">Zanzibaba Timber - Internal Panel</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}