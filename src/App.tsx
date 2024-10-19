import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/global'
import { defaultTheme } from './themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider >
      
    </BrowserRouter>
  )
}

export default App
