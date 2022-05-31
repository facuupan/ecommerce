import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid mx-5 justify-content-center">
        <h1 class="navbar-brand">AudioFill</h1>
        <ul class="container-fluid navbar-nav me-lg-auto mb-2 mb-lg-0 justify-content-lg-around align-items-center">
          <li class="nav-item p-2 col-lg-4 me-lg-auto ">
            <a class="nav-link" href=".">
              Catálogo
            </a>
          </li>
          <li class="d-flex nav-item col-lg-4 offset-lg-4 align-items-lg-center justify-content-lg-center">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
