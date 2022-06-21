import React from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { CustomFetch } from "./CustomFetch";
import { productos } from "./productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const categoria = useParams();

  useEffect(() => {
    console.log(categoria);
    if (!categoria.id) {
      CustomFetch(2000, productos)
        .then((res) => setItems(res))
        .catch((error) => console.log(error));
    } else {
      CustomFetch(2000, productos)
        .then((res) =>
          setItems(res.filter((item) => item.category === categoria.id))
        )
        .catch((error) => console.log(error));
    }
  }, [categoria]);

  return (
    <div className="container-md mt-5">
      <section className="row row-cols-3 g-3">
        {items.length > 0 ? <ItemList productos={items} /> : <div>Cargando...</div>}
        
      </section>
    </div>
  );
};

export default ItemListContainer;
