import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connectStore } from '../utils';
import { PatientListContainer } from '../pages/physician/patients-list';
import { PatientProfileContainer } from '../pages/physician/patient-profile';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/physician" component={PatientListContainer} />
      <Route exact path="/" component={PatientProfileContainer} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(Router);
