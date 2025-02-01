'use client'

//import { withLiffLogin } from '@/providers/LiffProvider'
//import { useLiff } from '@/providers/LiffProvider'
//import type { Product } from '@/types/product'

interface LoadingStyleProps {
    spinnerColor: string;
    textColor: string;
    bgColor: string;
  }
  
  const loadingStyles: Record<'default' | 'line', LoadingStyleProps> = {
    default: {
      spinnerColor: 'border-blue-200 border-t-blue-500',
      textColor: 'text-gray-500',
      bgColor: 'bg-white/80',
    },
    line: {
      spinnerColor: 'border-[#00B900]/20 border-t-[#00B900]',
      textColor: 'text-gray-600',
      bgColor: 'bg-[#00B900]/5',
    },
  }
  
  export default function Loading() {
    const style = loadingStyles.line; // หรือ .default ตามที่ต้องการ
  
    return (
      <div className={`fixed inset-0 flex items-center justify-center ${style.bgColor} z-50`}>
        <div className="flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full border-4 ${style.spinnerColor} animate-spin`} />
          <p className={`mt-4 ${style.textColor}`}>กำลังโหลด...</p>
        </div>
      </div>
    )
  }