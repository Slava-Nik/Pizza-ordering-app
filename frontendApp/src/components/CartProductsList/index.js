import React from "react";
import MinusCountIcon from "@assets/images/minus-count";
import PlusCountIcon from "@assets/images/plus-count";
import RemoveItemIcon from "@assets/images/remove-item";
import "./style.scss";

function CartProductsList() {
  const order = [
    {
      id: 1,
      title: "Pepperoni Hot Pepper",
      imageSrc:
        "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      price: 11,
      size: "Medium",
      dough: "Thin",
      count: 2,
    },
    {
      id: 2,
      title: "Mexican",
      imageSrc:
        "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      price: 11,
      size: "Large",
      dough: "Traditional",
      count: 2,
    },
  ];

  return (
    <div className="content__items">
      {order
        && order.map((product) => (
          <div className="cart__item" key={product.id}>
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
                <p>{`${product.dough} dough, ${product.size} size.`}</p>
              </div>
            </div>

            <div className="cart__item-control-wrapper">
              <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus">
                  <MinusCountIcon />
                </div>
                <b>1</b>
                <div className="button button--outline button--circle cart__item-count-plus">
                  <PlusCountIcon />
                </div>
              </div>
              <div className="cart__item-price">
                <b>32 $</b>
              </div>
              <div className="cart__item-remove">
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

export default CartProductsList;
