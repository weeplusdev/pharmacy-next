'use client'

import { withLiffLogin } from '@/providers/LiffProvider'
import { useLiff } from '@/providers/LiffProvider'
import type { Product } from '@/types/product'

interface LineCategoryViewProps {
  products: Product[]
}

function LineCategoryView({ products }: LineCategoryViewProps) {
  const { profile } = useLiff()

  // ตอนนี้ TypeScript จะรู้ type ของ profile แล้ว
  return (
    <div>
      <div className="p-4">
        <p>สวัสดี, {profile?.displayName}</p>
        {profile?.pictureUrl && (
          <img 
            src={profile.pictureUrl} 
            alt={profile.displayName}
            className="w-10 h-10 rounded-full" 
          />
        )}
      </div>
      {/* Products grid */}
    </div>
  )
}

// ใช้ HOC เพื่อบังคับให้ login ก่อนเข้าใช้งาน
export default withLiffLogin(LineCategoryView)