import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./contexts/ProductsContext.jsx"
// import { AuthProvider } from "./contexts/AuthContext.jsx";
// import { UserProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>
    // {/* <UserProvider> */}
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
      // {/* </UserProvider> */}
  // </AuthProvider>
);
