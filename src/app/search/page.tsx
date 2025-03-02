'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import Link from 'next/link'

// Reuse the mock products from the category page
import { mockProducts } from '@/data/mockProducts'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with a timeout
    setIsLoading(true)
    const timer = setTimeout(() => {
      if (query) {
        const results = mockProducts.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        )
        setSearchResults(results)
      } else {
        setSearchResults([])
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">ผลการค้นหา: {query}</h1>
      
      {/* Search bar */}
      <div className="mb-8">
        <form className="relative max-w-xl">
          <input
            type="text"
            defaultValue={query}
            placeholder="ค้นหาสินค้า..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-green-500 text-white p-1.5 rounded-md hover:bg-green-600 transition-colors"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : searchResults.length > 0 ? (
        <div>
          <p className="text-gray-600 mb-6">พบ {searchResults.length} รายการ</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <Link 
                key={product.id} 
                href={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500">รูปภาพสินค้า</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-green-600 font-bold">฿{product.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-4">ไม่พบสินค้าที่ตรงกับคำค้นหา "{query}"</p>
          <Link href="/" className="text-green-500 hover:text-green-600 font-medium">
            กลับไปยังหน้าหลัก
          </Link>
        </div>
      )}
      
      {/* Related categories */}
      {searchResults.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">หมวดหมู่ที่เกี่ยวข้อง</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/category?type=medicine" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors">
              ยาสามัญประจำบ้าน
            </Link>
            <Link href="/category?type=supplement" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors">
              วิตามินและอาหารเสริม
            </Link>
            <Link href="/category?type=medical-supply" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors">
              เวชภัณฑ์
            </Link>
            <Link href="/category?type=medical-equipment" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors">
              อุปกรณ์การแพทย์
            </Link>
            <Link href="/category?type=cosmetic" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors">
              เวชสำอาง
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 