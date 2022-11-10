import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import ErrorPage from "./Pages/ErrorPage"
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <Router>
    <Header />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/products" element={<Products />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
