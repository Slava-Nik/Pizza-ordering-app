import React from "react";
import { connect } from "react-redux";
import MinusCountIcon from "@assets/images/minus-count";
import PlusCountIcon from "@assets/images/plus-count";
import RemoveItemIcon from "@assets/images/remove-item";
import {
  removePositionFromCart,
  decrementPositionInCart,
  incrementPositionInCart,
} from "../../../../store/actions/cart";
import { cartProductsDataSelector } from "../../../../store/selectors/cart";
import "./style.scss";

function CartProductsList(props) {
  const {
    cartProductsData,
    removeFromCart,
    decrementInCart,
    incrementInCart,
  } = props;

  const removeFromCartHandleClick = (product) => {
    removeFromCart(product);
  };

  const decrementQuantityHandler = (product) => {
    if (product.quantity === 1) return;
    decrementInCart(product);
  };

  const incrementQuantityHandler = (product) => {
    incrementInCart(product);
  };

  return (
    <div className="content__items">
      {cartProductsData
        && cartProductsData.map((product) => (
          <div className="cart__item" key={`${product.id}-${product.doughType}-${product.size}`}>
            <div className="cart__item-info-wrapper">
              <div className="cart__item-img">
                <img
                  className="pizza-block__image"
                  src={product.imageSrc}
                  alt={product.title}
                />
              </div>
              <div className="cart__item-info">
                <h3>{product.title}</h3>
                <p>{`${product.doughType} dough, ${product.size} size.`}</p>
              </div>
            </div>

            <div className="cart__item-control-wrapper">
              <div className="cart__item-count">
                <div
                  className={`button button--outline button--circle cart__item-count-minus ${product.quantity === 1 ? "cart__item-count-minus--disabled" : null}`}
                  onClick={() => { decrementQuantityHandler(product); }}
                  role="button"
                  tabIndex="-1"
                >
                  <MinusCountIcon />
                </div>
                <b>{product.quantity}</b>
                <div
                  className="button button--outline button--circle cart__item-count-plus"
                  onClick={() => { incrementQuantityHandler(product); }}
                  role="button"
                  tabIndex="-1"
                >
                  <PlusCountIcon />
                </div>
              </div>
              <div className="cart__item-price">
                <b>
                  {product.price}
                  {" "}
                  $
                </b>
              </div>
              <div
                className="cart__item-remove"
                onClick={() => { removeFromCartHandleClick(product); }}
                tabIndex="-1"
                role="button"
              >
                <div className="button button--outline button--circle">
                  <RemoveItemIcon />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProductsData: cartProductsDataSelector(state),
});

const mapDispatchToProps = {
  removeFromCart: removePositionFromCart,
  decrementInCart: decrementPositionInCart,
  incrementInCart: incrementPositionInCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(CartProductsList);
