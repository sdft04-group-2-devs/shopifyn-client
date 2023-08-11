import React, { useEffect, useState } from "react";
import "./ProductView.css";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../footer and header/Footer";
import NavBar from "../../footer and header/navigation/NavBar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { PlusIcon, StarIcon } from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";


const ProductView = ({currentUser, setCurrentUser}) => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [product, setProduct] = useState([]);
  const [comment, setComment] = useState("");
  const [ratings, setRatings] = useState([]);
  const params = useParams();
  const navigate = useNavigate()
  

  

  

  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.id}`)
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setProduct(data);
            setRatings(data.reviews)
            console.log("product:", data);
          });
        } else {
          console.error("Error:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleQuantityChange = (action) => {
    if (action === '+') {
      setQuantity(quantity + 1);
    } else if (action === '-' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const total = product.price * quantity;

  const handleBuyNowClick = () => {
    navigate('/deliveries', {state: {product, quantity}})
  };

  const handleAddToCartClick = async () => {
    
    try {
      const response = await fetch('http://localhost:3000/cart_items', {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          product_id: product.id, // Assuming you have a unique ID for products
          quantity: quantity,
        }),
      });
      if (response.ok) {
        console.log(`Adding ${quantity} product(s) to cart...`);
      } else {
        console.error('Error:', response.status);
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmitRating = () => {
    // console.log(`Adding ${quantity} product(s) to cart...`);
      const ratingData = {
      comment: comment,
      star_rating: rating,
      user_id: currentUser,
      product_id: product.id,
  };

  fetch("http://[::1]:3000/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ratingData),
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setRatings([...ratings, data]);
          setRating(0);
          setComment("");
        });
      } else {
        console.error("Error:", response.status);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

  const handleReviewRatingChange = (newRating) => {
    console.log(`User rated the product: ${newRating} stars`);
    setRating(newRating);
  };

  const toggleDetails = () => {
    setIsDetailsExpanded((prevState) => !prevState);
  };
  

  const calculateAverageRating = () => {
    const totalRatings = ratings.length;
    const totalStarRating = ratings.reduce((sum, rating) => sum + rating.star_rating, 0);
    const averageRating = totalStarRating / totalRatings;
    return averageRating.toFixed(1);
  };

  return (
    <>
      <NavBar />
      <div className="product-view-container">
        <div className="product-view-image-gallery">
          <div className="product-view-main-image">
            <img src={product.image_url_1} alt="Product" />
          </div>
          <div className="product-view-thumbnail-images">
            <img src={product.image_url_1} alt="Product Thumbnail" />
            <img src={product.image_url_2} alt="Product Thumbnail" />
            <img src={product.image_url_3} alt="Product Thumbnail" />
          </div>
        </div>
        <div className="product-view-product-details">
          <h2 className="product-view-product-name">{product.name}</h2>
          <h3 className="product-view-product-brand">{product.brand}</h3>
          <div className="product-view-quantity-setting">
            <h3>Quantity:</h3>
            <div className="product-view-add-or-reduce-quantity">
            <button
                onClick={() => {
                  handleQuantityChange('-');
                }}
        className="product-view-reduce-btn"
      >
        -
      </button>
              <h5>{quantity}</h5>
              
              <button
                onClick={() => {
                  handleQuantityChange('+')
                }}
                className="product-view-reduce-btn"
              >
                +
              </button>
      

            </div>
          </div>
          <h3 className="product-view-product-price">
            Price: Ksh. {product.price}
          </h3>
          <h4 className="product-view-total-price">
            Total Price: Ksh. {total}
          </h4>

          <div className="product-view-buttons">
            <button onClick={handleBuyNowClick} className="product-view-buy-now-btn">Buy Now</button>
            <button onClick={handleAddToCartClick} className="product-view-add-to-cart-btn">
              Add to Cart
            </button>
          </div>
          <button
            className="product-view-details-toggle"
            onClick={toggleDetails}
          >
            {isDetailsExpanded ? "Hide Details" : "More Details"}
          </button>
        </div>
        {isDetailsExpanded && (
          <div className="product-view-product-description">
            <h3 className="product-view-description-heading">Description</h3>
            <p>{product.description}</p>
          </div>
        )}

        <div className="ratings-container">
          <div className="star-rating-average">
            Average Rating:
            <span>{" "}</span>
          
            {ratings.length > 0 ? (
              calculateAverageRating()
            ) : (
              <span>No ratings</span>
            )}
          </div>
          <div className="ratings-section">
            <li className="comments-section">
              {ratings.length > 0 ? (
                ratings.map((rating) => (
                  <div className="comment" key={rating.id}>
                    <div id="user-star-rating">user Ratings</div>
                    <p>{rating.comment}</p>
                    <div className="star-rating">
                      {[...Array(rating.star_rating)].map((_, index) => (
                        <StarIcon key={index} className={`star filled`} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p>No comments</p>
              )}
            </li>
          </div>
          <div className="add-rating-comment">
            <h4>Add Rating and Comment</h4>
            <div className="rating-section">
              <div id="user-star-rating">Your Rating:</div>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`star ${index < rating ? "filled" : ""}`}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
            </div>
            <div className="comment-section">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
              />
              <button onClick={handleSubmitRating}>Add comment</button>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
