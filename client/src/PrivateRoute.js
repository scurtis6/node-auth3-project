import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";

import { useSelector } from "react-redux";

import Loading from "./Loading";
import Login from "./components/Login";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const { token } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={routeProps => {
        return token ? (
          <RouteComponent {...routeProps} />
        ) : !loading && !token ? (
          <Login />
        ) : (
          <Loading />
        );
      }}
    />
  );
}
