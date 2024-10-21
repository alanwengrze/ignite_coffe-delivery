import styled from "styled-components";
export const HomeContainer = styled.div`
  height: 100%;
  > h1 {
    color: ${({theme}) => theme.colors.baseSubtitle};
    font-size: clamp(1.6rem, 2vw + 1rem, 4.8rem);
    line-height: 130%;
    margin-bottom: 1.6rem;
  } 
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
  /* margin: 8rem 0; */
  overflow-x: auto;
  padding: 2rem 0;
`