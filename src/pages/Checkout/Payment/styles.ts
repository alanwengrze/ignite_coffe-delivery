import styled from "styled-components";

export const PaymentContainer = styled.div`
  grid-area: payment;
  background-color: ${({theme}) => theme.colors.baseCard};
  padding: 4rem;
  height: fit-content;
  border-radius: 6px;

  > span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.baseSubtitle};

    > svg {
      color: ${({theme}) => theme.colors.purple};
    }
  }
  > p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.baseText};
    margin-left: 2.4rem;
  }
  @media (max-width: ${({theme}) => theme.SCREENS.XS}) {
    > p {
      margin: 0.4rem 0 0 0.4rem;
      font-size: 1.2rem;
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1.2rem;

  margin-top: 2.4rem;

  @media (max-width: ${({theme}) => theme.SCREENS.XS}) {
    flex-direction: column;
  }
`;

export const PaymentOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background-color: ${({theme}) => theme.colors.baseButton};
  border-radius: 6px;
  padding: 1.6rem;

  > svg {
    color: ${({theme}) => theme.colors.purple};
    
  }
  > p {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.baseText};
  }
  
  @media (max-width: ${({theme}) => theme.SCREENS.SM}) {
    padding: 1rem;

    > p {
      font-size: 1rem;
    }
  }
`