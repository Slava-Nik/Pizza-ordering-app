import React from "react";
import { connect } from "react-redux";
import {
  Link,
} from "react-router-dom";
import CartIcon from "@assets/images/cart-icon";
import { totalCartPriceSelector, totalCartProductsSelector } from "../../../store/selectors/cart";


function CartButton(props) {
  const { totalCartPrice, totalCartProducts } = props;
  return (
    <div className="header__cart">
      <Link to="/cart" className="button button--cart">
        <CartIcon />
        <span>{totalCartProducts}</span>
        <div className="button__delimiter" />
        <span>
          {totalCartPrice}
          {" "}
          $
        </span>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  totalCartPrice: totalCartPriceSelector(state),
  totalCartProducts: totalCartProductsSelector(state),
});

export default connect(mapStateToProps)(CartButton);
