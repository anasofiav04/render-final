import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="site__wrapper">
      <header className="banner site__section ">
        <img
          src="/assets/images/logo-mexico.jpeg"
          alt="Magical Mexico Logo"
          className="banner__logo"
        />
      </header>
    </div>
  );
}

export default Header;
