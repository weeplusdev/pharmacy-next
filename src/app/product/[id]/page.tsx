'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ShoppingCart, Heart, Share2, ArrowLeft, Plus, Minus, Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

// Mock product data - in a real app, this would come from an API
const mockProducts = [
  {
    id: '1',
    name: 'พาราเซตามอล 500 มก.',
    price: 35,
    image: '/products/paracetamol.jpg',
    category: 'medicine',
    subCategory: 'pain',
    description: 'ยาแก้ปวด ลดไข้ บรรเทาอาการปวดศีรษะ ปวดฟัน ปวดกล้ามเนื้อ และลดไข้',
    longDescription: 'พาราเซตามอล 500 มก. เป็นยาบรรเทาอาการปวดและลดไข้ที่ใช้กันอย่างแพร่หลาย สามารถบรรเทาอาการปวดศีรษะ ปวดฟัน ปวดกล้ามเนื้อ ปวดประจำเดือน และลดไข้ได้ ยานี้มีความปลอดภัยเมื่อใช้ตามขนาดที่แนะนำ',
    usage: 'รับประทานครั้งละ 1-2 เม็ด ทุก 4-6 ชั่วโมง เมื่อมีอาการ ไม่ควรรับประทานเกิน 8 เม็ดต่อวัน',
    warning: 'ห้ามใช้ในผู้ที่แพ้พาราเซตามอล ควรปรึกษาแพทย์หากใช้ยาอื่นร่วมด้วย ไม่ควรใช้ติดต่อกันเกิน 5 วัน โดยไม่ปรึกษาแพทย์',
    inStock: true,
    rating: 4.8,
    reviewCount: 245,
    relatedProducts: ['2', '6']
  },
  {
    id: '2',
    name: 'วิตามินซี 1000 มก.',
    price: 250,
    image: '/products/vitamin-c.jpg',
    category: 'supplement',
    subCategory: 'vitamin',
    description: 'วิตามินซีเสริมภูมิคุ้มกัน',
    longDescription: 'วิตามินซี 1000 มก. ช่วยเสริมสร้างภูมิคุ้มกัน ต้านอนุมูลอิสระ และช่วยในการสร้างคอลลาเจน ซึ่งจำเป็นสำหรับสุขภาพผิว กระดูก และเนื้อเยื่อเกี่ยวพัน',
    usage: 'รับประทานวันละ 1 เม็ด หลังอาหาร',
    warning: 'ไม่ควรรับประทานเกินขนาดที่แนะนำ ผู้ที่มีโรคนิ่วในไตควรปรึกษาแพทย์ก่อนใช้',
    inStock: true,
    rating: 4.5,
    reviewCount: 189,
    relatedProducts: ['1', '3']
  },
  {
    id: '6',
    name: 'ยาแก้แพ้',
    price: 45,
    image: '/products/antihistamine.jpg',
    category: 'medicine',
    subCategory: 'allergy',
    description: 'ยาแก้แพ้ ลดอาการคัน',
    longDescription: 'ยาแก้แพ้ช่วยบรรเทาอาการแพ้ต่างๆ เช่น คัดจมูก น้ำมูกไหล จาม คันตา คันผิวหนัง ลมพิษ และอาการแพ้อื่นๆ',
    usage: 'รับประทานวันละ 1 เม็ด ทุก 12 ชั่วโมง',
    warning: 'อาจทำให้ง่วงซึม ไม่ควรขับขี่ยานพาหนะหรือทำงานกับเครื่องจักรหลังรับประทาน',
    inStock: true,
    rating: 4.2,
    reviewCount: 156,
    relatedProducts: ['1', '2']
  },
];

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  
  // In a real app, you would fetch the product data from an API
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0]
  
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }
  
  const addToCart = () => {
    toast.success(`เพิ่ม ${product.name} จำนวน ${quantity} ชิ้นลงตะกร้าแล้ว`)
  }
  
  const addToWishlist = () => {
    toast.success(`เพิ่ม ${product.name} ลงรายการโปรดแล้ว`)
  }

  // Find related products
  const relatedProducts = product.relatedProducts
    ? product.relatedProducts
        .map(id => mockProducts.find(p => p.id === id))
        .filter((p): p is typeof mockProducts[0] => p !== undefined)
    : []
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                หน้าหลัก
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href={`/category?type=${product.category}`} className="text-gray-600 hover:text-green-600">
                  {product.category === 'medicine' ? 'ยาสามัญประจำบ้าน' : 
                   product.category === 'supplement' ? 'วิตามินและอาหารเสริม' : 
                   product.category === 'medical-supply' ? 'เวชภัณฑ์' : 
                   product.category === 'medical-equipment' ? 'อุปกรณ์การแพทย์' : 
                   product.category === 'cosmetic' ? 'เวชสำอาง' : product.category}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Back button (mobile only) */}
      <div className="md:hidden mb-4">
        <button onClick={() => window.history.back()} className="flex items-center text-green-600">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>ย้อนกลับ</span>
        </button>
      </div>
      
      {/* Product detail */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product image */}
          <div className="md:w-1/2 p-6">
            <div className="bg-gray-100 rounded-lg h-80 md:h-96 flex items-center justify-center">
              <span className="text-gray-500">รูปภาพสินค้า</span>
            </div>
          </div>
          
          {/* Product info */}
          <div className="md:w-1/2 p-6 md:border-l">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} />
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">{product.rating} ({product.reviewCount} รีวิว)</span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">฿{product.price.toLocaleString()}</span>
            </div>
            
            {/* Short description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Stock status */}
            <div className="mb-6">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'มีสินค้า' : 'สินค้าหมด'}
              </span>
            </div>
            
            {/* Quantity selector */}
            <div className="flex items-center mb-6">
              <span className="mr-3 text-gray-700">จำนวน:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={decreaseQuantity} 
                  disabled={quantity <= 1}
                  className={`p-2 ${quantity <= 1 ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="p-2 text-gray-600 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Add to cart and wishlist buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={addToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                }`}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                เพิ่มลงตะกร้า
              </button>
              <button
                onClick={addToWishlist}
                className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Heart className="h-5 w-5 mr-2" />
                เพิ่มในรายการโปรด
              </button>
            </div>
            
            {/* Share button */}
            <button className="flex items-center text-gray-600 hover:text-green-600">
              <Share2 className="h-5 w-5 mr-2" />
              แชร์สินค้านี้
            </button>
          </div>
        </div>
        
        {/* Product tabs */}
        <div className="border-t">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'description' 
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              รายละเอียดสินค้า
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'usage' 
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              วิธีใช้
            </button>
            <button
              onClick={() => setActiveTab('warning')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'warning' 
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              คำเตือน
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'reviews' 
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              รีวิว ({product.reviewCount})
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">รายละเอียดสินค้า</h3>
                <p className="text-gray-600">{product.longDescription}</p>
              </div>
            )}
            
            {activeTab === 'usage' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">วิธีใช้</h3>
                <p className="text-gray-600">{product.usage}</p>
              </div>
            )}
            
            {activeTab === 'warning' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">คำเตือน</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-700">{product.warning}</p>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">รีวิวจากลูกค้า</h3>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} />
                    ))}
                  </div>
                  <span className="text-xl font-bold">{product.rating}</span>
                  <span className="mx-2 text-gray-500">จาก</span>
                  <span className="text-gray-700">{product.reviewCount} รีวิว</span>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                        ส
                      </div>
                      <div>
                        <h4 className="font-medium">สมชาย</h4>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < 5 ? 'fill-current' : 'stroke-current fill-none'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">สินค้าคุณภาพดี จัดส่งรวดเร็ว ใช้แล้วได้ผลดีมาก</p>
                  </div>
                  
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                        น
                      </div>
                      <div>
                        <h4 className="font-medium">นภา</h4>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : 'stroke-current fill-none'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">ราคาคุ้มค่า บรรจุภัณฑ์ดี แนะนำให้ซื้อค่ะ</p>
                  </div>
                  
                  <div>
                    <button className="text-green-600 hover:text-green-700 font-medium">
                      ดูรีวิวทั้งหมด ({product.reviewCount})
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">สินค้าที่เกี่ยวข้อง</h2>
            <Link href="/category" className="text-green-600 hover:text-green-700 flex items-center">
              <span>ดูทั้งหมด</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                href={`/product/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">รูปภาพสินค้า</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{relatedProduct.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{relatedProduct.description}</p>
                  <p className="text-green-600 font-bold">฿{relatedProduct.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 