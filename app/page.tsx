import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-600 text-white p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Pharmacy</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Access our online pharmacy services through LINE or web browser.
      </p>
      <div className="space-y-4">
        <Button asChild className="w-full bg-green-500 hover:bg-green-600">
          <Link href="/liff">Open in LINE</Link>
        </Button>
        <Button asChild className="w-full bg-white text-blue-600 hover:bg-gray-100">
          <Link href="/web">Continue to Web App</Link>
        </Button>
      </div>
    </div>
  )
}

