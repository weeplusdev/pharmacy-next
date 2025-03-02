import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from 'next/headers'
import { LiffProvider } from '@/providers/LiffProvider'
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { ThemeProvider } from '@/providers/ThemeProvider'
import { AuthProvider } from '@/providers/AuthProvider'
import { Analytics } from '@/components/Analytics'
import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import Loading from '@/components/Loading'
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ชื่อแอปพลิเคชันของคุณ",
  description: "คำอธิบายที่มีประโยชน์สำหรับ SEO และการแชร์ลิงก์",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "ชื่อแอปพลิเคชันของคุณ",
    description: "คำอธิบายสำหรับการแชร์บนโซเชียลมีเดีย",
    images: [{ url: '/og-image.jpg' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers()
  const apptype = (await headersList).get('x-app-type') || 
                  (await headersList).get('x-forwarded-apptype') || 
                  'web'
  
  const isLiff = apptype === 'line'
  
  // ตรวจสอบว่ามี LIFF ID หรือไม่
  const liffId = process.env.NEXT_PUBLIC_LIFF_CATEGORIES
  if (isLiff && !liffId) {
    console.error("LIFF ID is not defined in environment variables")
  }

  return (
    <html lang="th">
      <head>
        {/* Script ที่จำเป็นสำหรับ Third-party services */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <AuthProvider>
            <ThemeProvider>
              {isLiff && liffId ? (
                <LiffProvider liffId={liffId}>
                  <ClientLayout>
                    <Suspense fallback={<Loading />}>
                      {children}
                    </Suspense>
                  </ClientLayout>
                </LiffProvider>
              ) : (
                <ClientLayout>
                  <Suspense fallback={<Loading />}>
                    {children}
                  </Suspense>
                </ClientLayout>
              )}
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
