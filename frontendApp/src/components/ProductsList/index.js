import React from "react";
import { connect } from "react-redux";
import getArraysIntersection from "lodash.intersection";
import AddButtonPlusIcon from "@assets/images/add-button-plus";
import LoaderIcon from "@assets/images/loader-icon";
import "./style.scss";

function ProductsList(props) {
  const { products: productsObj, categories, sort } = props;

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
            ))}
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.filters.categories,
  sort: state.filters.sort,
});

export default connect(mapStateToProps)(ProductsList);
