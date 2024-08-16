import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Product from './components/Product'
import {BrowserRouter as Router, Routes, Route, unstable_useViewTransitionState  } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

const App = () => {
  const[data,setData]=useState([...items]);
  const[cart,setCart] =useState([]);

  return (
    <>
    <Router>
    <NavBar  cart ={cart} setData={setData}></NavBar>
    <Routes>

      <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>}></Route>
      <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart}/>}></Route>
      <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart}/>}></Route>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
    </Routes>
   
    </Router>
    </>
  );
}

export default App
