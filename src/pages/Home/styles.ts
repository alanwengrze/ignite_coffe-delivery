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
  height: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
  overflow-x: auto;
  overflow-y: scroll;
  padding: 2rem 0;

&::-webkit-scrollbar {
  width: 12px;
}

&::-webkit-scrollbar-track {
  /* background: ${({theme}) => theme.colors.baseButton}; */
  border-radius: 3px;
}

&::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.colors.purple};
  border-radius: 3px;
  
}

  
`