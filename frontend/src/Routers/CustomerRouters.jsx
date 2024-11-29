import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Cart from '../components/cart/Cart'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Product from '../components/Product/Product'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>


        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters