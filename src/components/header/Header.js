import React from "react";
import Navigation from "../navigation/Navigation";
import logo from "../../assets/logo-kasa.svg";

const Header = () => {
  return (
    <header id="header">
      <picture>
        <img src={logo} alt="logo" />
      </picture>
      <Navigation />
    </header>
  );
};

export default Header;
