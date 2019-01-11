import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Settings } from "./containers/SettingsForm";
import { Home } from "./containers/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:user/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

Router.displayName = "Router";
