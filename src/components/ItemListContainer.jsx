import React from "react";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect } from "react";
import fetchRecetas from "./recetasFetch";
import recetas from "./recetas";

function ItemListContainer(props) {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetchRecetas(2000, recetas)
    .then((res) => setItems(res));
  }, [items]);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="container-fluid text-center m-4  fs-1 text">
        {props.greetings}
      </h1>
      <section className="container-fluid d-flex flex-row">
        <ItemList recetas={items} className="row-cols-4"/>
      </section>
        
        {/* <ItemCount />       */}
    </div>
  );
}

export default ItemListContainer;
