import React, { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icon.jsx";
import "../Styles/Cart.css";
import useCart from "../../Hooks/useCart.jsx";

const CartItem = ({ price, quantity, cover, tittle, addToCart }) => {
  return (
    <>
      <li>
        <img src={cover} alt={tittle} />

        <div>
          <strong>{tittle}</strong> ${price}
        </div>
        <footer>
          <small>Qty:{quantity}</small>
          <button onClick={addToCart} type="button" class="btn btn-secondary">
            +
          </button>
        </footer>
      </li>
    </>
  );
};

const Cart = () => {
  const cartCheckboxID = useId();
  const { cart, cleanCart, addToCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckboxID} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxID} hidden />

      <aside className="cart text-light bg-dark ">
        <ul>
          {cart.map((book) => (
            <CartItem
              key={book.ISBN}
              {...book}
              addToCart={() => addToCart(book)}
            />
          ))}
        </ul>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => cleanCart()}
          >
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
