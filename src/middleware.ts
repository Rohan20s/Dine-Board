import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authMiddleware } from './middleware/auth.middleware'
// import { languageMiddleware } from './middleware/language.middleware'
// import { tenantMiddleware } from './middleware/tenant.middleware'

export function middleware(request: NextRequest) {
  return authMiddleware(request) ;
        //  languageMiddleware(request) || 
        //  tenantMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 