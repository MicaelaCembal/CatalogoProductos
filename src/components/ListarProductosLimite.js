import React from 'react';
import CardProducto from './CardProducto.js';
import PropTypes from 'prop-types';

function ListarProductosLimite({ products }) {
  return (
    <div className='margen-centralizado'>
      <div className='margen-superiorLimite'> 
        <h2>PRODUCTS</h2>
      </div>

      <div className="product" style={{ paddingTop: "100px" }}>
        <div className="row">
          {products.map((producto) => (
            <CardProducto key={producto.id} productoCard={producto} />
          ))}
        </div>
      </div>
    </div>
  );
}

ListarProductosLimite.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListarProductosLimite;
