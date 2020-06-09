import React from "react";
import CloseCrossIcon from "@assets/images/close-cross";
import "./style.scss";

function OrderModalForm() {
  return (
    <div className="overlay-wrapper">


      <form className="order-form" action="/" method="post">
        <div className="order-form__content">
          <h3 className="order-form__title">Delivery information</h3>

          <div className="order-form__inputs">
            <div className="order-form__name">
              <label>
                <span>First name</span>
                <input name="first-name" type="text" placeholder="Your first name" required />
              </label>
              <label>
                <span>Last name</span>
                <input name="last_name" type="text" placeholder="Your last name" required />
              </label>
            </div>
            <div className="order-form__address">
              <label>
                <span>Your email</span>
                <input name="email" type="email" placeholder="Your email" required />
              </label>
              <label>
                <span>Your address</span>
                <input name="address" type="text" placeholder="Your address" required />
              </label>
              <label>
                <span>Apt, Suite, Room and comments</span>
                <textarea id="client_comments" name="comments" placeholder="Add more information for the courier" />
              </label>
            </div>
          </div>
          <button type="submit" className="button pay-btn order-form__place-order">
            <span>Place order</span>
          </button>
        </div>
        <button type="button" className="order-form__close">
          <CloseCrossIcon />
        </button>
      </form>
    </div>
  );
}

// user clicks place-order - we clear the cart for the user (in localstorage and redux)
//  and create new order in database.
// Redirect him to the home page -
//  and display popup, that we recieved his order.

export default OrderModalForm;
