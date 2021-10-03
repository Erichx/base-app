import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import User from "./content/User";
import Home from "./content/Home";

const Routes = () => (
  <BrowserRouter basename={process.env.REACT_APP_SERVER_URL}>
    <Switch>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/user" exact component={User}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
