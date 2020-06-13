import { GET_CURRENCY_RATES } from "../constants/ActionTypes";
import {
  requestActionType,
  successActionType,
  failedActionType,
} from "../utils";
import CurrencyAPI from "../../api/currency";

// eslint-disable-next-line import/prefer-default-export
export const getCurrencyRates = () => async (dispatch) => {
  const checkIfPersistedCurrencyFresh = () => {
    const persistedState = JSON.parse(window.localStorage.getItem("persist:root"));
    const persistedCurrencyObj = JSON.parse(persistedState.currency);
    const { data: persistedCurrency, loaded_at: loadedAt } = persistedCurrencyObj;

    if (persistedCurrency && persistedCurrency.usd) {
      const DAY_IN_MS = 864e5;
      return Date.now() - loadedAt < DAY_IN_MS;
    }
    return false;
  };
  if (checkIfPersistedCurrencyFresh()) return;

  dispatch({
    type: requestActionType(GET_CURRENCY_RATES),
  });
  try {
    const currencyResult = await CurrencyAPI.getCurrencyRates();
    dispatch({
      type: successActionType(GET_CURRENCY_RATES),
      payload: {
        data: currencyResult.data,
        error: null,
      },
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: failedActionType(GET_CURRENCY_RATES),
      payload: {
        data: null,
        error: err,
      },
    });
  }
};
