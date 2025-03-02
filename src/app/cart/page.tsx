'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

// Mock cart data
const initialCartItems = [
  {
    id: '1',
    name: 'พาราเซตามอล 500 มก.',
    price: 35,
    quantity: 2,
    image: '/products/paracetamol.jpg',
  },
  {
    id: '2',
    name: 'วิตามินซี 1000 มก.',
    price: 250,
    quantity: 1,
    image: '/products/vitamin-c.jpg',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
    toast.success('ลบสินค้าออกจากตะกร้าแล้ว')
  }
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 0 ? 50 : 0
  const total = subtotal + shipping
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">ตะกร้าสินค้า</h1>
      
      {cartItems.length > 0 ? (
        <div className="lg:flex lg:gap-8">
          {/* Cart items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">รายการสินค้า ({cartItems.length})</h2>
                
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 flex flex-col sm:flex-row">
                      {/* Product image */}
                      <div className="sm:w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center mb-4 sm:mb-0">
                        <span className="text-gray-500">รูปภาพ</span>
                      </div>
                      
                      {/* Product details */}
                      <div className="sm:ml-6 flex-1">
                        <div className="flex justify-between mb-2">
                          <Link href={`/product/${item.id}`} className="font-medium text-gray-900 hover:text-green-600">
                            {item.name}
                          </Link>
                          <span className="font-medium">฿{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                        
                        <p className="text-gray-500 text-sm mb-4">฿{item.price.toLocaleString()} / ชิ้น</p>
                        
                        <div className="flex justify-between items-center">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                              className="p-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          {/* Remove button */}
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Continue shopping */}
            <Link 
              href="/category" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              เลือกซื้อสินค้าเพิ่มเติม
            </Link>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">สรุปคำสั่งซื้อ</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ยอดรวม</span>
                    <span>฿{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ค่าจัดส่ง</span>
                    <span>฿{shipping.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>ยอดรวมทั้งสิ้น</span>
                    <span className="text-green-600">฿{total.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="/checkout" 
                    className="w-full flex items-center justify-center py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors"
                  >
                    ดำเนินการสั่งซื้อ
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 text-gray-500 mb-6">
            <ShoppingBag className="h-12 w-12" />
          </div>
          <h2 className="text-xl font-semibold mb-2">ตะกร้าสินค้าของคุณว่างเปล่า</h2>
          <p className="text-gray-600 mb-6">เริ่มช้อปปิ้งเพื่อเพิ่มสินค้าลงในตะกร้า</p>
          <Link 
            href="/category" 
            className="inline-flex items-center justify-center py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors"
          >
            เลือกซื้อสินค้า
          </Link>
        </div>
      )}
    </div>
  )
} 