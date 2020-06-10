import React from "react";
import { connect } from "react-redux";
import AddButtonPlusIcon from "@assets/images/add-button-plus";
import "./style.scss";


function ProductsList(props) {
  const { products } = props;
  return (
    <>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {
      products && products.map((product) => (
        <div className="pizza-block" key={product.id}>
          <img
            className="pizza-block__image"
            src={product.imageSrc}
            alt={product.title}
          />
          <h4 className="pizza-block__title">{product.title}</h4>
          <div className="pizza-block__selector">
            <ul>
              <li className="active">Thin</li>
              <li>Traditional</li>
            </ul>
            <ul>
              <li className="active">Small</li>
              <li>Medium</li>
              <li>Large</li>
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">
              Price:
              {" "}
              {product.basePrice}
              {" "}
              $
            </div>
            <div className="button button--outline button--add">
              <AddButtonPlusIcon />
              <span>Add</span>
              <i>2</i>
            </div>
          </div>
        </div>
      ))
        }
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(ProductsList);
