"use client"
import { useRouter } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'
import SwiperComponent from '@/components/SwiperComponent'
import React from 'react'
import CardSection from '@/components/CardSection'
import Hero from '@/components/Hero'

function page() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div className={`${theme} dark:bg-[#27272A] dark:text-slate-100 flex flex-col w-screen`}>

      <Hero/>
      <CardSection />

      <section className='h-20'>

      </section>


    </div>
  )
}

export default page
