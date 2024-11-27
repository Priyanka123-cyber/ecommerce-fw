import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import Product from './components/Product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation/>
     {/* <HomePage/> */}
     <Product/>
    </>
  )
}

export default App
