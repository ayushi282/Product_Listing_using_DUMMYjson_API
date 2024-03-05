
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { loginAPI } from './authApi';
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
   const [selectedProduct, setSelectedProduct] = useState(null);

   const login = async (username, password) => {
    try {
      const userData = await loginAPI(username, password);
      setUser(userData);
      // fetchData(); 
    } catch (error) {
      setError(error.message);
    }
  };

   const fetchData = useCallback(async (productId) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      if (data && data.products && Array.isArray(data.products)) {
        // if (productId) {
          setProducts(data.products);
          if (productId) {
          const selectedProduct = data.products.find((p) => p.id === parseInt(productId));
          
          setSelectedProduct(selectedProduct); 
          console.log(selectedProduct);
          
          }
        // } else {
                  //  setProducts(data.products);
        // }
      } else {
        console.error('Invalid JSON format:', data);
        setError('Invalid JSON format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  }, []);
  
  const logout=()=>{
    setUser(null);
  };

  useEffect(() => {
        if (user) {
      fetchData();
    }
  }, [user, fetchData]);

  return (
    <ProductContext.Provider value={{ products, error, fetchData, login,logout, user }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductContext;
