'use client'

import { createContext, useEffect, useState } from 'react'
import type { Liff } from '@line/liff'

type Profile = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

type LiffContextType = {
  liff: Liff | null
  isLoggedIn: boolean
  profile: Profile | null
  login: () => Promise<void>
  logout: () => Promise<void>
}

export const LiffContext = createContext<LiffContextType>({
  liff: null,
  isLoggedIn: false,
  profile: null,
  login: async () => {},
  logout: async () => {},
})

export function LiffProvider({ children }: { children: React.ReactNode }) {
  const [liff, setLiff] = useState<Liff | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const initLiff = async () => {
      try {
        const { default: liff } = await import('@line/liff')
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
        setLiff(liff)
        
        if (liff.isLoggedIn()) {
          setIsLoggedIn(true)
          const fetchedProfile = await liff.getProfile()
          setProfile(fetchedProfile)
        }
      } catch (error) {
        console.error('LIFF initialization failed', error)
      }
    }

    initLiff()
  }, [])

  const login = async () => {
    if (!liff) return
    try {
      await liff.login()
      setIsLoggedIn(true)
      const fetchedProfile = await liff.getProfile()
      setProfile(fetchedProfile)
    } catch (error) {
      console.error('LIFF login failed', error)
    }
  }

  const logout = async () => {
    if (!liff) return
    try {
      await liff.logout()
      setIsLoggedIn(false)
      setProfile(null)
    } catch (error) {
      console.error('LIFF logout failed', error)
    }
  }

  return (
    <LiffContext.Provider value={{ liff, isLoggedIn, profile, login, logout }}>
      {children}
    </LiffContext.Provider>
  )
}

