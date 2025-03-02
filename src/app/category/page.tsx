'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CategorySidebar } from '@/components/category/CategorySidebar'
import { Search, Filter, X, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'พาราเซตามอล 500 มก.',
    price: 35,
    image: '/products/paracetamol.jpg',
    category: 'medicine',
    subCategory: 'pain',
    description: 'ยาแก้ปวด ลดไข้',
    inStock: true
  },
  {
    id: '2',
    name: 'วิตามินซี 1000 มก.',
    price: 250,
    image: '/products/vitamin-c.jpg',
    category: 'supplement',
    subCategory: 'vitamin',
    description: 'วิตามินซีเสริมภูมิคุ้มกัน',
    inStock: true
  },
  {
    id: '3',
    name: 'ชุดปฐมพยาบาลเบื้องต้น',
    price: 450,
    image: '/products/first-aid.jpg',
    category: 'medical-supply',
    subCategory: 'first-aid',
    description: 'ชุดปฐมพยาบาลสำหรับใช้ในบ้าน',
    inStock: true
  },
  {
    id: '4',
    name: 'เครื่องวัดความดันโลหิต',
    price: 1200,
    image: '/products/blood-pressure.jpg',
    category: 'medical-equipment',
    subCategory: 'monitor',
    description: 'เครื่องวัดความดันโลหิตอัตโนมัติ',
    inStock: false
  },
  {
    id: '5',
    name: 'ครีมบำรุงผิวหน้า',
    price: 590,
    image: '/products/face-cream.jpg',
    category: 'cosmetic',
    subCategory: 'face',
    description: 'ครีมบำรุงผิวหน้าสำหรับผิวแห้ง',
    inStock: true
  },
  {
    id: '6',
    name: 'ยาแก้แพ้',
    price: 45,
    image: '/products/antihistamine.jpg',
    category: 'medicine',
    subCategory: 'allergy',
    description: 'ยาแก้แพ้ ลดอาการคัน',
    inStock: true
  },
  // Add more mock products as needed
];

export default function CategoryPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')
  const subtypeParam = searchParams.get('subtype')
  
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 })
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState('recommended')
  
  useEffect(() => {
    let filtered = [...mockProducts]
    
    // Filter by category type
    if (typeParam) {
      filtered = filtered.filter(product => product.category === typeParam)
    }
    
    // Filter by subcategory
    if (subtypeParam) {
      filtered = filtered.filter(product => product.subCategory === subtypeParam)
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    )
    
    // Filter by stock
    if (inStockOnly) {
      filtered = filtered.filter(product => product.inStock)
    }
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      // Default is 'recommended', no sorting needed
    }
    
    setFilteredProducts(filtered)
  }, [typeParam, subtypeParam, searchQuery, priceRange, inStockOnly, sortBy])
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is already handled by the useEffect
  }

  const addToCart = (productId: string) => {
    // In a real app, this would add the product to the cart
    toast.success('เพิ่มสินค้าลงตะกร้าแล้ว')
  }
  
  const getCategoryTitle = () => {
    if (!typeParam) return 'สินค้าทั้งหมด'
    
    switch (typeParam) {
      case 'medicine':
        return 'ยาสามัญประจำบ้าน'
      case 'medical-supply':
        return 'เวชภัณฑ์'
      case 'medical-equipment':
        return 'อุปกรณ์การแพทย์'
      case 'supplement':
        return 'วิตามินและอาหารเสริม'
      case 'cosmetic':
        return 'เวชสำอาง'
      default:
        return typeParam.charAt(0).toUpperCase() + typeParam.slice(1)
    }
      }
  
    return (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile filter button */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            {getCategoryTitle()}
          </h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md"
          >
            {showFilters ? <X className="h-4 w-4 mr-2" /> : <Filter className="h-4 w-4 mr-2" />}
            {showFilters ? 'ปิดตัวกรอง' : 'ตัวกรอง'}
          </button>
        </div>
        
        {/* Sidebar - Category filters */}
        <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">หมวดหมู่สินค้า</h2>
              <CategorySidebar />
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">ตัวกรอง</h2>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">ช่วงราคา</h3>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    min="0" 
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value) || 0})}
                    className="w-full p-2 border rounded-md"
                    placeholder="ต่ำสุด"
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    min="0" 
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value) || 0})}
                    className="w-full p-2 border rounded-md"
                    placeholder="สูงสุด"
                  />
                </div>
              </div>
              
              {/* In Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={inStockOnly}
                    onChange={() => setInStockOnly(!inStockOnly)}
                    className="rounded text-green-500 focus:ring-green-500"
                  />
                  <span>มีสินค้าในสต็อกเท่านั้น</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content - Product list */}
        <div className="md:w-3/4">
          {/* Desktop title */}
          <div className="hidden md:block mb-6">
            <h1 className="text-2xl font-bold">
              {getCategoryTitle()}
            </h1>
            </div>
          
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <form onSubmit={handleSearch} className="relative flex-grow">
              <input
                type="text"
                placeholder="ค้นหาสินค้า..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </form>
            
            <div className="sm:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="recommended">แนะนำ</option>
                <option value="price-low">ราคาต่ำ-สูง</option>
                <option value="price-high">ราคาสูง-ต่ำ</option>
                <option value="name">ตามชื่อ</option>
              </select>
            </div>
          </div>
          
          {/* Product count */}
          <div className="mb-6">
            <p className="text-gray-600">พบสินค้า {filteredProducts.length} รายการ</p>
          </div>
          
          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/product/${product.id}`} className="block">
                    <div className="h-48 relative bg-gray-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500">รูปภาพสินค้า</span>
                      </div>
                      {!product.inStock && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          สินค้าหมด
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/product/${product.id}`} className="block">
                      <h3 className="font-semibold text-lg mb-1 hover:text-green-600 transition-colors">{product.name}</h3>
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
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600 mb-4">ไม่พบสินค้าที่ตรงกับเงื่อนไขการค้นหา</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setPriceRange({ min: 0, max: 2000 })
                  setInStockOnly(false)
                }}
                className="text-green-500 hover:text-green-600 font-medium"
              >
                ล้างตัวกรองทั้งหมด
              </button>
            </div>
          )}
            </div>
          </div>
        </div>
      )
    }