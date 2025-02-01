export function SpecialOffers() {
    const offers = [
      {
        id: 1,
        title: 'ลด 20% สำหรับวิตามินทั้งหมด',
        description: 'เฉพาะวันที่ 1-15 กุมภาพันธ์ 2567',
        image: '/images/vitamin-sale.jpg',
        bgColor: 'bg-blue-50',
      },
      {
        id: 2,
        title: 'ซื้อ 1 แถม 1',
        description: 'เฉพาะยาสามัญประจำบ้าน',
        image: '/images/buy1get1.jpg',
        bgColor: 'bg-emerald-50',
      }
    ]
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">โปรโมชั่นพิเศษ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map(offer => (
              <div 
                key={offer.id} 
                className={`${offer.bgColor} rounded-xl overflow-hidden`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
                      รับสิทธิ์เลย
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }