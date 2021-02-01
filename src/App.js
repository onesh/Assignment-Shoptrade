import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import CheckoutPage from "./components/Cart/CheckoutPage";

import "./App.css";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div>
      {" "}
      <div className="container-fluid" style={{ width: "80%" }}>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/checkout" component={CheckoutPage} />
          </Switch>
        </Provider>
      </div>
    </div>
  );
}

export default App;
