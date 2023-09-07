import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductoContext } from '../context/ProductosContext.js';
import CardProducto from './CardProducto.js';


function ListarProductos({products}) {
    

    return (
        <div className="product" style={{ paddingTop: "100px" }}>
        <div className="row">
            {products.map((producto) => (
              <CardProducto productoCard={producto}/>
              
            ))}
              </div>
        </div>

    );
}

export default ListarProductos;


