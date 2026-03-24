"use client";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext'



function Navbar() {
    const { cart } = useCart();
    const router = useRouter();
    const { theme } = useTheme();
    const pathname = usePathname()

    return (
        <div className='flex items-center justify-center'>
            <nav className=" text-slate-100
             flex place-content-between py-1 my-1 px-2 z-50 fixed bottom-2  rounded-2xl items-center 
             border-[#6f6f6f]  border-1 font-bold backdrop-blur-xl  backdrop-saturate-50 w-10/12 sm:w-4/5 md:w-2/8">
                
                <div className='flex h-9 w-9'>
                    <button className="cursor-pointer object-contain" onClick={() => { router.push("/") }}>
                        <img src="/logo.svg" alt="Error" />
                    </button>
                </div>

                <Link className={`${pathname == "/products" ? "bg-[#0388c3] text-black" : ""} p-3 rounded-2xl`} href="/products">Productos</Link>

                <Link className={`${pathname == "/cart" ? "bg-[#0388c3] text-black" : ""} p-3 rounded-2xl`} href="/cart">
                    Carrito <span>({cart.length})</span>
                </Link>

            </nav>
        </div>
    );
}

export default Navbar;