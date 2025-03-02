import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      {/* Main footer */}
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
            <div>
            <h3 className="text-xl font-bold mb-4">PharmaCare</h3>
            <p className="text-gray-300 mb-4">
              ร้านขายยาออนไลน์ที่ให้บริการด้านยาและผลิตภัณฑ์สุขภาพที่มีคุณภาพ พร้อมคำแนะนำจากเภสัชกรผู้เชี่ยวชาญ
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            </div>
          
          {/* Quick links */}
            <div>
            <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/category" className="text-gray-300 hover:text-green-400 transition-colors">
                  หมวดหมู่สินค้า
                </Link>
              </li>
              <li>
                <Link href="/promotion" className="text-gray-300 hover:text-green-400 transition-colors">
                  โปรโมชั่น
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">
                  บทความสุขภาพ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              </ul>
            </div>
          
          {/* Customer service */}
            <div>
            <h3 className="text-lg font-semibold mb-4">บริการลูกค้า</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-green-400 transition-colors">
                  คำถามที่พบบ่อย
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-green-400 transition-colors">
                  นโยบายการจัดส่ง
                </Link>
              </li>
              <li>
                <Link href="/return" className="text-gray-300 hover:text-green-400 transition-colors">
                  นโยบายการคืนสินค้า
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-green-400 transition-colors">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
              </ul>
            </div>
          
          {/* Contact info */}
            <div>
            <h3 className="text-lg font-semibold mb-4">ข้อมูลติดต่อ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">02-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">info@pharmacare.co.th</span>
              </li>
            </ul>
              </div>
            </div>
          </div>
      
      {/* Bottom footer */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} PharmaCare. สงวนลิขสิทธิ์ทั้งหมด
            </p>
            <div className="flex items-center space-x-4">
              <img src="/payment/visa.svg" alt="Visa" className="h-8" />
              <img src="/payment/mastercard.svg" alt="Mastercard" className="h-8" />
              <img src="/payment/promptpay.svg" alt="PromptPay" className="h-8" />
              <img src="/payment/truemoney.svg" alt="TrueMoney" className="h-8" />
            </div>
          </div>
          </div>
        </div>
      </footer>
    )
  }
  