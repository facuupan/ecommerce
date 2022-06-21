import React from "react";
import {Link} from "react-router-dom";


const Item = ({ titulo, id, stock, imagen, precio }) => {
  return (
    <div className="col item">
      <div className="card shadow-sm" key={id}>
        <img src={imagen} className="card-img-top" alt={"foto " + titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <h2> {precio * 200} AR$</h2>
          <p className="card-text bg-light">Stock disponible: {stock}</p>
          <Link to={`/item/${id}`} className="btn btn-success">Detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
