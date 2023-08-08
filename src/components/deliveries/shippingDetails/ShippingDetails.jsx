import React, { useState } from 'react'
import '../deliveriesPage.css'

const ShippingDetails = () => {
    const [isShippingSameAsBilling, setIsShippingSameAsBilling] = useState(false);

    const toggleShippingSameAsBilling = () => {
        setIsShippingSameAsBilling((prevState) => !prevState);
      };
    
  return (
    <div>
        <div className="deliveries-contact_details">
            <h3>Contact Details</h3>
            <div className="deliveries-form-group">
              <label htmlFor="first_name">First Name:</label>
              <input type="text" id="first_name" />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="last_name">Last Name:</label>
              <input type="text" id="last_name" />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" />
            </div>
          </div>
          <div className="deliveries-shipping_details">
            <h3>Shipping Details</h3>
            <div className="deliveries-form-group">
              <label htmlFor="house_no">House No.:</label>
              <input
                type="text"
                id="house_no"
                disabled={isShippingSameAsBilling}
              />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                disabled={isShippingSameAsBilling}
              />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" disabled={isShippingSameAsBilling} />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="area">Area:</label>
              <input type="text" id="area" disabled={isShippingSameAsBilling} />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="postal_code">Postal Code:</label>
              <input
                type="text"
                id="postal_code"
                disabled={isShippingSameAsBilling}
              />
            </div>
            <div className="deliveries-form-group">
              <label htmlFor="landmark">Famous Landmark:</label>
              <input
                type="text"
                id="landmark"
                disabled={isShippingSameAsBilling}
              />
            </div>
            <div className="deliveries-form-group">
              <input
                type="checkbox"
                id="same_as_billing"
                checked={isShippingSameAsBilling}
                onChange={toggleShippingSameAsBilling}
              />
              <label id="deliveries-for-check-box" htmlFor="same_as_billing">
                My shipping and billing address are the same
              </label>
            </div>
          </div>
    </div>
  )
}

export default ShippingDetails