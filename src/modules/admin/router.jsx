import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { connectStore } from '../../utils';
import { LoginContainer } from './pages/login';

const Physician = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/admin/login" />
      <Route exact path="/admin/login" component={LoginContainer} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(Physician);
