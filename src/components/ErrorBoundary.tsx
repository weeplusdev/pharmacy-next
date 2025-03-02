'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    // อัปเดตสถานะเพื่อให้แสดงหน้า fallback UI ในการเรนเดอร์ถัดไป
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // คุณสามารถบันทึกข้อผิดพลาดไปยังบริการรายงานข้อผิดพลาดได้ที่นี่
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
    
    // ตัวอย่างการส่งข้อผิดพลาดไปยังบริการรายงานข้อผิดพลาด
    // reportError(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // คุณสามารถเรนเดอร์ UI สำรองได้ตามต้องการ
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">เกิดข้อผิดพลาดขึ้น</h2>
          <p className="mb-4">ขออภัย เกิดข้อผิดพลาดที่ไม่คาดคิดขึ้น</p>
          <p className="text-sm text-gray-600 mb-6">
            {this.state.error?.message || 'ไม่พบรายละเอียดข้อผิดพลาด'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            โหลดหน้าใหม่
          </button>
        </div>
      )
    }

    return this.props.children
  }
} 