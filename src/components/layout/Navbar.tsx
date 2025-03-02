'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const { data: session, status } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

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

          {/* Right side - Search, Login, Cart */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-green-200 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {status === 'loading' ? (
              <div className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
            ) : session ? (
              <div className="relative">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">เปิดเมนูผู้ใช้</span>
                  <User className="h-6 w-6 text-white" />
                </button>
                
                {isMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{session.user?.name}</p>
                      <p className="text-gray-500 truncate">{session.user?.email}</p>
                    </div>
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      โปรไฟล์
                    </Link>
                    <Link 
                      href="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
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
                <Link 
                  href="/login" 
                className="text-white hover:text-green-200 transition-colors"
                >
                <User className="h-6 w-6" />
                </Link>
            )}
            
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
          
          {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
          <Link 
                  key={item.name}
                  href={item.href}
                  className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
                  {item.name}
          </Link>
              ))}
        </div>
        
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
                onClick={() => setIsMenuOpen(false)}
              >
                โปรไฟล์
              </Link>
                  <Link
                    href="/orders"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700"
                    onClick={() => setIsMenuOpen(false)}
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
          </div>
        )}
      </div>
    </nav>
  )
} 