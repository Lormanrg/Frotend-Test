import React, { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icon.jsx";
import "../Styles/Cart.css";

const Cart = () => {
  const cartCheckboxID = useId();

  return (
    <>
      <label htmlFor={cartCheckboxID} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxID} hidden />

      <aside className="cart text-light bg-dark ">
        <ul>
          <li>
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg"
              alt="Game of thrones"
            />

            <div>
              <strong>Game of Thrones</strong>- $50
            </div>
            <footer>
              <small>Qty:1</small>
              <button type="button" class="btn btn-secondary">
                +
              </button>
            </footer>
          </li>
        </ul>
        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-secondary">
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
