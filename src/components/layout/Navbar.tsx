'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const { data: session, status } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // ปิดเมนูเมื่อคลิกนอกเมนู
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isUserMenuOpen && !target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSignOut = async () => {
    setIsUserMenuOpen(false);
    await signOut({ callbackUrl: '/' })
  }

  const menuItems = [
    { name: 'หน้าหลัก', href: '/' },
    { name: 'ยาสามัญประจำบ้าน', href: '/category?type=medicine' },
    { name: 'เวชภัณฑ์', href: '/category?type=medical-supply' },
    { name: 'อุปกรณ์การแพทย์', href: '/category?type=medical-equipment' },
    { name: 'วิตามินและอาหารเสริม', href: '/category?type=supplement' },
    { name: 'เวชสำอาง', href: '/category?type=cosmetic' },
  ]

  return (
    <nav className={`bg-green-600 text-white sticky top-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {isScrolled && (
                <Image 
                  src="/logo.png" 
                  alt="Pharmacy Logo" 
                  width={100} 
                  height={32}
                  className="h-8 w-auto"
                />
              )}
              {!isScrolled && (
                <span className="text-xl font-bold text-white">โคราชฟาร์มา</span>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1 mx-10">
            <div className="flex space-x-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Search, Login/User, Cart */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-green-200 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {/* Loading, User Menu, or Login Button */}
            {status === 'loading' ? (
              <div className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
            ) : session ? (
              <div className="relative user-menu-container">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                >
                  <span className="sr-only">เปิดเมนูผู้ใช้</span>
                  <User className="h-6 w-6 text-white" />
                </button>
                
                {/* Desktop User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{session.user?.name}</p>
                      <p className="text-gray-500 truncate">{session.user?.email}</p>
                    </div>
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      โปรไฟล์
                    </Link>
                    <Link 
                      href="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      ประวัติการสั่งซื้อ
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      ออกจากระบบ
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  href="/login" 
                  className="flex items-center gap-1 bg-white text-green-600 hover:bg-green-50 px-3 py-1.5 rounded-full font-medium text-sm transition-colors shadow-sm"
                >
                  <User className="h-4 w-4" />
                  <span>เข้าสู่ระบบ</span>
                </Link>
                <Link 
                  href="/register" 
                  className="flex items-center gap-1 bg-green-700 text-white hover:bg-green-800 px-3 py-1.5 rounded-full font-medium text-sm transition-colors shadow-sm"
                >
                  <span>ลงทะเบียน</span>
                </Link>
              </div>
            )}
            
            {/* Shopping Cart */}
            <Link 
              href="/cart" 
              className="text-white hover:text-green-200 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          
            {/* Mobile menu button - แยกจากปุ่ม User */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">เปิดเมนูหลัก</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - แยกจาก User Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
      
          {/* Only show user menu items if logged in */}
          {session && (
            <div className="pt-4 pb-3 border-t border-green-700">
              <div className="flex items-center px-5">
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{session.user?.name}</div>
                  <div className="text-sm font-medium text-green-200">{session.user?.email}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link 
                  href="/profile" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  โปรไฟล์
                </Link>
                <Link
                  href="/orders"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ประวัติการสั่งซื้อ
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700"
                >
                  ออกจากระบบ
                </button>
              </div>
            </div>
          )}
          
          {/* Show login and register buttons in mobile menu if not logged in */}
          {!session && (
            <div className="pt-4 pb-3 border-t border-green-700">
              <div className="px-2 space-y-2">
                <Link 
                  href="/login" 
                  className="flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-green-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>เข้าสู่ระบบ</span>
                </Link>
                <Link 
                  href="/register" 
                  className="flex items-center justify-center gap-2 bg-green-700 text-white hover:bg-green-800 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>ลงทะเบียน</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  )
} 