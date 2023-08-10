/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./deliveriesPage.css";
import ShippingDetails from "./shippingDetails/ShippingDetails";
import DeliverySelection from "./deliverySelection/DeliverySelection";
import PaymentSection from "./payments/PaymentSection";
import { useLocation } from "react-router";
//import mailjet from 'node-mailjet';


//const mailjetClient = mailjet.connect('352bb8e0120c8880cdd76d3ad2d16a82', 'fd0e850b2a461f5746571bcc796551f0');

const DeliveriesPage = () => {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const location = useLocation()
  const {product} = location.state || {}
  console.log(product);

  const [activeStep, setActiveStep] = useState(1);
  const [buttonText, setButtonText] = useState("Proceed to Delivery");

  const proceed = () => {
    setActiveStep(activeStep + 1);
  };

  const goBack = () => {
    setActiveStep(activeStep - 1);
  };

  const toggleDetails = () => {
    setIsDetailsExpanded((prevState) => !prevState);
  };

  const steps = [
    {
      label: "Shipping",
      step: 1,
    },
    {
      label: "Delivery",
      step: 2,
    },
    {
      label: "Payment",
      step: 3,
    },
  ];

  const totalSteps = steps.length;

  const progressStepper = steps.map(({ step, label }) => (
    <div className="deliveries-page-step-wrapper" key={step}>
      <div
        className={`deliveries-page-step-style ${
          activeStep >= step ? "completed" : "incomplete"
        }`}
      >
        {activeStep > step ? (
          <div className="deliveries-page-checkmark">✓</div>
        ) : (
          <span className="deliveries-page-step-count">{step}</span>
        )}
      </div>
      <div className="deliveries-page-step-label-container">
        <span className="deliveries-page-step-label">{label}</span>
      </div>
    </div>
  ));

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <div className="deliveries_page">
      <div className="deliveries-page-product-container">
        <div className="deliveries-page-image-gallery">
          <div className="deliveries-page-main-image">
            <img
              src={product.image_url_1}
              alt="Product"
            />
          </div>
          <div className="deliveries-page-thumbnail-images">
            <img
              src={product.image_url_1}
              alt="Product Thumbnail"
            />
            <img
              src={product.image_url_2}
              alt="Product Thumbnail"
            />
            <img
              src={product.image_url_3}
              alt="Product Thumbnail"
            />
          </div>
        </div>
        <div className="deliveries-page-product-details">
          <h2 className="deliveries-page-product-name">{product.name}</h2>
          <h3 className="deliveries-page-product-brand">{product.brand}</h3>
          <div className="deliveries-page-quantity-setting">
            <h3>Quantity:</h3>
            <div className="deliveries-page-add-or-reduce-quantity">
              <button>-</button>
              <h5>1</h5>
              <button>+</button>
            </div>
          </div>
          <h3 className="deliveries-page-product-price">Price: Ksh. 40,000</h3>
          <button className="deliveries-page-details-toggle" onClick={toggleDetails}>
            {isDetailsExpanded ? "Hide Details" : "More Details"}
          </button>
        </div>
        {isDetailsExpanded && (
          <div className="deliveries-page-product-description">
            <h3 className="deliveries-page-description-heading">Description</h3>
            <p>
            {product.description}
            </p>
          </div>
        )}
      </div>
      <div className="deliveries-page-mainContainer">
        <div className="deliveries-page-step-container" >{progressStepper}</div>

        <div className="deliveries-page-details">
          {activeStep === 1 ? (
            <ShippingDetails />
          ) : activeStep === 2 ? (
            <DeliverySelection />
          ) : (
            <PaymentSection />
          )}
        </div>
        <div className="deliveries-page-step-buttons-container">
          {activeStep > 1 && (
            <button className="deliveries-page-back-button" onClick={goBack}>
              Back
            </button>
          )}
          <button
            className="deliveries-page-proceed-button"
            onClick={proceed}
            disabled={activeStep === totalSteps + 1}
          >
            {activeStep === 1
              ? "Proceed to Delivery"
              : activeStep === 2
              ? "Proceed to Payment"
              : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveriesPage;
