'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from "sonner"
import Image from 'next/image'

export function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false
      })

      if (result?.error) {
        toast.error(result.error)
      } else {
        toast.success('เข้าสู่ระบบสำเร็จ')
        router.push(callbackUrl)
        router.refresh()
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLineLogin = () => {
    signIn('line', { callbackUrl })
  }

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          เข้าสู่ระบบ
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          หรือ{' '}
          <a 
            href="/register" 
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            ลงทะเบียนใช้งาน
          </a>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
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
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label 
            htmlFor="password" 
            className="block text-sm font-medium text-gray-700"
          >
            รหัสผ่าน
          </label>
          <div className="mt-1">
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex items-center justify-end">
          <a 
            href="/forgot-password" 
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            ลืมรหัสผ่าน?
          </a>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">หรือเข้าสู่ระบบด้วย</span>
          </div>
        </div>
      </div>

      {/* Social Login */}
      <div className="mt-6">
        <button
          onClick={handleLineLogin}
          className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <div className="mr-2 h-5 w-5 relative">
            <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path fill="#00B900" d="M32,16.08c0-8.42-8.45-15.27-18.83-15.27S-5.66,7.66-5.66,16.08c0,7.54,6.69,13.85,15.73,15.05,0.61,0.13,1.44,0.4,1.65,0.93c0.19,0.47,0.12,1.22,0.06,1.7c0,0-0.22,1.33-0.27,1.62c-0.08,0.47-0.37,1.85,1.62,1.01s10.76-6.34,14.67-10.86l0,0C30.52,22.1,32,19.25,32,16.08z M13.08,19.92c0,0.34-0.28,0.62-0.62,0.62h-1.87c-0.34,0-0.62-0.28-0.62-0.62v-3.37h-3.37c-0.34,0-0.62-0.28-0.62-0.62v-1.87c0-0.34,0.28-0.62,0.62-0.62h3.37V10.8c0-0.34,0.28-0.62,0.62-0.62h1.87c0.34,0,0.62,0.28,0.62,0.62v3.37h3.37c0.34,0,0.62,0.28,0.62,0.62v1.87c0,0.34-0.28,0.62-0.62,0.62h-3.37V19.92z M25.94,19.92c0,0.34-0.28,0.62-0.62,0.62h-4.12c-0.34,0-0.62-0.28-0.62-0.62v-0.62c0-0.34,0.28-0.62,0.62-0.62h4.12c0.34,0,0.62,0.28,0.62,0.62V19.92z M25.94,16.55c0,0.34-0.28,0.62-0.62,0.62h-4.12c-0.34,0-0.62-0.28-0.62-0.62v-0.62c0-0.34,0.28-0.62,0.62-0.62h4.12c0.34,0,0.62,0.28,0.62,0.62V16.55z M25.94,13.18c0,0.34-0.28,0.62-0.62,0.62h-4.12c-0.34,0-0.62-0.28-0.62-0.62v-0.62c0-0.34,0.28-0.62,0.62-0.62h4.12c0.34,0,0.62,0.28,0.62,0.62V13.18z"/>
            </svg>
          </div>
          เข้าสู่ระบบด้วย LINE
        </button>
      </div>
    </div>
  )
}