import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./layout/MainPage";
import DetailedProduct from "./layout/DetailedProduct";

/**
 * Defines the root application component.
 * Todo if have time: make a <Header />
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/products/:productId">
          <DetailedProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
