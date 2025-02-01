import { products } from '@/data/products';
import { Product } from '@/types/product'

interface FilterParams {
  type?: string;
  subtype?: string;
  product?: string;
  products?: Product[];
}

export async function getProducts(params: FilterParams): Promise<Product[]> {
  // จำลอง delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return products.filter(p => {
    if (params.product) return p.productId === params.product;
    if (params.subtype) return p.subtype === params.subtype;
    if (params.type) return p.type === params.type;
    return true;
  });
}