import { SuccessContainer, Content, MessageSuccess, OrderInfo, Info, InfoWrapper} from "./styles"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import successImage from "../../assets/SuccessImage.svg"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { useParams } from "react-router-dom"
export function Success() {
  const { address } = useContext(CartContext)
  const  addressId  = useParams()
  const addressInfo = address.find((address) => address.id === Number(addressId.id))

  if (!addressInfo?.id) {
    return null
  }
  return (
    <SuccessContainer>
      <Content>
        <MessageSuccess>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </MessageSuccess>
        <OrderInfo>
          <Info $infoColor="address">
            <MapPin weight="fill"/>
            <InfoWrapper>
              <p>Entrega em <span>{addressInfo?.rua}, {addressInfo?.numero}</span></p>
              <p>{addressInfo?.bairro} - {addressInfo?.cidade}, {addressInfo?.uf}</p>
            </InfoWrapper>
          </Info>
          <Info $infoColor="delivery">
            <Clock weight="fill"/>
            <InfoWrapper>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </InfoWrapper>
          </Info>
          <Info $infoColor="payment">
            <CurrencyDollar/>
            <InfoWrapper>
              <p>Pagamento na entrega</p>
              <span>{addressInfo?.pagamento}</span>
            </InfoWrapper>
          </Info>
        </OrderInfo>
      </Content>
      <img src={successImage} alt="" />
    </SuccessContainer>
  )
}