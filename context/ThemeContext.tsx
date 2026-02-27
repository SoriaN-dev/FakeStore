"use client";
import React, { createContext,useContext, useEffect, useState } from "react";

type Theme = "light" | "dark"

type ThemeContextType ={
    theme: Theme;
    toggleTheme:()=>void;
}

const ThemeContext = createContext<ThemeContextType|null>(null);

type Props ={
    children: React.ReactNode
}

export function ThemeProvider({children}:Props) {

    const [theme,setTheme] = useState<Theme>("light");

    const toggleTheme =()=>{
        setTheme(
            theme==="light"? "dark" : "light"
        )
    }
    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme")
         if (storedTheme){
            setTheme(JSON.parse(storedTheme))
         }
    },[])

    useEffect(() =>{
        localStorage.setItem("theme",JSON.stringify(theme))
    },[theme])

    
  return (
    <div>
        <ThemeContext.Provider value={{ theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
      
    </div>
  )
}



export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context){
        throw new Error("useTheme must be used within aThemeProvider ")
    }
    return context;
}