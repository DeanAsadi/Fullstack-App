import React from "react";
import { Route, Switch } from "react-router-dom";
import newProducts from "../src/components/newProducts";

export default (
  <Switch>
    <Route exact path="/new" component={newProducts} />
  </Switch>
);
