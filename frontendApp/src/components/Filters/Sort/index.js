import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ArrowTopIcon from "@assets/images/arrow-top";
import "../style.scss";
import { changeProductsSort } from "../../../store/actions/filters";


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
  const handleSortByClick = () => {

  };
  const handleToggleOrderClick = () => {
    const updatedSort = { ...selectedSort };
    updatedSort.order = updatedSort.order === "desc" ? "asc" : "desc";
    changeSort(updatedSort);
  };


  return (
    <div className="sort">
      <div className="sort__label">
        <button
          type="button"
          className={`sort__toggle-order ${selectedSort.order}`}
          onClick={handleToggleOrderClick}
        >
          <ArrowTopIcon />
          <b>Sort by:</b>
        </button>
        <span className="sort__toggle-popup" tabIndex="-1" role="button" onClick={togglePopupVisibiblity}>{selectedSort.by}</span>
      </div>
      <div className={`${!isSortPopupVisible ? "hidden" : null} sort__popup`}>
        <ul role="presentation" onClick={handleSortByClick}>
          <li className="active">popularity</li>
          <li>price</li>
          <li>alphabet</li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedSort: state.filters.sort,
});

const mapDispatchToProps = {
  changeSort: changeProductsSort,
};


export default connect(mapStateToProps, mapDispatchToProps)(Sort);
