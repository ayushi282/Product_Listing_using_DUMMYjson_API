import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './ProductContext';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { products, fetchData, error } = useProductContext();

 
  React.useEffect(() => {
    fetchData(productId);
  }, [productId, fetchData]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products.length) {
    return <div>Loading...</div>;
  }
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
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

export default React.memo(ProductDetailsPage);
