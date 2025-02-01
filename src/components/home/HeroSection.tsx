import Image from 'next/image'

export function HeroSection() {
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
        <div className="absolute inset-0 bg-blue-900/50" />
      </div>

      {/* Content - ปรับการจัดวางเนื้อหา */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center h-full">
            <div className="w-full md:max-w-xl"> {/* ควบคุมความกว้างของเนื้อหา */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                ร้านขายยาออนไลน์ที่คุณไว้วางใจ
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
                บริการจัดส่งยาและเวชภัณฑ์ถึงบ้าน พร้อมคำแนะนำจากเภสัชกร
              </p>
              <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
                ช้อปเลย
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}