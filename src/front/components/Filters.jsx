import React, { useState, useId } from "react";
import "../Styles/Filter.css";
import { useFilters } from "../../Hooks/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const handleChangeGenre = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      genre: event.target.value,
    }));
  };

  const handleChangePrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const genreFilterId = useId();
  const priceFilterId = useId();

  return (
    <>
      <section className="filters">
        <div>
          <label htmlFor={priceFilterId}> Price </label>
          <input
            type="range"
            name=""
            id={priceFilterId}
            min="0"
            max="100"
            onChange={handleChangePrice}
            value={filters.price}
          />
          <span>{filters.price}</span>
        </div>
        <div>
          <label htmlFor={genreFilterId}>Genre </label>
          <select id={genreFilterId} onChange={handleChangeGenre}>
            <option value="all"> All</option>
            <option value="Fantasía">Fantasy</option>
            <option value="Ciencia ficción">Science fiction</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Filters;
