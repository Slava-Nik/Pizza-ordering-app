import { combineReducers } from "redux";
import products from "./products";
import filters from "./filters";
import cart from "./cart";
import currency from "./currency";


export default combineReducers({
  products,
  cart,
  filters,
  currency,
});
