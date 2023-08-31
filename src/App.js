import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contacto from './components/Contacto';
import Catering from './pages/Catering';
import ViewDeliveryMenu from './components/ViewDeliveryMenu';
import productosContext from './context/productosContext.js';
import axios from 'axios';
import './App.css';


const App = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listar();
}, []);

  const CargarProductos = {
    productos,
  };

const listar = () => {
    axios.get('https://dummyjson.com/products')
        .then((result) => {
            const productos = result.data.products;
            console.log(productos);
            setProductos(productos);

        })

}

  return (    
    <productosContext.Provider value={productos}>
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
     </productosContext.Provider >           
  );
};

export default App;
