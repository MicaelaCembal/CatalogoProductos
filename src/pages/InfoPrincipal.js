import ViewDeliveryMenu from '../components/ViewDeliveryMenu';
import Main from '../components/Main';
import KeyPoints from '../components/KeyPoints';
import Team from '../components/Team';
import ListarProductosLimite from '../components/ListarProductosLimite';
import React, { useContext, useEffect } from 'react';
import { ProductoContext } from '../context/ProductosContext.js';
const InfoPrincipal = () => {


const { products, getProductsLimit } = useContext(ProductoContext);

useEffect(()=>{
  getProductsLimit(4);

},[])
  return (
    <div>
      <ViewDeliveryMenu/>
     <Main/>
      <ListarProductosLimite products={products} />
     <KeyPoints/>
     <Team/>
    </div>
  );
};

export default InfoPrincipal;
