import React, { useContext, useState } from "react";

import "../Styles/App.css";
import BookCard from "../components/bookCard.jsx";
import books from "../components/books.json";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";

import { useFilters } from "../../Hooks/useFilters.jsx";

function App() {
  const [listbooks, setBooks] = useState(books);
  const { filters, filterBooks } = useFilters();
  const filteredBooks = filterBooks(listbooks);

  return (
    <>
      <div className="container bg-dark  ">
        <h1 className="text-white title">Available Books</h1>
        <div className="row d-flex justify-content-center ">
          {" "}
          <Header />
          <BookCard books={filteredBooks} />
          <Footer filters={filters} />
        </div>
      </div>
    </>
  );
}

export default App;
