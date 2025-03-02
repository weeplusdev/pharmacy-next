'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: '1',
      name: 'คุณสมชาย วงศ์สุข',
      role: 'ลูกค้าประจำ',
      content: 'บริการดีมาก สั่งยาเมื่อเช้า บ่ายก็ได้รับแล้ว เภสัชกรให้คำแนะนำดี ใส่ใจลูกค้า จะกลับมาใช้บริการอีกแน่นอน',
      rating: 5,
      image: '/testimonials/user1.jpg'
    },
    {
      id: '2',
      name: 'คุณนภา รักสุขภาพ',
      role: 'ลูกค้าใหม่',
      content: 'ประทับใจกับความหลากหลายของสินค้า ราคาไม่แพง และมีโปรโมชั่นดีๆ ตลอด การจัดส่งรวดเร็ว สินค้าคุณภาพดี',
      rating: 4,
      image: '/testimonials/user2.jpg'
    },
    {
      id: '3',
      name: 'คุณประเสริฐ มั่นคง',
      role: 'ผู้สูงอายุ',
      content: 'เป็นร้านขายยาที่น่าเชื่อถือ สั่งยาประจำได้สะดวก ไม่ต้องเดินทางไปที่ร้าน เภสัชกรให้คำแนะนำดีมาก ทำให้ใช้ยาได้อย่างถูกต้อง',
      rating: 5,
      image: '/testimonials/user3.jpg'
    },
    {
      id: '4',
      name: 'คุณวิภา สุขใจ',
      role: 'แม่บ้าน',
      content: 'สั่งยาและอาหารเสริมให้ทั้งครอบครัวเป็นประจำ ประทับใจในคุณภาพสินค้าและบริการ ราคาเหมาะสม จัดส่งรวดเร็ว',
      rating: 5,
      image: '/testimonials/user4.jpg'
    },
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">เสียงจากลูกค้า</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          ความประทับใจจากลูกค้าที่ใช้บริการของเรา
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
          
          {/* Testimonial card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              {/* Avatar */}
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xl">{testimonials[currentIndex].name.charAt(0)}</span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                {/* Rating */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'fill-current' : 'stroke-current fill-none'}`} 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Author */}
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}