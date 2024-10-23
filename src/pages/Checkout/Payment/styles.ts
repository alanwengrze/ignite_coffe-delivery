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
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1.2rem;

  margin-top: 2.4rem;
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
  
`