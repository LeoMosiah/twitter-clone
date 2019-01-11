import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Settings } from './containers/SettingsForm';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/:user/settings' component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

Router.displayName = "Router";
