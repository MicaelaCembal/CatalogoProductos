import React, { createContext, useReducer, useEffect } from "react";

export const CarritoContext = createContext();

const initialState = [];

const AGREGAR_COMPRA = "[CARRITO] Agregar Compra";
const AUMENTAR_CANTIDAD_COMPRA = "[CARRITO] Aumentar Cantidad Compra";
const DISMINUIR_CANTIDAD_COMPRA = "[CARRITO] Disminuir Cantidad Compra";
const ELIMINAR_COMPRA = "[CARRITO] Eliminar Compra";

const CarritoProvider = (props) => {
  const almacenarStorageCarrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

  const comprasReducer = (state, action) => {
    switch (action.type) {
      case AGREGAR_COMPRA:
        return [...state, action.payload];
      case AUMENTAR_CANTIDAD_COMPRA:
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      case DISMINUIR_CANTIDAD_COMPRA:
        return state.map((item) =>
          item.id === action.payload && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
      case ELIMINAR_COMPRA:
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(
    comprasReducer,
    almacenarStorageCarrito
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(listaCompras));
  }, [listaCompras]);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    dispatch({ type: AGREGAR_COMPRA, payload: compra });
  };

  const aumentarCantidad = (id) => {
    dispatch({ type: AUMENTAR_CANTIDAD_COMPRA, payload: id });
  };

  const disminuirCantidad = (id) => {
    dispatch({ type: DISMINUIR_CANTIDAD_COMPRA, payload: id });
  };

  const eliminarCompra = (id) => {
    dispatch({ type: ELIMINAR_COMPRA, payload: id });
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
