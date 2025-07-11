import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/login/" />} />
    <Route path="/dashboard/" component={Dashboard} />
    <Route path="/signup/" component={Signup} />
    <Route path="/login/" component={Login} />
    <Route path="/forgot-password/" component={ForgotPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRouter;
