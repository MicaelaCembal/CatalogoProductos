import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contacto from './components/Contacto';
import Catering from './pages/Catering';
import ProductoProvider from './context/ProductosContext';
import CategoriaProvider from './context/CategoriasContext';
import CarritoProvider from './context/CarritoContext';
import './App.css';
import DetalleProducto from './pages/DetalleProducto';
import { Carrito } from './pages/Carrito';


const App = () => {
  return (     
    <CarritoProvider>
    <CategoriaProvider>  
    <ProductoProvider>
    <BrowserRouter>
    
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>          
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/catering" element={<Catering />}></Route>
          <Route path="/product/:id" element={<DetalleProducto/>}></Route>
          <Route path="/carrito" element={<Carrito></Carrito>}></Route>
	      </Route>
       </Routes>
     </BrowserRouter> 
     </ProductoProvider>   
     </CategoriaProvider>  
     </CarritoProvider> 
  );
};

export default App;
