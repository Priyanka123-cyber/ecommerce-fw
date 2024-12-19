import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import Product from './components/Product/Product'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/cart/Cart'
import Checkout from './components/Checkout/Checkout'
import OrderSummary from './components/Checkout/OrderSummary'
import Order from './components/Order/Order'
import OrderDetail from './components/Order/OrderDetail'
import CustomerRouters from './Routers/CustomerRouters'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  )
}

export default App
