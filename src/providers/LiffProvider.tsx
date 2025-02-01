'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Liff } from '@line/liff'
import Loading from '@/components/shared/Loading'

// กำหนด interface สำหรับ LINE Profile
interface LiffProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
  email?: string
}

interface LiffContextType {
  liff: Liff | null
  isLoggedIn: boolean
  profile: LiffProfile | null
  isReady: boolean
}

const LiffContext = createContext<LiffContextType>({
  liff: null,
  isLoggedIn: false,
  profile: null,
  isReady: false,
})

export function LiffProvider({ 
  children,
  liffId 
}: { 
  children: React.ReactNode
  liffId: string 
}) {
  const [liff, setLiff] = useState<Liff | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profile, setProfile] = useState<LiffProfile | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    import('@line/liff').then(({ default: liff }) => {
      liff.init({ 
        liffId,
        withLoginOnExternalBrowser: true
      }).then(async () => {
        setLiff(liff)
        if (liff.isLoggedIn()) {
          setIsLoggedIn(true)
          try {
            // ใช้ type assertion เพื่อให้ TypeScript รู้ว่าเป็น LiffProfile
            const profile = await liff.getProfile() as LiffProfile
            setProfile(profile)
          } catch (error) {
            console.error('Error getting LINE profile:', error)
          }
        }
        setIsReady(true)
      }).catch(err => {
        console.error('LIFF initialization failed:', err)
        setIsReady(true)
      })
    })

    // Cleanup function
    return () => {
      if (liff?.isLoggedIn()) {
        setProfile(null)
        setIsLoggedIn(false)
      }
    }
  }, [liffId])

  // ถ้ายังไม่พร้อมให้แสดง Loading
  if (!isReady) {
    return <Loading />
  }

  return (
    <LiffContext.Provider value={{ liff, isLoggedIn, profile, isReady }}>
      {children}
    </LiffContext.Provider>
  )
}

// Custom hook สำหรับใช้งาน LIFF
export function useLiff() {
  const context = useContext(LiffContext)
  if (context === undefined) {
    throw new Error('useLiff must be used within a LiffProvider')
  }
  return context
}

// Helper function สำหรับเช็คว่าได้ login แล้วหรือยัง
export function withLiffLogin<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithLiffLoginComponent(props: P) {
    const { liff, isLoggedIn } = useLiff()

    useEffect(() => {
      if (liff && !isLoggedIn) {
        liff.login()
      }
    }, [liff, isLoggedIn])
    if (!isLoggedIn) {
      return <Loading />
    }

    return <WrappedComponent {...props} />
  }
}