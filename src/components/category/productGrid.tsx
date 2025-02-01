'use client'

import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Product } from '@/types/product'
import { products } from '@/data/products'
import { getCategoryTitle, isValidCategory } from '@/utils/category'


interface ProductGridProps {
    type?: string
    subtype?: string
    product?: string
}

export function ProductGrid({ type, subtype, product }: ProductGridProps) {
    const filteredProducts = products.filter(p => {
        if (product) return p.productId === product
        if (subtype) return p.subtype === subtype
        if (type) return p.type === type
        return true
      })
  
     
    return (
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
          {type && isValidCategory(type) ? 
            getCategoryTitle(type, subtype, product) : 
            'สินค้าทั้งหมด'
          }
          </h1>
          <select className="border rounded-lg px-4 py-2">
            <option>เรียงตามความนิยม</option>
            <option>ราคาต่ำ - สูง</option>
            <option>ราคาสูง - ต่ำ</option>
            <option>สินค้าใหม่</option>
          </select>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow">
              <div className="p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-blue-600">
                    ฿{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ฿{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 disabled:bg-gray-300"
                        disabled={!product.inStock}>
                  {product.inStock ? 'เพิ่มลงตะกร้า' : 'สินค้าหมด'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }