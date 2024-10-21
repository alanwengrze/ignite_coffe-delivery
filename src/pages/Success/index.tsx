import { SuccessContainer, Content, MessageSuccess, OrderInfo, Info, InfoWrapper} from "./styles"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import successImage from "../../assets/SuccessImage.svg"
export function Success() {
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
              <p>Entrega em <span>Rua Floriano Peixoto, 267</span></p>
              <p>Florianópolis, SC</p>
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
              <span>Cartão de crédito</span>
            </InfoWrapper>
          </Info>
        </OrderInfo>
      </Content>
      <img src={successImage} alt="" />
    </SuccessContainer>
  )
}