'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { LayoutProvider } from '@/contexts/LayoutContext'
import { HeaderTop } from './HeaderTop'
import { Navigation } from './Navigation/Navigation'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'
  const [showHeaderTop, setShowHeaderTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (!isLandingPage) return // ไม่ต้องทำงานในหน้าอื่น

    const controlHeaderTop = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeaderTop(false)
      } else {
        setShowHeaderTop(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', controlHeaderTop)
    return () => {
      window.removeEventListener('scroll', controlHeaderTop)
    }
  }, [lastScrollY, isLandingPage])

  return (
    <LayoutProvider>
      <div className="min-h-screen">
        {/* HeaderTop with animation only on landing page */}
        {isLandingPage && (
          <div 
            className={`transform transition-transform duration-300 ${
              showHeaderTop ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <HeaderTop />
          </div>
        )}
        
        {/* Navigation */}
        <div className="sticky top-0 z-50">
          <Navigation />
        </div>

        <main>
          {children}
        </main>

        <Footer />
      </div>
    </LayoutProvider>
  )
}