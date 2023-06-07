import React, { useContext } from "react";
import "./CartItemsContainer.css";
import { CartContext } from "../../../App";
import CartItemCard from "./../../Cards/Cart-Item-Card/CartItemCard";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router";
import swal from "sweetalert";

function CartItemsContainer() {
  const { cartItems, totalAmount, setCartItems } = useContext(CartContext);
  const stripeKey =
    "pk_test_51Kgl5nKkPr0681NoaZBHeUECkOZFxwsY5urHH0VupdpHSoLhXck5L4QXayLfGAnM6Cy2KWfLYlG3UQYJA17mpnDx00TJRpttqs";
  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    swal({
      title: "Payment successfull !",
      icon: "success",
      button: "Ok",
    });
    navigate("/books");

    // Empty the cart
    setCartItems([]);
  };

  // Removing an item from the cart
  const handleRemove = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
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
              <CartItemCard
                key={item.id}
                bookData={item}
                onRemove={() => handleRemove(item.id)}
              />
            ))}

            <h2 style={{ textAlign: "center" }}>
              Total Amount = &#8377;{totalAmount}
            </h2>

            <StripeCheckout
              name="Book Checkout"
              description="Please fill in the details below"
              amount={totalAmount * 100}
              currency="INR"
              stripeKey={stripeKey}
              token={onToken}
              billingAddress
            >
              <div style={{ textAlign: "center" }}>
                <button className="button-primary">Proceed to Checkout</button>
              </div>
            </StripeCheckout>
          </>
        )}
      </div>
    </section>
  );
}

export default CartItemsContainer;
