import { CoffeesToPayContainer, CoffeesList, ButtonCoffeesWrapper, Amount, AmountWrapper } from "./styles"
import { CounterCoffee } from "../../Home/CardCoffee/styles"
import { Minus, Plus, Trash } from "phosphor-react"
import { CartContext } from "../../../contexts/CartContext"
import { useContext } from "react"
import { coffees } from "../../../../data.json";

export function CoffeesToPay() {
  const { cart, incrementItemQuantity, decrementItemQuantity, removeItemToCart } = useContext(CartContext)

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const shippingPrice = 3.5

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItemToCart(itemId)
  }

  return (
    <CoffeesToPayContainer>
      {
        coffeesInCart.map((coffee) => {
          return (
            <CoffeesList key={coffee.id}>
              <img src={coffee.image} alt="" />
              <div>
                <p>{coffee.title}</p>
                <ButtonCoffeesWrapper>
                  <CounterCoffee>
                    <button type="button" onClick={() => handleItemDecrement(coffee.id)}>{<Minus size={14}/>}</button>
                    <span>{coffee.quantity}</span>
                    <button type="button" onClick={() => handleItemIncrement(coffee.id)}>{<Plus size={14}/>}</button>
                  </CounterCoffee>
                  <button  onClick={() => handleItemRemove(coffee.id)}> <Trash /> Remover</button>
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
          <span>R$ {totalItemsPrice.toFixed(2)}</span>
        </AmountWrapper>
        <AmountWrapper>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </AmountWrapper>
        <AmountWrapper>
          <h2>Total</h2>
          <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
        </AmountWrapper>
        <button type="submit">Confirmar pedido</button>
      </Amount>
    </CoffeesToPayContainer>
  )
}