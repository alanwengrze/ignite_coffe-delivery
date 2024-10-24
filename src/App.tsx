import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/global'
import { defaultTheme } from './themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider >
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
