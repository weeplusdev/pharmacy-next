'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function OrderButton() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleOrder = () => {
    if (!session) {
      // ถ้ายังไม่ได้ลงทะเบียน ให้ไปหน้าลงทะเบียนพร้อม callback URL
      router.push(`/auth/register?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    // ดำเนินการสั่งซื้อ
    // ...
  }

  return (
    <button
      onClick={handleOrder}
      className="bg-blue-600 text-white px-4 py-2 rounded-md"
    >
      สั่งซื้อ
    </button>
  )
}