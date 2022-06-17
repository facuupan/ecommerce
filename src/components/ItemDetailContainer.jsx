import React from "react";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useEffect } from "react";
import { producto } from "./products";
import CustomFetch from "./CustomFetch";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    CustomFetch(2000, producto)
      .then((res) => setItem(res))
      .catch((error) => console.log(error));
  }, [item]);

  return (
    <div DetailContainer>
      <ItemDetail props={item} />
    </div>
  );
}

export default ItemDetailContainer;
