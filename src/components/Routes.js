import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/main">
        <Main />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
