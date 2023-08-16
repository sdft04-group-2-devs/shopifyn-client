import React, { useEffect, useState } from 'react';
import './Cart.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ setShowCart, currentUserId, products, handleCartClick }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate()

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Fetch product details for each cart item
  useEffect(() => {
    const fetchCartProducts = async () => {
      const fetchedProducts = await Promise.all(
        cartItems.map(async (itemId) => {
          const response = await fetch(`http://localhost:3000/products/${itemId}`);
          const productData = await response.json();
          return productData;
        })
      );
      setCartProducts(fetchedProducts);
    };

    fetchCartProducts();
  }, [cartItems]);

  // on click go to checkout page
  const handleToCheckout = () => {
    navigate('/checkout', {state: {cartProducts}})
  }

  // Calculate total price based on cartProducts
  const calculateTotalPrice = () => {
    const totalPrice = cartProducts.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    return totalPrice.toFixed(2);
  };

  const handleContinueShopping = ()=> {
    navigate('/products')
  }

  return (
    // <div>
    //   <section>
    //     <div className="cart-page">
    //       <div className="cart-container">
    //         <h2 className="cart-title">Shopping Cart</h2>
    //         <div className="cart-items">
    //           {cartProducts.map((product) => (
    //             <div className="cart-item" key={product.id}>
    //               <div className="item-image">
    //                 <img src={product.image_url_1} alt={product.name} />
    //               </div>
    //               <div className="item-details">
    //                 <h3>{product.name}</h3>
    //                 <p>Brand: {product.brand}</p>
    //                 <p>Price: Ksh.{product.price}</p>
    //                 {/* <button className="remove-button">Remove</button> */}
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //         <div className="cart-total">
    //           <p>Subtotal: Ksh.{calculateTotalPrice()}</p>
    //           <p>Shipping and taxes calculated at checkout.</p>
    //           <button className="checkout-button" onClick={handleToCheckout}>Checkout</button>
    //           <p className="continue-shopping">
    //             or <button className="continue-shopping-button" onClick={handleContinueShopping}>Continue Shopping</button>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div
    className="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                    onClick={()=> {setShowCart(false)}}
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul
                      role="list"
                      className="-my-6 divide-y divide-gray-200"
                    >
                      {cartProducts.map((item) => (
                        <li className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image_url_1}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">{item.name}</a>
                                </h3>
                                <p className="ml-4">Ksh.{item.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {item.brand}
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">Qty 1</p>

                              <div className="flex">
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>Ksh.{calculateTotalPrice()}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={handleCartClick}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cart;
