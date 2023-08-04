import React, { useState } from "react";
import "./deliveriesPage.css";
import ShippingDetails from "./shippingDetails/ShippingDetails";
import DeliverySelection from "./deliverySelection/DeliverySelection";
import PaymentSection from "./payments/PaymentSection";

const DeliveriesPage = () => {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

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
              src="https://mcphilipsdigital.co.ke/wp-content/uploads/2021/04/c06528196.png"
              alt="Product"
            />
          </div>
          <div className="deliveries-page-thumbnail-images">
            <img
              src="https://marvelafrica.co.ke/wp-content/uploads/2021/05/Lenovo_V50t_13IMB_CT2_03.png"
              alt="Product Thumbnail"
            />
            <img
              src="https://smartbuy.co.ke/wp-content/uploads/2022/04/HP-290-G4-DESKTOP-i7-300x300.png"
              alt="Product Thumbnail"
            />
            <img
              src="https://complandshop.com/wp-content/uploads/2022/07/Compland-Dell-Vostro-3888-core-i3-4GB-1TB-Ubuntu-Desktop-with-19.5-inch-Monitor.png"
              alt="Product Thumbnail"
            />
          </div>
        </div>
        <div className="deliveries-page-product-details">
          <h2 className="deliveries-page-product-name">HP Desktop</h2>
          <h3 className="deliveries-page-product-brand">Brand: HP</h3>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              rerum ipsum cupiditate, aperiam quas voluptas porro deserunt illo
              praesentium. Laudantium provident excepturi harum ducimus, magni
              quia magnam voluptatibus aliquam omnis?
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
