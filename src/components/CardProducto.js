import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductoContext } from '../context/productosContext.js';

function CardProducto() {
    const { products } = useContext(ProductoContext);


    return (
        <div className="product" style={{ paddingTop: "100px" }}>
        <div className="row">
            {products.map((producto) => (
                <div className="col pb-4 " key={producto.id}>
                     <div className="card cardProducto">
                     <img className="card-img-top imagenCampañas" src={producto.images[0]} alt="..." />
                     <div className="card-body">
                    <h5 className="card-title tituloCardCampañas mb-2">{producto.title}</h5>
                    <br/>
                    <br/>
                    <p className="card-text descripcionCardCampañas">{producto.description}</p>
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
              
            ))}
              </div>
        </div>

    );
}

export default CardProducto;


