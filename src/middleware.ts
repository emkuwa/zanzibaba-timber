import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
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