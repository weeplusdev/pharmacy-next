export function PopularProducts() {
    const products = [
      {
        id: 1,
        name: 'Vitamin C 1000mg',
        image: '/images/vitamin-c.png',
        isHot: true,
        isNew: false,
        price: 100,
        originalPrice: 150,
      },
      {
        id: 2,
        name: 'Paracetamol 500mg',
        image: '/images/paracetamol.png',
        isHot: false,
        isNew: true,
        price: 50,
        originalPrice: 70,
      },
      {
        id: 3,
        name: 'First Aid Kit',
        image: '/images/first-aid-kit.png',
        isHot: false,
        isNew: false,
        price: 100,
        originalPrice: 150,
      },
      {
        id: 4,
        name: 'Blood Pressure Monitor',
        image: '/images/bp-monitor.png',
        isHot: true,
        isNew: false,
        price: 100,
        originalPrice: 150,
      },
    ]
  
    return (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">สินค้าขายดี</h2>
              <a href="/products" className="text-emerald-500 hover:text-emerald-600">
                ดูทั้งหมด →
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="relative">
                    {product.isHot && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                        ขายดี
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-square object-contain mb-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-emerald-600">
                        ฿{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ฿{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="w-full py-2 text-emerald-500 border border-emerald-500 rounded-lg hover:bg-emerald-50">
                      เพิ่มลงตะกร้า
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }