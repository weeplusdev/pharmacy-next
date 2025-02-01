import { TruckIcon, MessageSquare } from "lucide-react"

export function Services() {
    const services = [
      {
        id: 1,
        title: 'จัดส่งฟรี',
        description: 'สำหรับคำสั่งซื้อ 500 บาทขึ้นไป',
        icon: TruckIcon,
      },
      {
        id: 2,
        title: 'คำปรึกษาฟรี',
        description: 'จากเภสัชกรผู้เชี่ยวชาญ',
        icon: MessageSquare,
      },
      // ... more services
    ]
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.id} className="text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }