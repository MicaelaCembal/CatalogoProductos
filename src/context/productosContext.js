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

  return (
    <ProductoContext.Provider value={{ 
      products,
      getProducts 
      }}>
      {props.children}
    </ProductoContext.Provider>
  );
}

export default ProductoProvider;
