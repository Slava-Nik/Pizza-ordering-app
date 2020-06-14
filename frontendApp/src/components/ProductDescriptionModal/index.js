import React from "react";
import PropTypes from "prop-types";
import CloseCrossIcon from "@assets/images/close-cross";
import "./style.scss";


function ProductDescription(props) {
  const { product, hideModal } = props;

  return (
    <div className="product-description">

      <div className="product-description__inner">
        <div className="product-description__image-wrapper">
          <img
            className="product-description__image"
            src={product.image}
            alt="product"
          />
        </div>
        <div className="product-description__content-wrapper">
          <h2 className="product-description__title">{product.title}</h2>
          <p className="product-description__content">{product.description}</p>
        </div>
      </div>
      <button
        type="button"
        className="order-form__close"
        onClick={() => { hideModal(); }}
      >
        <CloseCrossIcon />
      </button>
    </div>
  );
}

ProductDescription.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  hideModal: PropTypes.func.isRequired,
};


export default ProductDescription;
