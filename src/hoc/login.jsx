import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuth } from '../utils';

const defaultRedirect = { from: { pathname: '/' } };

const LoginHOC = Component => ({ location }) => {
  const { from } = location.state || defaultRedirect;

  if (isAuth()) {
    return <Redirect to={from} />;
  }

  return <Component />;
};

export default LoginHOC;
