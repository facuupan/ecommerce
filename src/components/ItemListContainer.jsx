import React from "react";

const ItemListContainer = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="container-fluid text-center mt-4 fs-1 text">
        {props.greetings}
      </h1>
    </div>
  );
};

export default ItemListContainer;
