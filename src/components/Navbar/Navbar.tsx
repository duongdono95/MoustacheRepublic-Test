import React from "react";
import "./Navbar.scss";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-item"></div>
      <Cart />
    </div>
  );
};

export default Navbar;
