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
}
export function CardCoffee({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItemToCart } = useContext(CartContext)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddCoffeeToCart() {
    addItemToCart({
      id: coffee.id,
      quantity: 1
    })
    setIsItemAdded(true)
    setQuantity(1)
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
          <button onClick={incrementQuantity}>{<Plus size={14}/>}</button>
          <span>{quantity}</span>
          <button onClick={decrementQuantity}>{<Minus size={14}/>}</button>
        </CounterCoffee>
        <Cart 
          colors={{$cartColorBackground: 'purple', $cartColorText: 'purple'}}
          onAddCoffee={handleAddCoffeeToCart}
        />
      </BuyCoffee>
    </CardCoffeeContainer>
  )
}