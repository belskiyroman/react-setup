import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import connectStore from '../utils/connectStore';
import IndexPage from '../pages/index.page';
import NextPage from '../pages/next.page';
import PatientsListPage from '../pages/physician/patients-list.page';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/next" component={NextPage} />
      <Route path="/physician" component={PatientsListPage} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(Router);
