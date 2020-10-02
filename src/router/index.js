import React from "react";
import NavigationObserver from "./navigationObserver";
import { Landing, Login, Filter } from "~/page/index";
import { Route } from 'wouter'
const Router = () => (
  <NavigationObserver>
    <Route path="/" isPrivate={false} exact component={Landing} />
    <Route path="/login" isPrivate={false} exact component={Login} />
    <Route path="/list" isPrivate={true} exact component={Filter} />
  </NavigationObserver>
);

export default Router;
