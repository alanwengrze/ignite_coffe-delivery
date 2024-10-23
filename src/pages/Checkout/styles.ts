import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-areas: 
  "address coffeesToPay"
  "payment coffeesToPay"
  "payment .";

  grid-template-columns: 1fr auto;
  
  gap: 2.4rem;

  @media (max-width: ${({theme}) => theme.SCREENS.XL}) {
    grid-template-areas: 
    "address"
    "payment"
    "coffeesToPay";
  }
`


