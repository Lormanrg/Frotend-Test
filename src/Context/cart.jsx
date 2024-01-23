import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (book) => {
    //Check if the book is already in the cart
    const bookInCartIndex = cart.findIndex((item) => item.id === book.id);

    if (bookInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[bookInCartIndex].quantity += 1;
      return setCart(newCart);
    } else {
      // book isn't in the cart
      setCart((prevState) => [
        ...prevState,
        {
          ...book,
          quantity: 1,
        },
      ]);
    }
  };

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};
