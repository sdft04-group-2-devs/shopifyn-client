
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import './App.css';
const App = () => {
  return (
    <Routes>
        <Route exact path="/signup" element={<SignUpPage/>} />
        <Route exact path="/login" element={<LogInPage/>} />
        <Route exact path="/products" element={<ProductList/>}/>
        {/* ...other routes of your app */}
    </Routes>
  );
};
export default App;
