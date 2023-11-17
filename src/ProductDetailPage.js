import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();

        if (data && data.products && Array.isArray(data.products)) {
          const selectedProduct = data.products.find((p) => p.id === parseInt(productId));
          setProduct(selectedProduct);
        } else {
          console.error('Invalid JSON format:', data);
          setError('Invalid JSON format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default ProductDetailsPage;
