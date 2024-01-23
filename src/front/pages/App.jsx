import React, { useContext, useState } from "react";

import "../Styles/App.css";
import BookCard from "../components/bookCard.jsx";
import books from "../components/books.json";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";

import { useFilters } from "../../Hooks/useFilters.jsx";
import Cart from "../components/Cart.jsx";
import { CartProvider } from "../../Context/cart.jsx";

function App() {
  const [listbooks, setBooks] = useState(books);
  const { filterBooks } = useFilters();
  const filteredBooks = filterBooks(listbooks);

  return (
    <>
      <body className="bg-secondary">
        <div className="container bg-dark  ">
          <h1 className="text-white title ">Available Books </h1>
          <div className="row d-flex justify-content-center ">
            {" "}
            <CartProvider>
              <Header />
              <Cart />
              <BookCard books={filteredBooks} />
              <Footer />
            </CartProvider>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
