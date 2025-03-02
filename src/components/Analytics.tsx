'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // ส่งข้อมูลการเปลี่ยนหน้าไปยัง Google Analytics
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    
    // ตัวอย่างการส่งข้อมูลไปยัง Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'YOUR_GA_ID', {
        page_path: url,
      })
    }
    
    // ตัวอย่างการส่งข้อมูลไปยัง Custom Analytics
    try {
      // ส่งข้อมูลไปยัง API ของคุณ
      // fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     path: url,
      //     timestamp: new Date().toISOString(),
      //   }),
      // })
    } catch (error) {
      console.error('Failed to send analytics data:', error)
    }
  }, [pathname, searchParams])
  
  return null // ไม่มีการแสดงผล UI
}

// เพิ่ม type definition สำหรับ gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
} 