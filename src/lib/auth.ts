import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import LineProvider from 'next-auth/providers/line'
import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'

// ขยาย type ของ User ใน session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
      platform?: string | null;
    }
  }
}

// ขยาย type ของ JWT
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
    platform?: string;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('กรุณากรอกอีเมลและรหัสผ่าน')
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user || !user.password) {
          throw new Error('ไม่พบบัญชีผู้ใช้')
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error('รหัสผ่านไม่ถูกต้อง')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image,
          platform: user.platform
        }
      }
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID as string,
      clientSecret: process.env.LINE_CLIENT_SECRET as string,
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.platform = token.platform
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.platform = user.platform
      }
      return token
    },
    async signIn({ user, account, profile }) {
      // ถ้าเป็นการล็อกอินผ่าน LINE
      if (account?.provider === 'line' && profile) {
        try {
          const lineId = profile.sub;
          const name = profile.name || '';
          const image = (profile as any).picture || '';
          
          // ตรวจสอบว่ามี user ที่มี lineId นี้หรือไม่
          const existingUser = await prisma.user.findFirst({
            where: { 
              lineId: lineId 
            }
          });

          if (existingUser) {
            // อัพเดทข้อมูล user ถ้ามีการเปลี่ยนแปลง
            await prisma.user.update({
              where: { id: existingUser.id },
              data: {
                name: name || existingUser.name,
                image: image || existingUser.image,
              }
            });
          } else {
            // สร้าง user ใหม่
            await prisma.user.create({
              data: {
                lineId: lineId,
                name: name,
                email: `line_${lineId}@example.com`, // สร้าง email ชั่วคราว
                password: '', // ไม่ต้องใช้รหัสผ่านสำหรับ LINE login
                image: image,
                platform: 'LINE',
                role: 'CUSTOMER',
              }
            });
          }
        } catch (error) {
          console.error('LINE login error:', error);
          return false;
        }
      }
      return true;
    }
  }
}