import { useSearchParams } from 'next/navigation'
import { PopularProducts } from '@/components/home/PopularProducts'
import { SpecialOffers } from '@/components/home/SpecialOffers'
import { CategorySidebar } from '@/components/category/CategorySidebar'
import { ProductGrid } from '@/components/category/productGrid'
import { getProducts } from '@/utils/category'
import { Suspense } from 'react'

interface PageProps {
    params: { slug: string }
    searchParams: {
      type?: string
      subtype?: string
      product?: string
    }
  }

  export default async function CategoryPage({
    searchParams
  }: PageProps) {
    const products = await getProducts(searchParams)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <CategorySidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
        <Suspense fallback={<div>กำลังโหลด...</div>}>
        <ProductGrid 
              type={searchParams?.type} 
              subtype={searchParams?.subtype}
              product={searchParams?.product}
            />
          <PopularProducts />
          <SpecialOffers />
          </Suspense>
        </div>
      </div>
    </div>
  )
}