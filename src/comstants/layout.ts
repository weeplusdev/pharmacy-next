import { MenuItem, ContactInfo } from '@/types/layout'
import { FaFacebook, FaLine } from "react-icons/fa"

export const CONTACT_INFO: ContactInfo = {
  email: 'info@koratpharma.com',
  phone: '099-999-9999',
  location: 'เมืองนครราชสีมา'
}

export const MAIN_MENU: MenuItem[] = [
  { label: 'หน้าหลัก', href: '/' },
  { label: 'หมวดหมู่สินค้า', href: '/categories' },
  { label: 'โปรโมชั่น', href: '/promotion' },
  { label: 'บทความสุขภาพ', href: '/articles' }
]

export const FOOTER_LINKS = {
  help: [
    { label: 'คำถามที่พบบ่อย', href: '/faq' },
    { label: 'การจัดส่ง', href: '/shipping' },
    { label: 'การคืนสินค้า', href: '/return' }
  ],
  social: [
    { label: 'Facebook', href: '#', icon: FaFacebook },
    { label: 'Line', href: '#', icon: FaLine }
  ]
}