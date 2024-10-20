import { ShoppingCart  } from "phosphor-react"
import { CartContainer, CartProps } from "./styles"


export function Cart({$cartColorText, $cartColorBackground}:CartProps){
  return(
    <CartContainer $cartColorBackground={$cartColorBackground} $cartColorText={$cartColorText}>
      <ShoppingCart weight="fill" size={20}/>
    </CartContainer>
  )
}