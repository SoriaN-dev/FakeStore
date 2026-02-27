"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import type { Product } from "@/model/Product";

type Props = {
  product: Product;
};

export default function ProductDetailsClient({ product }: Props) {
  const { theme } = useTheme();

  return (
   <div className={`${theme} dark:bg-[#27272A] dark:text-slate-100 grid grid-cols-5 grid-rows-5 gap-4 pt-10 px-8 min-h-screen`}>
            <div className="col-span-5 text-4xl font-semibold ">
                <Link href={"/products"}><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 16 16" fill="none">
                    <path d="M8 10L8 14L6 14L-2.62268e-07 8L6 2L8 2L8 6L16 6L16 10L8 10Z" fill="currentColor" />
                </svg></Link>
                <h1 className="my-5">{product.title}</h1></div>
            <div className="col-span-3 row-span-4 row-start-2 object-contain items-center justify-center">
                <img src={product.image} alt="No se pudo cargar la iamgen" />
            </div>
            <div className="col-span-2 row-span-4 col-start-4 row-start-2 flex flex-col">

                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="col-span-2">Precio:</div>
                    <div className="col-span-3 col-start-3">{product.price}</div>
                    <div className="col-span-2 row-start-2">Categoría:</div>
                    <div className="col-span-3 col-start-3 row-start-2">{product.category}</div>
                    <div className="col-span-2 row-start-3">Descripción:</div>
                    <div className="col-span-3 row-span-3 col-start-3 row-start-3"> {product.description}</div>
                </div>

            </div>
        </div>
  );
}