import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

Router.displayName = "Router";
