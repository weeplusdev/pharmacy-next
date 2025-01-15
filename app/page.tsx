import { Button } from "@/components/ui/button"
import { PhoneCall, User, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://n743nxusas82zqwf.public.blob.vercel-storage.com/Frame%208-5q5oLzk19vz0CtoFmClA5JPODxiP7S.png"
            alt="Pharmacy Logo"
            width={120}
            height={40}
            className="h-10"
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="flex items-center gap-2 text-white">
            <Mail className="h-5 w-5" />
            <span className="hidden sm:inline">Contact</span>
          </Link>
          <Link href="/phone" className="flex items-center gap-2 text-white">
            <PhoneCall className="h-5 w-5" />
            <span className="hidden sm:inline">Phone</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-2 text-white">
            <User className="h-5 w-5" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-600">
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              We can get your Drug Prescriptions to You
            </h1>
          </div>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Air%20-%201-joaof0JLuoGWpdwQqblNR94eGNjsDS.png"
          alt="Pharmacy Background"
          fill
          className="absolute inset-0 object-cover opacity-20"
          priority
        />
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-semibold">Shop By Categories</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center gap-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">${product.price}</p>
                <Button className="w-full" variant="outline">
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-blue-100 p-6">
              <h3 className="mb-2 text-lg font-semibold">Infrared Thermometer</h3>
              <p className="mb-4 text-sm text-gray-600">Digital measurement</p>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Thermometer"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <div className="rounded-lg bg-orange-100 p-6">
              <h3 className="mb-2 text-lg font-semibold">Protection 25mg</h3>
              <p className="mb-4 text-sm text-gray-600">Medical protection</p>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Protection"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <div className="rounded-lg bg-green-100 p-6">
              <h3 className="mb-2 text-lg font-semibold">Medical Device</h3>
              <p className="mb-4 text-sm text-gray-600">Latest technology</p>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Medical Device"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Offers */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Medicines Of The Week! With{" "}
            <span className="text-blue-600">50% Offer</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {weeklyOffers.map((product) => (
              <div key={product.id} className="flex flex-col items-center gap-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain p-4"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-orange-400 px-2 py-1 text-xs text-white">
                    50% OFF
                  </span>
                </div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">${product.price}</p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">PharmaCare</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Working Hours</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Monday to Sunday</p>
              <p>9:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gray-200" />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

const products = [
  {
    id: 1,
    name: "Medicine 1",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Medicine 2",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Medicine 3",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Medicine 4",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

const weeklyOffers = [
  {
    id: 1,
    name: "Special Medicine 1",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Special Medicine 2",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Special Medicine 3",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Special Medicine 4",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]



