import React from "react";
import Filters from "@components/Filters";
import ProductsList from "@components/ProductsList";
import "./style.scss";


function Home() {
  return (
    <div className="content">
      <div className="container">
        <Filters />
        <ProductsList />
      </div>
    </div>
  );
}

export default Home;
