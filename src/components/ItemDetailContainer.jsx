import React from "react";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useEffect } from "react";
import { productos } from "./productos";
import { CustomFetch } from "./CustomFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const detalle = useParams();
  

  useEffect(() => {
    CustomFetch(2000, productos)
      .then((res) => setItem(res.find((item) => item.id === parseInt(detalle.id))))
      .catch((error) => console.log(error));
  }, [detalle]);

  return (
    <div>{item.id ? <ItemDetail detalle={item} /> : <div>Cargando...</div>}</div>
  );
};

export default ItemDetailContainer;

