import React from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icon.jsx";
import useCart from "../../Hooks/useCart.jsx";

const BookCard = ({ books }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkBookInCart = (book) => {
    return cart.some((item) => item.ISBN === book.ISBN);
  };

  return (
    <>
      {books.map((data) => {
        const isBookInCart = checkBookInCart(data.book);

        return (
          <div className="card col-3 my-5 mx-4 " key={data.book.title}>
            <img
              src={data.book.cover}
              className="card-img-top  p-1"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between">
                {data.book.title} <strong> ${data.book.price}</strong>
              </h5>
              <p className="card-text">
                <strong>{data.book.genre}</strong>
              </p>
              <p className="card-text">{data.book.synopsis}</p>
              <div className="d-flex justify-content-end align-items-end">
                <button
                  type="button"
                  className={`btn ${
                    isBookInCart ? "btn-danger" : "btn-primary"
                  }`}
                  onClick={() =>
                    isBookInCart
                      ? removeFromCart(data.book)
                      : addToCart(data.book)
                  }
                >
                  {isBookInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
