import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connectStore } from '../utils';
import PatientsListPage from '../pages/physician/patients-list/patients-list.container';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PatientsListPage} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(Router);
