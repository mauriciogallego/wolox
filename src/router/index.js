import React, { Suspense } from "react";
import NavigationObserver from "./navigationObserver";
import Spinner from '~/components/spinner/index'
import { Route, Switch } from "wouter";

const Landing = React.lazy(() => import("~/page/landing/index"));
const Login = React.lazy(() => import("~/page/login/index"));
const Filter = React.lazy(() => import("~/page/filter/index"));

console.log(Landing);
const Router = () => (
  <Switch>
    <Suspense fallback={<Spinner />}>
      <NavigationObserver>
        <Route path="/" isPrivate={false} component={Landing} />
        <Route path="/login" isPrivate={false} component={Login} />
        <Route path="/list" isPrivate={true} component={Filter} />
      </NavigationObserver>
    </Suspense>
  </Switch>
);

export default Router;
