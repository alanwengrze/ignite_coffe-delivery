import styled from "styled-components";

export const CoffeesToPayContainer = styled.div`
  grid-area: coffeesToPay;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem;
  background-color: ${({theme}) => theme.colors.baseCard};
  border-radius: 6px 36px;

  @media (max-width: ${({theme}) => theme.SCREENS.XL}){
    width: 100%;
  }
`

export const CoffeesList = styled.div`
  display: flex;
  justify-content: space-between;
  
  gap: 1.6rem;
  padding: 3rem 0;

  border-bottom: ${({theme}) => `1px solid ${theme.colors.baseButton}`};

  img {
    width: 4.8rem;
    height: 4.8rem;
    object-fit: cover;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > p {
      color: ${({theme}) => theme.colors.baseSubtitle};
    }
  }

  > span {
    margin-left: 2rem;
    color: ${({theme}) => theme.colors.baseText};
    font-weight: 700;
    width: max-content;
  }
`;
export const ButtonCoffeesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > button {
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.baseButton};
    color: ${({theme}) => theme.colors.baseText};
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    padding: 0 8px;
    gap: 0.4rem;

    > svg {
      color: ${({theme}) => theme.colors.purple};
    }
  }
`;

export const Amount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  margin-top: 1rem;

  h2{
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    color: ${({theme}) => theme.colors.baseSubtitle};
  }

  > button {
    background-color: ${({theme}) => theme.colors.yellow};
    color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 6px;
    padding: 1.2rem 0.8rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 160%;
    
  }

`
export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;

  p{
    color: ${({theme}) => theme.colors.baseText};
    font-size: 1.4rem;
  }
`