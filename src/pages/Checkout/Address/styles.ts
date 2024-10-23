import styled from "styled-components";

export const AddressContainer = styled.section`
  grid-area: address;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  border-radius: 6px;
  padding: 4rem;
  background-color: ${({theme}) => theme.colors.baseCard};

  > span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.baseSubtitle};

    > svg {
      color: ${({theme}) => theme.colors.yellowDark};
    }
  }
  > p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.baseText};
    margin-left: 2.4rem;
  }
`
export const AddressForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

 > input:first-child {
    width: fit-content;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  background-color: ${({theme}) => theme.colors.baseInput};
  border: 1px solid ${({theme}) => theme.colors.baseButton};
  color: ${({theme}) => theme.colors.baseLabel};
  border-radius: 4px;
  padding: 1.6rem;
  font-size: 1.4rem;
`
export const InputWrapper = styled.div`
  display: flex;
  
  gap: 1.2rem;

  > input:first-child {
    width: fit-content;
  }

  > input:nth-child(3){
    width: 20%;
  }
`