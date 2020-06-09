import React from "react";
import "./style.scss";
import ConfirmOrderIcon from "@assets/images/confirm-order-icon.svg";

function OrderModalForm() {
  return (
    <div className="overlay-wrapper">
      <div className="order-result">
        <img className="order-result__icon--success" src={ConfirmOrderIcon} alt="Order confirmed" />
        <div className="order-result__inner">
          <h3 className="order-result__title">Awesome!</h3>
          <p className="order-result__message">Your order has been confirmed. Check your email for details.</p>
          <button className="button order-result__close" type="button">OK</button>
        </div>
      </div>

    </div>
  );
}

// user clicks place-order - we clear the cart for the user
//  (in localstorage and redux) and create new order in database.
// Redirect him to the home page - and display popup, that we recieved his order.

export default OrderModalForm;
