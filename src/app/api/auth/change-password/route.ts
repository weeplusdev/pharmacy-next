import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { hash, compare } from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: 'ไม่ได้เข้าสู่ระบบ' },
        { status: 401 }
      )
    }

    const { currentPassword, newPassword } = await req.json()

    // ตรวจสอบว่ามีข้อมูลครบถ้วนหรือไม่
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { message: 'กรุณากรอกข้อมูลให้ครบถ้วน' },
        { status: 400 }
      )
    }

    // ดึงข้อมูลผู้ใช้
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { message: 'ไม่พบผู้ใช้' },
        { status: 404 }
      )
    }

    // ตรวจสอบรหัสผ่านปัจจุบัน
    const isPasswordValid = await compare(currentPassword, user.password)

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'รหัสผ่านปัจจุบันไม่ถูกต้อง' },
        { status: 400 }
      )
    }

    // เข้ารหัสรหัสผ่านใหม่
    const hashedPassword = await hash(newPassword, 12)

    // อัปเดตรหัสผ่าน
    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashedPassword }
    })

    return NextResponse.json(
      { message: 'เปลี่ยนรหัสผ่านสำเร็จ' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาด' },
      { status: 500 }
    )
  }
} 