'use client'

import { useEffect } from 'react'
import { useLiff } from '@/providers/LiffProvider'
import { signIn } from 'next-auth/react'

export function AutoRegister() {
  const { liff, profile, isLoggedIn } = useLiff()

  useEffect(() => {
    const registerLineUser = async () => {
      if (isLoggedIn && profile) {
        try {
          // ตรวจสอบว่ามี user นี้ในระบบแล้วหรือไม่
          const response = await fetch('/api/auth/line-register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lineUserId: profile.userId,
              displayName: profile.displayName,
              pictureUrl: profile.pictureUrl
            })
          })

          if (response.ok) {
            // ล็อกอินอัตโนมัติ
            await signIn('line', { 
              lineUserId: profile.userId,
              redirect: false 
            })
          }
        } catch (error) {
          console.error('LINE auto-register failed:', error)
        }
      }
    }

    registerLineUser()
  }, [isLoggedIn, profile])

  return null
}