import { Chip } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="category-buttons">
        {/* <button className="category-button active">All</button> */}
        <Chip label="All" variant="outlined" />
        <Chip label="Laptops" variant="outlined" />
        <Chip label="Desktops" variant="outlined" />
        <Chip label="Woofers" variant="outlined" />
        <Chip label="Phones" variant="outlined" />
        {/* <button className="category-button">Laptop</button>
        <button className="category-button">Desktops</button>
        <button className="category-button">Woofers</button>
        <button className="category-button">Phones</button> */}
      </header>
    </div>
  );
};

export default Header;
