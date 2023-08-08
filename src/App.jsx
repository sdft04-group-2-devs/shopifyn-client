// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import SignUpPage from '../src/pages/SignUpPage'
import LogInPage from '../src/pages/LogInPage'
import LandingPage from './pages/home/LandingPage';
import ProductView from './components/productslist/productview/ProductView';
import ProductList from './components/productslist/ProductList/ProductList';
import DeliveriesPage from './components/deliveries/deliveriesPage';
import UpdateProfile from './pages/profile/UpdateProfile';
import { UserContext } from './contexts/UserContext';


const App = () => {
  const {user} = useContext(UserContext)

  console.log(user);
  return (
    <Routes>
        <Route exact path="/signup" element={<SignUpPage/>} />
        <Route exact path="/login" element={<LogInPage/>} />
        <Route exact path="/products" element={<ProductList/>}/>
        <Route exact path='/user-profile' element= {<UpdateProfile />} />
        <Route exact path='/deliveries' element= {<DeliveriesPage />} />
        <Route exact path='/products/:id' element= {<ProductView />} />
        <Route path='/' element= {<LandingPage />} />
        {/* ...other routes of your app */}
    </Routes>
  );
};
export default App;
