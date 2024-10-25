import { CoffeesToPayContainer, CoffeesList, ButtonCoffeesWrapper, Amount, AmountWrapper } from "./styles"
import { CounterCoffee } from "../../Home/CardCoffee/styles"
import { Minus, Plus, Trash } from "phosphor-react"
import { CartContext } from "../../../contexts/CartContext"
import { useContext } from "react"
export function CoffeesToPay() {
  const { coffees } = useContext(CartContext)
  const totalCoffees = coffees.reduce((acc, coffee) => acc + coffee.price, 0)
  const totalCoffeesToPay = totalCoffees + 3.5
  return (
    <CoffeesToPayContainer>
      {
        coffees.map((coffee) => {
          return (
            <CoffeesList key={coffee.id}>
              <img src={coffee.image} alt="" />
              <div>
                <p>{coffee.title}</p>
                <ButtonCoffeesWrapper>
                  <CounterCoffee>
                    <button>{<Minus size={14}/>}</button>
                    <span>1</span>
                    <button>{<Plus size={14}/>}</button>
                  </CounterCoffee>
                  <button> <Trash /> Remover</button>
                </ButtonCoffeesWrapper>
              </div>
              <span>R$ {coffee.price}</span>
            </CoffeesList>
          )
        })
      }
      <Amount>
        <AmountWrapper>
          <p>Total de itens</p>
          <span>R$ {totalCoffees.toFixed(2)}</span>
        </AmountWrapper>
        <AmountWrapper>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </AmountWrapper>
        <AmountWrapper>
          <h2>Total</h2>
          <h2>R$ {totalCoffeesToPay.toFixed(2)}</h2>
        </AmountWrapper>
        <button>Confirmar pedido</button>
      </Amount>
    </CoffeesToPayContainer>
  )
}