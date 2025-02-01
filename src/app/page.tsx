import Image from "next/image";

import { HeaderTop } from '@/components/layout/HeaderTop'
import { Navigation } from '@/components/layout/Navigation/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { Categories } from '@/components/home/Categories'
import { PopularProducts } from '@/components/home/PopularProducts'
import { SpecialOffers } from '@/components/home/SpecialOffers'
import { HealthTips } from '@/components/home/HealthTips'
import { Testimonials } from '@/components/home/Testimonials'
import { Services } from '@/components/home/Services'
import { DoctorSignup } from '@/components/home/DoctorSignup'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <main>
        <HeroSection />
        <Categories />
        <PopularProducts />
        <SpecialOffers />
        <HealthTips />
        <Testimonials />
        <Services />
        <DoctorSignup />
      </main>
    
    </div>
  )
}