import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ConfirmOrderIcon from "@assets/images/confirm-order-icon.svg";
import { clearCart } from "../../store/actions/cart";
import "./style.scss";


function OrderModalResult(props) {
  const { clearProductCart } = props;
  const history = useHistory();

  const redirectToHomeAndClearCart = () => {
    history.push("/");
    clearProductCart();
  };
  return (
    <div className="order-result">
      <img className="order-result__icon--success" src={ConfirmOrderIcon} alt="Order confirmed" />
      <div className="order-result__inner">
        <h3 className="order-result__title">Awesome!</h3>
        <p className="order-result__message">Your order has been confirmed. Check your email for details.</p>
        <button
          className="button order-result__close"
          type="button"
          onClick={redirectToHomeAndClearCart}
        >
          OK
        </button>
      </div>
    </div>
  );
}

OrderModalResult.propTypes = {
  clearProductCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  clearProductCart: clearCart,
};

export default connect(null, mapDispatchToProps)(OrderModalResult);
