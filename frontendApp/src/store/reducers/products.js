import {
  requestActionType,
  successActionType,
  failedActionType,
} from "../utils";
import { GET_PRODUCTS } from "../constants/ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case requestActionType(GET_PRODUCTS):
      return {
        ...state,
        isLoading: true,
      };
    case successActionType(GET_PRODUCTS):
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    case failedActionType(GET_PRODUCTS):
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
