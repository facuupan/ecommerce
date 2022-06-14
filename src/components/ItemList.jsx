import React from "react";
import Item from "./Item";

const ItemList = ({ recetas }) => {
  return recetas.map((r) => (
    <Item 
      id={r.id}
      titulo={r.titulo} 
      descripcion={r.descripcion} 
      key={r.id}
      stock={r.stock}
      />
  ));
};

export default ItemList;
