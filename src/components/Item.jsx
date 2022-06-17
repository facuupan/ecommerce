import React from "react";
import ItemCount from "./ItemCount";

const Item = ({titulo, descripcion, id, stock,imagen}) => {
    
    return (
    <div className="d-flex justify-center card col m-3 text-center" key={id}>
      <img src={imagen} className="card-img-top" alt={"foto " + titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text bg-light">Stock disponible: {stock}</p>
        <ItemCount stock={stock}/>
      </div>
    </div>
  );
};

export default Item;
