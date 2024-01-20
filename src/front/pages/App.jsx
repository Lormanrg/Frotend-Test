import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../Styles/App.css";
import BookCard from "../components/bookCard.jsx";
import books from "../components/books.json";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";

const useFilters = () => {
  const [filters, setFilters] = useState({
    genre: "all",
  });
  const filterBooks = (books) => {
    return books.library.filter((item) => {
      return filters.genre === "all" || item.book.genre === filters.genre;
    });
  };

  return { filters, filterBooks, setFilters };
};

function App() {
  const [listbooks, setBooks] = useState(books);
  const { filters, filterBooks, setFilters } = useFilters();
  const filteredBooks = filterBooks(listbooks);

  return (
    <>
      <div className="container bg-dark  ">
        <h1 className="text-white title">Available Books</h1>
        <div className="row d-flex justify-content-center ">
          {" "}
          <Header changeFilters={setFilters} />
          <BookCard books={filteredBooks} />
          <Footer filters={filters} />
        </div>
      </div>
    </>
  );
}

export default App;
