// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import SignUpPage from "../src/pages/SignUpPage";
import LogInPage from "../src/pages/LogInPage";
import LandingPage from "./pages/home/LandingPage";
import ProductView from "./components/productslist/productview/ProductView";
import ProductList from "./components/productslist/ProductList/ProductList";
import DeliveriesPage from "./components/deliveries/deliveriesPage";
import UpdateProfile from "./pages/profile/UpdateProfile";
import { ProductsContext } from "./contexts/ProductsContext";
import Cart from "./components/productslist/cart/Cart";
import NavBar from "./components/footer and header/navigation/NavBar";
import Footer from "./components/footer and header/Footer";
import Checkout from "./components/productslist/cart/checkout/Checkout";
import MyDashboard from "./pages/MyDashboard";
import UserProfile from './components/UserProfile/UserProfile';
import ProductUploadForm from "./pages/ProductUploadForm";
// import { useUser } from './contexts/UserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate()
  const [userId, setUserId] = useState(null)
  const [userRole, setUserRole] = useState(null);


  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/logged_in"); // Change this URL to the appropriate endpoint
        if (response.ok) {
          const user = await response.json();
          //setCurrentUser(user);

          let ssUser = sessionStorage.getItem("user");
          let userObj = JSON.parse(ssUser);
          setCurrentUser(userObj);
          // setUserName(userObj.username)
          setUserId(userObj.user.id);
          setUserRole(userObj.user.role);
          console.log("current user", typeof userObj, userObj);
          // for (const attribute in currentUser) {
          //   console.log(`${attribute}:`, currentUser[attribute]);
          // }
        } else {
          console.error("Failed to fetch current user");
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const isAuthenticated = currentUser !== null;

  const handleSearch = (searchTerm) => {
    const filteredList = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filteredList);
  };




  const handleCartClick = () => {
    // setShowCart(!showCart);
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      console.log("Login");
    }
  };


  console.log(userId);
  const renderNavBar = !['/signup', '/login', '/reset-password'].includes(window.location.pathname);

  return (
    <>
      {renderNavBar && (
        <NavBar
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          handleSearch={handleSearch}
          handleCartClick={handleCartClick}
          showCart={showCart}
          userRole={userRole}
        />
      )}
      <Routes>
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LogInPage />} />
        {/* <Route exact path="/reset-password" element={<} /> */}

        <Route
          exact
          path="/products"
          element={
            <ProductList
              products={products}
              isAuthenticated={isAuthenticated}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              handleSearch={handleSearch}
              handleCartClick={handleCartClick}
              showCart={showCart}
            />
          }
        />
        <Route exact path="/user-profile" element={<UpdateProfile />} />
        <Route exact path="/deliveries" element={<DeliveriesPage />} />
        <Route
          exact
          path="/products/:id"
          element={<ProductView currentUser={userId} setCurrentUser={setCurrentUser} />}
        />
        <Route exact path="/cart" element={<Cart currentUserId={userId} products={products} />} />
        <Route
          path="/"
          element={
            <LandingPage
              isAuthenticated={isAuthenticated}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              handleSearch={handleSearch}
              handleCartClick={handleCartClick}
              showCart={showCart}
              userRole={userRole}
            />
          }
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/seller/dashboard" element={<MyDashboard />} />
        <Route path="/seller/dashboard/product-upload" element={<ProductUploadForm />} />
        {/* ...other routes go here */}
      </Routes>

      <Footer />
    </>
  );
};
export default App;


