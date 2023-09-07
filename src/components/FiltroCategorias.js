import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";


function FiltroCategorias({ categories }) {
  return (
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <div class="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        {categories.map((categoria, index) => (
            <a key={index} className="dropdown-item">
              {categoria}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiltroCategorias;
