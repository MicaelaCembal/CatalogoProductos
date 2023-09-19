import React, {useContext} from 'react';
import CardProducto from './CardProducto.js';
import PropTypes from 'prop-types'; 
import { CarritoContext } from '../context/CarritoContext';

function ListarProductos({ products }) {
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) =>{
    agregarCompra(compra)
  }
  const handleQuitar = (id) =>{
    eliminarCompra(id)
  }
  return (
    <div className="product" style={{ paddingTop: "100px" }}>
      <div className="row">
        {products.map((producto) => (
          <CardProducto key={producto.id} productoCard={producto} 
          handleAgregar={() => handleAgregar(producto)}
        handleQuitar={() => handleQuitar(producto.id)}
          />
        ))}
      </div>
    </div>
  );
}

ListarProductos.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListarProductos;
