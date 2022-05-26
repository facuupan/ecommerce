import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <h1 class="navbar-brand">Audiófilos</h1>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Catálogo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Carrito</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
