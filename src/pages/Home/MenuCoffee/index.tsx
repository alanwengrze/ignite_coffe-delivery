import { MenuCoffeeContainer, CardCoffee, TagCoffee, BuyCoffee } from "./styles";

export function MenuCoffee(){
  return(
    <MenuCoffeeContainer>
      <CardCoffee>
        <img src="" alt="" />
        <TagCoffee>
          TRADICIONAL
        </TagCoffee>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <BuyCoffee>
          <span>9,90</span>
          <button>add</button>
          <span>1</span>
          <button>remove</button>
        </BuyCoffee>
      </CardCoffee>
    </MenuCoffeeContainer>
  )
}