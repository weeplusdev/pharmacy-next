import { Product } from '@/types/product'
export const products: Product[] = [
    {
      id: '1',
      name: 'พาราเซตามอล 500mg (100 เม็ด)',
      price: 200,
      originalPrice: 250,
      image: '/images/paracetamol.jpg',
      type: 'medicine',
      subtype: 'pain',
      productId: 'paracetamol',
      description: 'ยาแก้ปวด ลดไข้',
      inStock: true
    },
    {
      id: '2',
      name: 'ไอบูโพรเฟน 400mg (30 เม็ด)',
      price: 180,
      image: '/images/ibuprofen.jpg',
      type: 'medicine',
      subtype: 'pain',
      productId: 'ibuprofen',
      description: 'ยาแก้ปวด ต้านการอักเสบ',
      inStock: true
    },
    {
      id: '3',
      name: 'ผ้าก๊อซปลอดเชื้อ 3x3 นิ้ว (10 ชิ้น)',
      price: 60,
      image: '/images/gauze.jpg',
      type: 'medical-supply',
      subtype: 'first-aid',
      productId: 'gauze',
      description: 'ใช้ทำแผล',
      inStock: true
    },
    // ... เพิ่มสินค้าอื่นๆ
  ]