import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductoContext } from '../context/ProductosContext.js';

function CardProducto({productoCard}) {
    

    return (

                <div className="col pb-4 " key={productoCard.id}>
                     <div className="card cardProducto">
                     <img className="card-img-top imagenCampañas" src={productoCard.images[0]} alt="..." />
                     <div className="card-body">
                    <h5 className="card-title tituloCardCampañas mb-2">{productoCard.title}</h5>
                    <br/>
                    <br/>
                    <p className="card-text descripcionCardCampañas">{productoCard.description}</p>
                  </div>
                  <div className="card-footer text-right">
                  <Link to="/">
                      <button className="botonCampañas">
                        Ver más
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
           

    );
}

export default CardProducto;


