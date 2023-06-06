import React, { useContext } from "react";
import "./CartItemsContainer.css";
import { CartContext } from "../../../App";
import CartItemCard from "./../../Cards/Cart-Item-Card/CartItemCard";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router";
import "./CartItemsContainer.css";

function CartItemsContainer() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const stripeKey = "pk_test_VvWjqy13EI2MSDgDxy3b5jbx00KrrL41yi";
  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    alert("Your Payment has been processed");
    navigate("/books");
  };

  return (
    <section className="cart-items-container">
      <div className="containers">
        {totalAmount === 0 ? (
          <h2>Currently your cart is empty</h2>
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>Cart</h2>

            {cartItems.map((item) => (
              <CartItemCard key={item.id} bookData={item} />
            ))}

            <h2 style={{ textAlign: "center" }}>Total Amount = &#8377;{totalAmount}</h2>

            <StripeCheckout
              name="Book Checkout"
              description="Please fill in the details below"
              amount={totalAmount * 100}
              currency="INR"
              stripeKey={stripeKey}
              token={onToken}
              billingAddress
            >
              <div style={{ textAlign: "center" }} >
              <button  className="button-primary">Proceed to Checkout</button>
              </div>
            </StripeCheckout>
          </>
        )}
      </div>
    </section>
  );
}

export default CartItemsContainer;
