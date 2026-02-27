import React from 'react'
import { useTheme } from  '@/context/ThemeContext'

type Props = {
    onFilterChange : (x:string) => void;
}
function ProductFilter( {onFilterChange}:Props) {
  const { theme } = useTheme();
  return (
    <div className={`${theme} dark:bg-[#161617] dark:text-slate-100`}>
        <select name="filter" 
        onChange={(e)=>onFilterChange(e.target.value)}
        >
            <option className={`${theme} dark:text-black`} value="">Todos</option>
            <option className={`${theme} dark:text-black`} value="jewelery">Joyería</option>
            <option className={`${theme} dark:text-black`} value="electronics">Electrónica</option>
            <option className={`${theme} dark:text-black`} value="men's clothing">Ropa Hombre</option>
            <option className={`${theme} dark:text-black`} value="women's clothing">Ropa Mujer </option>
        </select>
      
    </div>
  )
}

export default ProductFilter
