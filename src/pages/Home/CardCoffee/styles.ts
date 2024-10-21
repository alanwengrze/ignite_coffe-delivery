import styled from "styled-components";


export const CardCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min-content;
  gap: 1rem;
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.baseCard};
  border-radius: 6px 36px;

  > img {
    margin: -40px auto 1rem;
    width: 12rem;
    height: 12rem;
    object-fit: cover;
  }

  > h2 {
    color: ${({theme}) => theme.colors.baseSubtitle};
  }

  > p {
    color: ${({theme})=> theme.colors.baseLabel};
    font-size: 1.4rem;
    text-align: center;
  }
`;
export const TagCoffee = styled.span`
  background-color: ${({theme}) => theme.colors.yellowLight};
  color: ${({theme}) => theme.colors.yellowDark};
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;

`;

export const BuyCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  > span {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 2.4rem;
    color: ${({theme}) => theme.colors.baseText};
    margin-right: 0.8rem;

    &::before {
      content: "R$";
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
      color: ${({theme}) => theme.colors.baseLabel};
      margin-right: 0.2rem;
    }
  }
`;

export const CounterCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: ${({theme}) => theme.colors.baseButton};
  padding: 0.8rem;
  border-radius: 6px;

  button {
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.colors.purpleDark};
    cursor: pointer;
    font-size: 1.6rem;
    line-height: 0;
  }

  span {
    color: ${({theme}) => theme.colors.baseTitle};
  }
`;