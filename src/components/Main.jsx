import React from "react";
import { Routes, Route } from "react-router-dom";
import Carrito from "./Cart";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/Carrito" element={<Carrito />} />
    </Routes>
  );
};

export default Main;
