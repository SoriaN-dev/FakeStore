"use client"
import React, { useEffect, useState } from 'react'
import type { Product } from "@/model/Product";
import { getproducts } from "@/api/products";
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';
import { useTheme } from  '@/context/ThemeContext'


function PageProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCaregory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getproducts();
      if (category) {
        setProducts(data.filter((item:Product) => item.category === category))
        console.log(category)
      } else {
        setProducts(data);
      }
    };
    setLoading(false)
    fetchProducts();


  }, [category]);

  if (loading){
    return (
      <div className={`${theme} dark:bg-[#27272A] dark:text-slate-100 flex items-center justify-center min-h-screen `}>
        <img className="h-40 w-40" src="/loading.gif" alt="Erro" />
      </div>
    )

  }

  return (
    <div className={`${theme} dark:bg-[#27272A] dark:text-slate-100 pt-5  min-h-screen w-full flex flex-col items-center `}>
      <div className='justify-end flex items-center px-10 gap-3 md:pb-3'>
        <p>Filtro:</p>
        <ProductFilter onFilterChange={setCaregory} />
      </div>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 w-3/4'>
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>

  )
}

export default PageProducts
