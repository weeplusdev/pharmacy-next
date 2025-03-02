import Link from 'next/link'

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">ไม่มีสิทธิ์เข้าถึง</h1>
      <p className="text-lg text-gray-600 mb-8">
        คุณไม่มีสิทธิ์เข้าถึงหน้านี้ กรุณาติดต่อผู้ดูแลระบบหากคุณคิดว่านี่เป็นข้อผิดพลาด
      </p>
      <div className="flex space-x-4">
        <Link 
          href="/" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          กลับไปหน้าหลัก
        </Link>
        <Link 
          href="/contact" 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          ติดต่อผู้ดูแลระบบ
        </Link>
      </div>
    </div>
  )
} 