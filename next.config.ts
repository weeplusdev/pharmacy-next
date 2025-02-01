import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'n743nxusas82zqwf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**', // อนุญาตให้เข้าถึงทุก path
      },
    ],
  },
}

export default nextConfig
