export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    type: string         // medicine, medical-supply, supplement, cosmetic
    subtype?: string     // pain, cold, first-aid, etc.
    productId?: string   // specific product identifier
    description?: string
    inStock: boolean
  }