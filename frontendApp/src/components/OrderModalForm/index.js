import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import CloseCrossIcon from "@assets/images/close-cross";
import "./style.scss";

function OrderModalForm(props) {
  const { setVisibility, handlePlaceOrder } = props;
  const {
    register, handleSubmit: validateSubmit, errors,
  } = useForm();

  const submitHandler = (formData) => {
    setVisibility(false);
    handlePlaceOrder(formData);
  };

  return (
    <form className="order-form" onSubmit={validateSubmit(submitHandler)}>
      <div className="order-form__content">
        <h3 className="order-form__title">Delivery information</h3>
        <div className="order-form__inputs">
          <div className="order-form__name">
            <label className={errors.firstName ? "invalid" : ""}>
              <span>First name</span>
              { errors.firstName
                ? (
                  <span className="validation-error">
                    *
                    {" "}
                    {errors.firstName.message}
                  </span>
                ) : null}
              <input
                name="firstName"
                type="text"
                placeholder="Your first name"
                ref={register({ required: "First name is required" })}
              />
            </label>
            <label className={errors.lastName ? "invalid" : ""}>
              <span>Last name</span>
              { errors.lastName
                ? (
                  <span className="validation-error">
                    *
                    {" "}
                    {errors.lastName.message}
                  </span>
                ) : null}
              <input
                name="lastName"
                type="text"
                placeholder="Your last name"
                ref={register({ required: "Last name is required" })}
              />
            </label>
          </div>
          <div className="order-form__address">
            <label className={errors.email ? "invalid" : ""}>
              <span>Your email</span>
              { errors.email
                ? (
                  <span className="validation-error">
                    *
                    {" "}
                    {errors.email.message}
                  </span>
                ) : null}
              <input
                name="email"
                type="email"
                placeholder="Your email"
                ref={register({ required: "Email is required" })}
              />
            </label>
            <label className={errors.address ? "invalid" : ""}>
              <span>Your address</span>
              { errors.address
                ? (
                  <span className="validation-error">
                    *
                    {" "}
                    {errors.address.message}
                  </span>
                ) : null}
              <input
                name="address"
                type="text"
                placeholder="Your address"
                ref={register({ required: "Address is required" })}
              />
            </label>
            <label>
              <span>Apt, Suite, Room and comments</span>
              <textarea id="client_comments" name="comments" placeholder="Add more information for the courier" />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="button pay-btn order-form__place-order"
        >
          <span>Place order</span>
        </button>
      </div>
      <button
        type="button"
        className="order-form__close"
        onClick={() => { setVisibility(false); }}
      >
        <CloseCrossIcon />
      </button>
    </form>
  );
}

OrderModalForm.propTypes = {
  setVisibility: PropTypes.func.isRequired,
  handlePlaceOrder: PropTypes.func.isRequired,
};


export default OrderModalForm;
