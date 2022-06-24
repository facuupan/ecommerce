import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    setContador(0);
  };

  return (
    <div className="d-flex align-items-center flex-column m-2">
      <div className="d-flex  m-2">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={resetCount}
        >
          Vaciar
        </button>
      </div>
      <div className="d-flex gap-2 ">
        <button className="btn btn-danger" onClick={disminuirContador}>
          -
        </button>
        <p className="text-center m-0 fw-semibold">Unidades: {contador}</p>
        <button className="btn btn-primary" onClick={aumentarContador}>
          +
        </button>
      </div>
      <Link
        to="/carrito"
        className="btn btn-success my-2"
        onClick={ConfirmCompra}
      >
        Agregar al carrito
      </Link>
    </div>
  );
};

export default ItemCount;
