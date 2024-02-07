import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import About from '../components/Pages/Aboutcomponent/About.jsx'
import Contact from '../components/Pages/Contactcomponent/Contact.jsx'
import Singleproduct from '../components/Pages/SingleProduct/Singleproduct.jsx'
import Page404 from '../components/Pages/Pagenotfound/Page404.jsx'
import Cart from '../components/Pages/Cartcomponent/Cart.jsx'
import Home from '../components/Pages/Homecomponent/Home.jsx'
import Products from '../components/Pages/Productcomponent/Products.jsx'

function WebRouter() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Products/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
    <Route path='*' element={<Page404/>}/>



  </Routes>
  )
}

export default WebRouter