import React, {useContext} from 'react';
import CardProducto from './CardProducto.js';
import PropTypes from 'prop-types';
import { CarritoContext } from '../context/CarritoContext';

function ListarProductosLimite({ products }) {
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)
  const handleAgregar = (compra) =>{
    agregarCompra(compra)
  }
  const handleQuitar = (id) =>{
    eliminarCompra(id)
  }
  return (
    <div className='margen-centralizado'>
      <div className='margen-superiorLimite'> 
        <h2>PRODUCTS</h2>
      </div>

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
    </div>
  );
}

ListarProductosLimite.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListarProductosLimite;
