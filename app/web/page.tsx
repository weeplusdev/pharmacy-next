import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function WebHomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Online Pharmacy</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Browse our wide selection of medicines, health products, and medical supplies.
      </p>
      <Button asChild size="lg">
        <Link href="/web/products">Shop Now</Link>
      </Button>
    </div>
  )
}

