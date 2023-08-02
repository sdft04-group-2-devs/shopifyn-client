// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import DeliveriesPage from './deliveries/deliveriesPage'
import './App.css';
import ProductList from './components/ProductList/ProductList';
const App = () => {
  return (
    <Routes>
        <Route exact path="/signup" element={<SignUpPage/>} />
        <Route exact path="/login" element={<LogInPage/>} />
        <Route exact path="/products" element={<ProductList/>}/>
        <Route path='/' element= {<DeliveriesPage />} />
        {/* ...other routes of your app */}
    </Routes>
  );
};
export default App;
