'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { LayoutProvider } from '@/contexts/LayoutContext'
import { HeaderTop } from './HeaderTop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Toaster } from '@/components/ui/sonner'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'
  const [showHeaderTop, setShowHeaderTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlHeaderTop = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
          setShowHeaderTop(false)
        }
      } else {
        setShowHeaderTop(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', controlHeaderTop)
    return () => {
      window.removeEventListener('scroll', controlHeaderTop)
    }
  }, [lastScrollY])

  return (
    <LayoutProvider>
      <div className="min-h-screen flex flex-col">
        {showHeaderTop && <HeaderTop />}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </div>
    </LayoutProvider>
  )
}