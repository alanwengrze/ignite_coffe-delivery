import { createContext, useState } from "react";

interface CartContextType {
  countCart: number
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: any) {
  const [countCart, setCountCart] = useState(0)
  
  return(
    <CartContext.Provider 
      value={{
        countCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}