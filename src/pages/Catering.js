import React, { useContext, useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import FiltroCategorias from '../components/FiltroCategorias';
import ListarProductos from '../components/ListarProductos';
import { ProductoContext } from '../context/ProductosContext';
import { CategoriasContext } from '../context/CategoriasContext';
import '../App.css';

function Catering() {
  const { products, getProducts, getProductsByCategories,getBuscarProductos } = useContext(ProductoContext);
  const { categories, getCategorias } = useContext(CategoriasContext);
  const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda
  
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    // Filtrar productos si hay texto de búsqueda, de lo contrario, mostrar todos los productos
    if (searchText) {
      getBuscarProductos(searchText);
    }
  }, [searchText]);

  const handleSearch = (searchText) => {
    setSearchText(searchText); // Actualizar el texto de búsqueda
  };

  return (
    <div className='margen-centralizado'>
      <div className='margen-superior'>
        <SearchBox onSearch={handleSearch} searchText={searchText} />
        <FiltroCategorias
          categories={categories}
          getProductsByCategories={getProductsByCategories}
          getProducts={getProducts}
        />
      </div>
      <ListarProductos products={products} />
    </div>
  );
}

export default Catering;
