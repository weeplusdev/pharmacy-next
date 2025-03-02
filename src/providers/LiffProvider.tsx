'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import liff from '@line/liff'
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
  liff: typeof liff | null
  isLoggedIn: boolean
  profile: any | null
  isLoading: boolean
  error: Error | null
}

const LiffContext = createContext<LiffContextType | undefined>(undefined)

export function LiffProvider({ 
  children, 
  liffId 
}: { 
  children: ReactNode
  liffId: string 
}) {
  const [liffObject, setLiffObject] = useState<typeof liff | null>(null)
  const [profile, setProfile] = useState<any | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // ฟังก์ชันสำหรับเริ่มต้น LIFF
    const initializeLiff = async () => {
      try {
        // นำเข้า LIFF SDK
        const liffModule = await import('@line/liff')
        const liffObject = liffModule.default
        
        // เริ่มต้น LIFF
        await liffObject.init({ liffId })
        setLiffObject(liffObject)
        
        // ตรวจสอบสถานะการล็อกอิน
        const loggedIn = liffObject.isLoggedIn()
        setIsLoggedIn(loggedIn)
        
        // ถ้าล็อกอินแล้ว ดึงข้อมูลโปรไฟล์
        if (loggedIn) {
          const profile = await liffObject.getProfile()
          setProfile(profile)
        }
      } catch (error) {
        console.error('LIFF initialization failed:', error)
        setError(error instanceof Error ? error : new Error('Failed to initialize LIFF'))
      } finally {
        setIsLoading(false)
      }
    }
    
    initializeLiff()
    
    // Cleanup function
    return () => {
      // ทำความสะอาดเมื่อ component ถูก unmount
      if (liffObject) {
        // ไม่มีฟังก์ชัน cleanup อย่างเป็นทางการใน LIFF SDK
        // แต่เราสามารถล้างสถานะได้
        setLiffObject(null)
        setProfile(null)
        setIsLoggedIn(false)
      }
    }
  }, [liffId])

  // ถ้ายังไม่พร้อมให้แสดง Loading
  if (isLoading) {
    return <Loading />
  }

  return (
    <LiffContext.Provider value={{ 
      liff: liffObject, 
      isLoggedIn, 
      profile, 
      isLoading, 
      error 
    }}>
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