import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "@components/Header";
import Home from "./router/pages/Home";
import Cart from "./router/pages/Cart";
import configureStore from "./store/configureStore";


import "./common/styles/app.scss";

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <div className="main-wrapper">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

render(<App />, document.getElementById("app"));
