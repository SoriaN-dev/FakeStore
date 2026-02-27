import React from 'react'
import type { Product } from "@/model/Product";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTheme } from  '@/context/ThemeContext'


type Props = {
  product: Product;
}
function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const { id, title, price, image, category } = product

  return (
    <div
      className={`${theme} dark:bg-[#161617] dark:text-slate-100 shadow-xl/30 rounded-3xl flex flex-col gap-2 p-3 relative`}>
      <Link href={`/products/${id}`} className='cursor-pointer hover:scale-105 transition duration-200'>
        <img
          className='w-full h-60 object-contain'
          src={image}
          alt="No se pudo cargar la imagen" />
      </Link>
      <h1 className='font-semibold'>{title}</h1>
      <p> Precio : {price}$</p>
      <p>Categoria : {category}</p>

      <button
        onClick={() => addToCart(product)}
        className='hover:bg-green-700  cursor-pointer absolute bottom-0 right-0 rounded-br-3xl  rounded-tl-2xl p-2 bg-green-600'>
        Agregar</button>

    </div>
  )
}

export default ProductCard
