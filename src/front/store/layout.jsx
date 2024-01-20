import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App.jsx";
import Navbar from "../components/navbar.jsx";
import { FiltersProvider } from "../../Context/filters.jsx";

const Layout = () => {
  return (
    <>
      <FiltersProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<App />} path="/"></Route>
          </Routes>
        </BrowserRouter>
      </FiltersProvider>
    </>
  );
};

export default Layout;
