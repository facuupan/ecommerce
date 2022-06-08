import React from "react";
import { useState } from "react";

const ItemListContainer = (props) => {
  const [contador, setContador] = useState(0);
  const aumentarContador = (cantidad) => setContador(contador + cantidad);
  const disminuirContador = (cantidad) => {
    if (contador <= 0) {
    }else{
    setContador(contador - cantidad);
  };}
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="container-fluid text-center mt-4 fs-1 text">
        {props.greetings}
      </h1>
      <div className="d-inline-flex flex-column">
        <p className="text-center">Contador: {contador}</p>
        <div className="d-flex gap-2">
          <button onClick={() => aumentarContador(1)}>Aumentar</button>
          <button onClick={() => disminuirContador(1)}>Disminuir</button>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
