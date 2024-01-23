import React from "react";
import "../Styles/Footer.css";
import { useFilters } from "../../Hooks/useFilters";
import useCart from "../../Hooks/useCart";

const Footer = () => {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <>
      <footer className="footer text-light">
        {/* {JSON.stringify(filters, null, 2)} */}
        {JSON.stringify(cart, null, 2)}
      </footer>
    </>
  );
};

export default Footer;
