import React from "react";
import NavigationObserver from "./navigationObserver";
import { Landing, Login, Filter } from "~/page/index";
import { Route, Switch } from "wouter";

const Router = () => (
  <Switch>
    <NavigationObserver>
      <Route path="/" isPrivate={false} component={Landing} />
      <Route path="/login" isPrivate={false} component={Login} />
      <Route path="/list" isPrivate={true} component={Filter} />
    </NavigationObserver>
  </Switch>
);

export default Router;
