import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import connectStore from '../utils/connectStore';
import IndexPage from '../pages/IndexPage';
import NextPage from '../pages/NextPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/next" component={NextPage} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(Router);
