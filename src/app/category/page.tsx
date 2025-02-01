import { useSearchParams } from 'next/navigation'
import { headers } from 'next/headers'
import { PopularProducts } from '@/components/home/PopularProducts'
import { SpecialOffers } from '@/components/home/SpecialOffers'
import { CategorySidebar } from '@/components/category/CategorySidebar'
import { ProductGrid } from '@/components/category/productGrid'
import  LineCategoryView  from '@/components/category/LineCategoryView'
import { getProducts } from '@/utils/products'
import { products } from '@/data/products'
import { Suspense } from 'react'

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}


// ใช้ async component
export default async function CategoryPage({ searchParams }: Props) {
    const headersList = headers()
    const appType = (await headersList).get('x-app-type')
    const isLiff = appType === 'line'

    const params = await Promise.resolve(searchParams);

    const type = typeof params.type === 'string' ? params.type : undefined;
    const subtype = typeof params.subtype === 'string' ? params.subtype : undefined;
    const product = typeof params.product === 'string' ? params.product : undefined;

     // ดึงข้อมูลสินค้าแบบ async
    const products = await getProducts({ type, subtype, product })

    if (isLiff) {
        return <LineCategoryView products={products} />
      }
  
    return (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 flex-shrink-0">
              <CategorySidebar />
            </div>
            <div className="flex-1">
              <Suspense fallback={<div>กำลังโหลด...</div>}>
                <ProductGrid 
                  type={type}
                  subtype={subtype}
                  product={product}
                  products={products}
                />
              </Suspense>
            </div>
          </div>
        </div>
      )
    }