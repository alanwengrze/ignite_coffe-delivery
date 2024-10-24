import styled from "styled-components";


export const CardCoffeeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min-content;
  gap: 1rem;
  padding: 2rem 2.4rem;
  background-color: ${({theme}) => theme.colors.baseCard};
  border-radius: 6px 36px;

  > img {
    position: absolute;
    top: -2rem;
    left: calc(50% - 5rem);
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }

  > h2 {
    color: ${({theme}) => theme.colors.baseSubtitle};
    text-align: center;
    white-space: nowrap;
  }

  > p {
    color: ${({theme})=> theme.colors.baseLabel};
    font-size: 1.4rem;
    text-align: center;
  }
  .tags {
    margin-top: 8rem;
  }
`;

export const TagCoffee = styled.span`
  background-color: ${({theme}) => theme.colors.yellowLight};
  color: ${({theme}) => theme.colors.yellowDark};
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;

  margin-left: 0.8rem;

`;

export const BuyCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 2.4rem;
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
  height: 3.2rem;
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