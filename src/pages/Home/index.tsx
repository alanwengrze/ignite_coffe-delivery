import { CoffeeList, HomeContainer } from "./styles";
import { Banner } from "./Banner";
import { CardCoffee } from "./CardCoffee";
import { coffees } from "../../../data.json";
export function Home(){
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
              />
            )
          })
        }
      </CoffeeList>
    </HomeContainer>
  )
}