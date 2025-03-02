'use client'

import { useState } from 'react'
import { useTheme } from '@/providers/ThemeProvider'

export function SettingsForm() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false
  })
  const [success, setSuccess] = useState<string>('')

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
  }

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleSaveSettings = () => {
    // ในสถานการณ์จริง คุณจะบันทึกการตั้งค่าไปยัง API
    // await fetch('/api/user/settings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ notifications })
    // })
    
    setSuccess('บันทึกการตั้งค่าเรียบร้อยแล้ว')
    setTimeout(() => setSuccess(''), 3000)
  }

  return (
    <div className="bg-white shadow rounded-lg divide-y">
      {success && (
        <div className="bg-green-50 p-4 rounded-t-lg">
          <p className="text-sm text-green-600">{success}</p>
        </div>
      )}
      
      {/* Theme Settings */}
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">ธีม</h2>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleThemeChange('light')}
            className={`p-4 rounded-lg border ${
              theme === 'light' 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="h-12 bg-white border border-gray-200 rounded mb-2"></div>
            <p className="text-sm font-medium">สว่าง</p>
          </button>
          
          <button
            onClick={() => handleThemeChange('dark')}
            className={`p-4 rounded-lg border ${
              theme === 'dark' 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="h-12 bg-gray-900 border border-gray-700 rounded mb-2"></div>
            <p className="text-sm font-medium">มืด</p>
          </button>
          
          <button
            onClick={() => handleThemeChange('system')}
            className={`p-4 rounded-lg border ${
              theme === 'system' 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="h-12 bg-gradient-to-r from-white to-gray-900 border border-gray-200 rounded mb-2"></div>
            <p className="text-sm font-medium">ระบบ</p>
          </button>
        </div>
      </div>
      
      {/* Notification Settings */}
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">การแจ้งเตือน</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">อีเมล</h3>
              <p className="text-sm text-gray-500">รับการแจ้งเตือนทางอีเมล</p>
            </div>
            <button
              onClick={() => handleNotificationChange('email')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                notifications.email ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">เปิด/ปิด</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.email ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">การแจ้งเตือนแบบพุช</h3>
              <p className="text-sm text-gray-500">รับการแจ้งเตือนแบบพุชบนอุปกรณ์ของคุณ</p>
            </div>
            <button
              onClick={() => handleNotificationChange('push')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                notifications.push ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">เปิด/ปิด</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.push ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">SMS</h3>
              <p className="text-sm text-gray-500">รับการแจ้งเตือนทาง SMS</p>
            </div>
            <button
              onClick={() => handleNotificationChange('sms')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                notifications.sms ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">เปิด/ปิด</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.sms ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Save Button */}
      <div className="p-6">
        <button
          onClick={handleSaveSettings}
          className="w-full sm:w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          บันทึกการตั้งค่า
        </button>
      </div>
    </div>
  )
} 