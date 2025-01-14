import { Bell, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header({ showSearch = true }: { showSearch?: boolean }) {
  return (
    <header className="bg-blue-500 p-4 sticky top-0">
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/placeholder.svg?height=40&width=40" 
            alt="Pharmacy Logo"
            width={40}
            height={40}
            className="text-white"
          />
        </Link>
        <div className="flex gap-4">
          <Link href="/profile">
            <User className="text-white w-6 h-6" />
          </Link>
          <Link href="/notifications">
            <Bell className="text-white w-6 h-6" />
          </Link>
        </div>
      </div>
      {showSearch && (
        <div className="relative">
          <input
            type="search"
            placeholder="ค้นหายา..."
            className="w-full p-2 pl-4 pr-10 rounded-full bg-white"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            🔍
          </button>
        </div>
      )}
    </header>
  )
}

