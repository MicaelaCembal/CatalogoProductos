import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contacto from './components/Contacto';
import Catering from './pages/Catering';
import ViewDeliveryMenu from './components/ViewDeliveryMenu';
import ProductoProvider from './context/productosContext';
import axios from 'axios';
import './App.css';


const App = () => {
  return (    
    <ProductoProvider>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>          
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/catering" element={<Catering />}></Route>
          <Route path="/ViewDeliveryMenu" element={<ViewDeliveryMenu />}></Route>
	      </Route>
       </Routes>
     </BrowserRouter> 
     </ProductoProvider>    
  );
};

export default App;
