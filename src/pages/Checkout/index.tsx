import { CheckoutContainer } from "./styles"
import { Address } from "./Address"
import { Payment } from "./Payment"
import { CoffeesToPay } from "./CoffeesToPay"
import { VoidCartCheckout } from "./VoidCartCheckout"

import { useForm, FormProvider, type SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
// import { useNavigate } from "react-router-dom"
type FormInputs = {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento?: string | undefined;
}

const addressFormSchema = z.object({
  cep: z.string().min(8, "Deve ter 8 números"),
  rua: z.string().min(3, "Deve ter pelo menos 3 letras"),
  numero: z.string().min(1, "Deve ter pelo menos 1 número"),
  complemento: z.string().optional(),
  bairro: z.string().min(3, "Deve ter pelo menos 3 letras"),
  cidade: z.string().min(4, "Deve ter pelo menos 4 letras"),
  uf: z.string().max(2, "Deve ter 2 letras"),
})

export type AddressFormProps = z.infer<typeof addressFormSchema>
export function Checkout() {
  const { cart, checkout } = useContext(CartContext)
  // const navigate = useNavigate()

  const addressForm = useForm<FormInputs>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    }
  })
  
  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }
  return (
    <>
      {cart.length === 0 ? (
        <VoidCartCheckout />
      ): (
      <CheckoutContainer onSubmit={addressForm.handleSubmit(handleOrderCheckout)}>
        <FormProvider {...addressForm}>
          <Address />
        </FormProvider>
        <Payment />
        <CoffeesToPay />
      </CheckoutContainer>
      )
       }
    </>
    
  )
}