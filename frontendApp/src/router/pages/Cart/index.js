import React from "react";
import CartIcon from "@assets/images/cart-icon";
import ClearCartIcon from "@assets/images/clear-cart-icon";
import DeliveryIcon from "@assets/images/delivery-icon.svg";
import CartProductsList from "@components/CartProductsList";
// import OrderModalForm from "@components/OrderModalForm";
// import OrderModalResult from "@components/OrderModalResult";
import "./style.scss";

function Cart() {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <CartIcon />
              My order
            </h2>
            <div className="cart__clear">
              <ClearCartIcon />
              <span>Clear cart</span>
            </div>
          </div>
          <CartProductsList />
          <div className="cart-delivery">
            <div className="cart-delivery__image">
              <img src={DeliveryIcon} alt="delivery" />
            </div>
            <div className="cart-delivery__info">
              <h3>
                Cost of delivery:
                <span className="cart-delivery__price">
                  {" "}
                  5$
                </span>
              </h3>
              <p>
                You get free delivery if you order at least 3 pizzas.
              </p>
            </div>
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                {" "}
                Count of pizzas:
                {" "}
                <b>3</b>
                {" "}
              </span>
              <span>
                {" "}
                Order sum:
                {" "}
                <b>52 $</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <a href="/" className="button button--outline button--add go-back-btn">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span>Go back</span>
              </a>
              <div className="button pay-btn">
                <span>Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <OrderModalForm /> */}
      {/* <OrderModalResult /> */}
    </div>
  );
}

export default Cart;
