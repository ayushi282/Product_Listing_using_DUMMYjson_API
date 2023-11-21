
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'kminchelle',
          password: '0lelplR',
        }),
      });
      const data = await response.json();

      if (data.token) {
        setUser({ username, token: data.token });
        fetchData(); 
      } else {
        console.error('Invalid login:', data);
        setError('Invalid login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error during login');
    }
  };

  const fetchData = useCallback(async (productId) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      if (data && data.products && Array.isArray(data.products)) {
        if (productId) {
          const selectedProduct = data.products.find((p) => p.id === parseInt(productId));
          setProducts(data.products);
          setSelectedProduct(selectedProduct); 
        } else {
                   setProducts(data.products);
        }
      } else {
        console.error('Invalid JSON format:', data);
        setError('Invalid JSON format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  }, []);
  
  

  useEffect(() => {
        if (user) {
      fetchData();
    }
  }, [user, fetchData]);

  return (
    <ProductContext.Provider value={{ products, error, fetchData, login, user }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductContext;
