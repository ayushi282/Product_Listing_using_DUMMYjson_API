import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import ProductD from './ProductD';
import ProductDetailPage from './ProductDetailPage';
import ProductContext, { ProductProvider } from './ProductContext';
import LoginForm from './LoginForm';
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
       <Route path='#' element={<Navbar/>}/>
                </Routes>
                </ProductProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
