import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function SpecialOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">โปรโมชั่นพิเศษ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Offer 1 */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg overflow-hidden shadow-lg text-white">
            <div className="p-8">
              <span className="inline-block bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                โปรโมชั่นประจำเดือน
              </span>
              <h3 className="text-2xl font-bold mb-2">ซื้อ 1 แถม 1</h3>
              <p className="mb-6">
                สำหรับวิตามินและอาหารเสริมทุกชนิด เมื่อซื้อสินค้าชิ้นแรกในราคาปกติ
              </p>
              <Link 
                href="/category?type=supplement" 
                className="inline-flex items-center font-medium hover:underline"
              >
                ช้อปเลย <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
          
          {/* Offer 2 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden shadow-lg text-white">
            <div className="p-8">
              <span className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                สมาชิกใหม่
              </span>
              <h3 className="text-2xl font-bold mb-2">ส่วนลด 15%</h3>
              <p className="mb-6">
                สำหรับการสั่งซื้อครั้งแรก เมื่อสมัครสมาชิกใหม่วันนี้
              </p>
              <Link 
                href="/register" 
                className="inline-flex items-center font-medium hover:underline"
              >
                สมัครสมาชิก <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Additional offers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Offer 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">ส่งฟรีเมื่อซื้อครบ 500 บาท</h3>
              <p className="text-gray-600 text-sm mb-4">
                จัดส่งฟรีทั่วประเทศเมื่อซื้อสินค้าครบ 500 บาทขึ้นไป
              </p>
              <Link 
                href="/shipping" 
                className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center"
              >
                ดูรายละเอียด <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Offer 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">รับคะแนนสะสม 2 เท่า</h3>
              <p className="text-gray-600 text-sm mb-4">
                รับคะแนนสะสม 2 เท่าเมื่อซื้อสินค้าในหมวดยาสามัญประจำบ้าน
              </p>
              <Link 
                href="/category?type=medicine" 
                className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center"
              >
                ช้อปเลย <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Offer 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">ลด 10% สำหรับผู้สูงอายุ</h3>
              <p className="text-gray-600 text-sm mb-4">
                ส่วนลด 10% สำหรับลูกค้าที่มีอายุ 60 ปีขึ้นไป (แสดงบัตรประชาชนเมื่อรับสินค้า)
              </p>
              <Link 
                href="/promotion/senior" 
                className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center"
              >
                ดูรายละเอียด <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}