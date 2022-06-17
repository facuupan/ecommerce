import React from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useState } from "react";
import CustomFetch from "./CustomFetch";
import { productos } from "./products";

const ItemListContainer = (props) => {
  const [products, setItems] = useState([]);

  useEffect(() => {
    CustomFetch(2000, productos)
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [products]);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="container-fluid text-center m-4  fs-1 text">
        {props.greetings}
      </h1>
      <section className="container-fluid d-flex flex-row">
        <ItemList items={products} className="row-cols-4" />
      </section>
    </div>
  );
};

export default ItemListContainer;
