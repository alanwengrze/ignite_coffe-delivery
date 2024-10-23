import { MapPinLine } from "phosphor-react"
import { AddressContainer, AddressForm, Input, InputWrapper } from "./styles"
import { useFormContext } from "react-hook-form"

export function Address() {
  const { register } = useFormContext()
  return (
    <AddressContainer>
      <span><MapPinLine /> Endereço de Entrega</span>
      <p>Informe o endereço onde deseja receber seu pedido</p>
      <AddressForm>
        <Input
          type="text"
          placeholder="CEP"
          id="cep"
          {...register("cep")}
        />
        <Input
          type="text"
          placeholder="Rua"
          id="rua"
          {...register("rua")}
        />
        <InputWrapper>
          <Input
            type="text"
            placeholder="Numero"
            {...register("numero")}
          />
          <Input
            type="text"
            placeholder="Complemento"
            id="complemento"
            {...register("complemento")}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Bairro"
            id="bairro"
            {...register("bairro")}
          />
          <Input
            type="text"
            placeholder="Cidade"
            id="cidade"
            {...register("cidade")}
          />
          <Input
            type="text"
            placeholder="UF"
            id="uf"
            {...register("uf")}
          />
        </InputWrapper>
      </AddressForm>
    </AddressContainer>
  )
}