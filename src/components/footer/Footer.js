import React from "react";
import logo from "../../assets/logo-kasa-white.svg";

const Footer = () => {
  return (
    <footer>
      <picture>
        <img src={logo} alt="logo" />
      </picture>
      <p>©2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
