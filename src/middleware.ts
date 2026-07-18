import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from '@/lib/admin-auth'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (pathname.startsWith('/admin/') && pathname !== '/admin/') {
    const valid = await verifyAdminSession(request.cookies.get(ADMIN_SESSION_COOKIE)?.value, process.env.ADMIN_SESSION_SECRET)
    if (!valid) return NextResponse.redirect(new URL('/admin', request.url))
  }
  const response = NextResponse.next()
  
  // Set language header for SSR lang attribute
  response.headers.set('x-path-lang', pathname.startsWith('/sw') ? 'sw' : 'en')
  
  // Add noindex headers to all admin routes
  if (pathname.startsWith('/admin')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
}
