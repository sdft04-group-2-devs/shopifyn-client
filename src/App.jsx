// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';
import './App.css';
import SignUpPage from '../src/pages/SignUpPage'
import LogInPage from '../src/pages/LogInPage'
import LandingPage from './pages/home/LandingPage';
import ProductView from './components/productslist/productview/ProductView';
import ProductList from './components/productslist/ProductList/ProductList';
import DeliveriesPage from './components/deliveries/deliveriesPage';
import UpdateProfile from './pages/profile/UpdateProfile';
import MyDashboard from "./pages/MyDashboard";
import ProductUploadForm  from "./pages/ProductUploadForm";
import { ProductsContext } from './contexts/ProductsContext';
import Cart from './components/productslist/cart/Cart';
// import { useUser } from './contexts/UserContext';


<<<<<<< HEAD
=======

>>>>>>> 6d80e98b4e41eef88cac4f5a947873196af3c786
const App = () => {
  // const user = useUser()
  const [currentUser, setCurrentUser] = useState(null);
  const {products} = useContext(ProductsContext)
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate()
  

  console.log(products);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/logged_in'); // Change this URL to the appropriate endpoint
        if (response.ok) {
          const user = await response.json();
          //setCurrentUser(user);

          let ssUser = sessionStorage.getItem("user")
          let userObj = JSON.parse(ssUser)
          setCurrentUser(userObj)
          console.log('current user', typeof(userObj),currentUser);
        } else {
          console.error('Failed to fetch current user');
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const isAuthenticated = currentUser !== null

  const handleSearch = (searchTerm) => {
    
    const filteredList = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filteredList);
};

const handleCartClick = () => {
  // setShowCart(!showCart);
  if (isAuthenticated) {
    navigate('/cart')
  } else {
    console.log('Login');
  }
  
};

  
  console.log(`${isAuthenticated}`,currentUser)
  // console.log('The User is:',user);

  return (
    <Routes>
        <Route exact path="/signup" element={<SignUpPage/>} />
        <Route exact path="/login" element={<LogInPage/>} />
        <Route exact path="/products" element={<ProductList products={products} isAuthenticated={isAuthenticated} currentUser={currentUser} setCurrentUser={setCurrentUser} handleSearch={handleSearch} handleCartClick={handleCartClick} showCart={showCart}/>}/>
        <Route exact path='/user-profile' element= {<UpdateProfile />} />
        <Route exact path='/deliveries' element= {<DeliveriesPage />} />
<<<<<<< HEAD
        <Route exact path='/product-view' element= {<ProductView />} />
        <Route exact path="/my-dashboard" element={<MyDashboard />} />
        <Route exact path="/upload-product" element={<ProductUploadForm />} />
        <Route path='/' element= {<LandingPage />} />
=======
        <Route exact path="/my-dashboard" element={<MyDashboard />} />
        <Route exact path="/upload-product" element={<ProductUploadForm />} />
>>>>>>> 6d80e98b4e41eef88cac4f5a947873196af3c786
        <Route exact path='/products/:id' element= {<ProductView currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route path='/' element= {<LandingPage isAuthenticated={isAuthenticated} currentUser={currentUser} setCurrentUser={setCurrentUser} handleSearch={handleSearch} handleCartClick={handleCartClick} showCart={showCart} />} />
        {/* ...other routes of your app */}
    </Routes>
  );
};
export default App;
