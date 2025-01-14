//import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const cartItems = Array(6).fill({
    id: 1,
    name: 'Product Demo',
    price: 15.00,
    image: '/placeholder.svg?height=200&width=200'
  })

  return (
    <div className="pb-16">
      <div className="bg-blue-500 p-4 sticky top-0 flex items-center gap-4">
        <Link href="/">
          <ArrowLeft className="text-white w-6 h-6" />
        </Link>
        <h1 className="text-white text-lg font-medium">ตะกร้าสินค้า</h1>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {cartItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-2">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="font-medium mb-1">{item.name}</h3>
              <p className="text-blue-500">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

