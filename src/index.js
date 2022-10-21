import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Cart from "./Pages/Cart";
import ProductList from "./Pages/ProductList";
import WishList from './Pages/WishList';
import CheckOut from './Pages/CheckOut';
// import Navbar from './Components/Navbar';
import Product from './Pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/cart" exact element={<Cart />}/>
        <Route path="/wishlist" exact element={<WishList />}/>
        <Route path="/productList" exact element={<ProductList />}/>
        <Route path="/checkOut/:price" exact element={<CheckOut />}/>
        <Route path="/product/:id" exact element={<Product />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
