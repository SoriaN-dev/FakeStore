"use client"
import React from 'react'
import type { Product } from '@/model/Product'
import { useTheme } from "@/context/ThemeContext";
import { useCart } from '@/context/CartContext'


type Props = {
    product: Product;
    quantity: number;
    subtotal: number;
}
function ItemCart({ product: { id, image, title, price }, quantity, subtotal }: Props) {
    const { theme } = useTheme();
    const { removeItem, updateQuantity } = useCart();
    return (
        <div className={`${theme} dark:bg-[#161617] dark:text-slate-100`}>

            <div className="flex flex-col gap-4 p-4 border-b
             md:grid md:grid-cols-6 md:items-center md:gap-4">

                <div className="flex justify-center md:col-span-1">
                    <img
                        className="h-24 object-contain"
                        src={image}
                        alt="No se encontro la imagen"
                    />
                </div>

                <div className="text-center md:text-left md:col-span-2">
                    <p className='truncate'>{title}</p>
                </div>

                <div className="flex justify-center md:col-span-1">
                    <div className="flex">
                        <button
                            className="border h-10 w-10 text-2xl flex items-center justify-center hover:border-2"
                            onClick={() => updateQuantity(id, quantity - 1)}
                        >
                            -
                        </button>

                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) =>
                                updateQuantity(id, Number(e.target.value))
                            }
                            className={`${theme} dark:bg-[#27272A] dark:text-slate-100 
        h-10 w-12 bg-gray-200 text-center appearance-none
        [&::-webkit-inner-spin-button]:appearance-none
        [&::-webkit-outer-spin-button]:appearance-none`}
                        />

                        <button
                            className="border h-10 w-10 text-2xl flex items-center justify-center hover:border-2"
                            onClick={() => updateQuantity(id, quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>


                <div className="text-center md:text-center md:col-span-1">
                    <p>{price}$</p>
                </div>

                <div className="flex md:justify-between justify-center gap-4 items-center md:col-span-1">
                    <span className='hidden md:block'>{subtotal}$</span>

                    <button
                        className="rounded-full h-10 w-10 cursor-pointer hover:scale-110"
                        onClick={() => removeItem(id)}
                    >
                        <img src="/delete.png" alt="Eliminar" />
                    </button>
                </div>

            </div>


        </div>
    )
}

export default ItemCart
