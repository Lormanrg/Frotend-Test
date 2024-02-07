import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (book) => {
    // setCart([cart, book]);
    //Check if the book is already in the cart
    const bookInCartIndex = cart.findIndex((item) => item.ISBN === book.ISBN);

    if (bookInCartIndex >= 0) {
      //una forma ussando structured Clone
      const newCart = structuredClone(cart);
      newCart[bookInCartIndex].quantity += 1;
      return setCart(newCart);
    }
    // book isn't in the cart
    setCart((prevState) => [
      ...prevState,
      {
        ...book,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (book) => {
    setCart((prevState) => prevState.filter((item) => item.ISBN !== book.ISBN));
  };

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cleanCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
