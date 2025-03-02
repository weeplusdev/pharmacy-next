'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

// สำหรับการใช้งานในคอมโพเนนต์ต่างๆ ให้ใช้ useSession จาก next-auth/react โดยตรง
// import { useSession } from 'next-auth/react' 