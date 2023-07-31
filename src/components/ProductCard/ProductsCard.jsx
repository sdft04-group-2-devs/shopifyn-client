import React, { useState } from 'react';
import './ProductCard.css'; 

const ProductCard = ({ name, image, price, rating }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <button
        className={`like-button ${liked ? 'liked' : ''}`}
        onClick={toggleLike}
      >
        ❤️
      </button>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-rating">Star rating: {rating}</div>
        <div className="product-price">KSH {price}</div>
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
