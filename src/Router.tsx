import {Routes, Route, Navigate} from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { useContext } from 'react'
import { CartContext } from './contexts/CartContext'

export function Router() {
  const { cart } = useContext(CartContext)
  return (
    <Routes>
      {
        cart.length <= 0 ? (
          <Route path='/' element={<DefaultLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : (
          <Route path='/' element={<DefaultLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="address/:id/success" element={<Success/>} />
          </Route>
        )
      }
    </Routes>
  )
}