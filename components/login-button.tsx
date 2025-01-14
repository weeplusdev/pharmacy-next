'use client'

import { Button } from '@/components/ui/button'
import { useLiff } from '@/hooks/useLiff'

export function LoginButton() {
  const liffContext = useLiff()

  if (!liffContext) {
    return null // or some fallback UI
  }

  const { isLoggedIn, login, logout } = liffContext

  return (
    <div>
      {isLoggedIn ? (
        <Button onClick={logout} variant="outline">
          ออกจากระบบ
        </Button>
      ) : (
        <Button onClick={login}>
          เข้าสู่ระบบด้วย LINE
        </Button>
      )}
    </div>
  )
}



