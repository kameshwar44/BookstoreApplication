import React, { useContext } from "react";
import "./CartItemsContainer.css";
import { CartContext } from "../../../App";
import CartItemCard from './../../Cards/Cart-Item-Card/CartItemCard';
function CartItemsContainer() {

  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <section className="cart-items-container">
      <div className="container">
        (
        <>
          <h2>Cart</h2>

          {cartItems.map((item) => (
            <CartItemCard key={item.id} bookData={item} />
          ))}

          <h2>Total Amount = &#8377;{totalAmount}</h2>

          
        </>
        )
      </div>
    </section>
  );
}

export default CartItemsContainer;
