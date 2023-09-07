import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductoContext } from '../context/ProductosContext.js';
import CardProducto from './CardProducto.js';


function ListarProductosLimite({products}) {

  


    return (
    
        <div className='margen-centralizado'>
               <div className='margen-superiorLimite'> 
             <h2>PRODUCTS</h2>
             </div>

        <div className="product" style={{ paddingTop: "100px" }}>
        <div className="row">
            {products.map((producto) => (
              <CardProducto productoCard={producto}/>
              
            ))}
              </div>
        </div>
        </div>

    );
}

export default ListarProductosLimite;


