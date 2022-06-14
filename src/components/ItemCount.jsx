import React from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const resetCount = () => setContador(0);
  const ConfirmCompra = () => {
    alert(`Has comprado ${contador} unidades de este producto`);
    setContador(0);
  };

  return (
    <div className="d-flex flex-column m-2">
      <div className="d-flex justify-content-evenly m-2">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={resetCount}
        >
          Vaciar
        </button>
      </div>
      <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-danger" onClick={disminuirContador}>
          -
        </button>
        <p className="text-center m-0 fw-semibold">Cantidad: {contador}</p>
        <button className="btn btn-primary" onClick={aumentarContador}>
          +
        </button>
      </div>
      <button className="btn btn-success my-2" onClick={ConfirmCompra}>
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
