import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';
import { useProductContext } from './ProductContext';

const ProductD = () => {
  const { products, error, fetchData } = useProductContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(null); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex === null ? filteredProducts.length - 1 : Math.max(0, prevIndex - 1)
      );
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.min(filteredProducts.length - 1, prevIndex + 1)
      );
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="list">
        <h1>List of Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className={`product-box ${index === selectedIndex ? 'selected' : ''}`}
          >
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
