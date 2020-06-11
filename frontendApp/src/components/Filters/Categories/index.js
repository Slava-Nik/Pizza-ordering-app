import React from "react";
import { connect } from "react-redux";
import "../style.scss";
import { changeProductsCategories } from "../../../store/actions/filters";

const categories = [
  { id: 1, name: "Hot" },
  { id: 2, name: "Meat" },
  { id: 3, name: "Vegetarian" },
  { id: 4, name: "Cheese" },
  { id: 5, name: "Tomato" },
];

function Categories(props) {
  const { selectedCategories, changeCategories } = props;

  const handleCategoriesClick = (e) => {
    const { target } = e;
    const { categoryValue } = target.dataset;
    if (categoryValue) {
      const isAllClick = categoryValue === "All";
      const isElemExistInCategories = selectedCategories.includes(
        categoryValue,
      );
      const isCategoriesContainElems = Boolean(selectedCategories.length);

      if (!isCategoriesContainElems && isAllClick) {
        return;
      }
      if (isCategoriesContainElems && isAllClick) {
        changeCategories([]);
        return;
      }

      let updatedCategories = [...selectedCategories];
      if (isElemExistInCategories) {
        updatedCategories = updatedCategories.filter(
          (category) => category !== categoryValue,
        );
      } else {
        updatedCategories.push(categoryValue);
      }
      if (updatedCategories.length === categories.length) {
        updatedCategories = [];
      }
      changeCategories(updatedCategories);
    }
  };

  return (
    <div className="categories">
      <ul
        className="categories__list"
        role="presentation"
        onClick={handleCategoriesClick}
      >
        <li
          data-category-value="All"
          className={!selectedCategories.length ? "active" : null}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            data-category-value={category.name}
            className={
              selectedCategories.includes(category.name) ? "active" : null
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  selectedCategories: state.filters.categories,
});

const mapDispatchToProps = {
  changeCategories: changeProductsCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
