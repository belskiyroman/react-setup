import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connectStore } from '../utils';
import Physician from './modules/physician';
import Staff from './modules/staff';
import { LoginContainer } from '../pages/physician/login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/physician" component={Physician} />
      <Route path="/staff" component={Staff} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(Router);
