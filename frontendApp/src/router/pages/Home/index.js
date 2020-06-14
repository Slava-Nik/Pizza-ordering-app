import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Filters from "@components/Filters";
import ProductsList from "@components/ProductsList";
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

Home.propTypes = {
  getProductsList: PropTypes.func.isRequired,
};

const mapDispatchToProps = { getProductsList: getProducts };

export default connect(null, mapDispatchToProps)(Home);
