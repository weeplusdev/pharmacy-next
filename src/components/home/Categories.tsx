import Link from 'next/link'
import { Apple, Pill, Sparkles, Stethoscope, Bandage, Heart, Activity } from 'lucide-react'

export function Categories() {
  const categories = [
    { 
      id: 'medicine',
      name: 'ยาสามัญประจำบ้าน', 
      icon: <Pill className="h-12 w-12 text-green-500" />,
      href: '/category?type=medicine',
      description: 'ยาสามัญประจำบ้านที่จำเป็นสำหรับทุกครัวเรือน'
    },
    /*
    { 
      id: 'medical-supply', 
      name: 'เวชภัณฑ์', 
      icon: <FirstAidKit className="h-12 w-12 text-red-500" />,
      href: '/category?type=medical-supply',
      description: 'เวชภัณฑ์และอุปกรณ์ปฐมพยาบาลเบื้องต้น'
    }*/,
    { 
      id: 'medical-equipment',
      name: 'อุปกรณ์การแพทย์', 
      icon: <Stethoscope className="h-12 w-12 text-blue-500" />,
      href: '/category?type=medical-equipment',
      description: 'อุปกรณ์การแพทย์สำหรับการดูแลสุขภาพที่บ้าน'
    },
    { 
      id: 'supplement',
      name: 'วิตามินและอาหารเสริม', 
      icon: <Apple className="h-12 w-12 text-orange-500" />,
      href: '/category?type=supplement',
      description: 'วิตามินและอาหารเสริมเพื่อสุขภาพที่ดี'
    },
    { 
      id: 'cosmetic',
      name: 'เวชสำอาง', 
      icon: <Sparkles className="h-12 w-12 text-purple-500" />,
      href: '/category?type=cosmetic',
      description: 'ผลิตภัณฑ์เวชสำอางคุณภาพสูง'
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">หมวดหมู่สินค้า</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          เลือกชมสินค้าตามหมวดหมู่ที่ต้องการ เรามีสินค้าคุณภาพครอบคลุมทุกความต้องการ
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center flex flex-col items-center"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}