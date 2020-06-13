import React from "react";
import PizzaLogo from "@assets/images/pizza-logo";
import {
  Link,
} from "react-router-dom";
import CartButton from "./CartButton";
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <PizzaLogo />
          <div>
            <h1>Nik&apos;s Pizza </h1>
            <p>We do pizza right</p>
          </div>
        </Link>
        <CartButton />
      </div>
    </div>
  );
}

export default Header;
