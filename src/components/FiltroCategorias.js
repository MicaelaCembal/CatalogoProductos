import React from "react";
import PropTypes from "prop-types"; 

function FiltroCategorias({ categories, getProductsByCategories, getProducts }) {
  return (
    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
      <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-secondary dropdown-toggle coloresDropDown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filtrar Por Categoría
        </button>
        <div className="dropdown-menu estilosCategorias" aria-labelledby="btnGroupDrop1">
          {categories.map((categoria, index) => (
            <a key={index} className="dropdown-item categoriasItems" onClick={() => getProductsByCategories(categoria)}>
              {categoria}
            </a>
          ))}
          <a className="dropdown-item categoriasItems" onClick={() => getProducts()}>
            All
          </a>
        </div>
      </div>
    </div>
  );
}

FiltroCategorias.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  getProductsByCategories: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};

export default FiltroCategorias;
