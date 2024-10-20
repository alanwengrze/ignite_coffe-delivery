import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/global'
import { defaultTheme } from './themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider >
      
    </BrowserRouter>
  )
}

export default App
