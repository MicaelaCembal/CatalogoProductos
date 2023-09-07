import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductoContext } from "../context/ProductosContext"; 
function FiltroCategorias({ categories, getProductsByCategories, getProducts }) {
  //const { getProductsByCategories } = useContext(ProductoContext); 



  
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
            <a  className="dropdown-item categoriasItems" onClick={() => getProducts()}>
              All
            </a>
        </div>
      </div>
    </div>
  );
}

export default FiltroCategorias;
