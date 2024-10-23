import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { PaymentContainer, PaymentOptions, PaymentOptionWrapper } from "./styles"
export function Payment() {
  return (
    <PaymentContainer>
      <span><CurrencyDollar /> Pagamento</span>
      <p>O pagamento pode ser feito na entrega. Escolha a forma que deseja pagar</p>
      <PaymentOptions>
        <PaymentOptionWrapper>
          <CreditCard />
          <p>Cartão de credito</p>
        </PaymentOptionWrapper>
        <PaymentOptionWrapper>
          <Bank />
          <p>Cartão de debito</p>
        </PaymentOptionWrapper>
        <PaymentOptionWrapper>
          <Money />
          <p>Dinheiro</p>
        </PaymentOptionWrapper>
      </PaymentOptions>
    </PaymentContainer>
  )
}