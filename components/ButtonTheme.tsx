"use client"
import React from 'react'
import { useTheme } from '@/context/ThemeContext'

function ButtonTheme() {
       const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${theme} dark:bg-[#09090B] bg-[#27272A] bg-gray-200  animate-flip-x fixed bottom-7 right-7  h-11 w-11 rounded-4xl`}>
        <button className='cursor-pointer w-full h-full'
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? "🔆" : "🌙"}
                    </button>
      
    </div>
  )
}
export default ButtonTheme;