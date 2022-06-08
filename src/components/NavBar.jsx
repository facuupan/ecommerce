import React from "react";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  if (props.inHeader === true) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid mx-5 justify-content-center">
          <h1 className="navbar-brand">AudioFill</h1>
          <ul className="container-fluid navbar-nav me-lg-auto mb-2 mb-lg-0 justify-content-lg-around align-items-center">
            <li className="nav-item p-2 col-lg-4 me-lg-auto ">
              <a className="nav-link" href=".">
                Catálogo
              </a>
            </li>
            <li className="d-flex nav-item col-lg-4 offset-lg-4 align-items-lg-center justify-content-lg-center">
              <a href="carrito">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <footer className="d-flex justify-content-center gap-4 navbar navbar-expand-lg bg-light">
        <a
          className="text-decoration-none text-reset"
          href="https://www.instagram.com/"
        >
          Instagram
        </a>
        <a
          className="text-decoration-none text-reset"
          href="https://www.linkedin.com/"
        >
          LinkedIn
        </a>
        <a
          className="text-decoration-none text-reset"
          href="https://www.facebook.com/"
        >
          Facebook
        </a>
      </footer>
    );
  }
};

export default NavBar;
