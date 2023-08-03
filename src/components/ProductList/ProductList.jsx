// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const fetchedProducts = await response.json();
        // Merge the fetched products with the existing products
        setProducts(existingProducts => [...existingProducts, ...fetchedProducts]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="category-buttons">
        <button className="category-button active">All</button>
        <button className="category-button">Laptop</button>
        <button className="category-button">Desktops</button>
        <button className="category-button">Woofers</button>
        <button className="category-button">Phones</button>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;