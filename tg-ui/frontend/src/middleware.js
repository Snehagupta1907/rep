import { NextResponse } from 'next/server';

export async function middleware(req) {

  const token = req.cookies.get('privy-token');
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }



  return NextResponse.next();
}
export const config = {
  matcher: ['/search/:path*', '/dashboard/:path*','/active-pool/:path*','/pool/:path*'], 
};
