import React, { Suspense, lazy } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "@components/Header";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/configureStore";
import "./common/styles/app.scss";

const Home = lazy(() => import("./router/pages/Home"));
const Cart = lazy(() => import("./router/pages/Cart"));

function App() {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="main-wrapper">
            <Header />
            <Suspense fallback={null}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

render(<App />, document.getElementById("app"));
