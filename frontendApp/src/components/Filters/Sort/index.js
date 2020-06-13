import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ArrowTopIcon from "@assets/images/arrow-top";
import { changeProductsSort } from "../../../store/actions/filters";
import "../style.scss";

const sortBy = [
  { id: 1, name: "Popularity" },
  { id: 2, name: "Price" },
  { id: 3, name: "Alphabet" },
];

function Sort(props) {
  const { selectedSort, changeSort } = props;
  const [isSortPopupVisible, setSortPopupVisibility] = useState(false);

  useEffect(() => {
    const hidePopupWindow = (e) => {
      if (e.target.className === "sort__toggle-popup") return;
      setSortPopupVisibility(false);
    };
    window.addEventListener("click", hidePopupWindow);
    return () => {
      window.removeEventListener("click", hidePopupWindow);
    };
  }, []);

  const togglePopupVisibiblity = () => {
    setSortPopupVisibility((prevVisibility) => !prevVisibility);
  };
  const handleSortByClick = (e) => {
    const { target } = e;
    const { sortValue } = target.dataset;
    if (sortValue) {
      const updatedSort = { ...selectedSort };
      updatedSort.by = sortValue;
      changeSort(updatedSort);
    }
  };
  const handleToggleOrderClick = () => {
    const updatedSort = { ...selectedSort };
    updatedSort.order = updatedSort.order === "Desc" ? "Asc" : "Desc";
    changeSort(updatedSort);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <button
          type="button"
          className={`sort__toggle-order ${selectedSort.order.toLowerCase()}`}
          onClick={handleToggleOrderClick}
        >
          <ArrowTopIcon />
          <b>Sort by:</b>
        </button>
        <span className="sort__toggle-popup" tabIndex="-1" role="button" onClick={togglePopupVisibiblity}>{selectedSort.by}</span>
      </div>
      <div className={`${!isSortPopupVisible ? "hidden" : null} sort__popup`}>
        <ul role="presentation" onClick={handleSortByClick}>
          {sortBy.map((sortValue) => (
            <li
              key={sortValue.id}
              data-sort-value={sortValue.name}
              className={selectedSort.by === sortValue.name ? "active" : null}
            >
              {sortValue.name}
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

Sort.propTypes = {
  selectedSort: PropTypes.shape({
    by: PropTypes.string,
    order: PropTypes.oneOf(["Desc", "Asc"]),
  }).isRequired,
  changeSort: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  selectedSort: state.filters.sort,
});

const mapDispatchToProps = {
  changeSort: changeProductsSort,
};


export default connect(mapStateToProps, mapDispatchToProps)(Sort);
