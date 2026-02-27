"use client"
import React, { useMemo } from 'react'
import { useCart } from '@/context/CartContext'
import ItemCart from '@/components/ItemCart'
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from 'next/navigation';
import toast, { Toast } from 'react-hot-toast';

function CartPage() {
    const { cart, clearCart, removeItem } = useCart();
    const { theme } = useTheme();
    const router = useRouter();

    const subtotal = useMemo(() => {
        const total = cart.reduce((acc, item) => acc + item.subtotal, 0);
        return Math.round(total * 100) / 100;
    }, [cart]);

    const iva = useMemo(() => {
        return Math.round(subtotal * 0.13 * 100) / 100;
    }, [subtotal]);

    const total = useMemo(() => {
        return Math.round((subtotal + iva) * 100) / 100;
    }, [subtotal, iva]);

    const handleCheckout = () => {
        clearCart();
        toast.success("La compra se realizó con éxito");
        router.push("/products");
    }

    const isCartEmpty = cart.length === 0;
    return (
        <div className={`${theme} dark:bg-[#27272A] dark:text-slate-100 pt-18  min-h-screen flex  justify-center`}>

            <div className='w-11/12 md:w-3/4'>
                <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-4">
                    <div className=" md:col-span-4 ">
                        <h1 className='mb-10 py-5 bg text-5xl italic font-bold text-[#639C93]'> Mi Carrito</h1>
                        <div className='md:hidden border-1 my-7'></div>
                        <div className="hidden md:block md:grid md:grid-cols-6 md:grid-rows-1 md:gap-4 font-bold ">
                            <div ></div>
                            <div className="col-span-2">Producto</div>
                            <div className="col-start-5 row-start-1 text-center">Precio $ </div>
                            <div className="col-start-4 row-start-1 text-center">Cantidad</div>
                            <div className="col-start-6">Subtotal</div>
                        </div>
                        <div className='hidden md:block border-1 my-7'></div>

                        {!isCartEmpty ?
                            cart.map((it) => (
                                <ItemCart key={it.product.id}
                                    product={it.product}
                                    quantity={it.quantity}
                                    subtotal={it.subtotal} />
                            ))
                            :
                            <div className='min-h-70 md:text-9xl text-8xl text-center opacity-35'> EL CARRITO ESTA VACíO</div>
                        }
                    </div>
                    <div className="my-10 row-start-2 md:row-start-1 md:col-span-2 md:col-start-5 md:pt-40">
                        {!isCartEmpty &&
                            <><h1 className='font-extrabold'>Resumen del pedido</h1><div className='border-1 my-7'></div><div className="grid grid-cols-6 grid-rows-1 gap-4">
                                <div className="col-span-4">Subtotal</div>
                                <div className="col-start-5">{subtotal}$</div>
                                <div className="col-span-4">IVA(13%)</div>
                                <div className="col-start-5">{iva}$</div>
                            </div><div className='border-1 my-7'></div><div className="grid grid-cols-6 grid-rows-1 gap-4">
                                    <div className="col-span-4">Total</div>
                                    <div className="col-start-5">{total}$</div>
                                </div><button className={`${theme} dark:bg-slate-100 dark:text-slate-900  bg-slate-900 text-slate-100 p-3 w-full my-5`}
                                    onClick={handleCheckout}>
                                    Finalizar Compra
                                </button></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
