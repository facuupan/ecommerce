import React from "react";

const ItemDetail = ({item}) => {
    
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image}
            className="img-fluid rounded-start"
            alt={"Foto " + item.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">
              <small className="text-muted">{item.category}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
