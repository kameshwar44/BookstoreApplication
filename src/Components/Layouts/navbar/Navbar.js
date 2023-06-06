import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section className="navbar-container">
      <Link to="/" className="logo">
        Books<span className="text-primary">Pedia</span>
      </Link>
      <div className="container">
        <Link to="/" className="Home">
          Home
        </Link>
        <Link to="/Books" className="cart-link">
          All Books
        </Link>
        <Link to="/cart" className="cart-link">
          Cart
        </Link>
        <Link to="/login" className="cart-link">
          Login
        </Link>
        <Link to="/signup" className="cart-link">
          Signup
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
