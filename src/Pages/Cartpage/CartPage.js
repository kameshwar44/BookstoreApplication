import React from "react";
import CartItemsContainer from "../../Components/Layouts/cart-items-container/CartItemsContainer";
import Navbar from "../../Components/Layouts/navbar/Navbar";

function CartPage() {
  return (
    <section>
      <Navbar />

      <CartItemsContainer />
    </section>
  );
}

export default CartPage;
