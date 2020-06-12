import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import AddButtonPlusIcon from "@assets/images/add-button-plus";
import { addProductToCart } from "../../../store/actions/cart";
import { totalCartProductsByIdSelector } from "../../../store/selectors/cart";
import "../style.scss";


const doughTypes = [
  { id: 1, name: "Thin" },
  { id: 2, name: "Tradition" },
];
const pizzaSizes = [
  { id: 1, name: "Small" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Large" },
];
const priceCalculation = {
  Small: 1,
  Medium: 1.4,
  Large: 1.6,
};

function ProductsList(props) {
  const {
    product,
    addItemToCart,
    totalCartProductsById,
  } = props;


  const [doughType, setDoughType] = useState(doughTypes[0].name);
  const [pizzaSize, setPizzaSize] = useState(pizzaSizes[0].name);

  const productPrice = useMemo(
    () => Math.round(product.basePrice * priceCalculation[pizzaSize]),
    [pizzaSize],
  );

  const addProductToCartHandleClick = () => {
    const itemToAdd = {
      id: product.id,
      size: pizzaSize,
      price: productPrice,
      quantity: 1,
      doughType,
    };
    addItemToCart(itemToAdd);
  };

  return (
    <div className="pizza-block" key={product.id}>
      <img
        className="pizza-block__image"
        src={product.imageSrc}
        alt={product.title}
      />
      <h4 className="pizza-block__title">{product.title}</h4>
      <div className="pizza-block__selector">
        <ul className="pizza-block__dough-list">
          {
            doughTypes.map((dough) => (
              <li
                key={dough.id}
                className={doughType === dough.name ? "active" : null}
                onClick={() => { setDoughType(dough.name); }}
              >
                {dough.name}
              </li>
            ))
          }
        </ul>
        <ul className="pizza-block__size-list">
          {
            pizzaSizes.map((size) => (
              <li
                key={size.id}
                className={pizzaSize === size.name ? "active" : null}
                onClick={() => { setPizzaSize(size.name); }}
              >
                {size.name}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          Price:
          {" "}
          {productPrice}
          {" "}
          $
        </div>
        <div
          className="button button--outline button--add"
          role="button"
          onClick={addProductToCartHandleClick}
          tabIndex="-1"
        >
          <AddButtonPlusIcon />
          <span>Add</span>
          <i>{totalCartProductsById}</i>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  totalCartProductsById: totalCartProductsByIdSelector(ownProps.product.id)(state),
});
const mapDispatchToProps = {
  addItemToCart: addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
