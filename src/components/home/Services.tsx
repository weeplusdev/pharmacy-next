import { Truck, Clock, CreditCard, Phone } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-green-500" />,
      title: 'จัดส่งรวดเร็ว',
      description: 'จัดส่งถึงบ้านภายใน 24 ชั่วโมงในเขตกรุงเทพฯและปริมณฑล'
    },
    {
      icon: <Clock className="h-10 w-10 text-green-500" />,
      title: 'บริการ 24 ชั่วโมง',
      description: 'สั่งซื้อสินค้าได้ตลอด 24 ชั่วโมง ทุกวันไม่มีวันหยุด'
    },
    {
      icon: <CreditCard className="h-10 w-10 text-green-500" />,
      title: 'ชำระเงินหลากหลายช่องทาง',
      description: 'รองรับการชำระเงินทั้งบัตรเครดิต โอนเงิน และเก็บเงินปลายทาง'
    },
    {
      icon: <Phone className="h-10 w-10 text-green-500" />,
      title: 'ปรึกษาเภสัชกร',
      description: 'บริการให้คำปรึกษาโดยเภสัชกรผู้เชี่ยวชาญตลอดเวลาทำการ'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">บริการของเรา</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          เราให้บริการที่ครบวงจรเพื่อความสะดวกสบายและความพึงพอใจสูงสุดของลูกค้า
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}