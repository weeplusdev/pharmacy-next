import { LiffProvider } from '@/providers/liffProvider'
import { BottomNav } from '@/components/bottom-nav'

export default function LiffLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LiffProvider>
      <main className="min-h-screen max-w-md mx-auto bg-white flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <BottomNav />
      </main>
    </LiffProvider>
  )
}

