import React, { useContext } from "react";
import { FiltersContext } from "../Context/filters.jsx";

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterBooks = (books) => {
    return books.library.filter((item) => {
      return (
        item.book.price >= filters.price &&
        (filters.genre === "all" || item.book.genre === filters.genre)
      );
    });
  };

  return { filters, filterBooks, setFilters };
};
