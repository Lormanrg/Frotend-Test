import React, { useState } from "react";

const BookCard = ({ books }) => {
  return (
    <>
      {books?.map((data) => (
        <div className="card col-3 my-5 mx-4 " key={data.book.title}>
          <img src={data.book.cover} className="card-img-top  p-1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.book.title}</h5>
            <p className="card-text">
              <strong>{data.book.genre}</strong>
            </p>
            <p className="card-text">{data.book.synopsis}</p>
            <button href="#" className="btn btn-primary">
              Go somewhere
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookCard;
