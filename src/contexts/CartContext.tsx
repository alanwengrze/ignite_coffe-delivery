import { createContext, useEffect, useState } from "react";

interface Coffee {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[]
}
interface CartContextType {
  coffees: Coffee[]
  countCart: number
  addCoffeeToCart(coffee: Coffee): void
  incrementCountCart(): void
  decrementCountCart(): void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: React.ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])
  const [countCart, setCountCart] = useState(0)

  function addCoffeeToCart(coffee: Coffee) {
    if(countCart == 0) {
      return
    }else{
      console.log(countCart)
      for(let i = 0; i < countCart; i++) {
        setCart((state) => [...state, coffee])
        console.log(coffee)
        console.log(cart)
        
      }
    }
  }

  function incrementCountCart() {
    setCountCart(state => state + 1)
  }

  function decrementCountCart() {
    countCart > 0 &&
    setCountCart(state => state - 1)
  }

  return(
    <CartContext.Provider 
      value={{
        coffees: cart,
        countCart,
        addCoffeeToCart,
        incrementCountCart,
        decrementCountCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}