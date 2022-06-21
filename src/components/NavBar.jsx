import React from "react";
import CartWidget from "./CartWidget";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  if (props.inHeader === true) {
    return (
      <nav className="navbar d-flex justify-content-center navbar-expand-lg navbar-dark bg-dark">
        <div className="container mx-5 justify-content-center">
          <Link to="/" className="navbar-brand">
            AudioFill
          </Link>
          <ul className="container-fluid navbar-nav mb-2 mb-lg-0 align-items-center">
            {/* <li className="nav-item p-2 col-lg-4 me-lg-auto ">
              <Link className="nav-link" to="/catalogo">
                Catálogo
              </Link>
            </li> */}
            <li className="nav-item p-2  ">
              <Link className="nav-link" to="/category/clothing">
                Clothing
              </Link>
            </li>
            <li className="nav-item p-2  ">
              <Link className="nav-link" to="/category/backpacks">
                Backpacks
              </Link>
            </li>
            <li className="nav-item p-2  me-lg-auto">
              <Link className="nav-link" to="/category/electronics">
                Electronics
              </Link>
            </li>
            
          </ul><Link to="carrito">
                <CartWidget />
              </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <footer className="d-flex justify-content-end gap-4 bg-secondary mt-5 p-2">
        <a
          className="text-decoration-none "
          id="link-ig"
          href="https://www.instagram.com/"
        >
          Instagram
        </a>
        <a
          className="text-decoration-none "
          id="link-lkdn"
          href="https://www.linkedin.com/"
        >
          LinkedIn
        </a>
        <a
          className="text-decoration-none"
          id="link-fb"
          href="https://www.facebook.com/"
        >
          Facebook
        </a>
      </footer>
    );
  }
};

export default NavBar;
