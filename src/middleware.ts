import { NextResponse, NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const appType = searchParams.get("apptype")
  
  // ตรวจสอบ token จาก NextAuth.js
  const token = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  })

  // Skip middleware for static assets and API routes
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/api")
  ) {
    return NextResponse.next()
  }

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

  // ตรวจสอบการยืนยันตัวตนเฉพาะเส้นทางที่ต้องการการป้องกัน
  const isProtectedRoute = pathname.startsWith("/dashboard") || 
                          pathname.startsWith("/settings") || 
                          pathname.startsWith("/profile");
  
  // ตรวจสอบการยืนยันตัวตนเฉพาะเส้นทางที่ต้องการการป้องกัน
  if (isProtectedRoute) {
    // ถ้าไม่มีโทเค็น ให้ redirect ไปที่หน้าล็อกอิน
    if (!token) {
      const loginUrl = new URL("/login", request.url)
      loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
    
    // เพิ่ม user info ลงใน request headers เพื่อให้ใช้งานในแอปได้
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', token.id as string)
    requestHeaders.set('x-user-role', token.role as string)
    
    // ส่งต่อคำขอพร้อมกับ headers ที่เพิ่มเข้าไป
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // เส้นทางที่ต้องการการป้องกัน
    '/dashboard/:path*', 
    '/settings/:path*',
    '/profile/:path*',
    
    // เส้นทางสำหรับแอป LINE LIFF (ไม่รวมไฟล์สถิตและ API)
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
}