// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import Header from '../../footer and header/Header';
import NavBar from '../../footer and header/navigation/NavBar';
import Footer from '../../footer and header/Footer';
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
    <div className='products-main-page'>
      <NavBar />
      <Header />
      <section className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      <Footer />
    </div>
  );
};
export default ProductList;