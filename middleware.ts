import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  
  // Pegamos o hostname (ex: lp-2.motinfilms.com.br ou lp-2.localhost:3000)
  const hostname = request.headers.get('host') || ''

  // Defina seu domínio principal aqui
  // Isso serve para limpar o hostname e pegar só o subdomínio
  const rootDomain = process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'motinfilms.com.br'

  // Remove o domínio principal, sobrando só o subdomínio (ex: "lp-2")
  // Se for o domínio raiz, currentHost ficará vazio ou igual ao rootDomain dependendo da lógica exata,
  // mas o replace abaixo garante que pegamos o que vem antes do ponto.
  const currentHost = hostname
    .replace(`.${rootDomain}`, '')
    .replace(`${rootDomain}`, '')

  // Lista de subdomínios permitidos (Opcional: Segurança para não abrir qualquer pasta)
  // Se quiser abrir qualquer pasta que exista, pode remover essa verificação
  const allowedSubdomains = ['lp-1', 'lp-2', 'lp-3', 'produtora-audiovisual']

  // Verificações para ignorar o middleware
  // 1. Se for o domínio principal
  // 2. Se for 'www'
  // 3. Se não estiver na lista de subdomínios permitidos (opcional)
  if (
    hostname === rootDomain ||
    currentHost === 'www' ||
    !allowedSubdomains.includes(currentHost)
  ) {
    return NextResponse.next()
  }

  // LÓGICA DE REESCRITA (REWRITE)
  // O usuário acessa: lp-2.dominio.com
  // O Next mostra: /lp-2
  
  // Mantemos o pathname caso o usuário acesse lp-2.dominio.com/contato
  const path = url.pathname 
  
  // Reescreve a URL interna para a pasta correspondente ao subdomínio
  return NextResponse.rewrite(new URL(`/${currentHost}${path}`, request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (sua pasta de imagens publicas)
     * - svg (sua pasta de svgs publicos)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|svg).*)',
  ],
}