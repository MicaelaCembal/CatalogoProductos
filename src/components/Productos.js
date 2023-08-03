import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';


const Productos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredProducts = products.filter((product) => {
    const searchTermRegex = new RegExp(searchTerm, 'i');
    const categoryRegex = new RegExp(categoryFilter, 'i');
    return searchTermRegex.test(product.name) && categoryRegex.test(product.category);
  });

  return (
    <div className="productos">
      <h2>Productos</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar productos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Add category filter */}
      </div>
      <div className="productos-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-details">
              <p>${product.price}</p>
              <Link to={`/detalle-producto/${product.id}`}>
                <button>Ver detalle</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
