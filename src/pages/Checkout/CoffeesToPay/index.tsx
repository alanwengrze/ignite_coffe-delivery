import { CoffeesToPayContainer, CoffeesList, ButtonCoffeesWrapper, Amount, AmountWrapper } from "./styles"
import { CounterCoffee } from "../../Home/CardCoffee/styles"
import coffeeImage from "../../../assets/coffee.png"
import { Minus, Plus, Trash } from "phosphor-react"
export function CoffeesToPay() {
  return (
    <CoffeesToPayContainer>
      <CoffeesList>
        <img src={coffeeImage} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <ButtonCoffeesWrapper>
          <CounterCoffee>
            <button>{<Minus size={14}/>}</button>
            <span>1</span>
            <button>{<Plus size={14}/>}</button>
          </CounterCoffee>

            <button> <Trash /> Remover</button>
          </ButtonCoffeesWrapper>
        </div>
        <span>R$ 9,90</span>
      </CoffeesList>
      <CoffeesList>
        <img src={coffeeImage} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <ButtonCoffeesWrapper>
          <CounterCoffee>
            <button>{<Minus size={14}/>}</button>
            <span>1</span>
            <button>{<Plus size={14}/>}</button>
          </CounterCoffee>

            <button> <Trash /> Remover</button>
          </ButtonCoffeesWrapper>
        </div>
        <span>R$ 9,90</span>
      </CoffeesList>
      <Amount>
        <AmountWrapper>
          <p>Total de itens</p>
          <span>R$ 29,70</span>
        </AmountWrapper>
        <AmountWrapper>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </AmountWrapper>
        <AmountWrapper>
          <h2>Total</h2>
          <h2>R$ 33,20</h2>
        </AmountWrapper>
        <button>Confirmar pedido</button>
      </Amount>
    </CoffeesToPayContainer>
  )
}