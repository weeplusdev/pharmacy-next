'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="relative w-full" style={{ height: 'calc(100vh - 120px)' }}> {/* ปรับความสูงให้เหมาะสมกับหน้าจอ */}
      {/* Background Image Container - กำหนดความสูงคงที่ */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://n743nxusas82zqwf.public.blob.vercel-storage.com/Hero-nVcrwXKr4Pdioi5VXNvL9BUbgJtL4g.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center" // เพิ่ม object-center เพื่อจัดกึ่งกลางรูป
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 100vw,
                 100vw"
          quality={75}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900/50" />
      </div>

      {/* Content - ปรับการจัดวางเนื้อหา */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-full max-w-2xl text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                ร้านขายยาออนไลน์ที่คุณไว้วางใจ
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10">
                บริการจัดส่งยาและเวชภัณฑ์ถึงบ้าน พร้อมคำแนะนำจากเภสัชกร
              </p>
              
              {/* Search Box */}
              <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
                <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                  <input
                    type="text"
                    placeholder="ค้นหายาและเวชภัณฑ์..."
                    className="w-full py-4 px-6 text-gray-700 focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white p-4 transition-colors"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}