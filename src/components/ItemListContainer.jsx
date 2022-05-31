import React from "react";

const ItemListContainer = (props) => {
  return (
    <h1 class="container-fluid text-center mt-4 fs-1 text">
      {props.greetings}
    </h1>
  );
};

export default ItemListContainer;
