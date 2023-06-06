import React, { useContext } from "react";
import { CartContext } from "../../../App";
import "./CartItemCard.css";

function CartItemCard({ bookData }) {
  const { cartItems, setCartItems } = useContext(CartContext);
 
  const handleRemove = () => {         //For Removing the cart Items
    console.log(bookData.id);
    setCartItems(cartItems.filter((item) => item.id !== bookData.id));
  };
  return (
    <section className="cart-item">
    <div className="cart-item-img-container">
      <img
        src={bookData.book_url}
        alt="cart-item-img"
        className="cart-item-img"
      />
    </div>
    <div className="cart-item-content-container">
      <h2>{bookData.book_name}</h2>
      <p>{bookData.author_name}</p>
      <h3 className="cart-item-price">&#8377;{bookData.price}</h3>

      <button onClick={handleRemove} className="delete_btn">
        Remove from Cart
      </button>
    </div>
  </section>
  );
}

export default CartItemCard;
