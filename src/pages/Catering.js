import React, { useContext, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Product from '../components/Product';
import CardProducto from '../components/CardProducto';
import { ProductoContext } from '../context/ProductosContext';
import FiltroCategorias from '../components/FiltroCategorias';
import { CategoriasContext } from '../context/CategoriasContext';

function Catering() {
  const { products,getProducts } = useContext(ProductoContext);
  const { categories,getCategorias } = useContext(CategoriasContext);

    useEffect(()=>{
      getProducts()
    },[])

    useEffect(()=>{
      getCategorias()
    },[])

  return (
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
   <FiltroCategorias categories={categories}/>
    <CardProducto products={products}/>
    </div>
  
  );
}

export default Catering;