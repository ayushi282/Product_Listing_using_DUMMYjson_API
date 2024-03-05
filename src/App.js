import React, { useState,useEffect } from 'react';
import LoginForm from './LoginForm';
import ProductDetailPage from './ProductDetailPage';
import ProductD from './ProductD';
import Navbar from './Navbar';
import { ProductProvider } from './ProductContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
return (
    <div>
     
  
      
      
       <BrowserRouter>
      <Navbar/>
      <ProductProvider>
      <Routes>
       <Route path='LoginForm' element={<LoginForm/>} />
      <Route path="/product/:productId" element={<ProductDetailPage/>} />
<Route path='ProductD' element={<ProductD/>}/>
       
                </Routes>
               </ProductProvider>
      </BrowserRouter> 
    </div>
  )
}

export default App
