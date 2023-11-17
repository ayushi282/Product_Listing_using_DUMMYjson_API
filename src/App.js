import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import ProductD from './ProductD';
import ProductDetailPage from './ProductDetailPage'
const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/product/:productId" element={<ProductDetailPage/>} />
<Route path='ProductD' element={<ProductD/>}/>
       <Route path='#' element={<Navbar/>}/>
        <Route path='Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
