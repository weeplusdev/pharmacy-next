export function HealthTips() {
    const articles = [
      {
        id: 1,
        title: 'วิธีดูแลสุขภาพในหน้าหนาว',
        excerpt: 'คำแนะนำในการดูแลสุขภาพช่วงอากาศเย็น...',
        image: '/images/winter-health.jpg',
        author: 'ภญ. สมศรี',
        date: '1 ก.พ. 2567',
      },
      // ... more articles
    ]
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">บทความสุขภาพน่าสนใจ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map(article => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }