import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  margin-top: 8.4rem;
  
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  > h1 {
    color: ${({theme}) => theme.colors.baseTitle};
    font-size: clamp(1.6rem, 2vw + 1rem, 4.8rem);
    line-height: 130%;
    margin-bottom: 1.6rem;
  }
  > p {
    color: ${({theme}) => theme.colors.baseSubtitle};
    font-size: 2rem;
    line-height: 130%;
    font-size: clamp(1rem, 1vw + 1rem, 2rem);
  }
`
export const ItemsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 6.6rem;
`
export const ItemSeparator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const ITEMS_COLORS = {
  cart: 'yellow',
  clock: 'yellowDark',
  package: 'baseText',
  coffee: 'purple',
} as const

interface ItemProps {
  $itemColor: keyof typeof ITEMS_COLORS
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > svg {
    color: ${({theme}) => theme.colors.white};
    background-color: ${(props) => props.theme.colors[ITEMS_COLORS[props.$itemColor]]};
    height: 3.2rem;
    width: 3.2rem;
    padding: 0.2rem 0.4rem;
    border-radius: 50%;
  }
`

export const BannerImage = styled.img`
  aspect-ratio: 1;
  width: 50%;
  
`