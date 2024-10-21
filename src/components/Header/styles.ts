import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${({theme}) => theme.colors.purpleDark};
  background-color: ${({theme}) => theme.colors.purpleLight};
  padding: 0.8rem 1.6rem;
  border-radius: 6px;

`;
