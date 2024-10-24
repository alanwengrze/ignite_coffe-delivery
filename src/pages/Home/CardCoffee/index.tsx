import { Plus, Minus } from "phosphor-react"
import { CardCoffeeContainer, TagCoffee, BuyCoffee, CounterCoffee } from "./styles";
import { Cart } from "../../../components/Cart";

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