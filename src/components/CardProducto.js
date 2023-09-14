import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

function CardProducto({ productoCard }) {
  return (
    <div className="col pb-4" key={productoCard.id}>
      <div className="card cardProducto">
        <img className="card-img-top imagenCampañas" src={productoCard.images[0]} alt="..." />
        <div className="card-body">
          <h5 className="card-title tituloCardCampañas mb-2">{productoCard.title}</h5>
          <br />
          <br />
          <p className="card-text descripcionCardCampañas">{productoCard.description}</p>
        </div>
        <div className="card-footer text-right">
          <Link to={`/product/${productoCard.id}`}>
            <button className="botonCampañas">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

CardProducto.propTypes = {
  productoCard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProducto;
