import React, { useEffect } from "react";
import { connect } from "react-redux";
import Filters from "@components/Filters";
import ProductsList from "@components/ProductsList";
import "./style.scss";
import { getProducts } from "../../../store/actions/products";

function Home(props) {
  const { getProductsList } = props;
  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <div className="content">
      <div className="container">
        <Filters />
        <ProductsList />
      </div>
    </div>
  );
}

const mapDispatchToProps = { getProductsList: getProducts };

export default connect(null, mapDispatchToProps)(Home);
