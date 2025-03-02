'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface User {
  id: string
  name: string | null
  email: string
  image: string | null
}

export function ProfileForm({ user }: { user: User }) {
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    name: user.name || '',
  })
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'การอัปเดตโปรไฟล์ล้มเหลว')
      }

      setSuccess('อัปเดตโปรไฟล์สำเร็จ')
      router.refresh()
    } catch (error: any) {
      setError(error.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-md">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="relative h-24 w-24 rounded-full overflow-hidden">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || 'Profile'}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-blue-100 h-full w-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-500">
                {user.name?.charAt(0) || user.email.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 p-4 rounded-md">
            <p className="text-sm text-red-500">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-sm text-green-500">{success}</p>
          </div>
        )}

        {/* Email (Read-only) */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700"
          >
            อีเมล
          </label>
          <div className="mt-1">
            <input
              id="email"
              type="email"
              value={user.email}
              disabled
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700"
          >
            ชื่อ
          </label>
          <div className="mt-1">
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? 'กำลังบันทึก...' : 'บันทึกการเปลี่ยนแปลง'}
          </button>
        </div>
      </form>

      {/* เพิ่มส่วนนี้ต่อท้ายฟอร์ม */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900">ความปลอดภัย</h3>
        <div className="mt-2">
          <a 
            href="/change-password" 
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            เปลี่ยนรหัสผ่าน
          </a>
        </div>
      </div>
    </div>
  )
} 