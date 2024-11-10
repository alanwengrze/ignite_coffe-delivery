import { VoidCartCheckoutContainer } from "./styles"
import voidCheckout from "../../../assets/void_checkout.svg"
export function VoidCartCheckout() {
  return (
    <VoidCartCheckoutContainer>
      <h1>Você ainda não possui nenhum produto no carrinho! {`:(`}</h1>
      <img src={voidCheckout} alt="" />
    </VoidCartCheckoutContainer>
  )
}