import { createContext, useState } from "react";

// 1. Crear el contexto
// Este es el que debemos de consumir
export const FiltersContext = createContext();

// 2. Crear el Provider, para  proveer el contexto
//Este nos provee acceso al contexto
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    genre: "all",
    price: 0,
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
// 3 consumir el contexto
