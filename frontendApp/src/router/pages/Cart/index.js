import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "@assets/images/cart-icon";
import ClearCartIcon from "@assets/images/clear-cart-icon";
import DeliveryIcon from "@assets/images/delivery-icon.svg";
import EmptyCartImage from "@assets/images/empty-cart.svg";
import Modal from "@components/Modal";
import OrderModalForm from "@components/OrderModalForm";
import OrderModalResult from "@components/OrderModalResult";
import CartProductsList from "./CartProductsList";
import { clearCart } from "../../../store/actions/cart";
import { getCurrencyRates } from "../../../store/actions/currency";
import { totalCartPriceSelector, totalCartProductsSelector } from "../../../store/selectors/cart";
import { getEURSelector } from "../../../store/selectors/currency";
import "./style.scss";


function Cart(props) {
  const {
    totalCartProducts,
    totalCartPrice,
    clearProductCart,
    getCurrency,
    usdEurRate,
  } = props;
  const [isOrderFormVisible, setOrderFormVisibility] = useState(false);
  const [isOrderResultVisible, setOrderResultVisibility] = useState(false);

  useEffect(() => {
    getCurrency();
  }, []);

  const handleClearCartClick = () => {
    clearProductCart();
  };
  const handleOrderFormVisibility = (isVisible) => {
    setOrderFormVisibility(isVisible);
  };

  const handlePlaceOrder = (formData) => {
    // TODO: request to the server with order formData here
    console.log(formData);
    setOrderResultVisibility(true);
  };

  const deliveryPrice = totalCartProducts >= 3 ? 0 : 5;
  const totalOrderSum = totalCartPrice + deliveryPrice;

  const totalPriceInEuro = useMemo(() => {
    if (usdEurRate) return Math.round((totalOrderSum / usdEurRate) * 100) / 100;
    return null;
  }, [usdEurRate, totalOrderSum]);

  return (
    <div className="content">
      <div className="container container--cart">

        { totalCartProducts
          ? (
            <div className="cart">
              <div className="cart__top">
                <h2 className="content__title">
                  <CartIcon />
                  My order
                </h2>
                <div className="cart__clear" tabIndex="-1" role="button" onClick={handleClearCartClick}>
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
                      {deliveryPrice ? "5$" : "Free"}
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
                    <b>{totalCartProducts}</b>
                    {" "}
                  </span>
                  <span>
                    {" "}
                    Order sum:
                    {" "}
                    <b>
                      {`${totalOrderSum} $`}
                    </b>
                    { totalPriceInEuro && (
                    <>
                      <br />
                      <span className="euro-currency">

                        {" "}
                        <span className="euro-currency__approx">~</span>
                        {totalPriceInEuro}
                        {" "}
                        €
                      </span>
                    </>
                    )}
                  </span>
                </div>
                <div className="cart__bottom-buttons">
                  <a href="/" className="button button--outline button--add go-back-btn">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Go back</span>
                  </a>
                  <div
                    className="button pay-btn"
                    onClick={() => { handleOrderFormVisibility(true); }}
                    role="button"
                    tabIndex="-1"
                  >
                    <span>Next</span>
                  </div>
                </div>
              </div>
            </div>
          )
          : (
            <div className="cart cart--empty">
              <h2>
                Oops, it’s empty here!
                {" "}
              </h2>
              <p>
                You probably haven’t ordered a pizza yet.
                <br />
                To order some pizza, go back to the main page.
              </p>
              <img src={EmptyCartImage} alt="Empty cart" />
              <Link to="/" className="button button--black">
                <span>Go back</span>
              </Link>
            </div>
          )}
      </div>

      <Modal
        isVisible={isOrderFormVisible}
        animationType="opacity"
        animationTimeout={300}
        className="order-form-modal"
        hideOnEscape={() => { handleOrderFormVisibility(false); }}
      >
        <OrderModalForm
          setVisibility={handleOrderFormVisibility}
          handlePlaceOrder={handlePlaceOrder}
        />
      </Modal>

      <Modal
        isVisible={isOrderResultVisible}
        animationType="opacity"
        animationTimeout={300}
        className="order-form-modal"
      >
        <OrderModalResult />
      </Modal>
    </div>
  );
}

Cart.propTypes = {
  totalCartProducts: PropTypes.number.isRequired,
  totalCartPrice: PropTypes.number.isRequired,
  clearProductCart: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
  usdEurRate: PropTypes.number,
};

Cart.defaultProps = {
  usdEurRate: null,
};


const mapStateToProps = (state) => ({
  totalCartPrice: totalCartPriceSelector(state),
  totalCartProducts: totalCartProductsSelector(state),
  usdEurRate: getEURSelector(state),
});
const mapDispatchToProps = {
  clearProductCart: clearCart,
  getCurrency: getCurrencyRates,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
