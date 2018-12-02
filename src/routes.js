import React from "react";
import { Route, Switch } from "react-router-dom";
import newProducts from "../src/components/newProducts";
import allProducts from "./components/allProducts";

export default (
  <Switch>
    <Route exact path="/new" component={newProducts} />
    <Route path="/products" component={allProducts} />
  </Switch>
);
