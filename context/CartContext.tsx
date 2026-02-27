"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import type { Product } from "@/model/Product";
import toast from "react-hot-toast";


type CartItem = {
  product: Product;
  quantity: number;
  subtotal: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity<1){
      toast.error("Cantidad invalida")
      return
    }

    setCart(prev => 
      prev.map(item => 
         item.product.id === id
         ? {...item,quantity, subtotal: quantity *item.product.price}
         : item
         )
    );
  }


  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
    toast.success("Producto eliminado!");
  }
  const clearCart = () => {
    setCart([]);
  }

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.product.id === product.id);

    if (existing) {
      toast.error("El producto ya está en el carrito");
      return;
    }

    setCart(prev => [
      ...prev,
      {
        product,
        quantity: 1,
        subtotal: product.price
      }
    ]);

    toast.success("Producto agregado al carrito 🛒");
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart, addToCart, clearCart, removeItem, updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};