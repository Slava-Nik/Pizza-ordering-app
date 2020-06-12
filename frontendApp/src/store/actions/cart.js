import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants/ActionTypes";

export const addProductToCart = (itemToAdd) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: {
      itemToAdd,
    },
  });
};

export const removeProductFromCart = (itemToRemove) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: {
      itemToRemove,
    },
  });
};
