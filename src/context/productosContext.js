import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductoContext = createContext()

const ProductoProvider = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = ()=>{
    axios.get('https://dummyjson.com/products')
      .then((result) => {
        const products = result.data.products;
        console.log(products);
        setProducts(products);
      });
  }
  const getProductsByCategories = (categoria)=>{
    axios.get('https://dummyjson.com/products/category/'+ categoria)
      .then((result) => {
        const products = result.data.products;
        console.log(products);
        setProducts(products);
      });
  }

  const getProductsLimit = (numero)=>{
    axios.get('https://dummyjson.com/products?limit=' + numero)
      .then((result) => {
        const products = result.data.products;
        console.log(products);
        setProducts(products);
      });
  }

  const getBuscarProductos=(buscar)=>{
    axios.get('https://dummyjson.com/products/search?q=' + buscar)
    .then((result) => {
      const products = result.data.products;
      console.log(products);
      setProducts(products);
    });
  }

  const getBuscarUnProducto = (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
      .then((result) => {
        const producto = result.data;
        console.log(producto);
        return producto; 
      });
  }
  
  return (
    <ProductoContext.Provider value={{ 
      products,
      getProducts, 
      getProductsByCategories,
      getProductsLimit,
      getBuscarProductos,
      getBuscarUnProducto 
      }}>
      {props.children}
    </ProductoContext.Provider>
  );
}

export default ProductoProvider;
