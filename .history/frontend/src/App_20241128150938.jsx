import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import Product from './components/Product/Product'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Navigation/>
     <div>
     <HomePage/>
     {/* <Product/> */}
     {/* <ProductDetails/> */}
     </div>
     <Footer/>
     </div>
  )
}

export default App
