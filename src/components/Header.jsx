import React from "react";
import CartWidget from "./CartWidget";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar d-flex justify-content-center navbar-expand-lg navbar-dark bg-dark">
      <div className="container mx-5 justify-content-center">
        <Link to="/" className="navbar-brand">
          AudioFill
        </Link>
        <ul className="container-fluid navbar-nav mb-2 mb-lg-0 align-items-center p-0">
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
        </ul><Link className="nav-link" to="/carrito"><CartWidget/></Link>
        
      </div>
    </nav>
  );
};

export default Header;
