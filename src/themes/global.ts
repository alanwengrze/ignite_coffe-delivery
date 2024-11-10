import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({theme}) => theme.colors.background};


  }

  

  input,
  textarea,
  button {
    font-family: "Baloo 2", cursive;
    font-weight: 400;
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
  }

  h1, h2 {
    
    font-family: "Baloo 2", cursive;
    font-weight: 800;
  }

  h1{

  }

  h2 {
    font-size: 2rem;
  }

  button:hover { 
    cursor: pointer;
  }
`;