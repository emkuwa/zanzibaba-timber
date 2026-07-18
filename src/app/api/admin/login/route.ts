import { NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, adminSessionMaxAge, createAdminSession } from '@/lib/admin-auth'

export async function POST(request: Request) {
  const configuredPassword = process.env.ADMIN_PASSWORD
  const sessionSecret = process.env.ADMIN_SESSION_SECRET
  if (!configuredPassword || !sessionSecret) {
    return NextResponse.json({ error: 'Admin login is not configured.' }, { status: 503 })
  }

  let password = ''
  try {
    const body = await request.json()
    password = typeof body.password === 'string' ? body.password : ''
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (password !== configuredPassword) {
    return NextResponse.json({ error: 'Invalid password.' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_SESSION_COOKIE, await createAdminSession(sessionSecret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: adminSessionMaxAge,
  })
  return response
}
