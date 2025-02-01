'use client'

import { createContext, useContext, useState } from 'react'

interface LayoutContextType {
    cartItemsCount: number
    updateCartCount: (count: number) => void
    isMobileMenuOpen: boolean
    toggleMobileMenu: () => void
  }
  
  const LayoutContext = createContext<LayoutContextType | undefined>(undefined)
  
  export function LayoutProvider({ children }: { children: React.ReactNode }) {
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
    const updateCartCount = (count: number) => {
      setCartItemsCount(count)
    }
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(prev => !prev)
    }
  
    return (
      <LayoutContext.Provider value={{ 
        cartItemsCount, 
        updateCartCount,
        isMobileMenuOpen,
        toggleMobileMenu
      }}>
        {children}
      </LayoutContext.Provider>
    )
  }
  
  export function useLayout() {
    const context = useContext(LayoutContext)
    if (context === undefined) {
      throw new Error('useLayout must be used within a LayoutProvider')
    }
    return context
  }