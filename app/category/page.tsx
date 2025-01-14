import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import Image from 'next/image'
import Link from 'next/link'

export default function Category() {
  const categories = [
    { id: 'eczema', name: 'โรคผิวหนัง', image: '/placeholder.svg?height=200&width=200' },
    { id: 'nasal', name: 'ยาพ่นจมูก', image: '/placeholder.svg?height=200&width=200' },
    { id: 'fever', name: 'ยาลดไข้', image: '/placeholder.svg?height=200&width=200' },
    { id: 'infection', name: 'ยาต้านการติดเชื้อ', image: '/placeholder.svg?height=200&width=200' },
    { id: 'spasm', name: 'ยาแก้ปวดเกร็ง', image: '/placeholder.svg?height=200&width=200' },
  ]

  const products = Array(6).fill({
    id: 1,
    name: 'Product Demo',
    price: 15.00,
    image: '/placeholder.svg?height=200&width=200'
  })

  return (
    <div className="pb-16">
      <Header />
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="relative h-24 rounded-lg overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-medium">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product, idx) => (
            <Link
              key={idx}
              href={`/products/${product.id}`}
              className="bg-white rounded-lg shadow p-2"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-blue-500">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

