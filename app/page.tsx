"use client"
import { useRouter } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'
import SwiperComponent from '@/components/SwiperComponent'
import React, { use } from 'react'
import CardSection from '@/components/CardSection'
import Hero from '@/components/Hero'
import { useInView } from 'framer-motion'

function page() {
  const router = useRouter();
  const { theme } = useTheme();


  return (
    <main className="bg-[#111011] flex flex-col w-screen">

      <Hero/>
      <CardSection />

      <section className='h-20  '>

      </section>


    </main>
  )
}

export default page
