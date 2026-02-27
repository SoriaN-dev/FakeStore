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
            <nav className={`${theme} dark:bg-[#09090B] dark:text-slate-100
             flex place-content-between py-3 my-3 px-10 z-50 fixed top-0  rounded-3xl items-center 
             border-[#639C93] border-2 font-bold backdrop-blur-xl  backdrop-saturate-200 w-10/12 sm:w-4/5 md:w-2/5`}>
                
                <div className='flex h-9 w-9'>
                    <button className="cursor-pointer object-contain" onClick={() => { router.push("/") }}>
                        <img src="/logo.png" alt="Error" />
                    </button>
                </div>

                <Link className={`${pathname == "/products" ? "text-[#639C93]" : ""}`} href="/products">Productos</Link>

                <Link className={`${pathname == "/cart" ? "text-[#639C93]" : ""}`} href="/cart">
                    Carrito <span>({cart.length})</span>
                </Link>

            </nav>
        </div>
    );
}

export default Navbar;