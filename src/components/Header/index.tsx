import { MapPin  } from "phosphor-react"
import logoCoffeeDelivery from "../../assets/Logo.svg"
import { HeaderContainer, Location } from "./styles"
import { Cart } from "../Cart"
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Logo do Coffee Delivery" />
      <div>
        <Location>
          <MapPin  size={20} weight="fill"/>
          <span>
            Florianópolis, SC
          </span>
        </Location>
        <Cart 
          $cartColorBackground="yellow"
          $cartColorText="yellow"
        />
      </div>
    </HeaderContainer>       
  )
}