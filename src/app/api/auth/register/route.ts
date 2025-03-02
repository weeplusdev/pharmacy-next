import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    // ตรวจสอบว่ามีอีเมลนี้ในระบบแล้วหรือไม่
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'อีเมลนี้มีผู้ใช้งานแล้ว' },
        { status: 400 }
      )
    }

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await hash(password, 12)

    // สร้างผู้ใช้ใหม่
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null, // ให้เป็น null ถ้าไม่ได้ระบุ
        role: 'CUSTOMER', // กำหนดค่าเริ่มต้น
        platform: 'WEB', // กำหนดค่าเริ่มต้น
      }
    })

    return NextResponse.json(
      { message: 'ลงทะเบียนสำเร็จ', userId: user.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'เกิดข้อผิดพลาด' },
      { status: 500 }
    )
  }
}