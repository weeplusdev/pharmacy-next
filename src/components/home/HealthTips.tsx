import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export function HealthTips() {
  const articles = [
    {
      id: '1',
      title: 'วิธีดูแลสุขภาพในช่วงหน้าฝน',
      excerpt: 'หน้าฝนมาถึงแล้ว มาเรียนรู้วิธีดูแลสุขภาพให้แข็งแรง ป้องกันโรคที่มักระบาดในช่วงหน้าฝน เช่น ไข้หวัด ไข้เลือดออก และโรคผิวหนัง',
      author: 'ภญ. สมหญิง รักสุขภาพ',
      date: '15 มิถุนายน 2023',
      image: '/blog/rainy-season.jpg',
      slug: 'health-care-rainy-season'
    },
    {
      id: '2',
      title: 'อาหารเสริมที่จำเป็นสำหรับผู้สูงอายุ',
      excerpt: 'ผู้สูงอายุควรได้รับสารอาหารที่เพียงพอเพื่อสุขภาพที่ดี มาดูกันว่าอาหารเสริมชนิดใดที่จำเป็นและมีประโยชน์สำหรับผู้สูงอายุ',
      author: 'ดร. ประเสริฐ วิทยาการ',
      date: '2 มิถุนายน 2023',
      image: '/blog/elderly-supplements.jpg',
      slug: 'essential-supplements-elderly'
    },
    {
      id: '3',
      title: 'วิธีเลือกยาสามัญประจำบ้านให้เหมาะสม',
      excerpt: 'ยาสามัญประจำบ้านที่ควรมีติดบ้านไว้ และวิธีเลือกยาให้เหมาะสมกับอาการและความต้องการของแต่ละครอบครัว',
      author: 'ภก. สมชาย ใจดี',
      date: '20 พฤษภาคม 2023',
      image: '/blog/home-medicines.jpg',
      slug: 'choosing-home-medicines'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">สาระน่ารู้เพื่อสุขภาพ</h2>
          <Link href="/blog" className="text-green-600 hover:text-green-700 flex items-center">
            <span>ดูบทความทั้งหมด</span>
            <ArrowRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">รูปภาพบทความ</span>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <Link href={`/blog/${article.slug}`} className="block">
                  <h3 className="font-semibold text-lg mb-2 hover:text-green-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                </Link>
                
                <Link 
                  href={`/blog/${article.slug}`} 
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center text-sm"
                >
                  อ่านเพิ่มเติม <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}