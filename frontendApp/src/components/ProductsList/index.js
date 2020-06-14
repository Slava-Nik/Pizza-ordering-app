import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getArraysIntersection from "lodash.intersection";
import LoaderIcon from "@assets/images/loader-icon";
import ProductItem from "./ProductItem";
import "./style.scss";

function ProductsList(props) {
  const {
    productsObj,
    categories,
    sort,
  } = props;

  const getFilteredProductsByCategories = (products) => {
    const isProductsExists = products.length;
    const isAllCategoriesChosen = !categories.length;
    let result = [];
    if (isProductsExists) {
      if (isAllCategoriesChosen) {
        result = products;
      } else {
        result = products.filter((product) => {
          const someCategoryCorrespond = getArraysIntersection(
            product.categories,
            categories,
          ).length;
          return someCategoryCorrespond;
        });
      }
    }
    return result;
  };

  const getSortedProducts = (products) => {
    const result = [...products];
    const isAscendingSort = sort.order === "Asc";
    let sortByOption = sort.by;
    if (sortByOption === "Popularity") sortByOption = "popularity";
    if (sortByOption === "Price") sortByOption = "basePrice";
    if (sortByOption === "Alphabet") sortByOption = "title";

    return result.sort((first, second) => {
      const isFirstItemLarger = first[sortByOption] > second[sortByOption];
      const isItemsEquals = first[sortByOption] === second[sortByOption];
      if (isItemsEquals) return 0;
      if (isAscendingSort) {
        return isFirstItemLarger ? 1 : -1;
      }
      return isFirstItemLarger ? -1 : 1;
    });
  };
  const productsToDisplay = getSortedProducts(getFilteredProductsByCategories(productsObj.data));

  return (
    <>
      <h2 className="content__title">All pizzas</h2>
      {productsObj.isLoading ? (
        <div className="content__loader">
          <LoaderIcon />
        </div>
      ) : (
        <div className="content__items">
          {productsToDisplay
            && productsToDisplay.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
}

const productPropTypesShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  size: PropTypes.string,
  doughType: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
});


ProductsList.propTypes = {
  productsObj: PropTypes.shape({
    data: PropTypes.arrayOf(productPropTypesShape),
    isLoading: PropTypes.bool,
    error: PropTypes.any,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  sort: PropTypes.shape({
    by: PropTypes.string,
    order: PropTypes.oneOf(["Desc", "Asc"]),
  }).isRequired,
};


const mapStateToProps = (state) => ({
  productsObj: state.products,
  categories: state.filters.categories,
  sort: state.filters.sort,
});

export default connect(mapStateToProps)(ProductsList);
