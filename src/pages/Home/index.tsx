import { CoffeeList, HomeContainer } from "./styles";
import { Banner } from "./Banner";
import { CardCoffee } from "./CardCoffee";
export function Home(){
  return(
    <HomeContainer>
      <Banner/>
      <h1>Nossos cafés</h1>
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