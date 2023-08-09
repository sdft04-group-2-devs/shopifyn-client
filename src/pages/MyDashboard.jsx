import React, { useState, useEffect } from 'react';
import './MyDashboard.css'

const MyDashboard = () => {
  const [uploadedProducts, setUploadedProducts] = useState([]);

  useEffect(() => {
    // Fetch user's uploaded products from the backend here
    // For demonstration purposes, let's assume you have a mock data array
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
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'

      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepSteTlT5lsXJ2P2V7vrOGYGmIf7nbquFrg&usqp=CAU'
      },
      {
        id: 2,
        name: 'Product 2',
        description: '13.3" Retina display, M1 chip with up to 16GB RAM, up to 2TB SSD, macOS, Thunderbolt 3 ports, sleek design.',
        price: 15.49,
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
    <h2 className="dashboard-heading">My Dashboard</h2>
    <div className="product-grid">
      {uploadedProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
);
};
export default MyDashboard;
