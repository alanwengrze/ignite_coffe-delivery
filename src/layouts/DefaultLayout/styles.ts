import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16rem;
  margin-bottom: 4rem;

  @media (max-width: ${({theme}) => theme.SCREENS.XL}) {
    padding: 0 4rem;

  }
`