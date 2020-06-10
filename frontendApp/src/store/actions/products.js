import { GET_PRODUCTS } from "../constants/ActionTypes";
import {
  requestActionType,
  successActionType,
  failedActionType,
} from "../utils";
import ProductAPI from "../../api/product";

// eslint-disable-next-line import/prefer-default-export
export const getProducts = () => async (dispatch) => {
  dispatch({
    type: requestActionType(GET_PRODUCTS),
  });
  try {
    const productsResult = await ProductAPI.getProducts();
    dispatch({
      type: successActionType(GET_PRODUCTS),
      payload: {
        data: productsResult.data,
        error: null,
      },
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: failedActionType(GET_PRODUCTS),
      payload: {
        data: null,
        error: err,
      },
    });
  }
};
