import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import getFromStore from './get-from-store.util';

const PrivateRoute = ({ component: Component, loginPath: pathname, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      getFromStore()
        ? <Component {...props} />
        : <Redirect to={{ pathname, state: { from: props.location } }} />
    )}
  />
);

export default PrivateRoute;
