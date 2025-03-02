import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { ChangePasswordForm } from '@/components/auth/ChangePasswordForm'

export default async function ChangePasswordPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/login?callbackUrl=/change-password')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">เปลี่ยนรหัสผ่าน</h1>
      <ChangePasswordForm />
    </div>
  )
} 