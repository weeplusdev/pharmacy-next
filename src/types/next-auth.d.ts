import { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  /**
   * ขยาย type ของ User ใน session
   */
  interface Session {
    user: {
      id: string
      role: string
      platform?: string
    } & DefaultSession["user"]
  }

  /**
   * ขยาย type ของ User
   */
  interface User extends DefaultUser {
    id: string
    role: string
    platform?: string
    lineId?: string | null
  }
}

declare module "next-auth/jwt" {
  /**
   * ขยาย type ของ JWT
   */
  interface JWT {
    id: string
    role: string
    platform?: string
  }
} 