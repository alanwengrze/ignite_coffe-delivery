import { CoffeeList, HomeContainer } from "./styles";
import { Banner } from "./Banner";
import { CardCoffee } from "./CardCoffee";
export function Home(){
  return(
    <HomeContainer>
      <Banner/>
      <CoffeeList>
        <CardCoffee/>
        <CardCoffee/>
        <CardCoffee/>
        <CardCoffee/>
        <CardCoffee/>
        <CardCoffee/>
      </CoffeeList>
    </HomeContainer>
  )
}