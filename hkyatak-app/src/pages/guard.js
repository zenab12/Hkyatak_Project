import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = AuthService.getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;