'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

// กำหนด type ที่ชัดเจน
interface CategoryItem {
  id: string
  name: string
  href: string
  subCategories: CategoryItem[] // เปลี่ยนจาก optional (?) เป็น required
}

// ประกาศ categories พร้อม type
const categories: CategoryItem[] = [
    {
      id: 'medicine',
      name: 'ยา',
      href: '/category?type=medicine',
      subCategories: [
        {
          id: 'pain',
          name: 'ยาแก้ปวด',
          href: '/category?type=medicine&subtype=pain',
          subCategories: [
            { id: 'paracetamol', name: 'พาราเซตามอล', href: '/category?type=medicine&subtype=pain&product=paracetamol', subCategories: [] },
            { id: 'ibuprofen', name: 'ไอบูโพรเฟน', href: '/category?type=medicine&subtype=pain&product=ibuprofen', subCategories: [] }
          ]
        },
        {
          id: 'cold',
          name: 'ยาแก้หวัด',
          href: '/category?type=medicine&subtype=cold',
          subCategories: [
            { id: 'antihistamine', name: 'ยาแก้แพ้', href: '/category?type=medicine&subtype=cold&product=antihistamine', subCategories: [] },
            { id: 'decongestant', name: 'ยาลดน้ำมูก', href: '/category?type=medicine&subtype=cold&product=decongestant', subCategories: [] }
          ]
        }
      ]
    },
    {
      id: 'medical-supply',
      name: 'เวชภัณฑ์',
      href: '/category?type=medical-supply',
      subCategories: [
        {
          id: 'first-aid',
          name: 'อุปกรณ์ปฐมพยาบาล',
          href: '/category?type=medical-supply&subtype=first-aid',
          subCategories: [
            { id: 'bandage', name: 'ผ้าพันแผล', href: '/category?type=medical-supply&subtype=first-aid&product=bandage', subCategories: [] },
            { id: 'gauze', name: 'ผ้าก๊อซ', href: '/category?type=medical-supply&subtype=first-aid&product=gauze', subCategories: [] }
          ]
        },
        {
          id: 'personal-care',
          name: 'อุปกรณ์ดูแลส่วนบุคคล',
          href: '/category?type=medical-supply&subtype=personal-care',
          subCategories: [
            { id: 'mask', name: 'หน้ากากอนามัย', href: '/category?type=medical-supply&subtype=personal-care&product=mask', subCategories: [] },
            { id: 'gloves', name: 'ถุงมือ', href: '/category?type=medical-supply&subtype=personal-care&product=gloves', subCategories: [] }
          ]
        }
      ]
    },
    // ... เพิ่มหมวดหมู่อื่นๆ ในรูปแบบเดียวกัน
  ]

export function CategorySidebar() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const renderCategory = (category: CategoryItem) => {
    const isExpanded = expandedCategories.includes(category.id)
    const hasSubCategories = category.subCategories.length > 0 // ไม่ต้องเช็ค undefined

    return (
      <div key={category.id} className="border-b last:border-b-0">
        <div 
          className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 cursor-pointer"
          onClick={() => hasSubCategories && toggleCategory(category.id)}
        >
          <a 
            href={category.href}
            className="flex-1 text-gray-700 hover:text-blue-600"
            onClick={(e) => {
              if (hasSubCategories) {
                e.preventDefault()
              }
            }}
          >
            {category.name}
          </a>
          {hasSubCategories && (
            <span className="text-gray-400">
              {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </span>
          )}
        </div>
        {hasSubCategories && isExpanded && (
          <div className="ml-4 border-l">
            {category.subCategories.map(subCategory => (
              <a 
                key={subCategory.id}
                href={subCategory.href}
                className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                {subCategory.name}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">หมวดหมู่สินค้า</h2>
      </div>
      <div>
        {categories.map(renderCategory)}
      </div>
    </div>
  )
}