import React from "react";
import { AddToCartIcon } from "./Icon";
import useCart from "../../Hooks/useCart";

const BookCard = ({ books }) => {
  const { addToCart, cart } = useCart();
  return (
    <>
      {books?.map((data) => (
        <div className="card col-3 my-5 mx-4 " key={data.book.title}>
          <img src={data.book.cover} className="card-img-top  p-1" alt="..." />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between">
              {data.book.title} <strong> ${data.book.price}</strong>
            </h5>
            <p className="card-text">
              <strong>{data.book.genre}</strong>
            </p>
            <p className="card-text">{data.book.synopsis}</p>
            <div className="d-flex justify-content-end align-items-end">
              <button type="button" onClick={() => addToCart(data.book)}>
                <AddToCartIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookCard;
