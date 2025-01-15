import React from 'react';
import { Card } from '@/components/ui/card';

const PharmacyLanding = () => {
  const products = [
    { id: 1, name: 'Vitamin Complex', price: 29.99, image: '/api/placeholder/150/150' },
    { id: 2, name: 'First Aid Kit', price: 45.99, image: '/api/placeholder/150/150' },
    { id: 3, name: 'Pain Relief', price: 19.99, image: '/api/placeholder/150/150' },
    { id: 4, name: 'Cold Medicine', price: 24.99, image: '/api/placeholder/150/150' }
  ];

  const categories = [
    { id: 1, name: 'Vitamins', image: '/api/placeholder/80/80' },
    { id: 2, name: 'First Aid', image: '/api/placeholder/80/80' },
    { id: 3, name: 'Pain Relief', image: '/api/placeholder/80/80' },
    { id: 4, name: 'Cold & Flu', image: '/api/placeholder/80/80' },
    { id: 5, name: 'Supplements', image: '/api/placeholder/80/80' }
  ];

  const featuredItems = [
    { id: 1, title: 'Infrared Thermometer', color: 'bg-blue-500', image: '/api/placeholder/200/200' },
    { id: 2, title: 'Protection Masks', color: 'bg-orange-400', image: '/api/placeholder/200/200' },
    { id: 3, title: 'Pulse Oximeter', color: 'bg-green-500', image: '/api/placeholder/200/200' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold">+Pharmacy</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-200">Home</a>
              <a href="#" className="hover:text-blue-200">Products</a>
              <a href="#" className="hover:text-blue-200">Prescriptions</a>
              <a href="#" className="hover:text-blue-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">We can get your Drug Prescriptions to You</h1>
            <p className="text-xl mb-8">Fast, reliable, and convenient pharmacy services</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Shop By Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 mx-auto mb-2 rounded-full"
                />
                <p className="text-sm font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-blue-600 font-bold mb-4">${product.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className={`${item.color} rounded-lg p-6 text-white`}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Offers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">
            Medicines Of The Week! With <span className="text-blue-600">50% Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-blue-600 font-bold mb-4">${product.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PharmacyLanding;

