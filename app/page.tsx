"use client"
import { useRouter } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'
import React from 'react'

function page() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div className={`${theme} dark:bg-[#27272A] dark:text-slate-100 flex flex-col `}>

      <section className='flex flex-col items-center justify-center h-screen min-w-screen gap-5'>
        <img className='w-3/5 md:w-1/6 md:h-1/4' src="logo.png" alt="La imagen no se pudo carcar" />


        <h1 className='text-5xl font-semibold text-center'>Compra <strong className='text-[#639C93]'>Productos</strong></h1>
        <p className='w-2/4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime doloremque cupiditate iusto ipsum rem similique incidunt fugiat dolore hic cum, debitis voluptates nulla quia accusantium, ullam qui, magni perspiciatis?e</p>
        <button className='animate-bounce bg-red-500 cursor-pointer hover:bg-red-600 p-5 rounded-2xl hover:scale-110 transition-all duration-200 my-10'
          onClick={() => router.push("/products")}>Comprar!</button>
      </section>

      <section>
        
      </section>

    </div>
  )
}

export default page
