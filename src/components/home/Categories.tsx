import Link from 'next/link'

export function Categories() {
  const categories = [
    { 
      id: 'medicine',
      name: 'ยา', 
      icon: '💊',
      href: '/category?type=medicine'
    },
    { 
      id: 'medical-supply', 
      name: 'เวชภัณฑ์', 
      icon: '🏥',
      href: '/category?type=medical-supply'
    },
    { 
      id: 'supplement',
      name: 'อาหารเสริม', 
      icon: '💪',
      href: '/category?type=supplement'
    },
    { 
      id: 'cosmetic',
      name: 'เวชสำอาง', 
      icon: '✨',
      href: '/category?type=cosmetic'
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">หมวดหมู่สินค้า</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}