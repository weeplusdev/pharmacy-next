import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className="flex-grow">
        {/* Your main content here */}
      </div>
    </main>
  )
}
