import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { lineUserId, displayName, pictureUrl } = await req.json()

    // ตรวจสอบว่ามี user นี้แล้วหรือไม่
    let user = await prisma.user.findFirst({
      where: { lineId: lineUserId }
    })

    if (!user) {
      // สร้าง user ใหม่
      user = await prisma.user.create({
        data: {
          lineId: lineUserId,
          name: displayName,
          image: pictureUrl,
          // สร้าง random email สำหรับ LINE user
          email: `line_${lineUserId}@example.com`,
          password: '', // LINE user ไม่ต้องใช้รหัสผ่าน
          platform: 'LINE',
          role: 'CUSTOMER',
        }
      })
    }

    return NextResponse.json({ userId: user.id }, { status: 200 })
  } catch (error) {
    console.error('LINE register error:', error)
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาด' },
      { status: 500 }
    )
  }
}