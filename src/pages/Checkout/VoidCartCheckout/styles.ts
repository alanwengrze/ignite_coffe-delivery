import styled from "styled-components";

export const VoidCartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  > h1{
    color: ${({theme}) => theme.colors.purpleDark};
    text-align: center;
  }

  > img { 
    width: 40%;
    aspect-ratio: 1;
  }

  @media (max-width: ${({theme}) => theme.SCREENS.SM}) {
    > img {
      width: 70%;
    }

    > h1{
      font-size: 2rem;
    }
  }
`