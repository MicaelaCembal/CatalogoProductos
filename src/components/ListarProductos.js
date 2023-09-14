import React from 'react';
import CardProducto from './CardProducto.js';
import PropTypes from 'prop-types'; 

function ListarProductos({ products }) {
  return (
    <div className="product" style={{ paddingTop: "100px" }}>
      <div className="row">
        {products.map((producto) => (
          <CardProducto key={producto.id} productoCard={producto} />
        ))}
      </div>
    </div>
  );
}

ListarProductos.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListarProductos;
