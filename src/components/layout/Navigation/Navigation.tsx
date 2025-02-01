'use client'

import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon } from "lucide-react"
import { ServerNav } from './ServerNav'
import { useLayout } from '@/contexts/LayoutContext'

export function Navigation() {
  const { cartItemsCount, toggleMobileMenu } = useLayout()

  return (
    <nav className="bg-emerald-400 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Server-side rendered navigation */}
          <ServerNav />

          {/* Client-side elements */}
          <div className="flex items-center space-x-4">
            {/* Search on desktop */}
            <div className="hidden md:block relative">
              <input 
                type="search" 
                placeholder="ค้นหาสินค้า" 
                className="w-64 px-4 py-2 rounded-full text-gray-800 focus:outline-none"
              />
              <SearchIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <MenuIcon className="h-6 w-6" />
            </button>

            {/* Cart with count */}
            <button className="p-2 relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            {/* User */}
            <button className="p-2">
              <UserIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-4">
          <div className="relative">
            <input 
              type="search" 
              placeholder="ค้นหาสินค้า" 
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none"
            />
            <SearchIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  )
}