// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ProductCard.css';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ name, image_url_1, price, rating }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    console.log(liked);
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="star">&#9733;</span>);
    }
    if (halfStar) {
      stars.push(<span key="half-star" className="star">&#9733;&#189;</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-star-${i}`} className="star">&#9734;</span>);
    }

    return stars;

  };

  return (
    <div className="product-card">
      <div className="image">
        <img src={image_url_1} alt={name} className="product-image" />
        <div className={`like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
          {liked ? '💚' : '🤍'}
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">Ksh. {price}</div>
        <div className="product-rating">
          {renderStars()} 
        </div>
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
