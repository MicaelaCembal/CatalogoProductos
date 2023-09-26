import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductoContext } from '../context/ProductosContext.js';
import '../App.css';

function DetalleProducto() {
  const { getBuscarUnProducto } = useContext(ProductoContext);
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getBuscarUnProducto(id)
      .then((producto) => {
        setProduct(producto);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del producto', error);
        setError(error);
        setLoading(false);
      });
  }, [getBuscarUnProducto, id]);

  if (loading) {
    return <div className='container'>Cargando...</div>;
  }

  if (error) {
    return <div className='container'>Error: {error.message}</div>;
  }

  if (!product) {
    return <div className='tamañoTextoDetalle'>Producto no encontrado</div>;
  }

  return (
    <div className="detalle-producto">
        <div className='margen-centralizado'>
      <div className='margen-superior'>
        <h2 className='textoDetalleTitulo'>{product.title}</h2>
      <img className='imagenCentrada' src={product.images[0]} alt={product.title} />
      <p className='textoDetalleDescripcion'>{product.description}</p>
    </div> </div> </div>
  );
}

export default DetalleProducto;
