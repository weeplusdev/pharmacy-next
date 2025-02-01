'use client'

import { createContext, useContext, useState } from 'react'

type LayoutContextType = {
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  cartItemsCount: number
  setCartItemsCount: (count: number) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItemsCount, setCartItemsCount] = useState(0)

  return (
    <LayoutContext.Provider value={{
      isCartOpen,
      setIsCartOpen,
      cartItemsCount,
      setCartItemsCount
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