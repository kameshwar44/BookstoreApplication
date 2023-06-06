import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/Homepage/HomePage";
import BooksPage from "./Pages/Bookspage/BooksPage";
import CartPage from "./Pages/Cartpage/CartPage";
import SearchPage from "./Pages/Searchpage/SearchPage";
import Signup from "./Pages/Signup-page/Signup";
import Login from "./Pages/Loginpage/Login";
import BookDetails from "./Pages/Bookdetailspage/BookDetails";

export const UserContext = createContext({});
export const CartContext = createContext({});

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
