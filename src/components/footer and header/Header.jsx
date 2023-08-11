import { Chip } from "@mui/material";
import React from "react";
import './Header.css';

const Header = () => {
  // const handleCategoryClick = (category) => {
  //   if (category === "all") {
  //     setFilteredProducts(products);
  //   } else {
  //     const filteredList = products.filter(
  //       (product) => product.category === category
  //     );
  //     setFilteredProducts(filteredList);
  //   }
  // };
  return (
    <div>
      <header className="category-buttons">
        <button className="category-button">All</button>
        <button className="category-button">Laptop</button>
        <button className="category-button">Desktops</button>
        <button className="category-button">Woofers</button>
        <button className="category-button">Phones</button>
      </header>
    </div>
  );
};

export default Header;
