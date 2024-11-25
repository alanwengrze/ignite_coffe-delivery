import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { PaymentContainer, PaymentOptions, PaymentOptionWrapper } from "./styles"
import { useFormContext } from "react-hook-form"
import { useState } from "react"


const options = [
  {
    value: "credito",
    label: "Cartão de Crédito",
    icon: <CreditCard />,
  },
  {
    value: "debito",
    label: "Cartão de Débito",
    icon: <Bank />,
  },
  {
    value: "dinheiro",
    label: "Dinheiro",
    icon: <Money />,
  },
]
export function Payment() {
  const [selectedPayment, setSelectedPayment] = useState("")
  const { register } = useFormContext()
  return (
    <PaymentContainer>
      <span><CurrencyDollar /> Pagamento</span>
      <p>O pagamento pode ser feito na entrega. Escolha a forma que deseja pagar</p>
      <PaymentOptions>
      {
        options.map((option) => (
          <PaymentOptionWrapper
            key={option.value}
            onClick={() => setSelectedPayment(option.value)}
            style={{ backgroundColor: selectedPayment === option.value ? "#EBE5F9" : "" }}
          >
            {option.icon}
            <input
              type="radio"
              value={option.value}
              {...register("pagamento")}
            />
            <span>{option.label}</span>
          </PaymentOptionWrapper>
        ))
      }
      </PaymentOptions>
    </PaymentContainer>
  )
}