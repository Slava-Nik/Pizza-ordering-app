import { CHANGE_PRODUCTS_CATEGORIES, CHANGE_PRODUCTS_SORT } from "../constants/ActionTypes";

export const changeProductsCategories = (udatedCategories) => async (dispatch) => {
  dispatch({
    type: CHANGE_PRODUCTS_CATEGORIES,
    payload: {
      categories: udatedCategories,
    },
  });
};

export const changeProductsSort = (updatedSort) => async (dispatch) => {
  dispatch({
    type: CHANGE_PRODUCTS_SORT,
    payload: {
      sort: updatedSort,
    },
  });
};
