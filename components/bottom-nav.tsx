'use client'

import { Menu, ShoppingCart, LayoutGrid, Wallet, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function BottomNav() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t flex justify-around items-center h-16 px-4">
      <Link 
        href="/liff"
        className={`flex flex-col items-center ${pathname === '/liff' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <Menu size={24} />
        <span className="text-xs">เมนู</span>
      </Link>
      <Link 
        href="/liff/cart"
        className={`flex flex-col items-center ${pathname === '/liff/cart' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <ShoppingCart size={24} />
        <span className="text-xs">ตะกร้า</span>
      </Link>
      <Link 
        href="/liff/category"
        className={`flex flex-col items-center ${pathname === '/liff/category' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <LayoutGrid size={24} />
        <span className="text-xs">หมวดหมู่</span>
      </Link>
      <Link 
        href="/liff/orders"
        className={`flex flex-col items-center ${pathname === '/liff/orders' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <Wallet size={24} />
        <span className="text-xs">คำสั่งซื้อ</span>
      </Link>
      <Link 
        href="/liff/profile"
        className={`flex flex-col items-center ${pathname === '/liff/profile' ? 'text-blue-600' : 'text-gray-600'}`}
      >
        <User size={24} />
        <span className="text-xs">โปรไฟล์</span>
      </Link>
    </nav>
  )
}

