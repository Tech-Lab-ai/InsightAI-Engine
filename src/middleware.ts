import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// Este é um middleware de exemplo. A lógica de autenticação real
// seria implementada aqui para proteger as rotas do console.
export function middleware(request: NextRequest) {
  // Para este exemplo, estamos permitindo que todas as solicitações passem.
  // Em um aplicativo real, você validaria um token de sessão aqui.
  // const session = request.cookies.get('session');
  // if (!session) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }
 
  return NextResponse.next()
}
 
export const config = {
  // Corresponde a todas as rotas dentro do grupo (console)
  matcher: ['/dashboard/:path*', '/chat/:path*', '/documents/:path*', '/sessions/:path*', '/audit/:path*', '/users/:path*', '/settings/:path*', '/billing/:path*'],
}
