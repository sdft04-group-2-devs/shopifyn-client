// import { Chip } from "@mui/material";
// import React from "react";
// import './Header.css';

// // const Header = ({setFilteredProducts, products}) => {
// //   const handleCategoryClick = (category) => {
    
// //     if (category === "all") {
// //       setFilteredProducts(products);
// //     } else {
// //       const filteredList = products.filter(
// //         (product) => product.category === category
// //       );
// //       setFilteredProducts(filteredList);
// //     }
// //   };
// //   return (
// //   <div>
// //         <header className="category-buttons">
// //           <button className="category-button" onClick={() => handleCategoryClick('all')}>All</button>
// //           <button className="category-button" onClick={() => handleCategoryClick('laptops')}>Laptops</button>
// //           <button className="category-button" onClick={() => handleCategoryClick('desktops')}>Desktops</button>
// //           <button className="category-button" onClick={() => handleCategoryClick('woofers')}>Woofers</button>
// //           <button className="category-button" onClick={() => handleCategoryClick('phones')}>Phones</button>
// //         </header>
// //   </div>
// //   );
// // };

// // export default Header;
// const Header = ({ setFilteredProducts, products }) => {
//   const handleCategoryClick = (category) => {
//     if (!products || !setFilteredProducts) {
//       return;
//     }

//     if (category === "all") {
//       setFilteredProducts(products);
//     } else {
//       const filteredList = products.filter(
//         (product) => product.category === category
//       );
//       setFilteredProducts(filteredList);
//     }
//   };

//   return (
//     <div>
//       <header className="category-buttons">
//         <button className="category-button" onClick={() => handleCategoryClick('all')}>All</button>
//         <button className="category-button" onClick={() => handleCategoryClick('laptops')}>Laptops</button>
//         <button className="category-button" onClick={() => handleCategoryClick('desktops')}>Desktops</button>
//         <button className="category-button" onClick={() => handleCategoryClick('woofers')}>Woofers</button>
//         <button className="category-button" onClick={() => handleCategoryClick('phones')}>Phones</button>
//       </header>
//     </div>
//   );
// };

// export default Header;
