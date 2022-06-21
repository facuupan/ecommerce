import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return productos.map((p) => <Item key={p.id} {...p} />)
};

export default ItemList;
