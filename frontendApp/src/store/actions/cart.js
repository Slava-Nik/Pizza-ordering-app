import {
  ADD_PRODUCT_TO_CART,
  REMOVE_POSITION_FROM_CART,
  DECREMENT_POSITION_IN_CART,
  INCREMENT_POSITION_IN_CART,
  CLEAR_CART,
} from "../constants/ActionTypes";

export const addProductToCart = (itemToAdd) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: {
      itemToAdd,
    },
  });
};

export const removePositionFromCart = (itemToRemove) => (dispatch) => {
  dispatch({
    type: REMOVE_POSITION_FROM_CART,
    payload: {
      itemToRemove,
    },
  });
};

export const decrementPositionInCart = (itemToDecrement) => (dispatch) => {
  dispatch({
    type: DECREMENT_POSITION_IN_CART,
    payload: {
      itemToDecrement,
    },
  });
};

export const incrementPositionInCart = (itemToIncrement) => (dispatch) => {
  dispatch({
    type: INCREMENT_POSITION_IN_CART,
    payload: {
      itemToIncrement,
    },
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });
};
