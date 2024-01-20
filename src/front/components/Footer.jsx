import React from "react";
import "../Styles/Footer.css";

const Footer = ({ filters }) => {
  return (
    <>
      <footer className="footer text-light">
        {JSON.stringify(filters, null, 2)}
      </footer>
    </>
  );
};

export default Footer;
