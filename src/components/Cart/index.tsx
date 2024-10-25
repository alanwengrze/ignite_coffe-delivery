import { ShoppingCart  } from "phosphor-react"
import { CartContainer, CartProps } from "./styles"

interface CartFullProps{
  colors: CartProps
  onAddCoffee?: () => void
}

export function Cart({colors, onAddCoffee}:CartFullProps){
  return(
    <CartContainer
      onClick={onAddCoffee}
      $cartColorBackground={colors.$cartColorBackground} 
      $cartColorText={colors.$cartColorText}
    >
      <ShoppingCart weight="fill" size={20}/>
    </CartContainer>
  )
}