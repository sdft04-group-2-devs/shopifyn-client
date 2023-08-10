import React, { useState, useEffect } from 'react';
import './MyDashboard.css'

const MyDashboard = () => {
  const [uploadedProducts, setUploadedProducts] = useState([]);

  useEffect(() => {
    // Fetch  products from the backend 
    const mockData = [
      {
        id: 1,
        name: 'Product 1',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 20.99,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 35.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 45.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 35.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 55.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 95.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 85.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 75.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 565.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 175.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 195.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'
      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 185.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      // ...other products
    ];

    setUploadedProducts(mockData);
  }, []);

  const handleDelete = (productId) => {
    // Simulate deletion from backend
    // In a real app, you'd make an API call to delete the product from the server
    const updatedProducts = uploadedProducts.filter(product => product.id !== productId);
    setUploadedProducts(updatedProducts);
  };

  return (
    <div>
  <div>
      <button onClick={() => window.location.href = '/'} class="dashboard-header-button">Back to Home</button>
      <button onClick={() => window.location.href = '/products'} class="dashboard-header-button">Products</button>
      <div class="dropdown">
        <button class="dashboard-Categories-button">Categories</button>
        <div class="dropdown-content">
          <a href="/category/phones">Phones</a>
          <a href="/category/laptops">Laptops</a>
          <a href="/category/woofers">Woofers</a>
          <a href="/category/desktops">Desktops</a>
        </div>
    </div>
      <button onClick={() => window.location.href = '/upload-product'} class="dashboard-header-button">+ Add new product</button>
  </div>
    <h2 className="dashboard-heading">My Dashboard</h2>
    <div className="product-grid">
      {uploadedProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="dashboard-product-name">{product.name}</div>
          <div className="dashboard-product-description">{product.description}</div>
          <div className="dshboard-product-price">Ksh {product.price}</div>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
);
};
export default MyDashboard;
