import React, { useContext, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Product from '../components/Product';
import CardProducto from '../components/CardProducto';
import { ProductoContext } from '../context/ProductosContext';
import FiltroCategorias from '../components/FiltroCategorias';
import { CategoriasContext } from '../context/CategoriasContext';
import ListarProductos from '../components/ListarProductos';
import '../App.css';

function Catering() {
  const { products,getProducts,getProductsByCategories } = useContext(ProductoContext);
  const { categories,getCategorias } = useContext(CategoriasContext);

    useEffect(()=>{
      getProducts()
    },[])

    useEffect(()=>{
      getCategorias()
    },[])

    return (
      <div className='margen-centralizado'>
        <div className='margen-superior'> {/* Aplica la clase CSS para el margen superior */}
          <FiltroCategorias categories={categories} getProductsByCategories={getProductsByCategories} getProducts={getProducts} />
        </div>
        <ListarProductos products={products} />
      </div>
    );
  }
  
  export default Catering;