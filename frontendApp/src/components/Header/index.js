import React from "react";
import PizzaLogo from "@assets/images/pizza-logo";
import CartIcon from "@assets/images/cart-icon";
import {
  Link,
} from "react-router-dom";
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
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <CartIcon />
            <span>3</span>
            <div className="button__delimiter" />
            <span>52 $</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
