import { LoginForm } from '@/components/auth/LoginForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'


export default async function LoginPage() {
  const session = await getServerSession(authOptions)
  
  if (session) {
    redirect('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <LoginForm />
    </div>
  )
}