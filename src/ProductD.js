import React, { useEffect, useState,useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css'; 
import { useProductContext } from './ProductContext';
const ProductD = () => {
  const { products, error, fetchData } = useProductContext();
  const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
    fetchData();
  }, [fetchData]);

   const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <div className='list'>
        <h1>List of Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
    <div className="product-list">
            {filteredProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-box">
          <img src={product.thumbnail} alt={product.title} />
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default React.memo(ProductD);
