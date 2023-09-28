import { createContext } from "react";
import { useReducer } from "react";

export const CarritoContext = createContext();

const initialState = [];

const AGREGAR_COMPRA = "[CARRITO] Agregar Compra";
const AUMENTAR_CANTIDAD_COMPRA = "[CARRITO] Aumentar Cantidad Compra";
const DISMINUIR_CANTIDAD_COMPRA = "[CARRITO] Disminuir Cantidad Compra";
const ELIMINAR_COMPRA = "[CARRITO] Eliminar Compra";

const CarritoProvider = (props) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case AGREGAR_COMPRA:
        return [...state, action.payload];
      case AUMENTAR_CANTIDAD_COMPRA:
        return state.map((item) => {
          const cant = item.cantidad + 1;
          if (item.id === action.payload) return { ...item, cantidad: cant };
          return item;
        });
      case DISMINUIR_CANTIDAD_COMPRA:
        return state.map((item) => {
          const cant = item.cantidad - 1;
          if (item.id === action.payload && item.cantidad > 1)
            return { ...item, cantidad: cant };
          return item;
        });
      case ELIMINAR_COMPRA:
        return state.filter((compra) => compra.id !== action.payload);
      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: AGREGAR_COMPRA,
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: AUMENTAR_CANTIDAD_COMPRA,
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: DISMINUIR_CANTIDAD_COMPRA,
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: ELIMINAR_COMPRA,
      payload: id,
    };
    dispatch(action);
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
