'use client'

import { useState, useEffect } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export function HeaderTop() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <div className={`bg-white text-gray-600 py-2 border-b transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="mr-6">
              <Image 
                src="/logo.png" 
                alt="Pharmacy Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:info@koratpharma.com" className="flex items-center space-x-2 hover:text-green-600 transition-colors">
              <span className="text-green-500"><MailIcon className="w-5 h-5" /></span>
              <span className="hidden md:inline">info@koratpharma.com</span>
            </a>
            <a href="tel:099-999-9999" className="flex items-center space-x-2 hover:text-green-600 transition-colors">
              <span className="text-green-500"><PhoneIcon className="w-5 h-5" /></span>
              <span className="hidden md:inline">099-999-9999</span>
            </a>
            <a href="/location" className="flex items-center space-x-2 hover:text-green-600 transition-colors">
              <span className="text-green-500"><MapPinIcon className="w-5 h-5" /></span>
              <span className="hidden md:inline">เมืองนครราชสีมา</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}