import { Plus, Minus } from "phosphor-react"
import { CardCoffeeContainer, TagCoffee, BuyCoffee, CounterCoffee } from "./styles";
import { Cart } from "../../../components/Cart";
import coffeeImage from '../../../assets/coffee.png';
export function CardCoffee(){
  return(
    <CardCoffeeContainer>
      <img src={coffeeImage} alt="" />
      <TagCoffee>
        TRADICIONAL
      </TagCoffee>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <BuyCoffee>
        <span>9,90</span>
        <CounterCoffee>
          <button>{<Plus size={14}/>}</button>
          <span>1</span>
          <button>{<Minus size={14}/>}</button>
        </CounterCoffee>
        <Cart 
          $cartColorBackground="purpleDark"
          $cartColorText="default"
        />
      </BuyCoffee>
    </CardCoffeeContainer>
  )
}