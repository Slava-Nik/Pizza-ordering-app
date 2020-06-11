import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const isDev = process.env.NODE_ENV === "development";

export default function (initialState = {}) {
  if (isDev) {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
  }
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}