import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoriasContext = createContext();

const CategoriaProvider = (props) => {
  const [categories, setCategorias] = useState([]);

  const getCategorias = ()=>{
    axios.get('https://dummyjson.com/products/categories')
      .then((result) => {
        const categories = result.data;
        console.log(categories);
        setCategorias(categories);
      });
  }

  return (
    <CategoriasContext.Provider value={{ 
        categories,
        getCategorias 
      }}>
      {props.children}
    </CategoriasContext.Provider>
  );
}

export default CategoriaProvider;
