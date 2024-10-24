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
  .cartLink{
    position: relative;
  }
  .cartCounter{
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.yellowDark};
    color: ${({theme}) => theme.colors.white};
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: 700;
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
