import styled from "styled-components";


const CART_COLOR_TEXT = {
  yellow: 'yellowDark',
  purple: 'purpleDark',
} as const

const CART_COLOR_BACKGROUND = {
  yellow: 'yellowLight',
  purple: 'purpleLight'
} as const

export interface CartProps {
  $cartColorText: keyof typeof CART_COLOR_TEXT
  $cartColorBackground: keyof typeof CART_COLOR_BACKGROUND
}

export const CartContainer = styled.button<CartProps>`
  display: flex;
  align-items: center;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors[CART_COLOR_BACKGROUND[props.$cartColorBackground]]};
  > svg {
    
    color: ${(props) => props.theme.colors[CART_COLOR_TEXT[props.$cartColorText]]};
  }
`

