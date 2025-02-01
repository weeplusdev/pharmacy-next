import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const appType = searchParams.get("apptype")

  // ถ้าเป็น LINE LIFF
  if (appType === "line") {
    // ถ้าเข้าที่ root path ให้ redirect ไปที่ products
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/category?apptype=line", request.url))
    }
    // รักษา apptype parameter ไว้สำหรับทุก route
    const newUrl = new URL(request.url)
    newUrl.searchParams.set("apptype", "line")
    return NextResponse.rewrite(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}