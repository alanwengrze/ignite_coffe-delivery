import { CheckoutContainer } from "./styles"
import { Address } from "./Address"
import { Payment } from "./Payment"
import { CoffeesToPay } from "./CoffeesToPay"

import { useForm, FormProvider, type SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContext, useEffect } from "react"
import { CartContext } from "../../contexts/CartContext"
import { useNavigate } from "react-router-dom"
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
  cep: z.string(),
  rua: z.string(),
  numero: z.string(), 
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().max(2, "Deve ter 2 letras"),
})

export type AddressFormProps = z.infer<typeof addressFormSchema>
export function Checkout() {
  const { cart, checkout } = useContext(CartContext)
  const navigate = useNavigate()

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
  useEffect(() => {
    if(cart.length === 0) {
      navigate('/')
    }
  }, [cart])
  return (
    <CheckoutContainer onSubmit={addressForm.handleSubmit(handleOrderCheckout)}>
      <FormProvider {...addressForm}>
        <Address />
      </FormProvider>
      <Payment />
      <CoffeesToPay />
    </CheckoutContainer>
  )
}