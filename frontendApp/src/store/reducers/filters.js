import { CHANGE_PRODUCTS_CATEGORIES, CHANGE_PRODUCTS_SORT } from "../constants/ActionTypes";

const INITIAL_STATE = {
  categories: [],
  sort: { by: "popularity", order: "desc" },
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_PRODUCTS_CATEGORIES:
      return {
        ...state,
        categories: payload.categories,
      };
    case CHANGE_PRODUCTS_SORT:
      return {
        ...state,
        sort: payload.sort,
      };
    default:
      return state;
  }
};
