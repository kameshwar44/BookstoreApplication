import React, { useContext } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../App";


function Navbar() {
  const { cartItems } = useContext(CartContext);

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
          Cart ({cartItems.length})
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
