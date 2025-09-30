import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/contact" element={ <Contact />} />    
        <Route path="/about" element={ <About />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/orders" element={ <Orders />} />
        <Route path="/place-order" element={ <PlaceOrder />} />    
        <Route path="/product/:productId" element={ <Product />} />
        <Route path="/shop" element={ <Shop />} />
      </Routes>
    </div>
  )
}

export default App