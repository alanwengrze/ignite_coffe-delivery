import { MapPin  } from "phosphor-react"
import logoCoffeeDelivery from "../../assets/Logo.svg"
import { HeaderContainer, Location } from "./styles"
import { Cart } from "../Cart"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"
export function Header() {
  const {countCart} = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link to="/">
       <img src={logoCoffeeDelivery} alt="Logo do Coffee Delivery" />
      </Link>
      <div>
        <Location>
          <MapPin  size={20} weight="fill"/>
          <span>
            Florianópolis, SC
          </span>
        </Location>
        <Link to="/checkout" className="cartLink">
        {
          countCart > 0 && (
            <div className="cartCounter"><span>{countCart}</span></div>
          )
        }
          <Cart
            $cartColorBackground="yellow"
            $cartColorText="yellow"
          />
        </Link>
      </div>
    </HeaderContainer>       
  )
}