import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';


const DetalleProducto = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="detalle-producto">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default DetalleProducto;
