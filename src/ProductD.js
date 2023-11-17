import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css'; 
const ProductD = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
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
  }, []);

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

export default ProductD;
