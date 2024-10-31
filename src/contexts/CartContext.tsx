import { createContext, useEffect, useReducer } from "react";
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/action'

import { cartReducer, CartItem, Address } from '../reducers/cart/reducer'
import { useNavigate } from "react-router-dom";
import type { AddressFormProps } from "../pages/Checkout";

interface CartContextType {
  cart: CartItem[]
  address: Address[]
  addItemToCart(cartItem: CartItem): void
  removeItemToCart: (cartItemId: CartItem['id']) => void
  decrementItemQuantity: (itemId: CartItem['id']) => void
  incrementItemQuantity: (itemId: CartItem['id']) => void
  checkout: (address: AddressFormProps) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: React.ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      address: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const navigate = useNavigate()

  const { cart, address } = cartState

  function addItemToCart(item: CartItem) {
    dispatch(addItemAction(item))
  }

  function removeItemToCart(itemId: CartItem['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(address: AddressFormProps) {
    dispatch(checkoutCartAction(address, navigate))
  }

  function incrementItemQuantity(itemId: CartItem['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: CartItem['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return(
    <CartContext.Provider 
      value={{
        cart,
        address,
        addItemToCart,
        removeItemToCart,
        incrementItemQuantity,
        decrementItemQuantity,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}