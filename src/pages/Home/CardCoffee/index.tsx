import { Plus, Minus } from "phosphor-react"
import { CardCoffeeContainer, TagCoffee, BuyCoffee, CounterCoffee } from "./styles";
import { Cart } from "../../../components/Cart";
import { CartContext } from "../../../contexts/CartContext";
import { useContext, useEffect, useState } from "react";

interface CoffeeProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    tags: string[]
  }
  onIncrement: () => void
  onDecrement: () => void
  countCoffee: number
}
export function CardCoffee({ coffee, onIncrement, onDecrement, countCoffee }: CoffeeProps) {
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddCoffeeToCart() {
    addCoffeeToCart(coffee)
  }
  return(
    <CardCoffeeContainer>
      <img src={coffee.image} alt="" />
      <div className="tags">
        {
          coffee.tags.map((tag) => {
            return(
              <TagCoffee key={tag}>
                {tag}
              </TagCoffee>
            )
          })
        }
      </div>
      <h2>{coffee.title}</h2>
      <p>{coffee.description}</p>
      <BuyCoffee>
        <span>{coffee.price}</span>
        <CounterCoffee>
          <button onClick={onIncrement}>{<Plus size={14}/>}</button>
          <span>{countCoffee}</span>
          <button onClick={onDecrement}>{<Minus size={14}/>}</button>
        </CounterCoffee>
        <Cart 
          colors={{$cartColorBackground: 'purple', $cartColorText: 'purple'}}
          onAddCoffee={handleAddCoffeeToCart}
        />
      </BuyCoffee>
    </CardCoffeeContainer>
  )
}