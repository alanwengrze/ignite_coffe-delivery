import styled from "styled-components";
export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  > img {
    width: 50%;
    aspect-ratio: 1;
  }

  @media (max-width: ${({theme}) => theme.SCREENS.SM}) {
    > img {
      width: 70%;
    }
  }

  @media (max-width: ${({theme}) => theme.SCREENS.XL}) {
    flex-direction: column;

    gap: 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const MessageSuccess = styled.div`
  h1{
    color: ${({theme}) => theme.colors.yellowDark};
  }
  p{
    color: ${({theme}) => theme.colors.baseSubtitle};
    font-size: 2rem;
  }

  @media (max-width: ${({theme}) => theme.SCREENS.SM}) {
    > h1{
      font-size: 2rem;
    }

    > p {
      font-size: 1.4rem;
    }
  }
`
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4rem;
  border: 1px solid ${({theme}) => theme.colors.baseButton};
  border-radius: 6px 36px;

  p {
    color: ${({theme}) => theme.colors.baseText};
  }
  span {
    color: ${({theme}) => theme.colors.baseTitle};
    font-weight: 500;
  }
`

const INFO_COLORS = {
  address: "purpleDark",
  delivery: "yellow",
  payment: "yellowDark"
} as const

interface InfoProps {
  $infoColor: keyof typeof INFO_COLORS
}

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    color: ${({theme}) => theme.colors.white};
    height: 3.2rem;
    width: 3.2rem;
    padding: 0.8rem 0.4rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors[INFO_COLORS[props.$infoColor]]};
  }

`
export const InfoWrapper = styled.div`
  
  @media (max-width: ${({theme}) => theme.SCREENS.SM}) {
    p {
      font-size: 1.2rem; 
    }

    span {
        font-size: 1.2rem;
      }
  }
`