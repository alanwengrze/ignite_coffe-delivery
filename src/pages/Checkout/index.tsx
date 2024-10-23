import { CheckoutContainer } from "./styles"
import { Address } from "./Address"
import { Payment } from "./Payment"
import { CoffeesToPay } from "./CoffeesToPay"

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const addressFormSchema = z.object({
  cep: z.string(),
  rua: z.string(),
  numero: z.string(), 
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().max(2, "Deve ter 2 letras"),
})

type AddressFormProps = z.infer<typeof addressFormSchema>
export function Checkout() {
  const addressForm = useForm<AddressFormProps>({
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
  
  function handleCheckout(data: AddressFormProps) {
    console.log(data)
  }
  return (
    <CheckoutContainer onSubmit={addressForm.handleSubmit(handleCheckout)}>
      <FormProvider {...addressForm}>
        <Address />
      </FormProvider>
      <Payment />
      <CoffeesToPay />
    </CheckoutContainer>
  )
}