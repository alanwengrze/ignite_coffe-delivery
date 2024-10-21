import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.colors.background};
  padding: 0 16rem;
`