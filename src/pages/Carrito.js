import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const Carrito = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);

  const calcularSubtotal = (item) => {
    return (item.price * item.cantidad).toFixed(2);
  };

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const handleImpresion = () => {
    console.log("COMPRAR");
  };

  return (
    <>
      <div className="margen-centralizado">
        <div className="margen-superior">
          <table className="table medidaTabla">
            <thead>
              <tr>
                <th scope="col" className="tablaCampos">
                  Nombre
                </th>
                <th scope="col" className="tablaCampos">
                  Precio
                </th>
                <th scope="col" className="tablaCampos">
                  Cantidad
                </th>
                <th scope="col" className="tablaCampos">
                  Subtotal
                </th>
                <th scope="col" className="tablaCampos">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {listaCompras.map((item) => (
                <tr key={item.id}>
                  <th className="tablaCamInfo">{item.title}</th>
                  <td className="tablaCamInfo">${item.price}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary tablaCamInfo"
                      onClick={() => disminuirCantidad(item.id)}
                    >
                      -
                    </button>
                    <button className="btn btn-primary tablaCamInfo">
                      {item.cantidad}
                    </button>
                    <button
                      className="btn btn-outline-primary tablaCamInfo"
                      onClick={() => aumentarCantidad(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td className="tablaCamInfo">
                    ${calcularSubtotal(item)}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger tablaCamInfo"
                      onClick={() => eliminarCompra(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                <th className="tablaCampos">TOTAL:</th>
                <td></td>
                <td></td>
                <td className="tablaCampos">${calcularTotal()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="d-grid gap-2">
            <button
              className="botonCarritoComprar"
              onClick={handleImpresion}
              disabled={listaCompras.length < 1}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
