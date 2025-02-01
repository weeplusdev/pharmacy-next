import { FaFacebook, FaLine } from "react-icons/fa"

export function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">เกี่ยวกับเรา</h3>
              <p className="text-sm">
                โคราชเภสัช ร้านขายยาออนไลน์ที่ได้มาตรฐาน พร้อมให้คำปรึกษาโดยเภสัชกร
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">ช่วยเหลือ</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/faq">คำถามที่พบบ่อย</a></li>
                <li><a href="/shipping">การจัดส่ง</a></li>
                <li><a href="/return">การคืนสินค้า</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">ติดต่อเรา</h3>
              <ul className="space-y-2 text-sm">
                <li>โทร: 099-999-9999</li>
                <li>อีเมล: info@koratpharma.com</li>
                <li>ที่อยู่: เมืองนครราชสีมา</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">ติดตามเรา</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-emerald-500">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-emerald-500">
                  <FaLine className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 โคราชเภสัช. สงวนลิขสิทธิ์</p>
          </div>
        </div>
      </footer>
    )
  }