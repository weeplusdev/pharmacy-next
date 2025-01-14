import Link from 'next/link'

export default function WebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <nav className="flex justify-between items-center">
          <Link href="/web" className="text-2xl font-bold">Our Pharmacy</Link>
          <div className="space-x-4">
            <Link href="/web/products" className="hover:underline">Products</Link>
            <Link href="/web/cart" className="hover:underline">Cart</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2023 Our Pharmacy. All rights reserved.</p>
      </footer>
    </div>
  )
}

