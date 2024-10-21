import styled from "styled-components";
export const HomeContainer = styled.div`
  height: 100%;
  h1 {
    color: ${({theme}) => theme.colors.purpleDark};
  } 
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
  margin: 8rem 0;
  overflow-x: auto;
  padding: 2rem 0;
`