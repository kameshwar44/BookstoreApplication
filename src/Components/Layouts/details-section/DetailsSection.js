import React, { useContext, useEffect, useState } from "react";
import { BookData } from "../../../UtilsData/BookData";
import { useNavigate, useParams } from "react-router";
import "./DetailsSection.css";
import { CartContext } from "../../../App";
import swal from 'sweetalert';

function DetailsSection() {
  const { id } = useParams();
  const [bookData, setBookData] = useState({}); // Setting BookData To Objects

  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id)); //filtering Data with Id
    console.log(newData[0]);
    setBookData(newData[0]);
  }, [id]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, bookData]); // Adding Previous and current BookData To Cart
    swal({
      title: "Added To Cart",
      text: `${bookData.book_name} is added to the cart`,
      icon: "success",
      button: "Ok!",
    });
  };

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={bookData.book_url} alt="book" />
          </div>

          <div className="book-detail-container">
            <h2>{bookData.book_name}</h2>
            <p className="text-primary">{bookData.author_name}</p>
            <p className="book-description">{bookData.book_description}</p>
            <p>
              <b>Language</b>: {bookData.language}
            </p>
            <p>
              <b>Book Length</b> : {bookData.print_length}
            </p>

            <h3>&#8377;{bookData.price}</h3>

            <a onClick={handleAddToCart} className="button-primary">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
