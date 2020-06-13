import React from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import "./style.scss";

function Filters() {
  return (
    <div className="content__filters">
      <Categories />
      <Sort />
    </div>
  );
}

export default Filters;
