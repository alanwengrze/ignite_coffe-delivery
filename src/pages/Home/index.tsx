import { CoffeeList, HomeContainer } from "./styles";
import { Banner } from "./Banner";
import { CardCoffee } from "./CardCoffee";
import { coffees } from "../../../data.json";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useEffect, useState } from "react";
export function Home(){
  const { countCart, incrementCountCart, decrementCountCart } = useContext(CartContext)
  const handleIncrementCountCart = () => {
    incrementCountCart()
  }
  const handleDecrementCountCart = () => {
    countCart > 0 &&
    decrementCountCart()
  }
  useEffect(() => {
    console.log(countCart)
  }, [countCart])
  return(
    <HomeContainer>
      <Banner/>
      <h1>Nossos cafés</h1>
      <CoffeeList>
        {
          coffees.map((coffee) => {
            return(
              <CardCoffee
                key={coffee.id}
                coffee={coffee}
                onIncrement={handleIncrementCountCart}
                onDecrement={handleDecrementCountCart}
                countCoffee={countCart}
              />
            )
          })
        }
      </CoffeeList>
    </HomeContainer>
  )
}