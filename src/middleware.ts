import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from '@/lib/admin-auth'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname !== '/admin') {
    const authenticated = await verifyAdminSession(
      request.cookies.get(ADMIN_SESSION_COOKIE)?.value,
      process.env.ADMIN_SESSION_SECRET,
    )
    if (!authenticated) {
      const loginUrl = request.nextUrl.clone()
      loginUrl.pathname = '/admin'
      loginUrl.search = ''
      return NextResponse.redirect(loginUrl)
    }
  }

  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  response.headers.set('Cache-Control', 'no-store')
  return response
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
