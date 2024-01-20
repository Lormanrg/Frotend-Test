import { Children, createContext } from "react";

// 1. Crear el contexto
export const FiltersContext = createContext();

// 2. Crear el Provider, para  proveer el contexto
export const FiltersProvider = ({ children }) => {
  <FiltersContext.Provider
    value={{
      genre: "all",
    }}
  >
    {children}
  </FiltersContext.Provider>;
};
