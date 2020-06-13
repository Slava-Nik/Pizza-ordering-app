import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/index";

const isDev = process.env.NODE_ENV === "development";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "products"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default function (initialState = {}) {
  let store = {};
  if (isDev) {
    store = createStore(persistedReducer, initialState, composeWithDevTools(
      applyMiddleware(thunk),
    ));
  } else {
    store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
  }
  return {
    store,
    persistor: persistStore(store),
  };
}
