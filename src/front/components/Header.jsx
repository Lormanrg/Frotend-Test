import React from "react";

import Filters from "./Filters.jsx";

const Header = ({ changeFilters }) => {
  return (
    <>
      <h1>Library</h1>
      <Filters onChange={changeFilters} />
    </>
  );
};

export default Header;
