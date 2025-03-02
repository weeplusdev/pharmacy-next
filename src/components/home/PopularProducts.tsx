'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, ChevronRight, Star } from 'lucide-react'
import { toast } from 'sonner'
import { mockProducts } from '@/data/mockProducts'

export function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'medicine', name: 'ยา' },
    { id: 'supplement', name: 'อาหารเสริม' },
    { id: 'medical-supply', name: 'เวชภัณฑ์' },
  ]
  
  const filteredProducts = activeCategory === 'all' 
    ? mockProducts.slice(0, 8) 
    : mockProducts.filter(product => product.category === activeCategory).slice(0, 8)
  
  const addToCart = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId)
    if (product) {
      toast.success(`เพิ่ม ${product.name} ลงตะกร้าแล้ว`)
    }
  }
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">สินค้ายอดนิยม</h2>
          <Link href="/category" className="text-green-600 hover:text-green-700 flex items-center">
            <span>ดูทั้งหมด</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/product/${product.id}`} className="block">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">รูปภาพสินค้า</span>
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="font-semibold text-lg mb-1 hover:text-green-600 transition-colors">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} />
                      ))}
                    </div>
                    <span className="ml-1 text-gray-500 text-xs">({product.reviewCount})</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <p className="text-green-600 font-bold text-lg mb-3">฿{product.price.toLocaleString()}</p>
                </Link>
                
                <button
                  onClick={() => addToCart(product.id)}
                  disabled={!product.inStock}
                  className={`w-full flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    product.inStock 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-gray-300 cursor-not-allowed text-gray-500'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'เพิ่มลงตะกร้า' : 'สินค้าหมด'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}