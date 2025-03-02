'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useRequireAuth(redirectTo = '/login') {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push(`${redirectTo}?callbackUrl=${encodeURIComponent(window.location.href)}`)
    }
  }, [session, status, router, redirectTo])

  return { session, status }
} 