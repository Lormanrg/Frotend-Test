import React, { useState, useId } from "react";
import "../Styles/Filter.css";

const Filters = ({ onChange }) => {
  const handleChangeGenre = (event) => {
    onChange((prevState) => ({
      ...prevState,
      genre: event.target.value,
    }));
  };
  const genreFilterId = useId();
  console.log(genreFilterId);
  return (
    <>
      <section className="filters">
        <div>
          <label htmlFor="price"> Price </label>
          <input type="range" name="" id="price" min="0" max="5000" />
        </div>
        <div>
          <label htmlFor="genre">Genre </label>
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
