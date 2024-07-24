import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Products:</h2>
      {products.map(product => (
        <div key={product._id}>
          <Link to={`/product/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
