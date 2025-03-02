import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/login?callbackUrl=/dashboard')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">แดชบอร์ด</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-lg">ยินดีต้อนรับ, {session.user?.name || 'ผู้ใช้'}!</p>
        <p className="text-gray-600 mt-2">นี่คือหน้าแดชบอร์ดส่วนตัวของคุณ</p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-700">ข้อมูลส่วนตัว</h3>
            <p className="text-sm text-blue-600 mt-1">จัดการข้อมูลส่วนตัวของคุณ</p>
            <a href="/profile" className="mt-3 inline-block text-sm text-blue-600 hover:text-blue-800">
              ไปที่โปรไฟล์ &rarr;
            </a>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-700">ประวัติการสั่งซื้อ</h3>
            <p className="text-sm text-green-600 mt-1">ดูประวัติการสั่งซื้อของคุณ</p>
            <a href="/orders" className="mt-3 inline-block text-sm text-green-600 hover:text-green-800">
              ดูประวัติ &rarr;
            </a>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-700">รายการโปรด</h3>
            <p className="text-sm text-purple-600 mt-1">ดูรายการสินค้าที่คุณชื่นชอบ</p>
            <a href="/favorites" className="mt-3 inline-block text-sm text-purple-600 hover:text-purple-800">
              ดูรายการโปรด &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 