import { products } from '@/data/products'


interface SearchParamsType {
    type?: string
    subtype?: string
    product?: string
  }

// Object สำหรับเก็บชื่อหมวดหมู่หลัก
const categoryTitles: Record<string, string> = {
    'medicine': 'ยา',
    'medical-supply': 'เวชภัณฑ์',
    'supplement': 'อาหารเสริม',
    'cosmetic': 'เวชสำอาง'
  }
  
  // Object สำหรับเก็บชื่อหมวดหมู่ย่อย
  const subtypeTitles: Record<string, string> = {
    // ยา
    'pain': 'ยาแก้ปวด',
    'cold': 'ยาแก้หวัด',
    'fever': 'ยาลดไข้',
    'allergy': 'ยาแก้แพ้',
    
    // เวชภัณฑ์
    'first-aid': 'อุปกรณ์ปฐมพยาบาล',
    'personal-care': 'อุปกรณ์ดูแลส่วนบุคคล',
    
    // อาหารเสริม
    'vitamin': 'วิตามิน',
    'mineral': 'แร่ธาตุ',
    'protein': 'โปรตีน',
    
    // เวชสำอาง
    'skin-care': 'ดูแลผิวหน้า',
    'body-care': 'ดูแลผิวกาย',
    'sun-protection': 'กันแดด'
  }
  
  // Object สำหรับเก็บชื่อสินค้า
  const productTitles: Record<string, string> = {
    // ยาแก้ปวด
    'paracetamol': 'พาราเซตามอล',
    'ibuprofen': 'ไอบูโพรเฟน',
    
    // อุปกรณ์ปฐมพยาบาล
    'bandage': 'ผ้าพันแผล',
    'gauze': 'ผ้าก๊อซ',
    
    // วิตามิน
    'vitamin-c': 'วิตามินซี',
    'vitamin-d': 'วิตามินดี'
  }

  export function getCategoryTitle(type: string, subtype?: string | null, product?: string | null): string {
    if (product) {
      return getProductTitle(product)
    }
    if (subtype) {
      return getSubtypeTitle(subtype)
    }
    return categoryTitles[type] || 'สินค้าทั้งหมด'
  }
  
  export function getSubtypeTitle(subtype: string): string {
    return subtypeTitles[subtype] || 'สินค้าทั้งหมด'
  }
  
  export function getProductTitle(product: string): string {
    return productTitles[product] || 'สินค้า'
  }
  
  // เพิ่มฟังก์ชันสำหรับเช็คว่าเป็นหมวดหมู่ที่มีอยู่จริง
  export function isValidCategory(type: string): boolean {
    return type in categoryTitles
  }
  
  // เพิ่มฟังก์ชันสำหรับเช็คว่าเป็นหมวดหมู่ย่อยที่มีอยู่จริง
  export function isValidSubtype(subtype: string): boolean {
    return subtype in subtypeTitles
  }
  
  // เพิ่มฟังก์ชันสำหรับเช็คว่าเป็นสินค้าที่มีอยู่จริง
  export function isValidProduct(product: string): boolean {
    return product in productTitles
  }
  
  // เพิ่มฟังก์ชันสำหรับดึงรายการหมวดหมู่ย่อยของหมวดหมู่หลัก
  export function getSubtypesByCategory(type: string): string[] {
    switch(type) {
      case 'medicine':
        return ['pain', 'cold', 'fever', 'allergy']
      case 'medical-supply':
        return ['first-aid', 'personal-care']
      case 'supplement':
        return ['vitamin', 'mineral', 'protein']
      case 'cosmetic':
        return ['skin-care', 'body-care', 'sun-protection']
      default:
        return []
    }
  }

  export async function getProducts(params: SearchParamsType) {
    const { type, subtype, product } = params
  
    // จำลองการดึงข้อมูลแบบ async
    return new Promise((resolve) => {
      // จำลอง delay เพื่อให้เห็น loading
      setTimeout(() => {
        const filteredProducts = products.filter(p => {
          if (product) return p.productId === product
          if (subtype) return p.subtype === subtype
          if (type) return p.type === type
          return true
        })
        resolve(filteredProducts)
      }, 500)
    })
  }