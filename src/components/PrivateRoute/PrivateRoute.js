import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAdmin, children, ...rest }) => {
  return isAdmin ? (
    <Route {...rest}> {children}</Route>
  ) : (
    <Redirect to="/auth" />
  );
};

export default PrivateRoute;
