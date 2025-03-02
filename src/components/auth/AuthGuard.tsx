'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react'

interface AuthGuardProps {
  children: ReactNode
  requiredRole?: string
}

export function AuthGuard({ children, requiredRole }: AuthGuardProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    // ตรวจสอบบทบาท (ถ้ามีการระบุ)
    if (requiredRole && session.user?.role !== requiredRole) {
      router.push('/unauthorized')
    }
  }, [session, status, router, requiredRole])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  // ตรวจสอบบทบาท (ถ้ามีการระบุ)
  if (requiredRole && session.user?.role !== requiredRole) {
    return null
  }

  return <>{children}</>
} 