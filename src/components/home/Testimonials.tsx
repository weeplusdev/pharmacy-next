export function Testimonials() {
    const testimonials = [
      {
        id: 1,
        content: 'บริการดีมาก จัดส่งรวดเร็ว สินค้าคุณภาพ',
        author: 'คุณสมชาย',
        role: 'ลูกค้าประจำ',
        image: '/images/testimonial-1.jpg',
      },
      // ... more testimonials
    ]
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">เสียงจากลูกค้า</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }