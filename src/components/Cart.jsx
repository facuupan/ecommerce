import React, { useContext } from "react";
import { contexto } from "../CartContext";

const Carrito = () => {

  const context = useContext(contexto)
  console.log(context)

  return <h1 className="title text-center">Carrito</h1>;
};

export default Carrito;
